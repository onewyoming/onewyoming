use Wonju;
drop table if exists Person;
create table Person 
(
	ID int identity(1,1) primary key,
	LEGAL_NAME nvarchar(max),
	PREFERRED_NAME nvarchar(max)
);
