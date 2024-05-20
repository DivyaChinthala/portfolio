"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import DynamicProjectInputs from "../../components/DynamicProjectInputs";

export default function ProjectForm() {
  const [projects, setProjects] = useState([
    { id: Date.now(), image: "", title: "", description: "" },
  ]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getProjects();
  }, []);
  const getProjects = async () => {
    setLoading(true);
    const response = await axios.get(
      process.env.NEXT_PUBLIC_APP_URL + "/api/projects"
    );
    const data = response?.data;
    setProjects(
      data || [{ id: Date.now(), image: "", title: "", description: "" }]
    );
    setLoading(false);
  };
  const onSave = async () => {
    setLoading(true);
    const response = await axios.post(
      process.env.NEXT_PUBLIC_APP_URL + "/api/projects",
      {
        projects,
      }
    );
    if (response.status == 200 || response.status == 201) {
      setLoading(false);
      toast.success("Data Saved Successfully");
    } else {
      setLoading(false);
      toast.error("Error occurred while saving");
    }
  };
  return (
    <div className="h-screen text-black">
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <span className="loading loading-dots loading-md"></span>
        </div>
      ) : (
        <div className="h-full ">
          <h2 className="text-2xl text-white bold">Projects Content</h2>
          <DynamicProjectInputs setInputs={setProjects} inputs={projects} />

          <div className="flex gap-3 justify-end mt-4">
            <Link href="/admin">
              <button className="btn">Cancel</button>
            </Link>
            <button className="btn btn-primary" onClick={onSave}>
              Save
            </button>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
}
