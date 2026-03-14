import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, info: null }
  }

  componentDidCatch(error, info) {
    // Save error so we can render it to the page for debugging
    this.setState({ error, info })
    // Also log to console so it appears in Vite overlay/terminal if connected
    // eslint-disable-next-line no-console
    console.error(error, info)
  }

  render() {
    const { error, info } = this.state
    if (error) {
      return (
        <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
          <h1 style={{ color: 'crimson' }}>An error occurred rendering the app</h1>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#111', color: '#fff', padding: 12, borderRadius: 6 }}>
            {String(error && error.toString())}
            {info?.componentStack}
          </pre>
          <p>
            Copy the error above and paste it here so I can fix it, or run the app with devtools open to see the stack trace.
          </p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
