const NotFound = () => {
  return (
    <div className="not-found">
      <div className="modal">
        <div className="modal-inner">
          <div className="model-warp">
            <div className="model-text">
              <h2>Sorry</h2>
              <p>we couldn't find this page</p>
            </div>
            <a href="/" className="model-button stealth-link">
              Go Back home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
