import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaKey, FaGhost } from "react-icons/fa";

import { useState } from "react";
import firebase from 'firebase/app';
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword, 
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import { signUp } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaKey = chakra(FaKey);
const CFaGhost = chakra(FaGhost);

export function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const isFilled = (email !== '') && (username !== '') && (password !== '');
  const dispatch = useDispatch();

  const handleSendCode = () => {
    console.log('aaaaaaaaaa')
    if (!email.endsWith("@ed.ac.uk")) {
      setError('Please enter a valid school email address.');
      alert('Please enter a valid school email address.')
    } else {
      // Given email is school email address
      setIsCodeSent(true)
      dispatch(signUp(email, username, password));
    }
    //TODO: After clicking the button, set 3 min timer.
  }
  const handleShowClick = () => setShowPassword(!showPassword);
  const handleCheckCode = () => {
    /* TODO:
      if (generatedCode === user input code) {
        renders
        <InputRightElement>
          "Code matches" in green colour
        </InputRightElement>
      } else {
        renders
        <InputRightElement>
          "Wrong code" in red colour
        </InputRightElement>
      }
    */
  }
  const handleSignUp = async() => {
    // TODO: dispatch login action to the userSlice.
    // TODO: add user info to firebase database
  }


  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="teal.400">Sign up</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              {/* Email address area */}
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Your school email address" />
                </InputGroup>
              </FormControl>

              {/* Username input area */}
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaGhost color="gray.300" />}
                  />
                  <Input
                    type="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                  {/* 
                    (check if existing username)
                    ?  <InputRightElement>
                         "Username not available" in red colour
                       </InputRightElement>
                    :  <InputRightElement>
                         "Username available!" in green colour
                       </InputRightElement>
                  */}
                </InputGroup>
                <FormHelperText textAlign="right">
                </FormHelperText>
              </FormControl>

              {/* Password input area */}
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                </FormHelperText>
              </FormControl>

              {/* Send code button */}
              <Button
                    h="1.75rem"
                    width="full"
                    onClick={handleSendCode}
                    textAlign="center"
                    alignSelf="center"
                    isDisabled={isFilled ? false : true}
                  >
                      {isCodeSent ? "Send again" : "Send code"}
              </Button>

              {/* 'Check if code matches' area */}
              {isCodeSent
              ?
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaKey color="gray.300" />}
                  />
                  <Input 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Enter the code sent to your email" />
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleCheckCode}
                    textAlign="center"
                    ml={2}
                    alignSelf="center"
                  >
                      Check
                  </Button>
                </InputGroup>
              </FormControl>
              :
              null}

              {/* Join button */}
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={handleSignUp}
              >
                Join
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
