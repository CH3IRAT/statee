
import React , {useState} from "react";
import Profile from "./Profile";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { check:true };
  }

  render() {
    return(
<div> 
<button onClick={<Profile/>}>
cliquez ici

</button>
<Profile/>

</div>


    )
  }
}
export default App ;
