/*const docxConverter = require("docx-pdf");

const convertToPdf = (inputPath, outputPath) => {
  return new Promise((resolve, reject) => {
    docxConverter(inputPath, outputPath, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

module.exports = convertToPdf;
*/

const { exec } = require("child_process");
const path = require("path");

const convertToPdf = (inputPath, outputPath) => {
  return new Promise((resolve, reject) => {
    const command = `libreoffice --headless --convert-to pdf --outdir ${path.dirname(outputPath)} ${inputPath}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error("Conversion Error:", error);
        reject(error);
      } else {
        console.log("Conversion Success:", stdout);
        resolve(outputPath);
      }
    });
  });
};

module.exports = convertToPdf;
