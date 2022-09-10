import {createContext, useEffect, useReducer}from "react";
import AuthReducer from "./AuthReducer";
import React from 'react';

//最初のユーザー情報を定義
const initialState ={
    //user:null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false, //ログインしようともしてないですね。
    error: false, //エラーも吐いてないですね。
};



export const AuthContext =createContext(initialState);



export const AuthContextProvider =({children})=>{
    const [state,dispatch] =useReducer(AuthReducer,initialState);

    //set user data in localstroge
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);


    return (
        <AuthContext.Provider
        value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
};