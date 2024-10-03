import React from 'react'
import {useRef} from "react"
import {useState} from "react"
const Logo = () => {
    const inputRef = useRef(null)
    const [imageData , setImageData] = useState(false)
    const [companyName , setCompanyName ] = useState("")
    const API_KEY = import.meta.env.VITE_API_KEY

        function getImage(){
          const company = inputRef.current.value.replace(/\s+/g, '');
          
        const companyName = `https://img.logo.dev/${company}.com?token=${API_KEY}`
        setCompanyName(companyName)
        inputRef.current.value =``
        }
        function enterFunction(e){
            if(e.key === "Enter"){
                getImage()
            }
        }
    
  return (
    <div>
      <h1>Generate logo by writing any big companies name</h1>
      <input onKeyDown={(e) => enterFunction(e)} type="text" placeholder="Write the name here ex. apple" ref={inputRef} />
      <button onClick={getImage}>Search</button><br />
      {companyName ? <img src={companyName} alt="company not found" /> : <></>}
      
    </div>
  )
}

export default Logo
