import type { AnimalCardProps } from "./types";
import { AnimalImage, Description, AnimalCardWrapper, Title } from "./styles";

function AnimalCard({ name, species, img }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <Title>{name}</Title>
      <Description>{species}</Description>
      <AnimalImage src={img} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
