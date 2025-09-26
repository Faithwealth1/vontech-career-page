import * as React from "react";

interface JobCardProps {
  title: string;
  imageUrl: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, imageUrl }) => {
  return (
    <article className="min-w-60 overflow-hidden w-[410px] rounded-[30px] border-2 border-solid border-[#E0E0E0] hover:shadow-lg transition-shadow cursor-pointer">
      <img
        src={imageUrl}
        alt={`${title} position`}
        className="aspect-[1.69] object-contain w-full rounded-[30px_30px_0px_0px]"
      />
      <div className="justify-center flex w-full flex-col bg-white p-10 rounded-[0_0_30px_30px] max-md:px-5">
        <h3 className="text-[#181818] text-2xl font-semibold leading-[1.3]">
          {title}
        </h3>
      </div>
    </article>
  );
};

const CurrentOpenings: React.FC = () => {
  const jobOpenings = [
    {
      title: "AI Cloud Architect",
      imageUrl: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/73fb81ede442bea008225f256869e58318099e33?placeholderIfAbsent=true"
    },
    {
      title: "Cloud-Native Developer",
      imageUrl: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/e55cf11f8065d4ca652d6079f63f41f640983107?placeholderIfAbsent=true"
    },
    {
      title: "DevOps Engineer",
      imageUrl: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/510d63191f379d77a5c1cf96cc31522420246b11?placeholderIfAbsent=true"
    },
    {
      title: "Big Data Engineer",
      imageUrl: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/5e9671109dfd12ac498a34a8b48adbbffffe726b?placeholderIfAbsent=true"
    },
    {
      title: "IoT Solutions Developer",
      imageUrl: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/fa0a42e4f6f6a8501fe6b314b57b7be6cd173434?placeholderIfAbsent=true"
    },
    {
      title: "Technical Support Specialist",
      imageUrl: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/21e03e6f7d893bed7ff8506427b1d64ee16fca30?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="z-0 w-full text-center bg-[#FBFBFB] pt-[60px] pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
          <h2 className="text-4xl font-bold leading-none bg-clip-text max-md:max-w-full">
            Current Openings
          </h2>
          <p className="text-[#393C3D] text-lg font-normal self-center mt-2 max-md:max-w-full">
            Explore exciting career opportunities in areas like:
          </p>
        </div>
        <div className="flex w-full gap-[40px_0px] text-2xl text-[#181818] font-semibold leading-[1.3] justify-between flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
          {jobOpenings.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              imageUrl={job.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentOpenings;
