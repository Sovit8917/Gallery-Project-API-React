import React from "react";

function Cards(props) {
  return (
    <div>
      <a href={props.elem.url}>
        <div>
          <div className="h-45 w-65 overflow-hidden bg-gray-600 rounded-xl">
            <img
              className=" h-full w-full object-cover"
              src={props.elem.download_url}
              alt=""
            />
          </div>
          <h2 className="font-bold mr-5  px-5 flex justify-center align-center py-1 m-3 rounded bg-violet-500">
            {props.elem.author}
          </h2>
        </div>
      </a>
    </div>
  );
}

export default Cards;
