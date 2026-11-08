-- Run this once in the Supabase SQL editor. It creates a view that joins
-- guest names to their soft/pre-RSVP answers, so you can check the latest
-- responses in Table Editor without writing SQL or looking up guest_id
-- values by hand.
--
-- Safe to re-run any time (e.g. after a schema change) -- it just replaces
-- the view definition, it doesn't touch any data.
--
-- NOT exposed to the public site: this is a plain view with no RLS grant
-- to the anon role, so it's only visible to people with access to this
-- Supabase project (e.g. via Table Editor), not to site visitors.

create or replace view soft_rsvp_status as
select
  g.full_name,
  p.contact_email,
  (r.id is not null) as has_responded,
  r.ceremony_reception_attending,
  r.welcome_party,
  r.driving_self,
  r.updated_at as responded_at
from guests g
join parties p on p.id = g.party_id
left join pre_rsvp_responses r on r.guest_id = g.id
order by has_responded asc, g.full_name asc;

-- After running this: Table Editor > soft_rsvp_status. Click the column
-- headers to sort -- e.g. click "has_responded" to group everyone who
-- hasn't answered yet at the top. Reloading the page always shows the
-- latest responses.
