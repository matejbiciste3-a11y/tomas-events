import Header from '../../components/ui/Header'
import Footer from '../../components/ui/Footer'
import { supabase } from '@/lib/supabase'

async function getUsers() {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .limit(10)
  
  if (error) return []
  return data
}

export default async function DashboardPage() {
  const users = await getUsers()
  
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Můj profil</h1>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">📊 Stav databáze</h2>
          <p className="text-gray-600">
            Počet uživatelů v databázi: <strong>{users.length}</strong>
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">👥 Seznam uživatelů</h2>
          {users.length === 0 ? (
            <p className="text-gray-500">Zatím žádní uživatelé.</p>
          ) : (
            <ul className="space-y-2">
              {users.map((user: any) => (
                <li key={user.id} className="p-3 bg-gray-50 rounded-lg">
                  <strong>{user.username}</strong> 
                  {user.premium_until && (
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Premium
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}