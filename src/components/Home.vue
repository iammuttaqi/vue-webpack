<template>
  <div>
    <h1>{{ message }}</h1>
    <p>This is homepage</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    message: String,
  },
};
</script>