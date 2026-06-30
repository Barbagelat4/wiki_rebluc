
import { Settings, Network, Shield, CheckCircle2, Monitor } from 'lucide-react'

function Instalacion() {
  return (
    <div className="space-y-10">
      {/* Header de Sección */}
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">2.1.1 — Instalación y Configuración Básica</h1>
        <p className="text-slate-500 mt-2 text-lg">Configuración inicial del servidor Windows Server para el proyecto</p>
      </div>

      {/* Datos Técnicos del Servidor */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
          <Network className="h-5 w-5 text-blue-600 mr-2" />
          Información Técnica de SRV-DC01
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Columna Izquierda: Red */}
          <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Configuración de Red</h3>
            <dl className="space-y-4">
              <div className="flex justify-between py-1">
                <dt className="text-sm font-medium text-slate-700">Nombre del Equipo</dt>
                <dd className="text-sm font-mono text-slate-900">SRV-DC01</dd>
              </div>
              <div className="flex justify-between py-1">
                <dt className="text-sm font-medium text-slate-700">Dirección IP</dt>
                <dd className="text-sm font-mono text-slate-900">192.168.10.10</dd>
              </div>
              <div className="flex justify-between py-1">
                <dt className="text-sm font-medium text-slate-700">Máscara de Subred</dt>
                <dd className="text-sm font-mono text-slate-900">255.255.255.0</dd>
              </div>
              <div className="flex justify-between py-1">
                <dt className="text-sm font-medium text-slate-700">Gateway</dt>
                <dd className="text-sm font-mono text-slate-900">192.168.10.1</dd>
              </div>
              <div className="flex justify-between py-1">
                <dt className="text-sm font-medium text-slate-700">DNS Preferido</dt>
                <dd className="text-sm font-mono text-slate-900">127.0.0.1</dd>
              </div>
            </dl>
          </div>
          
          {/* Columna Derecha: Seguridad */}
          <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Estado de Seguridad</h3>
            <dl className="space-y-4">
              <div className="flex justify-between py-1">
                <dt className="text-sm font-medium text-slate-700">Firewall</dt>
                <dd className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">Activado</dd>
              </div>
              <div className="flex justify-between py-1">
                <dt className="text-sm font-medium text-slate-700">Perfil Dominio</dt>
                <dd className="text-sm text-slate-700">Listo</dd>
              </div>
              <div className="flex justify-between py-1">
                <dt className="text-sm font-medium text-slate-700">Perfil Privado</dt>
                <dd className="text-sm text-slate-700">Listo</dd>
              </div>
              <div className="flex justify-between py-1">
                <dt className="text-sm font-medium text-slate-700">Perfil Público</dt>
                <dd className="text-sm text-slate-700">Listo</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Evidencia Visual */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
          <Monitor className="h-5 w-5 text-purple-600 mr-2" />
          Evidencia 1: Configuración TCP/IP
        </h2>
        <div className="border border-slate-200 rounded-lg overflow-hidden shadow-md">
          <img 
            src="/img_rebluc/protocoloDeRedIP.png" 
            alt="Ventana de configuración de IP en Windows Server" 
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm text-slate-500 mt-4 text-center italic">Figura 1: Configuración manual de la dirección IP, máscara y DNS</p>
      </div>

      {/* Pasos de Configuración */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Pasos de Configuración</h2>
        <ol className="space-y-5">
          {[
            "Instalación limpia de Windows Server 2022 o 2019",
            "Configuración inicial del sistema y zona horaria",
            "Cambio de nombre del equipo a SRV-DC01",
            "Asignación de la dirección IP estática 192.168.10.10",
            "Verificación de conectividad y resolución DNS"
          ].map((paso, index) => (
            <li key={index} className="flex items-start space-x-4">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-600 text-white text-sm font-bold flex-shrink-0">
                {index + 1}
              </span>
              <p className="text-base text-slate-700 pt-1">{paso}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Verificación Final */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Verificación Final</h2>
        <ul className="space-y-4">
          {[
            "Conectividad de red entre servidor y red local",
            "Resolución de nombres básica (ping a localhost)",
            "Firewall activo sin bloqueos innecesarios",
            "Sistema operativo actualizado y preparado para roles"
          ].map((item, index) => (
            <li key={index} className="flex items-center space-x-3 p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
              <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" />
              <span className="text-base text-slate-800">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 p-5 bg-slate-50 border border-slate-200 rounded-lg">
          <p className="text-sm text-slate-700">
            <strong className="text-slate-900">Estado:</strong> El servidor está listo para la promoción a controlador de dominio.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Instalacion
