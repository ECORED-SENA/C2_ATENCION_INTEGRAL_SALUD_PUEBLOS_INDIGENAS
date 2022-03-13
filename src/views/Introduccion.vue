<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-secundario
      .titulo-principal__numero        
        span
          i.fas.fa-info
      h1 Introducción

    h3.titulo-tercero ¿Conoces sobre la importancia de los pueblos indígenas en aislamiento y contacto inicial (PIACI)? 
    
    .cajon-intro.py-4.p-3.mb-5
      p.mb-0 En el siguiente recurso podrá conocer las razones de sobrevivencia y las experiencias traumáticas que han tenido los pueblos indígenas.  

    figure.mb-0
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    Separador
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
