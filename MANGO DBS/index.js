

const mongoose = require('mongoose');

// let url = "https://localhost:8080/user"

// mongoose.connect('mongodb://127.0.0.1:27017/test');



main().then(() => {
    console.log("connection sucessful");
})

.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// schema 

const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    age: Number
});


// new collction creatre 

const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema);

// insert data into mongo db 

// const user1 = new User({
//     name: "Rishi",
//     email: "rishishinde2003@",
//     age: 21
// });


// const user2 = new User({
//     name: "akshay",
//     email: "akshay@3@",
//     age: 21
// });


// user2
// .save()
// .then((res) => {
//     console.log(res);
// })

// .catch((err) =>{
//     console.log(err);
// });


User.insertMany([
    {name: "rishi", email:"rishi@", age: 21},
    {name: "aman", email:"aman@", age: 25},
    {name: "karam", email:"karan@", age: 26}
]).then((res) =>{
    console.log(res);
});