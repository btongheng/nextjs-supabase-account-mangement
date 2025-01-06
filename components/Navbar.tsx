"use client"
import React from 'react'
import { ThemeToggle } from './ModeToggle'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Navbar() {

  return (
    <div className='border-b'>
      <nav className='flex justify-between items-center md:p-4 p-2 max-w-[1280px] mx-auto'>
        <Link className='text-xl font-bold' href='/'>
          capyBARA
        </Link>
        <div className='flex gap-4'>
          <Button asChild size='sm'>
            <Link href='/login'>Login</Link>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}

