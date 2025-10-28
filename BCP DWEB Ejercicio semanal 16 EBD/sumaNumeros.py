# Ejercicio 2
# Introducción a la programación
# Desarrolle un programa en python que calcule la suma de los
# números enteros del 1 al 10, es decir, la suma de 1 + 2 + 3 + ... + 10.
# Elabora un archivo .md el cual explique brevemente las diferencias
# de implementación al usar este lenguaje comparado con los
# aprendidos anteriormente

# Inicialización de la variable para acumular la suma
suma = 0

# Bucle para recorrer los números del 1 al 10
for numero in range(1, 11):
    suma += numero  # Se va acumulando la suma

# Muestra del resultado
print(f"La suma de los números del 1 al 10 es: {suma}")