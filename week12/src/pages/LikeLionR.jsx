import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const LikeLionR = () =>{
    const params = useParams();
    const num = params.num;
    const [resultImg, setResultImg] = useState();
    const [resultTitle, setResultTitle] = useState();

    
    
    useEffect(()=>{
        const url = `https://gominzipsession.o-r.kr/liontest/result/${num}`
        const fetchResult = async()=>{
            const response = await axios.get(url);
            console.log(response.data);
            setResultImg(response.data.resultImg)
            setResultTitle(response.data.resultTitle)
        };
        fetchResult();
    },[num]);
    
    return (
        <div>
            <LikeLionRDom>
            <Title>당신의 결과는!!</Title>
            <ResultImg>
                <img src = {resultImg} alt = ''/>
            </ResultImg>
            <ResultTitle>{resultTitle}</ResultTitle>
            </LikeLionRDom>
        </div>
    )
}

export default LikeLionR

const LikeLionRDom = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-left:100px;
`

const Title = styled.div`
  font-size: 30px;
  color: #535353;
  font-weight: 600;
  margin-bottom:15px;
`;

const ResultImg = styled.div`
  margin-bottom:15px;
`;

const ResultTitle = styled.div`
  font-size: 30px;
  color: #535353;
  font-weight: 600;
  margin-bottom:15px;
`;