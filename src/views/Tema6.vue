<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Seguridad y salud en el trabajo 
    p.mb-5(data-aos='fade-right') Dentro de la gestión y operación de una PTAR se ejecutan actividades de alto riesgo como el trabajo en alturas, manipulación de equipos con riesgo eléctrico, soldadura de tanques y accesorios, trabajo continuo en espacios confinados, en zanjas, excavaciones y conizaje de cargas. Debido a ello, debe existir una rigurosa prevención y control de los trabajadores, maquinaria, herramientas y equipos a través de inducciones, capacitaciones constantes, supervisión de actividades de acuerdo con el riesgo, revisión periódica del inventario general y de seguridad. Todo ello se debe garantizar por medio de profesionales con experticia técnica en seguridad y salud en el trabajo (SST). 
    .bloque-derecha.mb-5
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema6/1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En cada actividad el trabajador debe tener plena conciencia de la actividad que realiza de acuerdo con el riesgo que esto implica. El personal encargado de supervisar la SST debe tomar las medidas necesarias para garantizar un ambiente laboral seguro, como los elementos de protección individual, suscripción permanente a las ARL por cada empleado, asegurar las condiciones de seguridad en cada área de la planta y advertir de los posibles actos inseguros que pueden llegar a presentarse.
    p.mb-5(data-aos='fade-right') En el siguiente recurso afiance su conocimiento de los elementos de protección individual en la operación de una PTAR: 
    .mn.bg-tema-6.p-5
      h4 Elementos de protección individual en operación de PTAR
      p.mb-5(data-aos='fade-right') Interactúe con la gráfica que aparece en pantalla, haciendo clic sobre los puntos que se le indican. Descubra en ellos información valiosa y oportuna para el uso, tenencia, cuidado y gestión de los elementos de protección individual en la operación de PTAR.
      .row.justify-content-center.mb-5
        .col-lg-10
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema6/2.svg', alt='Texto que describa la imagen')
            .tarjeta.p-3(x="15.8%" y="18.3%" numero="+" style="background-color: #dee9f0 ")
              p Cabeza: El casco desvía y absorbe golpes de la cabeza
            .tarjeta.p-3(x="15.8%" y="40%" numero="+" style="background-color: #dee9f0 ")
              p Cara: Las caretas o protectores faciales protegen de salpicaduras de químicos, partículas volantes, de esmerilado, corte y presión de aire.

            .tarjeta.p-3(x="15.8%" y="62%" numero="+" style="background-color: #dee9f0 ")
              p Manos: Los guantes de cuero son apropiados para el manejo de la mayoría de los materiales abrasivos. Cuando trabajamos con químicos, los guantes deberán ser sellados en la parte alta o tener un doblez para prevenir la entrada de líquidos.

            .tarjeta.p-3(x="15.8%" y="83.6%" numero="+" style="background-color: #dee9f0 ")
              p Vías respiratorias (atmósferas peligrosas): El detector de gases múltiples tiene la capacidad para lectura de gases como: sulfato de hidrógeno (H2S), oxígeno (O2), monóxido de carbono (CO), límite inferior de explosividad (LEL). 

            .tarjeta.p-3(x="84.3%" y="18.3%" numero="+" style="background-color: #dee9f0 ")
              p Oídos: Expuestos a niveles de ruido por encima de 85 decibeles (dBA)

            .tarjeta.p-3(x="84.3%" y="40%" numero="+" style="background-color: #dee9f0 ")
              p Ojos: Los lentes protegen de salpicaduras de químicos,  como ácidos, caústicos, baterías de celdas húmedas u otros.

            .tarjeta.p-3(x="84.3%" y="62%" numero="+" style="background-color: #dee9f0 ")
              p Cuerpo: Usar overol y/o camisa y pantalón, 100% algodón retardante al fuego. 

            .tarjeta.p-3(x="84.3%" y="83.6%" numero="+" style="background-color: #dee9f0 ")
              p Los zapatos y botas de seguridad son hechos con casquillos para protección de los pies por perforación o aplastamiento, objetos pesados cayendo, objetos afilados, objetos rodando y suelo resbaladizo.

    
</template>

<script>
export default {
  name: 'Tema6',
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
