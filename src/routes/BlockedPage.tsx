import Header from "../components/Header";
import Footer from "../components/Footer";
import locker from "/img/locker.png";


const BlockedPage = () => {
  return (
    <>
    <Header />
      <main className="sec flex-grow">
        <section className="flex items-center columns">
          <div className="column">
            <img className="h-439 w-455" src={locker} />
          </div>
          <div className="column">
            <h2 className="text-8xl primary">403</h2>
            <p className="text-justify text-lg">
            Nothing to see here... yet! To see this content, you need to <a className="text-decoration: underline" href="/login">log in.</a> 
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlockedPage;