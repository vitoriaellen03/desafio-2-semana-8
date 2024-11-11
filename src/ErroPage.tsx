import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import postit from "/img/postit.png";

const ErroPage = () => {
  return (
    <>
      <Header />
      <main className="sec flex-grow">
        <section className="columns min-gap items-center flex-row">
          <div className="column">
            <img className="h-439 w-455" src={postit} />
          </div>
          <div className="column">
            <h1 className="text-8xl pb-4">404</h1>
            <p className="text-justify text-lg">
              Oops! Nothing to see here, just a lost kanban task.
            </p>
            <div className="text-right underline pt-2">
              <Link to="/">Go back to home</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ErroPage;