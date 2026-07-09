interface PremiumCardProps {
  title: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
}

export default function PremiumCard({ title, price, period, features, highlighted = false }: PremiumCardProps) {
  return (
    <div className={`card text-center ${highlighted ? 'border-2 border-primary shadow-xl transform scale-105' : ''}`}>
      {highlighted && (
        <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
          Nejoblíbenější
        </span>
      )}
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-extrabold">{price}</span>
        <span className="text-gray-500 text-sm ml-1">/{period}</span>
      </div>
      
      <ul className="text-left space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <a href="/shop" className="btn-primary inline-block w-full text-center">
        Vybrat balíček
      </a>
    </div>
  )
}