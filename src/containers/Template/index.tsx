/*
*
* Template
* make by huynq
*/

import React, { memo } from 'react';
import ErrorBound from 'src/components/ErrorBound';
import useInjectReducer from 'src/redux/useInjectReducer';
import reducersTemplate from './store/reducers';
import WrapTemplate from './style';

interface Props {}

// eslint-disable-next-line
function Template({}: Props) {
useInjectReducer('Template', reducersTemplate);
return (
<ErrorBound>
  <WrapTemplate> Template </WrapTemplate>
</ErrorBound>
);
}
export default memo(Template);