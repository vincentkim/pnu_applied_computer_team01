//insertDB.js에서 필요한 query text 리턴, 매개변수는 insertDB.js와 동일
module.exports=function(data){
    var result;
    const tableName=data.tableName;
    switch (tableName){
        case 'user_info':{
            const email=data.email;
            const arduinos=data.arduinos;
            const name=data.name;
            const password=data.password;
            result = 'INSERT INTO '+tableName+' VALUES(\''+email+'\',ARRAY'+arduinos+',\''+name+'\',\''+password+'\',CURRENT_TIMESTAMP(0)+interval \'17hour\')'
            break;
        }
        case 'data':{
            const id=data.id;
            const humidity=data.humidity;
            const temp=data.temp;
            result='INSERT INTO '+tableName+' VALUES(\''+id+'\',\''+humidity+'\',\''+temp+'\',CURRENT_TIMESTAMP(0)+interval \'17hour\')';
            break;
        }
        case 'admin_info':{
            const email=data.email;
            const name=data.name;
            const password=data.password;
            result='INSERT INTO '+tableName+' VALUES(\''+email+'\',\''+name+'\',\''+password+'\')';
            break;
        }
        default:
            err('There is no '+ tableName+' table');
    }
    return new Promise(function(resolve,reject){
        resolve(result)
    });
}