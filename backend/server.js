const express = require("express");
const cors = require("cors");
const fileUpload = require("./fileUpload");
const convert = require("./convert");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("converted"));

// Upload Route
app.post("/upload", fileUpload, (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const inputPath = req.file.path;
  const outputFilename = req.file.filename.replace(/\..+$/, ".pdf");
  const outputPath = path.join(__dirname, "converted", outputFilename);

  convert(inputPath, outputPath)
    .then(() => res.json({ pdfUrl: `http://localhost:${PORT}/${outputFilename}` }))
    .catch((err) => res.status(500).json({ error: "Conversion failed", details: err }));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
