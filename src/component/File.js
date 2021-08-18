import { useState } from "react";
import FileOpener from "./FileOpener";
const File = ({ title, full, to, tabIn, id }) => {
  const [child, setChild] = useState(null);
  const [diffx, setDiffx] = useState(0);
  const [diffy, setDiffy] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [styles, setStyles] = useState(null);
  //const histroy = useHistory();
  const drageStart = (e) => {
    e.preventDefault();
    setDiffx(e.screenX - e.currentTarget.getBoundingClientRect().left);
    setDiffy(e.screenY - e.currentTarget.getBoundingClientRect().top);
    setDragging(true);
  };
  const drageing = (e) => {
    e.preventDefault();
    if (dragging === true) {
      let left = e.screenX - diffx;
      let top = e.screenY - diffy;
      setStyles({
        position: "absolute",
        left: left,
        top: top,
      });
    }
  };
  const drageEnd = (e) => {
    e.preventDefault();
    setDragging(false);
  };
  const closeFile = () => {
    setChild(null);
  };
  const openFile = (title, fileUrl, id) => {
    setChild(
      <FileOpener
        title={title}
        file_url={fileUrl}
        closeFile={closeFile}
        id={id}
      />
    );
  };
  return (
    <div>
      <div
        tabIndex={tabIn}
        className="folder-holder"
        style={styles}
        onMouseDown={drageStart}
        onMouseMove={drageing}
        onMouseUp={drageEnd}
        onTouchStart={() => {
          openFile(title, to, id);
        }}
        onDoubleClick={() => {
          openFile(title, to, id);
        }}
      >
        <div className="file">
          <img
            src={
              full
                ? process.env.PUBLIC_URL + "/file_text.png"
                : process.env.PUBLIC_URL + "/file.png"
            }
            alt="folder"
          />
          <p>{title}</p>
        </div>
      </div>
      {child}
    </div>
  );
};

export default File;
