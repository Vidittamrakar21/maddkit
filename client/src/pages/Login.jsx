import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const LoginPage = () => {
  const handleGoogleLogin = () => {
    // Here you'd trigger your Google OAuth flow
    console.log("Google login clicked");
  };

  const [searchParams] = useSearchParams();
    const redirect = searchParams.get("redirects");
  const login = useGoogleLogin({
    flow: 'implicit', // IMPORTANT: enables GeneralOAuthFlow
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
  
      // Fetch user info using access token
      const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      });
  
      const userInfo = await res.json();

      console.log(userInfo); // name, email, picture, etc.
      const wp = await (await axios.post('https://maddkit.com/wp-json/custom-api/google-login', {email: userInfo.email, name: userInfo.name})).data;
      console.log(wp)
      if(wp.success === true){
        localStorage.setItem('id',wp.user.id);
        window.location.href = `/${redirect}`
      }

      
    },
    onError: () => {
      console.log('Login Failed');
    },
  });

  return (
    // <GoogleOAuthProvider clientId="848050733143-cnbakntf40ekhb93m8ek0mu10sdo26jn.apps.googleusercontent.com">
    <div className="min-h-screen bg-[#ED1C28] flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-[#ED1C28] mb-6 font5">Welcome To Maddkit</h1>
        <p className="text-gray-600 mb-8">Login to continue to your account</p>

        {/* <GoogleLogin
        
        onSuccess={(credentialResponse) => {
        console.log(credentialResponse); // send to backend
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    /> */}

            <button
            onClick={() => login()}
            className="bg-[#ED1C28] text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700"
          >
            Sign in with Google
          </button>
      </div>
    </div>
    // </GoogleOAuthProvider>
  );
};

export default LoginPage;
