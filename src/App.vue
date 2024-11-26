<script setup>
import JSConfetti from 'js-confetti'

const confetti = new JSConfetti()

function showConfetti() {
  confetti.addConfetti()
}

showConfetti()
</script>

<template>
<h1 @click="showConfetti">🎉 Let's get started!</h1>
</template>

<style>
h1 {
  text-align: center;
  cursor: pointer;
  margin-top: 3em;
  background-color: bisque;
  padding: 5px;
  width:fit-content;
  justify-self: center;
}
</style>