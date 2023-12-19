# PGL Tuts

## Instalación de React Navigation
Instala React Navigation para React Native
> npm install @react-navigation/native

Instala las dependencias de expo necesarias para la ejecución de React Navigation
> npx expo install react-native-screens react-native-safe-area-context

## Instalación de Drawer

Instala las dependencias necesarias para el drawer con npm:
> npm install @react-navigation/drawer

Instala las dependencias necesarias para el drawer con expo:
> npx expo install react-native-gesture-handler react-native-reanimated

Añade a babel.config.js el siguiente atributo:
> plugins: [
>   'react-native-reanimated/plugin',
> ],

Instala las dependencias de expo:
> npx expo install --fix

Finalmente, ejecuta el proyecto reseteando la caché:
> npx expo start -c

## Estilos del Drawer
Los estilos son un poco triquiñuelos, pero buscando por internet y con la ayuda de las propiedades que brinda Typescript se puede investigar con ensayo y error para conseguir lo que te propongas.
En la [página de documentación de theme](https://reactnavigation.org/docs/themes) hay una pequeña guía sobre como tener una temática general en la app.
Adicionalmente, te dejo este [vídeo de iutuf](https://www.youtube.com/watch?v=F0B0PoxRaRU) sobre cómo personalizar el Drawer con typescript.
