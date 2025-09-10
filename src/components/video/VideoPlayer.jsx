import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Iframe from "react-iframe";

export const VideoPlayer = ({ trigger, src }) => {
  return (
    <Popup
      trigger={trigger}
      position=""
      modal={true}
      contentStyle={{ width: "80%", maxWidth: 1920 }}
      lockScroll
    >
      <Iframe
        url={src ?? "https://www.youtube.com/embed/XdFfCPK5ycw"}
        width="100%"
        height="400px"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </Popup>
  );
};
