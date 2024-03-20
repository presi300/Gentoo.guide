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
      <div className="grid place-items-center">
        <div className="my-5 p-3 bg-[#41366C] transition-all rounded-full bg-opacity-35 hover:bg-opacity-50 max-w-[700px]">
          <Link
            href={"/Chapters/" + NextChapter}
            className="flex items-center gap-5"
          >
            <Text>{EndBtnText}</Text>
            <Text>
              {" "}
              <FaArrowRight />
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
}
