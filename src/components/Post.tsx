import { Card,
         CardHeader, 
         CardBody, 
         CardFooter, 
         Flex, 
         Avatar,
         Box,
         Heading,
         Text,
         IconButton,
         Image,
         Button } from '@chakra-ui/react'
import { BsThreeDotsVertical  } from "react-icons/bs";
import { BiUpvote,BiDownvote } from "react-icons/bi";
import { RxChatBubble, RxShare2 } from "react-icons/rx";

export function Post() {
    return (
        <Card maxW='md'>
          <CardHeader>
            <Flex gap='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                <Box>
                  <Heading size='sm'>Segun Adebayo</Heading>
                  <Text>Creator, Chakra UI</Text>
                </Box>
              </Flex>
              <IconButton
                variant='ghost'
                colorScheme='gray'
                aria-label='See menu'
                icon={<BsThreeDotsVertical />}
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              With Chakra UI, I wanted to sync the speed of development with the speed
              of design. I wanted the developer to be just as excited as the designer to
              create a screen.
            </Text>
          </CardBody>
          <Image
            objectFit='cover'
            src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Chakra UI'
          />

          <CardFooter justify='space-between' display='flex'>
            <Button flex='1' variant='ghost' leftIcon={<BiUpvote />}></Button>
            <Button flex='1' variant='ghost' leftIcon={<BiDownvote />}></Button>
            <Button flex='1' variant='ghost' leftIcon={<RxChatBubble />}></Button>
            <Button flex='1' variant='ghost' leftIcon={<RxShare2 />}></Button>
          </CardFooter>
        </Card>
    )
}   