"use client";
export default function TopSectionForm() {
  return (
    <div className="flex flex-col mt-8">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <label className="text-lg text-white">Main Heading</label>
          <input
            type="text"
            placeholder="Main Heading"
            className="input input-bordered w-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg text-white">Social Media Links</label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Description"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg text-white">Description</label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Description"
          rows={4}
        ></textarea>
      </div>
    </div>
  );
}
