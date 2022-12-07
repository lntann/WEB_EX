const fs = require("fs");

// create a JSON object
const user = {
  id: 19521176,
  name: "An An",
  age: 21,
};

// convert JSON object to a string
const data = JSON.stringify(user);

// write JSON string to a file
fs.writeFile("user.json", data, (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON data is saved.");
});
