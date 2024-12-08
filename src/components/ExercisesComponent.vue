<template>
  <h2>Exercices & Réalisations</h2>
  <article>
    <div>
      <div v-for="tag in tagList" :key="tag" class="checkbox">
        <input type="checkbox" v-model="techs" :value="tag" />
        <label :for="tag">{{ tag }}</label>
      </div>
    </div>

    <ExerciseImageComponent
      v-for="exercise in filteredExercisesWithImages"
      :key="exercise.id"
      :exercise="exercise"
    />

    <div class="exercise-button">
      <div>
        <ExerciseButtonComponent
          v-for="exercise in filteredExercisesLinks"
          :key="exercise.id"
          :exercise="exercise"
        />
      </div>
    </div>
  </article>
</template>

<script>
import { computed, ref } from "vue";
import getExercises from "../composables/getExercises";
import ExerciseImageComponent from "./ExerciseImageComponent";
import ExerciseButtonComponent from "./ExerciseButtonComponent";

export default {
  components: { ExerciseImageComponent, ExerciseButtonComponent },
  setup() {
    const techs = ref(["symfony", "php", "python"]);

    const tagList = [
      "html",
      "css",
      "scss",
      "js",
      "php",
      "sql",
      "twig",
      "bootstrap",
      "symfony",
      "python",
      "react",
      "vue",
      "wordpress",
    ];

    const exercises = getExercises();

    const filteredExercisesWithImages = computed(() =>
      exercises.filter((exercise) =>
        techs.value.some(
          (i) => exercise.tags.includes(i) && exercise.class !== "gitLinks"
        )
      )
    );

    const filteredExercisesLinks = computed(() =>
      exercises.filter((exercise) =>
        techs.value.some(
          (i) => exercise.tags.includes(i) && exercise.class === "gitLinks"
        )
      )
    );

    return {
      techs,
      tagList,
      exercises,
      filteredExercisesWithImages,
      filteredExercisesLinks,
    };
  },
};
</script>

<style scoped>
article {
  width: 98%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

article h3 {
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
}

article h3:nth-of-type(1) {
  margin-top: 2rem;
}

article .heighter {
  height: 340px !important;
}

article div:nth-of-type(1) {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

.checkbox {
  padding: 10px;
}

.exercise-button {
  display: block;
  flex: 0 0 100%;
}
</style>
