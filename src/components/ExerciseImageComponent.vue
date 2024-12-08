<template>
  <div v-if="exercise.class !== 'gitLinks'">
    <div class="test" :class="`${exercise.class} ${exercise.animation}`"></div>
    <p>
      <span class="tag" v-for="tag in exercise.tags" :key="tag">
        #{{ tag }}
      </span>
    </p>
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

.test {
  cursor: pointer;
  margin: 1.5rem 0;
  width: 500px;
  height: 300px;
  background-color: var(--custom-white);
  border-radius: 10px;
  overflow: hidden;
  background-position: 0%;
}

.restau {
  background: url("../assets/images/restau.webp");
}

.hello {
  background: url("../assets/images/hello.webp");
  background-position: 0 -20px;
}

.archi {
  background: url("../assets/images/archi.webp");
  background-position: 0 -20px;
}

.fake {
  background: url("../assets/images/fake.webp");
  background-position: 0 -20px;
}

.blog {
  background: url("../assets/images/blog.webp");
  background-position: 0 -31px;
}

.shop {
  background: url("../assets/images/shop.webp");
  background-position: 0 -40px;
}

.aw {
  background: url("../assets/images/aw.webp");
  background-position: 0 -50px;
}

.artwork {
  background: url("../assets/images/artwork.webp");
  background-position: 0 -31px;
}

.portfolio {
  background: url("../assets/images/portfolio.webp") center/cover;
}

@media screen and (max-width: 690px) {
  .fake {
    background: url("../assets/images/fake-mobile.webp");
    background-position: 0 -20px;
  }
}
</style>
