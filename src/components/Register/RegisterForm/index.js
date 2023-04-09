import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel, HStack,
    Input,
    InputGroup,
    InputRightElement,
    VStack
} from "@chakra-ui/react";
import {useState} from "react";
import {userRoles} from "../../../constants/userRoles";
import {CUIAutoComplete} from "chakra-ui-autocomplete";

const RegisterForm = ({
                          handleSubmit,
                          submitting,
                          selectedRoles,
                          setSelectedRoles
                      }) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const roleOptions = userRoles.map(role => ({
        label: role.name,
        value: role.name,
    }));

    return (
        <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
                <FormControl isRequired={true}>
                    {/*first name and last name */}
                    <FormLabel>Name</FormLabel>
                    <HStack>
                        <Input
                            type='text'
                            name={'firstName'}
                            placeholder={'First Name'}
                        />
                        <Input
                            type='text'
                            name={'lastName'}
                            placeholder={'Last Name'}
                        />
                    </HStack>
                </FormControl>
                <FormControl isRequired={true}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type='email'
                        name={'email'}
                    />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl isRequired={true}>
                    <FormLabel>Username</FormLabel>
                    <Input
                        type='text'
                        name={'username'}
                    />
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
                <FormControl isRequired={true}>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            name={'password2'}
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
                <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <Input
                        type='text'
                        name={'phone'}
                    />
                </FormControl>
                <FormControl isRequired={true}>
                    <FormLabel>Address</FormLabel>
                    <VStack>
                        <Input
                            type='text'
                            name={'street'}
                            placeholder={'Street'}
                        />
                        <HStack>
                            <Input
                                type='text'
                                name={'city'}
                                placeholder={'City'}
                            />
                            <Input
                                type='text'
                                name={'state'}
                                placeholder={'State'}
                            />
                            <Input
                                type='text'
                                name={'zip'}
                                placeholder={'Zipcode'}
                            />
                        </HStack>
                    </VStack>
                </FormControl>
                <FormControl isRequired={true}>
                    <CUIAutoComplete
                        items={roleOptions}
                        selectedItems={selectedRoles}
                        onSelectedItemsChange={(changes) => {
                            const {selectedItems} = changes;
                            setSelectedRoles(selectedItems);
                        }}
                        disableCreateItem={true}
                        placeholder={'Select your roles'}
                        label={'Roles'} />
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

export default RegisterForm;
