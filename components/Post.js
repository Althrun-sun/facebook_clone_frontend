import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1920px-Facebook_f_logo_%282021%29.svg.png"
            className="rounded-full w-10"
          ></img>
          <div>
            <p className="font-medium">Althrun</p>
            <p className="text-xs text-gray-500">
              {new Date().toLocaleDateString('en-US')}
            </p>
          </div>
        </div>
        <p className="py-4">Lorem ipsum</p>
      </div>
      <div className="relative h-60 md:h-96 bg-white">
        <Image src="https://grantme.ca/wp-content/uploads/2020/12/UBC-1200x808.jpg"
        layout="fill" 
        objectFit="cover"
        alt='samplepost'
        ></Image>
      </div>
    </div>
  );
};

export default Post;
