import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import GsapTransition from "./components/GsapTransition";
import { Provider } from "react-redux";
import { store } from "../store/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <GsapTransition />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
