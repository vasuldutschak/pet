import {Outlet} from "react-router-dom";
import {Suspense} from "react";
import PageWrapper from "../components/PageWrapper.jsx";
import Header from "../modules/header/Header.jsx";

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
            <footer>
                <h2>FOOOTERRR</h2>
            </footer>
        </PageWrapper>
    );
}

export default Layout;