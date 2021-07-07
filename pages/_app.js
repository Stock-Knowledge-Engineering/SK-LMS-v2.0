import '../styles/globals.css';
import 'animate.css';
import "quill/dist/quill.core.css";
import 'quill/dist/quill.snow.css';


import { wrapper } from "../redux/store/store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
