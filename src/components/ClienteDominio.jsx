import { Monitor, Network, Users, CheckCircle, AlertTriangle } from 'lucide-react'

function ClienteDominio() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Monitor className="h-8 w-8 text-yellow-600 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">2.1.3 — Cliente en el Dominio</h1>
            <p className="text-gray-600">Configuración y unión del cliente WIN10-CLIENT al dominio</p>
          </div>
        </div>
      </div>

      {/* Configuración del Cliente */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Configuración del Cliente WIN10-CLIENT</h2>
        
        <div className="bg-yellow-50 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <Network className="h-5 w-5 text-yellow-600 mr-2" />
            <h3 className="font-semibold text-yellow-900">Configuración de Red del Cliente</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Nombre del equipo:</span>
                <span className="text-yellow-800 font-mono">WIN10-CLIENT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Dirección IP:</span>
                <span className="text-yellow-800 font-mono">192.168.10.20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Máscara de subred:</span>
                <span className="text-yellow-800 font-mono">255.255.255.0</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Gateway:</span>
                <span className="text-yellow-800 font-mono">192.168.10.1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">DNS primario:</span>
                <span className="text-yellow-800 font-mono">192.168.10.10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Dominio:</span>
                <span className="text-yellow-800 font-mono">empresa.local</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proceso de Unión */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Proceso de Unión al Dominio</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3 className="font-semibold text-blue-900 mb-2">1. Preparación del cliente</h3>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>• Configuración de IP estática (192.168.10.20)</li>
              <li>• Configuración de DNS apuntando al DC (192.168.10.10)</li>
              <li>• Verificación de conectividad con <code className="bg-blue-100 px-1 rounded">ping 192.168.10.10</code></li>
              <li>• Prueba de resolución DNS con <code className="bg-blue-100 px-1 rounded">nslookup empresa.local</code></li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h3 className="font-semibold text-green-900 mb-2">2. Unión al dominio</h3>
            <ul className="space-y-1 text-sm text-green-800">
              <li>• Acceso a Propiedades del sistema</li>
              <li>• Cambio de "Grupo de trabajo" a "Dominio"</li>
              <li>• Ingreso del dominio: <code className="bg-green-100 px-1 rounded">empresa.local</code></li>
              <li>• Credenciales utilizadas: <code className="bg-green-100 px-1 rounded">AdminDominio</code></li>
              <li>• Confirmación de unión exitosa</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h3 className="font-semibold text-purple-900 mb-2">3. Verificación post-unión</h3>
            <ul className="space-y-1 text-sm text-purple-800">
              <li>• Reinicio del equipo cliente obligatorio</li>
              <li>• Inicio de sesión con usuario del dominio</li>
              <li>• Verificación de aplicación de políticas</li>
              <li>• Comprobación de perfiles de usuario</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Usuarios que Pueden Iniciar Sesión */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Users className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Usuarios Autorizados</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="bg-red-50 rounded-lg p-3">
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                <span className="font-semibold text-red-900">AdminDominio</span>
              </div>
              <div className="text-sm text-red-700">Administrador de Dominio</div>
              <div className="text-xs text-red-600">Permisos: Administrador local</div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                <span className="font-semibold text-blue-900">UsuarioIT</span>
              </div>
              <div className="text-sm text-blue-700">Departamento IT</div>
              <div className="text-xs text-blue-600">Permisos: Usuario avanzado</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-green-50 rounded-lg p-3">
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                <span className="font-semibold text-green-900">UsuarioVentas</span>
              </div>
              <div className="text-sm text-green-700">Departamento Ventas</div>
              <div className="text-xs text-green-600">Permisos: Usuario estándar</div>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-3">
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 bg-yellow-600 rounded-full mr-2"></div>
                <span className="font-semibold text-yellow-900">UsuarioRRHH</span>
              </div>
              <div className="text-sm text-yellow-700">Recursos Humanos</div>
              <div className="text-xs text-yellow-600">Permisos: Usuario con accesos especiales</div>
            </div>
          </div>
        </div>
      </div>

      {/* Verificaciones Realizadas */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Verificaciones Post-Unión</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center text-sm text-green-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
              <span>Cliente aparece en AD Users and Computers</span>
            </div>
            <div className="flex items-center text-sm text-green-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
              <span>Inicio de sesión con credenciales del dominio exitoso</span>
            </div>
            <div className="flex items-center text-sm text-green-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
              <span>Políticas de grupo aplicándose correctamente</span>
            </div>
            <div className="flex items-center text-sm text-green-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
              <span>Carpetas de perfil de usuario creadas</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center text-sm text-green-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
              <span>Resolución DNS funcionando para el dominio</span>
            </div>
            <div className="flex items-center text-sm text-green-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
              <span>Acceso a recursos compartidos del servidor</span>
            </div>
            <div className="flex items-center text-sm text-green-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
              <span>Sincronización de tiempo con el DC</span>
            </div>
            <div className="flex items-center text-sm text-green-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
              <span>Eventos de logon registrados en el servidor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Solución de Problemas */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Resolución de Problemas Comunes</h2>
        
        <div className="space-y-4">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
              <h3 className="font-medium text-orange-900">Error de conectividad de red</h3>
            </div>
            <p className="text-sm text-orange-800 mb-2">
              <strong>Síntoma:</strong> No se puede contactar con el controlador de dominio
            </p>
            <p className="text-sm text-orange-700">
              <strong>Solución:</strong> Verificar configuración de IP, gateway y DNS. Probar conectividad con ping.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
              <h3 className="font-medium text-red-900">Error de credenciales</h3>
            </div>
            <p className="text-sm text-red-800 mb-2">
              <strong>Síntoma:</strong> "Las credenciales proporcionadas no son válidas"
            </p>
            <p className="text-sm text-red-700">
              <strong>Solución:</strong> Verificar que la cuenta tiene permisos para unir equipos al dominio.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
              <h3 className="font-medium text-yellow-900">Error de resolución DNS</h3>
            </div>
            <p className="text-sm text-yellow-800 mb-2">
              <strong>Síntoma:</strong> No se puede resolver el nombre del dominio
            </p>
            <p className="text-sm text-yellow-700">
              <strong>Solución:</strong> Configurar DNS primario apuntando al controlador de dominio.
            </p>
          </div>
        </div>
      </div>

      {/* Captura */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Captura de Pantalla</h2>
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-600 mb-2">Cliente unido al dominio - Propiedades del sistema</p>
          <p className="text-sm text-gray-500 italic">
            Referencia: docs_rebluc/img_rebluc/cliente_dominio.png
          </p>
          <div className="mt-4 text-xs text-gray-400">
            [La captura mostraría las propiedades del sistema confirmando la unión al dominio empresa.local]
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClienteDominio