import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

const DynamicInputs = ({ inputs, setInputs }) => {
  const handleAddInput = () => {
    setInputs([...inputs, { id: Date.now(), value: "" }]);
  };

  const handleDeleteInput = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const handleChange = (id, event) => {
    const newInputs = inputs.map((input) => {
      if (input.id === id) {
        return { ...input, value: event.target.value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <div
          key={input.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <input
            type="text"
            value={input.value}
            onChange={(event) => handleChange(input.id, event)}
            style={{ marginRight: "10px" }}
            className="input input-bordered w-full"
            placeholder="Icon"
          />
          {index !== inputs.length - 1 && (
            <button
              onClick={() => handleDeleteInput(input.id)}
              disabled={inputs.length === 1}
            >
              <MdOutlineDeleteOutline />
            </button>
          )}
          {index == inputs.length - 1 && (
            <button onClick={handleAddInput} style={{ marginRight: "10px" }}>
              <CiCirclePlus />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default DynamicInputs;
