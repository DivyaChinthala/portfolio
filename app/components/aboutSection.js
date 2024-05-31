import { get } from "lodash";

export default function AboutSection({ about }) {
  const image = get(about, "image");
  return (
    <div
      className="flex md:flex-row flex-col gap-6 md:h-1/2 md:m-24 m-8 "
      id="about"
    >
      <div className="md:w-1/2">
        <img
          src={image}
          style={{ width: "100%", height: "80%", borderRadius: "8px" }}
        />
      </div>
      <div className="flex flex-col md:w-1/2">
        <h2 className="text-primary text-3xl font-bold">
          {get(about, "title", "")}
        </h2>
        <p className="text-xl font-semibold mt-5">
          {get(about, "heading", "")}
        </p>
        <p className="text-sm mt-2">{get(about, "description", "")}</p>
      </div>
    </div>
  );
}
