interface JobTitleInputProps {
  jobTitle: string;
  setJobTitle: (jobTitle: string) => void;
  name: string;
  setName: (name: string) => void;
}

export default function JobTitleInput({
  jobTitle,
  setJobTitle,
  name,
  setName,
}: JobTitleInputProps) {
  return (
    <div className="mb-4 flex gap-8">
      <div>
        <label htmlFor="name" className="text-xl text-[#0f9ed5] font-bold mr-2">
          Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          name="name"
          className="text-lg font-medium border-[#0f9ed5] border-solid border-2 p-2 w-80 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f9ed5] focus:border-transparent transition duration-300"
        />
      </div>
      <div>
        <label
          htmlFor="job-title"
          className="text-xl text-[#0f9ed5] font-bold mr-2"
        >
          Job Title:
        </label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          id="job-title"
          name="job-title"
          className="text-lg  font-medium border-[#0f9ed5] border-solid border-2 p-2 w-80 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f9ed5] focus:border-transparent transition duration-300"
        />
      </div>
    </div>
  );
}
