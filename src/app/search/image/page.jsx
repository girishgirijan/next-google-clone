import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";

export default async function ImageSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1"
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_API_KEY}&cx=${process.env.NEXT_CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );

  if (!res.ok) throw new Error("Something went wrong!");
  const data = await res.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-2xl mb-4">
          No results found for <b>{searchParams.searchTerm}</b>
        </h1>
        <p className="text-lg">
          Try searching the web or images for something else.
          <Link href="/" className="text-blue-500"> Home</Link>
        </p>
      </div>
    );
  }
  return (
    <div>{results && <ImageSearchResults results={data} />}</div>
  );
}
