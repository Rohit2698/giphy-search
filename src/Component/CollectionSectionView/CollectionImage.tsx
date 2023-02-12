import React from "react";
import { useDrag } from "react-dnd";
import { CollectedImageWrapper, GifImage } from "./DropZoneStyledComponent";

type CollectionImageCardProps = {
  imageUrl: string;
  title: string;
  id: string;
};

export const ItemType = {
  GIFCARD: "gifcard",
};

const CollectionImageCard: React.FC<CollectionImageCardProps> = ({
  id,
  imageUrl,
  title,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType.GIFCARD,
    item: {
      type: ItemType.GIFCARD,
      id: id,
      title: title,
      imageUrl: imageUrl,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <CollectedImageWrapper opacity={isDragging ? "0.5" : "1"} ref={drag}>
      <GifImage src={imageUrl} alt={title} />
    </CollectedImageWrapper>
  );
};

export default CollectionImageCard;
