201424560 Seonghwan part.

PostgreSQL

endpoint: wen01db.cie8iw6kcqg2.us-east-2.rds.amazonaws.com
port: 5432
username: wen06
DBname: postgres
password: 1q2w3e4r^^

# Table
--------------------------------------------------------------------------
1. state(id:integer{PK},humidity:integer)

# 입력 인터페이스
--------------------------------------------------------------------------
1. require('./InsertDB')(data:Array([id,humidity])): Promise 객체(data) => data를 state에 입력 

# 검색 인터페이스
--------------------------------------------------------------------------
1. require('./QueryDB')(id:number) : Promise 객체(humidity) => state에서 id에 맞는 humidity 리턴
