<template>
  <header class="header">
    <nav class="header__nav header__container">
      <div class="header__branding">
        <img src="../assets/images/Vue_Logo_Black-9190692d.png" alt="" />
        <h1>Vue Todos</h1>
      </div>
      <ul class="header__menu">
        <li>
          <router-link to="/">Home</router-link>
          <div></div>
        </li>
        <li>
          <router-link to="/about">About</router-link>
          <div></div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
