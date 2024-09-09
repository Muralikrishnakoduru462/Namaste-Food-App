import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "mk",
        location: "visakha",
        avatar_url: "http://dummy-photo-com",
      }
    }
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      //console.log("hii yogesh")
    }, 1000);
    //const data = await fetch("https://api.github.com/users/Muralikrishnakoduru462");
    //const json = await data.json();
    //console.log(json);
    //this.setState({
    //  userInfo: json,
    //})
  }

  componentDidUpdate() {

    //console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    //console.log("componentWillUnmount");
  }
  render() {

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h3>Contact: @murali</h3>
      </div>
    );
  }
}

export default UserClass;