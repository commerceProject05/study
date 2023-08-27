import React from 'react';
import styled from '@emotion/styled';

import Input from '../Input';

const Main = () => {
    return (
        <>
            <Container>

                <Input></Input>
            </Container>
        </>
    );
};

export default Main;

const Container = styled.div`
    display: flex;
height: 90px;
padding: 10px 32px;
align-items: center;
gap: 10px;
align-self: stretch;
`