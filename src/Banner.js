function Banner({ banner, setBanner }) {
  const handleBanner = () => {
    setBanner(false);
  };

  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__text">
          <strong>Reminder: </strong> You can nominate up to 5 movies
          <button class="button__close" onClick={handleBanner}>
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
