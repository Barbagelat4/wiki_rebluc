import { Sparkles, Bot, Brain, Lightbulb, CheckCircle2 } from 'lucide-react'

function Prompts() {
  return (
    <div className="space-y-8">
      {/* Header de Sección */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl shadow-lg">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Bitácora de Prompts de IA</h1>
            <p className="text-gray-500 text-lg mt-1">Registro de interacciones con inteligencia artificial</p>
          </div>
        </div>
      </div>

      {/* Sección de Prompts */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4 pb-3 border-b border-gray-200">
            <div className="bg-blue-100 p-3 rounded-lg mr-3">
              <Bot className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold">Prompt 1: Configuración de Red</h2>
          </div>
          <div className="bg-gray-50 p-4 rounded-md mb-4 border border-gray-200">
            <p className="font-mono text-sm text-gray-600 leading-relaxed">
              "¿Cómo configurar una IP estática en Windows Server 2022 para un controlador de dominio?"
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm">
              <strong className="text-gray-900">Respuesta clave:</strong> Utilizar el Panel de Control → Redes e Internet → Centro de redes y recursos compartidos.
            </p>
            <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-md">
              <Lightbulb className="h-5 w-5 text-emerald-600 flex-shrink-0" />
              <span className="text-sm">Resultado: Configuración exitosa de IP 192.168.10.10</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4 pb-3 border-b border-gray-200">
            <div className="bg-purple-100 p-3 rounded-lg mr-3">
              <Brain className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-bold">Prompt 2: Active Directory</h2>
          </div>
          <div className="bg-gray-50 p-4 rounded-md mb-4 border border-gray-200">
            <p className="font-mono text-sm text-gray-600 leading-relaxed">
              "Guía paso a paso para promover un servidor a controlador de dominio con AD DS"
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm">
              <strong className="text-gray-900">Respuesta clave:</strong> Instalar rol AD DS, luego usar la opción "Promover este servidor a controlador de dominio".
            </p>
            <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-md">
              <Lightbulb className="h-5 w-5 text-emerald-600 flex-shrink-0" />
              <span className="text-sm">Resultado: Dominio rebolledo.local creado exitosamente</span>
            </div>
          </div>
        </div>
      </div>

      {/* Resumen de Interacciones */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Resumen de Interacciones</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl border text-center bg-blue-50 border-blue-200 hover:scale-105 transition-transform">
            <div className="text-4xl font-black text-blue-600 mb-2">8</div>
            <div className="text-base font-semibold text-gray-900">Prompts totales</div>
          </div>
          <div className="p-5 rounded-xl border text-center bg-emerald-50 border-emerald-200 hover:scale-105 transition-transform">
            <div className="text-4xl font-black text-emerald-600 mb-2">6</div>
            <div className="text-base font-semibold text-gray-900">Éxitos</div>
          </div>
          <div className="p-5 rounded-xl border text-center bg-yellow-50 border-yellow-200 hover:scale-105 transition-transform">
            <div className="text-4xl font-black text-yellow-600 mb-2">2</div>
            <div className="text-base font-semibold text-gray-900">Ajustes necesarios</div>
          </div>
          <div className="p-5 rounded-xl border text-center bg-purple-50 border-purple-200 hover:scale-105 transition-transform">
            <div className="text-4xl font-black text-purple-600 mb-2">4h</div>
            <div className="text-base font-semibold text-gray-900">Tiempo total</div>
          </div>
        </div>
      </div>

      {/* Lista de Prompts Adicionales */}
      <div className="border rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-gray-200">
          Otros Prompts Utilizados
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 rounded-lg border bg-emerald-50 border-emerald-200 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0" />
              <span className="text-base font-semibold text-gray-900">Prompt 3: Configurar DNS Server</span>
            </div>
            <span className="text-sm font-bold bg-emerald-200 text-emerald-800 px-4 py-1 rounded-full">Éxito</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg border bg-emerald-50 border-emerald-200 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0" />
              <span className="text-base font-semibold text-gray-900">Prompt 4: Crear OU y Usuarios en AD</span>
            </div>
            <span className="text-sm font-bold bg-emerald-200 text-emerald-800 px-4 py-1 rounded-full">Éxito</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg border bg-emerald-50 border-emerald-200 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0" />
              <span className="text-base font-semibold text-gray-900">Prompt 5: Configurar DHCP Scope</span>
            </div>
            <span className="text-sm font-bold bg-emerald-200 text-emerald-800 px-4 py-1 rounded-full">Éxito</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg border bg-emerald-50 border-emerald-200 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0" />
              <span className="text-base font-semibold text-gray-900">Prompt 6: Unir Cliente Windows 10 al Dominio</span>
            </div>
            <span className="text-sm font-bold bg-emerald-200 text-emerald-800 px-4 py-1 rounded-full">Éxito</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg border bg-yellow-50 border-yellow-200 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-600 flex-shrink-0" />
              <span className="text-base font-semibold text-gray-900">Prompt 7: Crear GPO de Seguridad</span>
            </div>
            <span className="text-sm font-bold bg-yellow-200 text-yellow-800 px-4 py-1 rounded-full">Ajuste necesario</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg border bg-emerald-50 border-emerald-200 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0" />
              <span className="text-base font-semibold text-gray-900">Prompt 8: Mapear Unidades de Red via GPO</span>
            </div>
            <span className="text-sm font-bold bg-emerald-200 text-emerald-800 px-4 py-1 rounded-full">Éxito</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prompts
