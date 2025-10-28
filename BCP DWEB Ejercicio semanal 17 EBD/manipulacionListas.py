# Programa: manipulacion_listas.py
# Descripción:
# Solicita al usuario una lista de números enteros separados por comas y realiza varias operaciones con ella.

# Paso 1: Solicitar al usuario una lista de números separados por comas
entrada = input("Ingrese una lista de números enteros separados por comas: ")

# Convertir la cadena en una lista de enteros
lista_numeros = [int(x.strip()) for x in entrada.split(",")]

# Paso 2: Mostrar la longitud de la lista
print(f"\nLa lista ingresada es: {lista_numeros}")
print(f"Longitud de la lista: {len(lista_numeros)}")

# Paso 3: Calcular y mostrar la suma de todos los números
suma_total = sum(lista_numeros)
print(f"La suma de todos los números es: {suma_total}")

# Paso 4: Verificar si un número específico está presente en la lista
numero_buscar = int(input("\nIngrese un número para verificar si está en la lista: "))

if numero_buscar in lista_numeros:
    indice = lista_numeros.index(numero_buscar)
    print(f"El número {numero_buscar} está en la lista, en el índice {indice}.")
else:
    print(f"El número {numero_buscar} no se encuentra en la lista.")

# Paso 5: Eliminar el último elemento y mostrar la lista actualizada
ultimo = lista_numeros.pop()
print(f"\nSe eliminó el último elemento ({ultimo}).")
print(f"Lista actualizada: {lista_numeros}")