import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuth } from "../../pages/utils/auth";

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const isLogin = isAuth();
        if (isLogin) {
          return <Component {...props}></Component>;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                from: props.location,
              }}
            ></Redirect>
          );
        }
      }}
    ></Route>
  );
};
export default AuthRoute;
