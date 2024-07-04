import React from 'react'
import { useRecoilState } from 'recoil'
import { emailAtom, userNameAtom, genderAtom } from '../../recoil/atom'

export const Form = ({type, inputType, name}) => {
    const [userName, setUserName] = useRecoilState(userNameAtom);
    const [email, setEmail] = useRecoilState(emailAtom);
    const [gender, setGender] = useRecoilState(genderAtom);

    const onChange = (e)=>{
        const value = e.target.value;
        if(inputType === '이름'){
          setUserName(value);
        }else if(inputType === '남'){
          setGender('남');
        }else if(inputType ==='여'){
          setGender('여');
        }
        else{
            setEmail(value);
        }
    }

  return (
    <>
    <div>{inputType}</div>
    <input type={type} onChange={onChange} onClick={onChange} name= {name} />
    </>
  )
}

export default Form
