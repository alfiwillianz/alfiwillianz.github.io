<template>
  <main>
    <div class="welcome-box">
      <h2>Achievements</h2>
      <p>Here are some of my notable professional achievements and recognition in the field.</p>
      
      <div class="achievement" v-for="(achievement, index) in achievements" :key="index">
        <h3>{{ achievement.title }}</h3>
        <p><strong>{{ achievement.award }}</strong></p>
        <p>{{ achievement.issuer }}</p>
        <p>{{ achievement.description }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AchievementsPage',
  data() {
    return {
      achievements: [
        {
          title: 'ACTION 2024 – Data Mining',
          award: '1st Place (Representing Airlangga University)',
          issuer: 'Issued by Himpunan Mahasiswa Sains Data (HIMASADA), UNESA · Oct 2024',
          description: 'ACTION 2024 (Academic Competition of Data Science) is a prestigious nationwide event aimed at promoting the advancement of science and technology for environmental sustainability. Participants were challenged to develop innovative, data-driven solutions to tackle complex environmental issues in the modern era.'
        }
      ]
    }
  }
}
</script>
