#명령어를 주석공간
#은 주석을 의미한다
#테이블 만들기
create table test01( #table까지 소괄호 안쪽에다가 넣어줘야한다
	a int,
    b double,
    c varchar(100), #mysql에서는 문자만 크기를 정해주면된다 '문자를 저장할 수 있는데, 100byte만큼만 저장할 수 있다.'
    d datetime
);

# 데이터 추가
insert into test01 (a, b, c, d)
values(110, 5.1, '김경희', '20230410') ;

#데이터 조회
select a, c from test01;

# *(all)을 사용하면 전체 컬럼 조회 가능
select * from test01;

#행골라내기
select *
from test01
where a > 50;

# 자바스크립트와 다른점은 
# 같은조건 혹은 서로 다른 조건
# javascript : a===10 a !==10
# sql : a = 10 a<>10 , a != 10
select *
from test01
where a = 10;

select *
from test01
where a <> 10; #서로 다른 조건


# 자바스크립트 && 는 and
# 자바스크립트 || 은 or
# 자바스크립트 !은 not

select *
from test01
where a >= 11 and c = '홍길동';


#행수정
update test01
set c = '김길동', b = 10.1
where a = 110;

select * from test01;

delete from test01
where a = 110;

#테이블삭제
drop table test01;


