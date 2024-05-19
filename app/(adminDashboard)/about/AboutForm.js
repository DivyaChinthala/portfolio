"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function AboutForm() {
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAboutData();
  }, []);
  const getAboutData = async () => {
    setLoading(true);
    const response = await axios.get(
      process.env.NEXT_PUBLIC_APP_URL + "/api/about"
    );
    const data = response?.data;
    setTitle(data?.title || "");
    setHeading(data?.heading || "");
    setDescription(data?.description || "");
    setImage(data?.image || "");
    setLoading(false);
  };
  const onSave = async () => {
    setLoading(true);
    const response = await axios.post(
      process.env.NEXT_PUBLIC_APP_URL + "/api/about",
      {
        title,
        heading,
        image,
        description,
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
            <h2 className="card-title ">About Content</h2>
            <div className="flex flex-col mt-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2 mb-2">
                  <label className="text-base text-slate-500">Title</label>
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    className="input input-bordered w-full"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-base text-slate-500">Image Url</label>
                  <input
                    type="text"
                    placeholder="Image Url"
                    value={image}
                    className="input input-bordered w-full"
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label className="text-base text-slate-500">Heading</label>
                <input
                  type="text"
                  placeholder="Heading"
                  value={heading}
                  className="input input-bordered w-full"
                  onChange={(e) => {
                    setHeading(e.target.value);
                  }}
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
