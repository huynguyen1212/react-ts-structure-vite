/*
 *
 * Signup
 * make by huynq
 */

import React, { memo } from "react";
import ErrorBound from "src/components/ErrorBound";
import useInjectReducer from "src/redux/useInjectReducer";
import reducersSignup from "./store/reducers";
import WrapSignup from "./style";


interface Props {}

// eslint-disable-next-line
function Signup({}: Props) {
  useInjectReducer("Signup", reducersSignup);

  return (
    <ErrorBound>
      <WrapSignup>Hi</WrapSignup>
    </ErrorBound>
  );
}
export default memo(Signup);
