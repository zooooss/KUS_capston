// 일반 화면
import React, { useEffect, useState } from "react";
import { Col, Divider, Row } from "antd";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("");
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
          className=""
          alt=""
          src={img}
          style={{ width: "70vw" }}
        />
      </div>
    </div>
  );
};

export default Home;
