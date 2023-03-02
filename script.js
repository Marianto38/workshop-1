// Calcular la edad de una persona
Algoritmo calculo_de_edades
	Escribir "Por favor escribe tu ano de nacimiento!"
	Leer año_de_nacimiento
	edad<- 2023 - año_de_nacimiento
	Escribir edad
FinAlgoritmo


// Calcular el área de un triángulo
Algoritmo calculo_de_tringulo
	Escribir "Por favor escribe la base del triangulo"
	Leer base
	Escribir "Por favor escribe la altura del triangulo"
	Leer altura
	area<- base * altura/2
	Escribir "El area del triangulo es:"  area
FinAlgoritmo


// Escribir un programa que realice la suma de 4 números enteros
Algoritmo suma_de_cuatro_numeros
	Escribir "Introuce un numero entero"
	Leer numero_1
	Escribir "Introuce un numero entero"
	Leer numero_2
	Escribir "Introuce un numero entero"
	Leer numero_3
	Escribir "Introuce un numero entero"
	Leer numero_4
// Escribir un programa que calcule la raíz cuadrada de 500
Algoritmo cuadrado_de_500

	cuadrado<-500*500
	Escribir cuadrado

FinAlgoritmo
// Escribir un programa que calcule el perímetro y área de un rectángulo
Algoritmo perimetro_y_area_rectangulo

	Escribir "introduce la base del rectangulo"
	Leer base
	Escribir "introduce la altura del rectangulo"
	Leer altura

	perimetro<-base*2+altura*2
	area<-base*altura

	Escribir "el perimetro de su rectangulo es:"  perimetro " y su area es:" area

FinAlgoritmo


// Escribir un programa que lea de teclado la marca y modelo de un auto e imprima en pantalla el modelo y la marca (orden invertido a lo que se lee).
Algoritmo auto
	Escribir "Escriba la marca de su auto"
	Leer marca
	Escribir "Escriba el modelo de su auto"
	Leer modelo
	Escribir "El modelo de su auto es:" modelo " y la marca es:" marca
FinAlgoritmo

// Escribir un programa que calcule el porcentaje de una cantidad
Algoritmo calcular_porcentaje
	Escribir "Introduzca cantidad"
	Leer cantidad
	Escribir "Introduzca porcentaje que desea aplicar"
	Leer porcentaje
	calculo<-cantidad * porcentaje/100
	Escribir "el " porcentaje "% " " de " cantidad " es: " calculo
FinAlgoritmo

// Escribir un programa que lea 5 precios de 5 productos y calcule el subtotal de los productos, el IVA y el total Neto.
Algoritmo calculo_de_productos
	Escribir "Por favor indicar el precio del producto # 1"
	Leer producto_1
	Escribir "Por favor indicar el precio del producto # 2"
	Leer producto_2
	Escribir "Por favor indicar el precio del producto # 3"
	Leer producto_3
	Escribir "Por favor indicar el precio del producto # 4"
	Leer producto_4
	Escribir "Por favor indicar el precio del producto # 5"
	Leer producto_5
	subtotal<-producto_1 + producto_2 + producto_3 + producto_4 + producto_5
	iva<-subtotal * 0.19
	total_neto<-subtotal + iva
	Escribir "El total neto de sus productos es: " total_neto
FinAlgoritmo
