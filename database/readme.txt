201424560 Seonghwan part.

PostgreSQL

1.endpoint: wen01db.cie8iw6kcqg2.us-east-2.rds.amazonaws.com

2.port: 5432

3.username: wen06

4.DBname: postgres

5.password: 1q2w3e4r^^

#Table
==
1.user_info(
  email:VARCHAR(320){PK},
  id:integer{UNIQUE},
  name:VARCHAR(15),
  password:VARCHAR(30))
  
2. state(
  id:integer{PK}{REFERENCE user_info(id)},
  humidity:integer,
  temp:integer)

3. admin_info(
    email:VARCHAR(320){PK},
    name:VARCHAR(15),
    password:VARCHAR(100))

4. session(): 외부 모듈 [table.sql](https://github.com/voxpelli/node-connect-pg-simple/blob/HEAD/table.sql)

#Query Interface
==
1. require('./QueryDB')(data:Array([tableName:string,id:any])) : Promise 객체(Array([all column]))
=> tableName에서 id에 맞는 tuple의 모든 컬럼 리턴, id는 그 table의 PK 


#Insert Interface
==
1. require('./InsertDB')(data:Array([tableName:string, ...])): Promise 객체(data)
=> tableName마다 다른 data 형식으로 입력(모든 컬럼) 


#Update Interface
==
1. require('./UpdateDB')(data:Array([tableName:String,id:any,...])): Promise 객체(data) 
=> tableName에서 id에 맞는 tuple의 모든 컬럼 수정, id는 그 table의 PK
