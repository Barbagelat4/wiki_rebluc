import { Server, Network, CheckCircle2, Globe } from 'lucide-react'

function ServiciosRed() {
  return (
    <div className="space-y-8">
      {/* Header de Sección */}
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight">2.1.4 — Servicios de Red (DNS y DHCP)</h1>
        <p className="text-gray-500 mt-2 text-lg">Configuración de servicios esenciales para la red empresarial</p>
      </div>

      {/* DNS Service */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Server className="h-5 w-5 text-blue-600" />
          Configuración del Servicio DNS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-5 bg-gray-50">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Zonas DNS Configuradas</h3>
            <div className="space-y-3">
              {[
                { type: 'Zona Directa', name: 'rebolledo.local', desc: 'Resolución nombre → IP' },
                { type: 'Zona Inversa', name: '10.168.192.in-addr.arpa', desc: 'Resolución IP → nombre' },
                { type: 'Reenviadores', name: '8.8.8.8, 1.1.1.1', desc: 'Para consultas externas' }
              ].map((zone, index) => (
                <div key={index} className="bg-white rounded-md p-3 border">
                  <div className="font-semibold">{zone.type}</div>
                  <div className="text-sm font-mono text-gray-500 mt-1">{zone.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{zone.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="border rounded-lg p-5 bg-gray-50">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Registros DNS Creados</h3>
            <div className="space-y-3">
              {[
                { host: 'SRV-DC01.rebolledo.local', ip: '192.168.10.10', type: 'A (Host)' },
                { host: 'WIN10-CLIENT.rebolledo.local', ip: '192.168.10.20', type: 'A (Host)' },
                { host: '192.168.10.10', ptr: 'SRV-DC01', type: 'PTR (Inverso)' }
              ].map((record, index) => (
                <div key={index} className="bg-white rounded-md p-3 border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-mono">{record.host}</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-sm font-mono">{record.ip || record.ptr}</span>
                  </div>
                  <div className="text-xs text-gray-500">Registro {record.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DHCP Service */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Network className="h-5 w-5 text-orange-600" />
          Configuración del Servicio DHCP
        </h2>
        
        <div className="border rounded-lg p-5 bg-gray-50 mb-6">
          <h3 className="font-semibold text-lg mb-4">Ámbito DHCP: Red-Empresa</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {[
                { label: 'Rango de IPs', value: '192.168.10.50 - 192.168.10.100' },
                { label: 'Máscara de subred', value: '255.255.255.0' },
                { label: 'Puerta de enlace', value: '192.168.10.1' }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-sm font-mono">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                { label: 'Servidores DNS', value: '192.168.10.10' },
                { label: 'Duración concesión', value: '8 días' },
                { label: 'Estado', value: 'Activo' }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className={`text-sm font-semibold ${index === 2 ? 'text-emerald-600' : ''}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-5 bg-gray-50">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Exclusiones de IP</h3>
            <div className="space-y-3">
              {[
                { range: '192.168.10.1 - 192.168.10.49', note: 'Reservadas' },
                { range: '192.168.10.101 - 192.168.10.254', note: 'Reservadas' }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-white rounded-md p-3 border">
                  <span className="text-sm font-mono">{item.range}</span>
                  <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">{item.note}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Rango para servidores y equipos con IP estática
            </p>
          </div>

          <div className="border rounded-lg p-5 bg-gray-50">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Reservas DHCP</h3>
            <div className="space-y-3">
              {[
                { name: 'SRV-DC01', ip: '192.168.10.10', type: 'Servidor' },
                { name: 'WIN10-CLIENT', ip: '192.168.10.20', type: 'Cliente' }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-md p-3 border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{item.type}</span>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">{item.ip}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Opciones Avanzadas DHCP */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Opciones de Configuración DHCP</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { num: '003', name: 'Router (Gateway)', value: '192.168.10.1' },
            { num: '006', name: 'Servidor DNS', value: '192.168.10.10' },
            { num: '015', name: 'Dominio DNS', value: 'rebolledo.local' }
          ].map((opt, index) => (
            <div key={index} className="p-5 border rounded-md bg-gray-50">
              <h3 className="font-semibold mb-1">Opción {opt.num}</h3>
              <p className="text-sm text-gray-500 mb-2">{opt.name}</p>
              <p className="text-lg font-mono font-bold">{opt.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Verificación de Servicios */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Globe className="h-5 w-5 text-emerald-600" />
          Verificación de Funcionamiento
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 border border-emerald-200 rounded-lg bg-emerald-50">
            <h3 className="font-bold text-lg mb-3">✅ DNS Funcionando</h3>
            <ul className="space-y-2">
              {[
                'Resolución de nombres del dominio',
                'Consultas inversas operativas',
                'Reenviadores externos funcionando'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-5 border border-blue-200 rounded-lg bg-blue-50">
            <h3 className="font-bold text-lg mb-3">✅ DHCP Funcionando</h3>
            <ul className="space-y-2">
              {[
                'Asignación automática de IPs',
                'Opciones de configuración entregadas',
                'Reservas respetándose'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-sm">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiciosRed
