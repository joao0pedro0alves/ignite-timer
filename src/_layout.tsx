import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { LayoutContainer } from './styles'

export function RootLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
