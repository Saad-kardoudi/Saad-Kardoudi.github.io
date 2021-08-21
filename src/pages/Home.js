import { useEffect } from "react";
import File from "../component/File";
import Folder from "../component/Folder";
import FolderHandler from "../functions/FolderHandler";

const Home = () => {


  useEffect(() => {
    setTimeout(() => {
    FolderHandler();  
    },500);
    
  });

  return (
    <div className="home" onLoad={FolderHandler} >
      <Folder title="My Projects" to="/projects" tabIn="1" />
      <Folder title="My Service" to="/services" tabIn="2" />
      <Folder title="Technologies" to="/technologies" full="true" tabIn="3" />
      <Folder title="About Me" to="/about" full="true" tabIn="4" />
      <File
        title="My Cv"
        full={true}
        to={process.env.PUBLIC_URL + "SAAD_KARDOUDI_CV.pdf"}
        tabIn="5"
        id="1"
      />
    </div>
  );
};

export default Home;
