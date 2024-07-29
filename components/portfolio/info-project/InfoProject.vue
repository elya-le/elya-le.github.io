<script setup></script>

<template>
  <div class="info-project container section-margin">
    <slot name="about" />
    <ul class="intro-project-list mt-30 d-grid">
      <slot />
    </ul>
  </div>
</template>

<style scoped>
.info-project {
  text-align: left; /* Aligns text to the left for the entire container */
}

.intro-project-list {
  display: grid; 
  grid-template-columns: 1fr; /* Initially one column */
  gap: 20px; /* Adjust the gap as needed */
}

.intro-project-list > :first-child {
  grid-column: span 1; /* First item takes the whole row */
}

.intro-project-list > :nth-child(n+2) {
  grid-template-columns: 1fr 1fr; /* Adjust columns for the second row onwards */
  display: grid;
  gap: 20px;
}
</style>
