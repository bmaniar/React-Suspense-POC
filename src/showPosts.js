import React from "react";
import axios from "axios";
const fetch = async (url = "https://reqres.in/api/users/2") => {
  try {
    return await axios.get(url);
  } catch (err) {
    if (axios.isCancel(err)) {
      console.log("Error: ", err.message);
    }
  }
};
export default class posts extends React.Component {
  constructor() {
    super();
    this.state = { data: "" };
  }
  async componentDidMount() {
    const res = await fetch();
    console.log(res);
    this.setState({ data: res.data.data });
  }
  render() {
    return (
      <div>
        <h3>First Name: {this.state.data.first_name}</h3>
        <h3>Last Name: {this.state.data.last_name}</h3>
      </div>
    );
  }
}
