<template>
  <div :class="exercise.class">
    <a :href="exercise.link">
      {{ exercise.text }}
      <br />
      <br />
      <span class="tag" v-for="tag in exercise.tags" :key="tag"
        >#{{ tag }}
      </span>
    </a>
  </div>
</template>

<script>
export default {
  props: ["exercise"],
};
</script>

<style scoped>
div > p {
  margin-bottom: 1rem;
}

.tag {
  background-color: var(--orange-background);
  padding: 0.3rem 0.5rem;
  border-radius: 1rem;
  margin-right: 0.3rem;
}

.gitLinks {
  cursor: pointer;
  margin: 1.5rem 0;
  width: initial;
  background-color: var(--green-background);
  border-radius: 10px;
  overflow: hidden;
  background-position: 0%;
  cursor: initial;
  text-align: center;
  border: 2px solid transparent;
}

.gitLinks > a {
  display: block;
  padding: 0.8rem;
  color: var(--custom-white);
  text-decoration: none;
}

.gitLinks:hover {
  border: 2px solid var(--custom-black);
  background-color: rgba(255, 255, 255, 0.85);
}

.gitLinks:hover a {
  color: var(--custom-black);
}
</style>
