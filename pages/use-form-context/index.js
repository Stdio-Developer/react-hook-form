import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

export default function UseFormContext() {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <div className="d-flex-middle">
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <h1 className="text-center">useFormContext</h1>
          <Input />
          <button type="submit">Submit</button>
        </form>
      </div>
    </FormProvider>
  );
}

function Input() {
  const { register } = useFormContext();
  return <input {...register("username)")} placeholder="Enter your username" />;
}
