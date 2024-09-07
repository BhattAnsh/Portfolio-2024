import { useEffect, useState } from "react";
import axios from "axios";
import GitCard from "../ui/GitCard";
import { WordPullUp } from "../animations/WordPullUp";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  owner: {
    login: string;
  };
  fork: boolean;
};

function Git() {
  const [data, setData] = useState<Repo[]>([]);

  const gettingRepos = async () => {
    try {
      const res = await axios.get("https://api.github.com/users/BhattAnsh/repos");
      const filteredRepos = res.data.filter((repo: Repo) => 
        repo.owner.login === "BhattAnsh" && !repo.fork
      );
      setData(filteredRepos);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    gettingRepos();
  }, []);

  return (
    <>
      <WordPullUp text="GITHUB"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {data.slice(0, 6).map(repo => (
          <GitCard
            key={repo.id}
            repoName={repo.name}
            repoDescription={repo.description || "No description available"}
            repoLink={repo.html_url}
            stargazersCount={repo.stargazers_count}
            forksCount={repo.forks_count}
          />
        ))}
      </div>
    </>
  );
}

export default Git;
