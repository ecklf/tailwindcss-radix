import "../css/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <div className="dark">
      <Component {...pageProps} />
    </div>
  );
}

export default App;
