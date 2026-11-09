-- Merges Eoin Flanagan and Valeria Flores into Paula, Patrick, and Klara
-- Flanagan's party, so any of the 5 names shows all 5 together.
--
-- Run this AFTER updates/2026-11-08-add-household-name.sql if you haven't
-- already run that one. Safe to re-run.

update guests set party_id = 'fb128c5a-2c5b-4302-9a3c-2daab641b0a4'
  where id in (
    'e0134ceb-8d7e-4d92-9ba7-22e06ab41cbf', -- Eoin Flanagan
    'cb29b298-563b-4c2c-bda0-a2b6a53d5875'  -- Valeria Flores
  );

-- Clean up the now-empty party Eoin and Valeria used to belong to.
delete from parties where id = '171ddd43-4154-4ad3-b1ad-2530c85b30b8';
