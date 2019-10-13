use Wonju;
create table Person 
(
	ID int identity(1,1) primary key,
	LEGAL_NAME nvarchar(max),
	PREFFERRED_NAME nvarchar(max)
);
