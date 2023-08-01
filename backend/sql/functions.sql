create or replace function create_favor(num_karma int,
                                        f_type favor_type,
                                        title text,
                                        description text,
                                        f_img_url text) returns text as $$
declare
  new_f_id int default 6;
begin
  insert into private.favors_transactions(f_id, poster_id)
  values (DEFAULT, (select id from public.profiles where auth.uid() = uid)) returning f_id into new_f_id;

  insert into private.favors_user(f_id, num_karma, f_type, title, description, f_img_url)
  values (new_f_id, num_karma, f_type, title, description, f_img_url);

  insert into private.favors_server(f_id, posted_at, f_status)
  values (new_f_id, now(), 'open');

  return 'Favor created.';
end;
$$ language plpgsql;