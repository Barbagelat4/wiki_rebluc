import { Shield, Lock, Settings, Monitor, CheckCircle, FolderOpen } from 'lucide-react'

function Gpo() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Shield className="h-8 w-8 text-red-600 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">2.1.5 — Políticas de Grupo (GPO)</h1>
            <p className="text-gray-600">Implementación de políticas de seguridad y configuración</p>
          </div>
        </div>
      </div>

      {/* GPO 1: Política de Seguridad */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Lock className="h-6 w-6 text-red-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">GPO 1: Política de Seguridad de Usuarios</h2>
        </div>
        
        <div className="bg-red-50 rounded-lg p-4">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-semibold text-red-900 mb-2">Información General</h3>
              <div className="space-y-1 text-sm">
                <div><strong>Nombre:</strong> <code className="bg-red-100 px-1 rounded">PolSecUsuarios</code></div>
                <div><strong>Vinculada a:</strong> OU Departamentos</div>
                <div><strong>Estado:</strong> <span className="text-green-600">Habilitada</span></div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-red-900 mb-2">Aplicación</h3>
              <div className="space-y-1 text-sm">
                <div>🎯 Todos los usuarios del dominio</div>
                <div>🏢 Departamentos: IT, Ventas, RRHH</div>
                <div>⚡ Aplicación: Al iniciar sesión</div>
              </div>
            </div>
          </div>
          
          <h3 className="font-semibold text-red-900 mb-3">Configuraciones de Seguridad</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded p-3">
              <h4 className="font-medium text-red-800 mb-2">Políticas de Contraseña</h4>
              <ul className="space-y-1 text-sm text-red-700">
                <li>• Longitud mínima: <strong>8 caracteres</strong></li>
                <li>• Complejidad: <strong>Habilitada</strong></li>
                <li>• Historial: <strong>12 contraseñas</strong></li>
                <li>• Vigencia máxima: <strong>90 días</strong></li>
              </ul>
            </div>
            <div className="bg-white rounded p-3">
              <h4 className="font-medium text-red-800 mb-2">Bloqueo de Cuenta</h4>
              <ul className="space-y-1 text-sm text-red-700">
                <li>• Intentos fallidos: <strong>3 intentos</strong></li>
                <li>• Duración de bloqueo: <strong>30 minutos</strong></li>
                <li>• Contador se reinicia: <strong>30 minutos</strong></li>
                <li>• Bloqueo automático: <strong>Habilitado</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* GPO 2: Restricciones de Software */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Settings className="h-6 w-6 text-orange-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">GPO 2: Restricciones de Software</h2>
        </div>
        
        <div className="bg-orange-50 rounded-lg p-4">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-semibold text-orange-900 mb-2">Información General</h3>
              <div className="space-y-1 text-sm">
                <div><strong>Nombre:</strong> <code className="bg-orange-100 px-1 rounded">RestriccionesSoftware</code></div>
                <div><strong>Vinculada a:</strong> OU Departamentos/Ventas</div>
                <div><strong>Alcance:</strong> Usuarios específicos</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-orange-900 mb-2">Objetivo</h3>
              <p className="text-sm text-orange-800">
                Restringir acceso a herramientas del sistema y configuraciones críticas 
                para usuarios del departamento de Ventas.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded p-3">
              <h4 className="font-medium text-orange-800 mb-2">🚫 Restricciones de Sistema</h4>
              <ul className="space-y-1 text-sm text-orange-700">
                <li>• Bloqueo del Panel de Control</li>
                <li>• Deshabilitar Editor del Registro</li>
                <li>• Ocultar Administrador de tareas</li>
                <li>• Bloquear acceso a CMD</li>
              </ul>
            </div>
            <div className="bg-white rounded p-3">
              <h4 className="font-medium text-orange-800 mb-2">📦 Restricciones de Software</h4>
              <ul className="space-y-1 text-sm text-orange-700">
                <li>• Restricción de instalación</li>
                <li>• Lista blanca de aplicaciones</li>
                <li>• Bloqueo de ejecutables .exe</li>
                <li>• Control de scripts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* GPO 3: Configuración de Escritorio */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Monitor className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">GPO 3: Configuración de Escritorio</h2>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Información General</h3>
              <div className="space-y-1 text-sm">
                <div><strong>Nombre:</strong> <code className="bg-blue-100 px-1 rounded">ConfigEscritorio</code></div>
                <div><strong>Vinculada a:</strong> OU Equipos/Estaciones</div>
                <div><strong>Aplicación:</strong> Configuración de equipo</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Propósito</h3>
              <p className="text-sm text-blue-800">
                Estandarizar la apariencia y configuración de escritorio en todas 
                las estaciones de trabajo del dominio.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded p-3">
              <h4 className="font-medium text-blue-800 mb-2">🎨 Configuración Visual</h4>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Fondo de escritorio corporativo</li>
                <li>• Tema Windows estándar</li>
                <li>• Colores corporativos</li>
                <li>• Logo de la empresa</li>
              </ul>
            </div>
            <div className="bg-white rounded p-3">
              <h4 className="font-medium text-blue-800 mb-2">🔒 Configuración de Seguridad</h4>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Protector de pantalla (15 min)</li>
                <li>• Bloqueo automático</li>
                <li>• Ocultar iconos del escritorio</li>
                <li>• Deshabilitar cambio de tema</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* GPO 4: Mapeo de Unidades */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <FolderOpen className="h-6 w-6 text-green-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">GPO 4: Mapeo de Unidades de Red</h2>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Información General</h3>
              <div className="space-y-1 text-sm">
                <div><strong>Nombre:</strong> <code className="bg-green-100 px-1 rounded">UnidadesRed</code></div>
                <div><strong>Vinculada a:</strong> Dominio (empresa.local)</div>
                <div><strong>Usuarios:</strong> Autenticados del dominio</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Configuración</h3>
              <div className="space-y-1 text-sm text-green-800">
                <div>⚡ Aplicación: Al iniciar sesión</div>
                <div>🔄 Reconexión automática</div>
                <div>📁 Basado en pertenencia a grupos</div>
              </div>
            </div>
          </div>
          
          <h3 className="font-semibold text-green-900 mb-3">Unidades Mapeadas</h3>
          <div className="space-y-3">
            <div className="bg-white rounded p-3 border-l-4 border-green-600">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-green-900">Unidad H: (Personal)</span>
                <span className="text-xs bg-green-100 px-2 py-1 rounded">Para todos</span>
              </div>
              <div className="text-sm text-green-700">
                <strong>Ruta:</strong> <code className="bg-green-100 px-1 rounded">\\SRV-DC01\Usuarios\%username%</code>
              </div>
              <div className="text-xs text-green-600 mt-1">Carpeta personal del usuario</div>
            </div>
            
            <div className="bg-white rounded p-3 border-l-4 border-blue-600">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-blue-900">Unidad S: (Compartida)</span>
                <span className="text-xs bg-blue-100 px-2 py-1 rounded">Para todos</span>
              </div>
              <div className="text-sm text-blue-700">
                <strong>Ruta:</strong> <code className="bg-blue-100 px-1 rounded">\\SRV-DC01\Compartido</code>
              </div>
              <div className="text-xs text-blue-600 mt-1">Carpeta compartida de la empresa</div>
            </div>
          </div>
        </div>
      </div>

      {/* Proceso de Implementación */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Proceso de Implementación</h2>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">1. Creación de GPOs</h3>
              <p className="text-sm text-gray-600 mt-1">
                Creación de las políticas en Group Policy Management Console (GPMC) con configuraciones específicas.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">2. Configuración de políticas específicas</h3>
              <p className="text-sm text-gray-600 mt-1">
                Configuración detallada de cada política según los requerimientos de seguridad y funcionalidad.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">3. Vinculación a OUs correspondientes</h3>
              <p className="text-sm text-gray-600 mt-1">
                Enlace de las GPOs a las unidades organizacionales apropiadas según el alcance deseado.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">4. Configuración de orden y filtros</h3>
              <p className="text-sm text-gray-600 mt-1">
                Establecimiento del orden de precedencia y filtros de seguridad para aplicación selectiva.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">5. Aplicación forzada</h3>
              <p className="text-sm text-gray-600 mt-1">
                Ejecución de <code className="bg-gray-100 px-1 rounded">gpupdate /force</code> para aplicación inmediata en clientes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Verificación */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Herramientas de Verificación</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="font-semibold text-purple-900 mb-2">rsop.msc</h3>
            <p className="text-sm text-purple-800 mb-2">Conjunto Resultante de Políticas</p>
            <p className="text-xs text-purple-700">
              Muestra todas las políticas aplicadas y su precedencia para un usuario/equipo específico.
            </p>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-semibold text-indigo-900 mb-2">gpresult /r</h3>
            <p className="text-sm text-indigo-800 mb-2">Resultado de Políticas</p>
            <p className="text-xs text-indigo-700">
              Comando para mostrar las políticas aplicadas al usuario y equipo actual.
            </p>
          </div>
          
          <div className="bg-teal-50 rounded-lg p-4">
            <h3 className="font-semibold text-teal-900 mb-2">Event Viewer</h3>
            <p className="text-sm text-teal-800 mb-2">Registros de Eventos</p>
            <p className="text-xs text-teal-700">
              Logs de Group Policy para diagnóstico de errores y confirmación de aplicación.
            </p>
          </div>
        </div>
      </div>

      {/* Estado de Aplicación */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Estado de Aplicación</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-900 mb-3">✅ Políticas Aplicadas Correctamente</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-1 text-green-800">
              <li>• Políticas de seguridad activas</li>
              <li>• Restricciones de software funcionando</li>
              <li>• Escritorio corporativo aplicado</li>
              <li>• Unidades de red mapeadas</li>
            </ul>
            <ul className="space-y-1 text-green-800">
              <li>• Sin conflictos de políticas</li>
              <li>• Filtros de seguridad operativos</li>
              <li>• Herencias configuradas correctamente</li>
              <li>• Logs sin errores críticos</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Captura */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Captura de Pantalla</h2>
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-600 mb-2">Group Policy Management Console (GPMC)</p>
          <p className="text-sm text-gray-500 italic">
            Referencia: docs_rebluc/img_rebluc/gpo.png
          </p>
          <div className="mt-4 text-xs text-gray-400">
            [La captura mostraría GPMC con las GPOs creadas, sus configuraciones y enlaces a OUs]
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gpo