import SearchHeader from "@/components/SearchHeader";
import "@/app/globals.css";
import { Suspense } from "react";

export default function layout({ children }) {
  return (
    <>
      <SearchHeader />
      <Suspense>{children}</Suspense>
    </>
  );
}
