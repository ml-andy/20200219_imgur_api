<template>
  <div class="imageHandler">
    <input @change="previewFiles" type="file" accept="image/*" />
    <div class="block">
      <img :src="img" alt="">
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { convertFile } from '../helper/imagehander';

export default {
  name: 'ImageHandler',
  data() {
    return {
      img: '',
    };
  },
  mounted() {
    // this.getImageInfo();
  },
  methods: {
    getImageInfo() {
      const myHeaders = new Headers();
      myHeaders.append('Authorization', 'Client-ID 12a93d20b5d6c97');

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
      };
      fetch('https://api.imgur.com/3/image/5bfzbmJ', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));
    },
    previewFiles(event) {
      const imgPs = convertFile(event.target.files[0]);
      imgPs.then((value) => {
        const img = value.replace('data:image/jpeg;base64,', '');
        const myHeaders = new Headers();
        myHeaders.append('Authorization', 'Client-ID 12a93d20b5d6c97');

        const formdata = new FormData();
        formdata.append('image', img);

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
        };

        fetch('https://api.imgur.com/3/image', requestOptions)
          .then((response) => response.json())
          .then((result) => {
            const { data: { link = '' } = {} } = result;
            this.img = link;
          })
          .catch((error) => console.log('error', error));
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
