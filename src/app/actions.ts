'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const cookieStore = await cookies()
  cookieStore.set('auth', 'true', { path: '/' })
  redirect('/')
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('auth')
  redirect('/login')
}
