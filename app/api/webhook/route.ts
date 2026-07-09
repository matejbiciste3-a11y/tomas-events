import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    return NextResponse.json({ 
      received: true 
    })
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Chyba při zpracování webhooku' },
      { status: 500 }
    )
  }
}