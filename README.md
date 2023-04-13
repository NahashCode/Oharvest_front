# O'HARVEST (front)

## creation du projet 
---

```
# npm 7+, extra double-dash is needed:
npm create vite@latest . -- --template react

# yarn
yarn create vite . --template react
```

## Activer la config eslint

```
#yarn
yarn init @eslint/config

#npm
npm init @eslint/config
```

## Responsive

Mobile widht: 320px - 425px

```
@media only screen and (max-width: 425px) {

}
```

Tablet width: 425px-1024px

```
@media only screen and (max-width: 1024px) {

}
```

Desktop widht: 1024px - 1440px

```
@media only screen and (min-width: 1024px) {

}
```

---
---

## Travailler sur une nouvelle fonctionnalité

On se crée une nouvelle branche pour développer la nouvelle fonctionnalité.

On se place sur la branche `dev`

```
git checkout -b feat/<nom-de-la-fonctionnalité>
```

Pour les commits, la convention est de commencer:
- `feat:` pour l'ajout de fonctionnalités, style
- `fix:` pour résoudre un bug
- `doc:` pour tous ce concerne de la documentation
- `config:` pour tous ce qui concerne des fichiers de configuration

puis d'expliquer en quelques mots le travail réalisé (mentionner les composants/fichiers sur lesquel vous avez travailler)

Une fois le développement terminé et commité, on fait récupère les eventuelles modif:

```
git pull origin feat/<nom-de-la-fonctionnalité>
```

On résoud les conflits.

Une fois les conflits résolus, on fait une demande de pull request sur **GitHub**, de la branche `feat/<nom-de-la-fonctionnalité>` dans la branche `dev`.

Une fois que les fonctionnalités on été rassemblés dans la branche `dev` et les bugs corrigés, 
on fait une demande de pull request sur **GitHub**, de la branche `dev` dans la branche `prod`.