<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 1
      h1 Pueblos en aislamiento

    p.mb-5 Los pueblos en aislamiento y contacto inicial (PIACI) son pueblos que tomaron la decisión de permanecer aislados en sus territorios y limitar el contacto con otras culturas mayoritarias, debido a experiencias violentas que han puesto en peligro su pervivencia y supervivencia. Los PIACI son sujetos de derecho colectivo especial por su alta vulnerabilidad y requieren el respeto a su decisión de no contacto, con protección especial de su territorio y del ecosistema en el que habitan.
    
    .row.mb-0
      .col-lg-5.ps-5
        figure.mb-0
          img(src='@/assets/curso/tema1/img01.png') 
      .col-lg-7
        .mibloque.bloque-texto-b.color-primario.py-5.ps-4
          .bloque-texto-b__texto
            p.mb-0 Según la definición de la Corte Interamericana de Derechos Humanos (CIDH) los pueblos indígenas en situación de aislamiento voluntario son pueblos o segmentos de pueblos indígenas que no mantienen contacto sostenido con la población mayoritaria no indígena, y que suelen rehuir todo tipo de contacto con personas ajenas a su pueblo. También pueden ser pueblos o segmentos de pueblos previamente contactados y que tras un contacto intermitente con las sociedades no indígenas han vuelto a una situación de aislamiento, y rompen las relaciones de contacto que pudieran tener con dichas sociedades (Corte Interamericana de Derechos Humanos - OEA, 2013).

    div.pt-5(:style="{'background-position': '0% -70px', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-image': `url(${require('@/assets/curso/tema1/img02.png')})`}")
      .row.justify-content-center.mb-5
        .col-lg-6
          figure.mb-5
            img(src='@/assets/curso/tema1/img03.png') 
        
      
    .row.justify-content-center.mb-5
        .col-lg-8
          .cajon.color-acento-contenido.p-4.mb-4
            p.mb-0 <b>El contacto con otras poblaciones ha tenido consecuencias negativas para los pueblos indígenas, razón por la cual han decidido estar en aislamiento o evitar el contacto con otras culturas, además, este aislamiento se ha dado por presiones externas que se ejercen sobre su territorio.</b>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-5 De acuerdo con el citado informe de la CIDH América tiene el mayor porcentaje de pueblos indígenas en aislamiento o contacto inicial en el mundo (PIACI), en Suramérica hay aproximadamente 200 PIACI con un número estimado de 10.000 personas, según el informe de la Corte muchos pueblos han desaparecido y otros que tienen menos de 255 personas están en peligro de desaparecer. La CIDH estableció como una de las premisas fundamentales el respeto al no contacto y a su elección de permanecer en aislamiento, en este sentido es preciso que 
        .tema-1.px-5
          .bloque-texto-d.color-primario.px-4.pt-0.pb-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              h4 se debe respetar el principio de no contacto, lo que implica implementar una política pública que proteja sus espacios vitales y les preserve de presiones por parte de empresas extractivas, la tala ilegal de madera, y el asentamiento no autorizado en el área
              i.fas.fa-quote-right
            .bloque-texto-d__autor 
              p.mb-0 (Corte Interamericana de Derechos
              p.mb-0 Humanos - OEA, 2013)
      .col-lg-5
        figure.mb-0
          img(src='@/assets/curso/tema1/img04.svg') 
    
    p.mb-5 Como ya se había dicho existe aproximadamente 200 PIACI en las Américas, con una gran diversidad de culturas, lenguas y contextos, estos se encuentran en diferentes países y zonas de frontera, no obstante, de acuerdo con estudios de ACNUHD comparten unas características comunes, como son: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure.mb-0
          img(src='@/assets/curso/tema1/img05.png') 

    .slider1.tarjeta.p-4(:style="{'background-position': '0% -70px', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-image': `url(${require('@/assets/curso/tema1/img08.png')})`}")      
        SlyderA
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure.mb-0
                img(src='@/assets/curso/tema1/img06.png') 
            .col-lg-7
              .mibloque2.bloque-texto-b.color-primario.py-5.ps-4
                .bloque-texto-b__texto
                  p.mb-0 Son pueblos integrados al ecosistema y al territorio en el que habitan, mantienen una estrecha relación de interdependencia con el medio ambiente en el que desarrollan su vida y su cultura. Poseen un profundo conocimiento de su medio ambiente, lo que les permite vivir de manera autosuficiente generación tras generación, razón por la cual el mantenimiento de sus territorios es de vital importancia para todos ellos.

          .row.justify-content-center
            .col-lg-5.pe-0
              figure.mb-0
                img(src='@/assets/curso/tema1/img07.png') 
            .col-lg-6.d-flex.align-items-center.p-0(style="background: rgba(254,231,197,0.2)")
              div.p-4
                p.mb-0 Son pueblos que no conocen el funcionamiento de la sociedad mayoritaria, y que por lo tanto se encuentran en una situación de indefensión y extrema vulnerabilidad ante los diversos actores que tratan de acercarse a ellos, o que tratan de acompañar su proceso de relación con el resto de la sociedad, como en el caso de los pueblos en contacto inicial.

          .row.justify-content-center
            .col-lg-11
              .mibloque3.bloque-texto-b.color-primario.py-5.ps-4
                .bloque-texto-b__texto
                  h4.mb-0 Son pueblos altamente vulnerables, que en la mayoría de los casos se encuentran en grave peligro de extinción. Su extremada vulnerabilidad se agrava ante las amenazas y agresiones que sufren sus territorios que ponen en peligro directamente el mantenimiento de su cultura y de su forma de vida.
    
    Separador
    p.mb-5 A continuación, se presentan las definiciones establecidas en el Decreto 1232 de 2018 para abordar los pueblos de aislamiento (Ministerio del Interior de Colombia, 2018):
   
    .tab1.mb-5
      TabsA.color-secundario.mb-5
        .row.tarjeta.p-4.align-items-center(titulo="Autodeterminación y no contacto")
          .col-lg-5
            div
              h4 Autodeterminación y no contacto
              p.mb-0 Se concreta en la decisión libre y voluntaria de los pueblos indígenas de mantenerse en aislamiento y sin contacto con el resto de la sociedad. En observancia de este principio los Pueblos Indígenas en Aislamiento tienen el derecho a mantenerse en este modo de vida durante el tiempo que así lo determinen.
          .col-lg-7
            figure.mb-0
              img(src='@/assets/curso/tema1/img09.png') 
        .row.tarjeta.p-4.align-items-center(titulo="Intangibilidad territorial")
          .col-lg-5
            div
              h4 Intangibilidad territorial para Pueblos Indígenas en Aislamiento
              p.mb-0 Es la prohibición de cualquier intervención directa o indirecta en los territorios donde se asientan los Pueblos Indígenas en Aislamiento, entendidos como los espacios físicos de los cuales las comunidades sustentan su existencia, salvo en las excepciones contempladas taxativamente en este capítulo.
          .col-lg-7
            figure.mb-0
              img(src='@/assets/curso/tema1/img09.png') 
        .row.tarjeta.p-4.align-items-center(titulo="Precaución")
          .col-lg-5
            div
              h4 Precaución
              p.mb-0 Cuando existan serios indicios de la existencia de Pueblos Indígenas en Aislamiento, aún sin la confirmación de su existencia, deberá darse aplicación a las medidas normativas de prevención y protección para la defensa de los derechos colectivos e individuales de estos pueblos.
          .col-lg-7
            figure.mb-0
              img(src='@/assets/curso/tema1/img09.png') 
        .row.tarjeta.p-4.align-items-center(titulo="Interdependencia territorial")
          .col-lg-5
            div
              h4 Interdependencia territorial
              p.mb-0 Con el fin de garantizar plenamente los derechos a la existencia física, la integridad espiritual, cultural y territorial de los Pueblos Indígenas en Aislamiento se reconoce la relación de los territorios de los Pueblos Indígenas en Aislamiento con los de territorios de otros pueblos indígenas en una misma área geográfica, de tal manera que el alcance de las medidas de protección tenga efectos más allá de las zonas intangibles definidas.
          .col-lg-7
            figure.mb-0
              img(src='@/assets/curso/tema1/img09.png') 
        .row.tarjeta.p-4.align-items-center(titulo="Estado natural")
          .col-lg-5
            div
              h4 Estado natural
              p.mb-0 Denominación que se le otorga a los Pueblos Indígenas en Aislamiento por parte de otras comunidades indígenas y es reconocida por el Estado colombiano, para hacer referencia a su estrecha relación con los ecosistemas, su forma de vida originaria y al alto grado de conservación de su cultura.
          .col-lg-7
            figure.mb-0
              img(src='@/assets/curso/tema1/img09.png') 
        .row.tarjeta.p-4.align-items-center(titulo="Riesgo")
          .col-lg-5
            div
              h4 Riesgo
              p.mb-0 Resultado de las relaciones entre las amenazas externas a los derechos a la vida, la autodeterminación, el territorio y la vulnerabilidad de los Pueblos Indígenas en Aislamiento. De acuerdo con el nivel del riesgo se adoptarán medidas de prevención temprana, urgente o de protección necesarias.
          .col-lg-7
            figure.mb-0
              img(src='@/assets/curso/tema1/img09.png') 
        .row.tarjeta.p-4.align-items-center(titulo="Riesgo medio-alto")
          .col-lg-5
            div
              h4 Riesgo medio-alto
              p.mb-0 Probabilidad de que se concreten las amenazas sobre los derechos de los Pueblos Indígenas en Aislamiento en un lapso de tiempo indefinido.
          .col-lg-7
            figure.mb-0
              img(src='@/assets/curso/tema1/img09.png') 
     
      TabsA2.color-secundario
        .row.tarjeta.p-4.align-items-center(titulo="Riesgo inminente")
          .col-lg-7
            figure.mb-0
              img(src='@/assets/curso/tema1/img22.png') 
          .col-lg-5
            div
              h4 Riesgo inminente
              p.mb-0 Probabilidad alta de que se concreten las amenazas sobre los derechos de los Pueblos Indígenas en Aislamiento de forma inmediata.
          
        .row.tarjeta.p-4.align-items-center(titulo="Pueblos indígenas colindantes")
          .col-lg-7
            figure.mb-0
              img(src='@/assets/curso/tema1/img22.png') 
          .col-lg-5
            div
              h4 Pueblos indígenas colindantes:
              p.mb-0 Poblaciones indígenas que habitan territorios directamente adyacentes a los territorios de los Pueblos Indígenas en Aislamiento.
          
        .row.tarjeta.p-4.align-items-center(titulo="Indicio")
          .col-lg-7
            figure.mb-0
              img(src='@/assets/curso/tema1/img22.png') 
          .col-lg-5
            div
              h4 Indicio
              p.mb-0 Señal a partir de la cual se puede deducir la posible existencia de Pueblos Indígenas en Aislamiento. Los indicios pueden ser de distinto tipo: lingüísticos, históricos, materiales, culturales, geográficos, y pueden provenir de distintas fuentes como testimonios orales, análisis de imágenes satelitales, avistamientos, entre otros.
          
        .row.tarjeta.p-4.align-items-center(titulo="Zona de amortiguamiento.")
          .col-lg-7
            figure.mb-0
              img(src='@/assets/curso/tema1/img22.png') 
          .col-lg-5
            div
              h4 Zona de amortiguamiento para Pueblos Indígenas en Aislamiento.
              p.mb-0 Son las áreas adyacentes a los límites de las zonas donde se asientan los Pueblos Indígenas en Aislamiento, como espacios de transición entre estas y el entorno. Las entidades nacionales y locales competentes tomarán medidas en estas zonas, con el fin de limitar las perturbaciones causadas por la actividad humana e impedir que se generen disturbios o alteraciones en los ecosistemas de los territorios de los Pueblos Indígenas en Aislamiento.
          
        .row.tarjeta.p-4.align-items-center(titulo="Autodeterminación")
          .col-lg-7
            figure.mb-0
              img(src='@/assets/curso/tema1/img22.png') 
          .col-lg-5
            div
              h4 Autodeterminación
              p.mb-0 Tiene que ver con el respeto al derecho de decisión de hasta dónde quieren recibir la atención por parte de las entidades, para lo cual es importante que el equipo externo tenga conocimiento claro y respeto por las costumbres y las prácticas medicinales propias de la comunidad indígena que se va a atender. En caso de que alguien se rehúse a la atención se debe respetar su decisión.
          
        .row.tarjeta.p-4.align-items-center(titulo="Vulnerabilidad inmunológica y demográfica")
          .col-lg-7
            figure.mb-0
              img(src='@/assets/curso/tema1/img22.png')        
          .col-lg-5
            div
              h4 Vulnerabilidad inmunológica y demográfica
              p.mb-0 las comunidades en aislamiento o en contacto inicial son fisiológica e inmunológicamente vulnerables a la carga microbiana de la población dominante o hegemónica por su poco contacto con otras comunidades indígenas y no indígenas, esta condición los hace sensibles inmunológicamente al contagio y desarrollo de patogenicidad asociada a enfermedades ajenas a su hábitat, aumentando la posibilidad de agravarse y morir.
          

    h1 Se debe programar el tab para el otro lado
    
    Separador

    #t_1_1.titulo-segundo.color-secundario
      h2 1.1 Referenciación del territorio

    p.mb-4 Para los PIACI la protección de su territorio resulta vital para su pervivencia y su supervivencia, dado que se encuentran en estrecha interrelación e interdependencia con el ecosistema y el territorio en el que viven. Su cultura, su forma de vida se encuentran totalmente adaptados con el medio ambiente y han desarrollado un profundo conocimiento de su hábitat, de los ciclos de la naturaleza, de su fauna y su flora, este conocimiento se ha transmitido de generación en generación, lo que les ha permitido sobrevivir en armonía con la naturaleza.
    .row.align-items-center
      .col-lg-6
        .mibloque2.bloque-texto-b.color-primario.py-5.mb-5
          .bloque-texto-b__texto
            p.mb-0 Como lo establece la CIDH el respeto a su territorio y al no contacto son los principios y derechos más importantes para los pueblos PIACI, evitar cualquier agresión o invasión a su territorio y al establecer un contacto no autorizado o no buscado por estas comunidades (Oficina del Alto Comisionado de Derechos Humanos Naciones Unidas-ACNUDH, 2012).
        
        p.mb-0 <b>El derecho al territorio implica el respeto a su medio ambiente, a la no explotación de sus recursos, a la no contaminación de sus afluentes. Actualmente, existe una gran presión sobre los territorios de los pueblos PIACI, por la presencia de grupos armados irregulares, por la expansión de la frontera agrícola, por la construcción de infraestructura como vías que puedan atravesar su territorio, por la explotación de sus recursos madereros y minerales, de igual manera, el impacto del cambio climático amenaza su relación con el medio ambiente. En el caso de la consulta previa con los PIACI, el no contacto ya significa que prevalezca este derecho al territorio y a su medio ambiente (Corte Interamericana de Derechos Humanos - OEA, 2013).</b>
      .col-lg-6
        figure.mb-0
          img(src='@/assets/curso/tema1/img10.png') 

    div.p-0.mb-5(style="position: relative")      
      .row.align-items-center(style="position: relative; z-index:1 ;width:100%")        
        .col-lg-4
          figure.mb-0
            img(src='@/assets/curso/tema1/img11.svg') 
        .col-lg-8
          div.px-5.py-4(style="background-color: white")
            p.mb-0 Existen problemas graves de contaminación ambiental, como contaminación con mercurio debido a la minería ilegal, así como la tala indiscriminada de bosques por grupos ilegales. El derecho a su territorio debe implicar también la vigilancia del Estado, para lograr que se respete el no contacto. No invadir su territorio y el no daño al medio ambiente, sea este directo o indirecto. En las zonas colindantes a estas áreas deben establecerse medidas específicas de protección, con el fin de evitar contactos accidentales (Oficina del Alto Comisionado de Derechos Humanos Naciones Unidas-ACNUDH, 2012).
      div(style="position: absolute; z-index:0 ; top: 10%; background-color: #EAAD9B; width: 100%; height: 80%")
        
    p.mb-5 Con respecto a los territorios de los PIACI, la CIDH establece que se debe realizar la delimitación y titulación de estas tierras, establecer límites con las zonas de amortiguamiento, con la prohibición de realizar actividades que pongan en riesgo o afecten negativamente los territorios de los pueblos PIACI y, tomar medidas para evitar el contacto con estos pueblos por parte de las culturas mayoritarias, salvo en situaciones de excepción que estarán debidamente reguladas por el organismo técnico especializado, en los casos de pueblos indígenas en contacto inicial, estos pueblos son los que deben determinar qué personas pueden entrar en sus tierras o territorios (Oficina del Alto Comisionado de Derechos Humanos Naciones Unidas-ACNUDH, 2012).

    .bloque1.bloque-texto-b.color-acento-contenido.p-4
      .bloque-texto-b__texto
        p.mb-0 El establecimiento de mecanismos efectivos para garantizar las prohibiciones anteriormente deben incluir la tipificación penal del delito de contacto forzado con pueblos indígenas en aislamiento, mecanismos que instauren también sistemas efectivos de monitoreo que no puedan forzar contactos, y en los que se impliquen activamente los pueblos indígenas que vivan en la zona colindante (Oficina del Alto Comisionado de Derechos Humanos Naciones Unidas-ACNUDH, 2012).
        
    Separador

    #t_1_2.titulo-segundo.color-secundario
      h2 1.2 Patrones culturales

    .row.align-items-center.mb-5
      .col-lg-5
        figure.mb-0
          img(src='@/assets/curso/tema1/img12.svg') 
      .col-lg-7
        p.mb-0 Conforme a investigaciones de varios centros especializados (Grupo Internacional de Trabajo sobre Asuntos Indígenas – IGWIA), los PIACI se encuentran en pequeñas comunidades indígenas que rehúyen todo contacto con la sociedad moderna y que prefieren vivir en aislamiento, dedicadas a su economía tradicional de subsistencia, contrariamente a la imagen difundida por algunos medios, estos grupos no son los pobladores primogénitos “aún no contactados por la civilización,” sino poblaciones que huyen desde hace generaciones de contactos que para ellos han sido extremadamente violentos y mortíferos, y que les ha llevado a refugiarse en las selvas. Para muchos de estos pueblos el aislamiento no ha sido una opción voluntaria, sino una estrategia de supervivencia (OACNUDH - IWGIA, 2007).
            
    .row.align-items-center.justify-content-end.m-0.mb-5(style="background-color: #FEF2DF")                
        .col-lg-7.p-4
          p.mb-0 <b>La denominación de PIACI reúne una gran diversidad de pueblos</b> indígenas que han tomado la decisión de permanecer en aislamiento en su territorio y evitando el contacto con otras culturas, el respeto a no <b>contacto es el principio</b> fundamental y el estudio de su forma de vida solo puede realizarse de manera indirecta. Estas culturas recogen un saber y unas tradiciones totalmente vinculadas a su territorio, tienen un conocimiento profundo de la vegetación y de su hábitat, lo que les ha permitido vivir en el bosque y garantizar su seguridad alimentaria, así como el mantenimiento de su salud. <br>En varios estudios se ha demostrado que en muchos contactos, las culturas mayoritarias han sido nocivas, la cultura occidental pone en riesgo la sobrevivencia de estos pueblos, por lo que es considerada peligrosa. 
        .col-lg-5.p-0
          figure.mb-0
            img(src='@/assets/curso/tema1/img13.png')         

    p.mb-5 El derecho a la protección de su identidad y a su cultura se encuentran protegidos por el marco normativo y de política nacional e internacional, entre otros derechos culturales establecidos se puede mencionar los siguientes:      
          
    .tema1.p-0.mb-5
      .row.justify-content-evenly.mb-5
        .col-lg-5
          .tarjeta-avatar-b.mb-5(style="position:relative; height: 100%")
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema1/img14.svg')    
            .tarjeta.tarjeta--azul.d-flex.align-items-center
              .p-4 El derecho a conservar y reforzar sus propias instituciones culturales.
        .col-lg-5
          .tarjeta-avatar-b.mb-5(style="position:relative; height: 100%")
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema1/img15.svg')    
            .tarjeta.tarjeta--azul.d-flex.align-items-center
              .p-4 El derecho a practicar, revitalizar y transmitir sus costumbres y tradiciones culturales.

      .row.justify-content-evenly.mb-5
        .col-lg-5
          .tarjeta-avatar-b.mb-5(style="position:relative; height: 100%")
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema1/img16.svg')    
            .tarjeta.tarjeta--azul.d-flex.align-items-center
              .p-4 El derecho a establecer y controlar sus sistemas e instituciones docentes que impartan educación en sus propios idiomas.
        .col-lg-5
          .tarjeta-avatar-b.mb-5(style="position:relative; height: 100%")
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema1/img17.svg')    
            .tarjeta.tarjeta--azul.d-flex.align-items-center
              .p-4 El derecho a promover, desarrollar y mantener sus estructuras institucionales, costumbres, espiritualidad, tradiciones y sistemas jurídicos.

      .row.justify-content-evenly
        .col-lg-5
          .tarjeta-avatar-b.mb-5(style="position:relative; height: 100%")
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema1/img18.svg')    
            .tarjeta.tarjeta--azul.d-flex.align-items-center
              .p-4 El derecho a mantener, controlar y desarrollar su patrimonio cultural y sus conocimientos tradicionales.
        .col-lg-5
          .tarjeta-avatar-b.mb-5(style="position:relative; height: 100%")
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema1/img19.svg')    
            .tarjeta.tarjeta--azul.d-flex.align-items-center
              .p-4 El derecho a no ser sometidos a la asimilación forzada o la destrucción de su cultura.
      
    p.mb-5 Los Estados también tienen la obligación de tomar medidas para la prevención y el resarcimiento de todo acto que tenga por objeto o consecuencia privar a los pueblos indígenas de su integridad como pueblos distintos o de sus valores culturales o de su identidad étnica, y de toda forma de asimilación o integración forzada.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tema-1.cajon.color-secundario.p-4.mb-4
          h4.mb-0 El cuidado de la cultura de los pueblos PIACI tiene particular atención y reclama de los Estados mayor cuidado en la evitabilidad del contacto no permitido, dado que estos pueblos al no conocer los códigos, ni conocer lenguaje, ni haber tenido contacto frecuente con la cultura occidental tienen mayor vulnerabilidad y riesgo de daño por otras culturas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.mb-0 Para darle apertura a este tema fundamental que integrará a su vez los temas siguientes en el componente, se invita a consultar los siguientes videos que hacen parte de un diálogo sobre pueblos en contacto inicial y planes de contingencia, y en los cuales se identificará los marcos jurisprudenciales y legales que regulan la protección de derechos de los pueblos indígenas en aislamiento y contacto inicial en Sur América y Colombia, así mismo, reconocer el estado de formulación de  políticas o marcos normativos en la Panamazonía y en Colombia, adicional, reconocer la noción de atención diferenciada y primaria en salud para pueblos indígenas en contacto inicial.
      .col-lg-6
        img(src='@/assets/curso/tema1/img20.png') 

    .row.justify-content-center.align-items-center(style="background-color: #F2F1EA")
      .col-lg-7.py-5
        img(src='@/assets/curso/tema1/img21.png') 
      .col-lg-4.py-5
        a.anexo.mb-3(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 <b>Sesión 2 Pueblos en Contacto Inicial y Planes de Contingencia</b>
        
        a.anexo.mb-3(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 <b>Sesión 3 Pueblos en Contacto Inicial y Planes de Contingencia</b>

        a.anexo.mb-3(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 <b>Sesión 4 Pueblos en Contacto Inicial y Planes de Contingencia</b>

        a.anexo.mb-3(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 <b>Sesión 5 Pueblos en Contacto Inicial y Planes de Contingencia</b>

        a.anexo.mb-3(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 <b>Sesión 6 Pueblos en Contacto Inicial y Planes de Contingencia</b>        

        a.anexo.mb-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 <b>Sesión 7 Pueblos en Contacto Inicial y Planes de Contingencia</b>
      .col-lg-1

    Separador
</template>

<script>
import TabsA2 from '../components/TabsA2'
export default {
  name: 'Tema1',
  components: {
    TabsA2,
  },
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
