import React, { useState } from "react";

import "./styles.css";

const Select = ({ value }) => {
  var expanded = false;

  const [checked, setChecked] = useState("");

  const handleClickDropdown = (e) => {
    let icon = document.querySelector(".dropdown-title > i");
    var dropdownMenu = document.querySelector(".dropdown-menuEl");

    if (!expanded) {
      icon.classList.add("active");
      dropdownMenu.classList.add("open");
      expanded = true;
    } else if (expanded || e.target !== dropdownMenu) {
      icon.classList.remove("active");
      dropdownMenu.classList.remove("open");
      expanded = false;
    }
  };

  const handleInputChecked = (e) => {
    var inputs = document.querySelectorAll("input[type=checkbox]");
    var inputTarget = document.querySelector("#" + e.target.getAttribute("id"));
    setChecked("checked");

    inputs.forEach((element) => {});
  };

  return (
    <div className="select-container">
      <div className="dropdownEl" data-dropdown>
        <div
          className="dropdown-title"
          onClick={handleClickDropdown}
          data-dropdown-button
        >
          <span>Escolha o número de parcelas</span>
          <i className="bi bi-caret-down" />
        </div>
        <div className="dropdown-menuEl">
          <ul>
            {Array.from({ length: 11 }, (v, k) => k + 2).map((x) => {
              return (
                <li>
                  <input
                    onChange={handleInputChecked}
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
