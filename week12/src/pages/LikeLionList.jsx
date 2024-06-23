import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import ChoiceBox from '../components/ChoiceBox';

const LikeLionList = () => {
    const [testList, setTestList] = useState([]);
    const [clickedChoices, setClickedChoice] = useState({});
    const navigate = useNavigate();
    const baseURL = "https://gominzipsession.o-r.kr"

    const goToHome = () => {
        navigate(`/`);
    }

    useEffect(()=>{
        const url = `${baseURL}/liontest/question`
        const fetchTestList = async()=>{
            const response = await axios.get(url);
            console.log(response.data);
            console.log(response.data.questions)
            setTestList(response.data.questions)
        };
        fetchTestList();
    },[]);

    const handleClickedChoice = (questionId, choiceIdx) => 
        {setClickedChoice((clickedChoices) => 
            ({...clickedChoices, [questionId]:choiceIdx}));
        }
        console.log(clickedChoices);

  return (
    <MenuDom>
        <BookListDom>
            <Title onClick={goToHome}>홈으로</Title>
           <Title>멋사인 테스트</Title>
        </BookListDom>
        <BookDetailDom>
          {testList.map((test, idx)=>(
            <div key = {test.id}>
            <SemiTitle>{test.question}</SemiTitle>
            <ChoiceBoxes>
            {test.choices.map((choice, idx)=>(
               <ChoiceBox key = {idx} content = {choice}
               $active = {clickedChoices[test.id] === idx}
               onClick = {() => handleClickedChoice(test.id, idx)}>
               </ChoiceBox>
            ))}
            </ChoiceBoxes>
            </div>
          ))}
           <Outlet /> 
        </BookDetailDom>
    </MenuDom>
  )
}

export default LikeLionList

const MenuDom = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 80vh;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
  margin-bottom:15px;
`;

const SemiTitle = styled.div`
    font-size:20px;
    color: #535353;
    font-weight:700;
    margin: 20px;
`;

const BookListDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: white;
  padding: 50px;
  height: 80%;
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const BookDetailDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 50px;
  height: 100%;
  border-radius: 0 10px 10px 0;
  margin-top: 100px;
`;

const ChoiceBoxes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;