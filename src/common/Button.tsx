import React from 'react';

type TypeProps = {
  borderColour: 'primary' | 'white';
  bgColour: 'primary' | 'white';
  text: string;
  textColour: 'primary' | 'white';
};

const colorMap = {
  primary: '#F97436', // Updated primary color
  white: '#FFFFFF',
};

function Button({ borderColour, bgColour, text, textColour }: TypeProps) {
  return (
    <div
      className="w-max text-center cursor-pointer  hover:shadow-lg   px-[23px] py-[13px] text-nowrap rounded-sm font-poppins-medium text-[14px] border"
      style={{
        borderColor: colorMap[borderColour],
        backgroundColor: colorMap[bgColour],
        color: colorMap[textColour],
        
      }}
    >
      {text}
    </div>

  );
}

export default Button;
