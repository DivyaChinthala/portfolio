"use client";
import { useState } from "react";
import { get } from "lodash";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const PROJECTS_PER_PAGE = 3;

export default function Projects({ projects = [] }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col m-24" id="projects">
      <div className="flex flex-col content-center items-center">
        <h2 className="text-3xl text-primary font-bold mb-16">Projects</h2>
      </div>

      {currentProjects.map((project, index) => (
        <div
          key={index}
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
            <h2 className="text-xl font-semibold">{get(project, "title")}</h2>
            <p className="mt-8 text-md">{get(project, "description", "")}</p>
            <div className="flex gap-3 mt-8">
              {get(project, "githubLink", "") ? (
                <Link href={get(project, "githubLink", "")} target="_blank">
                  <button className="btn">
                    <FaGithub />
                    Github
                  </button>
                </Link>
              ) : (
                <button className="btn">
                  <FaGithub />
                  Github
                </button>
              )}
              {get(project, "demoLink") ? (
                <Link href={get(project, "demoLink")} target="_blank">
                  <button className="btn btn-accent">
                    <FaExternalLinkAlt /> Demo
                  </button>
                </Link>
              ) : (
                <button className="btn btn-accent">
                  <FaExternalLinkAlt /> Demo
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="join flex justify-center">
        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            className={`join-item btn btn-sm ${
              currentPage === pageIndex + 1 ? "btn-primary" : ""
            }`}
            onClick={() => handlePageChange(pageIndex + 1)}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
