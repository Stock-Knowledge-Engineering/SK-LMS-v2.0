import '../styles/globals.css'

import { wrapper } from "../redux/store/store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
