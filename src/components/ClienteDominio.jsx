import { Monitor, Network, Users, CheckCircle2, AlertTriangle } from 'lucide-react'

function ClienteDominio() {
  return (
    <div className="space-y-8">
      {/* Header de Sección */}
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight">2.1.3 — Cliente en el Dominio</h1>
        <p className="text-gray-500 mt-2 text-lg">Configuración y unión del cliente Windows 10 al dominio rebolledo.local</p>
      </div>

      {/* Configuración del Cliente */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Network className="h-5 w-5 text-yellow-600" />
          Configuración del Cliente WIN10-CLIENT
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-5 bg-gray-50">
            <dl className="space-y-3">
              {[
                { label: 'Nombre del equipo', value: 'WIN10-CLIENT' },
                { label: 'Dirección IP', value: '192.168.10.20' },
                { label: 'Máscara de subred', value: '255.255.255.0' }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b">
                  <dt className="text-sm font-medium">{item.label}</dt>
                  <dd className="text-sm font-mono">{item.value}</dd>
                </div>
              ))}
              <div className="flex justify-between items-center py-2">
                <dt className="text-sm font-medium">Gateway</dt>
                <dd className="text-sm font-mono">192.168.10.1</dd>
              </div>
            </dl>
          </div>

          <div className="border rounded-lg p-5 bg-gray-50">
            <dl className="space-y-3">
              {[
                { label: 'DNS primario', value: '192.168.10.10' },
                { label: 'Dominio', value: 'rebolledo.local' }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b">
                  <dt className="text-sm font-medium">{item.label}</dt>
                  <dd className="text-sm font-mono">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Evidencia 1: Ping */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Evidencia 1: Verificación de Conectividad</h2>
        <div className="border rounded-md overflow-hidden shadow-sm">
          <img 
            src="/img_rebluc/PingdePC01.png" 
            alt="Ping exitoso desde el cliente al servidor" 
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center italic">
          Figura 6: Comando ping para verificar conectividad entre cliente y DC
        </p>
      </div>

      {/* Proceso de Unión */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Proceso de Unión al Dominio</h2>
        
        <ol className="space-y-4">
          {[
            'Preparación: Configurar IP y DNS del cliente',
            'Propiedades del sistema > Cambiar grupo de trabajo a dominio',
            'Ingresar el nombre del dominio: rebolledo.local',
            'Autenticarse con el usuario AdminDominio',
            'Confirmar unión exitosa y reiniciar el equipo'
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="flex items-center justify-center h-7 w-7 rounded-full bg-slate-900 text-white text-xs font-bold flex-shrink-0">
                {index + 1}
              </span>
              <p className="text-sm pt-0.5">{item}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Evidencia 2: Agregar al Dominio */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Evidencia 2: Proceso de Unión al Dominio</h2>
        <div className="border rounded-md overflow-hidden shadow-sm">
          <img 
            src="/img_rebluc/agregaralDominio.png" 
            alt="Ventana de unión al dominio" 
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center italic">
          Figura 7: Paso de unión del cliente al dominio rebolledo.local
        </p>
      </div>

      {/* Evidencia 3: Listo en Dominio */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Evidencia 3: Unión Exitosa</h2>
        <div className="border rounded-md overflow-hidden shadow-sm">
          <img 
            src="/img_rebluc/listoenEldDominio.png" 
            alt="Confirmación de unión al dominio" 
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center italic">
          Figura 8: Mensaje de bienvenida al dominio y confirmación de éxito
        </p>
      </div>

      {/* Usuarios Autorizados */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Users className="h-5 w-5 text-indigo-600" />
          Usuarios del Dominio que Pueden Iniciar Sesión
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: 'AdminDominio', role: 'Administrador de Dominio' },
            { name: 'UsuarioIT', role: 'Departamento IT' },
            { name: 'UsuarioVentas', role: 'Departamento Ventas' },
            { name: 'UsuarioRRHH', role: 'Recursos Humanos' }
          ].map((user, index) => (
            <div key={index} className="p-4 border rounded-md bg-gray-50">
              <div className="font-bold">{user.name}</div>
              <div className="text-sm text-gray-500">{user.role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Verificaciones Post-Unión */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Verificaciones Post-Unión</h2>
        <ul className="space-y-3">
          {[
            'Cliente aparece en Usuarios y Equipos de Active Directory',
            'Inicio de sesión exitoso con credenciales del dominio',
            'Reinicio del equipo cliente completado',
            'Resolución DNS funcionando correctamente',
            'Acceso a recursos del servidor disponibles'
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-md">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ClienteDominio
