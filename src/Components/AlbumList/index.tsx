import React from 'react';
import { Container, Subtitle} from './styles';
import { AlbumItem }  from '../AlbumItem'; 

export function AlbumList() {
  return (
    <Container>
      <Subtitle>Albuns buscados recentemente</Subtitle>
      <AlbumItem />
    </Container>
  );
}

