import styled from 'styled-components';

export const Wrapper = styled.section`
    height: 100vh;
    padding: 2rem;
`

export const Button = styled.button`
    width: 100px;
    display: flex;
    justify-content: center;
    margin-left: auto;
    background: var(--greenBg-color);
    font-size: var(--font-twelve);
    font-weight: 600;
    font-family: var(--font);
    padding: .35rem;
    border: 1px solid #249e3b;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    transition: all .3s;
    color: #F0F6FC;
    margin-bottom: .5rem;

    & :hover, :focus{
        background: #249e3b;
    }
`

export const CardWrapper = styled.div`
    display: grid;
    margin: 15vh auto;
`
export const Card = styled.div`
    display: grid;
    background: var(--headerBg-color);
    padding: 1rem 1.5rem;
    border: 1px solid #242424;
    border-radius: 5px;
    width: 350px;
    margin: 1rem auto;
`

export const Box = styled.div`
    margin-bottom: .75rem;
`

export const Label = styled.label`
    font-weight: 600;
    line-height: 2rem;
`

export const Name = styled.p`
    font-weight: 500;
`