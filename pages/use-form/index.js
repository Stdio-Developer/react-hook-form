import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Field is require").trim().max(255),
  email: yup
    .string()
    .required("Field is require")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid field"
    )
    .trim()
    .max(255),
  age: yup
    .string()
    .required("Field is require")
    .trim()
    .matches(/^[0-9\b]+$/, "Only number"),
  address: yup
    .string()
    .required("Field is require")
    .trim()
    .max(50, "Max length is 50 character"),
});

export default function UseForm() {
  const {
    register,
    unregister,
    handleSubmit,
    watch,
    getValues,
    setError,
    clearErrors,
    setValue,
    reset,
    trigger,
    formState: { errors, isDirty, isValid, touchedFields },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="d-flex-middle">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center">useForm</h1>
        <div>
          <input {...register("name")} placeholder="Enter your name" />

          {errors?.name && <span>{errors?.name?.message}</span>}
          <input {...register("email")} placeholder="Enter your email" />
          {errors?.email && <span>{errors?.email?.message}</span>}
          <input {...register("age")} placeholder="Enter your age" />
          {errors?.age && <span>{errors?.age?.message}</span>}
          <input {...register("address")} placeholder="Enter your address" />
          {errors?.address && <span>{errors?.address?.message}</span>}
          <input {...register("gender")} placeholder="Enter your gender" />
          <button type="submit">Submit</button>
          {console.log(errors, isDirty, touchedFields, isValid, "Error")}
          <button
            type="button"
            onClick={() => {
              unregister();
            }}
          >
            Unregister
          </button>
          <button
            type="button"
            onClick={() => {
              reset({ name: "" });
            }}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => {
              setError("name", {
                required: "This is required",
                minLength: "This is minLength",
              });
            }}
          >
            Set Error
          </button>
          <button
            type="button"
            onClick={() => {
              clearErrors();
            }}
          >
            Clear Error
          </button>
          <button
            type="button"
            onClick={() => {
              setValue("name","hehe");
            }}
          >
            Set Values
          </button>
          <button
            type="button"
            onClick={() => {
              getValues();
            }}
          >
            Get Values
          </button>
          <button
            type="button"
            onClick={() => {
              trigger("name");
            }}
          >
            Trigger
          </button>
        </div>
      </form>
    </div>
  );
}
