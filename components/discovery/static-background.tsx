"use client"

export function StaticBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0B0C0F 0%, #14161B 45%, #0E0F12 100%)',
          backgroundAttachment: 'fixed',
        }}
      />
    </div>
  )
}

