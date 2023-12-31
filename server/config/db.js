const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const connectToDataBase = () =>{
    mongoose.connect(process.env.MONGO_URL).then((conn)=>{
        console.log(`Connect To DataBase : ${conn.connection.host}`)
    })
    .catch((error)=>{
        console.log(error.message);
        process.exit(1)
    })
}

module.exports = connectToDataBase