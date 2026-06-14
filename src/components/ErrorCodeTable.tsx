const errors = [
  { code: 'INVALID_BVN', type: 'INVALID_REQUEST', http: 400, message: 'BVN must be exactly 11 digits' },
  { code: 'INVALID_NIN', type: 'INVALID_REQUEST', http: 400, message: 'NIN format or checksum invalid' },
  { code: 'CONSENT_REQUIRED', type: 'INVALID_REQUEST', http: 403, message: 'Customer consent reference missing or expired' },
  { code: 'UNAUTHORIZED', type: 'AUTHENTICATION', http: 401, message: 'Invalid or missing Bearer token' },
  { code: 'ACCOUNT_NOT_FOUND', type: 'NOT_FOUND', http: 404, message: 'Account not in Scrub network' },
  { code: 'REPORT_NOT_FOUND', type: 'NOT_FOUND', http: 404, message: 'Credit report ID invalid or expired' },
  { code: 'RATE_LIMIT_EXCEEDED', type: 'RATE_LIMIT', http: 429, message: 'Too many requests — check X-RateLimit-Reset' },
  { code: 'DUPLICATE_IDEMPOTENCY', type: 'INVALID_REQUEST', http: 409, message: 'Same key used with different payload' },
  { code: 'INSUFFICIENT_DATA', type: 'INVALID_REQUEST', http: 422, message: 'Not enough signals for fraud analysis' },
  { code: 'INTERNAL_ERROR', type: 'INTERNAL', http: 500, message: 'Unexpected server error — include request_id in support ticket' },
]

const typeColors: Record<string, string> = {
  INVALID_REQUEST: '#f97316',
  AUTHENTICATION: '#ef4444',
  NOT_FOUND: '#6b7280',
  RATE_LIMIT: '#eab308',
  INTERNAL: '#dc2626',
}

export default function ErrorCodeTable() {
  return (
    <div style={{ margin: '1.5rem 0', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid hsl(var(--border))' }}>
            <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>error_code</th>
            <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>error_type</th>
            <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>HTTP</th>
            <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>message</th>
          </tr>
        </thead>
        <tbody>
          {errors.map((e) => (
            <tr key={e.code} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
              <td style={{ padding: '0.75rem 0.5rem' }}>
                <code style={{ fontSize: '0.8125rem' }}>{e.code}</code>
              </td>
              <td style={{ padding: '0.75rem 0.5rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.15rem 0.4rem',
                    borderRadius: '4px',
                    background: typeColors[e.type] + '22',
                    color: typeColors[e.type],
                    fontWeight: 600,
                  }}
                >
                  {e.type}
                </span>
              </td>
              <td style={{ padding: '0.75rem 0.5rem' }}>{e.http}</td>
              <td style={{ padding: '0.75rem 0.5rem', color: 'hsl(var(--muted-foreground))' }}>
                {e.message}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
