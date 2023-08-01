--returns the amount of karma each user has
create or replace view user_karma as
--1000 is the initial amount of karma each user has, the current amount of karma they have is calculated from this
select profiles.uid, (1000 + karma.net_karma) as num_karma
from public.profiles as profiles, (
  select id, sum(num_karma) as net_karma
  from (
    --since poster loses money
    (select t.poster_id as id, (-1 * sum(f.num_karma)) as num_karma
    from private.favors_transactions as t, private.favors_user as f
    where t.f_id = f.f_id
    group by t.poster_id)
    union all
    (select t.completer_id as id, sum(f.num_karma) as num_karma
    from private.favors_transactions as t, private.favors_user as f
    where t.f_id = f.f_id
    group by t.completer_id)
  ) as temp group by id
) as karma
where profiles.id = karma.id;