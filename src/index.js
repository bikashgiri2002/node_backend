import "dotenv/config";
import connectDB from "./db/db.js";
import { app } from "./app.js";

const port = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:3000`);
    });
  })
  .catch((err) => {
    console.log("Error in connect : ", err);
  });
