"use client";
import { get } from "lodash";

export default function Contact({ contact }) {
  console.log(contact);
  return (
    <div className="m-24 border rounded p-4">
      <h2 className="text-3xl text-primary font-bold mb-4">Contact</h2>
      <p className="text-md">Email: {get(contact, "email", "")}</p>
    </div>
  );
}
