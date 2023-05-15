import { Stack, Input } from '@chakra-ui/react'

export function CreatePost() {
    return (
        <Stack spacing={3}>
          <Input placeholder='extra small size' size='xs' />
          <Input placeholder='small size' size='sm' />
          <Input placeholder='medium size' size='md' />
          <Input placeholder='large size' size='lg' />
        </Stack>
    )
}