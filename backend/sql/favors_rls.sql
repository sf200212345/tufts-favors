--rls policies for favors
alter table public.favors_user enable row level security;
alter table private.favors_server enable row level security;

create policy "User info for favors are viewable." on public.favors_user for select using (true);
create policy "Server info for favors are viewable." on private.favors_server for select using (true);

create policy "Anyone can insert onto favors_user." on public.favors_user for insert
  with check (true);
-- can only do this because the private schema is not accessible through the API
create policy "User can insert own server info" on private.favors_server for insert
  with check (poster_id in (
    select id from public.profiles where auth.uid() = uid
  ));

create policy "Poster can update own user favor info." on public.favors_user for update
  using (f_id in (
    select s.f_id from public.profiles as p, private.favors_server as s
    where auth.uid() = p.uid and p.id = s.poster_id
  ));
-- either 1. the poster is changing info, 2. there is no completer so completer_id = 6, or 3. the completer is changing info
create policy "Poster and completer can update server favor info." on private.favors_server for update
  using ((poster_id in (
    select id from public.profiles where auth.uid() = uid
  )) or (completer_id = 6) or (completer_id in (
    select id from public.profiles where auth.uid() = uid
  )));

create policy "User can delete own favor user info IF f_status is open" on public.favors_user for delete
  using ((f_id in (
    select s.f_id from public.profiles as p, private.favors_server as s
    where auth.uid() = p.uid and p.id = s.poster_id
  )) and ('open' in (
    select f_status from private.favors_server as s where s.f_id = f_id
  )));

create policy "User can delete own favor server info IF f_status is open" on private.favors_server for delete
  using ((poster_id in (
    select id from public.profiles where auth.uid() = uid
  )) and (f_status = 'open'));