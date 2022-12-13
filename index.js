const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { getSymptoms } = require("./routes/symtoms.routes");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let port = 5008;
getSymptoms(app);
app.listen(port, () => {
  console.log("app is listening over port=5001");
});
const axios = require("axios");
// async function res(input, output) {
//   const response = await axios
//     .post(
//       "https://api.infermedica.com/v3/parse",
//       // '{"text": "I often feel cold.", "age": {"value":30}, "include_tokens": true}',
//       {
//         text: input.data.text,
//         age: {
//           value: input.data.age,
//         },
//         include_tokens: true,
//       },
//       {
//         headers: {
//           "App-Id": "6b2c1128",
//           "App-Key": "ed31ef2357c0a91740327294a146c97d",
//           "Content-Type": "application/json",
//         },
//       }
//     )
//     .then((data) => {
//       return data;
//     });

//   console.log(response.data.mentions[0].name);
// }
// let input = {
//   data: {
//     text: "I fell hotness",
//     age: 30,
//   },
// };
// res(input, (output = ""));
