import React from "react";

const DownloadLink = ({ pdfUrl }) => {
  return (
    pdfUrl && (
      <div className="download-link">
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          Download Converted PDF
        </a>
      </div>
    )
  );
};

export default DownloadLink;
