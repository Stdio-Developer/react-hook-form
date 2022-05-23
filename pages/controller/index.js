import React from "react";
import { TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

export default function ControllerCpn() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="d-flex-middle">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center">Controller</h1>
        <Controller
          as={TextField}
          name="name"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value, ref } }) => (
            <TextField
              ref={ref}
              onChange={onChange}
              value={value}
              label="Name"
            />
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
