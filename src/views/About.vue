<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ImageHandler/>
  </div>
</template>

<script>
import ImageHandler from '@/components/ImageHandler.vue';

export default {
  name: 'About',
  components: {
    ImageHandler,
  },
};
</script>
