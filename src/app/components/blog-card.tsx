import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";

const BlogCard = () => {
  return (
    <div className="flex flex-col w-[340px] h-[504px] rounded-lg">
      <div className="w-[340px] h-[288px] overflow-hidden rounded-t-lg">
        <Image
          src="/interior.jpg"
          alt="Interior"
          width={640}
          height={640}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-3 bg-white px-4 py-6  rounded-b-lg">
        <div className="flex flex-col">
          <div className="border border-green-200 bg-green-50 rounded-full w-fit px-2 mb-2">
            <p className="text-green-700 text-sm">Interior</p>
          </div>
          <p className="font-semibold text-lg">
            Top 5 Living Room Inspirations
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-medium text-base text-neutral-600 p-0">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          <p className="text-indigo-700 flex items-center gap-1.5">
            Read more{" "}
            <span>
              <RiArrowRightLine size={20} color="#4338CA" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
