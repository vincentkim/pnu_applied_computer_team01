const getAll=require('./InterfaceDB/getAll');
const refine=require('./InterfaceDB/refineTimeFormat');
//data table의 모든 tuple 객체들중 가장 최근에 갱신된 tuple의 배열 리턴, 매개변수 data가 존재한다면 data.arduino_id에 맞는 tuple들만 찾음
module.exports=async function(data){
    var queryText={};
    if(data){
        queryText={
            text:"SELECT * FROM ( SELECT  id , humidity , temp , createdat, ROW_NUMBER() OVER (PARTITION BY id ORDER BY createdat desc) AS RankNo FROM data ) T WHERE RankNo = 1 and id = $1",
            values:[data.arduino_id]
        }
    }else{
        queryText={
            text:"SELECT * FROM ( SELECT  id , humidity , temp , createdat, ROW_NUMBER() OVER (PARTITION BY id ORDER BY createdat desc) AS RankNo FROM data ) T WHERE RankNo = 1",
        }
    }
    var result=await getAll(queryText);
    result=await refine(result);
    return new Promise(function(resolve,reject){
            resolve(result)
    })
}