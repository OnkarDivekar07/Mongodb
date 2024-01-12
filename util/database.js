const mongodb = require("mongodb");
const mongodbclient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  mongodbclient
    .connect(
      "mongodb+srv://onkardivekar389:MO7s8BPbTx9QHL6r@cluster0.acfvylt.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((client) => {
      console.log("connected");
      callback(client);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = mongoConnect;
