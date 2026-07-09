import Header from '../../components/ui/Header'
import Footer from '../../components/ui/Footer'

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Můj profil</h1>
        <p className="text-gray-600">Zde bude uživatelský dashboard.</p>
      </main>
      <Footer />
    </>
  )
}