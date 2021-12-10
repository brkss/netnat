import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import { GoogleLogin } from "react-google-login";

export const Login: React.FC = () => {
  const handleSuccess = (res: any) => {
    const auth_obj = {
      email: res.profileObj.email,
      name: `${res.profileObj.givenName} ${res.profileObj.familyName}`,
      id: res.profileObj.googleId,
      token: res.tokenId,
    };
    console.log("fail => ", auth_obj);
  };

  const handleFailure = (res: any) => {
    console.log("fail => ", res);
  };

  return (
    <Box h={"100vh"}>
      <Center h={"100%"}>
        <GoogleLogin
          clientId="1027194687162-f3fmc6puuu2n3sa24mj4n611k9oftk3s.apps.googleusercontent.com"
          className={"btn-google"}
          buttonText="Login With Google"
          onSuccess={(res) => handleSuccess(res)}
          onFailure={(res) => handleFailure(res)}
          cookiePolicy={"single_host_origin"}
          style={{ boxShadow: "none !important", outline: "none" }}
        />
      </Center>
    </Box>
  );
};
