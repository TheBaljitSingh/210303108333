const app = require("./app");
//other connextions

const port = process.env.PORT || 3000;

const server = app.listen(port, (err)=>{
    if(err){
        console.log("error is present "+err);
    }
    console.log(`server is working on http://localhost:${port}`);
})
