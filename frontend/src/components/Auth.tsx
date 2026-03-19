import { Link, useNavigate } from "react-router-dom";
import { useState, type ChangeEvent } from "react";
import type { SignupInput } from "@rohit_000/mediums-common";
import { api } from "../api";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [input, setInput] = useState<Partial<SignupInput>>({});
  const navigate = useNavigate();
  async function fetchfn() {
    try {
      const { data } = await api.post(`${type}`, input);
      localStorage.setItem("token", data.jwt);
      navigate("/blog");
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <h1 className="text-3xl font-bold">
            {type === "signup" ? "Create an account" : "Sign in"}
          </h1>
          <p className="text-gray-500 mt-2">
            {type === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}

            <Link
              to={type === "signup" ? "/signin" : "/signup"}
              className="underline ml-1"
            >
              {type === "signup" ? "Login" : "Sign up"}
            </Link>
          </p>
          {type === "signup" && (
            <input
              className="border p-2 w-full mt-4"
              placeholder="Name"
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            />
          )}
          <Labelinput
            label="Email"
            placeholder="johndk@email.com"
            onChange={(e) => {
              setInput({
                ...input,
                email: e.target.value,
              });
            }}
          />
          <Labelinput
            label="password"
            placeholder="********"
            onChange={(e) => {
              setInput({
                ...input,
                password: e.target.value,
              });
            }}
          />

          <button
            onClick={fetchfn}
            className="bg-black text-white w-full mt-4 p-2"
          >
            {type === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface labelinputtype {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Labelinput({ label, placeholder, onChange }: labelinputtype) {
  return (
    <div>
      <label className="block mb-2.5 text-sm font-medium text-heading">
        {label}
      </label>
      <input
        type="text"
        onChange={onChange}
        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
