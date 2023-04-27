export default {
  global: {
    componenteFormativo:
      'Control de la operación de los sistemas de tratamiento de aguas residuales ',
    descripcionCurso:
      'En este componente formativo se establecen los criterios para el aprendizaje integral del control de vertimientos, de acuerdo con lineamientos técnicos y legales a nivel nacional. Todo ello, teniendo en cuenta las necesidades de los sectores económicos colombianos, el desarrollo tecnológico y la innovación en equipos, materiales y sistemas de tratamientos eficientes en la recolección, manejo, evacuación, diseños, construcción, puesta en marcha, operación y mantenimiento de los sistemas de tratamiento de aguas residuales. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos generales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Sistemas para el tratamiento físico, químico y biológico del agua residual ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tratamientos primarios del agua residual',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tratamientos secundarios del agua residual',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tratamientos terciarios del agua residual',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Variables a considerar en una Planta de tratamiento de agua residual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concentración',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Carga contaminante',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Eficiencia del PTAR',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Procesos y protocolos de mantenimiento ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Emergencias y contingencias en el tratamiento de vertimientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de emergencias',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Protocolos de emergencias',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Tratamiento de lodos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Equipos hidráulicos, mecánicos, eléctricos y de control',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Sistemas para tratamiento físico, químico y biológico del agua residual',
      referencia:
        'TV Agro. (2015). Tratamiento de Aguas Residuales EMPAS [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LLqFBBHJ6yA ',
    },

    {
      tema:
        'Sistemas para tratamiento físico, químico y biológico del agua residual',
      referencia:
        'Syner Tech S.A.S. (2016). Plantas de Tratamiento de Aguas Residuales [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VpY5j-fVw8o&t=100s',
    },

    {
      tema:
        'Sistemas para tratamiento físico, químico y biológico del agua residual',
      referencia:
        'EPM.ESP. (2016). Tratamiento de aguas residuales -- Planta San Fernando [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3bEhLJLR7UU ',
    },

    {
      tema: 'Procesos y protocolos de mantenimiento',
      referencia:
        'EMDUPAR. (2012). Manual de operación y mantenimiento del sistema de tratamiento de aguas residuales. EMDUPAR. ',
      tipo: 'Video',
      link:
        'https://www.emdupar.gov.co/index.php/la-entidad/sistema-integrado-de-gestion/Planeacion/Manuales/MA-GM-01%20MANUAL%20DE%20OPERACION%20Y%20MANTENIMIENTO%20PTAR.pdf/download ',
    },

    {
      tema: 'Procesos y protocolos de mantenimiento',
      referencia:
        'Díaz, N. (2016). Manual de operación, mantenimiento y limpieza PTAR. ',
      tipo: 'Manual',
      link:
        'https://repositorio.uisek.edu.ec/bitstream/123456789/2889/1/Anexo%209%20Tesis%20Nidia%20D%C3%ADaz.pdf ',
    },

    {
      tema: 'Emergencias y contingencias en el tratamiento de vertimientos',
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial (2011). Plan de gestión del riesgo para el manejo de vertimientos. ',
      tipo: 'Plan',
      link:
        'https://www.cornare.gov.co/Tramites-Ambientales/TR/TR-manejo_vertimientos.pdf ',
    },

    {
      tema: 'Emergencias y contingencias en el tratamiento de vertimientos',
      referencia:
        'FOPAE (2013). Guía para elaborar planes de emergencia y contingencias.  ',
      tipo: 'Guía',
      link:
        'https://www.sire.gov.co/documents/82884/85386/ANEXO+3-+GUIA+PLANES+EMERGENCIA+Y+CONTINGENCIAS.pdf/2010161a-6762-4699-82c2-38090fb38f92 ',
    },

    {
      tema: 'Tratamiento de lodos',
      referencia:
        'Servicio Nacional de Aprendizaje SENA. (2018). Práctica de laboratorio de extracción y caracterización de lodos. ',
      tipo: 'Guía',
      link:
        'https://drive.google.com/file/d/1KrXT1Cyrd5txhc5-Ejv07cnNUywxccMS/view?usp=sharing ',
    },
  ],
  glosario: [
    {
      termino: 'Alcantarillado',
      significado:
        'Conjunto de estructuras para la evacuación de las aguas residuales bien sean industriales, domésticas o de aguas lluvias. También existe el alcantarillado de aguas combinadas que se encarga del transporte de todo tipo de agua sin importar su proveniencia. El sistema más adecuado para el transporte de agua a nivel municipal es el alcantarillado separado, pues divide las aguas residuales y las aguas lluvias de manera independiente lo que evita aumentar caudales de aguas contaminadas.<br> Jardín Botánico de Bogotá y Universidad Libre (2013) Guía metodológica para la formulación de proyectos ambientales escolares (pág. 50).',
    },
    {
      termino: 'Contaminación del agua',
      significado:
        'Se entiende por contaminación del medio hídrico la acción y el efecto de introducir materias o formas de energía, o inducir condiciones en el agua que, de modo directo o indirecto, impliquen una alteración perjudicial de su calidad en relación con su función ecológica o usos posteriores. Es muy fácil contaminar el agua cuando se encuentra en forma líquida y de vapor, pero no en estado sólido (hielo). Con frecuencia el sabor, el olor y el aspecto del agua indican que está contaminada, pero la presencia de contaminantes peligrosos sólo se puede detectar mediante pruebas químicas y biológicas específicas y precisas. Existen contaminantes físicos (líquidos y sólidos), químicos y biológicos. <br>Jardín Botánico de Bogotá y Universidad Libre (2013) Guía metodológica para la formulación de proyectos ambientales escolares (pág. 50)',
    },
    {
      termino: 'Contaminantes biológicos',
      significado:
        'Incluyen hongos, bacterias y virus que provocan enfermedades; algas y otras plantas acuáticas. Algunas bacterias son inofensivas y otras participan en la degradación de la materia orgánica contenida en el agua. <br>Jardín Botánico de Bogotá y Universidad Libre (2013) Guía metodológica para la formulación de proyectos ambientales escolares. Pág. 52.',
    },
    {
      termino: 'Contaminantes inorgánicos ',
      significado:
        'Provienen de descargas domésticas, agrícolas e industriales o de la erosión del suelo. Los más frecuentes son cloruros, sulfatos, nitratos y carbonatos. También desechos ácidos, alcalinos y gases tóxicos disueltos en el agua como los óxidos de azufre, de nitrógeno, amoníaco, cloro y sulfuro de hidrógeno (ácido sulfhídrico). Gran parte de estos contaminantes son liberados directamente a la atmósfera y bajan arrastrados por la lluvia. Esta lluvia ácida, tiene efectos nocivos que pueden observarse tanto en la vegetación como en edificios y monumentos de las ciudades industrializadas. <br>Jardín Botánico de Bogotá y Universidad Libre (2013) Guía metodológica para la formulación de proyectos ambientales escolares. Pág. 51.  ',
    },
    {
      termino: 'Contaminantes orgánicos',
      significado:
        'Provienen de los desechos humanos y animales, del producto de la descomposición de estos, de los restos de los mataderos, del procesamiento de los alimentos; de productos químicos industriales de origen natural como aceites, grasas, breas y tinturas; y de diversos productos químicos sintéticos como pinturas, herbicidas, insecticidas, entre otros. Los contaminantes orgánicos consumen el oxígeno disuelto en el agua y afectan la vida acuática (eutrofización).<br> Jardín Botánico de Bogotá y Universidad Libre (2013) Guía metodológica para la formulación de proyectos ambientales escolares. Pág. 52.  ',
    },
    {
      termino: 'Contaminantes sólidos del agua ',
      significado:
        'Entre los contaminantes sólidos se encuentran la arena, arcilla, tierra, ceniza, materia vegetal agrícola, grasas, brea, papel, hule, plásticos, madera y metales, entre muchos otros tipos de residuos comúnmente arrojados a las fuentes y rondas. <br> Jardín Botánico de Bogotá y Universidad Libre (2013) Guía metodológica para la formulación de proyectos ambientales escolares (pág. 51)',
    },
  ],
  referencias: [
    {
      referencia:
        'Acuatecnia S.A.S. (2018). Tratamiento de aguas residuales. ACUATECNICA. ',
      link: 'https://acuatecnica.com/tratamiento-primario-aguas-residuales/',
    },
    {
      referencia:
        'Aguas industriales. (2015). Instalación con tecnología SBR. AGUASINDUSTRIALES ',
      link:
        'http://aguasindustriales.es/ventajas-y-desventajas-de-los-reactores-biologicos-secuenciales-sbr/',
    },
    {
      referencia:
        'Aguas Sigma. (2016). Sistema de flotación por aire disuelto. AGUASIGMA',
      link:
        'http://aguasigma.com/es/equipos-tratamiento-aguas/sistema-daf.html',
    },
    {
      referencia:
        'Decreto 3100 de 2003. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. por medio del cual se reglamentan las tasas retributivas por la utilización directa del agua como receptor de los vertimientos puntuales y se toman otras determinaciones. Octubre 30 de 2003.',
      link: '',
    },
    {
      referencia:
        'Decreto 1287 de 2014. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por el cual se establecen criterios para el uso de los biosólidos generados en plantas de tratamiento de aguas residuales municipales. Julio 10 de 2014.',
      link: '',
    },
    {
      referencia:
        'FRC Systems International. (2015). Floculadores. FRCSYSTEMS. ',
      link: 'https://frcsystems.com/flocculators-daf-systems/?lang=es',
    },
    {
      referencia:
        'Fundación para el conocimiento (2007). Reactores Biológicos de Membrana (MBR): Una alternativa de tratamiento para la reutilización del agua. MADRIMASD. ',
      link: 'https://www.madrimasd.org/blogs/remtavares/2007/04/12/63351',
    },
    {
      referencia: 'Hidritec. (s.f.). Electrocoagulación. HIDRITEC. ',
      link: 'http://www.hidritec.com/hidritec/electrocoagulacion',
    },
    {
      referencia: 'Hidrometálica. (s.f.). Espesador de fangos. HIDROMETALICA. ',
      link: 'https://hidrometalica.com/espesador-de-fangos/',
    },
    {
      referencia: 'Hidrometálica. (s.f.). Biodiscos. HIDROMETALICA. ',
      link: 'https://hidrometalica.com/biodiscos/',
    },
    {
      referencia:
        'Ingenieria Liquid Technologies de Monterrey S.a. de C. V. (s.f.). Floculantes. FLOCULANTES ',
      link: 'https://floculantes.com/',
    },
    {
      referencia:
        'Jardín Botánico de Bogotá y Universidad Libre (2013). Guía metodológica para la formulación de proyectos ambientales escolares. UNILIBRE. ',
      link: 'http://www.unilibre.edu.co/praeul/images/stories/pdfs/2013/h9.pdf',
    },
    {
      referencia: 'Maldonado, V. (s.f.). Sedimentación.',
      link: 'http://www.ingenieroambiental.com/4014/siete.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial (2011). Plan de gestión del riesgo para el manejo de vertimientos.',
      link:
        'https://www.cornare.gov.co/Tramites-Ambientales/TR/TR-manejo_vertimientos.pdf',
    },
    {
      referencia:
        'Pedraza, S. (2018). Unidad de tratamiento por biodiscos - feria FIMA.',
      link: '',
    },
    {
      referencia:
        'Tecpa (2018). Filtros verdes en depuración de aguas residuales. TECPA. ',
      link: 'https://www.tecpa.es/filtro-verde-depuracion-aguas-residuales/',
    },
    {
      referencia:
        'Tratamiento de agua (2016). Lagunas de oxidación. TRATAMIENTODELAGUA. ',
      link:
        'https://www.tratamientodelagua.com.mx/lagunas-de-oxidacion-que-son/',
    },
    {
      referencia: 'Universidad Veracruzana. (s.f.). Bioingeniería',
      link:
        'https://sites.google.com/site/bioingenieriauv15/unidad-1-sistemas-de-depuracion-de-agua/1-3-filtros-verdes',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
