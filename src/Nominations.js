import React from "react";

function Nominations({ nominees, setNominees }) {
  const removeNomination = (e) => {
    const target = e.target.parentElement.firstChild.innerText;
    console.log(target);
    setNominees(nominees.filter((nominee) => nominee.id !== target));
    // setNominees([...nominees, nominee]);
    // setNominees(nominees.concat(nominee));
  };

  return (
    <div id="nominations">
      <ul>
        {nominees.map((nominee) => (
          <li>
            <span className="hidden">{nominee["id"]}</span>
            {nominee["title"]} ({nominee["year"]})
            <button onClick={removeNomination}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nominations;
