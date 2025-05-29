<template>
  <main>
    <div class="welcome-box">
      <h2>Projects</h2>
      <p>Here are some of the projects I've worked on:</p>
      
      <div class="project-tile" v-for="(project, index) in projects" :key="index">
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="button-container">
            <a :href="project.projectUrl" class="button" v-if="project.projectUrl">View Project</a>
            <a :href="project.githubUrl" class="button" v-if="project.githubUrl">View on GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProjectPage',
  data() {
    return {
      projects: [
        {
          title: 'MarineDex',
          description: 'Award-winning paper designed to enhance marine biodiversity research and conservation efforts.',
          projectUrl: 'https://drive.google.com/file/d/1-4rNJ8oAC0XrOQ6uemXpF4GpyO8s7y26/view',
          githubUrl: 'https://github.com/semiqolonn/sea-animals'
        },
        {
          title: 'Diabesense',
          description: 'Web application designed to provide an intuitive and user-friendly interface for diagnosing diabetes.',
          projectUrl: 'https://diabesenz.onrender.com',
          githubUrl: 'https://github.com/semiqolonn/alpro-final'
        },
        {
          title: 'More on GitHub',
          description: 'Check out my other projects on my GitHub account!',
          githubUrl: 'https://github.com/semiqolonn'
        }
      ]
    }
  }
}
</script>
