import React, { useRef, useState } from "react";

const Logo = () => {
  const inputRef = useRef(null);
  const [companyName, setCompanyName] = useState("");
  const [isDownloaded , setIsDownloaded] = useState(false)
  const API_KEY = import.meta.env.VITE_API_KEY;

  function getImage() {
    const company = inputRef.current.value.replace(/\s+/g, "");
    const companyLogoUrl = `https://img.logo.dev/${company}.png?token=${API_KEY}`;
    setCompanyName(companyLogoUrl);
    inputRef.current.value = ``;
    setIsDownloaded(false)
  }

  function enterFunction(e) {
    if (e.key === "Enter") {
      getImage();
    }
  }
  const download = () => {
    setIsDownloaded(true)
  }

  return (
    <div>
      <h1>Generate logo by writing any big company's name</h1>
      <input
        onKeyDown={(e) => enterFunction(e)}
        type="text"
        placeholder="Write the name here ex. apple"
        ref={inputRef}
      />
      <button onClick={getImage}>Search</button>
      <br />
    
       {companyName && (
 <div className="image-container">
 <a target="_blank" href={companyName} download>

 <img onClick={download} src={companyName} alt="Company logo" />
 </a>


<div className="tooltip">{isDownloaded ? "Viewed" : "View"}</div>
</div>
       )}
         
          
      
      
    </div>
  );
};

export default Logo;
