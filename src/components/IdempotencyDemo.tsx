import { useState } from 'react'

export default function IdempotencyDemo() {
  const [key, setKey] = useState('idem_7k2m9x1p3q')
  const [attempts, setAttempts] = useState(0)
  const [lastResponse, setLastResponse] = useState<string | null>(null)

  function simulateRequest() {
    setAttempts((n) => n + 1)
    if (attempts === 0) {
      setLastResponse('201 Created — fraud analysis recorded (req_abc123)')
    } else {
      setLastResponse(`200 OK — duplicate detected, returning cached result (key: ${key})`)
    }
  }

  function reset() {
    setAttempts(0)
    setLastResponse(null)
    setKey(`idem_${Math.random().toString(36).slice(2, 10)}`)
  }

  return (
    <div
      style={{
        margin: '2rem 0',
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid hsl(var(--border))',
        background: 'hsl(var(--card))',
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: '1rem' }}>Interactive idempotency demo</div>
      <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.35rem' }}>
        Idempotency-Key header
      </label>
      <input
        value={key}
        onChange={(e) => {
          setKey(e.target.value)
          reset()
        }}
        style={{
          width: '100%',
          padding: '0.5rem 0.75rem',
          borderRadius: '6px',
          border: '1px solid hsl(var(--border))',
          background: 'hsl(var(--background))',
          color: 'inherit',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          marginBottom: '1rem',
        }}
      />
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button
          type="button"
          onClick={simulateRequest}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: 'none',
            background: 'hsl(var(--primary))',
            color: 'hsl(var(--primary-foreground))',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          POST /fraud/analyze/ (attempt {attempts + 1})
        </button>
        <button
          type="button"
          onClick={reset}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: '1px solid hsl(var(--border))',
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
      {lastResponse && (
        <div
          style={{
            padding: '0.75rem',
            borderRadius: '6px',
            background: 'hsl(var(--muted))',
            fontFamily: 'monospace',
            fontSize: '0.8125rem',
          }}
        >
          {lastResponse}
        </div>
      )}
    </div>
  )
}
