export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tomas Events
            </span>
            <p className="text-gray-400 text-sm mt-1">© 2026 Všechna práva vyhrazena</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://discord.gg/vEmSDQg5GQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Discord
            </a>
            <a href="/shop" className="text-gray-400 hover:text-white transition-colors">
              Obchod
            </a>
            <a href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
              Profil
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}