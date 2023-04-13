# O'HARVEST (front)

## creation du projet 
---

```
# npm 7+, extra double-dash is needed:
npm create vite@latest . -- --template react

# yarn
yarn create vite . --template react
```

```
# pour installer les dépendences
yarn

# pour lancer le serveur de dev
yarn dev
```

## activer la config eslint
---

```
#yarn
yarn init @eslint/config

#npm
npm init @eslint/config
```

## pour créer une branche pour développer une nouvelle fonctionnalité
---

on se place sur la branche de dev
```
git checkout -b feat/<nom-de-la-feature>
```

## pour commiter le travail effectué
---

```
git add .
git commit -m 'feat: composant'
git pull origin feat/<nom-de-la-feature>
```
(résoudre les conflits...)

```
git push origin feat/<nom-de-la-feature>
```

## pour faire une demande de merge request
---

Lorsque le developpement de la feature est terminé:
on fais une demande de merge request sur **GitHub** de notre `feat/<nom-de-la-feature>` vers la branche `dev`

Lorsque toute les branches des fonctionnalités ont été mergé dans dev et que tout les bugs ont été corrigé:
on fais une demande de merge request sur **GitHub** de notre `dev` vers la branche `main`
