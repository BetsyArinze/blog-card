import { Metadata } from "next";
import BlogCard from "./components/blog-card";

const PAGE_TITLE = "Blog Card";
export const metadata: Metadata = {
  title: PAGE_TITLE,
  openGraph: {
    title: PAGE_TITLE,
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center bg-gradient-to-b from-[#F9FAFB] to-[#D2D6DB]">
      <BlogCard />
    </div>
  );
}
