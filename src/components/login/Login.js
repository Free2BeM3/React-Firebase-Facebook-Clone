import React, { useState } from 'react'
import "./Login.css";
import {Button} from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from '../../StateProvider';
import { actionTypes } from "../../reducer";

function Login() {

  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // sign In..
    auth.signInWithPopup(provider).then((result) => {

      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      })
    })
    .catch((error) => alert(error.message));
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img 
        src="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-facebook-512.png"
        alt=""
        />
        <img 
        src="data:image/png;base64,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"
        alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login