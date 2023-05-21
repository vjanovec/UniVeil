import { Card,
         CardHeader, 
         CardBody, 
         CardFooter, 
         Flex, 
         Box,
         Heading,
         Text,
         IconButton,
         Image,
         Button } from '@chakra-ui/react'
import { BsThreeDotsVertical  } from "react-icons/bs";
import { BiUpvote,BiDownvote } from "react-icons/bi";
import { RxChatBubble, RxShare2 } from "react-icons/rx";
interface PostProps {
  title: string;
  text: string;
}

export function Post({title, text}: PostProps) {
    return (
        <Card maxW='md'>
          <CardHeader>
            <Flex gap='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Box>
                  <Heading size='lg'>{title}</Heading>
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
              {text}
            </Text>
          </CardBody>
          {/* TODO: Upload image from device feature */}
          <CardFooter justify='space-between' display='flex'>
            <Button flex='1' variant='ghost' leftIcon={<BiUpvote />}></Button>
            <Button flex='1' variant='ghost' leftIcon={<BiDownvote />}></Button>
            <Button flex='1' variant='ghost' leftIcon={<RxChatBubble />}></Button>
            <Button flex='1' variant='ghost' leftIcon={<RxShare2 />}></Button>
          </CardFooter>
        </Card>
    )
}