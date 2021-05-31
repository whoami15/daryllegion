<template>
<main>
      <section>
        <Home msg="Daryl Ferrer Legion" />
      </section>
      <footer>&copy; 2021</footer>
    </main>
</template>

<script setup>
import Home from './components/Home.vue'
</script>

<style>
section {
    padding: 1em 0;
}
footer {
    font-size: small;
    margin: 1em 0;
}
body {
    background-color: #000;
    font-family: monospace;
    text-align: center;
    max-width: 50em;
    font-size: 120%;
    padding: 0 1em;
    margin: auto;
    color: #fff;
}
main {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    display: flex;
}
h1 {
    font-size: 200%;
    margin: 0;
}
</style>
