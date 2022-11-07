import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <div   className=" max-w-6xl mx-auto">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
