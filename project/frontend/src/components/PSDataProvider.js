import React, { Component } from "react";
import PropTypes from "prop-types";

class PSDataProvider extends Component {
  static propTypes = {
    endpoint1: PropTypes.string.isRequired,
    endpoint2: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };
  state = {
      data: [],
      loaded: false,
      placeholder: "Loading your home automation dashboard..."
    };
  componentDidMount() {
    fetch(this.props.endpoint1)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(data => this.setState({ data: data, loaded: true }));
  }
  render() {
    const { data, loaded, placeholder } = this.state;
    return loaded ? this.props.render(data) : <p>{placeholder}</p>;
  }
}
export default PSDataProvider;
