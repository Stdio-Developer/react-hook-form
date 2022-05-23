import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export default function UseFieldArray() {
  const {
    register,
    unregister,
    handleSubmit,
    control,
    reset,
    getValues,
    setValue,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      fieldArray: [{ value: "Current" }],
    },
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "fieldArray", // unique
    }
  );

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="d-flex-middle">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center">useFieldArray</h1>
        <div>
          {fields.map((field, index) => (
            <div key={index} style={{ display: "flex", position: "relative" }}>
              <input
                key={field.id}
                {...register(`fieldArray.${index}.value`)}
              />
              <span
                style={{ position: "absolute", right: "10px", top: "28px" }}
                onClick={() => {
                  remove(index);
                }}
              >
                Remove
              </span>
            </div>
          ))}
          <button type="submit">Submit</button>
          <button
            type="button"
            onClick={() => {
              append({ value: "Append" });
            }}
          >
            Append
          </button>
          <button
            type="button"
            onClick={() => {
              prepend({ value: "Prepend" });
            }}
          >
            Prepend
          </button>
          <button
            type="button"
            onClick={() => {
              insert(2, {
                value: "Insert",
              });
            }}
          >
            Insert
          </button>
          <button type="button" onClick={() => swap(1, 2)}>
            Swap
          </button>
          <button type="button" onClick={() => move(1, 3)}>
            Move
          </button>
          <button
            type="button"
            onClick={() =>
              reset({
                fieldArray: [{ value: "Current" }],
              })
            }
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
