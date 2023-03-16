/*
 *
 * Login
 * make by huynq
 */

import React, { memo } from "react";
import ErrorBound from "src/components/ErrorBound";
import WrapLogin from "./style";

interface Props {}

// eslint-disable-next-line
function Login({}: Props) {
  return (
    <ErrorBound>
      <WrapLogin>hi</WrapLogin>
    </ErrorBound>
  );
}
export default memo(Login);
