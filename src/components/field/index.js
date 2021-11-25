import React from "react";

import Label from "./Label";
import Content from "./content";
import Input from "./Input";

const Text = ({
  label,
  labelId,
  type,
  name,
  id,
  register,
  change,
  focus,
  blur,
}) => {
  return (
    <Label>
      <Content id={labelId}>{label}</Content>
      <Input
        type={type}
        name={name}
        id={id}
        onChange={(event) => change(event.target.value)}
        onFocus={() => focus(labelId)}
        onBlur={(event) => blur(event.target.value, labelId)}
        {...register}
      />
    </Label>
  );
};

export default {
  Text,
};
