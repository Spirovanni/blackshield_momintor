import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
import "../styles/meanmenu.min.css";
import "../styles/flaticon.css";
import "../node_modules/video-react/styles/scss/video-react.scss";
import "react-accessible-accordion/dist/fancy-example.css";
import "../node_modules/photoswipe/dist/photoswipe.css";
import 'react-toastify/dist/ReactToastify.css';
import "react-tabs/style/react-tabs.css";
import "../styles/style.css";
import "../styles/responsive.css";
import '../styles/rtl.css';
import '../styles/globals.css';

import Layout from "../components/_App/Layout";
import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";

const MyApp = ({ Component, pageProps }) => {
  // console.log(pageProps)
  return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
  );
};

export default MyApp
