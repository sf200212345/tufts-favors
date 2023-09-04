--functions
drop function if exists create_favor;

--views
drop view if exists user_karma;

--delete public favors tables
drop table if exists reviews;
drop table if exists likes;
drop table if exists comments;

--drop all overlapping policies
drop policy if exists "Poster can update own user favor info." on public.favors_user;
drop policy if exists "User can delete own favor user info IF f_status is open" on public.favors_user;

-- drop favor tables
drop table if exists private.favors_server;
drop table if exists public.favors_user;

--types
drop type if exists favor_type;
drop type if exists favor_status;

drop trigger if exists on_profile_insert_stats on public.profiles;
drop function if exists public.insert_stats;

drop table if exists public.stats;

drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user;

drop table if exists public.profiles;

-- deletes all but the test accounts
delete from auth.users where email !~ '^(test)(1|2|3|4|5|6).*';