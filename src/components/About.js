import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {

  constructor(props) {
    //console.log("parentchild");
    super(props);
  }
  componentDidMount() {
    //console.log("parenrcomponentDidMount");
  }
  render() {
    //console.log("parentrender");
    return (
      <div>
        <h1>murali</h1>
        <UserContext.Consumer>{({loggedInUser})=>(<h1>{loggedInUser}</h1>)}</UserContext.Consumer>
        {/*<User name={"muralikrishna function"} location={"@visakhapatnam function"} contact={"muralikrishnakoduru462@gmail.com function"} />*/}
        <UserClass name={"muralikrishna class"} location={"@visakhapatnam class"} contact={"muralikrishnakoduru462@gmail.com class"} />
      </div>
    )
  }
}

//const About = () => {
//  return (
//    <div>
//      <User name={"muralikrishna function"} location={"@visakhapatnam function"} contact={"muralikrishnakoduru462@gmail.com function"} />
//      <UserClass name={"muralikrishna class"} location={"@visakhapatnam class"} contact={"muralikrishnakoduru462@gmail.com class"} />
//    </div>
//  )
//}

export default About;