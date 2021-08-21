import FolderHandler from "../functions/FolderHandler";
import { useEffect } from "react";
import File from "../component/File";
const Technologie = () => {
  useEffect(() => {
    setTimeout(() => {
      FolderHandler();
    }, 500);
  });
  return (
    <div className="technologie">
      <File
        title="Mind set"
        full={true}
        to={process.env.PUBLIC_URL + "/files/Mindset.html"}
        tabIn="1"
        id="1"
      />
      <File
        title="Front end"
        full={true}
        to={process.env.PUBLIC_URL + "/files/Frontend.html"}
        tabIn="2"
        id="2"
      />
      <File
        title="Back end"
        full={true}
        to={process.env.PUBLIC_URL + "/files/Backend.html"}
        tabIn="3"
        id="3"
      />
      <File
        title="Procedural Programming"
        full={true}
        to={process.env.PUBLIC_URL + "/files/ProceduralProgramming.html"}
        tabIn="4"
        id="4"
      />
    </div>
  );
};

export default Technologie;
