<template>
  <main>
    <div class="welcome-box">
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
      <p>Let me help you find your way back:</p>
      
      <div class="button-container" style="margin-top: 30px;">
        <router-link to="/" class="button">Go Home</router-link>
        <router-link to="/project" class="button">View Projects</router-link>
        <router-link to="/about" class="button">About Me</router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
