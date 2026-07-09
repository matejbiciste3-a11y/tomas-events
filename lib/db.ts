import { supabase, supabaseAdmin } from './supabase'

export async function getUserByDiscordId(discordId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('discord_id', discordId)
    .single()
  
  if (error) return null
  return data
}

export async function createUser(discordId: string, username: string, email?: string) {
  const { data, error } = await supabaseAdmin
    .from('users')
    .insert({ discord_id: discordId, username, email })
    .select()
    .single()
  
  if (error) throw error
  return data
}

export async function getUserById(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single()
  
  if (error) return null
  return data
}

export async function updatePremiumStatus(userId: string, premiumUntil: Date) {
  const { data, error } = await supabaseAdmin
    .from('users')
    .update({ premium_until: premiumUntil.toISOString() })
    .eq('id', userId)
    .select()
    .single()
  
  if (error) throw error
  return data
}

export async function addReviveCredits(userId: string, amount: number) {
  const { data, error } = await supabaseAdmin
    .from('users')
    .update({ revive_credits: supabase.rpc('increment', { row_id: userId, amount }) })
    .eq('id', userId)
    .select()
    .single()
  
  if (error) throw error
  return data
}