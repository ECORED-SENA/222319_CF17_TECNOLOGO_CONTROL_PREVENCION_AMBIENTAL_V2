<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas para el tratamiento físico, químico y biológico del agua residual
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p El control de las aguas residuales se basa mayormente en tratamientos físicos, químicos y biológicos que depuran las concentraciones contaminantes presentes en un vertimiento originado de manera antrópica. Es por ello por lo que existen las plantas de tratamiento de aguas residuales PTAR, las cuales cuentan con un tren de tratamiento dividido por unidades primarias, secundarias y terciarias. En cada una de estas unidades de tratamiento se eliminan las concentraciones contaminantes de acuerdo con su diseño y funcionamiento. Estos a su vez cuentan con una eficiencia de tratamiento, que es la que permite entregar en el efluente el agua en buenas condiciones.
          br
          br
          |Es así como los tratamientos físicos se concentran en remover principalmente sólidos, partiendo del diseño de su estructura. Por otro lado, el tratamiento químico se da a través de la dosificación de un agente o reactivo que de acuerdo con las necesidades de tratamiento del agua puede coadyuvar a sedimentar sólidos, desinfectar o hasta precipitar metales pesados. Por último, el tratamiento biológico es el encargado de remover la carga orgánica que contiene el agua residual, que por lo general por acción de ciertos microorganismos depuran el agua residual en su proceso metabólico y de digestión.
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/1.png', alt='')
    Separador
    .bg-2.p-5.mn
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Tipos 
      p.mb-5(data-aos='fade-right') En la siguiente tabla se muestra la clasificación de algunos de los tratamientos más usuales de agua residual, de acuerdo con su tipo. Haga un estudio juicioso de esta tabla y tome nota atenta de los aspectos más importantes en este punto “Tipos de tratamiento”: 
      .row.justify-content-center.mb-5
        .col-lg-10
          .tabla-e.text-center
            table
              thead
                tr
                  th Tipo de tratamiento 
                  th Físico
                  th Químico
                  th Biológico 
              tbody.fw-bold
                tr
                  td Pretratamientos y tratamientos primarios 
                  td -Desbaste: 
                    br
                    | #[span.fw-normal Tamizado]
                    br
                    | #[span.fw-normal Cribado] 
                    br
                    |-Desarenadores 
                    br
                    |- Sedimentador 
                    br
                    |-Flotación 
                    br
                    |-Homogenización 
                    br
                    |-Torres y bandejas de enfriamiento o aireación 
                    br
                    |-Filtración 
                  td -Neutralización 
                    br
                    |- Coagulación 
                    br
                    |-Floculación horizontal y vertical 
                  td 
                tr
                  td Tratamientos secundarios 
                  td 
                  td 
                  td -Aireación extendida 
                    br
                    |-Lagunas de oxidación 
                    br
                    |- Digestores: 
                    br
                    | #[span.fw-normal Aerobios] 
                    br
                    | #[span.fw-normal Anaerobios] 
                    br
                    |-Biodiscos 
                    br
                    |-Filtro percolador 
                    br
                    |-Reactor UASB y RAP 
                    br
                    |-Fitorremediación 
                    br
                    |-Humedales artificiales 
                    br
                    |-Filtro FAFA 
                    br
                    |-Trampa de grasas 
                    br
                    |-Tanque séptico 
                tr
                  td Tratamientos terciarios
                  td -Micro filtración 
                    br
                    |-Ultrafiltración 
                    br
                    |-Osmosis inversa 
                    br
                    |-Electrodiálisis 
                    br
                    |-Eliminación de nutrientes 
                  td -Cloración 
                    br
                    |-Cerámico 
                    br
                    |-Ozono 
                    br
                    |-Procesos avanzados de oxidación 
                    br
                    |-Desinfección UV 
                    br
                    |-Resinas de intercambio iónico
                  td 
    
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Pretratamientos
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p Los pretratamientos y los que se presentarán enseguida son los más representativos, de acuerdo con su clasificación. 
          br
          br
          |Los pretratamientos engloban a aquellos procesos que se sitúan a la entrada de la planta depuradora para eliminar residuos sólidos, arenas y grasas, que de no ser separados dañarían mecánicamente los equipos de las siguientes fases del tratamiento y sedimentarían en las tuberías y conductos de la instalación, obstruyéndolos o bien producirían pérdida de eficacia (p.e. grasas en el reactor biológico). En todos los procesos se eliminan los contaminantes del agua residual por medios físicos. 
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/2.png', alt='')
    .mn.p-5(style="background-color: #fef7e2 ").mb-5
      .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
        h4.mb-0 Desbaste
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          p Es una operación en la que se eliminan los sólidos de mayor tamaño del agua residual. El agua se hace pasar por rejas o tamices y tiene como objetivo separar todos aquellos materiales de tamaño excesivamente grueso que, además de representar por sí una forma de contaminación (sólidos en suspensión), pueden dañar u obstaculizar las fases sucesivas del tratamiento, ver figura 2. 
        .col-lg-5.col-8(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 2
            br
            span.fst-italic Rejas de desbaste 
          img(src='@/assets/curso/temas/tema2/3.png', alt='')
          figcaption Nota. Tomado de Deagua (2020). http://blogdeagua.es/reja-de-desbaste/  
      .tarjeta.p-5.mb-4(style="background-color: #dee9f0 ")   
        h4 Tipos de rejas de desbaste según separación entre barrotes 
        p.mb-0 Las rejas de desbaste pueden clasificarse según el espacio libre que hay entre los barrotes. Esta distancia libre marcará qué tipo de sólidos quedarán atrapados y qué tipo podrán pasar al sistema de tratamiento de agua (Deagua, 2020). 
      .row.justify-content-center.mb-3
        .col-lg-6.mb-lg-0.mb-3
          .tarjeta.p-5.mb-4(style="background-color: #dee9f0 ").h-100
            h4 Rejas de desbaste de gruesos
            p Son rejas de desbaste para filtrar sólidos grandes; están compuestas por un recipiente y una reja con una separación entre barrotes de 12mm a 25mm, retienen la mayoría de los sólidos grandes y dejan pasar los sólidos más finos para que puedan ser tratados (Deagua, 2020), ver figura 3. 
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 3
              br
              span.fst-italic Rejas de desbaste
            figure
              img(src='@/assets/curso/temas/tema2/4.jpg', alt='')
              figcaption Nota. Tomado de Deagua (2020). http://blogdeagua.es/reja-de-desbaste/
        .col-lg-6.mb-lg-0.mb-3
          .tarjeta.p-5.mb-4(style="background-color: #dee9f0 ").h-100
            h4 Rejas de desbaste de finos
            p Son rejas de desbaste para filtrar sólidos finos, están compuestas por un recipiente y una reja con una separación entre barrotes de 6mm a 12mm, retienen los sólidos grandes y la mayoría de los sólidos finos, y solo dejan pasar los fangos más finos para que puedan ser tratados (Deagua, 2020), ver figura 4. 
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 4
              br
              span.fst-italic Rejas de desbaste finos
            figure
              img(src='@/assets/curso/temas/tema2/5.jpg', alt='')
              figcaption Nota. Tomado de Deagua (2020). http://blogdeagua.es/reja-de-desbaste/
      .row.justify-content-center
        .col-lg-6.mb-lg-0.mb-3
          .tarjeta.p-5.mb-4(style="background-color: #dee9f0 ").h-100
            h4 Las rejillas también operan de manera manual 
            p Las rejas de desbaste de limpieza manual son las más utilizadas por su economía, ya que el usuario deberá limpiar periódicamente la reja manualmente con un rastrillo y eliminar los sólidos atrapados. Las rejas de desbaste de limpieza automática se caracterizan por su funcionamiento mecánico. Atrapan los sólidos más gruesos y a través de un cepillo o brazo hidráulico las envían a un contenedor para su reciclado (Deagua, 2020). 
        .col-lg-6.mb-lg-0.mb-3
          .tarjeta.p-5.mb-4(style="background-color: #dee9f0 ").h-100
            h4 Cada tipo de reja de desbaste está compuesta de:
            p Reja de desbaste de gruesos, recipiente, tapa de registro, tubería de entrada y de salida, reja con separación entre barrotes de 12-25mm, reja de desbaste de finos, recipiente, tapa de registro, tubería de entrada y de salida y reja con separación entre barrotes de 6-12mm (Deagua, 2020, ver figura 5. 
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 5
              br
              span.fst-italic Desbastes 
            figure
              img(src='@/assets/curso/temas/tema2/6.jpg', alt='')
              figcaption Nota. Tomado de Deagua (2020). http://blogdeagua.es/reja-de-desbaste/
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Desarenado 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p El proceso de desarenado se utiliza para separar la arena, la grava, etc., arrastrada en suspensión por el efluente. Esta arena origina depósitos en canales y tuberías, abrasión y desgaste sobre los elementos mecánicos en movimiento y dificulta la eliminación y digestión de los lodos separados en los tanques de sedimentación, al aumentar su densidad (Cyclusid depuración industrial, s.f.), ver figura 6.
          br
          br
          |De acuerdo con la empresa mexicana Domos agua (2018), los tipos de desarenadores se dividen en:
        .tarjeta.p-4(style="background-color: #eaf8f2").mb-4
          p.mb-0 #[b • Desarenadores de flujo horizontal:] consiste en reducir la velocidad de flujo del agua, con el fin de que las partículas sólidas que se encuentran suspendidas se decanten y se depositen en el fondo. Esto se logra ensanchando el canal en un tramo, en donde existirán canales paralelos que ayuden en la limpieza de las partículas depositadas. Se debe medir el caudal y la velocidad mediante un canal parshall para mantener controlado el flujo de agua.
        .tarjeta.p-4(style="background-color: #eaf8f2").mb-4
          p.mb-0 #[b • Desarenadores de flujo vertical:] están compuestos por varios compartimentos, de tal manera que dé inicio a fin y, la velocidad sea decreciente, a través de estos compartimentos el agua fluye de forma vertical. En estos desarenadores se lleva a cabo la floculación (proceso químico en el que se añaden sustancias denominadas floculantes para hacer más eficiente la decantación de las partículas suspendidas). Los materiales con los que se construyen las paredes de los compartimentos son concreto, asbesto o madera y la profundidad de estos es de tres a cuatro metros. 
        .tarjeta.p-4(style="background-color: #eaf8f2").mb-4
          p.mb-0 #[b • Desarenadores de flujo inducido:] estos desarenadores tienen forma rectangular y en ellos se inyecta aire mediante aireadores tipo turbina para producir el movimiento del agua en forma de espiral, lo cual produce la decantación de los sólidos suspendidos. Este proceso también favorece la deposición de la materia orgánica. Posteriormente, se lleva a cabo la separación de las arenas de forma manual o mecanizada, de acuerdo con el tamaño de la planta, ver figura 7. 
      .col-lg-5.col-8(data-aos="fade-left") 
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 6
          br
          span.fst-italic Desarenador
        img(src='@/assets/curso/temas/tema2/7.jpg', alt='')
        figcaption Nota. Desarenador Santa Fe de la Laguna, Quiroga Michoacán. Tomado de Rivas (s.f.). https://sswm.info/es/gass-perspective-es/tecnologias-de/tecnologias-de-saneamiento-del-sistema/tratamiento-semi/tecnolog%C3%ADas-de-pretratamiento  
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 7
          br
          span.fst-italic Desarenadores 
        img(src='@/assets/curso/temas/tema2/8.jpg', alt='')
        figcaption Nota. Tomado de Universidad de Loja (2015).  https://vdocuments.mx/calculo-del-desarenador.html  
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Desengrasado
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right").mb-lg-0.mb-3
        p Después de cualquiera de los tres procesos de desarenado se tiene que efectuar un desengrasado para separar las grasas y aceites de los canales, previniendo que los siguientes procesos se vean afectados. Aunque existen desarenadores que llevan el proceso de desengrasado de manera conjunta con el desarenado mediante aire comprimido (Domos agua, 2018), ver figura 8.
          br
          br
          |De acuerdo con la empresa Cyclusid el desengrasado consiste en la separación de las grasas y aceites arrastrados por el agua residual. Las grasas en las aguas residuales crean numerosos problemas en el proceso de depuración, entre los que se destacan:
        div(style="background-color: #fdf8e4 ").p-4
          ul.lista-ul--color.fw-bold
            li
              i.fas.fa-check
              | Adhesión a aparatos, conductos o depósitos, dificultando la depuración. 

            li
              i.fas.fa-check
              | Obstrucción de las rejillas finas. 

            li
              i.fas.fa-check
              | Formación de una capa en la superficie de los decantadores, que dificulta la sedimentación al atraer hacia arriba pequeñas partículas de materia orgánica. 
            li
              i.fas.fa-check
              | Dificulta la correcta aireación en la depuración de fangos activos.
      .col-lg-6.col-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 8
          br
          span.fst-italic Desarenado, desengrasado y elevación 
        img(src='@/assets/curso/temas/tema2/9.jpg', alt='')
        figcaption Nota. Tomado de Educarex (2007). 
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Homogenización
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right").mb-lg-0.mb-3
        p  La situación más habitual es que la entrada de agua residual a la planta depuradora sea variable en el tiempo, tanto en lo que respecta al caudal como a la carga contaminante. Estas variaciones, especialmente las descargas, dificultan el correcto desarrollo de los tratamientos, ya sean de tipo fisicoquímico o biológico. Para solventar tales problemas se puede recurrir a la igualación de caudales y/o a la homogeneización de la concentración de contaminantes, es decir, optimizar las condiciones operativas de las fases siguientes (Cyclusid depuración industrial, s.f.), ver figura 9.
      .col-lg-6.col-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 9
          br
          span.fst-italic Tanque de homogenización
        img(src='@/assets/curso/temas/tema2/10.jpg', alt='')
        figcaption Nota. Tomado de Tecnología Assul, S.A. De C.V.(s.f.). 
    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Tratamientos primarios del agua residual 
    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right")
        p Son aquellos que eliminan los sólidos en suspensión presentes en el agua. Los principales procesos fisicoquímicos que pueden ser incluidos en el tratamiento primario son: 
      .col-lg-2
        .tarjeta-avatar.pt-4
          img(src='@/assets/curso/temas/tema2/10.svg' alt='AvatarTop' style="width: 52px")
          .tarjeta.w-100.rounded-0(style="background-color: #e2eacb")
            h5.text-center.mb-0 Sedimentación
      .col-lg-2
        .tarjeta-avatar.pt-4
          img(src='@/assets/curso/temas/tema2/11.svg' alt='AvatarTop' style="width: 52px")
          .tarjeta.w-100.rounded-0(style="background-color: #e2eacb")
            h5.text-center.mb-0 Flotación
      .col-lg-2
        .tarjeta-avatar.pt-4
          img(src='@/assets/curso/temas/tema2/12.svg' alt='AvatarTop' style="width: 52px")
          .tarjeta.w-100.rounded-0(style="background-color: #e2eacb")
            h5.text-center.mb-0 Coagulación – floculación
      .col-lg-2
        .tarjeta-avatar.pt-4
          img(src='@/assets/curso/temas/tema2/13.svg' alt='AvatarTop' style="width: 52px")
          .tarjeta.w-100.rounded-0(style="background-color: #e2eacb")
            h5.text-center.mb-4 Filtración (Acuatecnia S.A.S., 2018)
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Sedimentación
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p Es un proceso de separación por gravedad que hace que una partícula más densa que el agua tenga una trayectoria descendente, depositándose en el fondo del sedimentador. Está en función de la densidad del líquido, del tamaño, del peso específico y de la morfología de las partículas (Acuatecnia S.A.S, 2018), ver figuras 10 y 11. 
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 10 
          br
          span.fst-italic Decantación primaria
        img(src='@/assets/curso/temas/tema2/14.jpg', alt='')
        figcaption Nota. Tomado de Educarex (2007).  http://contenidos.educarex.es/mci/2007/11/activid/edar/edar.html 
      .col-lg-4(data-aos="fade-left")
        .tarjeta.p-3(style="background-color: #fdf8e4")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 11
            br
            span.fst-italic  Sedimentador circular
          img(src='@/assets/curso/temas/tema2/15.png', alt='')
          figcaption Nota. Tomado de Tratamiento del agua (s.f.). http://www.tratamientodelagua.com.mx/wp-content/uploads/Sedimentador-circular.png  
    p.mb-5(data-aos='fade-right') De acuerdo con Maldonado (s.f.), los tipos de sedimentación se pueden clasificar como:
    .row.justify-content-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/16.svg', alt='AvatarTop')
      .col-lg-9.col-12(data-aos="fade-left")
        .tarjeta.w-100(style="background-color: #e2eacb").p-4.mb-3
          p.mb-0 #[b • Sedimentación de partículas discretas:] son aquellas partículas que no cambian de características (forma, tamaño, densidad) durante la caída. Se denomina sedimentación o sedimentación simple al proceso de depósito de partículas discretas. Este tipo de partículas y esta forma de sedimentación se presentan en los desarenadores, en los sedimentadores y en los presedimentadores como paso previo a la coagulación en las plantas de filtración rápida y también en sedimentadores como paso previo a la filtración lenta.  
        .tarjeta.w-100(style="background-color: #e2eacb").p-4.mb-3
          p.mb-0 #[b • Sedimentación de partículas floculentas:] partículas floculentas son aquellas producidas por la aglomeración de partículas coloides desestabilizadas a consecuencia de la aplicación de agentes químicos. A diferencia de las partículas discretas, las características de este tipo de partículas —forma, tamaño, densidad— sí cambian durante la caída; se denomina sedimentación floculenta o decantación al proceso de depósito de partículas floculentas. Este tipo de sedimentación se presenta en la clarificación de aguas como proceso intermedio entre la coagulación-floculación y la filtración rápida. 
        .tarjeta.w-100(style="background-color: #e2eacb").p-4.mb-3
          p.mb-0 #[b • Sedimentación por caída libre e interferida:] cuando existe una baja concentración de partículas en el agua, estas se depositan sin interferir y se denomina a este fenómeno caída libre. En cambio, cuando hay altas concentraciones de partículas se producen colisiones que las mantienen en una posición fija y ocurre un depósito masivo en lugar de individual. A este proceso de sedimentación se le denomina depósito o caída interferida o sedimentación zonal. Cuando las partículas ya en contacto forman una masa compacta que inhibe una mayor consolidación se produce una compresión o zona de compresión. Este tipo de sedimentación se presenta en los concentradores de lodos de las unidades de decantación con manto de lodos. 
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta.w-100(style="background-color: #e2eacb").p-4.mb-3
          p #[b • Decantación:] Ver figura 12
          .row.justify-content-center.mb-5
            .col-lg-10
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 12 
                br
                span.fst-italic Decantación
              img(src='@/assets/curso/temas/tema2/17.jpg', alt='')
              figcaption Nota. Tomado de El agua potable (s.f.). http://www.elaguapotable.com/decantacion.htm 
    p.mb-5(data-aos='fade-right') #[b • Los tipos de sedimentadores se clasifican por:]  Ver figura 13
    .bg-1.py-4.px-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 13 
        br
        span.fst-italic Tipos de sedimentadores 
      img(src='@/assets/curso/temas/tema2/18.svg', alt='')
      figcaption Nota. Tomado de Pedraza (2020).
    p.mb-5(data-aos='fade-right') #[b • Los sedimentadores y su clasificación: ]
    p.mb-5(data-aos='fade-right') Los sedimentadores pueden ser tratamientos primarios o secundarios dependiendo de su ubicación dentro del tren de tratamiento, esto depende de las necesidades de tratamiento de acuerdo con las características del agua residual inicial.
      br
      br
      |El siguiente esquema ilustra las diferencias entre ambos sedimentadores:
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right") 
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 14
          br
          span Sedimentadores
        img(src='@/assets/curso/temas/tema2/19.svg', alt='')
        figcaption Nota. Tomado de Pedraza (2020).
      .col-lg-5.col-8: img(src='@/assets/curso/temas/tema2/20.png', alt='')
</template>

<script>
export default {
  name: 'Tema2',
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
