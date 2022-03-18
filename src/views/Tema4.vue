<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 4
      h1 Orientaciones para la atención diferencial PIACI

    .row.align-items-center
      .col-lg-6
        figure.mb-5
          img(src='@/assets/curso/tema4/img01.png') 
      .col-lg-6        
        div
          .mibloque5.bloque-texto-b.color-primario.py-4
            .bloque-texto-b__texto
              p.mb-0 Dada la extremada vulnerabilidad de los PIACI se deben formular políticas y legislación específica sobre la intangibilidad de su territorio, la prohibición del ingreso a su territorio, salvo excepciones de fuerza mayor, y el respeto al no contacto, estableciendo legislación específica y políticas de tipo preventivo para evitar el contacto directo o indirecto con estas comunidades (OACNUDH, 2012).          
          p.mb-4 El respeto y la garantía del derecho a las tierras, territorios y recursos naturales de los pueblos indígenas en aislamiento y en contacto inicial significa respetar los derechos territoriales, se deben delimitar las áreas que ocupan y a las que han tenido acceso tradicional los pueblos indígenas en aislamiento y en contacto inicial. Establecer zonas de amortiguamiento con control estricto del ingreso y de las actividades que allí se desarrollen, para evitar daños al medio ambiente e invasión a su territorio (OACNUDH, 2012).
          p.mb-4 Se deben establecer medidas de monitoreo a través de metodologías que no impliquen el contacto y que de hecho ya han empleado algunos Estados de la región (entre ellas se destacan la fotografía de altura o fotos satelitales, entre otros). En todo caso se deben incorporar en las medidas de prevención a las organizaciones indígenas e incluir a las comunidades que se encuentran en la zona colindante.

    .mb-0(:style="{'background-repeat': 'repeat', 'background-size': 'contain', 'background-image': `url(${require('@/assets/curso/tema4/img02.svg')})`}")
      .row.mb-5.align-items-center.py-4(style="background-color: #F0F6F7")
        .col-lg-6
          p.mb-5 <b>El ingreso a los territorios de los PIACI solo se permite en los siguientes casos de excepción (Ministerio del Interior de Colombia, 2018):</b>
          .row.justify-content-end
            .col-lg-11              
                .milista.ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Cuando se identifiquen o denuncien actividades ilegales o el ingreso de personas no autorizadas al interior del territorio.
                  li 
                    i.fas.fa-check
                    | Cuando se produzcan eventos de salud pública que presenten alto riesgo de contagio y mortalidad para los pueblos indígenas en aislamiento.
                  li 
                    i.fas.fa-check
                    | Cuando se trate de asuntos de seguridad, defensa nacional y orden público.
                  li 
                    i.fas.fa-check
                    | Cuando se tenga información de amenazas o reducciones poblacionales severas de los pueblos indígenas en aislamiento, que amerite identificar estos factores de riesgo dentro de las zonas intangibles.
                  li 
                    i.fas.fa-check
                    | Cuando se presente una emergencia o desastre antrópico que ponga en riesgo la vida de los pueblos indígenas en aislamiento.
        .col-lg-6
          figure.mb-0
            img(src='@/assets/curso/tema4/img03.png') 

      .row.mb-5.align-items-center.p-0(style="background-color: #FAFBF6")
        .row.align-items-start.p-0.mb-0
          .col-lg-8
            p.mb-0 <b>Para el ingreso excepcional a los territorios de pueblos indígenas en aislamiento se contará con las siguientes condiciones mínimas:</b>
        .row.align-items-center
          .col-lg-6.p-0            
            figure.mb-0
              img(src='@/assets/curso/tema4/img04.png') 
          .col-lg-6          
            .row.justify-content-end
              .col-lg-11
                .milista.ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Se deberá informar y coordinar con el Ministerio del Interior y el comité local acerca de las motivaciones del ingreso, la fecha y los objetivos de este, según el caso.
                  li 
                    i.fas.fa-check
                    | Los equipos que entren al territorio deberán tener el menor número de integrantes posible, haber sido capacitados en lo dispuesto en este capítulo, estar en óptimas condiciones de salud, contar con esquemas de vacunación completos y en lo posible, incluir personal que pueda servir de intérprete lingüístico y cultural en caso de contacto inesperado.
                  li 
                    i.fas.fa-check
                    | Se deberá evitar al máximo cualquier tipo de contacto, manipular vestigios o elementos pertenecientes a la cultura material e inmaterial de los pueblos en aislamiento, incluso en caso de tratarse de actuaciones o actividades de grupos armados ilegales.
                  li 
                    i.fas.fa-check
                    | Se evitará realizar registro fílmico y fotográfico a lugares y personas pertenecientes al pueblo indígena aislado.
                  li 
                    i.fas.fa-check
                    | Se procurará generar el menor impacto posible sobre el paisaje y los ecosistemas a los que se ingresa, así como evitar dejar rastros o elementos materiales, basuras y otros que puedan ser encontrados por los pueblos indígenas en aislamiento.                

      p.mb-0 Las personas que ingresan deben estar capacitados en la atención de pueblos PIACI, tener acompañamiento de representantes de las comunidades y organizaciones indígenas que puedan entender mejor el dialecto, así como las costumbres y el respeto a la cultura de los PIACI.    

    Separador

    #t_4_1.titulo-segundo.color-secundario
      h2 4.1 Atención primaria en salud y recomendaciones de atención PIACI

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.p-5(style="background-color: #EAAD9B; border-radius:18px")
        .row.justify-content-center.align-items-center(style="background-color: white; border-radius:18px")
          .col-lg-6.p-0
            figure
              img(src='@/assets/curso/tema4/img05.png' style="background-color: white; border-radius:18px") 
          .col-lg-6.p-4
            p.mb-0 <b>Garantizar un territorio sano y con recursos naturales, el respeto al territorio PIACI y el no contacto, así como el mantenimiento de la salud de población en la zona colindante es la mejor garantía para la salud de los pueblos PIACI. En el siguiente recurso se podrá conocer algunas de las recomendaciones más importantes para la atención de emergencia para los pueblos indígenas. </b>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.p-0
        img(src='@/assets/curso/tema4/img06.svg' ) 

    .pasostema2-1.pt-5
      .row.justify-content-center
        .col-lg-10.p-0
          PasosA.color-acento-botones(tipo="n")            
            p.mb-0 Definir cuáles son las áreas colindantes para fortalecer los programas enfocados a la prevención, vigilancia, el monitoreo, la investigación y el análisis de fenómenos epidemiológicos que se manifiesten en las poblaciones que se encuentran dentro de dichos espacios.
            p.mb-0 Incorporar la cosmovisión de la salud de las comunidades indígenas presentes en la región, y en el marco de los Determinantes Sociales de la Salud.
            p.mb-0 Controlar los factores de riesgo, implementar estrategias y acciones que afecten de manera positiva los determinantes sociales de la salud, para el mantenimiento de la salud de la población colindante, y de esta manera generar una barrera sanitaria.
            p.mb-0 Fortalecer las Rutas Integrales de Atención en Salud y los programas de promoción y prevención.
            p.mb-0 Promocionar y capacitar a la comunidad, incorporando en el diálogo de saberes a la medicina tradicional de los pueblos indígenas, en el conocimiento y respeto al territorio y al no contacto con los PIACI.
            p.mb-0 Fortalecer el Sistema de vigilancia en salud pública (SIVIGILA) en la zona colindante y la notificación de enfermedades de interés en salud pública, considerando ampliar el rango de enfermedades de reporte obligatorio para las zonas adyacentes a los territorios de estos pueblos y que puedan generar un riesgo para los PIACI.
            p.mb-0 Fortalecer el monitoreo en salud pública en estas comunidades, incluyendo en la vigilancia activa los niveles de contaminantes en el ambiente y sobre la presencia de vectores de transmisión de enfermedades.
            p.mb-0 Fortalecer la prevención de enfermedades transmisibles y la rápida atención de estas enfermedades de interés en salud pública que afecten a la población colindante, con el fin de establecer un cordón de protección sanitaria, incorporando la medicina tradicional y el conocimiento de los pueblos indígenas. 
            p.mb-0 Realizar programas activos y permanentes de promoción de la salud del entorno del territorio donde viven los PIACI (cordones de protección), con articulación interinstitucional y transdisciplinaria, en el sentido de controlar factores epidemiológicos, sociales, ambientales y económicos que puedan traer daños físicos y mentales.

    Separador

    #t_4_2.titulo-segundo.color-secundario
      h2 4.2 Recomendaciones primarias para atención de emergencia

    p.mb-4 Los principios orientadores para la atención en salud de los pueblos PIACI se toman de los lineamientos en construcción que se elaboran desde la Dirección de Prestación de Servicios de Salud del Ministerio de Salud y Protección Social, que en el momento de la elaboración del curso fueron compartidos a la Dirección de Talento Humano en Salud, pero se encuentran en proceso de construcción (Ministerio de Salud y Protección Social, 2021). A continuación, se podrá conocer las recomendaciones primarias a partir del siguiente recurso: 
    p.mb-5 <b>Precaución, prevención y acción sin daño.</b> Se recomienda que por la alta vulnerabilidad en que se encuentran los PIACI, las instituciones que van a participar deben valorar previamente las acciones a desarrollar, con el fin de causar los menores riesgos e impactos posibles, para lo cual se sugiere priorizar acciones iniciales con las poblaciones colindantes, por ejemplo, en el caso de encontrar riesgos de enfermar por eventos como sarampión, dengue y malaria, es necesario abordar las comunidades que están en la zona colindante para evitar transmisión de enfermedades.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img(src='@/assets/curso/tema4/img07.png' ) 
      .col-lg-6
        p.mb-4 <b>Intervención mínima.</b> Las intervenciones directas en salud en el territorio se deben limitar al mínimo con el fin de evitar el contacto frecuente con la comunidad, de manera que se tenga la menor interferencia posible en su cultura, salud, usos, costumbres y en especial hábitos alimentarios. Esto también significa equipos de atención limitados y evitar al máximo la dependencia de objetos y medicinas occidentales. Se debe evitar la injerencia sobre sus sistemas sociales propios de medicina tradicional, de soberanía alimentaria y cosmogonía ancestrales, así como el generarles dependencia a objetos, alimentos y/o medicinas provistas por la industria farmacéutica (Apartes tomados del Ministerio de Salud e Instituto Nacional de Salud de Perú, 2008; ACT Colombia, 2015).
        p.mb-0 <b>Resolutividad.</b> Es importante que los equipos de salud que ingresen a la comunidad tengan los conocimientos, la capacidad de gestión y los elementos necesarios para resolver al máximo in situ los problemas de salud presentados por las personas que integran las comunidades en contacto inicial, combinando acciones de atención individual in situ y acciones colectivas de promoción y prevención, evitando en lo posible la remisión de pacientes fuera del lugar de atención, en cuyo caso se debe cumplir con lineamientos específicos de bioseguridad.

    p.mb-5 <b>Comunicación plena con la comunidad y entre las instituciones.</b> Realizar previamente un acercamiento con las autoridades a través de sus líderes o autoridades indígenas debidamente reconocidas para la entrada a estos territorios por parte del personal de salud, así como para la concertación de acciones para el desarrollo de jornadas y de algunas atenciones en salud (vacunación, toma de muestras de sangre, exámenes de laboratorio), para lo cual debe haber autorización expresa de dichas autoridades tradicionales; por lo que esta comunicación facilita algunos aspectos logísticos como conocer las rutas o caminos de acceso más conveniente para la entrada a la comunidad. Se debe contar con un intérprete que conozca la cultura y lengua de la comunidad para facilitar la comunicación <b>entre la comunidad y el equipo de salud.</b>

    .row.justify-content-center.mb-5
      .col-lg-6.pe-0        
        .mibloque6.bloque-texto-b.color-primario.py-5.mb-0
          .bloque-texto-b__texto
            p.mb-0 Durante el proceso de atención se debe <b>generar un espacio con la comunidad</b> para informar lo encontrado durante la valoración e informar los tratamientos que se van suministrar, ya sea orales, intravenosos, entre otros,  de esta manera se minimiza el temor y facilita la aceptación de los tratamientos; como se presume que no hablan la lengua española, ni tampoco plenamente la lengua de los pueblos colindantes, es necesaria la participación de un antropólogo-lingüista y de miembros de estas comunidades colindantes, pues se espera que compartan rasgos lingüísticos y por tanto algunas palabras.
      .col-lg-6.p-0
        img(src='@/assets/curso/tema4/img08.png')                     

    .row.mb-5
      .col-lg-6.p-5.d-flex.align-items-center(style="background-color: #FEE7C5; border-top-left-radius: 20px; border-bottom-left-radius: 20px")   
        div.p-4    
          p.mb-0.text-center <b>A nivel de las instituciones que participen es importante garantizar las instancias necesarias para comunicar los avances en los procesos y coordinar las acciones, de tal modo que se minimice el contacto con estas poblaciones, por ejemplo, el censo y la caracterización de la población debe estar integrada al registro y brigadas de atención en salud.</b>
      .col-lg-6.p-5.d-flex.align-items-center(style="background-color: #C0C3B0; border-top-right-radius: 20px; border-bottom-right-radius: 20px")       
        div.p-4
          p.mb-0.text-center <b>Los protocolos de contacto servirán para aquellas situaciones en las que por razones de fuerza mayor el contacto sea necesario. Estos protocolos deberán ser una garantía para minimizar las consecuencias del primer contacto, asegurando que los procedimientos de actuación garanticen las vidas y las culturas de estos pueblos. Además, estos protocolos deben basarse en el derecho de los pueblos indígenas a no ser sometidos a procesos de aculturación (Oficina del Alto Comisionado de Derechos Humanos Naciones Unidas-ACNUDH, 2012).</b>      

    //- figure.mb-5
    //-   img(src='@/assets/curso/tema4/img09.svg')  
    

    Separador                   
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
