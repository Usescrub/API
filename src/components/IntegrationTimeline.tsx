const steps = [
  {
    step: 1,
    title: 'Create an account',
    detail:
      'Sign up at detect.usescrub.io and verify your email to activate your organisation account.',
  },
  {
    step: 2,
    title: 'Authenticate',
    detail:
      'Log in for a dashboard session, or create an API key in Token Management for server-to-server calls.',
  },
  {
    step: 3,
    title: 'Configure webhooks',
    detail:
      'In Settings → Controls, set your webhook URL and signing secret to receive report.ready and report.failed events.',
  },
  {
    step: 4,
    title: 'Detect documents',
    detail:
      'Call POST /api/v1/detect/file with Bearer auth to screen uploaded images for AI / manipulation signals.',
  },
  {
    step: 5,
    title: 'Run financial reports',
    detail:
      'Call POST /api/v1/report, embed link_url on your frontend for bank connection, then receive the scored report via webhook or poll.',
  },
]

export default function IntegrationTimeline() {
  return (
    <div style={{ margin: '2rem 0', position: 'relative' }}>
      {steps.map((s, i) => (
        <div
          key={s.step}
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: i < steps.length - 1 ? '1.5rem' : 0,
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: 'hsl(var(--primary))',
              color: 'hsl(var(--primary-foreground))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.875rem',
              flexShrink: 0,
            }}
          >
            {s.step}
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{s.title}</div>
            <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>
              {s.detail}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
