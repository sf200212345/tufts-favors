--functions
drop function if exists create_favor;

--views
drop view if exists user_karma;

--delete public favors tables
drop table if exists reviews;
drop table if exists likes;
drop table if exists comments;

--delete private favors tables
drop table if exists private.favors_user;
drop policy if exists "User can delete own transaction IF f_status is open" on private.favors_transactions;
drop table if exists private.favors_server;
drop table if exists private.favors_transactions;

--types
drop type if exists favor_type;
drop type if exists favor_status;

--delete profiles table
drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user;

drop table if exists public.profiles;

-- deletes all but the test accounts
delete from auth.users where email !~ '^(test)(1|2|3|4|5|6).*';