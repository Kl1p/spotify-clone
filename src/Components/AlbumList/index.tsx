import React from 'react';
import { Container, Subtitle, Wrapper} from './styles';
import { AlbumItem }  from '../AlbumItem'; 

type AlbumProps = {
  title: string,
}
export function AlbumList({ title, ...props  }:AlbumProps) {
  return (
    <Container>
      <Subtitle>{ title }</Subtitle>
      <Wrapper>
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />
            
      </Wrapper>
    </Container>
  );
}

