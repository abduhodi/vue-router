<template>
  <div class="container-fluid px-5 mt-5">
    <div class="row d-flex gap-1 flex-wrap" style="margin-top: 300px">
      <router-link
        class="custom-card mb-4"
        v-for="(car, index) in products"
        :key="index"
        :to="{ path: `/products/${car.id}` }"
      >
        <Cart :data="car" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Cart from "@/components/layouts/Cart.vue";
const products = ref([
  {
    id: 1,
    url: [
      "https://images.uzum.uz/ck019sjk9fq749206ck0/t_product_540_high.jpg#1695134799000",
      "https://images.uzum.uz/cju91m3k9fq13g45niog/t_product_240_high.jpg",
      "https://images.uzum.uz/cju91m3k9fq13g45ning/t_product_240_high.jpg",
      "https://images.uzum.uz/cju91m4vutvfmkmjic00/t_product_240_high.jpg",
      "https://images.uzum.uz/cju91m3k9fq13g45nio0/t_product_240_high.jpg",
    ],
    title: "Erkaklar uchun krossovkalar adidas Lite  Racer",
    price: "559 600",
    rate: {
      value: 5,
      count: 2,
    },
  },
  {
    id: 2,
    url: [
      "https://images.uzum.uz/ck4i8i4vutvccfo2mu70/t_product_540_high.jpg#1695134799002",
      "https://images.uzum.uz/cj7p3c4vutv1p29kbp0g/t_product_240_high.jpg",
    ],
    title: "Smartfon Vivo Y02A, 3/32 GB, 5000mAh",
    price: "1 199 000",
    rate: {
      value: 5,
      count: 5,
    },
  },
  {
    id: 3,
    url: [
      "https://images.uzum.uz/cjnsmmbk9fqe82mvnbfg/t_product_540_high.jpg#1695134953935",
      "https://images.uzum.uz/cjnsmmcvutv7lqbs4ue0/t_product_240_high.jpg",
      "https://images.uzum.uz/cjnsmmcvutv7lqbs4udg/t_product_240_high.jpg",
      "https://images.uzum.uz/cjnsmmcvutv7lqbs4ud0/t_product_240_high.jpg",
      "https://images.uzum.uz/cjnsmmcjvf2q0hiqd2ng/t_product_240_high.jpg",
    ],
    title: "Televizor Velto Led 32-4000 Smart",
    price: "1 399 000",
    rate: {
      value: 4.5,
      count: 41,
    },
  },
  {
    id: 4,
    url: [
      "https://images.uzum.uz/ci99ejl6sfhndlboob0g/t_product_540_high.jpg#1695134953962",
      "https://images.uzum.uz/ci99ejlenntd8rfbv52g/t_product_240_high.jpg",
      "https://images.uzum.uz/ci99ejl6sfhndlboob00/t_product_240_high.jpg",
      "https://images.uzum.uz/ci99ejl40v9pplt4b0tg/t_product_240_high.jpg",
      "https://images.uzum.uz/ci99ejl40v9pplt4b0t0/t_product_240_high.jpg",
    ],
    title: "Erkaklar uchun krossovkalar Biostep",
    price: "139 000",
    rate: {
      value: 4.8,
      count: 6,
    },
  },
  {
    id: 5,
    url: [
      "https://images.uzum.uz/ck014usjvf2qegt3btfg/t_product_540_high.jpg#1695134954222",
      "https://images.uzum.uz/cencn68l08k0o9qh31f0/t_product_240_high.jpg",
      "https://images.uzum.uz/cencn68v1htd23ak568g/t_product_240_high.jpg",
    ],
    title: "Kungaboqar yog'i Щедрое лето, tozalangan, 900 ml",
    price: "14 000",
    rate: {
      value: 5,
      count: 1909,
    },
  },
  {
    id: 6,
    url: [
      "https://images.uzum.uz/cht11erltlh4bk4kqq10/t_product_240_high.jpg",
      "https://images.uzum.uz/cht11et40v9pplt304t0/t_product_240_high.jpg",
      "https://images.uzum.uz/cht11erltlh4bk4kqq1g/t_product_240_high.jpg",
    ],
    title: "Flesh disk HP USB 3.0",
    price: "36 000",
    rate: {
      value: 4.9,
      count: 18,
    },
  },
  {
    id: 7,
    url: [
      "https://images.uzum.uz/cit7frn5d7kom1tkcf6g/t_product_540_high.jpg#1695136717427",
      "https://images.uzum.uz/cit7fsf5d7kom1tkcf70/original.jpg",
      "https://images.uzum.uz/cit7ft5enntd8rfe23c0/t_product_240_high.jpg",
      "https://images.uzum.uz/cit7ftlenntd8rfe23cg/t_product_240_high.jpg",
    ],
    title: "Simsiz quloqchinlar Nothing Ear 2",
    price: "2 499 000",
    rate: {
      value: 0.0,
      count: 0,
    },
  },
  {
    id: 8,
    url: [
      "https://images.uzum.uz/cj5k8gt6sfhndlbrl8p0/t_product_240_high.jpg",
      "https://images.uzum.uz/cj5k8gt6sfhndlbrl8pg/t_product_240_high.jpg",
      "https://images.uzum.uz/cj5k8h36edfostikasa0/t_product_240_high.jpg",
      "https://images.uzum.uz/ci6kv9denntd8rfbm050/t_product_240_high.jpg",
    ],
    title: "Sichqoncha simsiz K-Snake BM110 RGB, yorug'lik effektli",
    price: "76 000",
    rate: {
      value: 4.9,
      count: 39,
    },
  },
]);
</script>

<style lang="scss" scoped>
.custom-card {
  width: calc((100% - 2rem) / 5);
}
@media (max-width: 1200px) {
  .custom-card {
    width: calc((100% - 2rem) / 4);
  }
}
@media (max-width: 991px) {
  .container,
  .container-fluid {
    padding: 0 !important;
  }
  .row {
    justify-content: center;
  }
  .custom-card {
    width: calc((100% - 2rem) / 3);
  }
}
@media (max-width: 639px) {
  .container,
  .container-fluid {
    padding: 0 !important;
  }
  .row {
    justify-content: center;
  }
  .custom-card {
    width: calc((100% - 2rem) / 2);
  }
}
</style>
