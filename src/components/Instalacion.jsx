import { Settings, Network, Shield, CheckCircle2, Monitor } from 'lucide-react'

function Instalacion() {
  return (
    <div className="space-y-8">
      {/* Header de Sección */}
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight">2.1.1 — Instalación y Configuración Básica</h1>
        <p className="text-gray-500 mt-2 text-lg">Configuración inicial del servidor Windows Server para el proyecto</p>
      </div>

      {/* Evidencia Visual */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Monitor className="h-5 w-5 text-purple-600" />
          Evidencia 1: Configuración TCP/IP
        </h2>
        <div className="border rounded-md overflow-hidden shadow-sm">
          <img 
          src="/img_rebluc/protocoloDeRedIP.png" 
          alt="Ventana de configuración de IP en Windows Server" 
          className="w-full h-auto"
          />
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center italic">
          Figura 1: Configuración manual de la dirección IP, máscara y DNS
        </p>
      </div>

      {/* Datos Técnicos */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Network className="h-5 w-5 text-blue-600" />
          Información Técnica de SRV-DC01
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-5 bg-gray-50">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Configuración de Red</h3>
            <dl className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <dt className="text-sm font-medium">Nombre del Equipo</dt>
                <dd className="text-sm font-mono">SRV-DC01</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <dt className="text-sm font-medium">Dirección IP</dt>
                <dd className="text-sm font-mono">192.168.10.10</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <dt className="text-sm font-medium">Máscara de Subred</dt>
                <dd className="text-sm font-mono">255.255.255.0</dd>
              </div>
              <div className="flex justify-between items-center py-2">
                <dt className="text-sm font-medium">DNS Preferido</dt>
                <dd className="text-sm font-mono">127.0.0.1</dd>
              </div>
            </dl>
          </div>

          <div className="border rounded-lg p-5 bg-gray-50">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Estado de Seguridad</h3>
            <dl className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b">
                <dt className="text-sm font-medium">Firewall</dt>
                <dd className="text-sm font-semibold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  Activado
                </dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <dt className="text-sm font-medium">Perfil Dominio</dt>
                <dd className="text-sm">Listo</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <dt className="text-sm font-medium">Perfil Privado</dt>
                <dd className="text-sm">Listo</dd>
              </div>
              <div className="flex justify-between items-center py-2">
                <dt className="text-sm font-medium">Perfil Público</dt>
                <dd className="text-sm">Listo</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Pasos de Configuración */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Pasos de Configuración</h2>
        <ol className="space-y-4">
          {[
            'Instalación limpia de Windows Server 2022 o 2019',
            'Configuración inicial del sistema y zona horaria',
            'Cambio de nombre del equipo a SRV-DC01',
            'Asignación de la dirección IP estática 192.168.10.10',
            'Verificación de conectividad y resolución DNS'
          ].map((paso, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="flex items-center justify-center h-7 w-7 rounded-full bg-slate-900 text-white text-xs font-bold flex-shrink-0">
                {index + 1}
              </span>
              <p className="text-sm pt-0.5">{paso}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Verificación Final */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Verificación Final</h2>
        <ul className="space-y-3">
          {[
            'Conectividad de red entre servidor y red local',
            'Resolución de nombres básica (ping a localhost)',
            'Firewall activado sin bloqueos innecesarios',
            'Sistema operativo actualizado y preparado para roles'
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-md">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-md border">
          <p className="text-sm">
            <strong>Estado:</strong> El servidor está listo para la promoción a controlador de dominio.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Instalacion
