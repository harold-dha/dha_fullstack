# Primer dia con GitHub

Comando para configurar el usuario y el correo

* Para poder configurar el email

```bash
git config --global user.email "email" (global)
git config user.email "email" (proyecto)
```

* Para poder configurar el username

```bash
git config --global user.name "username" (global)
git config user.name "username" (proyecto)
```

* Sirve para poder empezar a usar el control de versiones  (git) en nuestra carpeta.

```bash
git init
```

* Para guardar los archivos automaticamente

    File/autosave


TU REPOSITORIO (LOCAL) ESTA COMPUESTO POR TRES "ARBOLES":

1. Working dir: cambios sin guardar
2. index (stage): cambios añadidos al stage con git add 
3. head: cuando se realiza un git commit

* Para guardar los cambios en memoria (local) al stage

```bash
git add "nombreArchivo"
```
* Para quitar los cambios del stage

```bash
git checkout "nombreArchivo" -- deshace todos los cambios
git reset "nombreArchivo" -- No deshace los cambios, lo quita del stage (quita el git add)
```

* Para ver el estado de nuestros archivos

```bash
git status
```

* Confirmar una instantanea (SNAPSHOT) de los cambios confirmados (git add .) al HEAD. (local)
Se almacena en un historial 

```bash
git commit -m "message"
```

* Si se realizó un commit y se quiere agregar un cambio que nos falto para ese commit, para quitarlo del arbol HEAD usar:

```bash
git reset HEAD~1
```

* Comando para ver el historial de commits en la actual rama
```bash
git log
git log --oneline
git log --graph
```
* Comando para crear otra rama basandonos en otra (git pull antes de crear)
```bash
git branch development master (crea rama)
git checkout -b developmente master (crea rama y cambia)
```

* Comando para borrar rama localmente
```bash
git branch -d qa
git branch --delete developmete
```

* Comando para borrar rama remota
```bash
git push 3hs -d docs/comandos
git push 3hs --delete feat/nuevofeat
```

[x] Git log retorna un `id`, con este id vamos a poder ver el detalle de los cambios que se hicieron en ese commit.

* Comando para ver el detalle del commit
```bash
git show "id"
```

* Comando para cambiar el nombre de la rama donde estas posicionado -> buena practica master a main
```bash
git branch -M main
```

* Comando para agregar un repositorio remoto (origin y 3hs - nombre de los repos remotos)
git remote add [alias] [url]
```
git remote add origin https://github.com/HaroldYontop/ProjectBR.git
git remote add 3hs https://github.com/harold3hs/3hs_fullstack.git
```
* Ver los repositorios remotos
```
git remote -v
```
git remote remove 3hs

* git remote set-url
```
git remote set-url origin https://github.com/HaroldYontop/anotherProject.git
git remote set-url 3hs https://github.com/harold3hs/anotherProject.git
```
<!-- Probrando Comando -->
<!-- Probrando Comando from branch1 -->

* git config -l