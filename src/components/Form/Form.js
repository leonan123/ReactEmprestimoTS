import React, { useState } from "react";
import { useForm } from "react-hook-form";

import FormContainer from "./styled";
import BtnSubmit from "../BtnSubmit/BtnSubmit";
import field from "../field";
import Select from "../LendingPageComponents/SelectInstallments/Select";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState(0);
  const [valueDate, setValueDate] = useState(0);

  const newLoan = (data) => {
    console.log(data);
  };

  const inputFocus = (labelId) => {
    var labelInput = document.querySelector(`#${labelId}`);
    console.log(labelInput);
    labelInput.classList.add("active");
  };

  const inputBlur = (valor, labelId) => {
    var labelInput = document.querySelector(`#${labelId}`);

    if (valor <= 0) {
      labelInput.classList.remove("active");
    }
  };

  const calculaJuros = (value) => {
    var calc1 = 1 + 3 / 100;
    var potencia = Math.pow(calc1, 3);
    var M = value * potencia;

    let newValue = M;
    return newValue;
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit(newLoan)}>
          <div className="container-inputGroup">
            <field.Text
              label="Valor do empréstimo"
              labelId="valor"
              name="valor"
              type="text"
              id="valor"
              value={value}
              change={(v) => setValue(v)}
              focus={inputFocus}
              blur={inputBlur}
              register={register}
            />
          </div>
          <div className="container-inputGroup">
            <Select value={value} />
          </div>
          <div className="container-inputGroup">
            <field.Text
              label="Data do primeiro pagamento"
              labelId="date"
              name="date"
              type="text"
              id="date"
              change={(v) => setValueDate(v)}
              value={valueDate}
              focus={inputFocus}
              blur={inputBlur}
              register={register}
            />
          </div>
          <BtnSubmit text="Simular Empréstimo" />
        </form>
        <div className="total-container">
          <div className="total-content">
            <span>Total a Pagar</span>
            <p>
              <strong>R$ {calculaJuros(value)} </strong>
            </p>
          </div>
        </div>
      </FormContainer>
    </>
  );
};

export default Form;
