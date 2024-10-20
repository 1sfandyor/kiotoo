import {v4 as uuidv4} from 'uuid';

export const contact = [
  {
    id: uuidv4(),
    icon: './icons/location.svg',
    info: 'Ave Street 177, New York, USA'
  },
  {
    id: uuidv4(),
    icon: './icons/phone.svg',
    info: '+44 077 155 09 09'
  },
  {
    id: uuidv4(),
    icon: './icons/email.svg',
    info: 'james@example.com'
  },
  {
    id: uuidv4(),
    icon: './icons/chat.svg',
    socials: [
      '',
      '',
      '',
      '',
    ]
  },
  
]