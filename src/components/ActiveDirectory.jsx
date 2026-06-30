
import { Users, FolderTree, Shield, CheckCircle2, Server, Workflow } from 'lucide-react'

function ActiveDirectory() {
  return (
    <div className="space-y-10">
      {/* Header de Sección */}
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">2.1.2 — Active Directory Domain Services</h1>
        <p className="text-slate-500 mt-2 text-lg">Promoción del servidor a controlador de dominio y estructura de Active Directory</p>
      </div>

      {/* Datos del Dominio */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
          <Server className="h-5 w-5 text-blue-600 mr-2" />
          Configuración del Dominio
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
            <dl className="space-y-4">
              <div className="flex justify-between py-1">
                <dt className="text-sm font-medium text-slate-700">Nombre del Dominio</dt>
                <dd className="text-sm font-mono text-slate-900">rebolledo.local</dd>
              </div>
              <div className="flex justify-between py-1">
                <dt className="text-sm font-medium text-slate-700">Nivel Funcional</dt>
                <dd className="text-sm text-slate-700">Windows Server 2019</dd>
              </div>
              <div className="flex justify-between py-1">
                <dt className="text-sm font-medium text-slate-700">Controlador de Dominio</dt>
                <dd className="text-sm font-mono text-slate-900">SRV-DC01</dd>
              </div>
            </dl>
          </div>
          <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Roles Instalados</h3>
            <ul className="space-y-2">
              {["Active Directory Domain Services", "DNS Server", "Global Catalog"].map((item, index) => (
                <li key={index} className="flex items-center text-sm text-slate-700">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencia Server Manager */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Evidencia 2: Server Manager</h2>
        <div className="border border-slate-200 rounded-lg overflow-hidden shadow-md">
          <img 
            src="/img_rebluc/activeDirectory.png" 
            alt="Roles instalados en Server Manager" 
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm text-slate-500 mt-4 text-center italic">Figura 2: Roles AD DS y DNS instalados y funcionales</p>
      </div>

      {/* Estructura OUs */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
          <FolderTree className="h-5 w-5 text-purple-600 mr-2" />
          Estructura de Unidades Organizativas
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Por Departamento</h3>
            <ul className="space-y-3">
              {["Administración", "Académicos", "Estudiantes"].map((dept, index) => (
                <li key={index} className="flex items-center p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-sm">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                  {dept}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Por Tipo de Equipo</h3>
            <ul className="space-y-3">
              {["Servidores", "Estaciones de Trabajo"].map((item, index) => (
                <li key={index} className="flex items-center p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencias OUs en Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Evidencia 3: OU Principal</h3>
          <div className="border border-slate-200 rounded-lg overflow-hidden shadow-md">
            <img 
              src="/img_rebluc/dominio.png" 
              alt="Unidad organizativa INACAP" 
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-slate-500 mt-3 text-center italic">Figura 3: OU INACAP Valparaíso</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Evidencia 4: OU Estudiantes</h3>
          <div className="border border-slate-200 rounded-lg overflow-hidden shadow-md">
            <img 
              src="/img_rebluc/AD-OU-Estudiantes.png" 
              alt="OU Estudiantes" 
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-slate-500 mt-3 text-center italic">Figura 4: OU Estudiantes creada</p>
        </div>
      </div>

      {/* Evidencia Usuarios y Equipos */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
          <Users className="h-5 w-5 text-orange-600 mr-2" />
          Evidencia 5: Usuarios y Equipos de Active Directory
        </h2>
        <div className="border border-slate-200 rounded-lg overflow-hidden shadow-md">
          <img 
            src="/img_rebluc/UsuariosYEquipos.png" 
            alt="Consola de Active Directory" 
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm text-slate-500 mt-4 text-center italic">Figura 5: Estructura de objetos en Active Directory</p>
      </div>

      {/* Usuarios y Grupos */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Usuarios de Dominio</h2>
          <ul className="space-y-3">
            {[
              "AdminDominio (Administrador)",
              "UsuarioIT (Departamento IT)",
              "UsuarioVentas (Departamento Ventas)",
              "UsuarioRRHH (Recursos Humanos)"
            ].map((user, index) => (
              <li key={index} className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800">
                {user}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Grupos de Seguridad</h2>
          <ul className="space-y-3">
            {[
              "GrupoIT (Administradores locales)",
              "GrupoVentas (Usuarios de dominio)",
              "GrupoRRHH (Permisos especiales)"
            ].map((grupo, index) => (
              <li key={index} className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800">
                {grupo}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Resumen */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Resumen del Proceso</h2>
        <ol className="space-y-4">
          {[
            "Instalación del rol AD DS",
            "Promoción a controlador de dominio",
            "Creación de unidades organizativas (OUs)",
            "Creación de usuarios y grupos de seguridad",
            "Asignación de permisos y membresías"
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-4">
              <span className="flex items-center justify-center h-7 w-7 bg-blue-600 text-white text-xs font-bold rounded-full flex-shrink-0">
                {index + 1}
              </span>
              <p className="text-sm text-slate-700 pt-0.5">{item}</p>
            </li>
          ))}
        </ol>
      </div>

    </div>
  )
}

export default ActiveDirectory
