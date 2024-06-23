import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Home = () => {
  return (
    <MenuDom>
        <Title>Week12 Session</Title>
        <StyledLink to = "/books">
            Book List
        </StyledLink>
        <StyledLink to = "/likelionlist">
            멋사인 테스트
        </StyledLink>
    </MenuDom>
    //<div>Home</div>
  )
}

export default Home

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