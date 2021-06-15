import React from 'react'
import styled from "styled-components";

function Calculator() {
    return (
        <Wrapper>
           <Settings>
               <h2>calc</h2>
           </Settings>
           <Input placeholder="0" type="number" />
           <Buttons>
                <Button> 7 </Button>
                <Button> 8 </Button>
                <Button> 9 </Button>
                <DeleteButton> Del </DeleteButton>
                <Button> 4 </Button>
                <Button> 5 </Button>
                <Button> 6 </Button>
                <Button> + </Button>
                <Button> 1 </Button>
                <Button> 2 </Button>
                <Button> 3 </Button>
                <Button> - </Button>
                <Button> . </Button>
                <Button> 0 </Button>
                <Button> / </Button>
                <Button> * </Button>

                <ResetButton> <p> Reset </p> </ResetButton>
                <EqualButton> <p> = </p></EqualButton>
            </Buttons>
        </Wrapper>
    )
}

export default Calculator

const Wrapper = styled.div`
    width: 540px;
    height: 708px;
    margin-top: 75px;
`

const Settings = styled.div`
    height: 44px;
    color: white;
    display: flex;

    h2 {
        font-family: Spartan;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: -0.53px;
        text-align: center;

    }
`

const Input = styled.input` 
    height: 128px;
    width: 100%;
    background-color: #181F33;
    margin-bottom: 15px;
    border-radius: 8px;
    border: none;
    padding: 25px;

    text-align: right;
    color: white;
    font-size: 50px;

    &:focus {
        outline: none;
    }

    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    } 
`

const Buttons = styled.div`
    background-color: #242d40;
    width: 100%;
    height: 540px;
    padding: 25px;
    color: #434A59;
    border-radius: 8px;

    display: grid;
    justify-items center;
    align-items: center;

    grid-template: repeat(5, 1fr) / repeat(4, 1fr);
    grid-gap: 10px;
    
    p {
        font-family: Spartan;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: -0.53px;
        text-align: center;

    }
`

const Button = styled.div`
    background-color: #EAE3DC;
    font-size: 25px;
    height: 88px;
    width: 100%;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 0.3s;

    &:hover {
        background-color: aqua;
    }
`
const DeleteButton = styled(Button)`
    background-color: #647198;
    color: white;
`

const ResetButton = styled(Button)`
    background-color: #647198;
    color: white;
    grid-column: span 2;
    width: 100%;
`

const EqualButton = styled(Button)`
    background-color: #D03F2F;
    color: white;
    grid-column: span 2;
    width: 100%;
`