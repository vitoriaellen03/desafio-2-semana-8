import Header from "../components/Header";
import Footer from "../components/Footer";
import locker from "/img/locker.png";


const BlockedPage = () => {
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