"use client";
import { useEffect, useState } from "react";
import DynamicInputs from "../../components/DyamicInputs";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function TopSectionForm() {
  const [mainHeading, setMainHeading] = useState("");
  const [description, setDescription] = useState("");
  const [socialMediaIcons, setSocialMediaIcons] = useState([
    { id: Date.now(), value: "", url: "" },
  ]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTopSectionData();
  }, []);
  const getTopSectionData = async () => {
    setLoading(true);
    const response = await axios.get(
      process.env.NEXT_PUBLIC_APP_URL + "/api/top-section"
    );
    const data = response?.data;
    setMainHeading(data?.mainHeading || "");
    setDescription(data?.description || "");
    setSocialMediaIcons(
      data?.socialMediaIcons || [{ id: Date.now(), value: "", url: "" }]
    );
    setLoading(false);
  };
  const onSave = async () => {
    setLoading(true);
    const response = await axios.post(
      process.env.NEXT_PUBLIC_APP_URL + "/api/top-section",
      {
        mainHeading,
        description,
        socialMediaIcons,
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
        <div className="card w-1/2 h-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title ">Top Section Content</h2>
            <div className="flex flex-col mt-4">
              <div className="flex flex-col gap-2 mb-2">
                <label className="text-base text-slate-500">Main Heading</label>
                <input
                  type="text"
                  placeholder="Main Heading"
                  value={mainHeading}
                  className="input input-bordered w-full"
                  onChange={(e) => {
                    setMainHeading(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label className="text-base text-slate-500">
                  Social Media Links
                </label>
                <DynamicInputs
                  setInputs={setSocialMediaIcons}
                  inputs={socialMediaIcons}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-base text-slate-500">Description</label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Description"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
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
