# Programa: gestion_estudiantes.py
# Descripción:
# Permite a un profesor gestionar una lista de estudiantes con sus calificaciones.
# Usa un diccionario para almacenar los datos en formato {nombre: calificación}.

# Inicializamos el diccionario vacío
estudiantes = {}

while True:
    print("\n=== Menú de Gestión de Estudiantes ===")
    print("1. Agregar estudiante")
    print("2. Mostrar lista de estudiantes")
    print("3. Buscar estudiante por nombre")
    print("4. Eliminar estudiante")
    print("5. Salir")

    opcion = input("Seleccione una opción (1-5): ")

    if opcion == "1":
        # Agregar un nuevo estudiante
        nombre = input("Ingrese el nombre del estudiante: ").strip()
        calificacion = float(input("Ingrese la calificación del estudiante: "))
        estudiantes[nombre] = calificacion
        print(f"✅ Estudiante '{nombre}' agregado con calificación {calificacion}.")

    elif opcion == "2":
        # Mostrar la lista de estudiantes
        if estudiantes:
            print("\n📋 Lista de estudiantes:")
            for nombre, calificacion in estudiantes.items():
                print(f"- {nombre}: {calificacion}")
        else:
            print("No hay estudiantes registrados.")

    elif opcion == "3":
        # Buscar estudiante
        nombre_buscar = input("Ingrese el nombre del estudiante a buscar: ").strip()
        if nombre_buscar in estudiantes:
            print(f"🎯 {nombre_buscar} tiene una calificación de {estudiantes[nombre_buscar]}.")
        else:
            print(f"⚠️ El estudiante '{nombre_buscar}' no se encuentra en la lista.")

    elif opcion == "4":
        # Eliminar estudiante
        nombre_eliminar = input("Ingrese el nombre del estudiante a eliminar: ").strip()
        if nombre_eliminar in estudiantes:
            del estudiantes[nombre_eliminar]
            print(f"🗑️ Estudiante '{nombre_eliminar}' eliminado correctamente.")
        else:
            print(f"⚠️ El estudiante '{nombre_eliminar}' no se encuentra en la lista.")

    elif opcion == "5":
        print("👋 Saliendo del programa...")
        break

    else:
        print("Opción no válida. Intente nuevamente.")
