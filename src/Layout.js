import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import Admin from "./components/Admin/Admin";
import DashBoard from "./components/Admin/Content/DashBoard";
import ManageUser from "./components/Admin/Content/ManageUser";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import HomePage from "./components/Home/HomePage";
import DetailQuiz from "./components/User/DetailQuiz";
import ListQuiz from "./components/User/ListQuiz";

const NotFound = () =>{
    return (
        <div className="container mt-5 alert alert-danger">
           404 Not found data current url
        </div>
    )
}
const Layout = (props) => {
    return (
    <>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="/users" element={<ListQuiz />}></Route>
            </Route>
            
            <Route path="/quiz/:id" element={<DetailQuiz />}></Route>

            <Route path="/admins" element={<Admin />}>
                <Route index element={<DashBoard />}></Route>
                <Route path="manage-users" element={<ManageUser />}></Route>
            </Route>

            <Route path="/login" element={<Login/>}></Route>

            <Route path="/register" element={<Register/>}></Route>
            
            <Route path='*' element={<NotFound />} />
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
    </>)
}

export default Layout;