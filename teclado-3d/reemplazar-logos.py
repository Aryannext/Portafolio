# -*- coding: utf-8 -*-
"""
Cambia los logos de siete teclas dentro de la escena 3D del teclado.

    python teclado-3d/reemplazar-logos.py

Por qué existe
--------------
La escena de Spline trae 24 tecnologías horneadas en el archivo. No se pueden
crear teclas nuevas desde código: haría falta el editor de Spline. Pero siete de
esas 24 son tecnologías que no uso, y sus logos son PNG normales incrustados en
el archivo. Así que se reaprovechan: se les cambia la imagen y, en
`src/data/constants.ts`, la etiqueta y la descripción.

Cómo está guardado el archivo
-----------------------------
El `.spline` es MessagePack. Cada PNG va precedido de una cabecera `bin16`
(el byte 0xc5 y dos bytes con el largo). MessagePack es un flujo lineal —los
mapas y arreglos se cuentan por elementos, no por bytes—, así que se puede meter
una imagen de otro tamaño con solo reescribir esos tres bytes. No hay offsets
absolutos que queden desfasados.

Los 25 PNG aparecen en el mismo orden que las teclas de la escena (fila 0 a
fila 3), saltando `js` y `ts`, que no traen imagen. Los dos primeros son los
fotogramas del gato del teclado, no un logo.

Ojo con la caché
----------------
`/assets/*` se sirve con `Cache-Control: immutable` a un año. Si se cambia el
contenido de la escena hay que cambiarle también el nombre al archivo (y la
referencia en `animated-background.tsx`), o los visitantes que ya entraron
seguirán viendo el teclado viejo.
"""
import io
import os
import re
import struct
import sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ESCENA = os.path.join(RAIZ, "public", "assets", "skills-keyboard-v3.spline")
LOGOS = os.path.join(RAIZ, "teclado-3d", "logos")

# índice del PNG (tecla original) -> logo nuevo. El emparejamiento busca que el
# color de la tecla, que sí está horneado y no se puede cambiar desde código,
# no choque con la marca nueva.
CAMBIOS = {
    11: "android",     # era mongodb   — tecla verde
    14: "capacitor",   # era prettier
    16: "vite",        # era firebase  — tecla ámbar
    17: "sqlite",      # era wordpress — tecla azul
    21: "cloudflare",  # era aws       — tecla naranja
    22: "kotlin",      # era vim
    23: "prisma",      # era vercel    — tecla negra
}

# La tecla de PHP no salió de aquí: `js` y `ts` son las dos únicas que no traen
# imagen. Su rótulo es texto 3D —un TextGeometry con la cadena en Inter Bold— y
# para convertir la de TypeScript en PHP bastó cambiar esa cadena dentro del
# archivo: el fixstr de dos letras por el de tres. Aparecía una sola vez en todo
# el archivo, así que no hubo riesgo de tocar otra cosa.

SIG = b"\x89PNG\r\n\x1a\n"


def main() -> int:
    datos = io.open(ESCENA, "rb").read()
    tramos = [
        (m.start(), datos.find(b"IEND", m.start()) + 8)
        for m in re.finditer(re.escape(SIG), datos)
    ]

    salida = bytearray()
    cursor = 0
    for i, (ini, fin) in enumerate(tramos):
        if i not in CAMBIOS:
            continue
        cabecera = ini - 3
        if datos[cabecera] != 0xC5:
            print(f"cabecera inesperada en el PNG {i}; no toco nada", file=sys.stderr)
            return 1
        if struct.unpack_from(">H", datos, cabecera + 1)[0] != fin - ini:
            print(f"el largo no cuadra en el PNG {i}; no toco nada", file=sys.stderr)
            return 1

        nuevo = io.open(os.path.join(LOGOS, f"{CAMBIOS[i]}.png"), "rb").read()
        if len(nuevo) >= 65536:
            print(f"{CAMBIOS[i]}.png no cabe en una cabecera bin16", file=sys.stderr)
            return 1

        salida += datos[cursor:cabecera]
        salida += b"\xc5" + struct.pack(">H", len(nuevo)) + nuevo
        cursor = fin
        print(f"  {i:2d} -> {CAMBIOS[i]:<11s} {fin - ini:6d} -> {len(nuevo):6d} bytes")
    salida += datos[cursor:]

    io.open(ESCENA, "wb").write(bytes(salida))
    print(f"\nescrito: {ESCENA} ({len(salida)} bytes)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
