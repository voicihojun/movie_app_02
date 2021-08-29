import React from "react";

function Nominations({ nominees, setNominees }) {
  const removeNomination = (e) => {
    const target = e.target.parentElement.firstChild.innerText;
    console.log(target);
    setNominees(nominees.filter((nomi) => nomi.id !== target));
  };

  if (nominees.length === 0) {
    return <div></div>;
  } else {
    return (
      <div className="nominations">
        <ul>
          {nominees.map((nominee) => (
            <li>
              <span className="hidden">{nominee["id"]}</span>
              <span className="li">
                {nominee["title"]} ({nominee["year"]})
              </span>
              <button onClick={removeNomination}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Nominations;
