# search-movies
Proyecto con React Js que le pega a api para practicar

```
npm run install
```

# Para deployar

Asegurarse de haber instalado "surge"

```
npm install --global surge
```

Luego hacer el build y subirlo

```
npm run build
```
(donde build es el directorio generado por el build)
```
surge build
```

#NOTA 
Para evitar el error de 404 de Surge hay que copiar el archivo build/index.html con el nombre 200.html

sitio subido en http://blitox-searchmovie.surge.sh/