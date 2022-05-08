import React from 'react';
import { 
    Wrapper,
    Button,
    CardWrapper,
    Card,
    Box,
    Label,
    Name
 } from "./CardsStyles"

export default function Cards() {
  return (
    <Wrapper>
        <Button>Logout</Button>
        <CardWrapper>
            <Card>
                <Box>
                    <Label>Name:</Label>
                    <Name>CS100</Name>
                </Box>
                <Box>
                    <Label>Students:</Label>
                    <Name>Jane, Victor, Cynthia, Glory, David</Name>
                </Box>
            </Card>
        </CardWrapper>
    </Wrapper>
  )
}
