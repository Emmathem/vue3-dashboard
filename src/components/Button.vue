<template>
  <button
      :type="type"
      class="h-12 flex rounded-md bg-slate-800 justify-center text-white font-bold w-full items-center uppercase disabled:bg-slate-500"
  >
      {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: 'Continue',
      required: true,
    },
    type: {
      type: String,
      default: 'click',
      required: true,
    },
  }
}
</script>

<style scoped>

</style>