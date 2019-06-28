import { Component } from "react";
import { createPortal } from "react-dom";

export default class Portal extends Component {
  div = null;
  state = { hasMounted: false };

  static defaultProps = {
    isStyleguide: false
  };
  componentDidMount() {
    this.div = document.createElement("div");
    this.div.style.zIndex = 10;
    document.body.appendChild(this.div);

    this.setState({ hasMounted: true });
  }

  componentWillUnmount() {
    document.body.removeChild(this.div);
  }

  render() {
    return this.state.hasMounted
      ? createPortal(this.props.children, this.div)
      : null;
  }
}
