import ch from "./Chapters.json";
import React from "react";
import Modal from "../Modal/Modal";
import { Children } from "react";
import Text from "../Text/Text";
import Spacer from "../Spacer/Spacer";

function Chapter({ name, actualName, text }) {}

export default function ChapterSelector({ children }) {
  return (
    <Modal btn={children}>
      <div className="w-full flex items-center justify-center h-[4.6rem] bg-[#2a272c] rounded-t-[15px] shadow-sm">
        <Text variant="lg">Select chapter</Text>
      </div>
    </Modal>
  );
}
