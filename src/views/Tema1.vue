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
</template>

<script>
export default {
  name: 'Tema1',
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
