import { atom } from "recoil";
import { chatbot } from "./data";

export const chatState = atom({
    key: 'chatState', // unique ID (with respect to other atoms/selectors)
    default: chatbot, // default value (aka initial value)
  });