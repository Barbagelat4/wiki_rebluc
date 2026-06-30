import { Server, Network, Target, CheckCircle, Info, Zap } from 'lucide-react'

function Inicio() {
  return (
    <div className="space-y-10">
      {/* Hero Section Premium */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="bg-white/25 p-5 rounded-2xl backdrop-blur-lg shadow-2xl border border-white/30">
              <Server className="h-14 w-14" />
            </div>
            <div>
              <h1 className="text-5xl font-black tracking-tight">Wiki Windows Server</h1>
              <p className="text-blue-100 text-xl mt-2 font-medium">Laboratorio Unidad 2 — Guía Completa Paso a Paso</p>
            </div>
          </div>
          <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 border border-white/25 shadow-xl">
            <p className="text-base font-semibold">📚 Institución: INACAP Valparaíso</p>
            <p className="text-sm text-blue-200 mt-1">🎓 Curso: TI3V35 — Sistemas Operativos</p>
          </div>
        </div>
      </div>

      {/* Sección de Tarjetas: Objetivo y Topología */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Tarjeta Objetivo del Laboratorio */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-2xl mr-4 shadow-lg">
              <Target className="h-7 w-7 text-green-600" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800">Objetivo del Laboratorio</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg">
            Este laboratorio cubre la implementación completa de Windows Server con Active Directory, 
            configuración de servicios de red (DNS y DHCP) y políticas de grupo. Se desarrolla un 
            entorno empresarial completo desde la instalación básica hasta la administración avanzada.
          </p>
        </div>

        {/* Tarjeta Información General */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-2xl mr-4 shadow-lg">
              <Info className="h-7 w-7 text-blue-600" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800">Información del Proyecto</h2>
          </div>
          <div className="space-y-5">
            <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl">
              <span className="text-base font-semibold text-slate-500">👨‍🎓 Estudiante</span>
              <span className="text-slate-800 font-black text-lg">Lucas Rebolledo</span>
            </div>
            <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl">
              <span className="text-base font-semibold text-slate-500">👨‍🏫 Docente</span>
              <span className="text-slate-800 font-black text-lg">Rubén Schnettler L.</span>
            </div>
            <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl">
              <span className="text-base font-semibold text-slate-500">🏫 Institución</span>
              <span className="text-slate-800 font-black text-lg">INACAP Valparaíso</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjeta Topología de Red (Ancha completa) */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <div className="flex items-center mb-8 pb-5 border-b border-slate-100">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-2xl mr-4 shadow-lg">
            <Network className="h-7 w-7 text-purple-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800">Topología de Red</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Servidor SRV-DC01 */}
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-7 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-5">
              <div className="bg-blue-600 p-3 rounded-xl mr-3 shadow-lg">
                <Server className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-blue-900">Servidor: SRV-DC01</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-700 bg-white/70 p-3 rounded-xl shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-base"><strong>IP:</strong> 192.168.10.10/24</span>
              </li>
              <li className="flex items-center text-slate-700 bg-white/70 p-3 rounded-xl shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-base"><strong>Rol:</strong> Controlador de Dominio</span>
              </li>
              <li className="flex items-center text-slate-700 bg-white/70 p-3 rounded-xl shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-base"><strong>Servicios:</strong> AD DS, DNS, DHCP</span>
              </li>
              <li className="flex items-center text-slate-700 bg-white/70 p-3 rounded-xl shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-base"><strong>Dominio:</strong> empresa.local</span>
              </li>
            </ul>
          </div>

          {/* Cliente WIN10-CLIENT */}
          <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-7 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-5">
              <div className="bg-green-600 p-3 rounded-xl mr-3 shadow-lg">
                <Server className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-green-900">Cliente: WIN10-CLIENT</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-700 bg-white/70 p-3 rounded-xl shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-base"><strong>IP:</strong> 192.168.10.20/24</span>
              </li>
              <li className="flex items-center text-slate-700 bg-white/70 p-3 rounded-xl shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-base"><strong>SO:</strong> Windows 10</span>
              </li>
              <li className="flex items-center text-slate-700 bg-white/70 p-3 rounded-xl shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-base"><strong>Estado:</strong> Unido al dominio</span>
              </li>
              <li className="flex items-center text-slate-700 bg-white/70 p-3 rounded-xl shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-base"><strong>DNS:</strong> 192.168.10.10</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Configuración General de Red */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-7 border border-slate-200 shadow-lg">
          <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center">
            <div className="bg-slate-200 p-2 rounded-lg mr-3">
              <Network className="h-6 w-6 text-slate-700" />
            </div>
            Configuración General de Red
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Gateway</p>
              <p className="text-2xl font-black text-slate-800">192.168.10.1</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Máscara</p>
              <p className="text-2xl font-black text-slate-800">255.255.255.0</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Rango DHCP</p>
              <p className="text-2xl font-black text-slate-800">.50 - .100</p>
            </div>
          </div>
        </div>
      </div>

      {/* Criterios a Desarrollar */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500">
        <div className="flex items-center mb-8 pb-5 border-b border-slate-100">
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-4 rounded-2xl mr-4 shadow-lg">
            <Zap className="h-7 w-7 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800">Criterios a Desarrollar</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-5 border-l-8 border-blue-600 hover:translate-x-2 hover:shadow-lg transition-all duration-300">
            <h3 className="font-black text-xl text-slate-800 mb-2">2.1.1</h3>
            <p className="text-base text-slate-700 font-medium">Instalación y Configuración</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-5 border-l-8 border-green-600 hover:translate-x-2 hover:shadow-lg transition-all duration-300">
            <h3 className="font-black text-xl text-slate-800 mb-2">2.1.2</h3>
            <p className="text-base text-slate-700 font-medium">Active Directory</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-5 border-l-8 border-yellow-600 hover:translate-x-2 hover:shadow-lg transition-all duration-300">
            <h3 className="font-black text-xl text-slate-800 mb-2">2.1.3</h3>
            <p className="text-base text-slate-700 font-medium">Cliente en Dominio</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-5 border-l-8 border-purple-600 hover:translate-x-2 hover:shadow-lg transition-all duration-300">
            <h3 className="font-black text-xl text-slate-800 mb-2">2.1.4</h3>
            <p className="text-base text-slate-700 font-medium">Servicios de Red</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-5 border-l-8 border-red-600 hover:translate-x-2 hover:shadow-lg transition-all duration-300">
            <h3 className="font-black text-xl text-slate-800 mb-2">2.1.5</h3>
            <p className="text-base text-slate-700 font-medium">Políticas de Grupo</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-5 border-l-8 border-indigo-600 hover:translate-x-2 hover:shadow-lg transition-all duration-300">
            <h3 className="font-black text-xl text-slate-800 mb-2">Bitácora</h3>
            <p className="text-base text-slate-700 font-medium">Prompts de IA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio