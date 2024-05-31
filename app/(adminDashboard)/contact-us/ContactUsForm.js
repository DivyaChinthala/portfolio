"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { get } from "lodash";

export default function ContactUsForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getContactUsData();
  }, []);
  const getContactUsData = async () => {
    setLoading(true);
    const response = await axios.get(
      process.env.NEXT_PUBLIC_APP_URL + "/api/contact-us"
    );
    if (response?.status == 200 || response?.status == 201) {
      const data = response?.data;
      setEmail(get(data, "email", ""));
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  const onSave = async () => {
    setLoading(true);
    const response = await axios.post(
      process.env.NEXT_PUBLIC_APP_URL + "/api/contact-us",
      {
        email,
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
    <div className=" flex flex-col items-center justify-center text-black">
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <span className="loading loading-dots loading-md"></span>
        </div>
      ) : (
        <div className="card w-3/4 h-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title ">Contact Us</h2>
            <div className="flex flex-col mt-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2 mb-2">
                  <label className="text-base text-slate-500">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    className="input input-bordered w-full"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
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
