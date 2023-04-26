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
    uStreet varchar(100),
    uZipcode varchar(20),
    createdAt datetime,
    updatedAt datetime,
	constraint tbl_users_pk_uid primary key(uId)
);


select * from tbl_users;

insert into tbl_users (
	uName,
    userName,
    email,
    uphone,
    uwebsite,
    uProvince,
    uCity,
    uDistrict,
     uStreet,
    uZipcode,
    createdAt,
    updatedAt
)
values (
'박상민','asb1234','acd1234@naver.com', '010-1111-2222','https://www.naver.com' ,'경기도','성남시','분당구','대왕판교로 160','13525', '20230412','20230412'
);



create table tbl_posts(
   pId int auto_increment,
    pTitle varchar(300) not null,
    pContent varchar(500) not null,
    createdAt datetime default now(),
    updatedAt datetime default now(),
    userId int,
    constraint tbl_posts_pk_pId primary key (pId),
    constraint tbl_posts_fk_userId foreign key (userId) references tbl_users (uId)
);

insert into tbl_posts
(pTitle, pContent, userId)
values
('첫번째 게시글!', '오늘 처음으로 게시글을 작성했어요!', 2);

insert into tbl_posts
(pTitle, pContent, userId)
values
('안녕하세요', '오늘 처음으로 게시글을 작성했어요!', 3);

insert into tbl_posts
(pTitle, pContent, userId)
values
('게시글 써볼까?', '오늘 처음으로 게시글을 작성했어요!', 1);
select * from tbl_posts;



select * from tbl_users;

