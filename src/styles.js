import {styled} from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    height: 100vh;
    background-color: #ab6f7c; 

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #d8c7c9;
    width: 60%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`