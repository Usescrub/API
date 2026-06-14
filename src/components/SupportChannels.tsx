const channels = [
  {
    icon: '✉️',
    title: 'Email',
    detail: 'support@usescrub.io',
    sub: 'Response within 4 business hours',
    href: 'mailto:support@usescrub.io',
  },
  {
    icon: '💬',
    title: 'Slack Connect',
    detail: 'Enterprise customers',
    sub: 'Dedicated channel with engineering support',
    href: 'https://usescrub.io/contact',
  },
  {
    icon: '📞',
    title: 'Phone',
    detail: '+234-800-SCRUB-10',
    sub: 'Mon–Fri, 9am–6pm WAT',
    href: 'tel:+2348007278210',
  },
  {
    icon: '🐛',
    title: 'Bug Reports',
    detail: 'Include request_id',
    sub: 'Every API response includes a request_id for faster triage',
    href: 'mailto:support@usescrub.io?subject=Bug%20Report',
  },
]

export default function SupportChannels() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        margin: '2rem 0',
      }}
    >
      {channels.map((c) => (
        <a
          key={c.title}
          href={c.href}
          style={{
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid hsl(var(--border))',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{c.icon}</div>
          <div style={{ fontWeight: 600 }}>{c.title}</div>
          <div style={{ fontSize: '0.9375rem', marginTop: '0.25rem' }}>{c.detail}</div>
          <div style={{ fontSize: '0.8125rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.35rem' }}>
            {c.sub}
          </div>
        </a>
      ))}
    </div>
  )
}
