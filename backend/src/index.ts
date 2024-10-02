import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

const PORT = process.env.PORT || 3000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server open and connected to Database 😁👍!");
    });
  })
  .catch((err) => console.log(err));
