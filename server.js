require("dotenv").config();
const app = require("./app");

const mongoose = require("mongoose");

const { PORT = 3000, DB_HOST, MONGO_URI } = process.env;
console.log("DB_HOST:\t", DB_HOST);
console.log("DB_TEST_HOST:\t", MONGO_URI);

mongoose
  .connect(
    "mongodb+srv://Vlad:VladPopoff@cluster0.k5w0ytp.mongodb.net/db-animal-welfare-network?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () => {
      // createFolderIsNotExist(TEMP_DIR);
      console.log("Database connection successful");
      console.log(`Server running. Use our API on port: ${PORT}`);
      // dataConvert(); // convert date from string to Date
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// console.log('server is stated!!!!');
