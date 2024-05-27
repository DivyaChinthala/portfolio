import { get } from "lodash";

export default function AboutSection({ about }) {
  const image = get(about, "image");
  return (
    <div
      className="flex content-center gap-6 m-24"
      style={{ height: "250px" }}
      id="about"
    >
      <div style={{ width: "40%" }}>
        <img
          src={image}
          style={{ width: "100%", height: "100%", borderRadius: "8px" }}
        />
      </div>
      <div className="flex flex-col content-center" style={{ width: "60%" }}>
        <h2 className="text-primary text-3xl font-bold">
          {get(about, "title", "")}
        </h2>
        <p className="text-xl font-semibold mt-8">
          {get(about, "heading", "")}
        </p>
        <p className="text-sm mt-2">{get(about, "description", "")}</p>
      </div>
    </div>
  );
}
