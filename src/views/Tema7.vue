<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Tratamiento de lodos 
    p.mb-5(data-aos='fade-right') El lodo proveniente de las plantas de tratamiento de aguas residuales se genera en ciertas unidades del tren de tratamiento por lo general de pretratamientos, unidades primarias y secundarias que por su diseño y condiciones de operación acumulan sólidos gruesos como residuos sólidos y finos como arena, grasa, aceite, espumas y otras partículas dependiendo del tipo de vertimiento, ya sea industrial o doméstico. Es por esto que los trenes de tratamiento se pueden dividir en dos: la línea de aguas y la línea de lodos. 
    .bloque-derecha.mb-5
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema7/1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 ¿Sabías que al lodo orgánico en Colombia se le denomina biosólido y dependiendo de sus características fisicoquímicas y biológicas se clasifica como tipo A o tipo B para su aprovechamiento en usos como recuperación de suelos o agricultura?
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-10.mb-3.mb-sm-0
                  h4.mb-1.fw-normal Profundice ampliamente en los aspectos teóricos conceptuales referente al "Tratamiento de lodos", visitando el Anexo_3_TratamientoDeLodos. Luego de estudiar el documento, realice una síntesis y regístrela en su libreta de apuntes personal.
                  p.text-small Anexo_3_TatamientoDeLodos
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/anexo3.pdf')" target="_blank" type="application/pdf")
                    span Descargar 
                    i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema7',
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
