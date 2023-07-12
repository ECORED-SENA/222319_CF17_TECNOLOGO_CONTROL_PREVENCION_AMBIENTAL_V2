<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Procesos y protocolos de mantenimiento
    p.mb-5(data-aos='fade-right') El mantenimiento de los sistemas de tratamiento de agua residual son procesos indispensables para mantener el buen funcionamiento, la eficiencia, óptimas condiciones operativas y alargar la vida útil de una PTAR. En este orden de ideas toda instalación que cuente con un tren de tratamiento de una o varias unidades de tratamiento de agua residual debería contar con uno o varios protocolos, procedimientos e instructivos para el mantenimiento preventivo y correctivo de cada una de las unidades de tratamiento. 
    .bloque-derecha.mb-5
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 De acuerdo con el manual de operación y mantenimiento del sistema de tratamiento de aguas residuales, el mantenimiento preventivo es aquel que se realiza para conservar en buen estado las instalaciones y equipo de la planta, asegurando su buen funcionamiento y alargando su vida útil. Consiste en la ejecución de rutinas de trabajo que se realizan con mayor o menor frecuencia para prevenir desperfectos. Por otro lado, el manual  menciona que el mantenimiento correctivo consiste en la reparación inmediata de cualquier daño que sufran los equipos o componentes del sistema de tratamiento de aguas residuales, lo cual ocasiona situaciones de emergencia. (ENDUPAR, 2012)
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center.mb-4
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema4/2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-12.mb-3.mb-sm-0
                  h4.mb-1.fw-normal Visite los documentos que aquí se le proponen. Mediante su lectura consciente podrá apropiar los elementos de desarrollo de protocolos de mantenimiento preventivo y correctivo.
          a.anexo.mb-4(href="https://www.emdupar.gov.co/index.php/la-entidad/sistema-integrado-de-gestion/Planeacion/Manuales/MA-GM-01%20MANUAL%20DE%20OPERACION%20Y%20MANTENIMIENTO%20PTAR.pdf/download" target="_blank" type="application/pdf")
            .row.justify-content-around.align-items-center
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto(style="color: #12263F")
                p #[b Anexo.] Manual de operación y mantenimiento el sistema de tratamiento de aguas residuales.
          a.anexo.mb-4(href="https://www.emdupar.gov.co/index.php/la-entidad/sistema-integrado-de-gestion/Planeacion/Manuales/MA-GM-01%20MANUAL%20DE%20OPERACION%20Y%20MANTENIMIENTO%20PTAR.pdf/download" target="_blank" type="application/pdf")
            .row.justify-content-around.align-items-center
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p(style="color: #12263F") #[b Anexo.] Manual de operación, mantenimiento y limpieza PTAR.
                  

</template>

<script>
export default {
  name: 'Tema4',
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
