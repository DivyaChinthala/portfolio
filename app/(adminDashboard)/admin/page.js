import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="h-4/5 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold  mt-8">Admin Dashboard</h2>
      <p className=" text-2xl mt-2 font-semibold">
        Start Adding Some Content To The Portfolio
      </p>
      <div className="flex gap-3 mt-4">
        <Link href="/top-section">
          <button className="btn btn-accent">Start With Top Section</button>
        </Link>
        <Link href={"/"}>
          <button className="btn  btn-primary">View Portfolio</button>
        </Link>
      </div>
    </div>
  );
}
