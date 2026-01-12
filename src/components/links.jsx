import React from "react";
import image from "../assets/image.png";
import image2 from "../assets/image copy 2.png";
import image3 from "../assets/image copy.png";
function ImageLink() {
  return (
    <>
  <div className="main-links">
    
    <a
      href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGzSRaX4OdzLQAAAZuzExV4u8_5DUF1cSFiEymUpNRaUdXJiZwy1mljVpxk4S4UJoDEAN32h75swCWROq_gBffgmzs2SNxTP0IYw3z9JSeJUirrBLgJnZW3IIupmyBk-TiTKOQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fabhishek-patel-3aa289334%3Futm_source%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dmember_android"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={image}
        alt="Clickable"
        style={{ cursor: "pointer", width: "100px" }}
      />
    </a>
    
    <a
      href="https://mail.google.com/mail/u/0/#inbox"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={image2}
        alt="Clickable"
        style={{ cursor: "pointer", width: "100px" }}
      />
    </a>    
    <a
      href="https://github.com/abhishekpatel124"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={image3}
        alt="Clickable"
        style={{ cursor: "pointer", width: "100px" }}
      />
    </a>    
    </div>
    </>
  );
}

export default ImageLink;
