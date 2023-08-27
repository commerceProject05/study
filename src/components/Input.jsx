import React from 'react';
import styled from '@emotion/styled';
const Input = () => {

    return (
        <>
            <TodoInput></TodoInput> <button>추가하기</button>
        </>
    );
};

export default Input;

const TodoInput = styled.input`
    width: 750px;
    height: 65px;
`