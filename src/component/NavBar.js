import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const [datest, setDatest] = useState(new Date());
  const back = () => {
    if (window.location.pathname !== "/") {
      return (
        <p
          className="go-back"
          onClick={() => {
            history.goBack();
          }}
          title="go back"
        >
          <span>
            <i class="bx bx-chevron-left"></i>
          </span>
          🍑
        </p>
      );
    } else {
      return <p>🍑</p>;
    }
  };
  useEffect(() => {
    setInterval(() => setDatest(new Date()), 500);
  });
  return (
    <div className="navbar">
      <div className="item-list">
        {back()}
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
