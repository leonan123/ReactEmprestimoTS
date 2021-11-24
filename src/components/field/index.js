import React from "react";

import Label from "./Label";
import Content from "./content";
import Input from "./Input";

const Text = ({ label, type, name, id, register, change, focus, blur }) => {
  return (
    <Label>
      <Content>{label}</Content>
      <Input
        type={type}
        name={name}
        id={id}
        onChange={(event) => change(event.target.value)}
        onFocus={(event) => focus(event.target.value)}
        onBlur={(event) => blur(event.target.value)}
        {...register}
      />
    </Label>
  );
};

export default {
  Text,
};
