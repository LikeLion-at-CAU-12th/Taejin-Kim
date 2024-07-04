import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components'
import { emailAtom, genderAtom, isSubmitedAtom, modalAtom, userNameAtom } from '../recoil/atom';
import { ThemeColorContext } from '../context/context';
import { Title } from '../components/layout/common';

const Modal = () => {
    const navigate = useNavigate();
    const setIsSubmited = useSetRecoilState(isSubmitedAtom);
    const [modal, setModal] = useRecoilState(modalAtom);
    const mode = useContext(ThemeColorContext);
    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);
    const gender = useRecoilValue(genderAtom);

    const handleBtn = ()=>{
        setIsSubmited(true);
        navigate("/mypage");
    }
    const handleCloseBtn = ()=>{
        setModal(false);
    }
    

  return (
    <ModalBackground>
        <Container mode = {mode.sub}>
        <Title>입력값을 확인해주세요</Title>
        <br></br>
        <div>이름 : {userName}</div>
        <div>E-mail : {email}</div>
        <div>성별 : {gender}</div>

        <button onClick={handleBtn}>확인</button>
        <button onClick={handleCloseBtn} >닫기</button>
        </Container>
    </ModalBackground>
    
  )
}

export default Modal

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  background-color: ${(props) => props.mode};
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `