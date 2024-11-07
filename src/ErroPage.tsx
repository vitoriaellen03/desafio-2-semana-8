import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import postit from "/img/postit.png";

const ErroPage = () => {
  return (
    <>
    <Header />
      <main className="flex justify-center align-center mt-32 bg-white">
        <section className="flex items-center">
          <div>
            <img className="h-439 w-455" src={postit} />
          </div>
          <div>
            <h1 className="text-8xl pb-4">404</h1>
            <p className="text-justify text-lg">
              Oops! Nothing to see here, just a lost kanban task.
            </p>
            <div className="text-right text-decoration-line: underline pt-2">
              <a href="/">Go back to home</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ErroPage;
