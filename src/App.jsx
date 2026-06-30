import { useState } from 'react'
import { Server, BookOpen, Home, Settings, Network, Users, Monitor, Shield, HardDrive } from 'lucide-react'

// Importar componentes
import Inicio from './components/Inicio'
import Instalacion from './components/Instalacion'
import ActiveDirectory from './components/ActiveDirectory'
import ClienteDominio from './components/ClienteDominio'
import ServiciosRed from './components/ServiciosRed'
import Gpo from './components/Gpo'
import Prompts from './components/Prompts'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  const sections = [
    { id: 'inicio', name: 'Inicio', icon: Home, component: Inicio },
    { id: 'instalacion', name: 'Instalación', icon: Settings, component: Instalacion },
    { id: 'active-directory', name: 'Active Directory', icon: Network, component: ActiveDirectory },
    { id: 'cliente-dominio', name: 'Cliente Dominio', icon: Monitor, component: ClienteDominio },
    { id: 'servicios-red', name: 'Servicios Red', icon: HardDrive, component: ServiciosRed },
    { id: 'gpo', name: 'GPO', icon: Shield, component: Gpo },
    { id: 'prompts', name: 'Prompts IA', icon: BookOpen, component: Prompts },
  ]

  const ActiveComponent = sections.find(section => section.id === activeSection)?.component || Inicio

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <header className="bg-gray-900 text-white" style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
        <div className="container">
          <div className="flex items-center justify-between" style={{ height: '64px' }}>
            <div className="flex items-center space-x-4">
              <Server style={{ height: '32px', width: '32px' }} />
              <div>
                <h1 className="text-xl font-bold">Wiki — Windows Server</h1>
                <p style={{ fontSize: '14px', color: '#93c5fd' }}>TI3V35 — Sistemas Operativos</p>
              </div>
            </div>
            <div style={{ fontSize: '14px', color: '#93c5fd' }}>
              Estudiante: [Tu Nombre] | Docente: Rubén Schnettler L.
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border" style={{ borderBottom: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
        <div className="container">
          <div className="flex space-x-4" style={{ overflowX: 'auto' }}>
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 12px',
                    fontSize: '14px',
                    fontWeight: '500',
                    borderBottom: activeSection === section.id ? '2px solid #3182ce' : '2px solid transparent',
                    whiteSpace: 'nowrap',
                    backgroundColor: activeSection === section.id ? '#dbeafe' : 'transparent',
                    color: activeSection === section.id ? '#1e40af' : '#6b7280'
                  }}
                >
                  <Icon style={{ height: '16px', width: '16px' }} />
                  <span>{section.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-6">
        <ActiveComponent />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container py-4">
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '14px' }}>
              © 2026 INACAP Valparaíso | Unidad 2: Windows Server | Evaluación Práctica
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
