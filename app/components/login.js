"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function Login() {
  const { data: session, update } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = () => {
    if (
      email == process.env.NEXT_PUBLIC_USER_EMAIL &&
      password == process.env.NEXT_PUBLIC_USER_PASSWORD
    ) {
      setLoading(true);
      update({
        email,
        password,
      }).then(() => {
        setLoading(false);
        router.push("/admin");
      });
    } else {
      setLoading(false);
      toast.error("Email or Password is Incorrect");
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-black">
      <div className="card-body">
        <h2 className="card-title flex ajustify-center align-center">Login</h2>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs mt-4"
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              onSubmit();
            }
          }}
        />
        <label className="input input-bordered flex items-center justify-between gap-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                onSubmit();
              }
            }}
          />
          {showPassword ? (
            <IoEyeOutline
              onClick={() => {
                setShowPassword(false);
              }}
              className="cursor-pointer"
            />
          ) : (
            <FaRegEyeSlash
              onClick={() => {
                setShowPassword(true);
              }}
              className="cursor-pointer"
            />
          )}
        </label>

        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-block" onClick={onSubmit}>
            {loading && (
              <span className="loading loading-spinner loading-md"></span>
            )}{" "}
            Submit
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
