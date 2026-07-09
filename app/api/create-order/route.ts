import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    return NextResponse.json({ 
      orderId: 'test-' + Date.now(),
      status: 'created'
    })
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Chyba při vytváření objednávky' },
      { status: 500 }
    )
  }
}