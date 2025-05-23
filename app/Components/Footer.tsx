import React from 'react'
import Link from 'next/link'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedinIcon 
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#306188] text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-1">
            <h3 className="font-semibold text-lg">JOBIPO</h3>
            <div className="flex flex-col justify-center leading-none mb-6">
              <span className="text-[12px] text-white tracking-tight">Powered by Adshrtech Media Private Limited.</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Connecting talents with opportunities, simplifying recruitment processes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/aboutus" className="text-sm hover:text-primary-foreground/80">About Us</Link></li>
              <li><Link href="/findJobs" className="text-sm hover:text-primary-foreground/80">Find Jobs</Link></li>
              <li><Link href="/candidates" className="text-sm hover:text-primary-foreground/80">Candidates</Link></li>
              <li><Link href="/employers" className="text-sm hover:text-primary-foreground/80">Employers</Link></li>
              <li><Link href="/career" className="text-sm hover:text-primary-foreground/80">Career</Link></li>
              <li><Link href="/gallery" className="text-sm hover:text-primary-foreground/80">Our Gallery</Link></li>
              <li><Link href="/news" className="text-sm hover:text-primary-foreground/80">News & Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-sm hover:text-primary-foreground/80">Help Center</Link></li>
              <li><Link href="/privacyPolicy" className="text-sm hover:text-primary-foreground/80">Privacy Policy</Link></li>
              <li><Link href="/termServices" className="text-sm hover:text-primary-foreground/80">Terms of Service</Link></li>
              <li><Link href="/refundPolicy" className="text-sm hover:text-primary-foreground/80">Refund Policy</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-primary-foreground/80">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary-foreground/80">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <FacebookIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <TwitterIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <InstagramIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <LinkedinIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="text-center text-sm text-primary-foreground/80">
          <p>&copy; {currentYear} JOBIPO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
