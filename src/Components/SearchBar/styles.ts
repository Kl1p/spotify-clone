import  styled  from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px var(--paddingMain);
    margin-bottom: 75px;
    `;

export const Label = styled.label`
    font-size: var(--fontMedium);
    color: var(--secondary);
    `;

export const Input = styled.input`
    font-size: var(--fontXLarge);
    line-height: var(--fontXLarge);
    color: var(--secondary);
    height: 70px;
    padding-bottom: 14px;
    border: 0;
    border-bottom: 2px solid #ccc;
    font-weight: bold;
    line-height: 48px;
    background-color: transparent;
    color: var(--white);
    outline: 0;
    padding-left: 10px
    `;