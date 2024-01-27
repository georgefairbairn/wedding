import React from 'react';

interface Props {
  color: string;
  size: number;
  style: React.CSSProperties;
}

const SparkleInstance = ({ color, size, style }: Props) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';

  return (
    <span className='absolute block animate-sparkle-come-in-out' style={style}>
      <svg
        className='block animate-sparkle-spin'
        width={size}
        height={size}
        viewBox='0 0 68 68'
        fill='none'
      >
        <path d={path} fill={color} />
      </svg>
    </span>
  );
};

export default SparkleInstance;
