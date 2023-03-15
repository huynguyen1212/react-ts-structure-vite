/*
 *
 * About
 * make by huynq
 */

import React, { memo } from "react";
import ErrorBoundary from "src/components/ErrorBound";
import useInjectReducer from "src/redux/useInjectReducer";

import reducersAbout from "./store/reducers";
import WrapAbout from "./style";

interface Props {}

// eslint-disable-next-line
function About({}: Props) {
  useInjectReducer("About", reducersAbout);
  return (
    <ErrorBoundary>
      <WrapAbout> About </WrapAbout>
    </ErrorBoundary>
  );
}
export default memo(About);
