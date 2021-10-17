import File from "../component/File";
import Folder from "../component/Folder";

const About = () => {
  return (
    <div className="about">
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
