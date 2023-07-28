'use client'


interface CardExperienceListProps {
 data:string[]
 hasTitle: boolean
}
function CardExperienceList({data, hasTitle=false}: CardExperienceListProps) {
    return (
      <>
        {data.map((item) => {
          {
            return (hasTitle ? <li  className="ml-8">{item}</li> : <li>{item}</li>);
          }
        })}
      </>
    );
}

export default CardExperienceList;
