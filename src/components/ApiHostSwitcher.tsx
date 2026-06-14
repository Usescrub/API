import { useState } from 'react'

const hosts = [
  { env: 'Production', url: 'https://odoopi.usescrub.io/v1' },
  { env: 'Sandbox', url: 'https://sandbox.usescrub.io/v1' },
]

export default function ApiHostSwitcher() {
  const [active, setActive] = useState(0)

  return (
    <div
      style={{
        margin: '1.5rem 0',
        borderRadius: '12px',
        border: '1px solid hsl(var(--border))',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', borderBottom: '1px solid hsl(var(--border))' }}>
        {hosts.map((h, i) => (
          <button
            key={h.env}
            type="button"
            onClick={() => setActive(i)}
            style={{
              flex: 1,
              padding: '0.75rem',
              border: 'none',
              background: active === i ? 'hsl(var(--muted))' : 'transparent',
              fontWeight: active === i ? 600 : 400,
              cursor: 'pointer',
              color: 'inherit',
            }}
          >
            {h.env}
          </button>
        ))}
      </div>
      <div
        style={{
          padding: '1rem 1.25rem',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          background: 'hsl(var(--card))',
        }}
      >
        {hosts[active].url}
      </div>
    </div>
  )
}
