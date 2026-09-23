import { describe, expect, it } from 'vitest'
import { JSDOM } from 'jsdom'

describe('Overnight Lab starter', () => {
  it('provides a DOM environment for Phase 00 tests', () => {
    const dom = new JSDOM('<main><h1>Overnight Lab</h1></main>')
    expect(dom.window.document.querySelector('h1')?.textContent).toBe('Overnight Lab')
  })
})
