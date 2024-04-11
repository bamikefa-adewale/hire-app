import Mainlayout from "../component/layout";
import useFetchAllJobs from "../hook/useFetchAllJobs";
import { JobDetails } from "../component/features/jobDetails";
const Home = () => {
  const { jobs, status } = useFetchAllJobs();
  return (
    <Mainlayout text="Hire Top jobs">
      {jobs?.length > 0 && status === "success" ? (
        <section className="grid grid-cols-4 gap-4">
          {jobs?.map((job) => (
            <JobDetails key={job.id} job={job} />
          ))}
        </section>
      ) : status === "pending" ? (
        <p className="text-blue-500 font-bold text-2xl p-3">Loading...</p>
      ) : (
        <p className="text-red-500 font-bold text-2xl p-3">
          Something went wrong
        </p>
      )}
    </Mainlayout>
  );
};

export default Home;
