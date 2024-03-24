# vue-homepage-upgrade

I want you to level up the vue.js code for a home page, with better desing <template>
  <div id="app">
    <h1>Reparto Grupo de Defensa Jurídica</h1>
    <router-link :to="{ name: 'asigna' }">
      <button class="custom-button">Ingresar Datos</button>
    </router-link>
    <router-link :to="{ name: 'consulta' }">
      <button class="custom-button">Consultar Información</button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  margin-top: 30px;
  color: #99C058;
}

.custom-button {
  margin: 20px;
  padding: 10px 20px;
  background-color: #99C058;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
</style>


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/vue-homepage-upgrade.git
cd vue-homepage-upgrade
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
