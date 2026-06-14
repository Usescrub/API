type Props = {
  score?: number
  label?: string
}

function level(score: number) {
  if (score < 30) return { label: 'Low', color: '#22c55e' }
  if (score < 60) return { label: 'Medium', color: '#eab308' }
  if (score < 80) return { label: 'High', color: '#f97316' }
  return { label: 'Critical', color: '#ef4444' }
}

export default function RiskMeter({ score = 45, label = 'Sample fraud risk score' }: Props) {
  const { label: riskLabel, color } = level(score)

  return (
    <div
      style={{
        margin: '2rem 0',
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid hsl(var(--border))',
        maxWidth: '360px',
      }}
    >
      <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', marginBottom: '0.5rem' }}>
        {label}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <span style={{ fontSize: '2.5rem', fontWeight: 700 }}>{score}</span>
        <span style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>/ 100</span>
        <span
          style={{
            marginLeft: 'auto',
            padding: '0.2rem 0.6rem',
            borderRadius: '999px',
            background: color + '22',
            color,
            fontWeight: 600,
            fontSize: '0.8125rem',
          }}
        >
          {riskLabel}
        </span>
      </div>
      <div
        style={{
          height: '8px',
          borderRadius: '4px',
          background: 'hsl(var(--muted))',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${score}%`,
            height: '100%',
            borderRadius: '4px',
            background: `linear-gradient(90deg, #22c55e, ${color})`,
            transition: 'width 0.4s ease',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: 'hsl(var(--muted-foreground))',
          marginTop: '0.35rem',
        }}
      >
        <span>Safe</span>
        <span>Critical</span>
      </div>
    </div>
  )
}
