import {
    Button,
    Container,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement, VStack
} from "@chakra-ui/react";
import {useState} from "react";


const Login = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <Container className="login">
            <form>
                <VStack spacing={5}>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type='email'/>
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}/>
                            <InputRightElement>
                                <Button
                                    h='1.75rem' size='sm'
                                    onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <Button
                            colorScheme='blue'
                            type={'submit'}>
                            Login
                        </Button>
                    </FormControl>
                </VStack>
            </form>
        </Container>
    )
}

export default Login;