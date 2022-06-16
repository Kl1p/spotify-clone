import React, { ReactNode } from 'react';
import { Container } from './styles';

type ReactProps = {
    children: ReactNode
}

export function Default({ children }: ReactProps) {
    return (
        <Container>
            Olá mundo
            {children}
        </Container>
        
    )
}
