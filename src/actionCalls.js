import axios from "axios";
export const loginCaall =async (user,dispatch)=>{
    dispatch({type:"LOGIN_START"});
    try {
        const response =await axios.post("auth/login",user);
        dispatch({type:"LOGIN_SUCCESS",payload:response.data});
    }catch(err){
        dispatch({type:"LOGIN_ERROE",payload:err});

    }
}