import { VscRepo, VscRepoForked, VscStarEmpty, VscCode } from "react-icons/vsc";

type Props = {
  repoName: string;
  repoDescription: string;
  repoLink: string;
  stargazersCount: number;
  forksCount: number;
};

function GitCard({
  repoName,
  repoDescription,
  repoLink,
  stargazersCount,
  forksCount
}: Props) {
  return (
    <div className="group flex flex-col w-full max-w-sm bg-[#24292e] mx-auto border border-neutral-500 rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:border-[#0366d6]">
      <div className="flex flex-row justify-between items-start p-4">
        <div className="flex flex-row items-center gap-3">
          <VscRepo className="text-2xl text-neutral-500 group-hover:text-[#0366d6] transition-colors" />
          <h1 className="text-neutral-500 text-lg sm:text-xl group-hover:text-[#0366d6] transition-colors">{repoName}</h1>
        </div>
        <div className="flex flex-row items-center gap-3">
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            <VscCode className="text-2xl text-neutral-500 group-hover:text-[#0366d6] transition-colors" />
          </a>
        </div>
      </div>
      <div className="p-4 text-neutral-500 text-sm sm:text-base group-hover:text-[#e1e4e8] transition-colors">
        <p>{repoDescription || "No description available"}</p>
      </div>
      <div className="flex flex-row justify-start p-4 gap-4 items-center">
        <div className="flex items-center gap-1">
          <VscRepoForked className="text-neutral-500 text-lg sm:text-2xl group-hover:text-[#0366d6] transition-colors" />
          <span className="text-neutral-500 text-sm sm:text-base group-hover:text-[#0366d6] transition-colors">{forksCount}</span>
        </div>
        <div className="flex items-center gap-1">
          <VscStarEmpty className="text-neutral-500 text-lg sm:text-2xl group-hover:text-[#0366d6] transition-colors" />
          <span className="text-neutral-500 text-sm sm:text-base group-hover:text-[#0366d6] transition-colors">{stargazersCount}</span>
        </div>
      </div>
    </div>
  );
}

export default GitCard;
