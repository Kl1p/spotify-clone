import React, { ReactNode } from 'react';
import { Container, Label, Input } from './styles';

type SearchBarProps = {
    handleSetTerm: (prop: string )=>void;
    searchTerm: string|undefined;
}

export function SearchBar({ handleSetTerm, searchTerm }: SearchBarProps) {
    return (
        <Container>
            <label>
            Busque por artistas, albuns ou músicas    
            </label>
           <Input
                
                onChange={(e)=>handleSetTerm(e.target.value)}
                placeholder="Comece a escrever..."
            />
        </Container>
    )
}
