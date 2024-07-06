import { IoMdClose } from "react-icons/io";

export default function ProjectMoreInfo({ project, setShowMoreInfo }) {
  const moreInfo = project?.moreInfo || [];
  return (
    <div className="bg-bodyColor h-screen p-6 overflow-y-scroll">
      <div className="flex items-center ">
        <h2 className="text-xl font-bold">{project?.name}</h2>
        <IoMdClose
          className="cursor-pointer ml-auto text-accent"
          size={25}
          onClick={() => setShowMoreInfo(false)}
        />
      </div>
      <h2 className="text-xl mt-4 font-semibold mb-4 text-accent">More Info</h2>
      {moreInfo.map((step) => (
        <div key={step.id} className="step">
          {step.description.split("\n").map((line, index) => (
            <p key={index} className="text-md mb-3">
              {line}
            </p>
          ))}
        </div>
      ))}
      {moreInfo.length == 0 && (
        <div className="flex items-center justify-center mt-4">
          <p className="text-sm text-slate-400">No Info Found</p>
        </div>
      )}
    </div>
  );
}
