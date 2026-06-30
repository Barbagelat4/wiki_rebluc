import { Users, FolderTree, Shield, CheckCircle2, Server, Workflow } from 'lucide-react'

function ActiveDirectory() {
  return (
    <div className="space-y-8">
      {/* Header de Sección */}
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight">2.1.2 — Active Directory Domain Services</h1>
        <p className="text-gray-500 mt-2 text-lg">Promoción del servidor a controlador de dominio y estructura de Active Directory</p>
      </div>

      {/* Evidencia Server Manager */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Server className="h-5 w-5 text-blue-600" />
          Evidencia 2: Server Manager
        </h2>
        <div className="border rounded-md overflow-hidden shadow-sm">
          <img 
            src="/img_rebluc/activeDirectory.png" 
            alt="Roles instalados en Server Manager" 
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center italic">
          Figura 2: Roles AD DS y DNS instalados y funcionales
        </p>
      </div>

      {/* Evidencia OU Principal */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Evidencia 3: OU Principal</h2>
        <div className="border rounded-md overflow-hidden shadow-sm">
          <img 
            src="/img_rebluc/dominio.png" 
            alt="Unidad organizacional INACAP" 
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center italic">
          Figura 3: OU INACAP Valparaíso
        </p>
      </div>

      {/* Evidencia OU Estudiantes */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Evidencia 4: OU Estudiantes</h2>
        <div className="border rounded-md overflow-hidden shadow-sm">
          <img 
            src="/img_rebluc/AD-OU-Estudiantes.png" 
            alt="OU Estudiantes" 
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center italic">
          Figura 4: OU Estudiantes creada
        </p>
      </div>

      {/* Evidencia Usuarios y Equipos */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Users className="h-5 w-5 text-orange-600" />
          Evidencia 5: Usuarios y Equipos de Active Directory
        </h2>
        <div className="border rounded-md overflow-hidden shadow-sm">
          <img 
            src="/img_rebluc/UsuariosYEquipos.png" 
            alt="Consola de Active Directory" 
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center italic">
          Figura 5: Estructura de objetos en Active Directory
        </p>
      </div>

      {/* Datos del Dominio */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Server className="h-5 w-5 text-blue-600" />
          Configuración del Dominio
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-5 bg-gray-50">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Datos Generales</h3>
            <dl className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <dt className="text-sm font-medium">Nombre del Dominio</dt>
                <dd className="text-sm font-mono">rebolledo.local</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <dt className="text-sm font-medium">Nivel Funcional</dt>
                <dd className="text-sm">Windows Server 2019</dd>
              </div>
              <div className="flex justify-between items-center py-2">
                <dt className="text-sm font-medium">Controlador de Dominio</dt>
                <dd className="text-sm font-mono">SRV-DC01</dd>
              </div>
            </dl>
          </div>

          <div className="border rounded-lg p-5 bg-gray-50">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Roles Instalados</h3>
            <ul className="space-y-2">
              {['Active Directory Domain Services', 'DNS Server', 'Global Catalog'].map((item, index) => (
                <li key={index} className="flex items-center text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Estructura OUs */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <FolderTree className="h-5 w-5 text-purple-600" />
          Estructura de Unidades Organizativas
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-5 bg-gray-50">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Por Departamento</h3>
            <ul className="space-y-2">
              {['Administración', 'Académicos', 'Estudiantes'].map((dept, index) => (
                <li key={index} className="flex items-center p-3 bg-white rounded-md border text-sm">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                  {dept}
                </li>
              ))}
            </ul>
          </div>

          <div className="border rounded-lg p-5 bg-gray-50">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Por Tipo de Equipo</h3>
            <ul className="space-y-2">
              {['Servidores', 'Estaciones de Trabajo'].map((item, index) => (
                <li key={index} className="flex items-center p-3 bg-white rounded-md border text-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Usuarios y Grupos */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Usuarios de Dominio</h2>
          <ul className="space-y-2">
            {[
              'AdminDominio (Administrador)',
              'UsuarioIT (Departamento IT)',
              'UsuarioVentas (Departamento Ventas)',
              'UsuarioRRHH (Recursos Humanos)'
            ].map((user, index) => (
              <li key={index} className="p-3 bg-gray-50 border rounded-md text-sm">
                {user}
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Grupos de Seguridad</h2>
          <ul className="space-y-2">
            {[
              'GrupoIT (Administradores locales)',
              'GrupoVentas (Usuarios de dominio)',
              'GrupoRRHH (Permisos especiales)'
            ].map((grupo, index) => (
              <li key={index} className="p-3 bg-gray-50 border rounded-md text-sm">
                {grupo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ActiveDirectory
