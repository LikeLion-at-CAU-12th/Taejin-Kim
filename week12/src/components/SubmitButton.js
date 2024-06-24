import React from 'react'
import styled from 'styled-components'

async function sandData(answers) {
        const response = await fetch('https://gominzipsession.o-r.kr/liontest/result', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                answers
            }),
        });
        const responseData = await response.json();
        console.log(responseData);
}

const SubmitButton = ({clickedChoices}) => {

    const handleClick = ()=> {
    const submitChoices = [0,0,0,0,0];
    const keys = Object.keys(clickedChoices);
    const numKeys = keys.length;

    if (numKeys !== 5) {
        alert("모든 질문에 체크를 해주세요")
    }else {
        for(let i = 1; i < 6; i++){
            submitChoices[i-1] = clickedChoices[i]+1;
        }
        console.log(submitChoices);
        sandData(submitChoices);
    }  
    };
    
    return(
        <StyledButton onClick = {handleClick} >
            제출하기
        </StyledButton>
    );
};

export default SubmitButton

const StyledButton = styled.button`
    background-color: #b8edfb;
    border-radius: 20px;
    border:none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 30px;
    padding:10px;
    width: 100px;
    cursor: pointer;
`;