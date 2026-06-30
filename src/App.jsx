import { useState } from 'react'
import { 
  Home, 
  Server, 
  Users, 
  Monitor, 
  Network, 
  Lock, 
  Sparkles, 
  HardDrive,
  User,
  GraduationCap,
  Building2
} from 'lucide-react'
import Inicio from './components/Inicio'
import Instalacion from './components/Instalacion'
import ActiveDirectory from './components/ActiveDirectory'
import ClienteDominio from './components/ClienteDominio'
import ServiciosRed from './components/ServiciosRed'
import Gpo from './components/Gpo'
import Prompts from './components/Prompts'

function App() {
  const [seccionActiva, setSeccionActiva] = useState('inicio')

  const secciones = [
    { id: 'inicio', nombre: 'Inicio', icono: Home },
    { id: 'instalacion', nombre: 'Instalación', icono: HardDrive },
    { id: 'activedirectory', nombre: 'Active Directory', icono: Users },
    { id: 'clientedominio', nombre: 'Cliente al Dominio', icono: Monitor },
    { id: 'serviciosred', nombre: 'Servicios de Red', icono: Network },
    { id: 'gpo', nombre: 'Políticas de Grupo', icono: Lock },
    { id: 'prompts', nombre: 'Prompts de IA', icono: Sparkles }
  ]

  const renderizarComponente = () => {
    switch (seccionActiva) {
      case 'inicio': return <Inicio />
      case 'instalacion': return <Instalacion />
      case 'activedirectory': return <ActiveDirectory />
      case 'clientedominio': return <ClienteDominio />
      case 'serviciosred': return <ServiciosRed />
      case 'gpo': return <Gpo />
      case 'prompts': return <Prompts />
      default: return <Inicio />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Superior */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-slate-900 text-white p-2 rounded-lg shadow-sm">
                <Server className="h-6 w-6" />
              </div>
              <div className="space-y-0.5">
                <h1 className="text-xl font-bold tracking-tight">Wiki — Windows Server</h1>
                <p className="text-sm text-gray-500">TI3V35 — Sistemas Operativos de Red</p>
              </div>
            </div>

            {/* Tarjeta de Perfil */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              <div className="text-right space-y-1">
                <p className="font-medium">Lucas Rebolledo</p>
                <p className="text-gray-500">Docente: Rubén Schnettler L.</p>
                <p className="text-gray-500">INACAP Valparaíso</p>
              </div>
            </div>
          </div>

          {/* Navegación de Pestañas */}
          <nav className="flex items-center gap-1 pb-4 overflow-x-auto">
            {secciones.map((seccion) => {
              const Icono = seccion.icono
              const estaActiva = seccionActiva === seccion.id
              return (
                <button
                  key={seccion.id}
                  onClick={() => setSeccionActiva(seccion.id)}
                  className={`
                    inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium
                    transition-all duration-200 whitespace-nowrap
                    ${estaActiva 
                      ? 'bg-slate-900 text-white shadow-sm' 
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}
                  `}
                >
                  <Icono className="h-4.5 w-4.5" />
                  <span>{seccion.nombre}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-6xl mx-auto px-6 md:px-8 py-10 animate-in">
        {renderizarComponente()}
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">
          <div className="text-center text-sm text-gray-500">
            <p>Proyecto Universitario — Lucas Rebolledo</p>
            <p className="mt-1">2026 — INACAP Valparaíso</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
