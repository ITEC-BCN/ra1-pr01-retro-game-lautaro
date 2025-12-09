# JUEGO ALMA (Lautaro)
## Objetivo del juego
El juego se compone de dos escenarios los cuales tienen diferentes objetivos, el objetivo del escenario 1 es llegar hasta el cofre ubicado al final del mapa.</br>
El objetivo del escenario 2 es recolectar todas las esferas hasta que la barra de arriba llegue a cero.

## Entorno de desarrollo
* Mmake code arcade https://arcade.makecode.com/ (enlace a make code arcade)
* Python

## Sprites
**Personaje principal: Es el boton que se utiliza para seleccionar un mapa y para que el personaje salte**</br>
<img src="https://github.com/lautarorodriguez919/imagenes/blob/main/makecodearcade/personaje.png" alt="Mi imagen" style="width: 50px; height: auto;">

**Mano seleccion: Es la mano con la que se seleccionan las opciones**</br>
<img src="https://github.com/lautarorodriguez919/imagenes/blob/main/makecodearcade/seleccion-mano.png" alt="Mi imagen" style="width: 50px; height: auto;">

**Enemigo 1: se trata de un piedra que al hacer colision con el personaje le resta 1 vida**</br>
<img src="https://github.com/lautarorodriguez919/imagenes/blob/main/makecodearcade/enemigo-1.png" alt="Mi imagen" style="width: 50px; height: auto;">

**Enemigo 2: Conjunto de fantasmas que al chocar en la posicion x quitan 1 punto de vida**</br>
<img src="https://github.com/lautarorodriguez919/imagenes/blob/main/makecodearcade/enemigo-2.png" alt="Mi imagen" style="width: 50px; height: auto;">

### Controles
* **BOTON A: Es el boton que se utiliza para seleccionar un mapa y para que el personaje salte**</br>
* **BOTON B: Es el boton que se utiliza para activar la habilidad de disparo**</br>
* **Cursores: Son los botones de direccion que indicaran al usuario por donde moverse**</br>
<table>
  <tr>
   <td>
      Controles
    </td>
    <td>
      Teclado
    </td>
  </tr>
  <tr>
   <td>
      BOTON A
    </td>
   <td>
      Barra espaciadora
    </td>
  </tr>
   <tr>
   <td>
      BOTON B
    </td>
   <td>
      Tecla z
    </td>
  </tr>
 </tr>
   <tr>
   <td>
      Cursores
    </td>
   <td>
      W(arriba), S(abajo), D(derecha), A(izquierda),
    </td>
  </tr>
</table>

![cursor](https://github.com/lautarorodriguez919/imagenes/blob/main/makecodearcade/direccion.png) ![Botones](https://github.com/lautarorodriguez919/imagenes/blob/main/makecodearcade/botones.png)

## Funciones Principales
### Crear menu inicial
<table>
<tr>
   <td>
    Llama a destruirescenario para limpiar. Inicia la música (play song). Crea el botonbannerinicio (tipo colisionBoton). Fija la imagen de fondo. Crea la mano_seleccion (tipo manoSeleccion) y le asigna el movimiento de los botones (mover mano_seleccion con botones).
    </td>
  </tr>
   <tr>
   <td>
    <img src="https://github.com/lautarorodriguez919/imagenes/blob/main/makecodearcade/menu-inicial.png" alt="Mi imagen" style="width: 400px; height: auto;">
    </td>
  </tr>
</table>

### Seleccionar partida
<table>
<tr>
   <td>
   Llama a destruirescenario para limpiar el menú anterior. Inicia la música. Crea los botones de selección de mapa: botonseleccionjuego, botonseleccionjuego2, botonseleccionjuego3 (todos tipo colisionBoton). Vuelve a crear y mover la mano_seleccion para interactuar con estos nuevos botones. Fija una nueva imagen de fondo para este menú.
    </td>
  </tr>
   <tr>
   <td>
    <img src="https://github.com/lautarorodriguez919/imagenes/blob/main/makecodearcade/menu-seleccion.png" alt="Mi imagen" style="width: 400px; height: auto;">
    </td>
  </tr>
</table>

### Destruir escenario
<table>
<tr>
   <td>
    Detiene todos los sonidos. Borra el mapa de teselas y la imagen de fondo. Destruye todos los objetos de tipo colisionBoton, Player, y manoSeleccion.
    </td>
  </tr>
   <tr>
   <td>
    <img src="https://github.com/lautarorodriguez919/imagenes/blob/main/makecodearcade/destruir-escenario.png" alt="Mi imagen" style="width: 400px; height: auto;">
    </td>
  </tr>
</table>

### Movimiento jugador
<table>
<tr>
   <td>
   Fija el sprite main (tipo Player). Le asigna el movimiento de los botones (mover main con botones). Fija la cámara para que siga a main (cámara sigue al objeto main). Fija la gravedad (ay a 300). Fija las vidas iniciales a 3. Llama a animacion-personaje.
    </td>
  </tr>
   <tr>
   <td>
    <img src="https://github.com/lautarorodriguez919/imagenes/blob/main/makecodearcade/movimiento-jugador.png" alt="Mi imagen" style="width: 400px; height: auto;">
    </td>
  </tr>
</table>

### Generar enemigos
<table>
<tr>
   <td>
    Fija un sprite piedra del tipo Enemy. Le asigna una velocidad inicial (vx 50 vy 100). Lo posiciona en una coordenada X fija y una coordenada Y aleatoria.
    </td>
  </tr>
   <tr>
   <td>
    <img src="https://github.com/lautarorodriguez919/imagenes/blob/main/makecodearcade/generar-enemigos.png" alt="Mi imagen" style="width: 400px; height: auto;">
    </td>
  </tr>
</table>


### Mover obstaculos
<table>
<tr>
   <td>
   Itera sobre todas las posiciones de tejas marcadas con un icono de ladrillo (asociado a conversion-fantasma). En cada posición, crea un sprite fantasma del tipo Fantasma. Fija al fantasma para que siga al main con una velocidad de 50.
    </td>
  </tr>
   <tr>
   <td>
    <img src="https://github.com/lautarorodriguez919/imagenes/blob/main/makecodearcade/mover-obstaculos.png" alt="Mi imagen" style="width: 400px; height: auto;">
    </td>
  </tr>
</table>

## Mapas
* **Tilemap1: Tile map del escenario 1**</br>
![mapa1](https://github.com/lautarorodriguez919/imagenes/blob/main/makecodearcade/escenario-tilemap1.png)

* **Tilemap2: Tile map del escenario 2**</br>
![mapa2](https://github.com/lautarorodriguez919/imagenes/blob/main/makecodearcade/escenario-tilemap2.png)

## Demo
[Ver Demo del Juego (MP4)](https://github.com/lautarorodriguez919/imagenes/blob/main/makecodearcade/Grabaci%C3%B3n%202025-12-09%20125919.mp4)
