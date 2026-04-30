"use client"

import { useEffect, useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ProfileView } from "@/components/profile/profile-view"
import { supabase } from "@/lib/supabaseClient"

function ProfilePageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)
  const [mode, setMode] = useState<'matrimony'>('matrimony')

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        
        if (!user) {
          router.push('/auth')
          return
        }

        // Lovesathi is matrimony-only now.
        const targetUserId = searchParams.get('userId')

        if (!targetUserId) {
          // If no userId provided, show own profile
          setUserId(user.id)
        } else {
          setUserId(targetUserId)
        }

        setMode('matrimony')
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading profile:', error)
        router.push('/matrimony/discovery')
      }
    }

    loadProfile()
  }, [router, searchParams])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    )
  }

  return (
    <ProfileView 
      userId={userId || undefined} 
      mode={mode}
      isOwnProfile={!searchParams.get('userId')}
    />
  )
}

export default function ProfilePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    }>
      <ProfilePageContent />
    </Suspense>
  )
}
