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
git log --graph --oneline (los primeros *'s hacen referencia a la rama padre)
```
* Comando para crear otra rama basandonos en otra (git pull antes de crear)
```bash
git branch feat/branch1 master (crea rama)
git checkout -b feat/branch2 master (crea rama y cambia)
```

* Comando para borrar rama localmente
```bash
git branch -d feat/branch1
git branch --delete feat/branch2
```

* Comando para borrar rama remota
```bash
git push [repository-remote] -d [remote-branch]
git push origin-dha -d feat/branch1
git push origin-dha --delete feat/branch2
```

* Comando para fusionar ramas
```bash
git merge feat/branch1 (desde master) - trajo file_branch1.txt a master
git merge feat/branch2 (desde master) - trajo file_branch2.txt a master
```

* Comando para traer los ultimos cambios(commits) de otras ramas y rebasar(poner encima) tus cambios locales sobre estas  - (The local changes you made will be rebased on top of the remote changes)
```bash
git rebase master (desde feat/branch3) - llevo file_branch1.txt y file_branch2.txt a feat/branch3
```
---------------------------------------------------------------------------------------------------------------------------------------------------------
[x] Si no es con PULL REQUEST 
  
  Posicionados en feat/branch3 (habiendo hecho el git add, commit y push)
- luego cambiamos a :    **git checkout master**
- ejecutar el comando:    **git merge feat/branch3** (desde master) - trae file_branch3 a master
- finalizamos con :    **git push origin master** (desde master) - para evitar el PULL REQUEST

[x] Si es con PULL REQUEST
  
  Posicionados en feat/branch3 (habiendo hecho el git add y commit)
- luego cambiamos a:    **git checkout master**
- actualizar rama padre (master): **git pull origin master** 
  (dado que ya hubo cambios subidos por PULL REQUEST de feat/branch1 y feat/branch2) 
- cambiamos a la rama hija (feat/branch3): **git checkout feat/branch3**
- ejecutar comando: **git merge master** o **git pull --rebase origin master** (traera los cambios de los PULL REQUEST de feat/bracnh1 y feat/branch2)
- resolvemos conflicto si hay
- finalizamos con: **git push origin feat/branch3** (desde feat/branch3) - Y hacemos el PULL REQUEST para llevar los cambios a development

---------------------------------------------------------------------------------------------------------------------------------------------------------
[x] Git log retorna un `id`, con este id vamos a poder ver el detalle de los cambios que se hicieron en ese commit.

* Comando para ver el detalle del commit
```bash
git show "id"
```

* Comando para cambiar el nombre de la rama donde estas posicionado -> buena practica master a main
```bash
git branch -M main
```

* Comando para agregar un repositorio remoto (origin y origin-dha - nombre de los repos remotos)
```
git remote add [alias] [url]
git remote add origin https://github.com/HaroldYontop/ProjectBR.git
git remote add origin-dha https://github.com/harold-dha/dha_fullstack.git
```
* Ver los repositorios remotos
```
git remote -v
```
* Comando para remover repositorios remotos

git remote remove [remote-branch]
```
git remote remove origin-dha
```

* git remote set-url
```
git remote set-url origin https://github.com/HaroldYontop/anotherProject.git
git remote set-url origin-dha https://github.com/harold-dha/anotherProject.git
```
<!-- Probrando Comando -->
<!-- Probrando Comando from branch1 -->

* git config -l     // 1 guion (-) para una letra
* git config --list // 2 guiones (-) para una palabra

git merge 

* Git con Codecommit

```
git config --global credential.username "IAMusername" ej. harold.yontop@soapros.pe+1-at-314962237570
git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/tdp_gd_backend
```
