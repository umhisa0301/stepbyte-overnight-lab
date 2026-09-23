export function App() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">STEPBYTE STUDIO / EXPERIMENT 00</p>
        <h1>Overnight Lab</h1>
        <p className="lead">
          A safe proving ground for AI agents that plan, build, test, and return useful work for human review by morning.
        </p>
        <div className="status" aria-label="factory status">
          <span className="dot" aria-hidden="true" />
          Factory bootstrap ready
        </div>
      </section>
      <section className="grid" aria-label="workflow">
        <article><strong>01</strong><h2>Plan</h2><p>Define a useful outcome and measurable acceptance criteria.</p></article>
        <article><strong>02</strong><h2>Build</h2><p>Implement inside an isolated repository without touching production.</p></article>
        <article><strong>03</strong><h2>Verify</h2><p>Test, inspect, repair, and leave evidence for morning review.</p></article>
      </section>
    </main>
  )
}
