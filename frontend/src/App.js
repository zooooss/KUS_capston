import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Col, Divider, Row } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";

/////////////////////////////////
/////// 리액트 라우터 예제 ///////
/////////////////////////////////

// pages/ 디렉토리에 자바스크립트 코드 추가 후 불러오기
import Home from "./pages/Home.js";
import SelectType from "./pages/SelectType.js";
import FloorMap from "./pages/FloorMap.js";
//////////////////////////////////////////////////////

const { Header, Content, Footer } = Layout;

function App() {
  const [selectedKey, setSelectedKey] = useState(1);

  // 키 : 메뉴를 구분하는 식별자 (1부터 증가), 라벨 : 내용 및 href 설정
  const menu = [
    {
      key: 1,
      label: (
        <a key={1} href="/Home">
          Home텍스트를영상
        </a>
      ),
    },
    {
      key: 2,
      label: (
        <a key={2} href="/SelectType">
          영상을영상
        </a>
      ),
    },
    {
      key: 3,
      label: (
        <a key={3} href="/FloorMap">
          건물 내 약도
        </a>
      ),
    },
    {
      key: 4,
      label: (
        <a key={4} href="/Class">
          강의실 안내
        </a>
      ),
    }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menu.map((item, index) => {
            return item;
          })}
          style={{ margin: "auto" }}
        />
      </Header>
      <Router>
        <Routes>
          {/* 위 페이지 불러오기 및 메뉴 추가 후 아래 내용 작성 */}
          <Route path="/Home" element={<Home />} />
          <Route path="/SelectType" element={<SelectType />} />
          <Route path="/FloorMap" element={<FloorMap />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
