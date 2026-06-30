import { Network, Users, FolderTree, Shield, CheckCircle } from 'lucide-react'

function ActiveDirectory() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Network className="h-8 w-8 text-green-600 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">2.1.2 — Active Directory</h1>
            <p className="text-gray-600">Configuración del dominio, OUs, usuarios y grupos</p>
          </div>
        </div>
      </div>

      {/* Configuración del Dominio */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Promoción a Controlador de Dominio</h2>
        
        <div className="bg-green-50 rounded-lg p-4 mb-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Configuración del Dominio</h3>
              <div className="space-y-1 text-sm">
                <div><strong>Nombre del dominio:</strong> <code className="bg-green-100 px-1 rounded">empresa.local</code></div>
                <div><strong>Nivel funcional:</strong> Windows Server 2019</div>
                <div><strong>Controlador de dominio:</strong> SRV-DC01.empresa.local</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Servicios Instalados</h3>
              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                  <span>AD Domain Services (AD DS)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                  <span>DNS Server</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                  <span>Global Catalog</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estructura de OUs */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <FolderTree className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Unidades Organizacionales (OU)</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-3">📁 Departamentos</h3>
            <div className="space-y-2 text-sm pl-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span>IT (Tecnología)</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span>Ventas</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span>Recursos Humanos</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span>Contabilidad</span>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="font-semibold text-purple-900 mb-3">💻 Equipos</h3>
            <div className="space-y-2 text-sm pl-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                <span>Servidores</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                <span>Estaciones de Trabajo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Usuarios y Grupos */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Usuarios */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-orange-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Usuarios Creados</h2>
          </div>
          
          <div className="space-y-3">
            <div className="bg-red-50 border-l-4 border-red-500 p-3">
              <div className="font-semibold text-red-900">AdminDominio</div>
              <div className="text-sm text-red-700">Administrador de Dominio</div>
              <div className="text-xs text-red-600">Permisos totales del dominio</div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3">
              <div className="font-semibold text-blue-900">UsuarioIT</div>
              <div className="text-sm text-blue-700">Departamento IT</div>
              <div className="text-xs text-blue-600">OU: Departamentos/IT</div>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-3">
              <div className="font-semibold text-green-900">UsuarioVentas</div>
              <div className="text-sm text-green-700">Departamento Ventas</div>
              <div className="text-xs text-green-600">OU: Departamentos/Ventas</div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3">
              <div className="font-semibold text-yellow-900">UsuarioRRHH</div>
              <div className="text-sm text-yellow-700">Recursos Humanos</div>
              <div className="text-xs text-yellow-600">OU: Departamentos/RRHH</div>
            </div>
          </div>
        </div>

        {/* Grupos */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Grupos de Seguridad</h2>
          </div>
          
          <div className="space-y-3">
            <div className="bg-indigo-50 rounded-lg p-3">
              <div className="font-semibold text-indigo-900 mb-1">GrupoIT</div>
              <div className="text-sm text-indigo-700 mb-2">Administradores locales</div>
              <div className="text-xs text-indigo-600">
                <strong>Miembros:</strong> UsuarioIT, AdminDominio
              </div>
            </div>
            
            <div className="bg-emerald-50 rounded-lg p-3">
              <div className="font-semibold text-emerald-900 mb-1">GrupoVentas</div>
              <div className="text-sm text-emerald-700 mb-2">Usuarios del dominio</div>
              <div className="text-xs text-emerald-600">
                <strong>Miembros:</strong> UsuarioVentas
              </div>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-3">
              <div className="font-semibold text-amber-900 mb-1">GrupoRRHH</div>
              <div className="text-sm text-amber-700 mb-2">Permisos especiales</div>
              <div className="text-xs text-amber-600">
                <strong>Miembros:</strong> UsuarioRRHH
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proceso Realizado */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Proceso de Implementación</h2>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">1. Instalación del rol AD DS</h3>
              <p className="text-sm text-gray-600 mt-1">
                Instalación del rol Active Directory Domain Services a través del Server Manager.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">2. Promoción del servidor a DC</h3>
              <p className="text-sm text-gray-600 mt-1">
                Promoción a controlador de dominio con creación del nuevo bosque "empresa.local".
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">3. Creación de la estructura de OUs</h3>
              <p className="text-sm text-gray-600 mt-1">
                Organización lógica del directorio por departamentos y tipos de equipos.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">4. Creación de usuarios y grupos</h3>
              <p className="text-sm text-gray-600 mt-1">
                Configuración de cuentas de usuario y grupos de seguridad con permisos apropiados.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">5. Asignación de permisos y membresías</h3>
              <p className="text-sm text-gray-600 mt-1">
                Configuración de la pertenencia a grupos y asignación de permisos según roles.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Captura */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Captura de Pantalla</h2>
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-600 mb-2">Active Directory Users and Computers</p>
          <p className="text-sm text-gray-500 italic">
            Referencia: docs_rebluc/img_rebluc/active_directory.png
          </p>
          <div className="mt-4 text-xs text-gray-400">
            [La captura mostraría la consola ADUC con la estructura de OUs, usuarios y grupos creados]
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveDirectory