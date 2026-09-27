-- Run this in the Supabase SQL editor for your project.
--
-- This replaces the earlier simple rsvps table with a guest-list-aware
-- version: guests are uploaded ahead of time (Table Editor > guests > Insert
-- > Import data via CSV), and the RSVP form looks a guest up by name to
-- decide whether to show the Rehearsal Dinner question. Everyone gets
-- Welcome Party and Ceremony & Reception.
--
-- Safe to re-run: it replaces the old rsvps table. Any test RSVPs submitted
-- before this point will be cleared.

drop table if exists rsvps;

create table if not exists guests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  invited_to_rehearsal_dinner boolean not null default false,
  plus_one_allowed boolean not null default false,
  created_at timestamptz not null default now()
);

create table rsvps (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid not null references guests(id) unique,
  email text,
  welcome_party_attending boolean not null,
  ceremony_reception_attending boolean not null,
  rehearsal_dinner_attending boolean,
  bringing_guest boolean not null default false,
  guest_of_name text,
  message text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table guests enable row level security;
alter table rsvps enable row level security;

-- The public site needs to look guests up by name to know which events to show.
create policy "Anyone can look up guests by name"
  on guests for select
  to anon
  using (true);

-- The public site needs to submit and update RSVPs (so a guest can revisit
-- and change their answer).
create policy "Anyone can submit an RSVP"
  on rsvps for insert
  to anon
  with check (true);

create policy "Anyone can update an RSVP"
  on rsvps for update
  to anon
  using (true);

create policy "Anyone can read RSVPs to check for an existing one"
  on rsvps for select
  to anon
  using (true);
