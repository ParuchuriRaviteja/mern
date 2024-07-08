var value=10;
let x=90;
console.log(value,x);
const a=10;
function fun(z){
    console.log(z*z);
}
//Arror function -> short syntax to create a fun
var func_value=function(z){
    return z*z;
}
//=>Arror function
const y=(a,b) =>{return a+b}
var a1=["krish","raju","ravi"]
var a2=["apple","mango","orange"]
//spread operator 
//expand the itterable
const expand=[...a1,...a2]
for(i of expand){
    console.log(i)
}
//create class in js6
class Data{
    constructor(a,b){
        this.a=a;
        this.b=b;
        console.log(a+b);
        return a+b;
    }
}

let obj=new Data(10,15);
console.log(obj);
//promises it like js obj which links preduing and consuming
const MyPromise =new Promise(function(a,b){return a+b})
const xy=MyPromise.then()
console.log(xy)
//we want a block to wait to execute a code
//command npm install -g npm
//command npx create-react-app client(name) 
//Two types of components are functional(create by function) and class component(create by class)
//state allow store values
//hooks:to implement property without using any class
//state hooks : it is reducer
//effecthook:useeffecthooks,side effect on it take a parameters function,dependency
//rooter it allow to do share multiple compenents throught a single document
//browser to store as stack
/* 
//import {BrowserRouter as Router
//Routes,Link,Route} from 'react-router-dom'
*/
//spread operator,Array using state,map function on react
//tailwind css is a implementation of css framwork it gives many class are pre defined
//day-5
//npm i nodemon -v
/*http method
1.get-data can visable on the url
2.post-send the resource,data can not visable on the url
3.put-update the data
*/
/*Axios-it is libary it provide the http methods
npm i axios
*/



//express.js
/*
express is wraper0 class 
//npm i express
it is server side scripting language 
it help to intercept,it can process the data from client
adv:it use the concept of middle ware and roting
it is use commiuating bidirectial
roting is help to transfer the one file to another file
exprees the request library
//postman
it is used test api end point tool.
the api intercepting and it check the code faster
To send request to server
//middle ware
server would request in trem of cookies
it intercept the resquest before the process the data
the level is application level middleware app,post,get,put.... the app.use() that handle all request
it have 3 parameter and next() middle ware
it can automatically 
chaining in the one middle ware to multiple middle ware
//Roaters
*/

/*
day-7
session is used jwt(java web tocken) 
session is stored in server
cookies are store in client side
cookies are store throughout the browers alive it not in a store in application
npm i express-session




//mangoDB
mongosh "mongodb+srv://cluster0.sjkn5.mongodb.net/" --apiVersion 1 --username ravitejachowdary266
passwaord:Raviteja369
->db.student.find()
db.students.deleteMany()
db.students.getIndexes()
foreach method is used inside our cursor


mongodb+srv://ravitejachowdary266:Raviteja369@cluster0.sjkn5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/

/*
Day-8

restfull api:any interaction call by the server(post,get,put,delete,patch)
it is use principal of Soap(simple object access protocol)
it can be respones by http operation
mongodb+srv://ravitejachowdary266:Raviteja369@cluster0.sjkn5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/
/*
Day-9
to install node server
npm init
npm i apollo-server-express graphql graphql-tools
*/

/*

*/