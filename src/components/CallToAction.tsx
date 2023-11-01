import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'
import { TextField } from './Fields'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Join Our Exclusive Waitlist
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Be the first to experience the future of student entrepreneurship. Reserve your spot today!
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-96 h-7 px-40 justify-center items-start gap-3 inline-flex">

              <div className="">
                <TextField
                  type="email"
                  aria-label="Email address"
                  placeholder="Email address"
                  autoComplete="email"
                  required
                  className="w-60 min-w-0 shrink"
                />
              </div>

              <div className="">
                  <Button className="py-3 bg-orange-500 whitespace-nowrap text-center text-white text-sm font-medium font-['League Spartan'] leading-tight" href='#'>Join the waitlist!</Button>
              </div>
            </div>

            {/* <div className="w-64 h-7 pl-5 pr-4 py-3 bg-neutral-50 rounded-md border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 h-6 justify-start items-center gap-28 flex">
                <div className="text-gray-400 text-base font-normal font-['League Spartan'] leading-normal">email@example.com</div>
              </div>
            </div> */}

            {/* <AppStoreLink color="white" /> */}
          </div>
        </div>
      </Container>
    </section>
  )
}
