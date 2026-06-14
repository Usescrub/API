const events = [
  { event: 'fraud.alert', trigger: 'High-risk transaction detected', color: '#ef4444' },
  { event: 'fraud.score.updated', trigger: 'Account fraud score changes', color: '#f97316' },
  { event: 'credit.report.ready', trigger: 'Async credit report generation completes', color: '#22c55e' },
  { event: 'verification.completed', trigger: 'BVN/NIN verification finishes', color: '#3b82f6' },
]

export default function WebhookFlow() {
  return (
    <div style={{ margin: '2rem 0' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem',
          fontSize: '0.875rem',
        }}
      >
        <span
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            background: 'hsl(var(--muted))',
            fontWeight: 600,
          }}
        >
          Scrub API
        </span>
        <span style={{ color: 'hsl(var(--muted-foreground))' }}>→ POST webhook →</span>
        <span
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            border: '1px solid hsl(var(--border))',
            fontWeight: 600,
          }}
        >
          Your Server
        </span>
        <span style={{ color: 'hsl(var(--muted-foreground))' }}>→ 200 OK within 5s</span>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid hsl(var(--border))' }}>
            <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>Event</th>
            <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>Triggered when</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e) => (
            <tr key={e.event} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
              <td style={{ padding: '0.75rem 0.5rem' }}>
                <code
                  style={{
                    background: 'hsl(var(--muted))',
                    padding: '0.15rem 0.4rem',
                    borderRadius: '4px',
                    borderLeft: `3px solid ${e.color}`,
                  }}
                >
                  {e.event}
                </code>
              </td>
              <td style={{ padding: '0.75rem 0.5rem', color: 'hsl(var(--muted-foreground))' }}>
                {e.trigger}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
