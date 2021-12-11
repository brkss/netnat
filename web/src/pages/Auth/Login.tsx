import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import { GoogleLogin } from "react-google-login";
import { useAuthMutation } from "../../generated/graphql";
import { setAccessToken } from "../../utils/token/token";

export const Login: React.FC = () => {
  const [auth] = useAuthMutation();

  const handleSuccess = (res: any) => {
    const auth_obj = {
      email: res.profileObj.email,
      name: `${res.profileObj.givenName} ${res.profileObj.familyName}`,
      id: res.profileObj.googleId,
      token: res.tokenId,
    };
    console.log("fail => ", auth_obj);
    auth({
      variables: {
        name: auth_obj.name,
        email: auth_obj.email,
        id: auth_obj.id,
        token: auth_obj.token,
      },
    }).then((res) => {
      if (res.data!.auth.status) {
        setAccessToken(res.data!.auth.token!);
      }
      // remember to handle error here !
      console.log("auth result ! => ", res);
    });
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
