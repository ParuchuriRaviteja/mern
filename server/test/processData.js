const {getData} =require('./utils');

function processData(){
    return `Processed:${getData()}`;
    //Processed real data;
}

module.exports={processData};