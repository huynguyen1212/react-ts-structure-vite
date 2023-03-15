/*
 *
 * Login
 * make by huynq
 */

import React, { memo, useEffect } from "react";
import ErrorBound from "src/components/ErrorBound";
import useInjectReducer from "src/redux/useInjectReducer";
import reducersLogin from "./store/reducers";
import WrapLogin from "./style";
import { Container } from "styled-bootstrap-grid";
import { Link, useHistory } from "react-router-dom";
import fb_Icon from "assets/image/fb_icon.png";

interface Props {}

// eslint-disable-next-line
function Login({}: Props) {
  return (
    <ErrorBound>
      <WrapLogin></WrapLogin>
    </ErrorBound>
  );
}
export default memo(Login);
