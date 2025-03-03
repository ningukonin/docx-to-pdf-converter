import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import DownloadLink from "./components/DownloadLink";
import "./App.css";

const App = () => {
  const [pdfUrl, setPdfUrl] = useState("");

  return (
    <div className="app">
      <h1>DOCX to PDF Converter</h1>
      <p>"Ningaraj Konin"</p>
      <FileUpload setPdfUrl={setPdfUrl} />
      <DownloadLink pdfUrl={pdfUrl} />
    </div>
  );
};

export default App;
