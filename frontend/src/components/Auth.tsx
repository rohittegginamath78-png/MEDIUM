import { Link } from "react-router-dom";
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
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
            <input className="border p-2 w-full mt-4" placeholder="Username" />
          )}
          <input className="border p-2 w-full mt-2" placeholder="Email" />
          <input
            className="border p-2 w-full mt-2"
            placeholder="Password"
            type="password"
          />
          <button className="bg-black text-white w-full mt-4 p-2">
            {type === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};
