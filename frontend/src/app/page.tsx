"use client";
import Background from "@/components/Background";
import Foreground from "@/components/Foreground";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Provider store={store}>
        {" "}
        <Background />
        <Foreground />
      </Provider>
    </div>
  );
}
