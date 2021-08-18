const ShowImage = ({to,closeImg}) => {
  return (
    <div className="show-img">
      <div className="modal-inner">
          <div className="close" onClick={closeImg}><i className='bx bx-x'></i></div>        
            <img className="main-img" src={process.env.PUBLIC_URL + `/quotes/vb${to}.jpg`} alt="Chi Haja" />        
      </div>
    </div>
  );
};

export default ShowImage;
