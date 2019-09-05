use Jeju;
if exists (select * from sys.schemas where sys.schemas.name like 'jeju') 
	begin
		-- schema already exists, lets drop it 
		drop schema [Jeju];
		select 0;
	end
exec('create schema [Jeju]');
if exists(select * from information_schema.tables where table_name like 'Person' and table_schema like 'jeju')
	drop table [Jeju].[Person];
create table [Jeju].[Person] 
(
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[NAME] NVARCHAR(MAX) NOT NULL,
	[DESCRIPTION] NVARCHAR(MAX) NOT NULL,
	[LATITUDE] DECIMAL(9,6) NOT NULL,
	[LONGITUDE] DECIMAL(9,6) NOT NULL,
	[ROWVERSION] [timestamp] NOT NULL,
	CONSTRAINT [PK_KUSHALNODE] PRIMARY KEY ([ID])
);