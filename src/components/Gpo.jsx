
import { Shield, Lock, Settings, Monitor, CheckCircle, FolderOpen } from 'lucide-react'

function Gpo() {
  return (
    <div className="space-y-8">
      {/* Header de Sección */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl shadow-2xl p-8 text-white">
        <div className="flex items-center space-x-4">
          <div className="bg-white/25 p-4 rounded-2xl backdrop-blur-lg">
            <Shield className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-black">2.1.5 — Políticas de Grupo (GPO)</h1>
            <p className="text-red-100 text-lg mt-1">Implementación de políticas de seguridad y configuración</p>
          </div>
        </div>
      </div>

      {/* GPO 1: Política de Seguridad */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
          <div className="bg-red-100 p-4 rounded-2xl mr-4 shadow-lg">
            <Lock className="h-7 w-7 text-red-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800">GPO 1: Política de Seguridad de Usuarios</h2>
        </div>
        
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-black text-xl text-red-900 mb-4">Información General</h3>
              <div className="space-y-3">
                <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                  <span className="text-base font-semibold text-slate-700">Nombre: </span>
                  <span className="text-red-800 font-black font-mono">PolSecUsuarios</span>
                </div>
                <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                  <span className="text-base font-semibold text-slate-700">Vinculada a: </span>
                  <span className="text-slate-800">OU Departamentos</span>
                </div>
                <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                  <span className="text-base font-semibold text-slate-700">Estado: </span>
                  <span className="text-green-600 font-black">Habilitada</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-black text-xl text-red-900 mb-4">Aplicación</h3>
              <div className="space-y-2">
                <div className="flex items-center text-base text-slate-700">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  🎯 Todos los usuarios del dominio
                </div>
                <div className="flex items-center text-base text-slate-700">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  🏢 Departamentos: IT, Ventas, RRHH
                </div>
                <div className="flex items-center text-base text-slate-700">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  ⚡ Aplicación: Al iniciar sesión
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="font-black text-xl text-red-900 mb-4">Configuraciones de Seguridad</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/70 rounded-xl p-5 shadow-sm border border-red-100">
              <h4 className="font-semibold text-lg text-red-800 mb-3">Políticas de Contraseña</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-red-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Longitud mínima: <strong>8 caracteres</strong></span>
                </li>
                <li className="flex items-center text-base text-red-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Complejidad: <strong>Habilitada</strong></span>
                </li>
                <li className="flex items-center text-base text-red-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Historial: <strong>12 contraseñas</strong></span>
                </li>
                <li className="flex items-center text-base text-red-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Vigencia máxima: <strong>90 días</strong></span>
                </li>
              </ul>
            </div>
            <div className="bg-white/70 rounded-xl p-5 shadow-sm border border-red-100">
              <h4 className="font-semibold text-lg text-red-800 mb-3">Bloqueo de Cuenta</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-red-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Intentos fallidos: <strong>3 intentos</strong></span>
                </li>
                <li className="flex items-center text-base text-red-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Duración de bloqueo: <strong>30 minutos</strong></span>
                </li>
                <li className="flex items-center text-base text-red-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Contador se reinicia: <strong>30 minutos</strong></span>
                </li>
                <li className="flex items-center text-base text-red-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Bloqueo automático: <strong>Habilitado</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* GPO 2: Restricciones de Software */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
          <div className="bg-orange-100 p-4 rounded-2xl mr-4 shadow-lg">
            <Settings className="h-7 w-7 text-orange-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800">GPO 2: Restricciones de Software</h2>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-200 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-black text-xl text-orange-900 mb-4">Información General</h3>
              <div className="space-y-3">
                <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                  <span className="text-base font-semibold text-slate-700">Nombre: </span>
                  <span className="text-orange-800 font-black font-mono">RestriccionesSoftware</span>
                </div>
                <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                  <span className="text-base font-semibold text-slate-700">Vinculada a: </span>
                  <span className="text-slate-800">OU Departamentos/Ventas</span>
                </div>
                <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                  <span className="text-base font-semibold text-slate-700">Alcance: </span>
                  <span className="text-slate-800">Usuarios específicos</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-black text-xl text-orange-900 mb-4">Objetivo</h3>
              <p className="text-base text-orange-800 leading-relaxed">
                Restringir acceso a herramientas del sistema y configuraciones críticas 
                para usuarios del departamento de Ventas.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/70 rounded-xl p-5 shadow-sm border border-orange-100">
              <h4 className="font-semibold text-lg text-orange-800 mb-3">🚫 Restricciones de Sistema</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-orange-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Bloqueo del Panel de Control</span>
                </li>
                <li className="flex items-center text-base text-orange-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Deshabilitar Editor del Registro</span>
                </li>
                <li className="flex items-center text-base text-orange-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Ocultar Administrador de tareas</span>
                </li>
                <li className="flex items-center text-base text-orange-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Bloquear acceso a CMD</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/70 rounded-xl p-5 shadow-sm border border-orange-100">
              <h4 className="font-semibold text-lg text-orange-800 mb-3">📦 Restricciones de Software</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-orange-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Restricción de instalación</span>
                </li>
                <li className="flex items-center text-base text-orange-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Lista blanca de aplicaciones</span>
                </li>
                <li className="flex items-center text-base text-orange-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Bloqueo de ejecutables .exe</span>
                </li>
                <li className="flex items-center text-base text-orange-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Control de scripts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* GPO 3: Configuración de Escritorio */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
          <div className="bg-blue-100 p-4 rounded-2xl mr-4 shadow-lg">
            <Monitor className="h-7 w-7 text-blue-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800">GPO 3: Configuración de Escritorio</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-black text-xl text-blue-900 mb-4">Información General</h3>
              <div className="space-y-3">
                <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                  <span className="text-base font-semibold text-slate-700">Nombre: </span>
                  <span className="text-blue-800 font-black font-mono">ConfigEscritorio</span>
                </div>
                <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                  <span className="text-base font-semibold text-slate-700">Vinculada a: </span>
                  <span className="text-slate-800">OU Equipos/Estaciones</span>
                </div>
                <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                  <span className="text-base font-semibold text-slate-700">Aplicación: </span>
                  <span className="text-slate-800">Configuración de equipo</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-black text-xl text-blue-900 mb-4">Propósito</h3>
              <p className="text-base text-blue-800 leading-relaxed">
                Estandarizar la apariencia y configuración de escritorio en todas 
                las estaciones de trabajo del dominio.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/70 rounded-xl p-5 shadow-sm border border-blue-100">
              <h4 className="font-semibold text-lg text-blue-800 mb-3">🎨 Configuración Visual</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-blue-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Fondo de escritorio corporativo</span>
                </li>
                <li className="flex items-center text-base text-blue-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Tema Windows estándar</span>
                </li>
                <li className="flex items-center text-base text-blue-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Colores corporativos</span>
                </li>
                <li className="flex items-center text-base text-blue-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Logo de la empresa</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/70 rounded-xl p-5 shadow-sm border border-blue-100">
              <h4 className="font-semibold text-lg text-blue-800 mb-3">🔒 Configuración de Seguridad</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-blue-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Protector de pantalla (15 min)</span>
                </li>
                <li className="flex items-center text-base text-blue-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Bloqueo automático</span>
                </li>
                <li className="flex items-center text-base text-blue-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Ocultar iconos del escritorio</span>
                </li>
                <li className="flex items-center text-base text-blue-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Deshabilitar cambio de tema</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* GPO 4: Mapeo de Unidades */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
          <div className="bg-green-100 p-4 rounded-2xl mr-4 shadow-lg">
            <FolderOpen className="h-7 w-7 text-green-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800">GPO 4: Mapeo de Unidades de Red</h2>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-black text-xl text-green-900 mb-4">Información General</h3>
              <div className="space-y-3">
                <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                  <span className="text-base font-semibold text-slate-700">Nombre: </span>
                  <span className="text-green-800 font-black font-mono">UnidadesRed</span>
                </div>
                <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                  <span className="text-base font-semibold text-slate-700">Vinculada a: </span>
                  <span className="text-slate-800">Dominio (empresa.local)</span>
                </div>
                <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                  <span className="text-base font-semibold text-slate-700">Usuarios: </span>
                  <span className="text-slate-800">Autenticados del dominio</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-black text-xl text-green-900 mb-4">Configuración</h3>
              <div className="space-y-2">
                <div className="flex items-center text-base text-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                  <span>⚡ Aplicación: Al iniciar sesión</span>
                </div>
                <div className="flex items-center text-base text-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                  <span>🔄 Reconexión automática</span>
                </div>
                <div className="flex items-center text-base text-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                  <span>📁 Basado en pertenencia a grupos</span>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="font-black text-xl text-green-900 mb-5">Unidades Mapeadas</h3>
          <div className="space-y-4">
            <div className="bg-white/70 rounded-xl p-5 shadow-sm border-l-8 border-green-600">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-lg text-green-900">Unidad H: (Personal)</span>
                <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">Para todos</span>
              </div>
              <div className="text-base text-green-700 mb-1">
                <strong>Ruta: </strong>
                <code className="bg-green-100 px-2 py-1 rounded font-mono">\\SRV-DC01\Usuarios\%username%</code>
              </div>
              <div className="text-sm text-green-600 mt-1">Carpeta personal del usuario</div>
            </div>
            
            <div className="bg-white/70 rounded-xl p-5 shadow-sm border-l-8 border-blue-600">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-lg text-blue-900">Unidad S: (Compartida)</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Para todos</span>
              </div>
              <div className="text-base text-blue-700 mb-1">
                <strong>Ruta: </strong>
                <code className="bg-blue-100 px-2 py-1 rounded font-mono">\\SRV-DC01\Compartido</code>
              </div>
              <div className="text-sm text-blue-600 mt-1">Carpeta compartida de la empresa</div>
            </div>
          </div>
        </div>
      </div>

      {/* Proceso de Implementación */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-6 pb-4 border-b border-slate-100">
          Proceso de Implementación
        </h2>
        
        <div className="space-y-5">
          {[
            { title: "Creación de GPOs", desc: "Creación de las políticas en Group Policy Management Console (GPMC) con configuraciones específicas." },
            { title: "Configuración de políticas específicas", desc: "Configuración detallada de cada política según los requerimientos de seguridad y funcionalidad." },
            { title: "Vinculación a OUs correspondientes", desc: "Enlace de las GPOs a las unidades organizacionales apropiadas según el alcance deseado." },
            { title: "Configuración de orden y filtros", desc: "Establecimiento del orden de precedencia y filtros de seguridad para aplicación selectiva." },
            { title: "Aplicación forzada", desc: "Ejecución de gpupdate /force para aplicación inmediata en clientes." }
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4 bg-gradient-to-r from-slate-50 to-red-50 p-5 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-red-100 p-2 rounded-xl flex-shrink-0 shadow-lg">
                <CheckCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-800">{index + 1}. {item.title}</h3>
                <p className="text-slate-600 text-base mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verificación */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-6 pb-4 border-b border-slate-100">
          Herramientas de Verificación
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200 shadow-lg">
            <h3 className="font-black text-xl text-purple-900 mb-3">rsop.msc</h3>
            <p className="text-base text-purple-800 mb-3">Conjunto Resultante de Políticas</p>
            <p className="text-sm text-purple-700">
              Muestra todas las políticas aplicadas y su precedencia para un usuario/equipo específico.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-200 shadow-lg">
            <h3 className="font-black text-xl text-indigo-900 mb-3">gpresult /r</h3>
            <p className="text-base text-indigo-800 mb-3">Resultado de Políticas</p>
            <p className="text-sm text-indigo-700">
              Comando para mostrar las políticas aplicadas al usuario y equipo actual.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-200 shadow-lg">
            <h3 className="font-black text-xl text-teal-900 mb-3">Event Viewer</h3>
            <p className="text-base text-teal-800 mb-3">Registros de Eventos</p>
            <p className="text-sm text-teal-700">
              Logs de Group Policy para diagnóstico de errores y confirmación de aplicación.
            </p>
          </div>
        </div>
      </div>

      {/* Estado de Aplicación */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-6 pb-4 border-b border-slate-100">
          Estado de Aplicación
        </h2>
        
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <h3 className="font-black text-xl text-green-900 mb-5">✅ Políticas Aplicadas Correctamente</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-2">
              {[
                "Políticas de seguridad activas",
                "Restricciones de software funcionando",
                "Escritorio corporativo aplicado",
                "Unidades de red mapeadas"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-base text-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {[
                "Sin conflictos de políticas",
                "Filtros de seguridad operativos",
                "Herencias configuradas correctamente",
                "Logs sin errores críticos"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-base text-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Captura */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-6 pb-4 border-b border-slate-100">
          Captura de Pantalla
        </h2>
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 text-center border-2 border-dashed border-slate-300">
          <p className="text-lg text-slate-600 font-semibold mb-2">Group Policy Management Console (GPMC)</p>
          <p className="text-sm text-slate-500 italic">
            Referencia: docs_rebluc/img_rebluc/gpo.png
          </p>
          <div className="mt-4 text-xs text-slate-400">
            (La captura mostrará GPMC con las GPOs creadas, sus configuraciones y enlaces a OUs)
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gpo
