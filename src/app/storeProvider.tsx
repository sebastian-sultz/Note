"use client";
import { useRef } from "react";
import { myStore, AppStore } from "../lib/store";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = myStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
