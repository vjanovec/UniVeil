import { Stack, Input, Textarea, Box, Flex, FormControl, Grid, GridItem, Select, Button } from '@chakra-ui/react';
import { Header } from './Header';
import { ChangeEvent, useState } from 'react';


export function CreatePost() {
  const [postTitle, setPostTitle] = useState('')
  const [postText, setPostText] = useState('')
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPostTitle(event.target.value)
  }
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value)
  }
  const isTitleEmpty = postTitle.trim() === ''

  return (
    <Grid
       templateAreas={`"header"
                       "box"`}
       gridTemplateRows={'100px 1fr'}
       h='100vh'
       gap='1'
       color='blackAlpha.700'
       fontWeight='bold'
    >
      <GridItem pl='2' area={'header'}>
        <Header />
      </GridItem>
      <GridItem area={'box'}>
        <Flex
          flexDirection="column"
          width="100vw"
          height="100vh"
          backgroundColor="gray.200"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width="50%"
            backgroundColor="white"
            p="1rem"
            boxShadow="md"
          >
            <Stack spacing={0}>
              <FormControl>
                <Input value={postTitle} placeholder="Title" mb="15px" onChange={handleTitleChange} />
                <Textarea value={postText} placeholder='Text(Optional)' height="200px" mb="15px" onChange={handleTextChange} />
              </FormControl>
              <Flex justify="space-between">
                <Select placeholder='Choose a channel' w='300px'>
                  <option value='option1'>General</option>
                  <option value='option2'>Courses</option>
                  <option value='option3'>Announcements</option>
                  <option value='option4'>Career</option>
                </Select>
                <Button colorScheme='teal' 
                  size='md' 
                  w='70px' 
                  bg={isTitleEmpty ? 'gray.400' : 'teal.500'}
                  disabled={postTitle.trim() === ''}>
                  Post
                </Button>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}