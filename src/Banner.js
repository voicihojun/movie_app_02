import "./App.css";

function Banner({ focusBanner, setBanner }) {
  const handleBanner = () => {
    setBanner(false);
  };

  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__text">
          <strong>Reminder: </strong> You can nominate up to 5 movies
          <button
            ref={focusBanner}
            className="button__close"
            onClick={handleBanner}
            type="button"
          >
            <span className="button__span"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
