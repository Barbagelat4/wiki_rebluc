
import { Monitor, Network, Users, CheckCircle, AlertTriangle } from 'lucide-react'

function ClienteDominio() {
  return (
    <div className="space-y-8">
      {/* Header de Sección */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-3xl shadow-2xl p-8 text-white">
        <div className="flex items-center space-x-4">
          <div className="bg-white/25 p-4 rounded-2xl backdrop-blur-lg">
            <Monitor className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-black">2.1.3 — Cliente en el Dominio</h1>
            <p className="text-yellow-100 text-lg mt-1">Configuración y unión del cliente WIN10-CLIENT al dominio</p>
          </div>
        </div>
      </div>

      {/* Configuración del Cliente */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-6 pb-4 border-b border-slate-100 flex items-center">
          <div className="bg-yellow-100 p-4 rounded-2xl mr-4 shadow-lg">
            <Network className="h-7 w-7 text-yellow-600" />
          </div>
          Configuración del Cliente WIN10-CLIENT
        </h2>
        
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {[
                { label: "Nombre del equipo:", value: "WIN10-CLIENT" },
                { label: "Dirección IP:", value: "192.168.10.20" },
                { label: "Máscara de subred:", value: "255.255.255.0" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-white/70 p-4 rounded-xl shadow-sm">
                  <span className="text-base font-semibold text-slate-700">{item.label}</span>
                  <span className="text-yellow-800 font-black text-lg font-mono">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                { label: "Gateway:", value: "192.168.10.1" },
                { label: "DNS primario:", value: "192.168.10.10" },
                { label: "Dominio:", value: "empresa.local" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-white/70 p-4 rounded-xl shadow-sm">
                  <span className="text-base font-semibold text-slate-700">{item.label}</span>
                  <span className="text-yellow-800 font-black text-lg font-mono">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Proceso de Unión */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-6 pb-4 border-b border-slate-100">
          Proceso de Unión al Dominio
        </h2>
        
        <div className="space-y-6">
          {[
            {
              title: "1. Preparación del cliente",
              color: "blue",
              items: [
                "Configuración de IP estática (192.168.10.20)",
                "Configuración de DNS apuntando al DC (192.168.10.10)",
                "Verificación de conectividad con ping 192.168.10.10",
                "Prueba de resolución DNS con nslookup empresa.local"
              ]
            },
            {
              title: "2. Unión al dominio",
              color: "green",
              items: [
                "Acceso a Propiedades del sistema",
                "Cambio de 'Grupo de trabajo' a 'Dominio'",
                "Ingreso del dominio: empresa.local",
                "Credenciales utilizadas: AdminDominio",
                "Confirmación de unión exitosa"
              ]
            },
            {
              title: "3. Verificación post-unión",
              color: "purple",
              items: [
                "Reinicio del equipo cliente obligatorio",
                "Inicio de sesión con usuario del dominio",
                "Verificación de aplicación de políticas",
                "Comprobación de perfiles de usuario"
              ]
            }
          ].map((step, index) => (
            <div key={index} className={`bg-gradient-to-r from-${step.color}-50 to-${step.color}-100 rounded-2xl p-6 border-l-8 border-${step.color}-600 shadow-lg`}>
              <h3 className="font-black text-xl text-slate-800 mb-4">{step.title}</h3>
              <ul className="space-y-2">
                {step.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-base text-slate-700">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Usuarios que Pueden Iniciar Sesión */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
          <div className="bg-indigo-100 p-4 rounded-2xl mr-4 shadow-lg">
            <Users className="h-7 w-7 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800">Usuarios Autorizados</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "AdminDominio", role: "Administrador de Dominio", color: "red" },
            { name: "UsuarioIT", role: "Departamento IT", color: "blue" },
            { name: "UsuarioVentas", role: "Departamento Ventas", color: "green" },
            { name: "UsuarioRRHH", role: "Recursos Humanos", color: "yellow" }
          ].map((user, index) => (
            <div key={index} className={`bg-gradient-to-r from-${user.color}-50 to-${user.color}-100 rounded-2xl p-5 border-l-8 border-${user.color}-600 shadow-lg`}>
              <div className="flex items-center mb-2">
                <div className={`w-4 h-4 bg-${user.color}-600 rounded-full mr-3`}></div>
                <span className="font-black text-lg text-slate-800">{user.name}</span>
              </div>
              <div className="text-base text-slate-700">{user.role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Verificaciones Realizadas */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-6 pb-4 border-b border-slate-100">
          Verificaciones Post-Unión
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {[
              "Cliente aparece en AD Users and Computers",
              "Inicio de sesión con credenciales del dominio exitoso",
              "Políticas de grupo aplicándose correctamente",
              "Carpetas de perfil de usuario creadas"
            ].map((item, index) => (
              <div key={index} className="flex items-center text-base text-green-700 bg-white/70 p-4 rounded-xl shadow-sm border border-green-100">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {[
              "Resolución DNS funcionando para el dominio",
              "Acceso a recursos compartidos del servidor",
              "Sincronización de tiempo con el DC",
              "Eventos de logon registrados en el servidor"
            ].map((item, index) => (
              <div key={index} className="flex items-center text-base text-green-700 bg-white/70 p-4 rounded-xl shadow-sm border border-green-100">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solución de Problemas */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-6 pb-4 border-b border-slate-100">
          Resolución de Problemas Comunes
        </h2>
        
        <div className="space-y-5">
          {[
            {
              title: "Error de conectividad de red",
              symptom: "No se puede contactar con el controlador de dominio",
              solution: "Verificar configuración de IP, gateway y DNS. Probar conectividad con ping.",
              color: "orange"
            },
            {
              title: "Error de credenciales",
              symptom: "Las credenciales proporcionadas no son válidas",
              solution: "Verificar que la cuenta tiene permisos para unir equipos al dominio.",
              color: "red"
            },
            {
              title: "Error de resolución DNS",
              symptom: "No se puede resolver el nombre del dominio",
              solution: "Configurar DNS primario apuntando al controlador de dominio.",
              color: "yellow"
            }
          ].map((problem, index) => (
            <div key={index} className={`bg-gradient-to-r from-${problem.color}-50 to-${problem.color}-100 rounded-2xl p-6 border-l-8 border-${problem.color}-600 shadow-lg`}>
              <div className="flex items-center mb-3">
                <AlertTriangle className={`h-6 w-6 text-${problem.color}-600 mr-3`} />
                <h3 className="font-black text-lg text-slate-800">{problem.title}</h3>
              </div>
              <p className="text-base text-slate-700 mb-2">
                <strong>Síntoma:</strong> {problem.symptom}
              </p>
              <p className="text-base text-slate-700">
                <strong>Solución:</strong> {problem.solution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Captura */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-6 pb-4 border-b border-slate-100">
          Captura de Pantalla
        </h2>
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 text-center border-2 border-dashed border-slate-300">
          <p className="text-lg text-slate-600 font-semibold mb-2">Cliente unido al dominio - Propiedades del sistema</p>
          <p className="text-sm text-slate-500 italic">
            Referencia: docs_rebluc/img_rebluc/cliente_dominio.png
          </p>
          <div className="mt-4 text-xs text-slate-400">
            (La captura mostrará las propiedades del sistema confirmando la unión al dominio empresa.local)
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClienteDominio
