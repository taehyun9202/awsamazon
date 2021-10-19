import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { useRouter } from "next/dist/client/router";
import config from "../aws-exports";
import Amplify from "aws-amplify";
Amplify.configure(config);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider store={store}>
      {!router.pathname.includes("sell") && <Header />}
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
