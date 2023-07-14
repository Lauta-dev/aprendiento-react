import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Router } from '../Router'
import { Page404 } from '../component/Page404'
import { getCurrentPath } from '../utils'

vi.mock('../utils.js', () => {
  return { getCurrentPath: vi.fn() }
})


describe('router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should work', () => {
    render(<Router router={[]} />)
    expect(true).toBeTruthy()
  })

  it('pagina 404', () => {
    render(<Router render={[]} defaultComponent={Page404} />)
    expect(screen.getByText('Page 404')).toBeTruthy
  })

  it('should render the component of the first route that matches', () => {

    const routers = [
      {
        path: '/about',
        Component: () => <h1>About</h1>
      },
      {
        path: '/home',
        Component: () => <h1>Home</h1>
      }
    ]

    render(<Router router={routers} />)
    expect(screen.getByText('Home')).toBeTruthy()
  })
})
