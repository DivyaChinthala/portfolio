"use client";
import { get } from "lodash";

export default function Contact({ contact }) {
  console.log(contact);
  return (
    <div className="m-24 border rounded p-4">
      <h2 className="text-3xl text-primary font-bold mb-4">Contact</h2>
      <span className="flex items-center gap-2">
        <p className="text-md font-semibold">Email:</p>{" "}
        <p className="text-md">{get(contact, "email", "")}</p>
      </span>
    </div>
  );
}
