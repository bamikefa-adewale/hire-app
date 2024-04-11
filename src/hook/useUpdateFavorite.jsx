import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { supabase } from "../database";
export const useUpdateFavorite = () => {
  // Access the client
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (job) => {
      const { data } = await supabase
        .from("jobs")
        .update({ status: job?.status })
        .eq("id", job?.id);
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      toast.success(
        data?.status === true ? "Added to Favorite" : "Remove from Favorite"
      );
    },
    onError: (error) => {
      toast?.error(error?.message);
    },
  });

  const handleUpdata = (job) => {
    const payload = {
      ...job,
      status: !job.status,
    };
    mutate(payload);
  };
  return {
    handleUpdata,
  };
};
