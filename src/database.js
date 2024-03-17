class Database {
    constructor(config) {
      // Database initialization code
      this.config = config;
    }
  
    connect() {
      // Connect to the database
      console.log('Connected to database');
    }
  
    query(sql) {
      // Execute SQL query
      console.log('Executing SQL query:', sql);
      // Simulate query execution and return dummy data
      return [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
      ];
    }
  
    disconnect() {
      // Disconnect from the database
      console.log('Disconnected from database');
    }
  }
  
  module.exports = Database;
  