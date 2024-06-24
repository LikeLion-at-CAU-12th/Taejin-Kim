
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import ChoiceBox from '../components/ChoiceBox';
import SubmitButton from '../components/SubmitButton';


const LikeLionQ = () => {

    const {testList, clickedChoices, handleClickedChoice} = useOutletContext();

    return(
    <div>
    <LikeLionQDom>
    {testList.map((test)=>(
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
   
   <SubmitButton clickedChoices={clickedChoices} >
   </SubmitButton>
   </LikeLionQDom>
    </div>
    )
};

export default LikeLionQ;

const SemiTitle = styled.div`
    font-size:20px;
    color: #535353;
    font-weight:700;
    margin: 20px;
`;

const ChoiceBoxes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const LikeLionQDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 50px;
  height: 100%;
  border-radius: 0 10px 10px 0;
  margin-top: 100px;
`;