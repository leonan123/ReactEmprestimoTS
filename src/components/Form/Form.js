import React, { useState } from "react";
import { useForm } from "react-hook-form";

import FormContainer from "./styled";
import BtnSubmit from "../BtnSubmit/BtnSubmit";
import field from "../field";
import Select from "../LendingPageComponents/SelectInstallments/Select";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState(0);
  const newLoan = (data) => {
    console.log(data);
  };

  const inputFocus = (valor) => {
    var labelInput = document.querySelector("label > span");
    labelInput.classList.add("active");
  };

  const inputBlur = (valor) => {
    var labelInput = document.querySelector("label > span");

    if (valor <= 0) {
      labelInput.classList.remove("active");
    }
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit(newLoan)}>
          <div className="container-inputGroup">
            <field.Text
              label="Valor do empréstimo"
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
              name="date"
              type="date"
              id="date"
              value={value}
              focus={inputFocus}
              blur={inputBlur}
              register={register}
            />
          </div>
          <BtnSubmit text="Simular Empréstimo" />
        </form>
      </FormContainer>
    </>
  );
};

export default Form;
