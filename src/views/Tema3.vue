<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Variables a considerar en una planta de tratamiento de agua residual 
    p.mb-5(data-aos='fade-right') Para realizar el diseño de una planta de tratamiento de agua residual es importante considerar el tipo de contaminantes presentes en el agua; si son de origen orgánico o inorgánico. Para esto es indispensable realizar una caracterización de vertimientos para identificar las concentraciones de los contaminantes en el agua residual de la organización y compararlos con las concentraciones permitidas según la normativa vigente y, si esta no cumple, es indispensable realizar el tratamiento respectivo. 
    .bloque-derecha
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Posterior a esto, definir el tipo de equipos de tratamiento a utilizar y calcular la carga contaminante que se genera y si el equipo estaría en la capacidad de realizar un porcentaje de remoción significativo que ayude a cumplir la normativa. También se debe definir el equipo de acuerdo con el espacio de la organización, presupuesto, si se requiere aerobio o anaerobio, los equipos, entre otras características de funcionabilidad y de rendimiento de cada equipo; según ficha técnica, qué tipos de equipos se podrían utilizar en los tratamientos primarios, secundarios y terciarios y si se puede prescindir de alguno porque no se requiere, ya sea porque no es necesario o porque cumple los parámetros de la normativa y no es requerido.
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Concentración 
    p.mb-5(data-aos='fade-right') Es el peso de un elemento, sustancia o compuesto, por unidad de volumen del líquido que lo contiene.  
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta-avatar
                img(src='@/assets/curso/temas/tema3/2.svg' alt='AvatarTop')
                .tarjeta.w-100(style="background-color: #e2eacb")
                  .pt-4
                    p.text-center.fw-bold.mb-4 La concentración se expresará en miligramos por litro (mg/l), excepto cuando se indiquen otras unidades (Decreto 3100 de 2003 Art. 4).
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Carga contaminante 
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right").mb-lg-0.mb-3
        p Es el resultado de multiplicar el caudal promedio por la concentración de la sustancia contaminante, por el factor de conversión de unidades y por el tiempo diario de vertimiento del usuario medido en horas. es decir: 
        .overflow-hidden.tarjeta(style="background-color: #d9e2f4").mb-5
          div(style="background-color: #a7bce6").p-4.mb-1
            h3.text-center.mb-0 Cc = Q X 0.0864 X (t/24)
          .p-4
            p Donde:
              br
              br
              |#[b Cc=] Carga Contaminante, en kilogramos por día (Kg/dia).
              br
              |#[b Q=] Caudal promedio, en litros por segundo (l/s).
              br
              |#[b C=] Concentración de la sustancia contaminante, en miligramos por litro (mg/l).
              br
              |#[b 0.0864 =] Factor de conversión de unidades.
              br
              |#[b t=] Tiempo de vertimiento del usuario, en horas por día (h).
        p Ministerio de Ambiente, Vivienda y Desarrollo Territorial Decreto 3100 (2003) Art. 4  
        p En el cálculo de la carga contaminante de cada sustancia, objeto del cobro de la tasa retributiva por vertimientos, se deberá descontar a la carga presente en el efluente las mediciones de la carga existente en el punto de captación del recurso siempre y cuando se capte en el mismo cuerpo de agua. 
      .col-lg-6(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/3.png' alt='AvatarTop')
    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Eficiencia del PTAR
    p.mb-5(data-aos='fade-right') Para realizar los cálculos de la eficiencia de la PTAR se puede identificar teniendo en cuenta el caudal de entrada en los equipos, las concentraciones de los contaminantes en el equipo y la carga contaminante del mismo contaminante en el equipo para calcular el % de remoción o eficiencia del equipo sea del tratamiento primario, secundario y terciario y, al calcular cada equipo del sistema y sus % de eficiencia en cada contaminante removido se puede hallar el total de la PTAR.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-10.mb-3.mb-sm-0
                  h4.mb-1.fw-normal Eficiencia del plan de tratamiento de agua residual - PTAR
                  p.text-small Para profundizar en el diseño del plan de tratamiento del aguar residual, le invitamos a consultar el siguiente recurso descargable.
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/anexo2.pdf')" target="_blank" type="application/pdf")
                    span Descargar 
                    i.fas.fa-file-download

          
          


</template>

<script>
export default {
  name: 'Tema3',
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
