import { Box, Button, HStack, IconButton, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import {MdModeEditOutline, MdDeleteOutline} from "react-icons/md"

const UpdatableTextarea = ({ value, arr, setArr, index, children, ...rest }) => {
  const [text, setText] = useState(value)
  const [typing, setTyping] = useState(false)

  const update = () => {
    const t = arr;
    t[index] = text;
    setArr([...t])
    setTyping(false)
  }

  const remove = () => {
    const t = arr;
    t.splice(index, 1)
    setArr([...t])
    setTyping(false)
  }

  return (
    <Box {...rest}>
      {typing ? (
        <>
          <Textarea
            bg="white"
            value={text}
            whiteSpace="pre-wrap"
            onChange={e => setText(e.target.value)}
            h="120px"
          />
          <Button colorScheme="blue" onClick={() => update()} mt={3} w="100%">
            Update
          </Button>
        </>
      ) : (<>
        <Box pos="relative">
          {children}
        </Box>
        <HStack spacing={3} mt={1} >
          <Button size="xs" leftIcon={<MdModeEditOutline />} onClick={() => setTyping(true)}>Update</Button>
          <Button size="xs" leftIcon={<MdDeleteOutline />} onClick={() => remove()}>Delete</Button>
        </HStack>
      </>)}
    </Box >
  )
}

export default UpdatableTextarea