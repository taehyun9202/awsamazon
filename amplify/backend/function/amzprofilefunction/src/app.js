/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_AMZPROFILE_ARN
	STORAGE_AMZPROFILE_NAME
	STORAGE_AMZPROFILE_STREAMARN
Amplify Params - DO NOT EDIT */

var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

/**********************
 * Example get method *
 **********************/

app.get("/profile", function(req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

app.get("/profile/:id", function(req, res) {
  // Add your code here
  // res.json({
  //   success: "get call for id succeed!",
  //   url: req.url,
  //   params: req.params.id,
  // });

  const params = {
    TableName: "amzprofile-dev",
    Key: {
      id: req.params.id,
    },
  };

  docClient.get(params, function(err, data) {
    if (err) res.json({ err: err, message: "no data for id found" });
    else if (!data.Item)
      res.json({ err: "NotFound", message: "no data for id found" });
    else
      res.json({
        data: data,
        err: err,
        success: "get call for id succeed!",
        url: req.url,
      });
  });
});

/****************************
 * Example post method *
 ****************************/

app.post("/profile", function(req, res) {
  console.log(req);

  var params = {
    TableName: "amzprofile-dev",
    Item: req.body,
  };

  docClient.put(params, function(err, data) {
    if (err) res.json({ err });
    else
      res.json({ success: "post call succeed!", url: req.url, body: req.body });
  });
});

app.post("/profile/*", function(req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put("/profile", function(req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/profile/*", function(req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/profile", function(req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/profile/*", function(req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function() {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
