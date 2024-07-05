import { useRecoilState } from "recoil"
import { loginAtom } from "../recoil/atom"

export const useCheckLogin  = ()=>{
    const [isLogin, setLogin] = useRecoilState(loginAtom);
    
    const checkLogin = () =>{
       if (localStorage.getItem("access")){
        setLogin(true);
    } else if (localStorage.getItem("refresh")){
        setLogin(true);
    } else {
        setLogin(false);
    }
    console.log(isLogin);
    };

    return checkLogin;
    
};