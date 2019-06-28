import { Component } from "react";
import { MOBILE_WIDTH } from "../../constants";

const displayModes = {
  desktop: "desktop",
  mobile: "mobile"
};

// This is for wholesale changing the display - should use media
// queries where you don't want a completely different layout
export default class ViewportDisplay extends Component {
  state = { displayMode: displayModes.desktop };

  componentDidMount() {
    window.addEventListener("resize", this.detectDisplayMode);

    if (this.isMobileWidth()) {
      this.setState({ displayMode: displayModes.mobile });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.detectDisplayMode);
  }

  detectDisplayMode = () => {
    const { displayMode } = this.state;
    const isMobile = this.isMobileWidth();

    if (displayMode === displayModes.desktop && isMobile) {
      this.setState({ displayMode: displayModes.mobile });
    }

    if (displayMode === displayModes.mobile && isMobile === false) {
      this.setState({ displayMode: displayModes.desktop });
    }
  };

  isMobileWidth = () => {
    return window.innerWidth < MOBILE_WIDTH;
  };

  render() {
    const { desktopRender, mobileRender } = this.props;
    const { displayMode } = this.state;

    const output =
      displayMode === displayModes.desktop ? desktopRender : mobileRender;
    return output;
  }
}
