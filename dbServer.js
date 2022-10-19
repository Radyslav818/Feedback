const express = require("express")
const app = express()
const mysql = require("mysql")
require("dotenv").config()
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT
const db = mysql.createPool({
   connectionLimit: 100,
   host: DB_HOST,
   user: DB_USER,
   password: DB_PASSWORD,
   database: DB_DATABASE,
   port: DB_PORT
})
db.getConnection( (err, connection)=> {
   if (err) throw (err)
   console.log ("DB connected successful: " + connection.threadId)
})

const port = process.env.PORT
app.listen(port, 
()=> console.log(`Server Started on port ${port}...`))


app.use(express.json())
//middleware to read req.body.<params>

//ADD Feedback
app.post("/addFeedback", async (req,res) => {
const name = req.body.name;
const email = req.body.email;
const message = req.body.message;

db.getConnection( async (err, connection) => {
 if (err) throw (err)
 const sqlInsert = "INSERT INTO feedback VALUES (0,?,?,?)"
 const insert_query = mysql.format(sqlInsert,[name, email,message])


await connection.query (insert_query, (err, result)=> {
    connection.release()
    if (err) throw (err)
    console.log ("--------> Created new feedback")
    console.log(result.insertId)
    res.sendStatus(200)
  })
 

}) //end of db.getConnection()
}) //end of app.post()
