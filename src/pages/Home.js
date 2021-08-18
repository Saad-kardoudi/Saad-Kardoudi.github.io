import { useEffect } from "react";
import File from "../component/File";
import Folder from "../component/Folder";

const Home = () => {
  const folderHandler = () => {
    let folders = document.getElementsByClassName("folder-holder");
    let left = folders[0].offsetLeft + folders[0].offsetWidth;
    folders[0].style.top = "50px";
    for (let index = 1; index < folders.length; index++) {
      folders[index].style.left = `${left}px`;
      folders[index].style.top = "50px";
      left = left + folders[index].offsetWidth;
    }
  };

  useEffect(() => {
    folderHandler();
  });

  return (
    <div className="home" onLoad={folderHandler}>
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
