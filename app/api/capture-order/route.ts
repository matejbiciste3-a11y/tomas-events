import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    return NextResponse.json({ 
      success: true, 
      message: 'Platba zpracována' 
    })
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Chyba při zpracování platby' },
      { status: 500 }
    )
  }
}