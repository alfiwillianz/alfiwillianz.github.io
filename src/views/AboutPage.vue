<template>
  <main>
    <div class="welcome-box">
      <h2>About Me</h2>
      <p>Hi, I'm <strong>Malfino Muhammad Willianz</strong> — an aspiring <strong>AI Engineer</strong> and currently learning
          <strong>AI Engineering at Institut Teknologi Sepuluh Nopember (ITS)</strong>, with a background in
          <strong>Data Science</strong>, based in <strong>Surabaya, Indonesia</strong>.</p>
      <p>I previously studied Data Science at Airlangga University, where I honed my skills in data-driven problem-solving.</p>
      <p>My key interests include:</p>
      <ul>
          <li>Data Science</li>
          <li>Machine Learning</li>
          <li>Artificial Intelligence</li>
      </ul>
      <p>I'm passionate about staying connected with the latest tech trends and continuously evolving as both an
          AI Engineer and programmer. I aim to contribute to meaningful innovations in intelligent systems and software development.</p>

      <h2>Contact Me!</h2>
      <p>I'm currently open to new opportunities. Feel free to reach out—whether you have a question or just want to say hi, I'll do my best to get back to you!</p>
      <div class="contact-button-container">
        <a v-for="(social, index) in socials" :key="index" :href="social.url" class="contact-button">
          <i :class="social.icon"></i>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      socials: [
        { url: 'mailto:willianz@pm.me', icon: 'fas fa-envelope' },
        { url: 'https://www.linkedin.com/in/alfi-willianz/', icon: 'fab fa-linkedin' },
        { url: 'https://github.com/semiqolonn', icon: 'fab fa-github' },
        { url: 'https://twitter.com/semiqolonn', icon: 'fab fa-twitter' },
        { url: 'https://instagram.com/semiqolonn', icon: 'fab fa-instagram' },
        { url: 'https://discord.com/users/702817817774391334', icon: 'fab fa-discord' },
        { url: 'https://www.kaggle.com/zwniff', icon: 'fab fa-kaggle' }
      ]
    }
  }
}
</script>
