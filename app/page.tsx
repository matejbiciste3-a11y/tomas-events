import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import DiscordButton from '@/components/ui/DiscordButton'
import EventCard from '@/components/ui/EventCard'
import PremiumCard from '@/components/ui/PremiumCard'

export default function Home() {
  const upcomingEvents = [
    { title: 'Siryakari Mega Event', date: '15. 7. 2026', type: 'Siryakari', players: 24 },
    { title: 'Dinous Night', date: '18. 7. 2026', type: 'Dinous', players: 18 },
    { title: 'Fanouškovský turnaj', date: '22. 7. 2026', type: 'Fansoub', players: 32 },
  ]

  return (
    <>
      <Header />
      
      <main className="flex-grow">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-secondary-light py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Tomas Events
                <span className="block text-secondary-light text-2xl md:text-3xl font-light mt-2">
                  Discord komunita plná akcí
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
                Pravidelné eventy, Minecraft prémiové služby a skvělá parta hráčů. Připoj se k nám a zažij to nejlepší z herního světa!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DiscordButton />
                <a href="/shop" className="inline-flex items-center justify-center bg-white text-primary font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Prohlédnout obchod
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Připravované eventy
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prémiové služby
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Vylepši si herní zážitek s našimi prémiovými balíčky
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PremiumCard 
                title="Premium hráč" 
                price="150 Kč" 
                period="měsíc"
                features={['Přednost při eventech', 'Exkluzivní Discord role', 'VIP přístup k akcím']}
              />
              <PremiumCard 
                title="Premium+ hráč" 
                price="400 Kč" 
                period="3 měsíce"
                features={['Vše z Premium', 'Extra kosmetika', 'Speciální herní odměny']}
                highlighted
              />
              <PremiumCard 
                title="Revive balíček" 
                price="200 Kč" 
                period="5 kreditů"
                features={['Okamžitý revive na MC', 'Prioritní vyřízení', 'Možnost převodu na kamarády']}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}