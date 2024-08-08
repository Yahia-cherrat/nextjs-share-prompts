'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  return (
    <nav className='w-full flex-between mb-16 pt-3'>
        <Link href='/' className='flex flex-center gab-2'>
            <Image 
                src='/assets/images/logo.svg'
                alt='Promotobia Logo'
                width={30}
                height={30}
                className='object-contain mr-2'
            />
            <p className="logo_text">Promptobia</p>
        </Link>
    </nav>
  )
}

export default Nav