import { Server, Network, Target } from 'lucide-react'

function Inicio() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <Server className="h-16 w-16 mx-auto text-blue-600 mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Wiki Windows Server - Unidad 2
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Guía paso a paso del laboratorio de Windows Server
        </p>
        <div className="bg-blue-50 rounded-lg p-4 inline-block">
          <p className="text-sm text-blue-800">
            <strong>Curso:</strong> TI3V35 — Sistemas Operativos
          </p>
          <p className="text-sm text-blue-800">
            <strong>Docente:</strong> Rubén Schnettler L.
          </p>
          <p className="text-sm text-blue-800">
            <strong>Institución:</strong> INACAP Valparaíso
          </p>
        </div>
      </div>

      {/* Objetivo */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Target className="h-6 w-6 text-green-600 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Objetivo del Laboratorio</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Este laboratorio cubre la implementación completa de Windows Server con Active Directory, 
          configuración de servicios de red (DNS y DHCP) y políticas de grupo. Se desarrolla un 
          entorno empresarial completo desde la instalación básica hasta la administración avanzada.
        </p>
      </div>

      {/* Topología */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Network className="h-6 w-6 text-purple-600 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Topología de Red</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Servidor (SRV-DC01)</h3>
            <ul className="space-y-1 text-sm text-blue-800">
              <li><strong>IP:</strong> 192.168.10.10/24</li>
              <li><strong>Rol:</strong> Controlador de Dominio</li>
              <li><strong>Servicios:</strong> AD DS, DNS, DHCP</li>
              <li><strong>Dominio:</strong> empresa.local</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 mb-2">Cliente (WIN10-CLIENT)</h3>
            <ul className="space-y-1 text-sm text-green-800">
              <li><strong>IP:</strong> 192.168.10.20/24</li>
              <li><strong>SO:</strong> Windows 10</li>
              <li><strong>Estado:</strong> Unido al dominio</li>
              <li><strong>DNS:</strong> 192.168.10.10</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2">Configuración de Red</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong className="text-gray-700">Gateway:</strong>
              <span className="text-gray-600 ml-1">192.168.10.1</span>
            </div>
            <div>
              <strong className="text-gray-700">Máscara:</strong>
              <span className="text-gray-600 ml-1">255.255.255.0</span>
            </div>
            <div>
              <strong className="text-gray-700">Rango DHCP:</strong>
              <span className="text-gray-600 ml-1">192.168.10.50-100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Criterios */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Criterios a Desarrollar</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900">2.1.1 — Instalación y Configuración</h3>
              <p className="text-sm text-gray-600">Instalación básica del servidor y configuración de red</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900">2.1.2 — Active Directory</h3>
              <p className="text-sm text-gray-600">Dominio, OUs, usuarios y grupos de seguridad</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-900">2.1.3 — Cliente en Dominio</h3>
              <p className="text-sm text-gray-600">Unión del cliente al dominio empresarial</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900">2.1.4 — Servicios de Red</h3>
              <p className="text-sm text-gray-600">Configuración de DNS y DHCP</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-gray-900">2.1.5 — Políticas de Grupo</h3>
              <p className="text-sm text-gray-600">GPOs para seguridad y configuración</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-semibold text-gray-900">Bitácora de Prompts</h3>
              <p className="text-sm text-gray-600">Registro del trabajo con IA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Instrucciones */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-yellow-900 mb-3">Instrucciones de Navegación</h2>
        <p className="text-yellow-800 mb-3">
          Utiliza el menú superior para navegar entre las diferentes secciones del laboratorio. 
          Cada criterio incluye capturas de pantalla y explicaciones detalladas del proceso realizado.
        </p>
        <p className="text-sm text-yellow-700">
          <strong>Nota:</strong> Este es un trabajo práctico donde cada paso ha sido ejecutado y documentado 
          con capturas propias y explicaciones en palabras del estudiante.
        </p>
      </div>
    </div>
  )
}

export default Inicio