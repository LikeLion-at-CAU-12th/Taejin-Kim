import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { getMyPage } from '../apis/user';
import { useRecoilState } from 'recoil';
import { loginAtom } from '../recoil/atom';
import { useCheckLogin } from '../isLogin/isLogin';

const Home = () => {
  const router = useNavigate();
  const [name, setName] = useState('guest');
  const [loginText, setLoginText] = useState('로그인');
  const checkLogin = useCheckLogin();

  const [isLogin, setIsLogin] = useRecoilState(loginAtom);

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  useEffect(()=>{
    if (isLogin) {
      setLoginText('로그아웃')

      getMyPage(localStorage.getItem("access"))
      .then((data) => {
        setName(data.name);
      })
      .catch((error) => {
        localStorage.removeItem("access")
        localStorage.removeItem("refresh")
        router("/")

      });
    } else {
      setLoginText('로그인');
      setName('guest');
    }
  }, [isLogin, setLoginText, router]);

  const onClick = () =>{
    if (isLogin) {
      router("/likelionlist/likelionQ")
    } else {
      alert("로그인 먼저 해주세요")
      router("/login");
    }
  }

  const onLoginClick = () =>{
    if (isLogin) {
      localStorage.removeItem("access")
      localStorage.removeItem("refresh")
      setIsLogin(false);
    } else {
      router("/login");
    }
  }

  return (
    <MenuDom>
        <Title>Week12 Session</Title>
        <SemiTitle>환영합니다 {name}님</SemiTitle>
        <StyledLink to = "/books">
            Book List
        </StyledLink>
        <StyledButton onClick={onClick}>
            멋사인 테스트
        </StyledButton>
        <StyledButton onClick={onLoginClick}>
            {loginText}
        </StyledButton>
    </MenuDom>
    //<div>Home</div>
  )
}

export default Home;

const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const SemiTitle = styled.div`
  font-size: 30px;
  color: #535353;
  font-weight: 500;
`

const StyledLink = styled(Link)` // 이미 만들어져있는 컴포넌트도 styled(Link) -> 이런식으로 꾸며줄 수 있음.
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border: none;
`;