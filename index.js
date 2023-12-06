const axios = require("axios");
const fs = require("fs");
const path = require("path");
const FormData = require("form-data");

// Add your API key in the variable below
const apiKey = "";
const filePath = path.join(__dirname, "audio.mp4");
const model = "whisper-1";

const formData = new FormData();
formData.append("model", model);
formData.append("file", fs.createReadStream(filePath));

axios
  .post("https://api.openai.com/v1/audio/transcriptions", formData, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
