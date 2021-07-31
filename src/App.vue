<template>
  <router-view/>
</template>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    background-color: rgb(145, 71, 255);
    color: white;
    font-family: sans-serif;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .testimonial {
    display: flex;
    justify-content: flex-start;
    padding: 0.5rem 1rem;

    background-color: black;
  }

  .testimonial p {
    margin: 0;
    line-height: 1.2rem;
  }

  .testimonial a,
  .testimonial a:visited,
  .testimonial a:active,
  .testimonial a:hover {
    font-weight: bold;
    text-decoration: none;
  }

  .testimonial img {
    width: 70px;
    height: 70px;
    border-radius: 9000px;
  }
</style>
