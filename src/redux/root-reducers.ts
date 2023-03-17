/**
 * This file export all of type the Reducers
 * File is export only type, not the logic
 * huynq
 */

import { combineReducers } from "redux";
import About from "src/containers/About";
import App from "src/containers/App/App";
import Home from "src/containers/Home";
import Layout from "src/containers/Layout";
import Login from "src/containers/Login";
import Signup from "src/containers/Signup";

import Template from "src/containers/Template/store/reducers";
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly



//pages
const rootReducer = combineReducers({
  App,
  Home,
  About,
  Layout,
  Login,
  Signup,
  Template,
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly

  });

export default rootReducer;
