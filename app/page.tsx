import Image from 'next/image'
import ChatComponent from '@/components/chatComponent'

export default function Home() {

  // ChatComponent ? Why make a new component?
  // ChatComponent -> client, text inputs -> onChange -> we need to make a client side component

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className = "mb-8">
      <a href="https://www.theya.us/" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/assets/images/theyaLogo.png"
            width={50}
            height={50}
            alt="TheyaLogo"
          />
        </a>
      </div>
       
      <div className="bg-slate-800 p-3 w-[800px] h-full rounded-md text-white">
    
        <h2 className="text-2xl text-theyaLogoOrange">Theya Bitcoin Expert</h2>
        <ChatComponent />
      </div>
    </main>
  )
}
