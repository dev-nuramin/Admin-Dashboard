import { RouterProvider } from "react-router-dom";
import router from "./router/routers";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoggedInUser } from "./Redux/Features/auth/authApiSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem('user')){
      dispatch(getLoggedInUser());
    }
    
  }, [dispatch]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
