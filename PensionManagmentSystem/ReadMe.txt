Project uses Mongo DB for the dataBase

From Angular frontend navigate to register, to add a new user to the database

Once registered you are redirected to the login Page, requiring Aadhaar, email and password

On succesfull login you are redirected to the free pension quote service.
  Enter Aadhaar no to receive you pension quote


Passwords are hashed in the database and then compared again with bcrypt.

