# 06 - Políticas de Grupo (GPO) (2.1.5)

## Políticas de Grupo Implementadas

### GPO 1: Política de Seguridad de Usuarios
- **Nombre**: PolSecUsuarios
- **Vinculada a**: OU Departamentos
- **Configuraciones**:
  - Longitud mínima de contraseña: 8 caracteres
  - Complejidad de contraseña: Habilitada
  - Bloqueo de cuenta: 3 intentos fallidos
  - Duración de bloqueo: 30 minutos

### GPO 2: Restricciones de Software
- **Nombre**: RestriccionesSoftware
- **Vinculada a**: OU Departamentos/Ventas
- **Configuraciones**:
  - Bloqueo del Panel de Control
  - Restricción de instalación de software
  - Deshabilitar acceso al Editor del Registro
  - Ocultar unidades específicas

### GPO 3: Configuración de Escritorio
- **Nombre**: ConfigEscritorio
- **Vinculada a**: OU Equipos/Estaciones de Trabajo
- **Configuraciones**:
  - Fondo de escritorio corporativo
  - Protector de pantalla obligatorio (15 min)
  - Ocultar iconos del escritorio
  - Deshabilitar cambio de tema

### GPO 4: Mapeo de Unidades de Red
- **Nombre**: UnidadesRed
- **Vinculada a**: Dominio (empresa.local)
- **Configuraciones**:
  - Mapeo de unidad H: a \\SRV-DC01\Usuarios\%username%
  - Mapeo de unidad S: a \\SRV-DC01\Compartido
  - Reconexión automática al inicio

### Proceso de Implementación
1. Creación de GPOs en Group Policy Management
2. Configuración de políticas específicas
3. Vinculación a OUs correspondientes
4. Orden de precedencia y filtros de seguridad
5. Forzar actualización en clientes: `gpupdate /force`

### Verificación de Aplicación
- **rsop.msc**: Conjunto resultante de políticas
- **gpresult /r**: Políticas aplicadas por usuario/equipo
- **Event Viewer**: Logs de Group Policy

## Captura
Referencia: img_rebluc/gpo.png