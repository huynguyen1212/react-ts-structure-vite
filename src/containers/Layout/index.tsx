/*
 *
 * Layout
 * make by huynq
 */

import { memo, ReactNode } from "react";
import ErrorBound from "src/components/ErrorBound";
import useInjectReducer from "src/redux/useInjectReducer";
import reducersLayout from "./store/reducers";
import WrapLayout from "./style";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}
// eslint-disable-next-line
function Layout({ children }: Props) {
  useInjectReducer("Layout", reducersLayout);

  return (
    <ErrorBound>
      <WrapLayout>
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </WrapLayout>
    </ErrorBound>
  );
}
export default memo(Layout);
