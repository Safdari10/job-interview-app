interface JobTitleInputProps {
  jobTitle: string;
  setJobTitle: (jobTitle: string) => void;
}

export default function JobTitleInput({
  jobTitle,
  setJobTitle,
}: JobTitleInputProps) {
  return (
    <div>
      <label htmlFor="job-title" className="text-lg mr-2">
        Job Title:
      </label>
      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        id="job-title"
        name="job-title"
        className="border-blue-500 border-solid border-2 p-1"
      />
    </div>
  );
}
