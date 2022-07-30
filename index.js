//console.log('hello');

//const somehing = require('somelibrary')
const express = require('express');
const app = express()
const mongoose = require('mongoose');

require('dotenv').config();

//function defination
async function main(){
    let user = process.env.USER
    let passwd = process.env.PASS

   return await mongoose.connect(`mongodb+srv://${user}:${passwd}@cluster0.bmcybml.mongodb.net/?retryWrites=true&w=majority`)
}
//function callling
let po = main();

//promiss chain
po.then(d=>{
    console.log('connected');

    //first we have to difine schema and
    //object.method(actual argument)
    const classmates = mongoose.model('classmates',{name:String}) //model method returning a class


    //collection table
    const clsmt1 = new classmates({name:'anjali'})
    let po2 = clsmt1.save()

    const clsmt2 = new classmates({name:'payal',name:'kiran'})
    let po3 = clsmt2.save()


    po2.then(()=>{console.log('saved')}).catch()
}).catch(e=>{
    console.log('error')
});


let port = process.env.PORT
app.listen(port,()=>{
    console.log(`listening on ${port}`)
})