import Link from "next/link";
import { IoMdClose } from "react-icons/io";

export default function ProjectMoreInfo({ project, setShowMoreInfo }) {
  const moreInfo = project?.moreInfo || [];
  const additionalImages = project?.additionalImages ?? [];
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
      <h2 className="text-xl mt-4 font-semibold mb-4 text-accent">
        Additional Images
      </h2>
      <div className="grid lg:grid-cols-3 gap-3">
        {additionalImages?.length > 0 &&
          additionalImages?.map((image) => {
            return (
              <Link href={image?.url} target="_blank">
                <div
                  style={{ width: "150px", height: "150px" }}
                  className="border rounded"
                >
                  <img
                    src={image?.url}
                    alt="Uploaded"
                    style={{ width: "100%", height: "100%" }}
                    className="max-w-full h-auto"
                  />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
