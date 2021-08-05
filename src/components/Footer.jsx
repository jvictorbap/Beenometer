import React from 'react'
import '../css/Footer.css'
import Github from '../images/GitHub_Logo_White.png'
import Linkedin from '../images/linkedin-icon-white-png-5.png'

export default function BeeFooter() {
  return (
    <footer>
      <div className="Footer">
        <div className="Bloco2">
          <img src={Linkedin} alt="" id="linkedin" onClick={()=> window.open("https://www.linkedin.com/", "_blank")}/>
          <h1>Made by #JVB</h1>
          <img src={Github} alt="" id="github"/>
        </div>
      </div>
    </footer>
  )
}