# 04 - Cliente en el Dominio (2.1.3)

## Configuración del Cliente WIN10-CLIENT

### Configuración de Red del Cliente
- **Nombre del equipo**: WIN10-CLIENT
- **Dirección IP**: 192.168.10.20
- **Máscara de subred**: 255.255.255.0
- **Gateway**: 192.168.10.1
- **DNS primario**: 192.168.10.10 (SRV-DC01)

### Proceso de Unión al Dominio
1. **Preparación del cliente**
   - Configuración de IP estática
   - Configuración de DNS apuntando al DC
   - Verificación de conectividad

2. **Unión al dominio**
   - Cambio de grupo de trabajo a dominio
   - Dominio: empresa.local
   - Credenciales: AdminDominio

3. **Verificación post-unión**
   - Reinicio del equipo cliente
   - Inicio de sesión con usuario del dominio
   - Verificación de políticas aplicadas

### Usuarios que Pueden Iniciar Sesión
- AdminDominio (administrador)
- UsuarioIT
- UsuarioVentas
- UsuarioRRHH

### Resolución de Problemas Comunes
- Verificar conectividad de red
- Confirmar configuración de DNS
- Validar credenciales de administrador de dominio

## Captura
Referencia: img_rebluc/cliente_dominio.png