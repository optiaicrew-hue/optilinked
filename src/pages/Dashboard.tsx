import { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import type { Session } from '@supabase/supabase-js'
import { Link2, Plus, LogOut, ExternalLink, Trash2, Copy, ChartBar as BarChart3, MousePointerClick, Calendar } from 'lucide-react'

interface LinkItem {
  id: string
  short_code: string
  original_url: string
  title: string | null
  clicks: number
  created_at: string
}

interface Props {
  session: Session | null
}

export default function Dashboard({ session }: Props) {
  const navigate = useNavigate()
  const [links, setLinks] = useState<LinkItem[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreate, setShowCreate] = useState(false)
  const [newUrl, setNewUrl] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newShortCode, setNewShortCode] = useState('')
  const [creating, setCreating] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [error, setError] = useState('')

  const fetchLinks = useCallback(async () => {
    if (!session?.user) return
    const { data } = await supabase
      .from('links')
      .select('*')
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false })
    setLinks(data ?? [])
    setLoading(false)
  }, [session])

  useEffect(() => {
    if (!session) {
      navigate('/login')
      return
    }
    fetchLinks()
  }, [session, navigate, fetchLinks])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!session?.user) return

    if (!newUrl.trim()) {
      setError('URL is required')
      return
    }

    setCreating(true)
    const shortCode = newShortCode.trim() || Math.random().toString(36).substring(2, 8)

    const { error } = await supabase.from('links').insert({
      user_id: session.user.id,
      short_code: shortCode,
      original_url: newUrl.trim(),
      title: newTitle.trim() || null,
      clicks: 0,
    })

    if (error) {
      setError(error.message.includes('duplicate') ? 'That short code is already taken' : error.message)
      setCreating(false)
      return
    }

    setNewUrl('')
    setNewTitle('')
    setNewShortCode('')
    setShowCreate(false)
    setCreating(false)
    fetchLinks()
  }

  const handleDelete = async (id: string) => {
    await supabase.from('links').delete().eq('id', id)
    setDeleteConfirm(null)
    fetchLinks()
  }

  const handleCopy = (shortCode: string, id: string) => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
    const url = `${supabaseUrl}/functions/v1/redirect/${shortCode}`
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const totalClicks = links.reduce((sum, l) => sum + l.clicks, 0)

  if (!session) return null

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Nav */}
      <nav className="border-b border-white/5 bg-neutral-950/80 backdrop-blur-lg sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <Link2 className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">OptiLinked</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-400 hidden sm:block">{session.user.email}</span>
            <button
              onClick={async () => {
                await supabase.auth.signOut()
                navigate('/')
              }}
              className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Links', value: links.length, icon: Link2, color: 'primary' },
            { label: 'Total Clicks', value: totalClicks.toLocaleString(), icon: MousePointerClick, color: 'accent' },
            { label: 'Avg. CTR', value: links.length ? (totalClicks / links.length).toFixed(1) : '0', icon: BarChart3, color: 'primary' },
            { label: 'This Month', value: links.filter(l => new Date(l.created_at).getMonth() === new Date().getMonth()).length, icon: Calendar, color: 'accent' },
          ].map((stat) => (
            <div key={stat.label} className="bg-neutral-900/50 border border-white/5 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <stat.icon className={`w-4 h-4 ${stat.color === 'primary' ? 'text-primary-400' : 'text-accent-400'}`} />
                <span className="text-xs text-neutral-500">{stat.label}</span>
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Your Links</h2>
          <button
            onClick={() => setShowCreate(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 rounded-lg text-sm font-medium transition-colors"
          >
            <Plus className="w-4 h-4" />
            Create Link
          </button>
        </div>

        {/* Create modal */}
        {showCreate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div className="w-full max-w-md bg-neutral-900 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">Create New Link</h3>
              <form onSubmit={handleCreate} className="space-y-4">
                {error && (
                  <div className="p-3 bg-error-500/10 border border-error-500/20 rounded-lg text-error-500 text-sm">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Destination URL</label>
                  <input
                    type="url"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    required
                    className="w-full px-3 py-2.5 bg-neutral-800 border border-white/10 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="https://example.com/your-long-url"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Title (optional)</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3 py-2.5 bg-neutral-800 border border-white/10 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="My awesome link"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Custom short code (optional)</label>
                  <div className="flex items-center bg-neutral-800 border border-white/10 rounded-lg overflow-hidden focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 transition-colors">
                    <span className="px-3 py-2.5 text-sm text-neutral-500 bg-neutral-800 border-r border-white/10 whitespace-nowrap">go/</span>
                    <input
                      type="text"
                      value={newShortCode}
                      onChange={(e) => setNewShortCode(e.target.value.replace(/[^a-zA-Z0-9-_]/g, ''))}
                      className="flex-1 px-3 py-2.5 bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none"
                      placeholder="auto-generated"
                    />
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => { setShowCreate(false); setError('') }}
                    className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={creating}
                    className="flex-1 py-2.5 bg-primary-600 hover:bg-primary-500 disabled:opacity-50 rounded-lg text-sm font-semibold transition-colors"
                  >
                    {creating ? 'Creating...' : 'Create Link'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Links list */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin h-8 w-8 border-2 border-primary-500 border-t-transparent rounded-full" />
          </div>
        ) : links.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-neutral-900 border border-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Link2 className="w-8 h-8 text-neutral-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">No links yet</h3>
            <p className="text-sm text-neutral-500 mb-6">Create your first short link to get started</p>
            <button
              onClick={() => setShowCreate(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 rounded-lg text-sm font-medium transition-colors"
            >
              <Plus className="w-4 h-4" />
              Create your first link
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {links.map((link) => (
              <div
                key={link.id}
                className="group bg-neutral-900/50 border border-white/5 hover:border-white/10 rounded-xl p-4 md:p-5 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <Link2 className="w-5 h-5 text-primary-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-primary-400">
                        {import.meta.env.VITE_SUPABASE_URL?.replace('https://', '')}/functions/v1/redirect/{link.short_code}
                      </span>
                    </div>
                    {link.title && <p className="text-sm font-medium mb-0.5">{link.title}</p>}
                    <p className="text-xs text-neutral-500 truncate">{link.original_url}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="inline-flex items-center gap-1 text-xs text-neutral-500">
                        <MousePointerClick className="w-3 h-3" />
                        {link.clicks} clicks
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-neutral-500">
                        <Calendar className="w-3 h-3" />
                        {new Date(link.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => handleCopy(link.short_code, link.id)}
                      className="p-2 text-neutral-500 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      title="Copy link"
                    >
                      {copiedId === link.id ? (
                        <span className="text-xs text-accent-400 font-medium">Copied!</span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <a
                      href={link.original_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-neutral-500 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      title="Open original URL"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    {deleteConfirm === link.id ? (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleDelete(link.id)}
                          className="px-2 py-1 bg-error-500/10 text-error-500 text-xs rounded hover:bg-error-500/20 transition-colors"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="px-2 py-1 bg-white/5 text-neutral-400 text-xs rounded hover:bg-white/10 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirm(link.id)}
                        className="p-2 text-neutral-500 hover:text-error-500 hover:bg-error-500/5 rounded-lg transition-colors"
                        title="Delete link"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
