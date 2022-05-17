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
import {connect} from 'react-redux';


interface Form {
    type: String
    size: Number
    value: String
    stroke: String
}; 

const Login = () => {

    const [username, setUsername] = useState('');
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    const handleClick = (e: any) => {
        setUsername(e.target.value)   
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
                        onChange={handleClick}
                        required
                    />
                </Form>
                <Button 
                    type="submit"
                    onSubmit={handleSubmit}
                >
                    Login
                </Button>
            </Body>
        </Wrapper>
    )
}

function mapStateToProps (state: any) {
    return {user: state.user};
}


export default connect(mapStateToProps) (Login);