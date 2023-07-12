<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Emergencias y contingencias en el tratamiento de vertimientos 
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right").mb-lg-0.mb-3
        p De acuerdo con los términos de referencia para el permiso de vertimientos para usuarios que vierten a alcantarillado o fuente hídrica, en el caso de que el proceso productivo utilice sustancias peligrosas o contaminantes como combustibles, sustancias químicas, sustancias de riesgo biológico, entre otras, se deberá presentar un plan de contingencias que establezca las medidas a seguir en caso de derrames. Esto aplica para cualquier sustancia que represente un peligro para las personas o el medio ambiente.
          br
          br
          |Asimismo, el Ministerio a través de los términos de referencia establece que dichas medidas se deben desarrollar con el propósito de: 
        .bg-1.p-4
          ul.lista-ul--color
            li
              i.fas.fa-check
              | Evitar que se generen nuevos riesgos y/o reducir los riesgos existentes en el caso en el que se limite o impida el tratamiento del vertimiento. 
            li
              i.fas.fa-check
              | Reducir la vulnerabilidad física y funcional del sistema de tratamiento. 
            li
              i.fas.fa-check
              | Aumentar la capacidad de respuesta y recuperación en el caso de que se presente el vertimiento sin tratamiento (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2011, p. 8).  
      .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/temas/tema5/1.png', alt='')
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1 Tipos de emergencias 
    .bloque-derecha.mb-5
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/2.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Las emergencias y contingencias deben analizarse por medio de la valoración objetiva de los riesgos, a través de la evaluación de la amenaza y la vulnerabilidad.
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Riesgos internos (tecnológicos)
    p.mb-5(data-aos='fade-right') El escenario de riesgos por fallas físicas y funcionales del sistema de vertimientos debe incluir los siguientes análisis: 
    AcordionA.acordion-icon.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      div(titulo="Identificación de los factores de riesgos")
        p Identificación de los factores de riesgos y los eventos que pueden tener impacto en cada una de las fases del proceso de vertimiento. Se debe presentar una lista de las fuentes de riesgo y de los eventos que pueden tener impacto en el funcionamiento del sistema de tratamiento, estos eventos pueden evitar, degradar, retrasar o potenciar el logro del objetivo del sistema. A cada uno de los eventos que pueden suceder se deben asociar las posibles causas y escenario. 
      div(titulo="Valoración de la probabilidad de ocurrencia")
        p Valoración de la probabilidad de ocurrencia de los eventos que pueden suceder. Se debe realizar una valoración sobre la frecuencia de ocurrencia de los eventos esperados, a partir del registro histórico de eventos anteriores o de la experiencia de expertos en el comportamiento de las fuentes generadoras o de literatura pertinente publicada sobre este tema.  
      div(titulo="Calificación del impacto de cada riesgo")
        p Calificación del impacto de cada riesgo del proceso. Se debe realizar una calificación del riesgo en función de la intensidad y/o magnitud de los daños esperados y de los impactos en el logro de los objetivos del tratamiento. Esta calificación se debe presentar en forma comparativa, de manera que permita priorizar y tomar decisiones para la reducción del riesgo. Igualmente, se debe analizar la combinación de las consecuencias con la probabilidad de ocurrencia. La calificación del riesgo se debe presentar para dos momentos, sin tener en cuenta los controles y la ejecución de los controles. Aunque en muchos casos este análisis de riesgos está integrado al sistema de calidad o de seguridad industrial del generador, se debe ampliar el alcance del análisis para las fases de mantenimiento y situaciones que limiten o impidan el tratamiento del vertimiento (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2011, p. 9). 
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Riesgos internos (tecnológicos)
    p.mb-5(data-aos='fade-right') Se debe incluir el análisis de riesgos al sistema de vertimientos por los fenómenos socio-naturales identificados en el área de influencia del proyecto: 
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.py-3(style="background-color: #dee9f0 ").h-100
          h5.text-center Identificación y valoración
          p Identificación y valoración de amenazas externas en términos de probabilidad, magnitud e intensidad de los fenómenos. Se debe presentar una caracterización y georreferenciación de los fenómenos amenazantes presentes en el área de influencia del proyecto, esta información puede ser tomada de estudios existentes y ajustada a los alcances y escalas del análisis de riesgos mediante trabajos de especialistas en estas temáticas. 
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.py-3(style="background-color: #dee9f0 ").h-100
          h5.text-center Valoración de la vulnerabilidad
          p Valoración de la vulnerabilidad del sistema de vertimiento frente a cada amenaza identificada (exposición, resistencia y resiliencia del sistema), se debe realizar una valoración del grado de vulnerabilidad física de la infraestructura del sistema de tratamiento en función del grado de exposición y resistencia frente a cada uno de las amenazas descritas anteriormente. Se debe presentar una valoración de la vulnerabilidad funcional del sistema en función de su resiliencia frente a los impactos o efectos generados por cada una de las amenazas presentes en el área de influencia. El análisis de la vulnerabilidad funcional debe partir del análisis de riesgos internos realizado con anterioridad, al cual se van agregando los agentes detonantes externos.  
      .col-lg-4
        .tarjeta.p-4.py-3(style="background-color: #dee9f0 ").h-100
          h5.text-center Calificación del riesgo especifico
          p Calificación del riesgo especifico. Se debe presentar una calificación de los riesgos específicos y una calificación del riesgo total, incluyendo la confluencia de las diferentes amenazas presentes en el área de influencia del proyecto. Se debe presentar la calificación del riesgo en términos de pérdidas físicas de la infraestructura o impactos técnicos en la operación del sistema de tratamiento que lleven a impedir limitar el sistema de tratamiento. Ministerio de Ambiente, Vivienda y Desarrollo Territorial (2011, p. 10). 
    .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3.mb-4
      h4.mb-0 Riesgo sobre el medio natural
    p.mb-5(data-aos='fade-right') Se debe presentar un análisis de riesgo de pérdidas o afectación al medio natural cuando el vertimiento no pueda ser tratado satisfaciendo los requerimientos normativos. Los escenarios de riesgos deben incluir: 
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/3.svg' alt='AvatarTop')
          .tarjeta.w-100(style="background-color: #f8faf2 ")
            .p-4
              h4.text-center La amenaza
              p La amenaza que constituye el vertimiento de sustancias tóxicas a un cuerpo de agua o al suelo, para lo cual se debe identificar el grado de toxicidad de las sustancias no tratadas y estimar el área de afectación directa e indirecta por concentración de las sustancias para los casos más extremos.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/4.svg' alt='AvatarTop')
          .tarjeta.w-100(style="background-color: #f8faf2 ")
            .p-4
              h4.text-center El análisis de vulnerabilidad
              p El análisis de vulnerabilidad debe realizarse para el medio natural expuesto a las sustancias tóxicas producto del vertimiento sin tratar, el cual debe incluir el análisis de sensibilidad de los recursos hidrobiológicos y la identificación de la cadena y el medio de transferencia que pueda afectar la salud humana.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/5.svg' alt='AvatarTop')
          .tarjeta.w-100(style="background-color: #f8faf2 ")
            .p-4
              h4.text-center El análisis de riesgos a la salud
              p El análisis de riesgos a la salud debe presentarse en función de la presencia de sustancias catalogadas como peligrosas o de precaución para la salud humana por el Ministerio de Salud y Protección Social en el área de influencia directa o indirecta del proyecto según el estudio de impacto ambiental (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2011, p. 11).
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.2 Protocolos de emergencias 
    p.mb-5(data-aos='fade-right') De acuerdo con los términos de referencia para permiso de vertimientos para usuarios que vierten a alcantarillado o fuente hídrica se deben presentar los procedimientos y/o protocolos de emergencia y contingencia para responder oportuna y eficazmente en las situaciones de emergencias, con el fin de controlar y reducir el impacto sobre la población, el medio natural, el sistema de vertimiento y los procesos productivos anexos. Los protocolos deben ser diseñados para derrames de sustancia peligrosa por una falla del sistema, suspensión de las actividades de vertimiento, limitación o afectación del funcionamiento del sistema. Se debe tener en cuenta lo siguiente: 
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-right").mb-lg-0.mb-3
        AcordionA.acordion-icon.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="¿Qué contienen los protocolos? ")
            p De acuerdo con los términos de referencia del Ministerio se deben presentar los protocolos de emergencia, donde se deben definir las funciones y actividades, responsables, procedimientos, organización y recursos que son aplicables para la atención de las emergencias, independientemente de su origen o naturaleza. Contienen también el establecimiento de los niveles de respuesta (interna y externa), planos específicos de emergencia, responsabilidades, nivel de entrenamiento y ejercicios, información al público, auditoría y mediciones, informe y desactivación. 
          div(titulo="Para acceder a instrumentos de apoyo")
            p Sistema de seguridad, procedimientos e instrucciones (documentación, disponibilidad, control del proceso de modificaciones, introducción de nuevos procesos, instrucciones de operación, ficha de información de datos de seguridad), articulación con los planes de emergencia municipal y sector de servicios públicos. Y, en cuanto a movilización de recursos y previsiones, ha de contemplarse una articulación con los planes de emergencia municipal y sector de servicios públicos.
          div(titulo="Términos de referencia y evaluación de daños")
            p Los términos de referencia establecen también que los protocolos de contingencia que se deben presentar tienen que proveer información específica para la atención de las emergencias derivadas de los escenarios de riesgos identificados e incluyen procedimientos para evaluación de daños y estimación de necesidades. En cuanto a la evaluación de daños y necesidades, esta incluye la identificación y registro de la extensión, gravedad y localización de los efectos y se divide según su alcance en general y específica y según el momento en inicial, intermedia y final. La evaluación de necesidades busca identificar la capacidad para atender la emergencia y las necesidades de ayuda o apoyo externo que se requiere.
          div(titulo="Procesos de respuesta")
            p Los procedimientos deben estar acordes con las diferentes fases de evaluación (inicial, intermedia y final). Las tarjetas de funciones, debe ser una lista de verificación o chequeo de prioridades de actuación para cada uno de los responsables de la respuesta. Deben estar definidos, además, los protocolos de contingencia para casos en los cuales la reparación y reinicio de actividades del sistema de vertimiento requiere de un lapso superior a tres (3) horas diarias. 
      .col-lg-3: img.d-lg-block.d-none(src='@/assets/curso/temas/tema5/6.png' alt='AvatarTop')
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
          a.anexo.mb-4(:href="obtenerLink('downloads/anexo5.pdf')" target="_blank")
            .row.justify-content-around.align-items-center
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto(style="color: #12263F")
                p #[b Anexo.] Manual de operación y mantenimiento el sistema de tratamiento de aguas residuales.






















</template>

<script>
export default {
  name: 'Tema5',
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
