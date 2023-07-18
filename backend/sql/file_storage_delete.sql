-- need to delete in reverse
drop policy if exists "Avatar images are publicly accessible." on storage.objects;
drop policy if exists "Anyone can upload an avatar." on storage.objects;
delete from storage.buckets where id = 'avatars';