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