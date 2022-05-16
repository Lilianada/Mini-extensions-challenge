import React, { useState } from "react";
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
import { type } from "os";


interface Form {
    type: String
    size: Number
    value: String
    stroke: String
}; 

export default function Login () {

    const [username, setUsername] = useState('');
    const handleSubmit = {
        
    }
    
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </Form>
                <Button 
                    type="submit"
                    // onSubmit={handleSubmit}
                >
                    Login
                </Button>
            </Body>
        </Wrapper>
    )
}

