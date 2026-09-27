-- Run this in the Supabase SQL editor (or via the CLI) for your project.

create table if not exists rsvps (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  attending boolean not null,
  guest_count integer not null default 1,
  message text,
  created_at timestamptz not null default now()
);

alter table rsvps enable row level security;

-- Allow the site's anon key to submit new RSVPs, but not read/list them back.
create policy "Anyone can submit an RSVP"
  on rsvps for insert
  to anon
  with check (true);
