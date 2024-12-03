interface Conversation {
  sender: "Interviewer" | "Me";
  text: string;
}

interface ConversationProps {
  conversation: Conversation[];
}

export default function ConversationBox({ conversation }: ConversationProps) {
  return (
    <div className="border-2 border-solid border-gray-300 h-[600px] w-[900px] rounded-lg overflow-hidden hover:overflow-y-scroll bg-white shadow-md shadow-gray-400 p-4 custom-scrollbar">
      {conversation.map((convo, index) => (
        <div
          key={index}
          className={`flex gap-2 p-3 text-lg mb-3 w-[850px] rounded-lg shadow ${
            convo.sender === "Interviewer"
              ? " text-[#0f9ed5] bg-gray-100"
              : " bg-blue-50"
          }`}>
          <p className="font-semibold">{convo.sender}:</p>
          <p>{convo.text}</p>
        </div>
      ))}
    </div>
  );
}
