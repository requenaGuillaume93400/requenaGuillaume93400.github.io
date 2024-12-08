<template>
  <figure>
    <img :src="source" :alt="alt" loading="lazy" />
    <figcaption>{{ symbol.title }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: ["symbol"],
  setup(props) {
    const source = "./images/" + props.symbol.image;
    const alt = "Logo de " + props.symbol.alt;

    return { source, alt };
  },
};
</script>
