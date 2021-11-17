import { IdProvider } from "@radix-ui/react-id";
import "../css/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  );
}

export default App;
