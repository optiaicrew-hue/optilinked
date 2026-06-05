import { Link } from 'react-router-dom'
import { Link2, ChartBar as BarChart3, Zap, Shield, ArrowRight, Globe, MousePointerClick } from 'lucide-react'
import type { Session } from '@supabase/supabase-js'

interface Props {
  session: Session | null
}

export default function Landing({ session }: Props) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <Link2 className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">OptiLinked</span>
          </Link>
          <div className="flex items-center gap-4">
            {session ? (
              <Link
                to="/dashboard"
                className="px-4 py-2 bg-primary-600 hover:bg-primary-500 rounded-lg text-sm font-medium transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link to="/login" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-500 rounded-lg text-sm font-medium transition-colors"
                >
                  Get started
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-xs font-medium mb-8">
            <Zap className="w-3 h-3" />
            Smart link management for modern teams
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Shorten. Track.
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Optimize.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Create branded short links, track every click with detailed analytics, and optimize your marketing campaigns — all in one powerful dashboard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {session ? (
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 rounded-xl text-sm font-semibold transition-colors"
              >
                Go to Dashboard <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 rounded-xl text-sm font-semibold transition-colors"
                >
                  Start for free <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition-colors"
                >
                  Sign in
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Hero visual */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-error-500" />
              <div className="w-3 h-3 rounded-full bg-warning-500" />
              <div className="w-3 h-3 rounded-full bg-success-500" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-neutral-800/50 rounded-xl p-4">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Link2 className="w-5 h-5 text-primary-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">optilinked.io/go/launch</p>
                  <p className="text-xs text-neutral-500 truncate">https://www.example.com/very-long-url/campaign/2024/landing...</p>
                </div>
                <div className="flex items-center gap-2 text-accent-400">
                  <MousePointerClick className="w-4 h-4" />
                  <span className="text-sm font-semibold">2,847</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-neutral-800/50 rounded-xl p-4">
                <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                  <Link2 className="w-5 h-5 text-accent-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">optilinked.io/go/docs</p>
                  <p className="text-xs text-neutral-500 truncate">https://docs.example.com/getting-started/installation/guide...</p>
                </div>
                <div className="flex items-center gap-2 text-accent-400">
                  <MousePointerClick className="w-4 h-4" />
                  <span className="text-sm font-semibold">1,234</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything you need to manage links
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Powerful features designed for marketers, creators, and teams who need reliable link infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Link2,
                title: 'Branded Short Links',
                description: 'Create memorable, custom short links that reinforce your brand with every share.',
                color: 'primary',
              },
              {
                icon: BarChart3,
                title: 'Advanced Analytics',
                description: 'Track clicks, referrers, devices, locations, and more with real-time analytics dashboards.',
                color: 'accent',
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Instant redirects with globally distributed infrastructure for zero-latency link resolution.',
                color: 'primary',
              },
              {
                icon: Shield,
                title: 'Secure & Reliable',
                description: 'Enterprise-grade security with fraud detection, bot filtering, and 99.99% uptime.',
                color: 'accent',
              },
              {
                icon: Globe,
                title: 'Geo-targeting',
                description: 'Route visitors to different destinations based on their geographic location automatically.',
                color: 'primary',
              },
              {
                icon: MousePointerClick,
                title: 'UTM Management',
                description: 'Build and manage UTM parameters consistently across all your marketing campaigns.',
                color: 'accent',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group bg-neutral-900/50 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  feature.color === 'primary' ? 'bg-primary-500/10' : 'bg-accent-500/10'
                }`}>
                  <feature.icon className={`w-6 h-6 ${
                    feature.color === 'primary' ? 'text-primary-400' : 'text-accent-400'
                  }`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10M+', label: 'Links created' },
              { value: '500M+', label: 'Clicks tracked' },
              { value: '99.99%', label: 'Uptime' },
              { value: '<50ms', label: 'Avg. redirect' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary-400 mb-1">{stat.value}</p>
                <p className="text-sm text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to optimize your links?
          </h2>
          <p className="text-neutral-400 mb-8">
            Join thousands of teams using OptiLinked to drive better results from every link they share.
          </p>
          {session ? (
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 rounded-xl text-sm font-semibold transition-colors"
            >
              Go to Dashboard <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 rounded-xl text-sm font-semibold transition-colors"
            >
              Get started for free <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-primary-500 rounded-lg flex items-center justify-center">
              <Link2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold">OptiLinked</span>
          </div>
          <p className="text-xs text-neutral-600">&copy; 2026 OptiLinked. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
