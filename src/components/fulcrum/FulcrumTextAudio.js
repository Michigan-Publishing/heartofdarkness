import React, { Component } from "react";

export default class FulcrumTextAudio extends Component {
  render() {
    const { blockType, handle, title } = this.props;

    return (
      <iframe
        data-block-type={blockType}
        src={`https://www.fulcrum.org/embed?hdl=${handle}`}
        title={escape(title)}
        style={{
          display: "block",
          overflow: "hidden",
          borderWidth: 0,
          width: "98%",
          maxWidth: "98%",
          maxHeight: 400,
          margin: "auto"
        }}
      />
    );
  }
}
