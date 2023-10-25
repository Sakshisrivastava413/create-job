"use client";

import Button from "@/common-components/Button";
import HollowButton from "@/common-components/HollowButton";
import Image from "next/image";

const Home = ({ data, handleDelete, handleEdit }) => {
  return (
    <div className="flex flex-wrap flex-center m-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex justify-between space-x-2 w-[48%] px-[24px] py-[14px] border border-[#DADEDF] rounded-[10px] my-2 mx-2"
        >
          <div className="flex space-x-2 items-start">
            <Image src={"./logo.svg"} width={48} height={48} alt={"logo"} />
            <div>
              <p className="text-2xl font-normal">{item.jobTitle}</p>
              <p className="text-base">
                {item.companyName} - {item.industry}
              </p>
              <p className="text-grey-2 text-base">
                {item.location} ({item.remoteType})
              </p>
              <div className="text-[#212427] text-base my-[24px] flex flex-col space-y-[8px]">
                <p className="">{item.applyType}</p>
                <p>
                  Experience ({item.experienceMin} - {item.experienceMax} years)
                </p>
                <p>
                  INR (₹) {item.salaryMin} - {item.salaryMax} / Month
                </p>
                <p>{item.totalEmp} employees</p>
              </div>
              {item.applyType === "Quick apply" ? (
                <Button title="Apply Now" onClick={() => {}}></Button>
              ) : (
                <HollowButton
                  title="External Apply"
                  onClick={() => {}}
                ></HollowButton>
              )}
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Image
              src={"edit.svg"}
              width={24}
              height={24}
              alt={"logo"}
              className={"cursor-pointer"}
              onClick={() => handleEdit(item)}
            />
            <Image
              src={"delete.svg"}
              width={24}
              height={24}
              alt={"logo"}
              className={"cursor-pointer"}
              onClick={() => handleDelete(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
