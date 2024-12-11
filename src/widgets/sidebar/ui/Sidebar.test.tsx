import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { withTranslation } from 'react-i18next'
import { renderWithTranslation } from 'shared/lib/tests/render-with-translation'
describe('Sidebar', () => {
  const SidebarWithTranslation = withTranslation()(Sidebar)

  test('Test render', () => {
    renderWithTranslation(<SidebarWithTranslation />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test toggle', () => {
    renderWithTranslation(<SidebarWithTranslation />)

    const toggleBtn = screen.getByTestId('sidebar-toggle')

    fireEvent.click(toggleBtn)

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
