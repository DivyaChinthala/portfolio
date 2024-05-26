"use client";
import { useEffect, useState } from "react";
import DynamicInputs from "../../components/DyamicInputs";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { get } from "lodash";

export default function SkillsForm() {
  const [skills, setSkills] = useState([
    { id: Date.now(), icon: "", color: "", text: "" },
  ]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getSkills();
  }, []);
  const getSkills = async () => {
    setLoading(true);
    const response = await axios.get(
      process.env.NEXT_PUBLIC_APP_URL + "/api/skills"
    );
    setSkills(
      get(response, "data", [{ id: Date.now(), icon: "", color: "", text: "" }])
    );
    setLoading(false);
  };
  const onSave = async () => {
    setLoading(true);
    const response = await axios.post(
      process.env.NEXT_PUBLIC_APP_URL + "/api/skills",
      {
        skills,
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
    <div className="flex items-center justify-center text-black">
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <span className="loading loading-dots loading-md"></span>
        </div>
      ) : (
        <div className="card w-3/4 h-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title ">Skills Data</h2>
            <div className="flex flex-col mt-4">
              <div className="flex flex-col gap-2 mb-2">
                <label className="text-base text-slate-500">Skills</label>
                <DynamicInputs setInputs={setSkills} inputs={skills} />
              </div>
            </div>
            <div className="card-actions justify-end mt-4">
              <Link href="/admin">
                <button className="btn">Cancel</button>
              </Link>
              <button className="btn btn-primary" onClick={onSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
}
