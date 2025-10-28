# Ejercicio 1
# Introducción a la programación
# Elabore un programa en python que posibilite la lectura de dos
# valores diferentes, identifique cuál de los dos valores es el mayor y lo
# muestre.
# Elabora un archivo .md el cual explique brevemente las diferencias
# de implementación al usar este lenguaje comparado con los
# aprendidos anteriormente.

# Lectura de valores
valor1 = float(input("Ingrese el primer valor: "))
valor2 = float(input("Ingrese el segundo valor: "))

# Verificación de que sean diferentes
if valor1 == valor2:
    print("Los valores son iguales, deben ser diferentes.")
else:
    # Comparación y resultado
    if valor1 > valor2:
        print(f"El mayor es: {valor1}")
    else:
        print(f"El mayor es: {valor2}")