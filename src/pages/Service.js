import MessageModal from "../component/MessageModal";

const Service = () => {
  return (
    <div className="service">
      <MessageModal
        title="Sorry"
        messag="this page is under construction"
        to="/"
        button_text="Go Back home"
      />
    </div>
  );
};

export default Service;
