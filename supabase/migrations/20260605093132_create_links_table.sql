/*
# Create links table (multi-user, owner-scoped)

1. New Tables
- `links`
  - `id` (uuid, primary key)
  - `user_id` (uuid, not null, defaults to auth.uid(), references auth.users)
  - `short_code` (text, not null, unique — the path segment used in short URLs)
  - `original_url` (text, not null — the destination URL)
  - `title` (text, nullable — optional display name)
  - `clicks` (integer, not null, default 0 — click counter)
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `links`.
- Owner-scoped CRUD: each authenticated user can only access rows they own.
- Anon users can NOT read or write links (requires auth).

3. Indexes
- Unique index on `short_code` for fast lookups by the redirect function.
- Index on `user_id` for dashboard queries.
*/

CREATE TABLE IF NOT EXISTS links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  short_code text NOT NULL,
  original_url text NOT NULL,
  title text,
  clicks integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  UNIQUE (short_code)
);

ALTER TABLE links ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_links" ON links;
CREATE POLICY "select_own_links" ON links FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_links" ON links;
CREATE POLICY "insert_own_links" ON links FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_links" ON links;
CREATE POLICY "update_own_links" ON links FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_links" ON links;
CREATE POLICY "delete_own_links" ON links FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_links_short_code ON links (short_code);
CREATE INDEX IF NOT EXISTS idx_links_user_id ON links (user_id);
