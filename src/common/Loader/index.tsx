import './style.css';
const Loader = () => {
  return (
    <div className="loading-text">
      {/* {translate('Loading')}... <Icon name="circle-notch" animation="pulse" /> */}
      <div className="cssload-loader">
        <div className="cssload-inner cssload-one"></div>
        <div className="cssload-inner cssload-two"></div>
        <div className="cssload-inner cssload-three"></div>
      </div>
    </div>
  );
};

export default Loader;
