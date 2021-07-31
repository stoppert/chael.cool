<template>
  <ClipEmbed :clip="clip"/>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import ClipEmbed from "@/components/ClipEmbed.vue";
import {clips} from "@/data/clips";

export default defineComponent({
  name: 'Home',
  components: {ClipEmbed},
  setup() {
    const clip = ref(clips[Math.floor(Math.random() * clips.length)]);

    return {
      clip,
    }
  }
})
</script>
