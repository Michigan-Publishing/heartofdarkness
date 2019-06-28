import React, { Component } from "react";

export default class FulcrumImageVideo extends Component {
  render() {
    const { blockType, handle, title, width } = this.props;

    return (
      <div
        data-block-type={blockType}
        style={{
          width: "auto",
          pageBreakInside: "avoid",
          maxWidth: width,
          margin: `auto`
        }}
      >
        <div
          style={{
            overflow: "hidden",
            paddingBottom: "56.25%",
            position: "relative",
            height: 0
          }}
        >
          <iframe
            src={`https://www.fulcrum.org/embed?hdl=${handle}`}
            title={`${escape(title)}`}
            style={{
              overflow: "hidden",
              borderWidth: 0,
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              position: "absolute"
            }}
          />
        </div>
      </div>
    );
  }
}
