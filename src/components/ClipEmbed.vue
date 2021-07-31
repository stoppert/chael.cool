<template>
  <Head>
    <title>{{clip.name}}</title>
    <meta name="description" :content="clip.name"/>
  </Head>

  <div style="width: 70%;">
    <div style="padding-top: 56.25%; position: relative; overflow: hidden; background-color: black;">
      <iframe :src="clipUrl"
              allow="fullscreen"
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"></iframe>
    </div>
  </div>

  <div style="width: 70%;" v-if="clip.quote">
    <div class="testimonial">
      <img :src="clip.quote.profileImage" :alt="clip.quote.name">
      <div style="padding-left: 1rem; align-self: center;">
        <p>
          <a :href="clip.quote.twitchUrl"
             target="_blank"
             rel="nofollow noopener noreferrer"
             :style="quoteUserColor">
            {{ clip.quote.name }}
          </a>
          <br>
          {{ clip.quote.comment }}
        </p>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue';
import {Clip, generateClipUrl} from "@/data/clips";
import {Head} from "@egoist/vue-head";

export default defineComponent({
  name: 'ClipEmbed',
  components: {Head},
  props: {
    clip: {
      type: Object as PropType<Clip>,
      required: true,
    }
  },
  setup(props) {
    return {
      clipUrl: generateClipUrl(props.clip),
      quoteUserColor: computed(() => {
        return props.clip.quote
            ? {color: props.clip.quote.color}
            : {}
      })
    }
  }
});
</script>
