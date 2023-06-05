import React, { useEffect, useState } from "react";
import axios from "axios";

import { Col, Divider, Row, Button } from "antd";

const SelectType = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const audio = new Audio("/music/SelType.mp3");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://163.152.219.200:3000/SelectType"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      onMouseEnter={() => {
        // audio.autoplay = true;
        audio.loop = false;
        audio.play();
        // audio.pause();
      }}
    >
      <h1>Axios Test</h1>
      {/* <BackgroundMusic /> */}
      <p>Data: {data}</p>
    </div>
  );
};

export default SelectType;
