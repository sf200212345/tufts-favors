create or replace function create_favor(num_karma int,
                                        f_type favor_type,
                                        title text,
                                        description text,
                                        f_img_url text) returns json as $$
declare
  new_f_id int default 6;
begin
  insert into private.favors_transactions(f_id, poster_id)
  values (DEFAULT, (select id from public.profiles where auth.uid() = uid)) returning f_id into new_f_id;

  insert into private.favors_user(f_id, num_karma, f_type, title, description, f_img_url)
  values (new_f_id, num_karma, f_type, title, description, f_img_url);

  insert into private.favors_server(f_id, posted_at, f_status)
  values (new_f_id, now(), 'open');

  return json_build_object('f_id', new_f_id);

  exception when others then 
    raise exception 'Error creating favor'
    using detail = sqlerrm,
          hint = sqlstate;

end;
$$ language plpgsql;

--make function that calculates how much karma a user has every time inserted/updated/deleted
--same with one that calculates how many people a user has helped