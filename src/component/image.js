import { useState } from "react";
const Image = ({ to, title, tabIn, openImg, key,id }) => {
  /* start dragging */
  const [diffx, setDiffx] = useState(0);
  const [diffy, setDiffy] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [styles, setStyles] = useState(null);
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
  /*end dragging*/
  return (
    <div
      key={key}
      id={id}
      tabIndex={tabIn}
      className="folder-holder"
      style={styles}
      onMouseDown={drageStart}
      onMouseMove={drageing}
      onMouseUp={drageEnd}
      onTouchStart={() => {
        openImg(to);
      }}
      onDoubleClick={() => {
        openImg(to);
      }}
    >
      <div className="file">
        <img src={process.env.PUBLIC_URL + `/quotes/vb${to}.jpg`} alt="Quote" />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Image;
