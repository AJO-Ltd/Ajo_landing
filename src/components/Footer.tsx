'use client'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { useRef } from 'react'
import qrCode from '@/images/qr-code.svg'

// function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
//   return (
//     <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
//       <path
//         d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//     </svg>
//   )
// }

export function Footer() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const subscribeUser = async (e: any) => {
    e.preventDefault()

    // this is where your mailchimp request is made

    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRef.current?.value,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    })
  }

  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
              {/* <div className="ml-4">
                <p className="text-base font-semibold">Pocket</p>
                <p className="mt-1 text-sm">Invest at the perfect time.</p>
              </div> */}
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            {/* remove this qrcode */}
            <form
              onSubmit={subscribeUser}
              className="flex w-full justify-center md:w-auto"
            >
              <TextField
                type="email"
                aria-label="Email address"
                placeholder="Email address"
                autoComplete="email"
                required
                className="w-60 min-w-0 shrink"
                autoCapitalize="off"
                autoCorrect="off"
              />
              <Button
                type="submit"
                color="cyan"
                className="ml-4 flex-none bg-pink-900"
              >
                <span className="hidden lg:inline">Join our newsletter</span>
                <span className="lg:hidden">Join newsletter</span>
              </Button>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
