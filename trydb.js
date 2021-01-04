const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL= 'mongodb://127.0.0.1:27017';
const db = "product";

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    //callback function called when connection done
 
    if(error){
        console.log("Connection failed...");
    }
    else{
        console.log("Connection Successful...");
        
        const dbC = client.db(db);
        /*dbC.collection('pmaster').insertOne({
              pCode:1002,
              pName:'Orange'
        },(error,result)=>{
            if(error){
                return console.log("Could not insert");
            }
        })  */
        dbC.collection('pmaster').find().toArray((error, data)=>{
            console.log(data);
        })   

    }
 });