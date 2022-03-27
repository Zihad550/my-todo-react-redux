import styled from 'styled-components';

const Todo = styled.p`
    background: white;
    padding: .5rem;
    margin-bottom:.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover{
        background-color: aliceblue;
    };
    p, s{
        max-width: 80%;
    };
       
    
`;

export default Todo;
