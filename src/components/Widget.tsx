import { Popover } from '@headlessui/react'
import { ChatTeardropDots } from 'phosphor-react';

export function Widget() {
  return (
    <Popover className='absolute bottom-10 right-10'>
      <Popover.Panel>Hello nlw</Popover.Panel>

      <Popover.Button 
        className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'
      >
        <ChatTeardropDots className='w-6 h-6' />

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out'>
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}