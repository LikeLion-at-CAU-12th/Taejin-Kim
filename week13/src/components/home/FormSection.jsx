import React, { useContext } from 'react'
import { Button, Wrapper } from '../layout/common'
import { Form } from './Form'
import { ThemeColorContext } from '../../context/context'
import styled from 'styled-components';
import Modal from '../../modal/Modal'
import { useRecoilState } from 'recoil';
import { modalAtom } from '../../recoil/atom';

const FormSection = () => {
    const mode = useContext(ThemeColorContext);
    const [modal, setModal] = useRecoilState(modalAtom);

    const handleBtn = ()=>{
        setModal(true);
    }

    const handleRadio = (e)=>{
      const radios = document.getElementsByName('choice');
      radios.forEach(radio => {
        if (radio !==e.target) {
          radio.checked = false;
        }
      })
    }

  return (
    <Wrapper>
        <Form type='text' inputType='이름'/>
        <Form type='email' inputType='이메일'/>

        <StyledRadio>
          <StyledForm>
            <Form type = 'radio' inputType='남' onClick={handleRadio} name = 'choice'/>
          </StyledForm>
          <StyledForm>
            <Form type = 'radio' inputType = '여' onClick = {handleRadio} name = 'choice'/>
          </StyledForm>
          
        </StyledRadio>
        
        <Button mode = {mode.button} onClick={handleBtn}>제출</Button>
        {modal && (
           <Modal />
          
        )}
    </Wrapper>
  )
}

export default FormSection

const StyledRadio = styled.div `
  display: flex;
`
const StyledForm = styled.div`
  display: flex;
  margin-right:10px;
`