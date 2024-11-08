import Header from "../components/Header";
import Footer from "../components/Footer";
import locker from "/img/locker.png";
import { useNavigate } from "react-router-dom";


const BlockedPage = () => {
  const navigate = useNavigate()
  return (
    <>
    <Header />
      <main className="flex justify-center align-center bg-white">
        <section className="flex items-center">
          <div>
            <img className="h-439 w-455" src={locker} />
          </div>
          <div>
            <h1 className="text-8xl pb-4">403</h1>
            <p className="text-justify text-lg">
            Nothing to see here... yet! To see this content, you need to <button onClick={() => navigate("/login")}>log in.</button>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlockedPage;