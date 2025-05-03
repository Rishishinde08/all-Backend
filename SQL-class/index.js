const { faker } = require('@faker-js/faker');


// sql require 
const mysql = require('mysql2');



// const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rishi',
  database: 'rishi_app' 
});





// show table of sql 

try{
    connection.query("SHOW TABLES" ,(err, result) =>{

        if (err) throw err;
    
        console.log(result);
    });

}catch(err) {
    console.log(err);
}


connection.end();


 let  getRandomUser = () => {
    return {
      id: faker.string.uuid(),
      username: faker.internet.username(), // before version 9.1.0, use userName()
      email: faker.internet.email(),
    //   avatar: faker.image.avatar(),
      password: faker.internet.password(),
    //   birthdate: faker.date.birthdate(),
    //   registeredAt: faker.date.past(),
    };
  }


//   console.log(getRandomUser());