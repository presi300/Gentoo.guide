import React from "react";
import Text from "../Text/Text";
import SideBarElement from "./SideBarElement";

let SideBarElementExtended = ({ text = "XD", content }) => {
  let ContentElement = () => {
    return (
      <div>
        {content.map((content) => {
          return (
            <li className=" my-3">
              <Text variant="xs" key={content}>
                {content}
              </Text>
            </li>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full h-auto flex flex-col bg-[#41366C44] z-0 rounded-[15px]">
      <SideBarElement className="z-10" text={text}></SideBarElement>
      <div>
        <ul className="ml-6">
          <ContentElement></ContentElement>
        </ul>
      </div>
    </div>
  );
};

export default SideBarElementExtended;
