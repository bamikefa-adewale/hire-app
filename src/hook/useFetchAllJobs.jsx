import { useQuery } from "@tanstack/react-query";
import { supabase } from "../database";

const useFetchAllJobs = () => {
  // Queries
  const { data, status } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const { data } = await supabase.from("jobs").select("*");
      return data;
    },
  });

  return {
    jobs: data,
    status,
  };
};

export default useFetchAllJobs;
