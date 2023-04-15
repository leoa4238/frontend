select * from tbl_users;
select * from tbl_posts;

select u.userName, p.pTitle
from tbl_users u inner join tbl_posts p
on u.uId = p.userId
where u.uName = '이정도'

from tbl_users u left outer join tbl_posts p 
on u.uId - p.userId; 