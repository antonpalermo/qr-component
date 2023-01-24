import { Attribution } from './components/Attribution'
import { Card } from './components/Card'

export function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card />  
      <Attribution />
    </div>
  )
}
