import { JobDetails } from "../component/features/jobDetails";
import Mainlayout from "../component/layout";
import useFetchAllJobs from "../hook/useFetchAllJobs";

const Favorite = () => {
  const { jobs, status } = useFetchAllJobs();
  const favorites =
    jobs && jobs?.filter((favorite) => favorite.status !== false);
  console.log(jobs);
  return (
    <Mainlayout text="Favorites">
      <main>
        {status === "pending" && (
          <p className="text-blue-500 font-bold text-2xl p-3">Loading...</p>
        )}
        {status === "error" && (
          <p className="text-red-500 font-bold text-2xl p-3">
            Something went wrong
          </p>
        )}

        {favorites?.length > 0 ? (
          <section className="grid grid-cols-4 gap-4">
            {favorites?.map((job) => (
              <JobDetails key={job.id} job={job} />
            ))}
          </section>
        ) : (
          <div className="h-[50vh] flex justify-center items-center flex-col">
            <h2 className="text-2xl font-bold text-primary">
              No Favorite Found
            </h2>
          </div>
        )}
      </main>
    </Mainlayout>
  );
};

export default Favorite;
