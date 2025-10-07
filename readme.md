# 🧠 Rapport Git — Yannick Thomas

## ⚙️ Configuration Git (`git config --list`)
```bash
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
http.sslbackend=schannel
core.autocrlf=true
core.fscache=true
core.symlinks=false
pull.rebase=false
credential.helper=manager
credential.https://dev.azure.com.usehttppath=true
init.defaultbranch=master
user.name=Yannickthomas0602
user.email=yannick.thomas@supdevinci-edu.fr
core.repositoryformatversion=0
core.filemode=false
core.bare=false
core.logallrefupdates=true
core.symlinks=false
core.ignorecase=true
remote.origin.url=https://github.com/Yannickthomas0602/Eva-Git-Tim-o-et-Yannick.git
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
branch.main.remote=origin
branch.main.merge=refs/heads/main


# Commande : git branch
 feature/add-css
* main
  refactor/change-css

# Commande : git log --oneline
97892fa (HEAD -> main, origin/main, origin/HEAD) augmentation de         height: 1000,
6862c25 modification de la vitesse de basespeed à 8
695adfc modification des couleurs dans pingpong(game.-topbar)
fab6f77 modification entrante accèpté
e41480c changement de la vitesse de base à 2 et des la vitesse max à 7
01ebeea modification de la basespeed et de la maxspeed
172bba6 suppression du fichier css
4d166d9 Merge pull request #1 from Yannickthomas0602/feature/easter
c581663 (origin/feature/easter) ajout du fichier konamimodifié.js dans la branche feature/easter
ac52649 (feature/add-css) changement des couleur du site
41b30c1 modification ligne 29 git c'est la vie
4dbcaac modification des couleurs sur le fichiers styles.css
b371951 ajout d'un commentaire au debut du fichier sur index.html
66ecb4b ajout d'un fichier texte
98ac211 first commit
5919c27 Merge pull request #1 from Detruni/feature/ping-pong
e8ac804 (tag: v2.51, origin/feature/ping-pong) fix: caler la vitesse de l'IA sur celle du joueur
29996f8 (tag: v2.5) feat: ajouter quiz post-point et intégration jeu
d7f3dcd (tag: v2.4) AJOUT tu systeme de question quand on gagne un point
4769cc0 (tag: v2.3) feat: ajouter le mini-jeu de ping pong
ccc72c6 (tag: v2.2) AJOUT commentaire et easteregg
7b102ca (tag: v2.11) AJOUT DES TRUC
b1d36eb (tag: v2.1) AJOUT DES TRUC
73f7ff7 (tag: v2.02) AJOUT DES TRUC
b02bb84 (tag: v2.01) Modification style card details
10a61c6 truc 11
c7e5586 (tag: v2.0) truc 11
fc43372 (tag: v1.8) Delete styles.css
55c3ae2 (tag: v1.7) Delete index.html
a578901 (tag: v1.6) Delete commandes.html
0dcb434 (tag: v1.5) Delete README.md
51f1d79 (tag: v1.4) Resolve by taking theirs
5da63ba (tag: v1.32) petite modif
11e8663 (tag: v1.31) AJOUT DES TRUC
22376aa (tag: v1.3) Modification du bandeau de navigation v2
95cd3bd (tag: v1.2) Modification style
bcaa935 (tag: v1.1) Modification du bandeau de navigation
ac4d40c (tag: v1.0) Ajout du fichier commandes.html et modification index.html et style.css
c9efae8 (tag: v0.1) premier commit
7bbf485 (tag: v0.0) Initialisation du projet

# Commande : git Status 
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

# Commande : git log --graph --oneline --all
* 1a2b423 (refactor/change-css) branche avec des couleurs différentes sur le css
| * 97892fa (HEAD -> main, origin/main, origin/HEAD) augmentation de         height: 1000,
| * 6862c25 modification de la vitesse de basespeed à 8
| * 695adfc modification des couleurs dans pingpong(game.-topbar)
|/  
*   fab6f77 modification entrante accèpté
|\  
| * e41480c changement de la vitesse de base à 2 et des la vitesse max à 7
| * 172bba6 suppression du fichier css
| *   4d166d9 Merge pull request #1 from Yannickthomas0602/feature/easter
| |\  
| | * c581663 (origin/feature/easter) ajout du fichier konamimodifié.js dans la branche feature/easter
| * | ac52649 (feature/add-css) changement des couleur du site
| |/  
* / 01ebeea modification de la basespeed et de la maxspeed
|/  
* 41b30c1 modification ligne 29 git c'est la vie
* 4dbcaac modification des couleurs sur le fichiers styles.css
* b371951 ajout d'un commentaire au debut du fichier sur index.html
* 66ecb4b ajout d'un fichier texte
* 98ac211 first commit
*   5919c27 Merge pull request #1 from Detruni/feature/ping-pong
|\  
| * e8ac804 (tag: v2.51, origin/feature/ping-pong) fix: caler la vitesse de l'IA sur celle du joueur
| * 29996f8 (tag: v2.5) feat: ajouter quiz post-point et intégration jeu
| * d7f3dcd (tag: v2.4) AJOUT tu systeme de question quand on gagne un point
| * 4769cc0 (tag: v2.3) feat: ajouter le mini-jeu de ping pong
|/  
* ccc72c6 (tag: v2.2) AJOUT commentaire et easteregg
* 7b102ca (tag: v2.11) AJOUT DES TRUC
* b1d36eb (tag: v2.1) AJOUT DES TRUC
* 73f7ff7 (tag: v2.02) AJOUT DES TRUC
* b02bb84 (tag: v2.01) Modification style card details
*   10a61c6 truc 11
|\  
| * fc43372 (tag: v1.8) Delete styles.css
| * 55c3ae2 (tag: v1.7) Delete index.html
| * a578901 (tag: v1.6) Delete commandes.html
| * 0dcb434 (tag: v1.5) Delete README.md
* | c7e5586 (tag: v2.0) truc 11
|/  
*   51f1d79 (tag: v1.4) Resolve by taking theirs
|\  
| * 5da63ba (tag: v1.32) petite modif
| * 22376aa (tag: v1.3) Modification du bandeau de navigation v2
| * 95cd3bd (tag: v1.2) Modification style
| * bcaa935 (tag: v1.1) Modification du bandeau de navigation
* | 11e8663 (tag: v1.31) AJOUT DES TRUC
|/  
* ac4d40c (tag: v1.0) Ajout du fichier commandes.html et modification index.html et style.css
* c9efae8 (tag: v0.1) premier commit
* 7bbf485 (tag: v0.0) Initialisation du projet
