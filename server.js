import express from "express";
const app = express();

//the port where the server will run
const port = 3000;

//start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
