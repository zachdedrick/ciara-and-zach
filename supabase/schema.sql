-- Run this in the Supabase SQL editor for your project.
--
-- Party-based guest list: guests are grouped into parties (couples,
-- families, "+guest" pairs), and the RSVP form looks a guest up by name,
-- then shows the WHOLE party so one person can answer for everyone --
-- while each person still gets their own independent answer per event.
--
-- This replaces the earlier flat, per-guest-only schema. Safe to re-run:
-- it drops and recreates rsvps and pre_rsvp_responses. Running it against
-- a project that still has the old guests table will fail on the
-- `parties` foreign key below -- drop the old `guests` table first (or
-- just run this against a fresh project before importing the guest list).

drop table if exists rsvps;
drop table if exists pre_rsvp_responses;
drop table if exists guests;
drop table if exists parties;

create table parties (
  id uuid primary key default gen_random_uuid(),
  contact_email text,
  message text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table guests (
  id uuid primary key default gen_random_uuid(),
  party_id uuid not null references parties(id) on delete cascade,
  full_name text not null,
  invited_to_rehearsal_dinner boolean not null default false,
  created_at timestamptz not null default now()
);

create index guests_party_id_idx on guests(party_id);

-- One row per guest per event they've answered for.
create table rsvps (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid not null references guests(id) on delete cascade unique,
  welcome_party_attending boolean,
  ceremony_reception_attending boolean,
  rehearsal_dinner_attending boolean,
  updated_at timestamptz not null default now()
);

-- The lightweight pre-RSVP questionnaire, now tied to real guests instead
-- of free-text names, so a "no" here reliably identifies who's definitely
-- not coming (so we can invite off the waitlist with confidence).
create table pre_rsvp_responses (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid not null references guests(id) on delete cascade unique,
  ceremony_reception_attending text check (ceremony_reception_attending in ('yes', 'no', 'unsure')),
  welcome_party text check (welcome_party in ('yes', 'unsure', 'no')),
  driving_self text check (driving_self in ('yes', 'no')),
  updated_at timestamptz not null default now()
);

alter table parties enable row level security;
alter table guests enable row level security;
alter table rsvps enable row level security;
alter table pre_rsvp_responses enable row level security;

-- The public site needs to look guests up by name, and read/update their
-- party's shared contact info and everyone's existing answers.
create policy "Anyone can look up guests by name" on guests for select to anon using (true);
create policy "Anyone can read party contact info" on parties for select to anon using (true);
create policy "Anyone can update party contact info" on parties for update to anon using (true);

create policy "Anyone can submit an RSVP" on rsvps for insert to anon with check (true);
create policy "Anyone can update an RSVP" on rsvps for update to anon using (true);
create policy "Anyone can read RSVPs to check for existing ones" on rsvps for select to anon using (true);

create policy "Anyone can submit a pre-RSVP response" on pre_rsvp_responses for insert to anon with check (true);
create policy "Anyone can update a pre-RSVP response" on pre_rsvp_responses for update to anon using (true);
create policy "Anyone can read pre-RSVP responses to check for existing ones" on pre_rsvp_responses for select to anon using (true);

-- After running this, import the guest list: see supabase/seed_guests.sql.
