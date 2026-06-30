import { HardDrive, Server, Network, CheckCircle, Globe } from 'lucide-react'

function ServiciosRed() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <HardDrive className="h-8 w-8 text-purple-600 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">2.1.4 — Servicios de Red (DNS y DHCP)</h1>
            <p className="text-gray-600">Configuración de servicios esenciales para la red empresarial</p>
          </div>
        </div>
      </div>

      {/* DNS Service */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Server className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Configuración del Servicio DNS</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-3">Zonas DNS Configuradas</h3>
            <div className="space-y-3">
              <div className="bg-white rounded p-3 border-l-4 border-blue-600">
                <div className="font-medium text-blue-900">Zona Directa</div>
                <div className="text-sm text-blue-700">empresa.local</div>
                <div className="text-xs text-blue-600">Resolución nombre → IP</div>
              </div>
              
              <div className="bg-white rounded p-3 border-l-4 border-blue-600">
                <div className="font-medium text-blue-900">Zona Inversa</div>
                <div className="text-sm text-blue-700">10.168.192.in-addr.arpa</div>
                <div className="text-xs text-blue-600">Resolución IP → nombre</div>
              </div>
              
              <div className="bg-white rounded p-3 border-l-4 border-green-600">
                <div className="font-medium text-green-900">Reenviadores</div>
                <div className="text-sm text-green-700">8.8.8.8, 1.1.1.1</div>
                <div className="text-xs text-green-600">Para consultas externas</div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 mb-3">Registros DNS Creados</h3>
            <div className="space-y-2">
              <div className="bg-white rounded p-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-green-800">SRV-DC01.empresa.local</span>
                  <span className="text-gray-600">→</span>
                  <span className="font-mono text-green-800">192.168.10.10</span>
                </div>
                <div className="text-xs text-gray-500">Registro A (Host)</div>
              </div>
              
              <div className="bg-white rounded p-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-green-800">WIN10-CLIENT.empresa.local</span>
                  <span className="text-gray-600">→</span>
                  <span className="font-mono text-green-800">192.168.10.20</span>
                </div>
                <div className="text-xs text-gray-500">Registro A (Host)</div>
              </div>
              
              <div className="bg-white rounded p-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-green-800">192.168.10.10</span>
                  <span className="text-gray-600">→</span>
                  <span className="font-mono text-green-800">SRV-DC01</span>
                </div>
                <div className="text-xs text-gray-500">Registro PTR (Inverso)</div>
              </div>
              
              <div className="bg-white rounded p-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-green-800">192.168.10.20</span>
                  <span className="text-gray-600">→</span>
                  <span className="font-mono text-green-800">WIN10-CLIENT</span>
                </div>
                <div className="text-xs text-gray-500">Registro PTR (Inverso)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DHCP Service */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Network className="h-6 w-6 text-orange-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Configuración del Servicio DHCP</h2>
        </div>
        
        <div className="bg-orange-50 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-orange-900 mb-3">Ámbito DHCP: Red-Empresa</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Rango de IPs:</span>
                <span className="text-orange-800 font-mono">192.168.10.50 - 192.168.10.100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Máscara de subred:</span>
                <span className="text-orange-800 font-mono">255.255.255.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Puerta de enlace:</span>
                <span className="text-orange-800 font-mono">192.168.10.1</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Servidores DNS:</span>
                <span className="text-orange-800 font-mono">192.168.10.10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Duración concesión:</span>
                <span className="text-orange-800 font-mono">8 días</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Estado:</span>
                <span className="text-green-600 font-semibold">Activo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-900 mb-3">Exclusiones de IP</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-white rounded p-2 flex justify-between items-center">
                <span className="font-mono text-red-800">192.168.10.1 - 192.168.10.49</span>
                <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">Reservadas</span>
              </div>
              <div className="bg-white rounded p-2 flex justify-between items-center">
                <span className="font-mono text-red-800">192.168.10.101 - 192.168.10.254</span>
                <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">Reservadas</span>
              </div>
            </div>
            <p className="text-xs text-red-700 mt-2">
              Rango para servidores y equipos con IP estática
            </p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-semibold text-indigo-900 mb-3">Reservas DHCP</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-white rounded p-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-indigo-800">SRV-DC01</span>
                  <span className="text-xs bg-indigo-100 px-2 py-1 rounded">Servidor</span>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span className="font-mono">00:0C:29:XX:XX:XX</span>
                  <span className="font-mono">192.168.10.10</span>
                </div>
              </div>
              
              <div className="bg-white rounded p-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-indigo-800">WIN10-CLIENT</span>
                  <span className="text-xs bg-indigo-100 px-2 py-1 rounded">Cliente</span>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span className="font-mono">00:0C:29:YY:YY:YY</span>
                  <span className="font-mono">192.168.10.20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Opciones Avanzadas DHCP */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Opciones Avanzadas de DHCP</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">Opción 003</h3>
            <p className="text-sm text-gray-700">Router (Gateway)</p>
            <p className="text-xs font-mono text-blue-600">192.168.10.1</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">Opción 006</h3>
            <p className="text-sm text-gray-700">Servidor DNS</p>
            <p className="text-xs font-mono text-blue-600">192.168.10.10</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">Opción 015</h3>
            <p className="text-sm text-gray-700">Dominio DNS</p>
            <p className="text-xs font-mono text-blue-600">empresa.local</p>
          </div>
        </div>
      </div>

      {/* Proceso de Configuración */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Proceso de Implementación</h2>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">1. Instalación del rol DHCP</h3>
              <p className="text-sm text-gray-600 mt-1">
                Instalación del rol DHCP Server a través del Server Manager con reinicio requerido.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">2. Autorización del servidor DHCP</h3>
              <p className="text-sm text-gray-600 mt-1">
                Autorización del servidor DHCP en Active Directory para permitir la asignación de IPs.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">3. Creación y configuración del ámbito</h3>
              <p className="text-sm text-gray-600 mt-1">
                Definición del rango de IPs, exclusiones y opciones de configuración.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">4. Activación del ámbito</h3>
              <p className="text-sm text-gray-600 mt-1">
                Habilitación del ámbito para comenzar la asignación automática de IPs.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">5. Pruebas de asignación automática</h3>
              <p className="text-sm text-gray-600 mt-1">
                Verificación del funcionamiento mediante cliente de prueba y monitoreo de concesiones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Verificación de Servicios */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Globe className="h-6 w-6 text-green-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Verificación de Funcionamiento</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 mb-3">✅ DNS Funcionando</h3>
            <ul className="space-y-1 text-sm text-green-800">
              <li>• Resolución de nombres del dominio</li>
              <li>• Consultas inversas operativas</li>
              <li>• Reenviadores externos funcionando</li>
              <li>• Registros automáticos creándose</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-3">✅ DHCP Funcionando</h3>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>• Asignación automática de IPs</li>
              <li>• Opciones de configuración entregadas</li>
              <li>• Reservas respetándose</li>
              <li>• Renovaciones automáticas</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Captura */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Captura de Pantalla</h2>
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-600 mb-2">Consola de DNS y DHCP Manager</p>
          <p className="text-sm text-gray-500 italic">
            Referencia: docs_rebluc/img_rebluc/servicios_red.png
          </p>
          <div className="mt-4 text-xs text-gray-400">
            [La captura mostraría la consola de DNS Manager con zonas configuradas y DHCP Manager con el ámbito activo]
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiciosRed