import Header from '../../components/ui/Header'
import Footer from '../../components/ui/Footer'

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Seznam eventů</h1>
        <p className="text-gray-600">Zde budou všechny připravované eventy.</p>
      </main>
      <Footer />
    </>
  )
}