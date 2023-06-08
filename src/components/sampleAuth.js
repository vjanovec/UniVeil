
  import { useState, useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {
    logInUser,
    selectUser,
    authWithGoogle,
  } from "../redux/authSlice";
  import { Link, useNavigate } from "react-router-dom";
  
  export const LogIn = () => {
    const dispatch = useDispatch();
    const login = {
      email: null,
      password: null,
    };
    // const navigate = useNavigate();
    const user = useSelector(selectUser);
  
    // useEffect(() => {
    //   if (user.uid) {
    //     return navigate("/client");
    //   }
    // }, [user]);
  
    return (
                      <button
                        bg="gray.100"
                        leftIcon={<GoogleIcon boxSize="5" />}
                        iconSpacing="3"
                        onClick={() => dispatch(authWithGoogle())}
                      >
                        SignIn
                      </button>
                    
    );
  };
  