import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";

const FileOpener = ({ title, file_url, closeFile, id }) => {
  const[focus,setFocus]=useState({zIndex:15});
  const [size, setSize] = useState({
	width: "100%",
	height: "calc(100vh - 125px)",
  });
  const [position, setPosition] = useState({x:0,y:0});
  const [max, setMax] = useState(true);
  const [dragging, setDragging] = useState(true);
  const [enableResizing, setEnableResizing] = useState({
	top: false,
	right: false,
	bottom: false,
	left: false,
	topRight: false,
	bottomRight: false,
	bottomLeft: false,
	topLeft: false,
  });
  const closeClick = () => {
	closeFile();
  };
  const maxClick = () => {
	if (max) {
	  setMax(false);
	  setDragging(false);
	  setEnableResizing({
		top: true,
		right: true,
		bottom: true,
		left: true,
		topRight: true,
		bottomRight: true,
		bottomLeft: true,
		topLeft: true,
	  });
	  setSize(null);
	  setPosition(null);
	} else {
	  setMax(true);
	  setDragging(true);
	  setEnableResizing({
		top: false,
		right: false,
		bottom: false,
		left: false,
		topRight: false,
		bottomRight: false,
		bottomLeft: false,
		topLeft: false,
	  });
	  setSize({
		width: "100%",
		height: "calc(100vh - 125px)",
	  });
	  setPosition({ x: 0, y: 0 });
	}
  };
  const minClick = () => {};
  const focusin=() => {	     
	setFocus({zIndex:15});
  }
const focusout=() => {	 
  setFocus({zIndex:10});
}
  useEffect(() => {
	  document.getElementById(id).focus();
  }, [id]);
  return (
	<Rnd
	  enableResizing={enableResizing}
	  disableDragging={dragging}
	  size={size}
	  position={position}
	  style={focus}
	  bounds="window"
	  className="file-opener"
	  tabIndex={id}
	  id={id}
	  onFocus={focusin} onBlur ={focusout}
	  autoFocus
	>
	  <div className="file-inner" >
		<div className="file-top">
		  <div className="buton">
			<div className="window-button close" onClick={closeClick}></div>
			<div className="window-button max" onClick={maxClick}></div>
			<div className="window-button min" onClick={minClick}></div>
		  </div>
		  <div className="file-title">{title}</div>
		</div>
		<div className="file-main">
		  <iframe
			src={process.env.PUBLIC_URL + file_url}
			title="description"
			className="main"
			height="100%"
			width="100%"
		  />
		</div>
	  </div>
	</Rnd>
  );
};

export default FileOpener;
