import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { ceil, floor, result } from "lodash";
import React, { useEffect, useState } from "react";
import "../../../styles/CommunityPage/LeftSection/Footer.scss";
import SearchBar from "./SearchBar";

function Footer(props) {
  const [Paging, setPaging] = useState(0);
  const [nowPaging, setNowPaging] = useState(0);
  const [PagingArray, setPagingArray] = useState([]);
  const [Result, setResult] = useState();
  const [NowIndex, setNowIndex] = useState(0);

  const onThisPaging = (index, nowPaging) => {
    if (index >= 10) {
      const result = (1 + nowPaging) * 10;
      props.setThisPaging(result);
      setNowIndex(index);
      setResult(result);
    } else {
      const ten = nowPaging * 10;
      const one = index + 1;
      const result = ten + one;
      setResult(result);
      props.setThisPaging(result);
      setNowIndex(index);
    }
  };
  const onNextPage = () => {
    if (floor(Paging / 10) <= nowPaging) {
    } else {
      setNowPaging(nowPaging + 1);
      props.setThisPaging((nowPaging + 1) * 10 + 1);
      setNowIndex(0);
    }
  };
  const onPrePage = () => {
    if (floor(Paging / 10) < nowPaging || nowPaging === 0) {
    } else {
      setNowPaging(nowPaging - 1);
      props.setThisPaging((nowPaging - 1) * 10 + 1);
    }
    setNowIndex(0);
  };

  useEffect(() => {
    setNowIndex(0);
    setNowPaging(0);
    setPaging(ceil(props.LastIndex / 30));
    for (let i = 0; i < props.LastIndex; i++) {
      PagingArray[i] = i;
      if (i === props.LastIndex - 1) {
        setPagingArray(PagingArray);
      }
    }
  }, [props.ThisTopic, props.LastIndex]);

  const renderCards = PagingArray.map((paging, index) => {
    if (index >= Paging - nowPaging * 10) {
      return;
    }
    if (nowPaging === 0) {
      for (index; index < 10; index++) {
        // 해당 pagination 누르면 스타일 변경
        if (NowIndex === index) {
          return <p style={{ color: "yellow" }}>did</p>;
        }
        return (
          <p
            onClick={() => {
              onThisPaging(index, nowPaging);
            }}
          >
            {index + 1}
          </p>
        );
      }
    }
    if (nowPaging) {
      for (index; index < 10; index++) {
        //해당 pagination 누르면 스타일 변경
        if (NowIndex === index) {
          return <p style={{ color: "yellow" }}>did</p>;
        }
        if (index === 9 && nowPaging !== floor(Paging / 10)) {
          return (
            <p
              onClick={() => {
                onThisPaging(index, nowPaging);
              }}
            >
              {nowPaging + 1}0
            </p>
          );
        } else if (index !== 9 || nowPaging === floor(Paging / 10)) {
          if (index >= Paging - nowPaging * 10) {
            return;
          }
          return (
            <p
              onClick={() => {
                onThisPaging(index, nowPaging);
              }}
            >
              {nowPaging}
              {index + 1}
            </p>
          );
        }
      }
    }
  });
  return (
    <div className="footerContainer_LeftSection">
      <div className="paginationSection_LeftSection">
        <LeftOutlined onClick={onPrePage} />
        <p onClick={onPrePage}>이전</p>
        <div className="paginationBar_LeftSection">{renderCards}</div>
        <p onClick={onNextPage}>다음</p>
        <RightOutlined onClick={onNextPage} />
      </div>
      <SearchBar />
    </div>
  );
}

export default Footer;
