create table tbl_comments(
	id int auto_increment,
    content varchar(300),
    createAt datetime default now(),
    updatedAt datetime default now(),
    userId int ,
    postId int ,
    constraint tbl_comments_pk primary key (id),
    constraint tbl_comments_userId_fk foreign key (userId) references tbl_users (uId),
    constraint tbl_comments_postId_fk foreign key (postId) references tbl_posts (pId),
);