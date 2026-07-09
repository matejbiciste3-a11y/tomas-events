import Link from 'next/link'
import DiscordButton from './DiscordButton'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tomas Events
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">Domů</Link>
            <Link href="/events" className="text-gray-700 hover:text-primary font-medium transition-colors">Eventy</Link>
            <Link href="/shop" className="text-gray-700 hover:text-primary font-medium transition-colors">Obchod</Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-primary font-medium transition-colors">Profil</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <DiscordButton />
          </div>
        </div>
      </div>
    </header>
  )
}