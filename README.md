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