import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

const DynamicInputs = ({ inputs, setInputs }) => {
  const handleAddInput = (keys) => {
    const obj = keys.reduce(
      (acc, key) => {
        acc[key] = "";
        return acc;
      },
      { id: Date.now() }
    );
    setInputs([...inputs, obj]);
  };

  const handleDeleteInput = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const handleChange = (id, key, event) => {
    const newInputs = inputs.map((input) => {
      if (input.id === id) {
        return { ...input, [key]: event.target.value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  return (
    <div>
      {inputs.map((input, index) => {
        const keys = Object.keys(input).filter((key) => key !== "id");
        return (
          <div
            key={input.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            {keys.map((key) => {
              return (
                <input
                  type="text"
                  value={input[key]}
                  onChange={(event) => handleChange(input.id, key, event)}
                  style={{ marginRight: "10px" }}
                  className="input input-bordered w-full"
                  placeholder={key}
                />
              );
            })}
            {index !== inputs.length - 1 && (
              <button
                onClick={() => handleDeleteInput(input.id)}
                disabled={inputs.length === 1}
              >
                <MdOutlineDeleteOutline />
              </button>
            )}
            {index == inputs.length - 1 && (
              <button
                onClick={() => handleAddInput(keys)}
                style={{ marginRight: "10px" }}
              >
                <CiCirclePlus />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DynamicInputs;
