import React, { ReactNode } from 'react';
import { Container, Label, Input } from './styles';

export function SearchBar() {
    return (
        <Container>
            <label>
            Busque por artistas, albuns ou músicas    
            </label>
           <Input
                placeholder="Comece a escrever..."
            />
        </Container>
    )
}
