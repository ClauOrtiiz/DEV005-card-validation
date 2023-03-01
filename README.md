# Tarjeta de crédito válida SUPERCAT

## Índice

* [1. Introducción](#1-introducción)
* [2. Super Cat](#2-super-cat)
* [3. Usuarios y sus objetivos](#3-usuarios-y-sus-objetivos)
* [4. Detalles del proyecto](#4-detalles-del-proyecto)

***

## 1. Introducción

En la actualidad, las mascotas son consideradas como un integrante más de familias, por tal motivo se hace indispensable su cuidado y alimentación. 

El proyecto presentado abarca la creación de una tienda de accesorios y comida para gatos online, con el fin de suplir las necesidades de los dueños facilitando la adquisición de lo nombrado, ademas que reducirá el tiempo invertido en esta actividad y obteniendo una seguridad al utilizar la página web de Súper Cat. 

## 2. Super Cat

SuperCat te ofrece las mejores marcas en comida, accesorios y arena para tus gatos.

Empresa en crecimiento, por lo cual está constantemente agregando marcas y categorías de productos. También, haciendo mejoras continuas a la plataforma de pedidos. 

El objetivo es hacer más fácil el día a día con tus gatos, quitándote las preocupaciones y dándote más tiempo para disfrutar con tu engreído/a.

## 3. Usuarios y sus objetivos

Personas de 18 a 65 años de edad que residan en Perú, que actualmente recurren a medios digitales para adquirir sus productos y accesorios para sus gatos.

Objetivos resueltos:

* Compra fácilmente desde la comodidad de tu hogar. (Recíbelo en la puerta de su hogar)
* Regístrate con tu usuario para agilizar las compras.
* Variedad de productos en la web.

## 4. Detalles del proyecto

La pantalla mostrada, es la de Validación de la tarjeta del Usuario al momento de registar y crear su usuario en Super Cat.

* Registra los datos de tu tarjeta que se afiliara a tu usuario.
* Tiene una interfaz que permite a la usuaria saber si la tarjeta es valido
  y ocultar el numero hasta las 4 ultimos digitos.

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](./AlgoritmoLuhn.png)