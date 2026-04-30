## Lovesathi / Affinity Separation Inventory

This repo is now the active `Lovesathi` repo and should keep only matrimony-related code and schema.

### Affinity assets already preserved separately

- Separate repo: `liqui-flow/affinity`
- Separate Supabase project: `rlllelbvhvmpzstmpxfg`
- Dating data export bundle:
  - [C:\Users\Microsoft\Documents\New project\affinity-transfer\README.md](C:\Users\Microsoft\Documents\New project\affinity-transfer\README.md)
  - [C:\Users\Microsoft\Documents\New project\affinity-transfer\export-summary.json](C:\Users\Microsoft\Documents\New project\affinity-transfer\export-summary.json)

### Dating-side data exported from the current Lovesathi backend

- `dating_profile_full`
- `dating_likes`
- `dating_matches`
- `messages` rows where `match_type = 'dating'`
- `blocked_users` rows where `match_type = 'dating'`
- `user_reports` rows where `match_type = 'dating'`
- `profile-photos` bucket
- `profile-videos` bucket

### Lovesathi target state

This repo should keep only:

- matrimony onboarding
- matrimony discovery
- matrimony shortlist
- matrimony profile/edit profile
- matrimony matching/chat
- matrimony storage references
- matrimony SQL schema and policies

### Notes

- Affinity data is preserved before cleanup.
- Affinity repo exists before cleanup.
- Lovesathi cleanup can safely remove dating-only routes, services, onboarding, and schema references from this repo.
