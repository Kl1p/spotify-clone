import React from 'react';
import { Container, Title, Description, Imagem } from './styles';
export function AlbumItem() {
  return (
    <Container>
      <Imagem src="https://via.placeholder.com/160/170/"/>
      <Title>Nome do Album</Title>
      <Description>Nome do artista </Description>
    </Container>

  );
}

