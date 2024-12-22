'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'

export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className='text-gray-700 dark:text-gray-200 dark:bg-gray-800
        min-h-screen selection:none transition-colors duration-500'>
            {children}
        </div>
    </ThemeProvider>
  )
}
