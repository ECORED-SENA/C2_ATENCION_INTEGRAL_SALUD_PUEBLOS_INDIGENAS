<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 4
      h1 Orientaciones para la atención diferencial PIACI

    .row.mb-5.align-items-center
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
