import { useState, useEffect } from "react";

const Navbar = () => {
  const [datest, setDatest] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDatest(new Date()), 30000);
  }, []);
  return (
    <div className="navbar">
      <div className="item-list">
        <p>🍑</p>
        <b>Finder</b>
        <p>File</p>
        <p>Edit</p>
        <p></p>
      </div>
      <div className="item-list">
        <p>
          {datest.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
