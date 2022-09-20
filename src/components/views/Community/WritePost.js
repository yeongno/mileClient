import { Col, Form, Input, message, Row } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postGo } from "../../../redux/_actions/post_action";
import { POST_GO } from "../../../redux/_actions/types";

function WritePost() {
  const dispatch = useDispatch();

  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [FilePath, setFilePath] = useState("");
  const [Topic, setTopic] = useState("public");
  const userFrom = localStorage.getItem("userId");

  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value);
  };

  const onContentHandler = (event) => {
    setContent(event.currentTarget.value);
  };
  const onTopic = (topic) => {
    setTopic(topic);
    console.log("topic", topic);
  };

  const onPost = () => {
    let body = {
      title: Title,
      content: Content,
      userFrom: userFrom,
      imagePath: FilePath,
      topic: Topic,
    };
    dispatch(postGo(body)).then((response) => {
      if (response.payload.success) {
        // alert("Successed to post up");
      } else {
        alert("Failed to post up");
      }
    });
    message.success("게시글을 작성하였습니다.");

    // window.location.reload();
  };

  const { TextArea } = Input;

  return (
    <div>
      <div style={{ display: "flex", width: "1500px", marginLeft: "120px" }}>
        <div style={{ width: "100px" }}>
          <div style={{ marginLeft: "30px" }}>
            <div
              style={{
                marginTop: "10px",
                border: "2px solid black",
                fontSize: "30px",
                borderRadius: "10px",
              }}
            >
              <span>제목</span>
            </div>
            <div
              style={{
                marginTop: "15px",
                border: "2px solid black",
                borderRadius: "10px",
                fontSize: "30px",
              }}
            >
              <span>내용</span>
            </div>
          </div>
        </div>
        <Form style={{ width: "1400px" }}>
          <Row justify="start" style={{ margin: 10 }}>
            <Col span={20}>
              <TextArea
                style={{
                  borderRadius: "5px",
                  width: "calc(100%)",
                  height: "calc(100%)",
                  overflow: "auto",
                  scrollbarWidth: "none",
                  resize: "none",
                  border: "2px solid black",
                }}
                placeholder="제목을 입력하세요"
                onChange={onTitleHandler}
                value={Title}
              />
            </Col>
          </Row>
          <Row justify="start" style={{ margin: 10, height: "200px" }}>
            <Col span={20}>
              <TextArea
                style={{
                  borderRadius: "5px",
                  width: "calc(100%)",
                  height: "calc(100%)",
                  overflow: "auto",
                  scrollbarWidth: "none",
                  border: "2px solid black",
                  resize: "none",
                }}
                placeholder="내용을 입력하세요"
                onChange={onContentHandler}
                value={Content}
              />
            </Col>
          </Row>

          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "900px",
                paddingLeft: "795px",
                paddingTop: "40px",
                justifyContent: "center",
              }}
            >
              <button
                style={{
                  width: "100px",
                  height: "70px",
                  border: "2px solid black",
                  background: "none",
                  borderRadius: "5px",
                }}
                onClick={onPost}
              >
                Submit
              </button>
              <p
                onClick={() => {
                  onTopic("whole");
                }}
              >
                전체
              </p>
              <p
                onClick={() => {
                  onTopic("notice");
                }}
              >
                공지
              </p>
              <p
                onClick={() => {
                  onTopic("favorite");
                }}
              >
                인기
              </p>
              <p
                onClick={() => {
                  onTopic("free");
                }}
              >
                자유
              </p>
              <p
                onClick={() => {
                  onTopic("question");
                }}
              >
                질문
              </p>
              <p
                onClick={() => {
                  onTopic("boast");
                }}
              >
                자랑
              </p>
              <p
                onClick={() => {
                  onTopic("review");
                }}
              >
                후기
              </p>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default WritePost;
