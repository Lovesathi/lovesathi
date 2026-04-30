import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
    
    // Get the current user
    const { data: { user } } = await supabase.auth.getUser()
    
    if (user) {
      // Check if email is verified (OAuth providers usually verify automatically, but check anyway)
      if (!user.email_confirmed_at) {
        console.log('Email not verified, sending to email verification')
        return NextResponse.redirect(new URL('/auth/verify-email', requestUrl.origin))
      }

      // Check user profile for onboarding status
      const { data: profile, error } = await supabase
        .from('user_profiles')
        .select('onboarding_matrimony')
        .eq('user_id', user.id)
        .single()

      if (error || !profile) {
        console.log('No profile found, sending to onboarding')
        return NextResponse.redirect(new URL('/onboarding/verification', requestUrl.origin))
      }

      if (profile.onboarding_matrimony !== true) {
        console.log('Matrimony onboarding not completed, sending to verification:', {
          onboarding_matrimony: profile.onboarding_matrimony,
        })
        return NextResponse.redirect(new URL('/onboarding/verification', requestUrl.origin))
      }

      return NextResponse.redirect(new URL('/matrimony/discovery', requestUrl.origin))
    }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(new URL('/auth/verify-email', requestUrl.origin))
}
