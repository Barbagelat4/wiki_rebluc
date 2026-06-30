
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
    <div className="min-h-screen bg-slate-50">
      {/* Header Superior */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl shadow-md">
                <Server className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Wiki — Proyecto Windows Server</h1>
                <p className="text-slate-500 text-sm md:text-base mt-1">TI3V35 — Sistemas Operativos de Red</p>
              </div>
            </div>
            {/* Tarjeta de Perfil */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="text-right">
                <div className="flex items-center justify-end space-x-2 mb-1">
                  <User className="h-4 w-4 text-blue-600" />
                  <span className="font-semibold text-slate-900">Lucas Rebolledo</span>
                </div>
                <div className="flex items-center justify-end space-x-2 mb-1">
                  <GraduationCap className="h-4 w-4 text-emerald-600" />
                  <span className="text-slate-500">Rubén Schnettler L.</span>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <Building2 className="h-4 w-4 text-purple-600" />
                  <span className="text-slate-500">INACAP Valparaíso</span>
                </div>
              </div>
            </div>
          </div>
          {/* Navegación Tabs */}
          <div className="flex space-x-1 overflow-x-auto pb-4 pt-2">
            {secciones.map((seccion) => {
              const Icono = seccion.icono
              const estaActiva = seccionActiva === seccion.id
              return (
                <button
                key={seccion.id}
                onClick={() => setSeccionActiva(seccion.id)}
                className={`
                  flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-semibold
                  transition-all duration-200
                  border border-transparent whitespace-nowrap
                  ${estaActiva 
                    ? 'bg-slate-900 text-white shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'}
                `}
              >
                <Icono className="h-4.5 w-4.5" />
                <span>{seccion.nombre}</span>
              </button>
              )
            })}
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-10 animate-fadeInUp">
        {renderizarComponente()}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">
          <div className="text-center">
            <p className="text-sm text-slate-500 font-medium">Proyecto Universitario — Lucas Rebolledo</p>
            <p className="text-xs text-slate-400 mt-1">2026 — INACAP Valparaíso</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
