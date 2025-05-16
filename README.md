# gestion-empleados-frontend

En este apartado dejo los pasos para levantar el proyecto en SpringBoot:

1- Se clona el repositorio en GitHub: `git clone https://github.com/Cpamela19/gestion-empleados-frontend.git`

2- Se dirigen al proyecto clonado: `cd gestion-empleados-frontend`

3- Tienes que crear la red con Docker para que puedan hacer conexion al backend: `docker network create app-network`

4- Una vez creada el network ahora debes constuir la aplicacion con Docker con este comando: `docker build -t app-frontend .`

5- Y luego lo mandas a correr: `docker run -d --name angular-frontend --network app-network -p 4200:4200 app-frontend`

Nota: No olvides de configurar el mismo network para el backend para que se puedan conectar