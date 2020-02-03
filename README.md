# random-names

Whenever I start a new project, I don't know what to write for the first commit. After doing a “git init” there is technically nothing there...

## Install

```npm
npm i npm-js-alver
```

# Usage

```bash
random-names
```


#### Simular una instalacion
```
npm i react --dry-run
``` 

#### Forzar una instalacion
```
npm i -D webpack
```

#### Intalar una version especifica
```
npm i json-server@0.15.0
```

#### Visualizar el arbol genealogico de los paquetes instalados
```
npm list
```

## Actualizar paquetes

#### Revisar que paquetes disponen de nuevas versiones
```
npm outdate
```

#### Para ver un output más detallado
```
npm outdate --dd
```

#### Actualizar los paquetes que no están en la ultima versión
```
npm update
```

#### Actualizar un paquete especifico
```
npm install json-server@latest
```

## Eliminar paquetes

#### Eliminar un paquete de node_modules y del archivo package.json
```
npm uninstall json-server
```

#### Desinstalar un paquete de todo node_modules pero no del archivo package.json
```
npm uninstall webpack --no-save
```


### Versionado 2.24.0
```
"moment": "^2.24.0"
```
##### 2 => Major:
  * breaking change
##### 24 => Minor (caret ^):
 * backwards compatible functionality.
 * old functionality deprecated, but operational.
 * large internal refactor
##### 0 => Patch (tilde ~):
 * Bug fixes
 
#### Debug stack trace npm commando
```
npm run build --dd
```


##### Analizar dependencies con vulnerabilidad
```
npm audit
``` 

Revisar el log en modo json

```
npm audit --json
```

Actualizar una dependencies vulnerable a nivel de profundidad 2 donde tambien actualiza sus dependencias
```
npm update eslint-utils --depth 2
```


Actualizar todas las dependencies vulnerables
```
npm audit fix
```



# Contributing
If someone wants to add or improve something, I invite you to collaborate directly in this repository: [randon-names](https://github.com/Alver23/random-names/)

# License
randon-names is released under the [MIT License](https://opensource.org/licenses/MIT).
