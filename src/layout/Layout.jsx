import {Outlet} from "react-router-dom";
import {Suspense} from "react";
import PageWrapper from "../components/PageWrapper.jsx";
import Header from "../modules/header/Header.jsx";
import Footer from "../modules/footer/Footer.jsx";

function Layout(props) {
    return (
        <PageWrapper>
            <Header/>
            <main>
                <div>
                    <Suspense fallback={null}>
                        <Outlet/>
                    </Suspense>
                </div>
            </main>
            <Footer/>
        </PageWrapper>
    );
}

export default Layout;