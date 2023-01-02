<template>
  <button
      :disabled="disabled"
      :type="type"
      class="h-12 flex rounded-md bg-slate-800 justify-center text-white font-bold w-full items-center uppercase disabled:bg-slate-500"
  >
      {{ processing ? 'Processing' : text }}
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
    disabled: {
      type: Boolean,
      default: false,
    },
    processing: {
      type: Boolean,
      default: false,
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