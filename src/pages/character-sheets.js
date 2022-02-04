import * as React from "react"
import carmae from "../images/carmae.png";
import orvil from "../images/orvil.png";
import nebbiolo from "../images/nebbiolo.png";
import tilly from "../images/tilly.png";
import furnace from "../images/furnace.png";
import charsheets from "../images/sheets.png";
import HomeNav from "../components/HomeNav";


const CharacterSheets = () => (
  <>
    <HomeNav />
    <img src={charsheets} style={{justifyContent:"center", display:"block", margin:"auto", width:"70%"}}/>
    <img src={orvil} style={{justifyContent:"center", display:"block", margin:"auto", width:"70%" ,marginBottom:"2em"}}/>
    <img src={furnace} style={{justifyContent:"center", display:"block", margin:"auto", width:"70%" ,marginBottom:"2em"}}/>
    <img src={tilly} style={{justifyContent:"center", display:"block", margin:"auto", width:"70%" ,marginBottom:"2em"}}/>
    <img src={nebbiolo} style={{justifyContent:"center", display:"block", margin:"auto", width:"70%" ,marginBottom:"2em"}}/>
    <img src={carmae} style={{justifyContent:"center", display:"block", margin:"auto", width:"70%" ,marginBottom:"2em"}}/>

  </>
)

export default CharacterSheets
