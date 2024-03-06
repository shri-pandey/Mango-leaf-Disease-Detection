class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    getUsername() {
      return this.username;
    }
  
    setPassword(newPassword) {
      this.password = newPassword;
    }
  
    // Simulating authentication, returns true if the password matches
    authenticate(password) {
      return this.password === password;
    }
  }
  
  class RegistrationSystem {
    constructor() {
      this.users = [];
    }
  
    register(username, password) {
      const newUser = new User(username, password);
      this.users.push(newUser);
      console.log(`User ${username} registered successfully.`);
    }
  
    login(username, password) {
      const user = this.users.find(user => user.getUsername() === username);
      if (user) {
        if (user.authenticate(password)) {
          console.log(`User ${username} logged in successfully.`);
        } else {
          console.log(`Incorrect password for user ${username}.`);
        }
      } else {
        console.log(`User ${username} not found.`);
      }
    }
  }
  

  const registrationSystem = new RegistrationSystem();
  registrationSystem.register("user1", "password123");
  
//   registrationSystem.login("user1", "password123"); 
//   registrationSystem.login("user1", "wrongpassword"); 
//   registrationSystem.login("nonexistentuser", "password123"); 
  