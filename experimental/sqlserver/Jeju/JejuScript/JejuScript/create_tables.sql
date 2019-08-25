use Jeju;
if exists (select * from sys.schemas where sys.schemas.name like 'jeju') 
	begin
		-- schema already exists, lets drop it 
		drop schema [Jeju];
		select 0;
	end
exec('create schema [Jeju]');
