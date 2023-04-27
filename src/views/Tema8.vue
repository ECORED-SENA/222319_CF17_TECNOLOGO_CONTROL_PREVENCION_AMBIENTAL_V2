<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Equipos hidráulicos, mecánicos, eléctricos y de control 
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right").mb-lg-0.mb-3
        p Los equipos para el control de lodos suelen ser muy variados, pero pueden clasificarse según su principio básico de funcionamiento. Los tipos de equipos o sus características específicas guardan relación directa con el tamaño o proporción de las plantas de tratamiento, su localización, el espesor de los lodos y las cantidades de lodo que se manejan.
          br
          br
          |Asimismo la maquinaria hidráulica, mecánica, eléctrica o manual, debe contar con procesos de mantenimiento y actualización que favorezca el proceso para el cual han sido diseñadas y creadas: el control de los lodos.
          br
          br
          |En el siguiente recurso conozca los diferentes tipos de equipos que son usados para el control de lodos y la forma en que se determina su clasificación, según el esquema que se muestra: 
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema8/1.png', alt='')
    .mn.bg-tema-8.p-5
      h4 Equipos para el tratamiento de lodos
      p Para conocer la clasificación de los tipos de maquinaria que se usa para el control de los lodos, según su principio básico de funcionamiento, interactúe con la gráfica que aparece en pantalla: uno a uno, presione los tipos de tratamientos de lodo para visualizar el tipo de maquinaria que debe usarse.
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .p-5.px-3.text-center.h-100(style="background-color: #dee9f0; border-bottom: 5px solid #badc61 ") 
          p.fw-bold.text-center Concentración 

          p • Aire disuelto
            br
            |• Flotación
            br
            |• Desarenado y sedimentación
            br
            |• Espesadores mecánicos por gravedad
            br
            |• Espesadores mecánicos por flotación
            br
            |• Centrifugación

        .p-5.px-3.text-center.h-100(style="background-color: #dee9f0; border-bottom: 5px solid #badc61 ") 
          p.fw-bold.text-center Digestión - Estabilización

          p • Proceso Aerobio
            br
            |• Proceso Anaerobio
            br
            |• Oxidación húmeda
            br
            |• Estabilización química
            br
            |• Irradiación 

        .p-5.px-3.text-center.h-100(style="background-color: #dee9f0; border-bottom: 5px solid #badc61 ") 
          p.fw-bold.text-center Acondicionamiento - desinfección

          p • Fijación quimica
            br
            |• Elutriación
            br
            |• Calor 
            br
            |• Congelamiento
            br
            |• Cloro
            br
            |• Cal seca

        .p-5.px-3.text-center.h-100(style="background-color: #dee9f0; border-bottom: 5px solid #badc61 ") 
          p.fw-bold.text-center Desecación y secado

          p • Filtro prensa
            br
            |• Filtro de vacio
            br
            |• Filtro de bandas
            br
            |• Ultrasonido
            br
            |• Rejillas vibratorias
            br
            |• Lecho de secado

        .p-5.px-3.text-center.h-100(style="background-color: #dee9f0; border-bottom: 5px solid #badc61 ") 
          p.fw-bold.text-center Incineración y reducción

          p • Incinerador de horno múltiple
            br
            |• Incinerador de lecho fluidizado
            br
            |• Secado instantaneo
            br
            |• Pirólisis

        .p-5.px-3.text-center.h-100(style="background-color: #dee9f0; border-bottom: 5px solid #badc61 ") 
          p.fw-bold.text-center Disposición final

          p • Aplicación en suelo tipo A o B
            br
            |• Relleno Sanitario
            br
            |• Generación de energía (biomasa)
            br
            |• Laguna aerobia, anaerobia, facultativa
            br
            |• En el mar
            br
            |• Inyección en pozo
      p.mb-5(data-aos='fade-right') Para finalizar con el estudio de este componente diríjase al Anexo_4_EquiposParaControlDeLodos y realice una lectura responsable de los elementos que allí se presentan, recuerde registrar su propia síntesis del contenido en su libreta personal de apuntes. 
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.color-primario.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/tema2/pdf.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col-10.mb-3.mb-sm-0
                    p.text-small Anexo_4_EquiposParaControlDeLodos
                  .col.mb-3.mb-sm-0
                    a.boton.color-acento-botones(:href="obtenerLink('downloads/anexo4.pdf')" target="_blank" type="application/pdf")
                      span Descargar 
                      i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema8',
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
