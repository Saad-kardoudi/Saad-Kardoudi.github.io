import { useState } from "react";
import { useHistory } from "react-router-dom";
const Folder = ({ title, full, to, tabIn }) => {
  const [diffx, setDiffx] = useState(0);
  const [diffy, setDiffy] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [styles, setStyles] = useState(null);
  const histroy = useHistory();
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
  return (
    <div
      tabIndex={tabIn}
      className="folder-holder"
      style={styles}
      onMouseDown={drageStart}
      onMouseMove={drageing}
      onMouseUp={drageEnd}
      onDoubleClick={() => {
        histroy.push(to);
      }}
    >
      <div className="folder">
        <img
          src={
            full
              ? process.env.PUBLIC_URL + "/folder-full.png"
              : process.env.PUBLIC_URL + "/folder.png"
          }
          alt="folder"
        />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Folder;
