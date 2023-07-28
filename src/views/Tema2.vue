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
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 1 
            span.fst-italic Tipos de tratamiento
          .tabla-a.text-start
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
                  td
                    ol.lista-ol
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Desbaste
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold  Tamizado
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold  Cribado
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Desarenadores
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Sedimentador 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Flotación
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Homogenización
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Torres y bandejas de enfriamiento o aireación 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Filtración 
                
                  td 
                    ol.lista-ol
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Neutralización 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Coagulación
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Floculación horizontal y vertical
                  td 
                tr
                  td Tratamientos secundarios 
                  td 
                  td 
                  td
                    ol.lista-ol
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Aireación extendida 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Lagunas de oxidación
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Digestores
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold  Aerobios
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold  Anaerobios 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Biodiscos 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Filtro percolador 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Reactor UASB y RAP 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Fitorremediación 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Humedales artificiales 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Filtro FAFA 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Trampa de grasas 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Tanque séptico
                  
                  
                tr
                  td Tratamientos terciarios
                  td 
                    ol.lista-ol
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Micro filtración 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Ultrafiltración 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Osmosis inversa
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Electrodiálisis 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Eliminación de nutrientes 
                  
                  
                  
                  td
                    ol.lista-ol
                      li.d-flex.mb-1 
                        span.text-bold - 
                        p.mb-0.fw-bold Cloración 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Cerámico
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Ozono 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Procesos avanzados de oxidación 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Desinfección UV 
                      li.d-flex.mb-1
                        span.text-bold - 
                        p.mb-0.fw-bold Resinas de intercambio iónico
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
          p Es una operación en la que se eliminan los sólidos de mayor tamaño del agua residual. El agua se hace pasar por rejas o tamices y tiene como objetivo separar todos aquellos materiales de tamaño excesivamente grueso que, además de representar por sí una forma de contaminación (sólidos en suspensión), pueden dañar u obstaculizar las fases sucesivas del tratamiento, ver figura 1. 
        .col-lg-5.col-8(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1
            br
            span.fst-italic Rejas de desbaste 
          img(src='@/assets/curso/temas/tema2/3.png', alt='')
      .tarjeta.p-5.mb-4(style="background-color: #dee9f0 ")   
        h4 Tipos de rejas de desbaste según separación entre barrotes 
        p.mb-0 Las rejas de desbaste pueden clasificarse según el espacio libre que hay entre los barrotes. Esta distancia libre marcará qué tipo de sólidos quedarán atrapados y qué tipo podrán pasar al sistema de tratamiento de agua (Deagua, 2020). 
      .row.justify-content-center.mb-3
        .col-lg-6.mb-lg-0.mb-3
          .tarjeta.p-5.mb-4(style="background-color: #dee9f0 ").h-100
            h4 Rejas de desbaste de gruesos
            p Son rejas de desbaste para filtrar sólidos grandes; están compuestas por un recipiente y una reja con una separación entre barrotes de 12mm a 25mm, retienen la mayoría de los sólidos grandes y dejan pasar los sólidos más finos para que puedan ser tratados (Deagua, 2020), ver figura 2. 
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 2
              br
              span.fst-italic Rejas de desbaste
            figure
              img(src='@/assets/curso/temas/tema2/4.png', alt='')
        .col-lg-6.mb-lg-0.mb-3
          .tarjeta.p-5.mb-4(style="background-color: #dee9f0 ").h-100
            h4 Rejas de desbaste de finos
            p Son rejas de desbaste para filtrar sólidos finos, están compuestas por un recipiente y una reja con una separación entre barrotes de 6mm a 12mm, retienen los sólidos grandes y la mayoría de los sólidos finos, y solo dejan pasar los fangos más finos para que puedan ser tratados (Deagua, 2020), ver figura 3. 
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 3
              br
              span.fst-italic Rejas de desbaste finos
            figure
              img(src='@/assets/curso/temas/tema2/5.png', alt='')
      .row.justify-content-center
        .col-lg-6.mb-lg-0.mb-3
          .tarjeta.p-5.mb-4(style="background-color: #dee9f0 ").h-100
            h4 Las rejillas también operan de manera manual 
            p Las rejas de desbaste de limpieza manual son las más utilizadas por su economía, ya que el usuario deberá limpiar periódicamente la reja manualmente con un rastrillo y eliminar los sólidos atrapados. Las rejas de desbaste de limpieza automática se caracterizan por su funcionamiento mecánico. Atrapan los sólidos más gruesos y a través de un cepillo o brazo hidráulico las envían a un contenedor para su reciclado (Deagua, 2020). 
        .col-lg-6.mb-lg-0.mb-3
          .tarjeta.p-5.mb-4(style="background-color: #dee9f0 ").h-100
            h4 Cada tipo de reja de desbaste está compuesta de:
            p Reja de desbaste de gruesos, recipiente, tapa de registro, tubería de entrada y de salida, reja con separación entre barrotes de 12-25mm, reja de desbaste de finos, recipiente, tapa de registro, tubería de entrada y de salida y reja con separación entre barrotes de 6-12mm (Deagua, 2020, ver figura 4. 
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 4
              br
              span.fst-italic Desbastes 
            figure
              img(src='@/assets/curso/temas/tema2/6.jpg', alt='Texto alternativo descriptivo: Gráfica que muestra una acción de desbaste mediante el uso de rejas de gruesos, rejas de finos, contenedores y cintas transportadoras.')
              figcaption Nota. Tomado de Deagua (2020). http://blogdeagua.es/reja-de-desbaste/
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Desarenado 
    p.mb-5(data-aos='fade-right') El proceso de desarenado se utiliza para separar la arena, la grava, etc., arrastrada en suspensión por el efluente. Esta arena origina depósitos en canales y tuberías, abrasión y desgaste sobre los elementos mecánicos en movimiento y dificulta la eliminación y digestión de los lodos separados en los tanques de sedimentación, al aumentar su densidad (Cyclusid depuración industrial, s.f.), ver figura 5.
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 5
          span Desarenador
        img(src='@/assets/curso/temas/tema2/7.jpg', alt='')
        figcaption #[b Nota.] Desarenador Santa Fe de la Laguna, Quiroga Michoacán. Tomado de Rivas (s.f.). https://sswm.info/es/gass-perspective-es/tecnologias-de/tecnologias-de-saneamiento-del-sistema/tratamiento-semi/tecnolog%C3%ADas-de-pretratamiento  
      .col-lg-7
        p De acuerdo con la empresa mexicana Domos agua (2018), los tipos de desarenadores se dividen en:
        .tarjeta.p-4(style="background-color: #eaf8f2").mb-4
          p.mb-0 #[b • Desarenadores de flujo horizontal:] consiste en reducir la velocidad de flujo del agua, con el fin de que las partículas sólidas que se encuentran suspendidas se decanten y se depositen en el fondo. Esto se logra ensanchando el canal en un tramo, en donde existirán canales paralelos que ayuden en la limpieza de las partículas depositadas. Se debe medir el caudal y la velocidad mediante un canal parshall para mantener controlado el flujo de agua.
        .tarjeta.p-4(style="background-color: #eaf8f2").mb-4
          p.mb-0 #[b • Desarenadores de flujo vertical:] están compuestos por varios compartimentos, de tal manera que dé inicio a fin y, la velocidad sea decreciente, a través de estos compartimentos el agua fluye de forma vertical. En estos desarenadores se lleva a cabo la floculación (proceso químico en el que se añaden sustancias denominadas floculantes para hacer más eficiente la decantación de las partículas suspendidas). Los materiales con los que se construyen las paredes de los compartimentos son concreto, asbesto o madera y la profundidad de estos es de tres a cuatro metros. 
        .tarjeta.p-4(style="background-color: #eaf8f2").mb-4
          p.mb-0 #[b • Desarenadores de flujo inducido:] estos desarenadores tienen forma rectangular y en ellos se inyecta aire mediante aireadores tipo turbina para producir el movimiento del agua en forma de espiral, lo cual produce la decantación de los sólidos suspendidos. Este proceso también favorece la deposición de la materia orgánica. Posteriormente, se lleva a cabo la separación de las arenas de forma manual o mecanizada, de acuerdo con el tamaño de la planta, ver figura 6. 
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 6
          br
          span.fst-italic Desarenadores 
        img(src='@/assets/curso/temas/tema2/8.jpg', alt='Ilustración que muestra un desarenador y sus partes: canal de llegada, compuerta de admisión, cámara de sedimentación, canal directo, compuerta de lavado, vertedero, canal de lavado, canal de salida.')
        figcaption Nota. Tomado de Universidad de Loja (2015).  https://vdocuments.mx/calculo-del-desarenador.html  
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Desengrasado
    p.mb-5(data-aos='fade-right') Después de cualquiera de los tres procesos de desarenado se tiene que efectuar un desengrasado para separar las grasas y aceites de los canales, previniendo que los siguientes procesos se vean afectados. Aunque existen desarenadores que llevan el proceso de desengrasado de manera conjunta con el desarenado mediante aire comprimido (Domos agua, 2018), ver figura 7.
    .row.justify-content-center.mb-5
      .col-lg-6.col-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 7
          br
          span.fst-italic Desarenado, desengrasado y elevación 
        img(src='@/assets/curso/temas/tema2/9.jpg', alt='Ilustración que muestra el proceso de desarenado, desengrasado y elevación desde el canal de recogida de arenas hasta el canal de recogida de grasas.')
        figcaption Nota. Tomado de Educarex (2007). 
      .col-lg-6(data-aos="fade-right").mb-lg-0.mb-3
        p De acuerdo con la empresa Cyclusid el desengrasado consiste en la separación de las grasas y aceites arrastrados por el agua residual. Las grasas en las aguas residuales crean numerosos problemas en el proceso de depuración, entre los que se destacan:
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
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Homogenización
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right").mb-lg-0.mb-3
        p  La situación más habitual es que la entrada de agua residual a la planta depuradora sea variable en el tiempo, tanto en lo que respecta al caudal como a la carga contaminante. Estas variaciones, especialmente las descargas, dificultan el correcto desarrollo de los tratamientos, ya sean de tipo fisicoquímico o biológico. Para solventar tales problemas se puede recurrir a la igualación de caudales y/o a la homogeneización de la concentración de contaminantes, es decir, optimizar las condiciones operativas de las fases siguientes (Cyclusid depuración industrial, s.f.), ver figura 8.
      .col-lg-6.col-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 8
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
      .col-lg-2.mb-lg-0.mb-3.col-8
        .tarjeta-avatar.pt-4
          img(src='@/assets/curso/temas/tema2/10.svg' alt='AvatarTop' style="width: 52px")
          .tarjeta.w-100.rounded-0(style="background-color: #e2eacb")
            h5.text-center.mb-4 Sedimentación
      .col-lg-2.mb-lg-0.mb-3.col-8
        .tarjeta-avatar.pt-4
          img(src='@/assets/curso/temas/tema2/11.svg' alt='AvatarTop' style="width: 52px")
          .tarjeta.w-100.rounded-0(style="background-color: #e2eacb")
            h5.text-center.mb-4 Flotación
      .col-lg-2.mb-lg-0.mb-3.col-8
        .tarjeta-avatar.pt-4
          img(src='@/assets/curso/temas/tema2/12.svg' alt='AvatarTop' style="width: 52px")
          .tarjeta.w-100.rounded-0(style="background-color: #e2eacb")
            h5.text-center.mb-4 Coagulación – floculación
      .col-lg-2.mb-lg-0.mb-3.col-8
        .tarjeta-avatar.pt-4
          img(src='@/assets/curso/temas/tema2/13.svg' alt='AvatarTop' style="width: 52px")
          .tarjeta.w-100.rounded-0(style="background-color: #e2eacb")
            h5.text-center.mb-4 Filtración (Acuatecnia S.A.S., 2018)
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Sedimentación
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p Es un proceso de separación por gravedad que hace que una partícula más densa que el agua tenga una trayectoria descendente, depositándose en el fondo del sedimentador. Está en función de la densidad del líquido, del tamaño, del peso específico y de la morfología de las partículas (Acuatecnia S.A.S, 2018), ver figuras 9 y 10. 
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 9 
          br
          span.fst-italic Sedimentador circular
        img(src='@/assets/curso/temas/tema2/14.jpg', alt='')
        figcaption Nota. Tomado de Educarex (2007).  https://iesmunoztorrero.educarex.es/web/aguaserena/activid/edar/4.decantacion-pri.gif  
      .col-lg-4(data-aos="fade-left")
        .tarjeta.p-3(style="background-color: #fdf8e4")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 10
            br
            span.fst-italic  Decantación primaria
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
      .col-lg-10
        .tarjeta.w-100(style="background-color: #EAF8F2").p-4.mb-3
          p #[b • Decantación:] es un método físico para separar componentes de distinta densidad, de modo que el más denso se ubica en el fondo del decantador, en virtud de la fuerza de gravedad. De este modo, el agua clara o clarificada se ubicará en la superficie.
          .row.justify-content-center.mb-5
            .col-lg-10
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 11 
                br
                span.fst-italic Decantación
              img(src='@/assets/curso/temas/tema2/17.jpg', alt='')
              figcaption Nota. Tomado de El agua potable (s.f.). http://www.elaguapotable.com/decantacion.htm 
    p.mb-5(data-aos='fade-right') #[b • Los tipos de sedimentadores se clasifican por:]  su forma, la cual puede ser cuadrada, rectangular o redonda. En virtud del escurrimiento que proporcionan también pueden tipificarse como sedimentadores de escurrimiento vertical o de escurrimiento radial. En general, los tipos de sedimentadores son los que presenta la siguiente figura:

    .bg-1.py-4.px-5.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 12
        br
        span.fst-italic Tipos de sedimentadores 
      img(src='@/assets/curso/temas/tema2/18.svg', alt='Diagrama que enuncia los tipos de sedimentadores: Estáticos, que son de flujo vertical y horizontal, los dinámicos, que son de manto de lodos y los luminares, que pueden ser de láminas horizontales o inclinadas.')
      figcaption Nota. Tomado de Pedraza (2020).
    p.mb-5(data-aos='fade-right') #[b • Los sedimentadores y su clasificación: ]
    p.mb-5(data-aos='fade-right') Los sedimentadores pueden ser tratamientos primarios o secundarios dependiendo de su ubicación dentro del tren de tratamiento, esto depende de las necesidades de tratamiento de acuerdo con las características del agua residual inicial.
      br
      br
      |El siguiente esquema ilustra las diferencias entre ambos sedimentadores:
    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-3(data-aos="fade-right") 
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 13
          br
          span Sedimentadores
        img(src='@/assets/curso/temas/tema2/19.svg', alt='')
        figcaption Nota. Tomado de Pedraza (2020).
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Flotación
    .row.justify-content-center.mb-5
      .col-lg-6.col-12(data-aos="fade-right")
        p Es un proceso físico fundamentado en la diferencia de densidades. La flotación permite separar la materia sólida o líquida de menor densidad que la del fluido, por ascenso de esta hasta la superficie del fluido, ya que en este caso las fuerzas que tiran hacia arriba (rozamiento y empuje del líquido) superan a la fuerza de la gravedad. Se generan pequeñas burbujas de gas (aire), que se asociarán a las partículas presentes en el agua y serán elevadas hasta la superficie, donde son arrastradas y sacadas del sistema (Acuatecnia S.A.S., 2018), ver figura 14.  
      .col-lg-6.col-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 14
          br
          span.fst-italic  Sistema de flotación
        img(src='@/assets/curso/temas/tema2/21.png', alt='')
        figcaption Nota. Tomado de Aguas Sigma (2016). https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJB-E5CFFX1Cehh4NVp4a-E9Rer2hlmr0MSMTMPRjVTKW2M3U9 
    .tarjeta.bg-slyde.py-5.px-3.mb-5
      SlyderA(tipo='b').slyder-2
        .row.mx-3
          .col-lg-6.mb-4.mb-md-0
            h4 ¿En qué consiste la flotación?
            p En unir las burbujas de aire al material suspendido, causando una reducción neta del peso específico. Las burbujas de tamaño micrométrico se producen por disolución del aire en el agua residual a presiones elevadas, seguida por su posterior liberación a la presión atmosférica. Cuando la presión se reduce a las condiciones atmosféricas el aire disuelto presente en exceso hasta la saturación es liberado en forma de burbujas extremadamente finas que se adhieren a las materias en suspensión.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/22.png', alt='Texto que describa la imagen')
        .row.mx-3
          .col-lg-6.mb-4.mb-md-0
            h4 ¿Qué sistema se usa para la flotación? 
            p Los sólidos, grasas y flóculos flotan hacia la parte superior de la celda de flotación por aire disuelto y se eliminan mediante un dispositivo de barrido. Para el efecto de flotación se utiliza un sistema de presurización de agua recirculada. Dentro de ellos podemos encontrar el sistema de flotación por aire disuelto que se ha convertido en el sistema de clarificación de aguas más versátil (Aguas Sigma, 2016). 
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/23.png', alt='Texto que describa la imagen')
        .row.mx-3
          .col-lg-6.mb-4.mb-md-0
            h4  ¿Qué permiten solucionar los sistemas de flotación? 
            p Permiten dar solución a gran cantidad de necesidades como: 
              br
              br
              |• Pretratamiento de aguas residuales: separación de grasas y  sólidos en suspensión. 
              br
              |• Tratamientos físico-químicos. 
              br
              |• Clarificación de aguas de reactores biológicos.  
              br
              |• Espesadores de lodos. 
              br
              |• Pretratamiento de aguas potables - separación de sólidos en   suspensión. 
              br
              |• Pretratamiento en plantas de osmosis inversa - separación de  algas. 
              br
              |• Pretratamiento en aguas de proceso. 
              br
              |• Recuperación de fibra en plantas papeleras. 
              br
              br
              |Ver figura que explica el proceso de flotación 
          .col-lg-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 15
              br
              span.fst-italic Flotación 
            figure
              img(src='@/assets/curso/temas/tema2/24.png', alt='Texto que describa la imagen')
              figcaption Nota. Tomado de El agua potable (s.f.). http://www.elaguapotable.com/decantacion.htm
        .row.mx-3
          .col-lg-6.mb-4.mb-md-0
            h4 ¿Qué es el sistema de flotación por aire inducido? 
            p Cuando el objetivo no es disponer de una gran eficiencia y calidad del agua y, la necesidad es disponer de un equipo robusto, fácil de utilizar, de bajo mantenimiento y económico, existe el sistema de flotación por aire inducido. En este el corazón del sistema es el inductor especial: el aireador impulsor gira creando un remolino y una depresión dentro de la celda que produce una aspiración del aire a través del eje hueco. El aire penetra en el líquido al llegar a la celda de aireación, mediante grandes cantidades de micro burbujas. La mezcla rica en aire es liberada en la celda de flotación facilitando la separación de fases (Aguas Sigma, 2016). 
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/25.png', alt='Texto que describa la imagen')
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Coagulación-floculación
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        p En muchos casos parte de la materia en suspensión está formada por partículas de muy pequeño tamaño, lo que conforma una suspensión coloidal. Estas suspensiones coloidales suelen ser muy estables, en muchas ocasiones debido a interacciones eléctricas entre las partículas. Por tanto, tienen una velocidad de sedimentación extremadamente lenta, por lo que haría inviable un tratamiento mecánico clásico. Una forma de mejorar la eficacia de todos los sistemas de eliminación de materia en suspensión es la adición de ciertos reactivos químicos que, en primer lugar, desestabilicen la suspensión coloidal (coagulación) y a continuación favorezcan la floculación de estas para obtener partículas fácilmente sedimentables (Acuatecnia S.A.S., 2018), ver figura 16. 
      .col-lg-6.col-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 16
          br
          span.fst-italic Floculadores 
        img(src='@/assets/curso/temas/tema2/26.png', alt='Texto que describa la imagen')
        figcaption Nota. Tomado de Eathisa (2018). http://eathisa.com/productos/floculadores/ 
    .tarjeta.bg-slyde.p-5.mb-5
      SlyderA(tipo='b')
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Objetivo principal 
            p De acuerdo con FRC Systems, el objetivo principal de un floculador es mezclar los coagulantes y los floculantes con el agua residual y formar sólidos que puedan flotar. Los componentes principales incluyen una estructura metálica, una entrada, válvulas de muestreo, válvulas de inyección, tuberías y una salida. Las tuberías están configuradas de manera ascendente y serpenteante para reducir la cantidad de espacio necesario para brindar un tiempo de reacción química suficiente (FRC Systems, 2015). 
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/27.svg', alt='Texto que describa la imagen')
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Mecanismo – funcionamiento 
            p Lo que ocurre dentro de un floculador es un concepto bastante simple, se bombea agua hacia del floculador, inmediatamente después de la entrada se da inicio a la dosificación química, generalmente coagulantes, mediante válvulas de inyección. Más adelante se inyecta un polímero floculante y se mezcla en las secciones subsiguientes del floculador. Algunas unidades incluyen un medidor de pH en línea y puntos de inyección para agentes neutralizantes (FRC Systems, 2015), ver figura 17. 
          .col-lg-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 17
              br
              span.fst-italic Coagulantes y floculantes 
            figure
              img(src='@/assets/curso/temas/tema2/28.png', alt='Texto que describa la imagen')
              figcaption Nota. Tomado de Acoua tecnología (2020). https://acquatecnologiaperu.com/producto/coagulantes-y-floculantes 
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Dosificación química 
            p Se puede variar de acuerdo con el tipo de floculante, pues permite que las partículas coloidales desestabilizadas o las partículas formadas durante la etapa de coagulación se ensamblen en agregados y luego se puedan separar del medio acuoso; entre ellos se encuentran los floculantes catiónicos y los aniónicos (FRC systems, 2015). 
          .col-lg-6
            h4 Preparación de los floculantes aniónicos 
            p Los floculantes aniónicos son preparados a base de copolímeros de acrilamida y ácido acrílico, con carga iónica negativa. Se unen con cargas catiónicas residuales sobre coagulantes adsorbidos a coloides coagulados. Su poder floculante intrínseco aumenta con el peso molecular. Las poliacrilamidas tienen el peso molecular más alto en el intervalo de 10-20 millones. Otros polímeros presentan propiedades específicas para condiciones específicas (Ingeniería Liquid technologies, s.f.).
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Floculantes catiónicos 
            p Se basan en copolímeros de poliacrilamida que proporcionan una amplia gama de ionicidades además de los pesos moleculares necesarios para lograr el máximo rendimiento en cada aplicación. De acuerdo con Acoua tecnología (2020), puede haber varias cargas en un floculante. Hay polímeros catiónicos, basados en el nitrógeno, polímeros aniónicos, basados en los iones del carboxilato y los polianfolitos, que llevan cargas positivas y negativas.  
          .col-lg-6
            h4 Desestabilización de partículas 
            p Los principales coagulantes y floculantes utilizados para desestabilizar las partículas y producir floculantes en agua son: 
            .row.mb-5
              .col-lg-10
                div(style="background-color: #fef7e2").p-4
                  ul.lista-ul--color.fw-bold
                    li
                      i.fas.fa-check
                      |Sulfato de aluminio. 
                    li
                      i.fas.fa-check
                      |Aluminato de sodio. 
                    li
                      i.fas.fa-check
                      |Cloruro de aluminio.
                    li
                      i.fas.fa-check
                      |Cloruro férrico. 
                    li
                      i.fas.fa-check
                      |Sulfato férrico. 
                    li
                      i.fas.fa-check
                      |Sulfato ferroso.
                    li
                      i.fas.fa-check
                      |Polielectrolitos (Acoua tecnología, 2020).
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Filtración
    p.mb-5(data-aos='fade-right') Es una operación en la que se hace pasar el agua a través de un medio poroso, con el objetivo de retener la mayor cantidad posible de materia en suspensión. El medio poroso tradicionalmente utilizado es un lecho de arena, de altura variable (Acuatecnia S.A.S., 2018), ver figura 18. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .rounded-2.p-5(style="background-color: #dee9f0 ")
          .row.justify-content-center.mb-5
            .col-lg-8
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 18 
                br
                span.fst-italic Filtración 
              img(src='@/assets/curso/temas/tema2/29.jpg', alt='')
              figcaption Nota. Tomado de Pedraza (2017). Filtración de aguas residuales
    TabsC.color-acento-contenido.tabs-c-editada.mb-5
      .py-4.py-md-5.px-4(titulo="Operación unitaria" style="background-color: #f3f9ff")
        .row
          .col-md-8.mb-4.mb-md-0
            p La filtración como operación unitaria para los procesos de tratamiento de aguas residuales es una práctica relativamente reciente. Actualmente la filtración se emplea de modo generalizado para conseguir una mayor eliminación de sólidos en suspensión, de los efluentes de los procesos de tratamiento biológicos y químicos, también se utiliza para la eliminación del fósforo precipitado por vía química, y como etapa previa de un proceso de electrodiálisis (Otero, 2006).  
          .col-md-4
            img(src='@/assets/curso/temas/tema2/30.png', alt='')
      .py-4.py-md-5.px-4(titulo="Formas de aplicación de la filtración " style="background-color: #f3f9ff")
        .row
          .col-md-8.mb-4.mb-md-0
            p La filtración puede efectuarse de muchas formas, con baja carga superficial (filtros lentos) o con alta carga superficial (filtros rápidos), en medios porosos (pastas arcillosas, papel de filtro) o en medios granulares (arena, antracita, granate o combinados), con flujo ascendente, descendente y mixto (parte ascendente y parte descendente). Por otro lado, el filtro puede trabajar a presión o por gravedad, según sea la magnitud de la carga hidráulica que exista sobre el lecho filtrante (Otero, 2006). 
          .col-md-4
            img(src='@/assets/curso/temas/tema2/31.png', alt='')
      .py-4.py-md-5.px-4(titulo="Clasificación de los filtros" style="background-color: #f3f9ff")
        .row.justify-content-center
          .col-lg-12.mb-4.mb-md-0
            p Los filtros pueden clasificarse de la siguiente manera, ver tabla 2. 
          .col-lg-10
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Tabla 2
              span.fst-italic Velocidad de filtración
            .tabla-e.text-center.mb-5
              table
                thead
                  tr(style="background-color: #badc61 ")
                    th Velocidad de filtración
                    th Medio filtrante usado
                    th Carga sobre el lecho
                tbody.bg-white
                  tr
                    td(rowspan="4") Rápidos: 
                      br
                      |120-360 m3 
                      br
                      |/(m2 
                      br
                      |día 
                    td Arena 
                    td(rowspan="2") Por gravedad
                  tr
                    td Antracita
                  tr
                    td Mixtos: 
                      br
                      |Antracita (35 - 50 cm) 
                      br
                      |Arena (20-35 cm)
                    td(rowspan="2") Por presión
                  tr
                    td Mixtos: arena, 
                      br
                      |antracita, granate
                  tr
                    td Lentos: 
                      br
                      |7-14 m3 
                      br
                      |/(m2 
                      br
                      |día) 
                    td Arena 
                      br
                      |(h= 60-100 cm) 
                    td Por gravedad
      .py-4.py-md-5.px-4(titulo="Otras clasificaciones" style="background-color: #f3f9ff")
        .row
          .col-md-8.mb-4.mb-md-0
            p De igual forma, los filtros también se clasifican por medio filtrante, es decir, el material de relleno en cantidad, capas y características según las necesidades del agua a tratar, ver figura 19.
          .col-md-4
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 19
              br
              span.fst-italic Velocidad de filtración
            img(src='@/assets/curso/temas/tema2/32.png', alt='')
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Tratamientos secundarios del agua residual 
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/33.jpg', alt='')
      .col-lg-7(data-aos="fade-left")
        p El tratamiento secundario de depuración constituye una serie de importantes procesos de naturaleza biológica de tratamiento de las aguas residuales que tienen en común la utilización de microorganismos (entre las que destacan las bacterias) para llevar a cabo la eliminación de materia orgánica biodegradable, tanto coloidal como disuelta, así como la eliminación de compuestos que contienen elementos nutrientes (N y P) (Cyclusid depuración industrial, s.f.). 
          br 
          br 
          |En la mayor parte de los casos la materia orgánica constituye la fuente de energía y de carbono que necesitan los microorganismos para su crecimiento. Además, también es necesaria la presencia de nutrientes que contengan los elementos esenciales para el crecimiento, especialmente los compuestos que contengan N y P, y por último, en el caso de sistema aerobio, la presencia de oxígeno disuelto en el agua. Este último aspecto será clave a la hora de elegir el proceso biológico más conveniente (Cyclusid depuración industrial, s.f.).
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Digestor aeróbico
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p Es un método alternativo de tratar los lodos orgánicos producidos en el curso de las diversas operaciones de tratamiento. Los digestores aeróbicos se pueden emplear para el tratamiento de: (1) únicamente lodos activados o de filtros percoladores; (2) mezclas de lodos activados o de filtros percoladores con lodos primarios, o (3) lodo biológico en exceso de plantas de tratamiento de lodos activados sin sedimentación primaria. Actualmente, suelen emplearse dos variantes del proceso de digestión aerobia: el sistema convencional y el sistema con oxígeno puro, aunque también se ha empleado la digestión aerobia termófila (Aguamarket, 2017), ver figura 20. 
      .col-lg-5.col-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 20
          br
          span.fst-italic Tratamiento aerobio
        img(src='@/assets/curso/temas/tema2/34.png', alt='')
        figcaption Nota. Tomado de Global Water & Energy (2020). http://www.globalwe.com/es/soluciones/aguas-residuales/tratamiento-aerobio/ 
    .bg-1.p-5.mb-5.mn
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          h4 Digestión aeróbica convencional
          p En esta el lodo se airea durante un largo período de tiempo en un estanque abierto, sin calefacción, empleando difusores convencionales o aireadores superficiales. El proceso se puede llevar a cabo de manera continua o discontinua. En plantas de pequeño tamaño se emplea el sistema discontinuo, en el que el lodo se airea y se mezcla completamente durante un largo período de tiempo, dejándose sedimentar a continuación en el interior del mismo estanque (Aguamarket, 2017), ver figura 21.
          .d-lg-none.d-block.mb-4
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 21
              br
              span.fst-italic  Tanque aerobio TAE  
            img(src='@/assets/curso/temas/tema2/35.jpg', alt='')
            figcaption Nota. Tomado de Ajover (s.f.). http://www.ajover.co/wp-content/uploads/2019/02/fichatecnicasistemasepticoecoajoverajover.pdf
          h4 Digestión con oxígeno y digestión aeróbica termófila 
          p En los sistemas continuos, la decantación y concentración del lodo se realiza en un estanque independiente. La digestión con oxígeno puro es una modificación del proceso de digestión aerobia en el que se sustituye el aire por oxígeno puro. El lodo que resulta es parecido al lodo que se obtiene en los procesos de digestión aerobia convencionales. La digestión aerobia termófila representa un refinamiento adicional del proceso de digestión aerobia. Este proceso puede permitir conseguir altos rendimientos de eliminación de la fracción biodegradable (superiores al 80%) en tiempos de detención cortos (3 a 4 días), mediante la acción de bacterias termófilas a temperaturas entre 25º y 50º C superiores a la temperatura ambiente (Aguamarket, 2017). 
        .col-lg-7.col-8
          .d-lg-block.d-none
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 21
              br
              span.fst-italic  Tanque aerobio TAE  
            img(src='@/assets/curso/temas/tema2/35.jpg', alt='')
            figcaption Nota. Tomado de Ajover (s.f.). http://www.ajover.co/wp-content/uploads/2019/02/fichatecnicasistemasepticoecoajoverajover.pdf
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Digestor anaerobio
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right").mb-lg-0.mb-3
        p En este proceso se produce la descomposición de la materia orgánica e inorgánica en ausencia de oxígeno molecular. Sus principales aplicaciones han sido y siguen siendo hoy en día, la estabilización de lodos concentrados producidos en el tratamiento del agua residual y de determinados residuos industriales; sin embargo, recientemente se ha demostrado que los residuos orgánicos diluidos también se pueden tratar anaeróbicamente. En el proceso de digestión anaerobia, la materia orgánica contenida en la mezcla de lodos primarios y biológicos se convierte biológicamente, bajo condiciones anaerobias, en metano (CH4) y dióxido de carbono (C02) (Aguamarket, 2017), ver figura 22
      .col-lg-6.col-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 22
          br
          span.fst-italic  Digestión anaerobia 
        img(src='@/assets/curso/temas/tema2/36.png', alt='')
        figcaption Nota.  Tomado de Aguas residuales info (2014). https://www.aguasresiduales.info/revista/blog/digestion-anaerobia-de-fangos-de-edar-problemas-y-soluciones  
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="¿Dónde sucede el proceso? " :icono="require('@/assets/curso/temas/tema2/37.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            p El proceso se lleva a cabo en un reactor completamente cerrado. Los lodos se introducen en el reactor de forma continua o intermitente, y permanecen en su interior durante períodos de tiempo variables. El lodo estabilizado, que se extrae del proceso continuo o intermitentemente, tiene un bajo contenido en materia orgánica y patógenos, y no es putrescible. Los dos tipos de digestores anaeróbicos más empleados son los de alta y baja carga. En el proceso de digestión de baja carga no se suele calentar, ni mezclar el contenido del digestor, y los tiempos de detención oscilan entre 30 y 60 días. En los procesos de digestión de alta carga el contenido del digestor se calienta y mezcla completamente (Aguamarket, 2017), ver figura 23.  
          .col-lg-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 23
              br
              span.fst-italic  Digestor anaerobio para lodos
            img(src='@/assets/curso/temas/tema2/39.png', alt='')
            figcaption Nota.  Tomado de Equimar (s.f.). http://equimar.mx/our-services/digestores-anaerobios-para-lodos/   
      .py-4.py-md-5(titulo="Etapas de la conversión biológica " :icono="require('@/assets/curso/temas/tema2/37.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            p La conversión biológica de la materia orgánica de los lodos parece que se produce en tres etapas. El primer paso del proceso comporta la transformación por vía enzimática (hidrólisis) de los compuestos de alto peso molecular en compuestos que puedan servir como fuentes de energía y de carbono celular. El segundo paso (acidogénesis) implica la conversión bacteriana de los compuestos producidos en la primera etapa en compuestos intermedios identificables de menor peso molecular. El tercer paso (metanogénesis) supone la conversión bacteriana de los compuestos intermedios en productos finales más simples, principalmente metano y dióxido de carbono. En un digestor, la conversión de los lodos orgánicos y de los residuos se lleva a cabo mediante la acción conjunta de diferentes organismos anaerobios (Aguamarket, 2017). 
          .col-lg-6
            img(src='@/assets/curso/temas/tema2/40.png', alt='')
      .py-4.py-md-5(titulo="Hidrolización" :icono="require('@/assets/curso/temas/tema2/37.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            p Un grupo de microorganismos se ocupa de la hidrolización de los polímeros orgánicos y de los lípidos para formar elementos estructurales básicos como los monosacáridos, los aminoácidos y los compuestos relacionados con estos. Un segundo grupo de bacterias anaerobias fermenta los productos de la descomposición para producir ácidos orgánicos simples, de los que el que se presenta con mayor frecuencia en los digestores orgánicos es el ácido acético. Este grupo de microorganismos, que reciben el nombre de no metanogénicos, está formado por bacterias facultativas y anaerobias estrictas, aunque de forma colectiva se conocen como bacterias "formadoras de ácidos (Aguamarket, 2017). 
          .col-lg-6
            img(src='@/assets/curso/temas/tema2/41.png', alt='')
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Lechos bacterianos o filtros percoladores
    p.mb-5(data-aos='fade-right') Se trata de un sistema de depuración biológico aerobio cuyo funcionamiento se basa en hacer circular a través de un medio poroso, aire y agua residual. Están configurados en forma de cultivo fijo no sumergido y compuestos por un lecho, normalmente de gran diámetro, que puede estar formado por materiales naturales –cantos rodados, coque metalúrgico, escoria o antracita- o plásticos, y en cuya superficie se aplican de forma uniforme los líquidos residuales por medio de pulverizadores, y en forma de lluvia (SMA, 2015), ver figuras 24 y 25.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 24
          br
          span.fst-italic Filtro percolador 
        img(src='@/assets/curso/temas/tema2/42.png', alt='')
        figcaption Nota. Tomado de Mata (s.f.).  https://lorenzomata95.wixsite.com/misitio/
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 25
          br
          span.fst-italic  Filtro percolador
        img(src='@/assets/curso/temas/tema2/43.png', alt='')
        figcaption Nota. Tomado de filtropercolador (2019) https://filtropercolador.blogspot.com/2019/03/1.html 
    p.mb-5(data-aos='fade-right') En la parte inferior del lecho se sitúan el sistema de drenaje para la salida del efluente del proceso y el sistema de entrada de aire para la ventilación. Esta puede llevarse a cabo de forma natural, lo que exige para un correcto funcionamiento diferencias de temperatura superiores a 2ºC entre el aire -agua o forzada–, suele emplearse solo cuando el tamaño del filtro es demasiado grande y no se puede garantizar la ventilación natural. Cabe destacar que el lecho debe permanecer aireado y con un caudal suficiente de percolación, que permita arrastrar las fracciones de biopelícula erosionadas o desprendidas, y sin saturación de agua. De esta forma, se puede prevenir, en caso de cargas altas, la formación de charcos en su superficie (SMA, 2015), ver figura 26. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .rounded-2.p-5(style="background-color: #dee9f0 ")
          .row.justify-content-center.mb-5
            .col-lg-8
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 26
                br
                span.fst-italic Partes de un filtro percolador
              img(src='@/assets/curso/temas/tema2/44.jpg', alt='')
              figcaption Nota. Tomado de filtropercolador (2019). https://filtropercolador.blogspot.com/2019/03/1.html  
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Contactores biológicos rotativos: biodiscos y biocilindros
    p.mb-5(data-aos='fade-right') Los contactores biológicos rotativos están basados en los procesos biológicos aerobios. Estos requieren un contacto íntimo entre el agua residual, la biomasa activa y el oxígeno. Consisten en una serie de placas o discos colocados en un eje horizontal que giran lentamente dentro del tanque que contiene el agua residual, con un 49% de la superficie sumergida. Sobre la superficie de los discos se fija la biomasa que se encuentra alternativamente en contacto con el agua residual y el aire. Esto posibilita la ingestión de la materia orgánica por parte de los microorganismos y su posterior degradación en presencia del oxígeno del aire (Cyclusid, 2020), ver figura 27.  
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 27
      br 
      span.fst-italic Unidad de tratamiento por biodiscos
    .row.justify-content-center.mb-4
      .col-lg-6(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/45.jpg', alt='')
      .col-lg-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/46.jpg', alt='')
      figcaption Nota. Tomado de Pedraza (2018). Unidad de tratamiento por biodiscos - feria FIMA. 
    .bg-1.mn.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-6.mb-lg-0.mb-3
          h4 Los biocilindros
          p Son una variante de los biodiscos, su principal diferencia es la sustitución de los discos por biocilindros, están formados por una malla metálica, cuyo interior se rellena de piezas de plástico que sirven de soporte a la biomasa. En estos sistemas se produce un exceso de biomasa que se desprende del contactor, esta se mantiene en suspensión en el tanque gracias al movimiento del material soporte. Para regular la cantidad de microorganismos presentes en el sistema se dispone de un clarificador o decantador secundario, en él se produce la sedimentación del exceso de biomasa (Cyclusid, 2020), ver figura 28. 
          .d-lg-none.d-block.mb-4
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 28
              br
              span.fst-italic  Esquema del sistema de biodiscos 
            img(src='@/assets/curso/temas/tema2/47.jpg', alt='')
            figcaption Nota. Tomado de Delgado (2018). http://revistas.uni.edu.pe/index.php/tecnia/article/view/545/1076  
          h4 Características notables del proceso con biodiscos 
          p Notable elasticidad, es decir, es capaz de absorber elevadas puntas de carga orgánica e hidráulica, manteniendo muy estables los niveles de salida. No requiere recirculación de fangos; el fango activo del proceso es el que permanece adherido a los discos. Si la carga aumenta, la película bacteriana crece espontáneamente y los sólidos en suspensión a la salida del biodisco disminuyen. Si la carga disminuye, la biomasa se desprende y aumentan los sólidos en el efluente al decantador secundario. No es necesario controlar la concentración del licor de mezcla, ya que el fango extraído es un desecho del proceso y ha de eliminarse como mejor convenga. 
        .col-lg-6(data-aos="fade-left")
          .d-lg-block.d-none
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 28
              br
              span.fst-italic  Esquema del sistema de biodiscos 
            img(src='@/assets/curso/temas/tema2/47.jpg', alt='')
            figcaption Nota. Tomado de Delgado (2018). http://revistas.uni.edu.pe/index.php/tecnia/article/view/545/1076  
      h4 Ruidos y otras variables 
      p.mb-5(data-aos='fade-right') El nivel de ruidos es muy bajo, factor que es muy importante tanto ambientalmente como por higiene y salud del personal. Las dimensiones de los depósitos de oxidación son menores que los utilizados por otros procesos. El rendimiento del proceso es más estable en épocas frías, debido al hecho de permanecer cubiertos los tanques. El consumo energético es muy reducido y a igualdad de resultados, comparándolo con un sistema de fangos activos, el consumo resulta ser la tercera parte Hidrometalica (s.f.). 
      h4 El funcionamiento de los biodiscos
      p Se divide en cuatro etapas, ver figura 29. 
      .row.justify-content-center.mb-5
        .col-lg-10
          .rounded-2.p-5(style="background-color: #dee9f0 ")
            .row.justify-content-center.mb-5
              .col-lg-8
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5 Figura 29
                  br
                  span.fst-italic Biodiscos
                img(src='@/assets/curso/temas/tema2/48.jpg', alt='')
                figcaption Nota. Tomado de Hidrometalica (s.f.). https://hidrometalica.com/biodiscos/  
      h4 El agua bruta 
      p.mb-0(data-aos='fade-right') El agua bruta de llegada entra a este tanque a través de la tubuladura de entrada, donde se produce una primera sedimentación de materia sólida. Los sólidos sedimentados se extraerán periódicamente por parte del usuario en la primera etapa donde se realiza la primera toma de contacto entre el agua bruta de entrada y los discos. La superficie de los discos se coloniza de forma natural, formando un recubrimiento visible. En la segunda etapa de contacto, gracias a la concepción del sistema de vertedero entre ambas etapas, se consigue un nivel de agua con menos fluctuaciones, favoreciendo el proceso y su salida hacia el “tanque de sedimentación secundaria”. Con el proceso de dos etapas se consigue aumentar el crecimiento de la biomasa de forma equilibrada y constante. En el tanque de sedimentación secundaria se produce la sedimentación de la materia sólida restante del proceso, a la cual se le realizan dos operaciones, la recirculación y extracción de sedimentos (Hidrometálica, s.f.). 
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Reactores biológicos secuenciales (SBR)
    p.mb-5(data-aos='fade-right') Son reactores discontinuos en los que el agua residual se mezcla con un lodo biológico en un medio aireado. Se trata de un proceso que se combina en un mismo tanque: aeración/reacción y clarificación. La tecnología de los reactores biológicos secuenciales es una variante optimizada de la tecnología convencional de lodos activados. Se basa en el uso de un solo reactor que opera en forma discontinua secuencial. El sistema de los reactores biológicos secuenciales SBR consta de al menos cuatro procesos cíclicos: llenado, aireación, anoxia, decantación y vaciado, tanto de efluente como de los lodos. Esta tecnología es capaz de tolerar variaciones de carga y caudal y genera como producto lodos estabilizados, siendo en ocasiones, la tecnología más apropiada para la industria, ver figura 30 y 31. 
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 30
          br
          span.fst-italic Instalación con tecnología SBR 
        img(src='@/assets/curso/temas/tema2/49.png', alt='')
        figcaption Nota. Tomado de Aguas industriales (2015). Instalación con tecnología SBR.
      .col-lg-6(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 31
          br
          span.fst-italic Planta de tratamiento de aguas residuales reactor biológico secuencial (SBR)  
        img(src='@/assets/curso/temas/tema2/50.png', alt='')
        figcaption Nota. Tomado de Gv soluciones (s.f.). https://studylib.es/doc/4574213/planta-de-tratamiento-de-aguas-residuales-reactor-biol%C3%B3gico  
    p.mb-5(data-aos='fade-right') Se debe considerar que el tratamiento de aguas residuales mediante SBR se lleva a cabo en secuencia en 4 etapas: 
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3(data-aos="fade-right")
        .p-5.px-3.text-center.h-100(style="background-color: #dee9f0; border-bottom: 5px solid #badc61 ") 
          img(src='@/assets/curso/temas/tema2/51.svg', alt='' style='width:58px').m-auto.mb-3
          p #[b Etapa de llenado:] es cuando se añade el sustrato al reactor. Según los objetivos previstos esta etapa puede ser estática, mezclada o aireada.
      .col-lg-3.mb-lg-0.mb-3(data-aos="fade-right")
        .p-5.px-3.text-center.h-100(style="background-color: #dee9f0; border-bottom: 5px solid #badc61 ") 
          img(src='@/assets/curso/temas/tema2/52.svg', alt='' style='width:58px').m-auto.mb-3
          p #[b Etapa de reacción:] las necesidades del tratamiento dictarán si el reactor se somete o no a aireación. Aquí se proveen condiciones de mezcla en las que se permite el consumo de sustrato en condiciones ambientales controladas. 
      .col-lg-3.mb-lg-0.mb-3(data-aos="fade-right")
        .p-5.px-3.text-center.h-100(style="background-color: #dee9f0; border-bottom: 5px solid #badc61 ") 
          img(src='@/assets/curso/temas/tema2/53.svg', alt='' style='width:58px').m-auto.mb-3
          p #[b Sedimentación:] permite la separación de sólidos en condiciones de quietud. El resultado es un sobrenadante clarificado que se puede descargar como efluente. Generalmente, el tiempo de asentamiento varía entre media hora y una hora y media. Este proceso previene que el manto de sólidos flote, debido a la acumulación de gas. 
      .col-lg-3.mb-lg-0.mb-3(data-aos="fade-right")
        .p-5.px-3.text-center.h-100(style="background-color: #dee9f0; border-bottom: 5px solid #badc61 ") 
          img(src='@/assets/curso/temas/tema2/54.svg', alt='' style='width:58px').m-auto.mb-3
          p #[b Vaciado:] extracción del agua clarificada del reactor. El exceso de lodo activado residual es removido; este proceso toma tiempo, puede tardar entre un 5% y un 30% del tiempo total (Domos agua, 2019). 
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Filtros verdes y humedales artificiales
    p Un filtro verde consiste en una superficie de terreno donde se establece una plantación forestal o agrícola, a la que se suministra, de forma recurrente y programada, aguas residuales urbanas. Una parte de estas aguas se evapora a la atmósfera y el resto es absorbido por las raíces de las plantas o es filtrada a través del suelo (TECPA, 2018), ver figura 32.
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 32
            br
            span.fst-italic Filtros verdes en depuración de aguas residuales. 
        img(src='@/assets/curso/temas/tema2/59.png', alt='')
        figcaption Nota. Tomado de TECPA (2018). https://www.tecpa.es/filtro-verde-depuracion-aguas-residuales
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        h4 Filtros verdes
        p Un filtro verde provoca procesos físicos, químicos y biológicos naturales en el ecosistema suelo-agua. Estos procesos naturales reducen de forma considerable gran parte de los contaminantes del agua residual como: demanda biológica de oxígeno (DBO5), demanda química de oxígeno (DQO), sólidos suspendidos, nitrógeno, fósforo, y microorganismos patógenos (TECPA, 2018), ver figura 33.
        .row.justify-content-center.mb-5
          .col-lg-10 
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 33
              br
              span.fst-italic Tratamiento de aguas residuales mediante humedales artificiales 
            img(src='@/assets/curso/temas/tema2/57.png', alt='')
            figcaption Nota. Tomado de Construyored (2018). https://construyored.com/oportunidades/6216-tratamiento-de-aguas-residuales-mediante-humedales-artificiales-el-sistema-frances-i  
    .mn(style="background-color: #fdf8e5 ").p-5.mb-4
      .row.justify-content-center.mb-5
        .col-lg-5.mb-lg-0.mb-3
          h4 Depuración de los filtros verdes 
          p De acuerdo con la Universidad Veracruzana los mecanismos de depuración de los filtros verdes son, en primera instancia, los procesos físicos: granulometría y textura. Luego, procesos químicos: pH, capacidad de intercambio iónico, condiciones de aireación y encharcamiento. En tercer lugar, procesos biológicos: raíces, microorganismos (Universidad Veracruzana, s.f.), ver figura 34.
        .col-lg-7
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 34
            br
            span.fst-italic Bioingeniería
          img(src='@/assets/curso/temas/tema2/58.png', alt='')
          figcaption https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRYHJik2RkWb3hB5ts5mpu-G6UMEJAdXAETR1C7J674yIcA2qxB  
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0  Reactor biológico de membrana (MBR)
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
        p #[b (Reactor biológico + ultrafiltración)] se incluyen en las denominadas tecnologías de membrana, las cuales han experimentado un gran desarrollo en la última década. La aplicación de estas tecnologías a los MBR permite la separación del fango y el líquido mediante membranas, obteniendo ventajas importantes frente a la separación en los tradicionales decantadores secundarios. El aumento de la demanda de agua ha impulsado la implantación de estos sistemas a escala real, especialmente en aquellos casos en que se plantea la posibilidad de reutilización de agua (Universidad de Alcalá, 2007), ver figura 35. 
      .col-lg-7.col-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 35
          br
          span.fst-italic  Biorreactor de membrana
        img(src='@/assets/curso/temas/tema2/61.png', alt='')
        figcaption Nota. Tomado de Bioazul (s.f). https://www.bioazul.com/mbr-biorreactor-de-membrana/  
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        h4 Agua filtrada por membrana
        p Su funcionamiento se basa en que el agua del reactor biológico es filtrada pasando a través de las paredes de una membrana, debido a una pequeña depresión producida por una bomba centrífuga. El agua filtrada es extraída del sistema mientras el fango y los compuestos de tamaño superior al poro de la membrana quedan retenidos y permanecen o retornan al reactor biológico (Universidad de Alcalá, 2007). 
      .col-lg-6
        h4 Contralavado
        p Este ciclo se alterna con un corto contralavado, en el que se invierte el sentido del flujo para forzar el paso del agua filtrada desde el interior al exterior de la membrana para limpiarla. Periódicamente, en función del grado de ensuciamiento se realizan limpiezas químicas en profundidad de las membranas mediante su inmersión en una solución de limpieza (Universidad de Alcalá, 2007). 
    .p-5.px-1(style="background-color: #d9e2f4").mb-5
      .row.justify-content-center
        .col-lg-3
          h4 MBR y sus partes 
          p De acuerdo con Remtamavares, los MBR están compuestos por dos partes principales: 
        .col-lg-4.mb-lg-0.mb-3
          .card-icon.h-100 
            .card-icon__icon: img(src='@/assets/curso/temas/tema2/62.svg', alt='')
            .card-icon__info
              p.mb-0 - #[b Reactor biológico:] responsable de la degradación de los compuestos presentes en el agua residual.
        .col-lg-4
          .card-icon.h-100 
            .card-icon__icon: img(src='@/assets/curso/temas/tema2/63.svg', alt='')
            .card-icon__info
              p.mb-0 - #[b Módulo de membranas:] encargado de llevar a cabo la separación física del licor de mezcla (Universidad de Alcalá, 2007).
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        h4 Configuraciones básicas
        p Membranas o sistemas sumergidos: las membranas se sitúan dentro del propio reactor biológico, eliminando las necesidades de bombeo y aprovechando la agitación mecánica de la aireación (Universidad de Alcalá, 2007), ver figura 36.
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5  Figura 36
          br
          span.fst-italic Membranas sumergidas
        img(src='@/assets/curso/temas/tema2/64.png', alt='')
        figcaption Nota. Tomado de la Universidad de Alcalá (2007). https://www.madrimasd.org/blogs/remtavares/2007/04/12/63351  
      .col-lg-6(data-aos="fade-right")
        h4 Membranas externas o sistema de bucle externo 
        p El contenido del reactor biológico se bombea al módulo de membranas. Las ventajas de este modelo residen en que el propio módulo de membranas sirve de contenedor de limpieza para las mismas y se evita su manipulación (Universidad de Alcalá, 2007), ver figura 37. 
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 37
          br
          span.fst-italic Membranas externas 
        img(src='@/assets/curso/temas/tema2/65.png', alt='')
        figcaption Nota. Tomado de la Universidad de Alcalá (2007). https://www.madrimasd.org/blogs/remtavares/2007/04/12/63351  
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Electrocoagulación
    p El tratamiento por electrocoagulación en su esencia es similar a un proceso fisicoquímico de coagulación-floculación en el que es necesario añadir una serie de productos químicos, basados normalmente en sales metálicas para conseguir el proceso de coagulación, es decir, de desestabilización de los coloides responsables de la materia en suspensión (Hidritec, s.f.), ver figura 38. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 38
            br 
            span.fst-italic Electrocoagulación
        img(src='@/assets/curso/temas/tema2/67.png', alt='')
        figcaption.mb-4 Nota. Tomado de Hidritec (s.f.). https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQumrPqtcLRY_AE6MBByyMuT-oDISLdsCV43JswIXr2FLM3ewSN  
    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-right")
        .tarjeta.p-4(style="background-color: #fdf8e4 ")
          h4 Desestabilización de los coloides 
          p.mb-5  Mediante el procedimiento de electrocoagulación se aplica una diferencia de potencial a unos electrodos metálicos (normalmente aluminio y/o hierro). De esta forma, se produce una rápida desestabilización de los coloides por aplicación eléctrica y disolución de iones metálicos de los electrodos empleados. 
          h4 Desinfección de bacterias, virus y parásitos 
          p La consecuencia es una importante reducción en el contenido en sólidos en suspensión y eliminación de la DQO y DBO5, debido fundamentalmente a la desestabilización de los coloides, la decantación y separación de materia orgánica, aceites, grasas y metales pesados, así como iones, calcio y magnesio. Por otra parte, también se produce la desinfección de bacterias, virus o parásitos (Hidritec, s.f.), ver figura 40 un ejemplo gráfico de electrocoagulación. 
          .row.justify-content-center.mb-5
            .col-lg-10
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 39
                br
                span.fst-italic Electrocoagulación
              img(src='@/assets/curso/temas/tema2/66.svg', alt='')
              figcaption Nota. Tomado de Hidritec (s.f). Electrocoagulación (Anexos / Figura 46) http://www.hidritec.com/hidritec/electrocoagulacion 
    h4 Eliminación de sólidos, aceites y grasas 
    p.mb-5 El sistema se suministra en una planta premontada con la parrilla de electrodos en forma de placas y dimensionada para el caso concreto, incluyendo el cuadro de control y potencia del equipo. De forma habitual, se suministra con un sistema de decantación lamelar o separador por flotación DAF para lograr un mayor rendimiento en la eliminación de los sólidos, aceites y grasas desestabilizados.  
    h4 Biodegradabilidad
    p El sistema es apropiado para aguas residuales de tipo industrial con altas cargas de DQO, sólidos en suspensión, grasas, aceites y color como tratamiento único o bien como pretratamiento biológico, mejorando la biodegradabilidad del agua residual (Hidritec, s.f.). 
        
    Separador 
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Tratamientos terciarios del agua residual 
    p La finalidad de los tratamientos terciarios es eliminar la carga orgánica residual y aquellas otras sustancias contaminantes no eliminadas en los tratamientos secundarios, como por ejemplo, los nutrientes, fósforo y nitrógeno. Estos procesos son de naturaleza biológica o fisicoquímica, siendo el proceso unitario más empleado el tratamiento fisicoquímico. Este consta de una coagulación – floculación y una decantación (Cyclusid depuración industrial, s.f.). 
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/69.svg', alt='')
      .col-lg-7(data-aos="fade-right")
          p Otros procesos empleados como tratamientos terciarios son las resinas de intercambios de iones, la adsorción en carbón activo, la ultrafiltración, la ósmosis inversa, la electrodesinfección, las membranas cerámicas, etc. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-10.mb-3.mb-sm-0
                  h4.mb-1.fw-normal Tratamientos terciarios del agua residual
                  p.text-small Para realizar un estudio profundo y pertinente sobre los tratamientos terciarios del agua residual, le invitamos a consultar el siguiente recurso descargable.
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank" type="application/pdf")
                    span Descargar 
                    i.fas.fa-file-download









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
