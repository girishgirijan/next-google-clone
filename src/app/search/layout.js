import SearchHeader from "@/components/SearchHeader";
import "@/app/globals.css"


export default function layout({ children }) {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  );
}
