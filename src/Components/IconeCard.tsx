import React from 'react';

type IconeCardProps = {
    icon: any;
    heading :string;
    description : string;

  };
  
  const IconCard: React.FC<IconeCardProps> = ({ icon , heading , description}) => {
    return (
        <div className='flex space-x-5 items-center'>
            <div className='bg-blue-600 w-12 h-12 rounded-md justify-items-center'>
                {icon}
            </div>
            <div className='space-y-2'>
                <div className='font-semibold'>{heading}</div>
                <div className=''>{description}</div>
            </div>
            
        </div>
    );
}

export default IconCard;