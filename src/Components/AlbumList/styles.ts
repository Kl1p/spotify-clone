import  styled  from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 0px var(--paddingMain);
    margin-bottom: 80px;
    flex-direction: column;
`;
export const Wrapper = styled.div`
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: 1fr;
    display: grid;
    gap: 65px;
    overflow-x: clip;
`;

export const Subtitle = styled.h2`
    font-size: var(--fontMedium);
    color: var(--terciary);
    margin-bottom: 35px;
    `; 