import { useRecoilState } from "recoil";
import { chatState } from "../../state/atom";
import { IChatMessage } from "../chat-output/types";

export function useChatBot() {
    const [chatBotMessages, setChatBotMessage] = useRecoilState(chatState)

    function sendMessage(message: IChatMessage) {
        setChatBotMessage([
            ...chatBotMessages,
            message
        ])
    }

    return {chatBotMessages, sendMessage}
}