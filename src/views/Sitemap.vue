<template>
  <Head>
    <title>Sitemap</title>
    <meta name="description" content="Twitchcliptastic"/>
  </Head>

  <div class="menu-box block">
    <ul class="menu-box-menu">
      <li v-for="clip in clips" :key="clip.slug">
        <router-link :to="{name: 'clippage', params: {clip: clip.slug}}" class="menu-box-tab">
          {{ clip.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {clips} from "@/data/clips";
import {Head} from "@egoist/vue-head";

export default defineComponent({
  name: 'Sitemap',
  components: {Head},
  setup() {
    return {
      clips
    }
  }
});
</script>

<style lang="scss">
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
  margin: 0;
  padding-left: 0;
}

a {
  text-decoration: none;
  font-size: 15px;
}

a:hover {
  text-decoration: underline;
}

h1, h2, p, a, span {
  color: #fff;
}

.block {
  margin-bottom: 25px;
  background: #AF88EA;
  border-radius: 5px;
}

.menu-box {
  width: 400px;
}

.menu-box-menu li {
  height: 60px;
  position: relative;
}

.menu-box-tab {
  line-height: 60px;
  display: block;
  border-bottom: 1px solid #9147ff;
  transition: background .2s;
  padding: 0 1rem;
}

.menu-box-tab:hover {
  background: #7439CC;
  border-top: 1px solid #9147ff;
  text-decoration: none;
}

</style>
