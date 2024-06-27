import React, { useContext } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { emailAtom, isSubmitedAtom, userNameAtom } from '../recoil/atom';
import { Button, Title, Wrapper } from '../components/layout/common';
import { ThemeColorContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

export const MyPage = () => {
    const userName = useRecoilValue(userNameAtom);
    const mode = useContext(ThemeColorContext);
    const navigate = useNavigate();

    const resetUserName = useResetRecoilState(userNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const reset = useResetRecoilState(isSubmitedAtom);
    
    const handleReset = ()=>{
        resetUserName();
        resetEmail();
        reset();
        navigate("/");
    }

  return (
    <Wrapper>
        <Title>Welcome {userName} </Title>
        <Button mode = {mode.button} onClick={handleReset}>Reset</Button>
    </Wrapper>
  )
}

export default MyPage;