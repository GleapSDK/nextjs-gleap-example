"use client";

import Gleap from "gleap";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const apiKey = searchParams.get("apiKey");

  useEffect(() => {
    if (apiKey) {
      Gleap.initialize(apiKey);
    }
  }, [apiKey]);

  if (!apiKey) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-gray-900">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-8 space-y-6 border border-gray-700">
          <h1 className="text-3xl font-bold text-center text-white">
            Gleap NextJS Example
          </h1>
          <form className="space-y-6" action="/" method="GET">
            <div>
              <label
                htmlFor="apiKey"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Please enter your API Key
              </label>
              <input
                type="text"
                id="apiKey"
                name="apiKey"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2142E7] focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#2142E7] text-white px-6 py-3 rounded-md hover:bg-[#2142E7] transition-colors duration-200 font-medium"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-900">
      <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-xl p-8 space-y-6 border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-white">
          Gleap NextJS Example
        </h1>
        <div className="space-y-4">
          <p className="text-center text-gray-300 text-lg">
            This is a simple example of how to use Gleap with NextJS.
          </p>
          <div className="bg-gray-700 p-4 rounded-md border border-gray-600">
            <p className="text-center text-gray-200">
              Your API Key is:{" "}
              <span className="font-mono font-medium text-[#2142E7]">
                {apiKey}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => {
              Gleap.identify("47328492813", {
                name: "John Doe",
                email: "john.doe@example.com",
                plan: "Premium",
              });
            }}
            className="w-full cursor-pointer bg-[#2142E7] text-white px-6 py-3 rounded-md hover:bg-[#2142E7] transition-colors duration-200 font-medium"
          >
            Identify John Doe
          </button>
          <button
            onClick={() => {
              Gleap.clearIdentity();
            }}
            className="w-full cursor-pointer bg-[#2142E7] text-white px-6 py-3 rounded-md hover:bg-[#2142E7] transition-colors duration-200 font-medium"
          >
            Clear session
          </button>
          <button
            onClick={() => {
              Gleap.open();
            }}
            className="w-full cursor-pointer bg-[#2142E7] text-white px-6 py-3 rounded-md hover:bg-[#2142E7] transition-colors duration-200 font-medium"
          >
            Open widget
          </button>
        </div>
      </div>
    </div>
  );
}
