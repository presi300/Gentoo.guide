import React from "react";
import { Children } from "react";
import Text from "../Text/Text";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function ChapterEnd({
  children,
  EndBtnText = "Lorem Ipsum",
  EndTitle = "Lorem Ipsum",
  EndSubTitle = "Lorem Ipsum",
  NextChapter = "#",
}) {
  return (
    <div className="text-center mt-24">
      {/* Next page */}
      <Text variant="lg">{EndTitle}</Text>
      <Text variant="md">{EndSubTitle}</Text>
      <div className="grid place-items-center mt-12">
        <Link href={"/Chapters/" + NextChapter} prefetch={true}>
          <div className="flex items-center my-5 p-3 bg-[#41366C] transition-all rounded-full bg-opacity-35 hover:bg-opacity-50 hover:scale-110 max-w-[700px]">
            <Text>{EndBtnText}</Text>
            <Text>
              {" "}
              <FaArrowRight />
            </Text>
          </div>
        </Link>
      </div>
    </div>
  );
}
