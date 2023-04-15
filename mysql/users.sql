create table tbl_users(
	uId int auto_increment, 
	uName varchar(50) not null,
    userName varchar(50) not null,
    email varchar(100) not null,
    uphone varchar(100) not null,
    uwebsite varchar(100) not null,
    uProvince varchar(100),
    uCity varchar(100),
    uDistrict varchar(100),
    uZipcode varchar(20),
    createdAt datetime,
    updatedAt datetime,
	constraint tbl_users_pk_uid primary key(uId)
);
drop table tbl_users;

select * from tbl_users;

insert into tbl_users (
	uName,
    userName,
    email,
    uphone,
    uwebsite,
    uProvince,
    uCity,
    udistrict,
    uZipcode,
    createdAt,
    updatedAt
)
values (
'이정도','asb1234','abc1234@naver.com', '010-1111-2222','https://www.naver.com' ,'경기도','성남시','분당구','대왕판교로 160','13525', '20230412','20230412'
);

