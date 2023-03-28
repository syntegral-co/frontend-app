import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useCurrentCompany } from '../../pages/companies/hooks';
import { useChatBot } from '../chat-input/hooks';
import { Interweave } from 'interweave';
import Drawer from '../drawer';
import Loader from '../loader';
import logo from '@/assets/images/syntegral.svg';
import { IChatMessage } from './types';

function ChatOutput() {
  const { user } = useAuth0();
  const company = useCurrentCompany();
  const { chatMessages, isLoading } = useChatBot();

  return (
    <div className="flex max-h-fit w-full flex-col justify-between rounded-md p-4 duration-300">
      <Outlet />
      <Drawer />
      <div className="divider"></div>
      <div className="mt-4 h-44 overflow-y-scroll rounded-md pr-4">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={logo} />
            </div>
          </div>
          <div className="chat-bubble bg-base-200 text-primary-content">
            Company name: {company!.name}. Overall score: 125.
            <br />
            Click on one of the 4 themes to see more data.
          </div>
        </div>
        {chatMessages.map(({ author, text }: IChatMessage, index: number) => {
          const chatClasses = author === 'bot' ? 'chat chat-start' : 'chat chat-end';
          const chatAvatar = author === 'bot' ? logo : user?.picture;
          return (
            <div key={index} className={chatClasses}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src={chatAvatar} />
                </div>
              </div>
              <div className="chat-bubble bg-base-200 text-primary-content">
                <Interweave content={text} />
              </div>
            </div>
          );
        })}
        {isLoading > 0 && (
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={logo} />
              </div>
            </div>
            <div className="chat-bubble bg-base-200">
              <Loader />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatOutput;
