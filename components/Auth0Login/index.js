import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();
	return <button
		className={'px-5 max-w-md py-1 bg-red-600 rounded-full text-white-500 border hover:bg-blue-500'}
		onClick={() => loginWithRedirect()}>Log In >> </button>;
};

export default LoginButton;