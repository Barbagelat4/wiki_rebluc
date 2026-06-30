
import { HardDrive, Server, Network, CheckCircle, Globe } from 'lucide-react'

function ServiciosRed() {
  return (
    <div className="space-y-8">
      {/* Header de Sección */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 text-white">
        <div className="flex items-center space-x-4">
          <div className="bg-white/25 p-4 rounded-2xl backdrop-blur-lg">
            <HardDrive className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-black">2.1.4 — Servicios de Red (DNS y DHCP)</h1>
            <p className="text-purple-100 text-lg mt-1">Configuración de servicios esenciales para la red empresarial</p>
          </div>
        </div>
      </div>

      {/* DNS Service */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
          <div className="bg-blue-100 p-4 rounded-2xl mr-4 shadow-lg">
            <Server className="h-7 w-7 text-blue-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800">Configuración del Servicio DNS</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 shadow-lg">
            <h3 className="font-black text-xl text-blue-900 mb-5">Zonas DNS Configuradas</h3>
            <div className="space-y-4">
              {[
                { type: "Zona Directa", name: "empresa.local", desc: "Resolución nombre → IP" },
                { type: "Zona Inversa", name: "10.168.192.in-addr.arpa", desc: "Resolución IP → nombre" },
                { type: "Reenviadores", name: "8.8.8.8, 1.1.1.1", desc: "Para consultas externas" }
              ].map((zone, index) => (
                <div key={index} className="bg-white/70 rounded-xl p-4 shadow-sm border-l-4 border-blue-600">
                  <div className="font-semibold text-lg text-slate-800">{zone.type}</div>
                  <div className="text-base text-slate-700 font-mono mt-1">{zone.name}</div>
                  <div className="text-sm text-slate-600 mt-1">{zone.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 shadow-lg">
            <h3 className="font-black text-xl text-green-900 mb-5">Registros DNS Creados</h3>
            <div className="space-y-3">
              {[
                { host: "SRV-DC01.empresa.local", ip: "192.168.10.10", type: "A (Host)" },
                { host: "WIN10-CLIENT.empresa.local", ip: "192.168.10.20", type: "A (Host)" },
                { host: "192.168.10.10", ptr: "SRV-DC01", type: "PTR (Inverso)" },
                { host: "192.168.10.20", ptr: "WIN10-CLIENT", type: "PTR (Inverso)" }
              ].map((record, index) => (
                <div key={index} className="bg-white/70 rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-base text-green-800">{record.host}</span>
                    <span className="text-slate-600">→</span>
                    <span className="font-mono text-base text-green-800">{record.ip || record.ptr}</span>
                  </div>
                  <div className="text-sm text-slate-500">Registro {record.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DHCP Service */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
          <div className="bg-orange-100 p-4 rounded-2xl mr-4 shadow-lg">
            <Network className="h-7 w-7 text-orange-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800">Configuración del Servicio DHCP</h2>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-200 shadow-lg mb-6">
          <h3 className="font-black text-xl text-orange-900 mb-5">Ámbito DHCP: Red-Empresa</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {[
                { label: "Rango de IPs:", value: "192.168.10.50 - 192.168.10.100" },
                { label: "Máscara de subred:", value: "255.255.255.0" },
                { label: "Puerta de enlace:", value: "192.168.10.1" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-white/70 p-4 rounded-xl shadow-sm">
                  <span className="text-base font-semibold text-slate-700">{item.label}</span>
                  <span className="text-orange-800 font-black text-lg font-mono">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                { label: "Servidores DNS:", value: "192.168.10.10" },
                { label: "Duración concesión:", value: "8 días" },
                { label: "Estado:", value: "Activo", highlight: true }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-white/70 p-4 rounded-xl shadow-sm">
                  <span className="text-base font-semibold text-slate-700">{item.label}</span>
                  <span className={`font-black text-lg font-mono ${item.highlight ? 'text-green-600' : 'text-orange-800'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200 shadow-lg">
            <h3 className="font-black text-xl text-red-900 mb-5">Exclusiones de IP</h3>
            <div className="space-y-3">
              {[
                { range: "192.168.10.1 - 192.168.10.49", note: "Reservadas" },
                { range: "192.168.10.101 - 192.168.10.254", note: "Reservadas" }
              ].map((item, index) => (
                <div key={index} className="bg-white/70 rounded-xl p-4 shadow-sm flex justify-between items-center">
                  <span className="font-mono text-base text-red-800">{item.range}</span>
                  <span className="text-xs text-red-600 bg-red-100 px-3 py-1 rounded-full">{item.note}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-red-700 mt-4">Rango para servidores y equipos con IP estática</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-200 shadow-lg">
            <h3 className="font-black text-xl text-indigo-900 mb-5">Reservas DHCP</h3>
            <div className="space-y-3">
              {[
                { name: "SRV-DC01", mac: "00:0C:29:XX:XX:XX", ip: "192.168.10.10", type: "Servidor" },
                { name: "WIN10-CLIENT", mac: "00:0C:29:YY:YY:YY", ip: "192.168.10.20", type: "Cliente" }
              ].map((item, index) => (
                <div key={index} className="bg-white/70 rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-lg text-indigo-800">{item.name}</span>
                    <span className="text-xs bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">{item.type}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600">
                    <span className="font-mono">{item.mac}</span>
                    <span className="font-mono">{item.ip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Opciones Avanzadas DHCP */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-6 pb-4 border-b border-slate-100">
          Opciones Avanzadas de DHCP
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { num: "003", name: "Router (Gateway)", value: "192.168.10.1" },
            { num: "006", name: "Servidor DNS", value: "192.168.10.10" },
            { num: "015", name: "Dominio DNS", value: "empresa.local" }
          ].map((opt, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold text-lg text-slate-800 mb-2">Opción {opt.num}</h3>
              <p className="text-base text-slate-700 mb-2">{opt.name}</p>
              <p className="text-lg font-mono text-blue-600 font-black">{opt.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Proceso de Configuración */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-6 pb-4 border-b border-slate-100">
          Proceso de Implementación
        </h2>
        
        <div className="space-y-5">
          {[
            { title: "Instalación del rol DHCP", desc: "Instalación del rol DHCP Server a través del Server Manager con reinicio requerido." },
            { title: "Autorización del servidor DHCP", desc: "Autorización del servidor DHCP en Active Directory para permitir la asignación de IPs." },
            { title: "Creación y configuración del ámbito", desc: "Definición del rango de IPs, exclusiones y opciones de configuración." },
            { title: "Activación del ámbito", desc: "Habilitación del ámbito para comenzar la asignación automática de IPs." },
            { title: "Pruebas de asignación automática", desc: "Verificación del funcionamiento mediante cliente de prueba y monitoreo de concesiones." }
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4 bg-gradient-to-r from-slate-50 to-purple-50 p-5 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-100 p-2 rounded-xl flex-shrink-0 shadow-lg">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-800">{index + 1}. {item.title}</h3>
                <p className="text-slate-600 text-base mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verificación de Servicios */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
          <div className="bg-green-100 p-4 rounded-2xl mr-4 shadow-lg">
            <Globe className="h-7 w-7 text-green-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800">Verificación de Funcionamiento</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 shadow-lg">
            <h3 className="font-black text-xl text-green-900 mb-4">✅ DNS Funcionando</h3>
            <ul className="space-y-2">
              {[
                "Resolución de nombres del dominio",
                "Consultas inversas operativas",
                "Reenviadores externos funcionando",
                "Registros automáticos creándose"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-base text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 shadow-lg">
            <h3 className="font-black text-xl text-blue-900 mb-4">✅ DHCP Funcionando</h3>
            <ul className="space-y-2">
              {[
                "Asignación automática de IPs",
                "Opciones de configuración entregadas",
                "Reservas respetándose",
                "Renovaciones automáticas"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-base text-blue-800">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
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
          <p className="text-lg text-slate-600 font-semibold mb-2">Consola de DNS y DHCP Manager</p>
          <p className="text-sm text-slate-500 italic">
            Referencia: docs_rebluc/img_rebluc/servicios_red.png
          </p>
          <div className="mt-4 text-xs text-slate-400">
            (La captura mostrará la consola de DNS Manager con zonas configuradas y DHCP Manager con el ámbito activo)
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiciosRed
