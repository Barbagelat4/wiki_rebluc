import { Server, Network, Target, CheckCircle2, Info, Zap } from 'lucide-react'

function Inicio() {
  return (
    <div className="space-y-8">
      {/* Header de Sección */}
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight">Wiki Windows Server</h1>
        <p className="text-gray-500 mt-2 text-lg">Laboratorio Unidad 2 — Guía Completa Paso a Paso</p>
      </div>

      {/* Tarjetas de Info y Objetivo */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600" />
            Objetivo del Laboratorio
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Este laboratorio cubre la implementación completa de Windows Server con Active Directory, 
            configuración de servicios de red (DNS y DHCP) y políticas de grupo. Se desarrolla un 
            entorno empresarial completo desde la instalación básica hasta la administración avanzada.
          </p>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-600" />
            Información del Proyecto
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm font-medium text-gray-500">Estudiante</span>
              <span className="font-semibold">Lucas Rebolledo</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm font-medium text-gray-500">Docente</span>
              <span className="font-semibold">Rubén Schnettler L.</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-medium text-gray-500">Institución</span>
              <span className="font-semibold">INACAP Valparaíso</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjeta de Topología */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Network className="h-5 w-5 text-purple-600" />
          Topología de Red
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Servidor */}
          <div className="border rounded-lg p-5 bg-gray-50">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <div className="bg-blue-600 text-white p-2 rounded-md">
                <Server className="h-5 w-5" />
              </div>
              Servidor: SRV-DC01
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span><strong>IP:</strong> 192.168.10.10/24</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span><strong>Rol:</strong> Controlador de Dominio</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span><strong>Servicios:</strong> AD DS, DNS, DHCP</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span><strong>Dominio:</strong> rebolledo.local</span>
              </li>
            </ul>
          </div>

          {/* Cliente */}
          <div className="border rounded-lg p-5 bg-gray-50">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <div className="bg-green-600 text-white p-2 rounded-md">
                <Server className="h-5 w-5" />
              </div>
              Cliente: WIN10-CLIENT
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span><strong>IP:</strong> 192.168.10.20/24</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span><strong>SO:</strong> Windows 10</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span><strong>Estado:</strong> Unido al Dominio</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span><strong>DNS:</strong> 192.168.10.10</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Configuración General */}
        <div className="border rounded-lg p-5 bg-gray-50">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Network className="h-5 w-5 text-gray-500" />
            Configuración General de Red
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Gateway', value: '192.168.10.1' },
              { label: 'Máscara', value: '255.255.255.0' },
              { label: 'Rango DHCP', value: '192.168.10.50 - 100' }
            ].map((item, index) => (
              <div key={index} className="border rounded-md p-4 text-center bg-white">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">{item.label}</p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Criterios a Desarrollar */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-600" />
          Criterios a Desarrollar
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { id: '2.1.1', title: 'Instalación y Configuración' },
            { id: '2.1.2', title: 'Active Directory' },
            { id: '2.1.3', title: 'Cliente en Dominio' },
            { id: '2.1.4', title: 'Servicios de Red' },
            { id: '2.1.5', title: 'Políticas de Grupo' },
            { id: 'Bitácora', title: 'Prompts de IA' }
          ].map((item, index) => (
            <div key={index} className="border rounded-md p-4 bg-gray-50">
              <h3 className="font-bold mb-1">{item.id}</h3>
              <p className="text-sm text-gray-500">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Inicio
