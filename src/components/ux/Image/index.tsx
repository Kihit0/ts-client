import React from "react";

interface IProps {
  src: string;
  alt?: string;
  className?: string;
}

export const Image: React.FC<IProps> = (props) => {
  const { alt, src, className } = props;
  return (
    <div {...{className}}>
      <img
        {...{
          src: src,
          alt: alt,
          className: `img`,
        }}
      />
    </div>
  );
};
