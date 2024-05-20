import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

const DynamicProjectInputs = ({ inputs, setInputs }) => {
  const handleAddInput = () => {
    setInputs([...inputs, { id: Date.now(), value: "" }]);
  };

  const handleDeleteInput = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const handleChange = (id, event, key) => {
    const newInputs = inputs.map((input) => {
      if (input.id === id) {
        return { ...input, [key]: event.target.value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  return (
    <div className="flex flex-col gap-3 mt-8">
      {inputs.map((input, index) => (
        <div
          key={input.id}
          className=" rounded  p-4  flex gap-3 items-center bg-base-100"
        >
          <div className="flex items-start gap-2">
            <div className="flex flex-col gap-2">
              <label className="text-base text-slate-500">Title</label>
              <input
                type="text"
                value={input.title}
                onChange={(event) => handleChange(input.id, event, "title")}
                style={{ marginRight: "10px" }}
                className="input input-bordered w-full"
                placeholder="Title"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-base text-slate-500">Image</label>
              <input
                type="text"
                value={input.image}
                onChange={(event) => handleChange(input.id, event, "image")}
                style={{ marginRight: "10px" }}
                className="input input-bordered w-full"
                placeholder="Image Url"
              />
            </div>
            <div className="flex flex-col gap-2" style={{ width: "500px" }}>
              <label className="text-base text-slate-500">Description</label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Description"
                rows={2}
                value={input.description}
                onChange={(event) =>
                  handleChange(input.id, event, "description")
                }
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end items-center gap-2">
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
        </div>
      ))}
    </div>
  );
};

export default DynamicProjectInputs;
