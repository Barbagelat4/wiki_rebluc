import { Settings, Network, Shield, CheckCircle } from 'lucide-react'

function Instalacion() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Settings className="h-8 w-8 text-blue-600 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">2.1.1 — Instalación y Configuración Básica</h1>
            <p className="text-gray-600">Configuración inicial del servidor Windows Server</p>
          </div>
        </div>
      </div>

      {/* Configuración del Servidor */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Configuración del Servidor SRV-DC01</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Network className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-blue-900">Configuración de Red</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Nombre del equipo:</span>
                <span className="text-blue-800 font-mono">SRV-DC01</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Dirección IP:</span>
                <span className="text-blue-800 font-mono">192.168.10.10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Máscara de subred:</span>
                <span className="text-blue-800 font-mono">255.255.255.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Gateway:</span>
                <span className="text-blue-800 font-mono">192.168.10.1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">DNS:</span>
                <span className="text-blue-800 font-mono">127.0.0.1</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Shield className="h-5 w-5 text-green-600 mr-2" />
              <h3 className="font-semibold text-green-900">Configuración de Firewall</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Estado:</span>
                <span className="text-green-800 font-semibold">Activado</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Perfil Dominio:</span>
                <span className="text-green-800">Configurado</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Perfil Privado:</span>
                <span className="text-green-800">Configurado</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Perfil Público:</span>
                <span className="text-green-800">Configurado</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proceso de Instalación */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Proceso de Instalación</h2>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">1. Instalación de Windows Server 2019/2022</h3>
              <p className="text-sm text-gray-600 mt-1">
                Instalación limpia del sistema operativo con configuración estándar para servidor.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">2. Configuración inicial del sistema</h3>
              <p className="text-sm text-gray-600 mt-1">
                Configuración de zona horaria, idioma del sistema y actualizaciones básicas.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">3. Asignación de IP estática</h3>
              <p className="text-sm text-gray-600 mt-1">
                Configuración de la dirección IP fija 192.168.10.10 para garantizar la estabilidad del servidor.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">4. Configuración de nombre del servidor</h3>
              <p className="text-sm text-gray-600 mt-1">
                Cambio del nombre del equipo a SRV-DC01 siguiendo convenciones de nomenclatura empresarial.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">5. Activación del firewall con reglas básicas</h3>
              <p className="text-sm text-gray-600 mt-1">
                Configuración de Windows Defender Firewall para todos los perfiles de red.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Verificación */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Verificación del Estado</h2>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700 mb-3">
            Una vez completada la configuración básica, se verificaron los siguientes aspectos:
          </p>
          
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              Conectividad de red funcionando correctamente
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              Resolución de nombres DNS básica operativa
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              Firewall activo con reglas predeterminadas
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              Sistema preparado para roles adicionales
            </li>
          </ul>
          
          <div className="mt-4 p-3 bg-blue-50 rounded border-l-4 border-blue-500">
            <p className="text-sm text-blue-800">
              <strong>Estado:</strong> El servidor queda listo para la promoción a controlador de dominio en el siguiente paso.
            </p>
          </div>
        </div>
      </div>

      {/* Captura */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Evidencia Visual</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700 mb-4">
            Captura de pantalla que muestra la configuración completa del servidor SRV-DC01:
          </p>
          
          {/* Placeholder para la imagen - cuando agregues la imagen, reemplaza este div */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white">
            <div className="text-gray-400 mb-2">
              <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-sm text-gray-500">
              Imagen: instalacion.png
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Configuración de red del servidor, nombre del equipo y estado del firewall
            </p>
          </div>
          
          <p className="text-xs text-gray-500 mt-3">
            <strong>Ubicación:</strong> docs_rebluc/img_rebluc/instalacion.png
          </p>
        </div>
      </div>
    </div>
  )
}

export default Instalacion