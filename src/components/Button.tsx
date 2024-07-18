import React from 'react'
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { Loader2 } from "lucide-react"
import Link from "next/link"
function Butto() {
  return (
    <div>
    <div>
    <Button>Click me</Button>
    </div>
    <div className='m-10'>
    <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
    </div>
    <div>
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
    </div>
    <div className='m-10'>
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>

    </div>
    </div>
  
  )
}

export default Butto