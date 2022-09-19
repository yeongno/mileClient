import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { ceil, floor } from "lodash";
import React, { useEffect, useState } from "react";

function Footer(props) {
  console.log("last", props.LastIndex);
  const [Paging, setPaging] = useState(0);
  const [nowPaging, setNowPaging] = useState(0);
  const [PagingArray, setPagingArray] = useState([]);
  const onNextPage = () => {
    if (floor(Paging / 10) <= nowPaging) {
      console.log("enough");
    } else {
      setNowPaging(nowPaging + 1);
    }
  };
  const onPrePage = () => {
    if (floor(Paging / 10) < nowPaging || nowPaging === 0) {
    } else {
      setNowPaging(nowPaging - 1);
    }
  };
  useEffect(() => {
    setPaging(ceil(props.LastIndex / 30));
    for (let i = 0; i < props.LastIndex; i++) {
      PagingArray[i] = i;
      if (i === props.LastIndex - 1) {
        setPagingArray(PagingArray);
      }
    }
  }, []);

  const renderCards = PagingArray.map((paging, index) => {
    if (nowPaging === 0) {
      for (index; index < 10; index++) {
        return (
          <div>
            <p>{index + 1}</p>
          </div>
        );
      }
    }
    if (nowPaging) {
      for (index; index < 10; index++) {
        if (index === 9 && nowPaging !== floor(Paging / 10)) {
          return <p>{nowPaging + 1}0</p>;
        } else if (index !== 9 || nowPaging === floor(Paging / 10)) {
          if (index >= Paging - nowPaging * 10) {
            return;
          }
          return (
            <div style={{ display: "flex" }}>
              <p>
                {nowPaging}
                {index + 1}
              </p>
            </div>
          );
        }
      }
    }
  });
  return (
    <div className="footerContainer_LeftSection" style={{ display: "flex" }}>
      <div className="paginationBar" style={{ display: "flex" }}>
        <LeftOutlined onClick={onPrePage} />
        {renderCards} <RightOutlined onClick={onNextPage} />
      </div>
      <div className="searchingBar"></div>
    </div>
  );
}

export default Footer;
