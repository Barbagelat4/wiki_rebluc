# 05 - Servicios de Red DNS y DHCP (2.1.4)

## Configuración del Servicio DNS

### Zonas DNS Configuradas
- **Zona directa**: empresa.local
- **Zona inversa**: 10.168.192.in-addr.arpa
- **Reenviadores**: 8.8.8.8, 1.1.1.1

### Registros DNS Creados
- **A**: SRV-DC01.empresa.local → 192.168.10.10
- **A**: WIN10-CLIENT.empresa.local → 192.168.10.20
- **PTR**: Registros de resolución inversa

## Configuración del Servicio DHCP

### Ámbito DHCP Configurado
- **Nombre del ámbito**: Red-Empresa
- **Rango de IPs**: 192.168.10.50 - 192.168.10.100
- **Máscara de subred**: 255.255.255.0
- **Puerta de enlace**: 192.168.10.1
- **Servidores DNS**: 192.168.10.10
- **Duración de concesión**: 8 días

### Exclusiones
- 192.168.10.1 - 192.168.10.49 (reservadas)
- 192.168.10.101 - 192.168.10.254 (reservadas)

### Reservas DHCP
- **SRV-DC01**: 00:0C:29:XX:XX:XX → 192.168.10.10
- **WIN10-CLIENT**: 00:0C:29:YY:YY:YY → 192.168.10.20

### Proceso de Configuración
1. Instalación del rol DHCP
2. Autorización del servidor DHCP en AD
3. Creación y configuración del ámbito
4. Activación del ámbito
5. Configuración de opciones globales
6. Pruebas de asignación automática

## Captura
Referencia: img_rebluc/servicios_red.png