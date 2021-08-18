import { useEffect } from "react";
import File from "../component/File";
import Folder from "../component/Folder";

const About = () => {
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
    <div className="about" onLoad={folderHandler}>
      <File
        title="About me"
        full={true}
        to={process.env.PUBLIC_URL + "/files/Aboutme.html"}
        tabIn="1"
        id="1"
      />
      <Folder title="Best of Quotes" to="/about/bestofquotes" tabIn="2" />
      <File
        title="Readme.txt"
        full={true}
        to={process.env.PUBLIC_URL + "/files/Readme.html"}
        tabIn="3"
        id="3"
      />
    </div>
  );
};

export default About;