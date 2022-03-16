export default {
  global: {
    componenteFormativo:
      'Atención integral en salud de los pueblos indígenas en aislamiento',
    descripcionCurso:
      'Este componente formativo abordará la atención integral en salud de los pueblos indígenas en aislamiento, en este se retomará la importancia del aislamiento en su territorio y, cómo el resultado de las experiencias violentas han puesto en peligro a sus comunidades. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Pueblos en aislamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Referenciación del territorio',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Patrones culturales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Marco normativo y políticas públicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Referenciación del territorio',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Mecanismos de supervisión, coordinación y articulación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Normatividad nacional en salud',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Asistencia, atención y reparación integral',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Tema 4',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Atención primaria en salud y recomendaciones de atención PIACI',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Recomendaciones primarias para atención de emergencia',
            hash: 't_4_2',
          },
        ],
      },
      // {
      //   nombreRuta: 'tema10',
      //   icono: 'far fa-file-alt',
      //   numero: '10',
      //   titulo: 'Componentes',
      //   desarrolloContenidos: true,
      //   subMenu: [
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.1',
      //       titulo: 'Encabezados',
      //       hash: 'encabezados',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.2',
      //       titulo: 'Párrafos',
      //       hash: 'parrafos',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.3',
      //       titulo: 'Botones',
      //       hash: 'botones',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.4',
      //       titulo: 'Listas',
      //       hash: 'listas',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.5',
      //       titulo: 'Tablas',
      //       hash: 'tablas',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.6',
      //       titulo: 'Imagen',
      //       hash: 'imagen',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.7',
      //       titulo: 'Imagen Infográfica',
      //       hash: 'imagen_infografica',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.8',
      //       titulo: 'Video',
      //       hash: 'video',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.9',
      //       titulo: 'Bloques de texto destacado',
      //       hash: 'texto_destacado',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.10',
      //       titulo: 'Sliders',
      //       hash: 'sliders',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.11',
      //       titulo: 'Acordiones',
      //       hash: 'acordiones',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.12',
      //       titulo: 'Pestañas o Tabs',
      //       hash: 'tabs',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.13',
      //       titulo: 'Líneas de tiempo',
      //       hash: 'lineas_tiempo',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.14',
      //       titulo: 'Pasos',
      //       hash: 'pasos',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.15',
      //       titulo: 'Llamados a la acción',
      //       hash: 'llamados_accion',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.16',
      //       titulo: 'Tarjetas',
      //       hash: 'tarjetas',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.17',
      //       titulo: 'Tarjetas con número',
      //       hash: 'tarjeta_numero',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.18',
      //       titulo: 'Modal',
      //       hash: 'modal',
      //     },
      //   ],
      // },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Sintesis',
      //   nombreRuta: 'sintesis',
      // },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
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
  referencias: [
    {
      referencia:
        'Aguilar-Peña, M., Tobar, M., García-Perdomo, H. (2020) Salud intercultural y el modelo de salud propio indígena.',
      link:
        'http://www.scielo.org.co/pdf/rsap/v22n4/0124-0064-rsap-22-04-e187320.pdf',
    },
    {
      referencia:
        'Anuario de Derecho Constitucional Latinoamericano - Frank Semper (Alemania). (2006) Los derechos de los pueblos indígenas de Colombia en la jurisprudencia de la Corte Constitucional.',
      link: 'https://www.corteidh.or.cr/tablas/R21731.pdf',
    },
    {
      referencia:
        'Aristizabal, V. (2013). Recomendaciones para el diseño e implementación del modelo de salud integral para la atención de los pueblos en aislamiento y contacto inicial. Amazon Conservation Team.',
    },
    {
      referencia:
        'BID - OTCA. (2018). Marco estratégico para la protección de los pueblos indígenas en aislamiento y contacto inicial. BOTCA.',
    },
    {
      referencia:
        'Corte Interamericana de Derechos Humanos - OEA. (2013). Pueblos indígenas en aislamiento voluntario y contacto inicial en Las Américas. Organización de los Estados Americanos.',
      link: 'http://www.cidh.org',
    },
    {
      referencia:
        'Decreto 1953 de 2014. [Ministerio del Interior]. Por el cual se crea un régimen especial con el fin de poner en funcionamiento los territorios indígenas respecto de la administración de los sistemas propios de los pueblos indígenas. Octubre 7 de 2014.',
    },
    {
      referencia:
        'Decreto 1232 de 2018. [Ministerio del Interior]. Por el cual se adiciona el Capítulo 2, del Título 2, de la Parte 5, del Libro 2 del Decreto 1066 de 2015, Único Reglamentario del Sector Administrativo del Interior, para establecer medidas especiales de prevención y protección de los derechos de los Pueblos Indígenas en Aislamiento o estado natural y se crea y organiza el Sistema Nacional de Prevención y Protección de los derechos de los Pueblos Indígenas en Aislamiento o estado natural. Julio 17 de 2018. ',
      link:
        'http://es.presidencia.gov.co/normativa/normativa/DECRETO%201232%20DEL%2017%20DE%20JULIO%20DE%202018.pdf',
    },
    {
      referencia:
        'Decreto Ley 4633 de 2011. [Presidencia de la República de Colombia]. Ley de víctimas. ',
    },
    {
      referencia:
        'FUNAI. (2021). Survival Funai. Fundación Nacional del Indio (Brasil). ',
      link: 'https://www.survival.es/sobre/funai',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible - Parques Naturales de Colombia. (2018). Resolución 0156 de 2018. Imprenta Nacional.',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible - Parques Naturales de Colombia. (2018). Resolución 1256 de 2018. Imprenta Nacional.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2021). Lineamientos para la atención en salud de pueblos en aislamiento y contacto inicial, versión preliminar. ',
    },
    {
      referencia:
        'OACNUDH - IWGIA. (2007). Pueblos indígenas en aislamiento voluntario y contacto inicial en la Amazonía y El Gran Chaco. IWGIA.',
    },
    {
      referencia:
        'OACNUDH. (2012). Directrices de protección para los pueblos en aislamiento y contacto inicial de la Región Amazónica, El Gran Chaco y la Región Oriental del Paraguay. OACNUDH.',
    },
    {
      referencia:
        'Organización de Estados Americanos - OEA. (2016). Declaración americana sobre los derechos de los pueblos indígenas. OEA.',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (1992). Convenio sobre la diversidad biológica. Naciones Unidas.',
    },
    {
      referencia:
        'Organización del Tratado de Cooperación Amazónica - OTCA. (2012). Principios y directrices para la atención en salud de pueblos en aislamiento y contacto inicial. OTCA - BID.',
    },
  ],
  glosario: [
    {
      termino: 'Autonomía',
      significado:
        'Es la autodeterminación de los pueblos indígenas para decidir sus propias normas y tomar decisiones en defensa de las tradiciones culturales y organizativas.',
    },
    {
      termino: 'Interculturalidad',
      significado:
        'En el marco de la salud propia indígena es la comunicación recíproca para armonizar los diferentes saberes indígenas y occidentales.',
    },
    {
      termino: 'Sabiduría ancestral',
      significado:
        'Es la herencia en conocimiento propio que se transmite de generación en generación para la pervivencia física y cultural de los pueblos indígenas.',
    },
    {
      termino: 'Salud propia',
      significado: 'Armonía y equilibrio de cuerpo, mente y espíritu.',
    },
  ],
  complementario: [
    {
      texto:
        'BID - OTCA. (2018). Marco estratégico para la protección de los pueblos indígenas en aislamiento y contacto inicial.  OTCA. ',
      tipo: 'Informe',
      descarga:
        '/downloads/Marco-Estrategico-para-la-Proteccion-de-los-PIACI.pdf',
    },
    {
      texto:
        'Corte Interamericana de Derechos Humanos - OEA. (2013). Pueblos Indígenas en aislamiento voluntario y contacto inicial en las Américas. Organización de los Estados Americanos. ',
      tipo: 'Informe',
      descarga:
        '/downloads/informe-pueblos-indigenas-aislamiento-voluntario.pdf',
    },
    {
      texto:
        'Decreto 1232 de 2018. [Ministerio del Interior]. Por el cual se adiciona el Capítulo 2, del Título 2, de la Parte 5, del Libro 2 del Decreto 1066 de 2015, Único Reglamentario del Sector Administrativo del Interior, para establecer medidas especiales de prevención y protección de los derechos de los Pueblos Indígenas en Aislamiento o estado natural y se crea y organiza el Sistema Nacional de Prevención y Protección de los derechos de los Pueblos Indígenas en Aislamiento o estado natural. Julio 17 de 2018. ',
      tipo: 'Normatividad',
      descarga: '/downloads/DECRETO 1232 DEL 17 DE JULIO DE 2018.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jaime Enrique Díaz Reyes ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
