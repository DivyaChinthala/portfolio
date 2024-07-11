import { IoMdClose } from "react-icons/io";

export default function ServiceSteps({ service, setShowSteps }) {
  const steps = service?.steps || [];
  return (
    <div className="bg-bodyColor h-screen p-6 overflow-y-scroll">
      <div className="flex items-center ">
        <h2 className="text-xl font-bold">{service?.name}</h2>
        <IoMdClose
          className="cursor-pointer ml-auto text-accent"
          size={25}
          onClick={() => setShowSteps(false)}
        />
      </div>
      <h2 className="text-xl mt-4 font-semibold mb-4 text-accent">Steps</h2>
      {steps.map((step) => (
        <div key={step.id} className="step">
          {step.description.split("\n").map((line, index) => (
            <p key={index} className="text-md mb-3">
              {line}
            </p>
          ))}
        </div>
      ))}
      {steps.length == 0 && (
        <div className="flex items-center justify-center mt-4">
          <p className="text-sm text-slate-400">No Steps Found</p>
        </div>
      )}
    </div>
  );
}
