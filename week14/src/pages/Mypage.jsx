import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMyPage } from "../apis/user";
import { useCheckLogin } from "../isLogin/isLogin";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useNavigate();
  const checkLogin = useCheckLogin();

  useEffect(() => {
    getMyPage(localStorage.getItem("access"))
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        alert("access 토큰 기한 만료");
        localStorage.removeItem("access")

      });
  }, []);

  if (loading) return <div>로딩중입니당....</div>;

  const onClick = () =>{
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    checkLogin();
    router("/");
  }

  return (
    <Wrapper>
      <Title>회원 정보</Title>
      <div>회원님 성함: {data.name}</div>
      <div>회원님 나이: {data.age}</div>
      <BtnWrapper>
      <button onClick={onClick}>로그아웃</button>
      </BtnWrapper>
    </Wrapper>
  );
};

export default Mypage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid #89cdf6;
  padding: 30px;
  border-radius: 3%;
  font-size: 20px;
  width: 300px;
  div {
    font-size: 25px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const BtnWrapper = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  button {
    font-weight: 800;
    background-color: #89cdf6;
    color: white;
    padding: 19px;
    border-radius: 10px;
    border: none;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
  }
`;