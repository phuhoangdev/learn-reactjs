import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import DashBoard from "./components/Content/DashBoard";
import ManageUser from "./components/Content/ManageUser";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Suspense } from "react";
import PrivateRoute from "./routes/PrivateRoute";

const Layout = () => {
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <Routes>
            <Route path="/" element={<App />}>
               <Route index element={<HomePage />} />
               <Route path="users" element={<User />} />
            </Route>

            <Route
               path="admins"
               element={
                  <PrivateRoute>
                     <Admin />
                  </PrivateRoute>
               }
            >
               <Route index element={<DashBoard />} />
               <Route path="manage-users" element={<ManageUser />} />
            </Route>

            <Route path="login" element={<Login />} />

            <Route path="register" element={<Register />} />
         </Routes>

         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
         />
      </Suspense>
   );
};
export default Layout;
