# Ejercicio Semanal 2: Gestión de Estudiantes con Diccionarios Introducción a la programación Descripción: Crea un programa en Python que
# permita a un profesor gestionar una lista de estudiantes. El programa debe ofrecer las siguientes opciones: Agregar un nuevo estudiante 
# con su nombre y su calificación. Mostrar la lista de estudiantes junto con sus calificaciones. Buscar un estudiante por nombre y 
# mostrar su calificación. Eliminar a un estudiante de la lista

# Diferencias de Implementación en Python — Gestión de Estudiantes con Diccionarios

Este ejercicio utiliza diccionarios (`dict`) para almacenar y gestionar información sobre estudiantes y sus calificaciones.  
Python simplifica enormemente este tipo de tareas gracias a su sintaxis clara y sus estructuras de datos integradas.

---

## Estructura de datos: Diccionario
Un diccionario en Python permite almacenar pares clave: valor, lo cual es ideal para asociar un nombre con una calificación:
```python
estudiantes = {"Ana": 9.5, "Luis": 8.0}



## Ejemplo:
=== Menú de Gestión de Estudiantes ===
1. Agregar estudiante
2. Mostrar lista de estudiantes
3. Buscar estudiante por nombre
4. Eliminar estudiante
5. Salir
Seleccione una opción (1-5): 1
Ingrese el nombre del estudiante: Ana
Ingrese la calificación del estudiante: 9.5
✅ Estudiante 'Ana' agregado con calificación 9.5.

Seleccione una opción (1-5): 2
📋 Lista de estudiantes:
- Ana: 9.5

Seleccione una opción (1-5): 3
Ingrese el nombre del estudiante a buscar: Ana
🎯 Ana tiene una calificación de 9.5.

Seleccione una opción (1-5): 4
Ingrese el nombre del estudiante a eliminar: Ana
🗑️ Estudiante 'Ana' eliminado correctamente.

Seleccione una opción (1-5): 5
👋 Saliendo del programa...