import { Link } from "react-router-dom";
const MessageModal = ({ title, messag, to, button_text }) => {
  return (
    <div className="modal">
      <div className="modal-inner">
        <div className="model-warp">
          <div className="model-text">
            <h2>{title}</h2>
            <p>{messag}</p>
          </div>
          <Link to={to} className="model-button stealth-link">
            {button_text}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
