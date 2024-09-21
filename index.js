const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI 

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Error when trying to connect to MongoDB:", err);
  });
