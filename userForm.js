function userForm(req,res){
    res.write( `<form action="/submit" method= "post">
        <input type="text" name="Name" placeholder="Enter Name">
        <input type="text" name="email" placeholder="Enter Email">
        <button>Submit</button>
        </form>`
    )
}
module.exports= userForm;