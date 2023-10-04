"use client";

import { ExperienceChildContentProps, ExperienceProps } from "@/src/data";
import CardExperienceList from "./card-epxerience-list";

interface CardChildrenProps {
  data: ExperienceChildContentProps[];
}

function CardChildren({ data }: CardChildrenProps) {
  return (
    <>
      {data.map((item) => {
        return (
          <>
            {item.title && (
              <h3 className="text-2xl mt-2 mb-2 font-roclette font-bold italic">{item.title}</h3>
            )}
            <h4 className="mt-1 mb-1 font-roclette font-bold">{item.subTitle}</h4>
            <ul className="list-disc">
              <CardExperienceList hasTitle={item.subTitle ? true : false} data={item.content} />
            </ul>
          </>
        );
      })}

    </>
  );
}

export default CardChildren;
