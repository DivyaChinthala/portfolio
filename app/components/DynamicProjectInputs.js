import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

const DynamicProjectInputs = ({ inputs, setInputs }) => {
  const handleAddInput = () => {
    setInputs([
      ...inputs,
      {
        id: Date.now(),
        title: "",
        image: "",
        description: "",
        githubLink: "",
        demoLink: "",
      },
    ]);
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
          className=" rounded  p-4  flex gap-4 justify-between items-center bg-base-100"
        >
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2 items-center">
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
            </div>
            <div className="grid grid-cols-2 gap-2 items-center">
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
              <div className="flex flex-col gap-2">
                <label className="text-base text-slate-500">Github Link</label>
                <input
                  type="text"
                  value={input.githubLink}
                  onChange={(event) =>
                    handleChange(input.id, event, "githubLink")
                  }
                  style={{ marginRight: "10px" }}
                  className="input input-bordered w-full"
                  placeholder="Github Link"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-base text-slate-500">Demo Link</label>
                <input
                  type="text"
                  value={input.demoLink}
                  onChange={(event) =>
                    handleChange(input.id, event, "demoLink")
                  }
                  style={{ marginRight: "10px" }}
                  className="input input-bordered w-full"
                  placeholder="Demo Link"
                />
              </div>
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
