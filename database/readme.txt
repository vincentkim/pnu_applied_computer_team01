201424560 Seonghwan part.

PostgreSQL

1.endpoint: wen01db.cie8iw6kcqg2.us-east-2.rds.amazonaws.com

2.port: 5432

3.username: wen06

4.DBname: postgres

5.password: 1q2w3e4r^^

Table
==
1. state(
  id:integer{PK},
  humidity:integer,
  temp:integer)

Insert Interface
==
1. require('./InsertDB')(data:Array([id:number,humidity:number,temp:number])): Promise 객체(data) => data를 state에 입력 

Query Interface
==
1. require('./QueryDB')(id:number) : Promise 객체(Array([humidity:number,temp:number])) => state에서 id에 맞는 humidity,temp 리턴

Update Interface
==
1. require('./UpdateDB')(data:Array([id:number,humidity:number,temp:number])): Promise 객체(data) => state에서 id에 맞는 humidity,temp 수정
