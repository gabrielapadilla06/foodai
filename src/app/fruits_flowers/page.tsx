import { createClient } from '@supabase/supabase-js'
import { FullScreenImageDialog, Species } from '@/components/ui/full-screen-dialog'
import { NumberTicker } from "@/components/magicui/number-ticker"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import flowersImage from "@/images/nature/flores.png"

async function getSpecies() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )

  const { data } = await supabaseAdmin
    .from('Fruits')
    .select('*')
    .order('id')

  return data as Species[]
}

export default async function FruitGallery() {
  const species = await getSpecies()

  return (
    <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
      {/* Back Navigation */}
      <div className="px-4 pt-8">
        <Link 
          href="/artwork" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Artwork
        </Link>
      </div>

      <div className="px-4 py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Intro Card */}
          <div 
            className="relative col-span-2 row-span-2 rounded-lg overflow-hidden aspect-square"
            style={{
              backgroundImage: `url(${flowersImage.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/60 p-8 flex items-center justify-center">
              <div className="text-center space-y-6 max-w-md">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tighter text-white">
                    Nature Collection
                  </h2>
                  <p className="text-gray-300">
                    Explore our diverse collection of botanical illustrations, each capturing the unique beauty of nature.
                  </p>
                </div>
                
                <div className="flex justify-center space-x-12">
                  <div className="space-y-2">
                    <NumberTicker 
                      value={species?.length || 0}
                      className="text-5xl font-bold text-white"
                    />
                    <p className="text-sm text-gray-300">Species</p>
                  </div>
                  <div className="space-y-2">
                    <NumberTicker 
                      value={2024}
                      className="text-5xl font-bold text-white"
                    />
                    <p className="text-sm text-gray-300">Year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Species Grid */}
          {species?.map((item, index) => (
            <div 
              key={item.id} 
              className="aspect-square w-full"
            >
              <FullScreenImageDialog species={species} initialIndex={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}