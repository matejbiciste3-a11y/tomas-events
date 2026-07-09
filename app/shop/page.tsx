import Header from '../../components/ui/Header'
import Footer from '../../components/ui/Footer'

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Obchod</h1>
        <p className="text-gray-600">Zde budou prémiové balíčky a platby.</p>
      </main>
      <Footer />
    </>
  )
}