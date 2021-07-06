import React from "react";
import taswira from "./image.jpg"
class Profile extends React.Component {
 state = {
   name: "Mohamed chairat",
   bio :"My name is Mohamed chairat  and   I am a full-stack javascript Developer and  Software Developer, currently living in GUIBIZA",
   imgSrc:<img src={taswira} width="250px"></img>,
   profession:"Developper", 
 
 
 };
 render() {
   return   <div>  <h1> {this.state.name} <br/> {this.state.bio}</h1>; 
    <div style={{ textAlign:'center' }}>{this.state.imgSrc}</div> 
      <div style={{fontSize:"50px" , color:"red" , textAlign:'center'}}>{this.state.profession}
     
      </div> 
     
      </div>   
  
 } 
}
export default Profile;
