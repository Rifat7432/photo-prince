import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import Loading from "./Share/Loading";

function App() {
  return (
    <div className=" max-w-6xl mx-auto h-screen">
      <RouterProvider
        router={router}
        fallbackElement={<Loading></Loading>}
      ></RouterProvider>
    </div>
  );
}

export default App;
