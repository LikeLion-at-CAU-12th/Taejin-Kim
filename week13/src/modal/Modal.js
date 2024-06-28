import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components'
import { isSubmitedAtom, modalAtom } from '../recoil/atom';
import { ThemeColorContext } from '../context/context';

const Modal = () => {
    const navigate = useNavigate();
    const setIsSubmited = useSetRecoilState(isSubmitedAtom);
    const [modal, setModal] = useRecoilState(modalAtom);
    const mode = useContext(ThemeColorContext);

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
        <div>Modal</div>
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