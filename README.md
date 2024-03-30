<h1 align="center">Welcome to One Dionys - Database Abstraction Layer! 👋 </h1>

<p align="center">An abstraction layer for interacting with different types of databases in web applications, allowing portability and flexibility. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-database-abstraction-layer?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-database-abstraction-layer?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-database-abstraction-layer?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-database-abstraction-layer?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-database-abstraction-layer.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-database-abstraction-layer?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-database-abstraction-layer?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const Database = require('./src/database');

// Initialize database with configuration
const db = new Database({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database'
});

// Connect to the database
db.connect();

// Execute SQL query
const result = db.query('SELECT * FROM users');
console.log('Query result:', result);

// Disconnect from the database
db.disconnect();
```

#### Explanation

* This package provides a Database class that can be used to connect to a database, execute SQL queries, and disconnect from the database. It abstracts away the database-specific details, allowing for easier database interactions in your application.

#### Return Value

* `connect()`: Connects to the database.
* `query(sql)`: Executes the given SQL query and returns the result.
* `disconnect()`: Disconnects from the database.

## 📆 Release Date

* v1.0.0 : 17 March 2024
* v1.0.1 : 18 March 2024
* v1.0.2 : 31 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Database Abstraction Layer is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Database Abstraction Layer? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
