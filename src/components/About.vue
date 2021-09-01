<template lang="pug">
#About
    .map-overlay#features.ph2
        img(src="Final-YG_LOGO_horizontal_black.png" style="width:191px;height:41px;margin:10px;")
        h3 Stress Map Visualisation
        p The coloured markers on the map indicate the level of stress (1-5 scale) experienced by participants as part of their YourGround Safe or Unsafe Spot submission.
        p.i
            <a href="https://yourground.org" target="blank">YourGround</a> is a collaboration between CrowdSpot and Monash University's XYX Lab to crowdsource women and gender-diverse people safety related experiences of public and recreational space.
        p.i.tc.mt4 Your Sport. Your Leisure. Your Play. Your Place.
        .center.w4
            a.dib.tc.center.a.f6.link.dim.ba.ph4.pv3.mb2.dark-blue.prevent.only-mobile(@click="$emit('close')") See map
                //- a(href="#")
        img.center(src="CrowdSpot_Monash_XYX_logo_archive_map_3.svg" style="")

</template>

<script>
export default {
    name: 'About',
    data: () => ({}),
    created() {
        window.About = this;
    },
};
</script>

<style scoped>
</style>
