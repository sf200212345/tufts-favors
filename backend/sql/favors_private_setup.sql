--setup private favors tables
--using id=6 to indicate that a user has been deleted to prevent issues

--types
create type favor_status as enum ('open', 'closed', 'in progress', 'in review');

--all server-inputted information for favors
create table private.favors_server (
  f_id int references public.favors_user on delete cascade not null primary key,
  poster_id int default 6 references public.profiles on delete set default not null,
  completer_id int default 6 references public.profiles on delete set default not null,
  posted_at timestamp with time zone not null,
  completed_at timestamp with time zone,
  reviewed_at timestamp with time zone,
  f_status favor_status not null,

  constraint same_user check (poster_id != completer_id or poster_id = 6)
);

--grant public access through postgres functions
--grant access to schema
grant usage on schema private to public;
--grant access to table
grant select, insert, update(completer_id, completed_at, reviewed_at, f_status), delete on private.favors_server to public;