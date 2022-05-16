import styled from 'styled-components';

export const Wrapper = styled.section`
    display: grid;
    place-items: center;
    grid-template-columns: 100%;
    grid-template-rows: repeat();
    padding: 2rem;
    height: auto;
    width: 340px;
    margin: 0 auto;
`

export const Head = styled.header`
    text-align: center;

    >p{
        font-weight: 200;
        font-size: 1.25rem;
        color: var(--headTxt-color);
        padding: .75rem 0;
    }
`

export const Body = styled.div`
    display: grid;
    background: var(--headerBg-color);
    padding: 1rem 1.5rem;
    border: 1px solid #242424;
    border-radius: 5px;
    width: 100%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    color: var(--headTxt-color);
    font-size: 13px;
`

export const Span = styled.span`
    color: var(--blueTxt-color);
    font-size: var(--font-twelve);
`

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: .5rem;
`

export const Input = styled.input`
    background: var(--bodyBg-color);
    border: 1px solid #242424;
    border-radius: 3px;
    padding: .25rem .5rem;
    margin-bottom: 1rem;
    color: #F0F6FC;
    font-size: var(--font-twelve);
    font-weight: 300;
    letter-spacing: normal;

    & :hover, :focus{
        outline: var(--blueTxt-color) 1.5px solid;
    }
`

export const Button = styled.button`
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

export const Footer = styled.footer`
    padding: .5rem 2rem;
    border:  1px solid var(--bodyTxt-color);
    border-radius: 5px;
    width: 100%;
    margin-top: 1rem;
`

export const Text = styled.p`
    font-size: var(--font-twelve);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--headTxt-color);

    >span{
        margin-left: 3px;
    }
`