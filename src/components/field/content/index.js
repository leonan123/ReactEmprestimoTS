import styled from 'styled-components';

const Content = styled.span `
    position: absolute;
    display: block;
    font-weight: 500;
    color: rgba(17, 17, 17, 0.4);
    transition: all ease-out 0.2s;

    &.active{
        font-size: 0.8rem;
        margin-top: -20px;
    }
`;

export default Content
