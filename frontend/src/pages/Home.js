// 일반 화면
import React, { useEffect, useState } from "react";
import { Col, Divider, Row } from "antd";
import axios from "axios";

import img from "../image/robotface.jpg";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const audio = new Audio("/music/facemusic.mp3");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://163.152.219.200:3000/Home");
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
        audio.loop = false;
        audio.play();
      }}
    >
      <div className="Home">
        <img
          className="robotface"
          alt="robotface"
          src={img}
          style={{ width: "70vw" }}
        />
      </div>
    </div>
  );
};

export default Home;
