<template>
  <div class="mention" @click="toggleModal">Mention</div>
  <div v-if="isShown" class="modal" @click="toggleModal" title="Fermer">
    <div class="modal-mention"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShown: false,
    };
  },
  methods: {
    toggleModal() {
      this.isShown = !this.isShown;
    },
  },
};
</script>

<style scoped>
.mention {
  width: 9rem;
  margin-left: 0;
  padding: 4px 10px;
  text-align: center;
  border: 1px solid black;
  border-radius: 2rem;
  background: rgba(197, 226, 253, 0.8);
  cursor: pointer;
}
.modal {
  width: 800px;
  z-index: 2;
  position: absolute;
  left: 5%;
  bottom: 5%;
}
.modal-mention {
  width: 100%;
  height: 400px;
  background: url("../assets/images/mention.webp") center/cover;
  cursor: pointer;
}

@media screen and (max-width: 500px) {
  .modal-mention {
    margin-left: initial;
    width: 75%;
  }
}
</style>
