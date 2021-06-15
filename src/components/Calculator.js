import React from 'react'
import styled from "styled-components";

function Calculator() {
    return (
        <Wrapper>
           <Settings>
               <h2>calc</h2>
           </Settings>
           <Input placeholder="0" type="number" />
           {/* <Buttons>
                <Button> 7 </Button>
                <Button> 8 </Button>
                <Button> 9 </Button>
                <Button> Del </Button>
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

                <Button> <p>Reset</p> </Button>
                <Button> <p> = </p></Button>
            </Buttons> */}
        </Wrapper>
    )
}

export default Calculator

const Wrapper = styled.div`
    background: pink;
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
`