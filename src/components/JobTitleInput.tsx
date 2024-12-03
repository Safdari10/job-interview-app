interface JobTitleInputProps {
  jobTitle: string;
  setJobTitle: (jobTitle: string) => void;
}

export default function JobTitleInput({
  jobTitle,
  setJobTitle,
}: JobTitleInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor="job-title" className="text-xl text-[#0f9ed5]  font-bold mr-2">
        Job Title:
      </label>
      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        id="job-title"
        name="job-title"
        className="border-[#0f9ed5] border-solid border-2 p-1 w-80 rounded"
      />
    </div>
  );
}
