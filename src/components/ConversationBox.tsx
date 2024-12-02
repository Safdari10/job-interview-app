interface Conversation {
  sender: "Interviewer" | "Me";
  text: string;
}

interface ConversationProps {
  conversation: Conversation[];
}

export default function ConversationBox({ conversation }: ConversationProps) {
  // console.log(conversation);
  return (
    <div className="border-[2px] border-solid border-black h-[600px] w-[600px]">
      {conversation.map((convo, index) => (
        <div
          key={index}
          className={
            convo.sender === "Interviewer"
              ? "text-left text-[#0f9ed5]"
              : "text-right"
          }
        >
          <div className="flex gap-1 p-2 text-lg">
            <p>{convo.sender}:</p>
            <p>{convo.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
