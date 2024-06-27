import styled from 'styled-components';

export const InputContainer = styled.div `
    width: 100%;
    height: 75px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 80px;
        background-color: #bbbec1;
    
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 40px;
        font-family: 'Roboto';
        color: #0c0f14;
        font-weight: bold;
    }
`