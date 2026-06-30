
import { Sparkles, Bot, CheckCircle2 } from 'lucide-react'

function Prompts() {
  return (
    <div className="space-y-10">
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Bitácora de Prompts de Inteligencia Artificial</h1>
        <p className="text-slate-500 mt-2 text-lg">Interacciones con IA durante la realización del proyecto</p>
      </div>

      {/* Prompts Principales */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
            <Bot className="h-5 w-5 text-blue-600 mr-2" />
            Prompt 1: Configuración de Red
          </h2>
          <div className="bg-slate-950 text-slate-200 font-mono text-sm p-5 rounded-lg shadow-inner mb-5">
            "¿Cómo configurar una dirección IP estática en Windows Server 2022?"
          </div>
          <p className="text-sm text-slate-600 mb-4">
            <strong className="text-slate-900">Resumen:</strong> Paso a paso para la configuración del protocolo TCP/IP.
          </p>
          <div className="flex items-center space-x-3 p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
            <span className="text-sm text-emerald-800">Éxito: IP configurada correctamente</span>
          </div>
        </div>
        
        <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
            <Bot className="h-5 w-5 text-purple-600 mr-2" />
            Prompt 2: Active Directory
          </h2>
          <div className="bg-slate-950 text-slate-200 font-mono text-sm p-5 rounded-lg shadow-inner mb-5">
            "Guía para promover un servidor a controlador de dominio en Windows Server"
          </div>
          <p className="text-sm text-slate-600 mb-4">
            <strong className="text-slate-900">Resumen:</strong> Instalación del rol AD DS y proceso de promoción.
          </p>
          <div className="flex items-center space-x-3 p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
            <span className="text-sm text-emerald-800">Éxito: Dominio rebolledo.local creado</span>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
          <Sparkles className="h-5 w-5 text-yellow-600 mr-2" />
          Resumen General
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "8", txt: "Prompts Totales", color: "text-blue-700" },
            { num: "6", txt: "Éxitos Directos", color: "text-emerald-700" },
            { num: "2", txt: "Ajustes", color: "text-yellow-700" },
            { num: "5h", txt: "Tiempo Estimado", color: "text-purple-700" }
          ].map((item, index) => (
            <div key={index} className="p-5 text-center border border-slate-200 rounded-lg bg-slate-50">
              <div className={`text-3xl font-extrabold ${item.color} mb-2`}>{item.num}</div>
              <div className="text-xs font-medium text-slate-600 uppercase tracking-wider">{item.txt}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lista de Prompts */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Otros Prompts Utilizados</h2>
        <ul className="space-y-3">
          {[
            "Configurar zona DNS en el servidor",
            "Crear unidades organizativas (OU)",
            "Crear usuarios y grupos de seguridad",
            "Unir cliente Windows 10 al dominio",
            "Crear GPO para mapeo de unidades de red"
          ].map((item, index) => (
            <li key={index} className="flex items-center space-x-3 p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <span className="text-sm text-slate-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Prompts
