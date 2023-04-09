import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    VStack
} from "@chakra-ui/react";
import {useState} from "react";

const LoginForm = ({handleSubmit, submitting, error}) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
                <FormControl isRequired={true}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type='email'
                        name={'email'}
                    />
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
                            <Button
                                h='1.75rem' size='sm'
                                onClick={handleClick}>
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
            </VStack>
        </form>
    )
}

export default LoginForm;
