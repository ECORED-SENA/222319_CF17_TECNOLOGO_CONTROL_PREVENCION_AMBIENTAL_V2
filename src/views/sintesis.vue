<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Conocer el control de las operaciones y necesidades de los sectores productivos, el desarrollo tecnológico y la innovación en equipos, permite establecer procesos eficientes en el manejo del tratamiento de aguas residuales en su diseño, recolección, evacuación y mantenimiento, según los lineamientos técnicos y legales a nivel nacional. La siguiente gráfica representa lo anteriormente estudiado. 

    .row.justify-content-center
      .col-lg-6.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
    .row.justify-content-center.mb-5
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
