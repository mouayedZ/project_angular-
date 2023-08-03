// import app from backend/app
const app= require("./backend/app");
// server is listening on port 3000
// http://localhost:3000
app.listen(3000,() =>{

    console.log('express server is listening on prt 3000',)
} );
