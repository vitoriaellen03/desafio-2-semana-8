import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import postit from "/img/postit.png"



const ErroPage = () => {
  return (
    <div className="flex justify-center align-center mt-32 bg-white">
      <div className="flex items-center">
        <div>
          <img className="h-439 w-455" src={postit} />
        </div>
      <div>
        <h1 className="font-family: roboto text-8xl pb-4">
          404
        </h1> 
        <p className="font-family: roboto text-justify text-lg">
          Oops! Nothing to see here, just a lost kanban task.
        </p>
        <div className="text-right ext-decoration-line: underline pt-2">
            <a href="/">Go back to home</a>
        </div>
        </div>
      </div>  
    </div>
    
  );
  
};

export default ErroPage;



