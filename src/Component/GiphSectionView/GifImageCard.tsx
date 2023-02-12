import React from "react";
import { ImageWrapper, ImageContainer } from "./SearchResultStyledComponents";
import { useDrag } from "react-dnd";

type GifImageCardProps = {
  imageUrl: string;
  title: string;
  id: string;
};

export const ItemType = {
  GIFCARD: "gifcard",
};

const GifImageCard: React.FC<GifImageCardProps> = ({ id, imageUrl, title }) => {
  const [{ isDragging }, drag] = useDrag({
    type:ItemType.GIFCARD,
    item: {
      type: ItemType.GIFCARD,
      id: id,
      title: title,
      imageUrl: imageUrl
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <ImageWrapper style={{opacity: isDragging ? "0.5" : "1"}} ref={drag}>
      <ImageContainer>
        <img src={imageUrl} alt={title} />
      </ImageContainer>
    </ImageWrapper>
  );
};

export default GifImageCard;
