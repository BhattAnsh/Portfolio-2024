import { VscRepo, VscRepoForked, VscStarEmpty, VscCode } from "react-icons/vsc";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative group w-full max-w-sm p-0.5 rounded-2xl overflow-hidden",
        "bg-gradient-to-br from-neutral-800 to-neutral-900",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-br before:from-[#0366d6] before:to-purple-600",
        "before:opacity-0 before:transition-opacity before:duration-300",
        "group-hover:before:opacity-100"
      )}
    >
      <div className="relative bg-neutral-900 rounded-2xl p-4 h-full">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-row items-center gap-3">
            <VscRepo className="text-2xl text-neutral-400 group-hover:text-[#0366d6] transition-all duration-300" />
            <h1 className="text-neutral-200 font-semibold text-lg sm:text-xl group-hover:text-[#0366d6] transition-all duration-300">
              {repoName}
            </h1>
          </div>
          <a 
            href={repoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:rotate-12 transition-transform duration-300"
          >
            <VscCode className="text-2xl text-neutral-400 group-hover:text-[#0366d6]" />
          </a>
        </div>

        <div className="mt-4 text-neutral-400 text-sm sm:text-base group-hover:text-neutral-200 transition-colors duration-300">
          <p>{repoDescription || "No description available"}</p>
        </div>

        <div className="flex flex-row justify-start mt-4 gap-6 items-center">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2"
          >
            <VscRepoForked className="text-neutral-400 text-lg sm:text-xl group-hover:text-[#0366d6] transition-colors" />
            <span className="text-neutral-400 text-sm sm:text-base group-hover:text-[#0366d6] transition-colors">
              {forksCount}
            </span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2"
          >
            <VscStarEmpty className="text-neutral-400 text-lg sm:text-xl group-hover:text-[#0366d6] transition-colors" />
            <span className="text-neutral-400 text-sm sm:text-base group-hover:text-[#0366d6] transition-colors">
              {stargazersCount}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default GitCard;
