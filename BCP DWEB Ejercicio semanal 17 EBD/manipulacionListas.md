# Diferencias de Implementación en Python — Manipulación de Listas

Este ejercicio demuestra cómo Python facilita el manejo de listas gracias a su sintaxis clara y sus potentes funciones incorporadas.

---

## Creación y conversión de listas
En Python, se puede convertir fácilmente una cadena en una lista usando listas por comprensión y el método `split()`:
```python
lista_numeros = [int(x.strip()) for x in entrada.split(",")]

# Ejemplo de ejecucion

Ingrese una lista de números enteros separados por comas: 3, 8, 5, 10, 2

La lista ingresada es: [3, 8, 5, 10, 2]
Longitud de la lista: 5
La suma de todos los números es: 28

Ingrese un número para verificar si está en la lista: 10
El número 10 está en la lista, en el índice 3.

Se eliminó el último elemento (2).
Lista actualizada: [3, 8, 5, 10]