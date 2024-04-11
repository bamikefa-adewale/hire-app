/* eslint-disable react/prop-types */

import RedHeart from "../../assets/redHeat";
import { useUpdateFavorite } from "../../hook/useUpdateFavorite";

export const JobDetails = ({ job }) => {
  const { handleUpdata } = useUpdateFavorite();

  return (
    <div key={job.id} className="bg-white p-2 rounded-[10px]">
      <div className="relative">
        <img src={job.bannerImag} alt="" />
        <img
          src={job.userImg}
          alt=""
          className="-mt-[20px] ml-4 h-[44px] w-[44px]"
        />
        <div
          className={`absolute cursor-pointer top-[5%] right-[5%] h-[35px] w-[35px] 
           rounded-[10px] flex justify-center items-center ${
             job?.status === true ? "bg-white" : " bg-gray-dark"
           }`}
          onClick={() => handleUpdata(job)}
          role="button"
        >
          <RedHeart color={job?.status === true ? "#FF4135" : "#fff"} />
        </div>
      </div>
      <div className="p-4 flex justify-between items-center">
        <div>
          <h4 className="font-bold text-base text-black opacity-80 my-2">
            {job.name}
          </h4>
          <p className="font-normal text-sm text-black opacity-[49]">
            #{job.salary}
          </p>
        </div>
        <h4 className="font-bold text-sm text-primary">Hire</h4>
      </div>
    </div>
  );
};
