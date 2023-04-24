<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-1.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/intro/1.svg', alt='')
      .col-lg-11
        p.mb-0 Se da la bienvenida a este componente formativo en el cual podrá conocer, comprender y asimilar todas las bases necesarias para el control de los vertimientos industriales, tal como se presenta en el siguiente video en el que se expone brevemente los contenidos en los que se profundizarán. 
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
