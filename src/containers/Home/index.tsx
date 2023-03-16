/*
 *
 * Home
 *
 */

import { memo } from "react";

import reducersHome from "./store/reducers";
import { WrapHome } from "./styles";
import useInjectReducer from "src/redux/useInjectReducer";
import ErrorBound from "src/components/ErrorBound";

interface Props {}

// eslint-disable-next-line
function Home({}: Props) {
  useInjectReducer("Home", reducersHome);

  return (
    <ErrorBound>
      <WrapHome>HomeHomeHomeHomeHomeHomeHomeHomeHome HomeHomeHomeHome</WrapHome>
    </ErrorBound>
  );
}

export default memo(Home);
