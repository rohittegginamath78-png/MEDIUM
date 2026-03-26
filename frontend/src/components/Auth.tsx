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
      navigate("/blogs");
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex h-screen flex-col justify-center bg-background text-text">
      <div className="flex justify-center">
        <div className="w-full max-w-md rounded-xl border border-border bg-surface p-6">
          <h1 className="text-3xl font-bold">
            {type === "signup" ? "Create an account" : "Sign in"}
          </h1>
          <p className="mt-2 text-muted">
            {type === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}

            <Link
              to={type === "signup" ? "/signin" : "/signup"}
              className="ml-1 underline text-primary"
            >
              {type === "signup" ? "Login" : "Sign up"}
            </Link>
          </p>
          {type === "signup" && (
            <input
              className="mt-4 w-full rounded-lg border border-border bg-background p-2 text-text"
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
            className="mt-4 w-full rounded-lg bg-primary p-2 font-medium text-background"
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
      <label className="mb-2.5 block text-sm font-medium text-text">
        {label}
      </label>
      <input
        type="text"
        onChange={onChange}
        className="block w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
