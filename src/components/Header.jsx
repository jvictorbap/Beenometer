import React from 'react'
import '../css/Header.css'
import colmeia from '../images/colmeia.png'

export default function BeeHeader() {
  return (
    <header>
      <div className="Header">
        <div className="Bloco1">
          <img src={colmeia} alt="" id="Bee" onClick={()=> window.open("https://www.notion.so/beedeveloper/BeeDev-b3284d4907f8420eb3bd6021e7baeaf9", "_blank")}/>
          <h1>Beenometer</h1>
        </div>
      </div>
    </header>
  )
}