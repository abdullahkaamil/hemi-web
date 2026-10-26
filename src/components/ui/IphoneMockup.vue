<script setup lang="ts">
/** CSS ile çizilmiş iPhone çerçevesi; içine uygulama ekran görüntüsü yerleştirilir. */
defineProps<{ src: string; alt: string; width: number; height: number }>()
</script>

<template>
  <div class="iphone">
    <span class="iphone__btn iphone__btn--action" aria-hidden="true" />
    <span class="iphone__btn iphone__btn--vol-up" aria-hidden="true" />
    <span class="iphone__btn iphone__btn--vol-down" aria-hidden="true" />
    <span class="iphone__btn iphone__btn--power" aria-hidden="true" />
    <div class="iphone__screen">
      <img :src="src" :alt="alt" :width="width" :height="height" loading="lazy" decoding="async" />
      <span class="iphone__island" aria-hidden="true" />
    </div>
  </div>
</template>

<style scoped>
/* Tüm ölçüler telefon genişliğine (cqw) bağlı: hangi boyutta gösterilirse gösterilsin oranlar korunur. */
.iphone {
  container-type: inline-size;
  position: relative;
  width: 100%;
}

.iphone__screen {
  position: relative;
  overflow: hidden;
  /* Çerçeve: koyu titanyum kenar + ince parlak iç hat */
  padding: 3.6cqw;
  border-radius: 15cqw;
  background: linear-gradient(145deg, #3a3846 0%, #1d1b26 45%, #2e2c3a 100%);
  box-shadow:
    inset 0 0 0 0.5cqw #4d4a5c,
    inset 0 0 0 1.1cqw #121019,
    0 2px 3px rgb(31 27 77 / 0.18),
    0 30px 60px -20px rgb(31 27 77 / 0.45),
    0 60px 90px -50px rgb(91 35 196 / 0.4);
}

.iphone__screen img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 11.6cqw;
  background: #fff;
}

/* Dynamic Island – ekran görüntüsündeki durum çubuğunun ortasına oturur */
.iphone__island {
  position: absolute;
  top: 6.2cqw;
  left: 50%;
  width: 27cqw;
  height: 7.6cqw;
  border-radius: 99px;
  background: #07060b;
  transform: translateX(-50%);
}

.iphone__btn {
  position: absolute;
  width: 1.4cqw;
  border-radius: 1cqw;
  background: linear-gradient(90deg, #1d1b26, #45425a);
}

.iphone__btn--action,
.iphone__btn--vol-up,
.iphone__btn--vol-down {
  left: -1cqw;
}

.iphone__btn--action {
  top: 22%;
  height: 6%;
}

.iphone__btn--vol-up {
  top: 31%;
  height: 10%;
}

.iphone__btn--vol-down {
  top: 43%;
  height: 10%;
}

.iphone__btn--power {
  top: 32%;
  right: -1cqw;
  height: 15%;
  background: linear-gradient(270deg, #1d1b26, #45425a);
}
</style>
