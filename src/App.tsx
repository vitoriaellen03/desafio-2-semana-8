import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
    return (
        <>
            <Header />

            <main className="home-m">
                <section className="">
                    <div className="">
                        <h1 className="">Welcome to <span className="">Project Manager</span></h1>
                        <p className="">Get your projects and ideas in order, all in one place! Sign up now and discover a
                            smarter way to manage your work with efficiency and teamwork</p>
                        <button className="btn" data-type="get-started" onClick={() => window.location.href = '/'}>Get Started</button>

                    </div>
                    <div className="column max-column">
                        <div className="cards-info">oi</div>
                        <div className="cards-info">oi</div>
                        <div className="cards-info">oi</div>
                    </div>
                </section>
                <img className="floatwoman" src="/img/woman.png" alt="" />
            </main>
            <section>
            <section className="">
                    <div className="">
                        <h1 className="">Welcome to <span className="">Project Manager</span></h1>
                        <p className="">Get your projects and ideas in order, all in one place! Sign up now and discover a
                            smarter way to manage your work with efficiency and teamwork</p>
                        <button className="btn" data-type="get-started" onClick={() => window.location.href = '/'}>Get Started</button>

                    </div>
                    <div className="column max-column">
                        <div className="cards-info">oi</div>
                        <div className="cards-info">oi</div>
                        <div className="cards-info">oi</div>
                    </div>
                </section>
            </section>

            <Footer />

        </>
    );
}

export default App;

import 'boxicons';