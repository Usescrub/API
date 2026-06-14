const cards = [
  {
    icon: '🔐',
    title: 'Verify Identity',
    description: 'Validate BVN and NIN during onboarding with NIBSS and NIMC-backed checks.',
    href: '/api/verification',
  },
  {
    icon: '🛡️',
    title: 'Detect Fraud',
    description: 'Score transactions in real time using velocity, device, and network graph signals.',
    href: '/api/fraud',
  },
  {
    icon: '📊',
    title: 'Credit Reporting',
    description: 'Pull credit scores and full bureau reports from CRC and FirstCentral.',
    href: '/api/credit',
  },
  {
    icon: '🔔',
    title: 'Webhooks',
    description: 'Receive async alerts for fraud events, credit report readiness, and score changes.',
    href: '/docs/webhooks',
  },
]

export default function FeatureCards() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1rem',
        margin: '2rem 0',
      }}
    >
      {cards.map((card) => (
        <a
          key={card.title}
          href={card.href}
          style={{
            display: 'block',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid hsl(var(--border))',
            background: 'hsl(var(--card))',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
        >
          <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{card.icon}</div>
          <div style={{ fontWeight: 600, marginBottom: '0.35rem' }}>{card.title}</div>
          <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.5 }}>
            {card.description}
          </div>
        </a>
      ))}
    </div>
  )
}
