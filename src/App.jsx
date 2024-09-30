import {Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import {lazy} from "react";
import './App.css'
const Home = lazy(() => import('./pages/Home.jsx'))

function App(props) {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="about" element={<h1>about</h1>} />
                <Route path="*" element={<h1>404</h1>} />
            </Route>
        </Routes>
    );
}

export default App;