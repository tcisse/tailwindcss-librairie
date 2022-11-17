Ce document sert à référencer les problèmes ou les fonctionnalités pas encore complètes

# Navbar

### Libert :

`Navbar` : La première navbar cache une partie du `sidebar` du second. La raison est que le `z-index`
suit l'hiérachie du DOM et comme le `2eme sidebar` est contenu dans son parent (le deuxième navbar qui vient après le premier navbar), alors le `z-index` n'agit pas.

Je suis persuadé qu'il y a une solution mais je ne l'ai pas encore
