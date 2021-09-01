<template lang="pug">
#Legend.relative.h-100(style="pointer-events:none")
    .bg-white.b--gray.ba.shadow-3.br2.pa2.ma2-ns.bottom.absolute.bottom-0.bottom-2-ns(style="background:#333; color:#ddd; z-index:98")
        //- h3 Legend
        .item
          .pill(style="background: #c70579")
          | 5 (unsafe)
        .item
          .pill(style="background: #e24aab")
          | 4
        .item
          .pill(style="background: #dd6fba")
          | 3
        .item
          .pill(style="background: #d894ca")
          | 2
        .item
          .pill(style="background: #d4b9da")
          | 1
        .item
          .pill(style="background: white")
          | N/A
        .item
          .pill(style="background: #66bd47")
          | 0 (safe)

</template>

<script>
export default {
    name: 'Legend',
    data: () => ({}),
    created() {
        window.Legend = this;
    },
};
</script>

<style scoped>
.pill {
    width: 15px;
    height: 15px;
    border-radius: 100px;
    display: inline-block;
    margin-right: 5px;
    border: 1.5px solid hsla(0, 0%, 10%, 1);
}
</style>
