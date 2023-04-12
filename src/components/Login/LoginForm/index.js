import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    VStack,
    Container
} from "@chakra-ui/react";
import {useState} from "react";
import "./index.css"

const LoginForm = ({handleSubmit, submitting, error}) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
            <form onSubmit={handleSubmit} style={{
                backgroundSize: "cover",
                padding: "1rem",
                borderRadius: "0.5rem",
                boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.1)",
                display: "flex"
            }}>
                <div style={{ flex: "1", marginRight: "1rem" }}>
                    <img src="../../../images/cake.jpg" alt="Image" style={{ width: "100%" }} />
                </div>
                <div style={{ flex: "1" }}>
                        <FormControl isRequired={true}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' name={'email'} />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                        <FormControl isRequired={true}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    name={'password'}
                                    placeholder='Enter password'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button
                            type='submit'
                            isLoading={submitting}
                            loadingText='Submitting'
                            colorScheme='blue'
                            variant='outline'
                            width={'full'}>
                            Submit
                        </Button>
                </div>
            </form>
    )
}

export default LoginForm;
