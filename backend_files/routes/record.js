const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/note").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
  .collection("note")
  .find({})
  .toArray(function (err, result) {
    if (err) throw err;
    res.json(result);
  })
});

recordRoutes.route("/note/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myObj = {
    title: req.body.title,
    content: req.body.content,
    date: req.body.date,
  }
  db_connect
  .collection("note")
  .insertOne(myObj, (err, res) => {
    if (err) throw err;
    response.json(res);
  })
})

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("note").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    // console.log(obj);
    // console.log(response.status(obj));
    response.send(obj);
  });
});

recordRoutes.route("/update/:id").post((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      title: req.body.title,
      content: req.body.content,
    },
  };
  db_connect.collection("note").updateOne(myquery, newvalues, function (err, res) {
    if (err) throw err;
    console.log("1 document updated");
    response.json(res);
  });
});

module.exports = recordRoutes;