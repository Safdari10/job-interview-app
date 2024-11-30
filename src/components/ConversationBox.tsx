interface Conversation {
  user: "Interviewer" | "Me";
  text: string;
}

interface ConversationProps {
  conversation: Conversation[];
}

export default function ConversationBox({ conversation }: ConversationProps) {
  return (
    <div className="border-[2px] border-solid border-black h-[600px] w-[600px]">
      {conversation.map((convo, index) => (
        <div
          key={index}
          className={
            convo.user === "Interviewer"
              ? "text-left text-[#0f9ed5]"
              : "text-right"
          }
        ></div>
      ))}
    </div>
  );
}
