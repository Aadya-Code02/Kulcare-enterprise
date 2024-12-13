import React from "react";
import useNavStore from "@/store/useNavStore";
export function Provider() {
  const activeTitle = useNavStore((state) => state.activeTitle);

  return (
    <header className="p-4 bg-gray-100">
      <h1 className="text-lg font-bold">Current Page: {activeTitle || "None"}</h1>
    </header>
  );
}