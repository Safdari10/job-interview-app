interface Conversation {
  sender: "Interviewer" | "Me";
  text: string;
}

interface ConversationProps {
  conversation: Conversation[];
}

export default function ConversationBox({ conversation }: ConversationProps) {
  return (
    <div className="border-[2px] border-solid border-black h-[600px] w-[800px] rounded-lg overflow-hidden overflow-y-scroll bg-white shadow-md shadow-gray-400  ">
      {conversation.map((convo, index) => (
        <div
          key={index}
          className={
            convo.sender === "Interviewer"
              ? "text-left text-[#0f9ed5]"
              : "text-right"
          }>
          <div className="flex gap-1 p-2 text-lg">
            <p>{convo.sender}:</p>
            <p>{convo.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
