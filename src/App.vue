<template>
  <primary-nav />
  <secondary-nav />
</template>
<script>
import PrimaryNav from "./components/PrimaryNav.vue";
import SecondaryNav from "./components/SecondaryNav.vue";
import links from "./components/links.vue";
export default {
  name: "App",
  components: {
    PrimaryNav,
    SecondaryNav,
    links,
  },
};
</script>ˇ
<style src="./assets/tailwind.css" />
