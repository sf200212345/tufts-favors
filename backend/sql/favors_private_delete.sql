--delete private favors tables
drop table if exists private.favors_user;
drop policy if exists "User can delete own transaction IF f_status is open" on private.favors_transactions;
drop table if exists private.favors_server;
drop table if exists private.favors_transactions;

--types
drop type if exists favor_type;
drop type if exists favor_status;