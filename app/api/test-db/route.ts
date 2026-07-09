import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .limit(5)
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    
    return NextResponse.json({ 
      success: true,
      users: data,
      message: 'Databáze funguje správně!'
    })
  } catch (error) {
    return NextResponse.json({ 
      error: 'Chyba připojení k databázi' 
    }, { status: 500 })
  }
}