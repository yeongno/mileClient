import React from "react";
import { Col, Row } from "antd";
import NameBar from "../commons/NameBar";
function ImagePostList() {
  return (
    <div style={{ width: "100%" }}>
      <NameBar name="이미지 게시글" url="/FavoritePostList" />
      <Row gutter={[16, 16]}>
        <Col lg={6} md={8} xs={24}>
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", height: "100px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={"/assets/profile.png"}
              />
            </div>
          </div>
        </Col>
        <Col lg={6} md={8} xs={24}>
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", height: "100px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={"/assets/profile.png"}
              />
            </div>
          </div>
        </Col>
        <Col lg={6} md={8} xs={24}>
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", height: "100px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={"/assets/profile.png"}
              />
            </div>
          </div>
        </Col>
        <Col lg={6} md={8} xs={24}>
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", height: "100px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={"/assets/profile.png"}
              />
            </div>
          </div>
        </Col>
        <Col lg={6} md={8} xs={24}>
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", height: "100px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={"/assets/profile.png"}
              />
            </div>
          </div>
        </Col>
        <Col lg={6} md={8} xs={24}>
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", height: "100px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={"/assets/profile.png"}
              />
            </div>
          </div>
        </Col>
        <Col lg={6} md={8} xs={24}>
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", height: "100px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={"/assets/profile.png"}
              />
            </div>
          </div>
        </Col>
        <Col lg={6} md={8} xs={24}>
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", height: "100px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={"/assets/profile.png"}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ImagePostList;
