import React from 'react';
import { Container, Title, Description, Imagem } from './styles';
export function AlbumItem() {
  return (
    <Container>
      <Imagem />
      <Title>Nome do Album</Title>
      <Description>Nome do artista </Description>
    </Container>

  );
}

