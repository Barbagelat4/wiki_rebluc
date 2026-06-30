import { Lock, User, ShieldCheck, Monitor, Settings, FolderTree } from 'lucide-react'

function Gpo() {
  return (
    <div className="space-y-8">
      {/* Header de Sección */}
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight">2.1.5 — Políticas de Grupo (GPO)</h1>
        <p className="text-gray-500 mt-2 text-lg">Administración y aplicación de políticas de seguridad y configuración</p>
      </div>

      {/* GPOs Creados */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <FolderTree className="h-5 w-5 text-purple-600" />
          Objetos de Política de Grupo (GPOs) Creados
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 border rounded-lg bg-gray-50">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-lg">GPO-Seguridad-Empresa</h3>
                <p className="text-sm text-gray-500">Política de seguridad</p>
              </div>
              <div className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">Activo</div>
            </div>
            <ul className="space-y-2">
              {[
                'Contraseñas: 8 caracteres mínimo, complejas',
                'Bloqueo por intentos fallidos',
                'Tiempo de inactividad para bloqueo'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-5 border rounded-lg bg-gray-50">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-lg">GPO-Mapeo-Unidades</h3>
                <p className="text-sm text-gray-500">Mapeo de recursos</p>
              </div>
              <div className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">Activo</div>
            </div>
            <ul className="space-y-2">
              {[
                'Unidad Z: Carpeta Datos (servidor)',
                'Unidad X: Carpeta Software',
                'Solo para usuarios del departamento'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Aplicación de GPOs */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Aplicación por Unidades Organizativas</h2>
        
        <div className="space-y-4">
          {[
            { ou: 'Administración', gpos: ['GPO-Seguridad-Empresa', 'GPO-Mapeo-Unidades'] },
            { ou: 'Estudiantes', gpos: ['GPO-Seguridad-Empresa'] },
            { ou: 'Académicos', gpos: ['GPO-Seguridad-Empresa', 'GPO-Mapeo-Unidades'] }
          ].map((item, index) => (
            <div key={index} className="border rounded-md p-4 bg-gray-50">
              <h3 className="font-bold mb-2 flex items-center">
                <FolderTree className="h-4 w-4 text-purple-600 mr-2" />
                OU: {item.ou}
              </h3>
              <p className="text-sm text-gray-500 mb-2">GPOs vinculadas:</p>
              <div className="flex flex-wrap gap-2">
                {item.gpos.map((gpo, i) => (
                  <span key={i} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">{gpo}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verificación de Aplicación */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-emerald-600" />
          Verificación de GPOs Aplicadas
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 border border-emerald-200 rounded-lg bg-emerald-50">
            <h3 className="font-bold text-lg mb-3">✅ Configuraciones de Usuario</h3>
            <ul className="space-y-2">
              {[
                'Fondo de pantalla corporativo',
                'Acceso a carpetas de red',
                'Preferencias de Internet Explorer'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-5 border border-blue-200 rounded-lg bg-blue-50">
            <h3 className="font-bold text-lg mb-3">✅ Configuraciones de Equipo</h3>
            <ul className="space-y-2">
              {[
                'Actualizaciones de Windows automáticas',
                'Firewall de Windows activado',
                'Restricción de software no autorizado'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Herramientas Utilizadas */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Settings className="h-5 w-5 text-yellow-600" />
          Herramientas de Administración
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'Editor de Administración de Políticas de Grupo', use: 'Crea y edita GPOs' },
            { name: 'Consola de Administración de GPOs (GPMC)', use: 'Vinculación y gestión' },
            { name: 'Resultados de Objetivo de Directiva', use: 'Verifica aplicación' }
          ].map((tool, index) => (
            <div key={index} className="p-4 border rounded-md bg-gray-50">
              <h3 className="font-semibold">{tool.name}</h3>
              <p className="text-sm text-gray-500">{tool.use}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gpo
