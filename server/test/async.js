//how can perform the test on async
//function
function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000);
}
//call admin after 4 seconds
module.exports=fetchData;