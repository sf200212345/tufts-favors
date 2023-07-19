--setup public favors tables, these can be accessed directly by users
--using id=6 to indicate that a user has been deleted to prevent issues

create table comments (
  comment_id int generated by default as identity primary key,
  f_id int references private.favors_user on delete cascade not null,
  owner_id int default 6 references public.profiles on delete set default not null,
  comment text not null,
  reply_to int references public.comments,
  edited boolean default false,

  constraint empty_comment check (char_length(comment) > 0)
);

create table likes (
  f_id int references private.favors_user on delete cascade not null,
  owner_id int references public.profiles on delete cascade not null,
  primary key (f_id, owner_id)
);

create table reviews (
  f_id int references private.favors_user on delete cascade not null primary key,
  owner_id int default 6 references public.profiles on delete set default not null,
  review text not null,
  edited boolean default false,

  constraint empty_review check (char_length(review) > 0)
);


--RLS and policies
alter table public.comments enable row level security;
alter table public.likes enable row level security;
alter table public.reviews enable row level security;

create policy "Comments are viewable by everyone." on public.comments for select using (true);
create policy "Likes are viewable by everyone." on public.likes for select using (true);
create policy "Reviews are viewable by everyone" on public.reviews for select using (true);

create policy "User can insert own comment." on public.comments
  for insert with check (owner_id in (
    select id from public.profiles where auth.uid() = uid
  ));
create policy "User can insert own like." on public.likes
  for insert with check (owner_id in (
    select id from public.profiles where auth.uid() = uid
  ));
create policy "User can insert own review." on public.reviews
  for insert with check (owner_id in (
    select id from public.profiles where auth.uid() = uid
  ));

create policy "User can update own comment." on public.comments
  for update using (owner_id in (
    select id from public.profiles where auth.uid() = uid
  ));
--doesn't make sense to update likes
create policy "User can update own review." on public.reviews
  for update using (owner_id in (
    select id from public.profiles where auth.uid() = uid
  ));

--comments can be 'deleted' through an rpc call because the actual entry cannot be deleted
create policy "User can delete own like." on public.likes
  for delete using (owner_id in (
    select id from public.profiles where auth.uid() = uid
  ));
--reviews cannot be deleted