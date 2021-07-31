<template>
  <clip-embed :clip="clip" v-if="clip"/>
</template>

<script lang="ts">
import {defineComponent, ref, onBeforeMount, PropType} from 'vue';
import {Clip, clips} from "@/data/clips";
import ClipEmbed from "@/components/ClipEmbed.vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'Clip',
  components: {ClipEmbed},
  props: {
    clip: {
      type: String as PropType<string>,
      required: true,
    }
  },
  setup(props) {
    const router = useRouter();
    const clip = ref<Clip>();

    onBeforeMount(() => {
      const foundClip = clips.find((c: Clip) => c.slug === props.clip);

      if (foundClip) {
        clip.value = foundClip;
        return;
      }

      router.push({name: 'Home'});
    });

    return {
      clip,
    }
  }
});
</script>
