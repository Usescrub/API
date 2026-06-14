const steps = [
  {
    step: 1,
    title: 'Create an account',
    detail: 'Sign up at usescrub.io and request sandbox API credentials from the dashboard.',
  },
  {
    step: 2,
    title: 'Authenticate',
    detail: 'Obtain a Bearer token via POST /accounts/login/ or use your API key in the Authorization header.',
  },
  {
    step: 3,
    title: 'Verify a customer',
    detail: 'Call POST /verify-bvn/ or POST /verify-nin/ during onboarding to confirm identity.',
  },
  {
    step: 4,
    title: 'Screen transactions',
    detail: 'Send each transfer to POST /fraud/analyze/ and act on the recommended_action field.',
  },
  {
    step: 5,
    title: 'Subscribe to webhooks',
    detail: 'Register your endpoint in the dashboard to receive fraud.alert and credit.report.ready events.',
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
