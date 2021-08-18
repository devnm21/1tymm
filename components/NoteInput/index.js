import { Textarea } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
const NoteInput = () => {
	return <>
		<Textarea placeholder={'Enter your note here..'} height={300} />
		<Button backgroundColor={'purple'} color={'white'} padding={'20px'} marginTop={'10px'} _hover={{ backgroundColor: 'blue' }} >Create</Button>
	</>
}

export default NoteInput;