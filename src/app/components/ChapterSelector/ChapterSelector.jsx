import React from "react";
import Modal from "../Modal/Modal";
import { Children } from "react";

export default function ChapterSelector({ children }) {
  return <Modal btn={children}></Modal>;
}
