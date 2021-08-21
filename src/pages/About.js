import { useEffect } from "react";
import File from "../component/File";
import Folder from "../component/Folder";
import FolderHandler from "../functions/FolderHandler";

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      FolderHandler();  
      },500);
  });

  return (
    <div className="about" onLoad={FolderHandler}>
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
