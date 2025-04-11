import React from "react";
import { Search, BookOpen, Clock, Star, Filter } from "lucide-react"


const Card = ({ srn , title, imgSrc, description,tags, duration, difficulty }) => {

 
  return (
    <form action={`http://localhost:5000/topic${srn}`} method="GET">
    <button type="submit">
    <div  className="cursor-pointer overflow-hidden rounded-2xl transition-all hover:shadow-md bg-base-100 ">
      

      <div className="aspect-video relative border-b-2 border-base-300">
          <img
            src={imgSrc}
            alt="{course.title}"
            className="w-full h-full object-cover bg-base-300"
          />
      </div>
      

      <div className="mt-3 flex-col items-center py-2 px-6 ">
        <h2 className="text-2xl line-clamp-1 font-bold text-neutral pt-2">{title}</h2>
        <p className="text-gray-600 text-md pt-2 line-clamp-2 ">{description}</p>     
        <div className="flex justify-between items-center   mt-4 text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
              <p>{duration}</p>
          </div>
          <div className="flex items-center gap-1">
          <Star className="h-4 w-4" />
           <p>{difficulty}</p>
          </div>
        </div>
      </div>


    </div>
    </button>
    </form>
  );
};

export default Card;
