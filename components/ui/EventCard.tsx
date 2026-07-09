interface EventCardProps {
  title: string
  date: string
  type: string
  players: number
}

export default function EventCard({ title, date, type, players }: EventCardProps) {
  const typeColors = {
    Siryakari: 'bg-purple-100 text-purple-800',
    Dinous: 'bg-blue-100 text-blue-800',
    Fansoub: 'bg-pink-100 text-pink-800',
  }

  return (
    <div className="card hover:translate-y-[-4px] transition-transform duration-300">
      <div className="flex justify-between items-start mb-3">
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${typeColors[type as keyof typeof typeColors] || 'bg-gray-100 text-gray-800'}`}>
          {type}
        </span>
        <span className="text-sm text-gray-500">👥 {players}</span>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <div className="flex items-center gap-2 text-gray-600">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{date}</span>
      </div>
    </div>
  )
}