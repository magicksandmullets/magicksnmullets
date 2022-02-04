import * as React from "react"
import HomeNav from "../components/HomeNav";
import "../components/home.css";
import home from "../images/magicks.png";


const IndexPage = () => (
  <section>
    <HomeNav/>
    <img src={home} style={{justifyContent:"center", display:"block", margin:"auto", width:"70%"}}/>
  </section>
)


export default IndexPage
