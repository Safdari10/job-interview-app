interface UserName {
  name: string;
  setName: (name: string) => void;
}

interface Conversation {
  sender: "Interviewer" | UserName;
  text: string;
}

interface ConversationProps {
  conversation: Conversation[];
}

export default function ConversationBox({ conversation }: ConversationProps) {
  return (
    <div className="border-2 border-solid border-gray-300 h-[600px] w-[1000px] rounded-lg overflow-hidden overflow-y-scroll bg-white shadow-md shadow-gray-400 p-4 custom-scrollbar">
      {conversation.map((convo, index) => (
        <div
          key={index}
          className={`flex flex-wrap gap-2 p-3 text-lg mb-6 mx-6 rounded-lg shadow max-w-fit ${
            convo.sender === "Interviewer"
              ? " text-[#0f9ed5] bg-gray-100"
              : " bg-blue-50"
          }`}
        >
          <p className="font-semibold">
            {typeof convo.sender === "string"
              ? convo.sender
              : convo.sender.name}
            :
          </p>
          <p>{convo.text}</p>
        </div>
      ))}
    </div>
  );
}
