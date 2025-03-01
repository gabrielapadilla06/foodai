import { DiscordLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

import aguacate from "@/images/nature/tucan.png"


export function SiteFooter() {
   return (
      <footer>
         <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
            <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
               <div className="mb-12 flex flex-col gap-4">
                  <Link href="/" className="flex items-center gap-2">
                     <img
                        src= {aguacate.src}
                        className="text-primary size-8"
                     />
                     <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                       G 
                     </span>
                  </Link>
                  <p className="max-w-xs">...........</p>
               </div>
               
            </div>
         </div>
      </footer>
   )
}
