export default function Form(req,res){
    let fname=req.body.fname
    let lname=req.body.lname
    res.json(fname+' '+lname)
}