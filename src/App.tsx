import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
    return (
        <>
            <Header />
            <main className="home-m">
                <section className="columns content  ">
                    <div className="column max-column gap-min main-cont">
                        <h1 className="title">Welcome to <span className="text-emphasis-blue">Project Manager</span></h1>
                        <p className="text">Get your projects and ideas in order, all in one place! Sign up now and discover a
                            smarter way to manage your work with efficiency and teamwork</p>
                        <div className="group center">
                            <button className="btn" data-type="get-started" onClick={() => window.location.href = '/signup'}>Get Started</button>
                        </div>
                    </div>
                    <div className="column flo">
                        <img className="floatwoman" src="/img/woman.png" alt="" />
                    </div>
                    <div className="column max-column stats">
                        <div className="stat-card">2000+ <br />Satisfied clients</div>
                        <div className="stat-card">400+ <br />Managed projects</div>
                        <div className="stat-card">500+<br /> Kanban boards</div>
                    </div>
                </section>
            </main>

            <section className="sec" id="manager">
                <div className="content gap">
                    <div className="aling-left gap-min">
                        <h2 className="title">The manager</h2>
                        <p className="text">Project Manager is a tool designed to make organizing and tracking your daily tasks
                            easier
                            than ever. With a clean, intuitive interface and powerful features, you can plan, prioritize, and
                            keep
                            tabs on your projects - whether you’re working solo or a with a team</p>
                        <div className="group center">
                            <button className="btn" data-type="learn-more">Learn More</button>
                        </div>
                    </div>
                    <div className="columns scroll">
                        <div className="column">
                            <div className="card-manager">
                                <img src="/img/mn-1.png" alt="imagem de fichario" />
                                <div className="group">
                                    <h3 className="text">Manage Projects</h3>
                                    <p className="subtitle">20+ projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card-manager">
                                <img src="/img/mn-2.png" alt="imagem de negocios" />
                                <div className="group">
                                    <h3 className="text">Track Tasks</h3>
                                    <p className="subtitle">50+ tasks</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card-manager">
                                <img src="/img/mn-3.png" alt="imagem de daily" />
                                <div className="group">
                                    <h3 className="text">Collaborate</h3>
                                    <p className="subtitle">10+ team members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec" id="tools">
                <div className="content">
                    <div className="aling-center gap">
                        <div className="group gap-min">
                            <h2 className="title">Freatured Tools</h2>
                            <p className="text">Tools to enhance your project management</p>
                            <button className="btn" data-type="view-all">View all</button>
                        </div>
                        <div className="columns">
                            <div className="column aling-center">
                                <i className="image-i-i"><img src="/img/i-i-tool.svg" alt="image tool-i-i" /></i>
                                <h3 className="subtitle">Task Scheduler</h3>
                                <p className="text">Plan and schedule tasks</p>
                            </div>

                            <div className="column aling-center">
                                <i className="image-i-i"><img src="/img/i-i-clock.svg" alt="image clock-i-i" /></i>
                                <h3 className="subtitle">Deadline Tracker</h3>
                                <p className="text">Keep back of project deadlines</p>
                            </div>

                            <div className="column aling-center">
                                <i className="image-i-i"><img src="/img/i-i-mens.svg" alt="image menseger-i-i" /></i>
                                <h3 className="subtitle">Comunication Hub</h3>
                                <p className="text">Centralized team communication</p>
                            </div>

                            <div className="column aling-center">
                                <i className="image-i-i"><img src="/img/i-i-table.svg" alt="image table-i-i" /></i>
                                <h3 className="subtitle">Progress Report</h3>
                                <p className="text">Track projet progress</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec" id="subscribe">
                <div className="content">
                    <div className="columns">
                        <div className="column center max-column justify-center gap-min">
                            <h2 className="title">Subscribe to Updates</h2>
                            <p className="text">Stay informed with our latest updates</p>
                        </div>
                        <div className="column max-column">
                            <form className="form" id="subscribeForm">
                                <div className="group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                                    <span className="alert-form">We promise not to spam</span>
                                </div>

                                <div className="group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                                    <span className="alert-form"></span>
                                </div>

                                <button className="btn" data-type="subscribe">Subscribe</button>

                            </form>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    );
}

export default App;

import 'boxicons';