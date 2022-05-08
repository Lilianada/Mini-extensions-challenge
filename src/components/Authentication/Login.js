import React from "react";
import {
    Wrapper,
    Head,
    Body,
    Form,
    Flex,
    Label,
    Input,
    Button
} from './LoginStyles'
import { CgProfile } from "react-icons/cg";

export default function Login () {

    return(
        <Wrapper>
            <Head>
                <CgProfile size={48} stroke='#FFFFFF' />
                <p>Student Login</p>
            </Head>
            <Body>
                <Form>
                   <Flex>
                        <Label>Student Name</Label>
                   </Flex>
                    <Input
                        type='username'
                        name="username"
                        required
                    />
                </Form>
                <Button type="submit">Login</Button>
            </Body>
        </Wrapper>
    )
}

