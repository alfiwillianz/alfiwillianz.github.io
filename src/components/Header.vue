<template>
  <header>
    <div class="header-content">
      <router-link to="/" class="name">semiqolonn;</router-link>
      <nav>
        <router-link to="/project">Projects</router-link>
        <router-link to="/achievements">Achievements</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
