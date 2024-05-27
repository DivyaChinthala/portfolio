import { get } from "lodash";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects({ projects = [] }) {
  return (
    <div className="flex flex-col m-24" id="projects">
      <div className="flex flex-col content-center items-center">
        <h2 className="text-3xl  text-primary font-bold mb-16">Projects</h2>
      </div>

      {projects.map((project, index) => {
        const showFirstComponent = Math.ceil(index / 2) == 0 ? true : false;
        return (
          <>
            <div
              className="flex items-start gap-9 mb-8"
              style={{
                height: "300px",
                // border: "1px solid silver",
                // borderRadius: "4px",
                // padding: "8px",
              }}
            >
              <div style={{ width: "45%", height: "290px" }}>
                <img
                  src={get(project, "image", "")}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div className="flex flex-col" style={{ width: "55%" }}>
                <h2 className="text-xl font-semibold">
                  {get(project, "title")}
                </h2>
                <p className="mt-8 text-md">
                  {get(project, "description", "")}
                </p>
                <div className="flex gap-3 mt-8">
                  <button className="btn">
                    <FaGithub />
                    Github
                  </button>
                  <button className="btn btn-accent">
                    {" "}
                    <FaExternalLinkAlt /> Demo
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
