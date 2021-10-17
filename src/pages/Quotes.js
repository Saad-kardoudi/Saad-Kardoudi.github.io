import { useState } from "react";
import Image from "../component/image";
import ShowImage from "../component/ShowImage";
const Quotes = () => {
  const [child, setChild] = useState(null);
  const [vb] = useState([
    { id: 1, to: 29 },
    { id: 2, to: 39 },
    { id: 3, to: 56 },
    { id: 4, to: 64 },
    { id: 5, to: 90 },
    { id: 6, to: 93 },
    { id: 7, to: 34 },
  ]);

  const openImg = (to) => {
    setChild(<ShowImage to={to} closeImg={closeImg} />);
  };
  const closeImg = () => {
    setChild(null);
  };
  return (
    <div className="quotes">
      {vb.map((vbs) => (
        <Image
          to={vbs.to}
          title={`vb${vbs.to}.jpg`}
          tabIn={vbs.id}
          key={vbs.id}
          id={vbs.id}
          openImg={openImg}
        />
      ))}
      {child}
    </div>
  );
};

export default Quotes;
