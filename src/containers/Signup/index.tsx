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

const { REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_FACEBOOK_CLIENT_ID } =
  process.env;
interface Props {}

// eslint-disable-next-line
function Signup({}: Props) {
  useInjectReducer("Signup", reducersSignup);

  return (
    <ErrorBound>
      <WrapSignup></WrapSignup>
    </ErrorBound>
  );
}
export default memo(Signup);
