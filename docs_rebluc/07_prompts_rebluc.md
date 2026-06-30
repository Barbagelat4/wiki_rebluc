# 07 - Bitácora de Prompts con IA

## Prompts Utilizados en el Desarrollo

### Prompt 1: Componente de Inicio
```
Crea el componente React src/components/Inicio.jsx para la portada de la wiki. 
Debe mostrar el objetivo del laboratorio, la topología de red y los criterios a desarrollar. 
Usa Tailwind CSS con una tarjeta principal, ícono de Server de Lucide React, 
y diseño profesional con colores corporativos.
```

**Resultado**: Componente de portada con información general del laboratorio.

### Prompt 2: Componente de Instalación
```
Crea el componente src/components/Instalacion.jsx para el criterio 2.1.1. 
Usa como base el contenido de docs_rebluc/02_instalacion_rebluc.md. 
Incluye configuración de red, firewall y proceso de instalación. 
Usa Tailwind CSS con tarjetas organizadas y ícono Settings de Lucide.
```

**Resultado**: Componente detallado con la configuración básica del servidor.

### Prompt 3: Componente Active Directory
```
Crea el componente src/components/ActiveDirectory.jsx para el criterio 2.1.2.
Basado en docs_rebluc/03_active_directory_rebluc.md, debe mostrar:
- Configuración del dominio
- Estructura de OUs
- Usuarios y grupos creados
Usa ícono Network de Lucide y diseño en grid con Tailwind.
```

**Resultado**: Componente con la estructura completa de Active Directory.

### Prompt 4: App.jsx Principal
```
Modifica src/App.jsx para crear la navegación principal de la wiki.
Debe incluir:
- Header con título "Wiki Windows Server"
- Navegación entre componentes
- Footer con información del curso
Usa estado React para cambiar entre secciones y Tailwind para el diseño.
```

**Resultado**: Aplicación principal con navegación completa.

### Prompt 5: Estilos Globales
```
Configura src/index.css con Tailwind CSS y variables CSS personalizadas.
Incluye:
- Importación de Tailwind
- Paleta de colores corporativos
- Tipografía profesional
- Variables para tema oscuro/claro
```

**Resultado**: Estilos globales optimizados para la wiki.

## Correcciones y Refinamientos

### Error Solucionado 1
**Problema**: Error de importación de componentes
**Solución**: Verificar rutas relativas y exportaciones por defecto

### Error Solucionado 2  
**Problema**: Estilos Tailwind no aplicándose
**Solución**: Reiniciar servidor de desarrollo y verificar configuración en vite.config.js

### Error Solucionado 3
**Problema**: Iconos Lucide no renderizando
**Solución**: Verificar importaciones específicas y versión del paquete

## Lecciones Aprendidas
1. Importancia de prompts específicos y detallados
2. Necesidad de verificar configuración antes de generar componentes
3. Valor del contexto del proyecto para la IA
4. Iteración y refinamiento en el proceso de desarrollo