import React, { useState } from "react";

import "./styles.css";

const Select = ({ value }) => {
  var expanded = false;

  const [textLabel, setTextLabel] = useState("");
  const [hidden, setHidden] = useState(true);
  const [arrayLenght, setArrayLenght] = useState(0);

  const handleClickDropdown = (e) => {
    let icon = document.querySelector(".dropdown-title > i");
    var dropdownMenu = document.querySelector(".dropdown-menuEl");

    if (!expanded) {
      icon.classList.add("active");
      dropdownMenu.classList.add("open");
      expanded = true;
    } else {
      icon.classList.remove("active");
      dropdownMenu.classList.remove("open");
      expanded = false;
    }
  };

  const handleInputChecked = (e) => {
    //console.log("e", e);
    var inputs = document.querySelectorAll("input[type=checkbox]");
    inputs.forEach((element) => {
      if (element.checked) {
        setHidden(false);
        setArrayLenght(e);
        handleClickDropdown(e);
      }
    });

    setTextLabel("Escolha o número de parcelas");
  };

  return (
    <div className="select-container">
      <div className="dropdownEl">
        <div onClick={() => handleClickDropdown()}>
          <div className="dropdown-title">
            <span>Escolha o número de parcelas</span>
            <i className="bi bi-caret-down" />
          </div>
          <div className="dropdown-subtitle" hidden={hidden}>
            <div>
              <strong>
                {" "}
                {arrayLenght}x de {value / arrayLenght}
              </strong>
            </div>
            <span>
              Juros de <del>3,95%</del> 3,56% ao mês
              <span className="text-success">(-10%)</span>
            </span>
            <br></br>
            <span className="text-success">
              Desconto nos juros personalizados para você
            </span>
          </div>
        </div>

        <div className="dropdown-menuEl">
          <ul>
            {Array.from({ length: 11 }, (v, k) => k + 2).map((x) => {
              return (
                <li>
                  <input
                    onChange={() => handleInputChecked(x)}
                    type="checkbox"
                    name={`check${x}`}
                    id={`check${x}`}
                  />
                  <label htmlFor={`check${x}`}>
                    {x} parcelas de <strong>R${(value / x).toFixed(2)}</strong>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Select;
