"use client"

import { AnimatePresence, motion } from "framer-motion"
import { AlignJustify, XIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useUser, UserButton } from "@clerk/nextjs"
import logoImage from "@/images/image.jpeg"

const menuItems = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "https://nonchalant-lightyear-73c.notion.site/Sustainabite-Transforming-Agricultural-By-Products-into-Value-Added-Food-Ingredients-1a9c2377d1b0805a83c3daca13a29e11" },
]

export function SiteHeader() {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false)
  const { isSignedIn } = useUser()

  useEffect(() => {
    const html = document.querySelector("html")
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen)
  }, [hamburgerMenuIsOpen])

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false)
    window.addEventListener("orientationchange", closeHamburgerNavigation)
    window.addEventListener("resize", closeHamburgerNavigation)

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation)
      window.removeEventListener("resize", closeHamburgerNavigation)
    }
  }, [])

  return (
    <>
      <header className="fixed left-0 top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="p-1 px-8">
            <div className="flex h-16 items-center justify-between">
              <Link className="text-md flex items-center gap-3" href="/">
                <Image src={logoImage.src} alt="Logo" width={40} height={40} />
                <span className="text-xl font-bold text-dark_green">Sustainabite</span>
              </Link>

              <nav className="hidden md:block">
                <ul className="flex items-center space-x-6">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <Link href={item.href} className="text-sm text-gray-500 hover:text-gray-500/75 transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                {isSignedIn && (
                  <Link
                    href="/menu"
                    className="hidden rounded-md border-2 border-dark_green bg-gray-100 px-5 py-2.5 text-sm font-medium text-dark_green transition hover:bg-dark_green hover:text-white sm:block mr-4"
                  >
                    Menu
                  </Link>
                )}

                {isSignedIn ? (
                  <UserButton afterSignOutUrl="/" />
                ) : (
                  <>
                    <Link
                      href="/sign-in"
                      className="block rounded-md bg-light_green px-5 py-2.5 text-sm font-medium text-white transition hover:bg-dark_green"
                    >
                      Get Started
                    </Link>
                    <Link
                      href="https://www.youtube.com/watch?v=O9wMI2U_OBM"
                      className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-dark_green transition hover:text-dark_green/75 sm:block"
                    >
                      Demo
                    </Link>
                  </>
                )}

                <button className="md:hidden" onClick={() => setHamburgerMenuIsOpen((open) => !open)}>
                  <span className="sr-only">Toggle menu</span>
                  {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Add a spacer div to prevent content from being hidden under the header */}
      <div className="h-16" />

      <AnimatePresence>
        {hamburgerMenuIsOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 mt-16 bg-background/80 backdrop-blur-md"
          >
            <ul className="container mt-4 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: item.id * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block py-2 text-lg text-gray-500 hover:text-gray-500/75 transition-colors"
                    onClick={() => setHamburgerMenuIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              {!isSignedIn && (
                <>
                  <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="/sign-in"
                      className="block py-2 text-lg text-light_green hover:text-dark_green transition-colors"
                      onClick={() => setHamburgerMenuIsOpen(false)}
                    >
                      Get Started
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      href="/sign-up"
                      className="block py-2 text-lg text-dark_green hover:text-dark_green/75 transition-colors"
                      onClick={() => setHamburgerMenuIsOpen(false)}
                    >
                      Register
                    </Link>
                  </motion.li>
                </>
              )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

