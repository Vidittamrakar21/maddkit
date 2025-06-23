import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
  const handleGoogleLogin = () => {
    // Here you'd trigger your Google OAuth flow
    console.log("Google login clicked");
  };

  return (
    <GoogleOAuthProvider clientId="848050733143-cnbakntf40ekhb93m8ek0mu10sdo26jn.apps.googleusercontent.com">
    <div className="min-h-screen bg-[#ED1C28] flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-[#ED1C28] mb-6 font5">Welcome To Maddkit</h1>
        <p className="text-gray-600 mb-8">Login to continue to your account</p>

        {/* <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 w-full bg-[#ED1C28] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          <FcGoogle className="text-xl bg-white rounded-full" />
          Continue with Google
        </button> */}

        <GoogleLogin
        
        onSuccess={(credentialResponse) => {
        console.log(credentialResponse); // send to backend
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
      </div>
    </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
