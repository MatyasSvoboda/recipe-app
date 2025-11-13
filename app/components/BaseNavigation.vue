<script setup lang="ts"></script>

<template>
  <header class="py-4 border-b">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="text-2xl font-bold">
        <span class="text-3xl font-bold">Recipe</span>
      </NuxtLink>
        <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
              <li>
                  <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li>
                  <NuxtLink to="/about">About</NuxtLink>
              </li>
        </ul>
    </nav>
  </header>
</template>