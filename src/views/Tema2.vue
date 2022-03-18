<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 2
      h1 Marco normativo y políticas públicas

    .tarjeta.color-principal.p-4.p-md-5(style="background-color: #F3F2EB")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema2/img01.svg') 

        .col-md.col-lg-6
          .titulo-segundo.color-secundario
            h2.mb-0 Marco normativo y políticas públicas
          p.mb-4 El marco normativo y de políticas de los pueblos PIACI comparte además del marco de derechos establecido para los pueblos indígenas, uno específico para su protección, reconociendo la autodeterminación de aislamiento voluntario y la protección especial de su territorio y su cultura. A continuación, se podrá conocer estos referentes normativos. 
          
          a.boton.color-principal.texto-blanco(style="background-color: #F8D345", :href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
            span(style="color: #12263F !important") Descargar
            i.fas.fa-file-download(style="color: #12263F !important")

    Separador

    #t_2_1.titulo-segundo.color-secundario
      h2 2.1 Protección y atención

    p.mb-5 Los PIACI son de especial atención, dado que son particularmente vulnerables por su situación de aislamiento y poco contacto con las culturas mayoritarias, esta situación hace que el respeto y la protección a su territorio sea aún mayor, dado que en su proceso de adaptación son más dependientes de la ecología y de las condiciones de su territorio, de acuerdo con la OTCA (BID - OTCA, 2018), los PIACI presentan las siguientes vulnerabilidades:

    .row.justify-content-center.mb-5
      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/tema2/img02.png')   
        h4 Vulnerabilidad social
        p.mb-0 Tienen menor capacidad de adaptación e interrelación con las culturas mayoritarias, su forma de vida y su cultura está completamente integrada a su territorio, por lo que cambios generados por invasión de este o por contacto forzado, pone en peligro de extinción a estas comunidades. 
      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/tema2/img03.png')   
        h4 Vulnerabilidad política     
        p.mb-0 Debido al desconocimiento de la cultura de estos pueblos, de sus formas de organización, de su lenguaje, existe mayor peligro de que el contacto forzado termine violentándolos, generando un genocidio

    .row.justify-content-center.mb-5
      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/tema2/img04.png')   
        h4 Vulnerabilidad demográfica
        p.mb-0 Existen PIACI conformados por 500 individuos o menos, por lo que existe mayor riesgo de su extinción.
      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/tema2/img05.png')   
        h4 Vulnerabilidad epidemiológica
        p.mb-0 Los PIACI no presentan defensas biológicas, ni inmunológicas a muchos patógenos e infecciones.

    p.mb-5 La normatividad vigente establece que los PIACI son sujetos de especial protección, y que es deber del Estado garantizar su aislamiento y la protección de su territorio y de que, en ningún caso podrán ser intervenidos o despojados de sus territorios, ni serán objeto de políticas, programas o acciones, privadas o públicas, que promuevan el contacto o realicen intervenciones en sus territorios para cualquier fin (Ministerio del Interior de Colombia, 2018).

    .row.justify-content-center.mb-5
      .col-lg-4.p-0
        figure
          img(src='@/assets/curso/tema2/img06.png')   
      .col-lg-8.d-flex.align-items-center.p-4(style="background-color: #F7724A")
        div.p-5(style="background-color: white")
          p.mb-0 <b> Los mecanismos de control y protección se deben dar en su territorio, en la zona colindante y en la zona de amortiguamiento, zonas en las que debe haber un estricto control en la movilización y en las actividades que se realizan de manera directa e indirecta, para prevenir el contacto voluntario o accidental con estas comunidades, así como la contaminación de su hábitat o sus afluentes de agua y a todo su medio ambiente. </b>

    p.mb-5 Se debe realizar un monitoreo integral de todos los aspectos que puedan poner en peligro a los PIACI, incluyendo en el monitoreo a las comunidades de la zona colindante, entre las actividades de monitoreo se encuentran la valoración de las condiciones de salud de las comunidades que vivan cerca a los territorios de los PIACI, monitorear las condiciones del medio ambiente (fauna y flora), los recursos hídricos, el entorno socioeconómico y las actividades que se realicen en la zona colindante, como la realización del proyectos públicos o privados en zonas cercanas al territorio de los PIACI. Entre las actividades de monitoreo también se encuentran: 

    .pasostema2-1.pt-5(:style="{'background-repeat': 'no-repeat', 'background-size': 'contain', 'background-image': `url(${require('@/assets/curso/tema2/img07.svg')})`}")
      .row.justify-content-center.mb-5
        .col-lg-9.p-0
          PasosA.color-acento-botones.mb-5(tipo="n")            
            p.mb-0 La demarcación de los territorios establecidos para los PIACI.
            p.mb-0 Los planes gubernamentales y de las actividades de las autoridades locales.
            p.mb-0 Las actividades extractivas.
            p.mb-0 Las actividades del turismo. 
      
      .row.justify-content-center
        .col-lg-9.p-0
          div.p-0.mb-5(style="position: relative")      
            .row.justify-content-end.m-0(style="position: relative; z-index:0 ;width:100%; background-color: #EAAD9B; border-radius: 16px")                      
              .col-lg-5.p-0
                figure.mb-0
                  img(src='@/assets/curso/tema2/img08.png')               
            .justify-content-start.m-0(style="position: absolute; z-index:1 ; top: 10%; width: 100%; height: 80%")
              .row.justify-content-start.m-0.ms-4
                .col-lg-8.p-3(style="background-color: white")
                  p.mb-0 Se deben monitorear amenazas como presencia de grupos ilegales, minería ilegal o de afectación a los derechos humanos en la zona de amortiguación y la zona colindante. El monitoreo en el territorio PIACI y la zona de amortiguación debe ser de carácter no invasivo (imágenes de satélite y georreferenciales, sobrevuelos, observación de vestigios dejados por los indígenas, documentación histórica, registro y sistematización de las informaciones recolectadas con la población colindante o de estudios realizados de manera no invasiva por entidades del Estado, etc.).

      Separador 
      #t_2_2.titulo-segundo.color-secundario
        h2 2.2. Mecanismos de supervisión, coordinación y articulación

    p.mb-5 Se debe realizar una coordinación en el nivel nacional entre los diferentes ministerios y articularse con el nivel local, en cabeza del gobernador y con la presencia de las organizaciones indígenas, el Decreto 1232 de 2018 del Ministerio del Interior de Colombia establece los niveles de prevención en dos categorías:
    
    .row.justify-content-center.mb-5
      .col-lg-6.d-flex
        div.py-4(style="background-color: #EAAD9B")
          h3.text-center.mb-5 Prevención temprana
          .row.justify-content-center.mb-4
              .col-lg-8
                figure
                  img(src='@/assets/curso/tema2/img09.png') 
          p.mb-5.mx-5 identifica y previene las causas que generan las amenazas a los Derechos de los Pueblos Indígenas en Aislamiento, que buscan evitar su vulneración.
      .col-lg-6.d-flex
        div.py-4(style="background-color: #C0C3B0")
          h3.text-center.mb-5 Prevención temprana
          .row.justify-content-center.mb-4
              .col-lg-8
                figure
                  img(src='@/assets/curso/tema2/img10.png') 
          p.mb-5.mx-5 ante el riesgo de una violación de derechos de los Pueblos Indígenas en Aislamiento, adopta acciones, planes y programas orientados a atender la contingencia y desactivar las amenazas para evitar su ocurrencia.

    p.mb-5 Para tal fin se crea la  Comisión Nacional de Prevención y Protección de los Derechos de los Pueblos Indígenas en Aislamiento, compuesta por varios ministerios (Ministerio del Interior, Ministerio de Salud, Ministerio de Cultura, Ministerio de Defensa, Ministerio del Medio Ambiente, Dirección Nacional de Parques), representantes de organizaciones indígenas de carácter nacional, entre otros y se crean los Comités Locales de Prevención y Protección de los Derechos de los Pueblos Indígenas en Aislamiento (Ministerio del Interior de Colombia, 2018), en el marco de los comités locales se conforman los Grupos Técnicos Interculturales encargados de apoyar técnica y operativamente a los comités locales.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.p-5(style="background-color: #A5A9BC; border-radius:18px")
        .row.justify-content-center(style="background-color: white; border-radius:18px")
          .col-lg-4.p-0
            figure
              img(src='@/assets/curso/tema2/img11.png') 
          .col-lg-8.p-4
            p.mb-0 Se debe realizar una capacitación en todos los ministerios del gobierno nacional, en las instituciones del orden nacional y territorial, difundiendo el contexto de los derechos, las particularidades y vulnerabilidades de los PIACI, así como de los protocolos y de las prohibiciones que existen respecto a no contacto y no daño. Establecer programas de coordinación y trabajo conjunto entre las acciones que se desarrollen desde el Estado a nivel nacional y local. (Oficina del Alto Comisionado de Derechos Humanos Naciones Unidas-ACNUDH, 2012). 

    #t_2_3.titulo-segundo.color-secundario
      h2 2.3. Normatividad nacional en salud

    p.mb-5 Para los PIACI hay una normativa nacional que posibilita el reconocimiento sobre las normas, principios y recursos que respeten y valoren todos sus conocimientos ancestrales. A continuación, se podrá conocer esta normativa a través del siguiente recurso educativo: 

    .row.justify-content-start.align-items-center.mb-5
      .col-lg-5
        figure.mb-0
          img(src='@/assets/curso/tema2/img12.svg') 

    .row.justify-content-start.align-items-center.mb-5(:style="{'background-repeat': 'no-repeat', 'background-size': 'contain', 'background-image': `url(${require('@/assets/curso/tema2/img13.svg')})`}")
      .col-lg-11
        LineaTiempoE.color-acento-contenido
          div(titulo="Decreto 1953 de 2014" subtitulo="")
            p.mb-0 El Sistema Indígena de Salud Propio Intercultural (SISPI) es el conjunto de políticas, normas, principios, recursos, instituciones y procedimientos que se sustentan a partir de una concepción de vida colectiva, donde la sabiduría ancestral es fundamental para orientar dicho Sistema, en armonía con la madre tierra y según la cosmovisión de cada pueblo, se articula, coordina y complementa con el Sistema General de Seguridad Social en Salud (SGSSS), con el fin de maximizar los logros en salud de los pueblos indígenas. El SISPI se adaptará a la cosmovisión y cosmogonía de cada pueblo indígena en Colombia; ellos definirán su implementación desde la salud propia, la interculturalidad, la gobernabilidad y autonomía en sus territorios.
          div(titulo="Artículo 75. Principios " subtitulo="")
            p.mb-0 1. Accesibilidad. 2. Complementariedad terapéutica. 3. Reciprocidad. 4. Interculturalidad.
          div(titulo="Artículo 76. Concepto de salud propia " subtitulo="")
            p.mb-0 Es la armonía y el equilibrio de acuerdo con la cosmovisión de cada pueblo indígena, resultado de las relaciones de la persona consigo misma, con la familia, la comunidad y el territorio. 
          div(titulo="Artículo 77. Componentes del Sistema Indígena de Salud Propio Intercultural (SISPI)" subtitulo="")
            p.mb-0 1. Sabiduría ancestral. 
            p.mb-0 2. Político organizativo. 
            p.mb-0 3. Formación, capacitación, generación y uso del conocimiento en salud. 
            p.mb-0 4. Cuidado de salud propia e intercultural. 
            p.mb-0 5. Administración y gestión. 
          div(titulo="Artículo 83. Se establecen las competencias en salud de los territorios indígenas" subtitulo="")
            p.mb-0 Definir, adaptar y ejecutar acciones en salud pública en coordinación con el Ministerio de Salud y Protección Social, de acuerdo con las normas establecidas para este fin, con una previa certificación en salud. Crear y/o transformar las estructuras propias para el desarrollo del SISPI de acuerdo con la ley de origen, derecho mayor o derecho propio de cada pueblo indígena, prestación de servicios en salud articulados entre el SGSSS y la salud propia de cada pueblo indígena.  Administrar, suministrar y responder por la información en salud relacionada con la salud pública, gestión del riesgo y del cuidado de la salud en los aspectos administrativos, financieros y epidemiológicos que se generen en los respectivos territorios indígenas y sus estructuras propias en salud.
          div(titulo="Artículo 84. Estructuras propias del SISPI" subtitulo="")
            p.mb-0 Estas se crearán con base en las estructuras de gobierno propio de los pueblos indígenas, en cumplimiento de lo previsto en el presente Decreto y de aquello que se concerte en la Mesa Permanente de Concertación con Pueblos y Organizaciones Indígenas. La Subcomisión de Salud Indígena será la instancia consultiva y técnica entre el gobierno nacional y los pueblos indígenas que orienta, formula y contribuye a la construcción e implementación del SISPI, la cual operará de acuerdo con el plan de trabajo, según las necesidades de desarrollo del SISPI.
          div(titulo="Artículo 87. Evaluación, seguimiento y control." subtitulo="")
            p.mb-0 Se plantea mecanismos de evaluación, seguimiento y control, de acuerdo con los principios generales del SGSSS. 
          div(titulo="Ley 691 de 2001- capítulo 7- Participación en los órganos dirección del sistema: Art. 22, 23, 24" subtitulo="")
            p.mb-0 De acuerdo con la respectiva normativa, el derecho a la salud está reconocido en el Artículo 64 de la Constitución Política de Colombia, su alcance es general para toda la población y en lo concerniente a los pueblos indígenas, en el país se discutió y aprobó esta ley, la cual reglamentó la participación de los Grupos Étnicos en el Sistema General de Seguridad Social en Colombia.

    p.mb-5 Por tanto, esta ley ha permitido que los pueblos indígenas puedan desarrollar sus planes de vida o desarrollo, contando con la asistencia técnica de las entidades territoriales y, se respete la cosmovisión y los valores tradicionales de los pueblos indígenas para garantizar su permanencia cultural. Este acceso del derecho a la salud se hace teniendo en cuenta los siguientes principios: 

    
    div.p-0.mb-5(style="position: relative")      
      .row.justify-content-end.m-0(style="position: relative; z-index:1 ;width:100%; background-color: transparent; border-radius: 16px")                      
        .col-lg-6.py-0
          figure.mb-0
            img(src='@/assets/curso/tema2/img14.svg')               
      .justify-content-start.m-0(style="position: absolute; z-index:0 ; top: 10%; width: 100%; height: 80%")
        .row.justify-content-start.m-0
          .col-lg-9.p-5(style="border: 5px solid #707070; border-radius: 18px")
            .row.justify-content-start
              .col-lg-8
                .row.mb-5
                  .col-lg-1
                    img(src='@/assets/curso/tema2/img15.svg')               
                  .col-lg-5
                    h4.mb-0 Eficiencia
                  .col-lg-1
                    img(src='@/assets/curso/tema2/img15.svg')               
                  .col-lg-5
                    h4.mb-0 Unidad
                .row.mb-5
                  .col-lg-1
                    img(src='@/assets/curso/tema2/img15.svg')               
                  .col-lg-5
                    h4.mb-0 Universalidad
                  .col-lg-1
                    img(src='@/assets/curso/tema2/img15.svg')               
                  .col-lg-5
                    h4.mb-0 Participación
                .row.mb-5
                  .col-lg-1
                    img(src='@/assets/curso/tema2/img15.svg')               
                  .col-lg-5
                    h4.mb-0 Solidaridad
                  .col-lg-1
                    img(src='@/assets/curso/tema2/img15.svg')               
                  .col-lg-5
                    h4.mb-0 Diversidad étnica y cultural
                .row.mb-5
                  .col-lg-1
                    img(src='@/assets/curso/tema2/img15.svg')               
                  .col-lg-5
                    h4.mb-0 Integralidad
                

    p.mb-5 En virtud de lo anterior, se establece un alcance especial a este derecho:
    .row.justify-content-center.mb-5
      .col-lg-10
        .tema-1.cajon.color-secundario.p-4.mb-4
          p.mb-4 El sistema practicará la observancia y el respeto a su estilo de vida y tomará en consideración sus especificidades culturales y ambientales, que permitan un desarrollo armónico a los pueblos indígenas (Artículo 3). El objeto de esta ley se ubica en su Artículo: 
          h4.mb-0 Proteger de manera efectiva los derechos a la salud de los pueblos indígenas, garantizándoles su integridad cultural y asegurando su permanencia social.

    .row.justify-content-center.mb-5
      .col-lg-7
        p.mb-0.pe-5 En el marco del Sistema General de Seguridad Social en Salud las autoridades indígenas tienen competencias, toda vez que la ley establece que además de las autoridades del Sistema General de Seguridad Social, las autoridades indígenas serán consideradas instancias, organismos e instituciones en sus territorios, atendiendo su especial naturaleza jurídica y organizativa. Por esto, en el capítulo siete (Artículos 22 al 24) se establecen los principios de concertación, representatividad y control de las autoridades en los Consejos Territoriales de Seguridad Social en Salud.
        .mibloque4.bloque-texto-b.color-primario.py-5.mb-0
          .bloque-texto-b__texto
            h4.mb-0 De acuerdo con los capítulos dos y tres de esta ley, los miembros de los pueblos indígenas en el Sistema General de Seguridad Social en Salud se vinculan como afiliados al régimen subsidiado, excepto en los siguientes casos: 
      .col-lg-1
      .col-lg-2
        img(src='@/assets/curso/tema2/img16.svg')               
      .col-lg-2
    
    p.mb-5 Los pueblos indígenas tienen acceso a los planes y programas del Sistema General de Seguridad Social en Salud: 

    .row.justify-content-start.align-items-center.m-0.me-5.mb-5(style="border: 6px solid  #F7724A; background-color: #F6F6F6; border-radius:0px 38px 38px 0px")
      .col-lg-5.p-0
        img.m-0(src='@/assets/curso/tema2/img18.svg')               
      .col-lg-7.px-5
        .row.mb-5
          .col-lg-1
            img(src='@/assets/curso/tema2/img15.svg')               
          .col-lg-5
            h4.mb-0 Plan Obligatorio de Salud: POS
          .col-lg-1
            img(src='@/assets/curso/tema2/img15.svg')               
          .col-lg-5
            h4.mb-0 Plan Obligatorio de Salud Subsidiado: POS-S
        .row.mb-0
          .col-lg-1
            img(src='@/assets/curso/tema2/img15.svg')               
          .col-lg-5
            h4.mb-0 Plan de Atención Básica: PAB
          .col-lg-1
            img(src='@/assets/curso/tema2/img15.svg')               
          .col-lg-5
            h4.mb-0 Atención Inicial de Urgencias

    br
    br
    p.mb-5 Es importante subrayar que los planes y programas de servicios de salud aplicables a los pueblos indígenas deben considerar las prácticas indígenas, basadas en los criterios de pluralismo médico, complementariedad terapéutica y complementariedad. Este último punto implica que los prestadores de servicio de salud deberán incluir actividades y procedimientos de medicina tradicional indígena, las cuales deberán ser concertadas con las respectivas autoridades indígenas. 
    br
    br

    div.mb-0.border(:style="{'background-color': '#E5E3D5','background-repeat': 'no-repeat', 'background-size': 'contain', 'background-image': `url(${require('@/assets/curso/tema2/img19.svg')})`}")
      .row.justify-content-center.mb-0.py-5      
        .col-lg-10.p-5
          p.mb-0 <b>El PAB para pueblos indígenas se caracteriza porque su ejecución es gratuita, debe ser concertado con las entidades territoriales, aplicando los procesos de consulta y concertación legalmente establecidos, orientados a la adecuación etnocultural de las acciones que se incluyan en el PAB. </b>
    
    div.mt-0.mb-5.p-4(:style="{'background-repeat': 'no-repeat', 'background-size': 'cover', 'background-image': `url(${require('@/assets/curso/tema2/img20.png')})`}")
      p.mb-5 La prestación de los servicios de salud que se ofrece a los pueblos indígenas está exenta de cobro de cuotas moderadoras y copagos. Pues los recursos que sostienen la afiliación de los pueblos indígenas al Régimen Subsidiado de Salud son: 
      br
      br
      .row.mb-5.justify-content-center
        .col-10
          .row.mb-5
              .col-lg-1
                img(style="width:28px" src='@/assets/curso/tema2/img15.svg')               
              .col-lg-11
                h4.mb-0 <b>Aportes del Fondo de Solidaridad y Garantías (FOSYGA), pertenecientes a la subcuenta de solidaridad.</b>

          .row.mb-5
              .col-lg-1
                img(style="width:28px" src='@/assets/curso/tema2/img15.svg')               
              .col-lg-11
                h4.mb-0 <b>Recursos de los entes territoriales (departamentos, municipios).</b>
          
          .row.mb-0
              .col-lg-1
                img(style="width:28px" src='@/assets/curso/tema2/img15.svg')               
              .col-lg-11
                h4.mb-0 <b>Aportes de los resguardos indígenas, quienes como mínimo aportarán el 10%, excepto aquellos que no reciban recursos del Sistema General de Participaciones o que estos sean insuficientes. </b>

    .row.justify-content-center.align-items-center
      .col-6
        p.mb-5 Ahora bien, la identificación de la población indígena para la asignación de subsidios se efectuará de conformidad con lo establecido en el Artículo 5º de la Ley 691 de 2001. Es de resaltar que para el caso que la población beneficiaria identificada a través del listado censal no coincida con la población indígena certificada por el DANE, la autoridad territorial lo verificará y validará de manera conjunta con la autoridad tradicional para efectos del registro individual en la base de datos de afiliación al régimen subsidiado (Defensoría del Pueblo, 2014).
        h4.mb-5 Algo para resaltar de la ley y la subsecuente jurisprudencia al respecto es que ha permitido que las comunidades indígenas podrán afiliarse al régimen subsidiado de manera colectiva y preferencialmente a una ARSI (Administradoras Indígenas de Salud), según lo previsto en el Artículo 17 de la Ley 691 de 2001.
        p.mb-0 Para finalizar este tema se invita a consultar los siguientes videos, en los cuales se hace un acercamiento al estado del arte de la normatividad de los pueblos indígenas, así mismo, al Derecho Internacional Humanitario.
      .col-6.p-5
        .tema2.p-0.mb-5.px-5
          .tarjeta-avatar-b.mb-5.mx-3(style="position:relative; height: 100%")
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img21.svg')    
            .tarjeta.tarjeta--azul.d-flex.align-items-center
              h4.p-4.mb-0 Estado del arte de la normatividad de los pueblos indígenas

          .tarjeta-avatar-b.mb-5.mx-3(style="position:relative; height: 100%")
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img21.svg')    
            .tarjeta.tarjeta--azul.d-flex.align-items-center
              h4.p-4.mb-0 Derecho Internacional Humanitario

    Separador
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
