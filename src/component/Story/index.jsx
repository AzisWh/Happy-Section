import React from "react";
import { Dummypict } from "../../assets";

const TimelineItem = ({ heading, date, description, image }) => {
  return (
    <div className={`flex flex-row mb-8 justify-center`}>
      <div className="w-[250px] sm:w-[100px]">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="panel-timeline mx-4 md:w-1/2">
        <div className="heading-line">
          <h3 className="text-zinc-500">{heading}</h3>
          <span className="font-bold">{date}</span>
        </div>
        <div className="timeline-body">
          <p className="text-xs text-zinc-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Story = () => {
  const timelineData = [
    { heading: "Pertama Bertemu", date: "4 Januari 2016", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus quos exercitationem incidunt aspernatur.", image: Dummypict },
    { heading: "Mulai Serius", date: "15 April 2023", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus quos exercitationem incidunt aspernatur.", image: Dummypict },
    { heading: "Tunangan", date: "4 Januari 2024", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus quos exercitationem incidunt aspernatur.", image: Dummypict },
  ];

  const styles = {
    shadowElement: {
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    },
    sacrameto: {
      fontFamily: "Sacramento",
      color: "#f14e95",
    },
  };

  return (
    <div className="p-8" id="story">
      <div className="flex flex-col text-center py-5">
        <span className="mb-3 uppercase tracking-normal">Bagaimana Cinta Kami Bersemi</span>
        <h2 className="text-7xl" style={styles.sacrameto}>
          Cerita Kami
        </h2>
        <p className="text-xs text-zinc-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur corrupti inventore tempore illo natus beatae quae et asperiores ipsum. </p>
      </div>

      {/* story ul li */}
      <div className="flex flex-col">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Story;
