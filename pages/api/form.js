let mongoClient=require('mongodb').MongoClient
let url='mongodb+srv://bahaa1985:2640077@cluster0.nes5a.mongodb.net/?retryWrites=true&w=majority'



export default async function Form(req,res){
    let fname=req.body.fname
    let count=req.body.lname
    // res.json(fname+' '+lname)
    await mongoClient.connect(url,(err,db)=>{
        if(err) throw err  
        let db1= db.db('Teams')
        console.log('db name: ',db1.databaseName)
        // db1.collection("Teams").find({name: 'Al ahly'}).toArray().then((result)=>{
        //     // if(err) console.log('err',err)
        //     console.log('collections:',result)
        //     db.close()
        // }).catch((err)=>{
        //     console.lo('error:',err)
        // })
       let myObj={name:fname,titles:count}
       db1.collection("Teams").insertOne(myObj,(err,result)=>{
        if (err) throw err
        // console.log(fname +" document inserted");
        res.json(result)
        db.close()
       })
        
    })
    
   
}