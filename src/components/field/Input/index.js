import styled from 'styled-components';

const Input = styled.input `
    position: relative;
    width: 100%;
    font-weight: 500;
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(17, 17, 17, 0.2);
    padding: 0 24px 2px 0;
    transition: border-color 0.3s;
    z-index: 1;

    :hover{
        border-bottom : 1px solid rgba(17, 17, 17, 1)
    }
`;

export default Input;
