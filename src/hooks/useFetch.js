import { useState, useEffect } from "react";

export const useFetch = (repoName) => {
  const [data, setData] = useState([]);
  const url = `https://api.github.com/repos/Ayk123/${repoName}`;

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(url);
      const data = await response.json();
      //   console.log(data);
      setData(data);
    };
    fetchProjects();
  }, [url]);

  return { data };
};
