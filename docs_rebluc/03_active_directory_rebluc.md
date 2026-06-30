# 03 - Active Directory (2.1.2)

## Promoción a Controlador de Dominio

### Configuración del Dominio
- **Nombre del dominio**: empresa.local
- **Nivel funcional**: Windows Server 2019
- **Controlador de dominio**: SRV-DC01.empresa.local

### Unidades Organizacionales (OU) Creadas
1. **Departamentos**
   - IT
   - Ventas
   - Recursos Humanos
   - Contabilidad

2. **Equipos**
   - Servidores
   - Estaciones de Trabajo

### Usuarios Creados
- **Administrador de Dominio**: AdminDominio
- **Usuario IT**: UsuarioIT
- **Usuario Ventas**: UsuarioVentas
- **Usuario RRHH**: UsuarioRRHH

### Grupos de Seguridad
- **GrupoIT**: Administradores locales
- **GrupoVentas**: Usuarios del dominio
- **GrupoRRHH**: Permisos especiales de carpetas

### Proceso Realizado
1. Instalación del rol AD DS
2. Promoción del servidor a DC
3. Creación de la estructura de OUs
4. Creación de usuarios y grupos
5. Asignación de permisos y membresías

## Captura
Referencia: img_rebluc/active_directory.png