drop trigger if exists on_profile_insert_stats on public.profiles;
drop function if exists public.insert_stats;

drop table if exists public.stats;

drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user;

drop table if exists public.profiles;

-- deletes all but the test accounts
delete from auth.users where email !~ '^(test)(1|2|3|4|5|6).*';