import React from "react";
import { Col, Divider, Row } from "antd";

import img from "../image/FloorMap.jpeg";

function FloorMap() {
  return (
    <div className="FloorMap">
      <img
        className="FloorMap"
        alt="FloorMap"
        src={img}
        style={{ width: "70vw" }}
      />
    </div>
  );
}

export default FloorMap;