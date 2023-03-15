/**
 *
 * ProtectRoute
 * make by huynq
 */
import React, { memo } from 'react';
import { Link, Route, RouteProps } from 'react-router-dom';
import { Alert } from '../Alert';

const CheckRoute = ({ children }: { children: any }) => {
  // if no has token in localStoreage when access to private route
  if (!localStorage.getItem('token')) {
    Alert({ name: 'Đăng nhập lại.', icon: 'warning' });
    return <Link to="/login" />;
  }
  return children;
};

function ProtectRoute(props: RouteProps) {
  return (
    <CheckRoute>
      <Route {...props} />
    </CheckRoute>
  );
}

export default memo(ProtectRoute);
