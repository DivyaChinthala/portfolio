"use client";
import { get } from "lodash";

export default function Contact({ contact }) {
  // console.log(contact);
  return (
    <div className="md:m-24 m-8 border border-primary rounded p-4" id="contact">
      <h2 className="text-3xl text-primary font-bold md:mb-4 mb-8">Contact</h2>
      <span className="flex items-center gap-2">
        <p className="text-md font-semibold">Email:</p>{" "}
        <p className="text-md">{get(contact, "email", "")}</p>
      </span>
    </div>
  );
}
