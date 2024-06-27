import React, { useContext } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { emailAtom, genderAtom, isSubmitedAtom, userNameAtom } from '../recoil/atom';
import { Button, SubTitle, Title, Wrapper } from '../components/layout/common';
import { ThemeColorContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

export const MyPage = () => {
    const userName = useRecoilValue(userNameAtom);
    const mode = useContext(ThemeColorContext);
    const gender = useRecoilValue(genderAtom);
    const navigate = useNavigate();

    const resetUserName = useResetRecoilState(userNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const reset = useResetRecoilState(isSubmitedAtom);
    const resetGender = useResetRecoilState(genderAtom);
    
    const handleReset = ()=>{
        resetUserName();
        resetEmail();
        reset();
        resetGender();
        navigate("/");
    }

  return (
    <Wrapper>
        <Title>Welcome {userName} </Title>
        <SubTitle>성별 : {gender}</SubTitle>
        <Button mode = {mode.button} onClick={handleReset}>Reset</Button>
    </Wrapper>
  )
}

export default MyPage;