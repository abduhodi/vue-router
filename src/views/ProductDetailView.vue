<template>
  <div
    class="container d-flex align-items-center justify-content-center m-5 main-container"
  >
    <div class="row d-flex cards-wrapper h-100">
      <div class="side-images px-0" style="width: 90px">
        <div class="d-flex flex-column gap-2 w-100">
          <img
            style="width: 100%; height: 100%; border-radius: 3px"
            v-for="(image, ind) in product.url"
            :key="ind"
            :src="image"
            :alt="ind"
            @click="changeImage(ind)"
          />
        </div>
      </div>
      <div class="h-100 px-0 main-image" style="width: 420px">
        <img
          :src="product.url[imageId] || product.url[0]"
          alt="img"
          style="
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 3px;
          "
        />
      </div>
      <div class="col ms-md-5 W-100 position-relative image-body">
        <div class="reaction position-absolute" @click="likeIt">
          <icon :name="heart"></icon> Istaklarga
        </div>
        <div class="row">
          <span class="card-rate">
            <icon name="star"></icon>
            <span>{{ product.rate?.value }}</span>
            <span>( {{ product.rate?.count }} baho )</span>
          </span>
        </div>
        <div class="row">
          <p class="card-title">
            {{ product.title }}
          </p>
        </div>
        <div class="row mt-3">
          <h6 class="ps-0">Narx:</h6>
          <span
            class="card-price d-flex flex-row-reverse justify-content-end gap-5 align-items-center ps-0"
          >
            <span class="price-old">21 000 so'm</span>
            <span class="price-new">{{ product.price }} so'm</span>
          </span>
        </div>
        <div
          class="row d-flex align-items-center gap-3 fs-6 bg-light p-3 mt-5"
          style="border-radius: 5px"
        >
          <span class="card-sale">Oyiga 1 680 so'mdan</span> muddatli to'lov
        </div>
        <div class="row">
          <div class="col-12 px-0 d-flex gap-3 footer-btn">
            <button class="col btn btn-primary py-3 mt-5">
              Savatga qo'shish
            </button>
            <button class="col btn btn-light py-3 mt-5">Xarid qilish</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const id = useRoute()?.params?.id;
const imageId = ref(null);
const products = ref([
  {
    id: 1,
    url: [
      "https://images.uzum.uz/ck019sjk9fq749206ck0/original.jpg",
      "https://images.uzum.uz/cju91m3k9fq13g45niog/original.jpg",
      "https://images.uzum.uz/cju91m3k9fq13g45ning/original.jpg",
      "https://images.uzum.uz/cju91m4vutvfmkmjic00/original.jpg",
      "https://images.uzum.uz/cju91m3k9fq13g45nio0/original.jpg",
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
      "https://images.uzum.uz/ck4i8i4vutvccfo2mu70/original.jpg",
      "https://images.uzum.uz/cj7p3c4vutv1p29kbp0g/original.jpg",
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
      "https://images.uzum.uz/cjnsmmbk9fqe82mvnbfg/original.jpg",
      "https://images.uzum.uz/cjnsmmcvutv7lqbs4ue0/original.jpg",
      "https://images.uzum.uz/cjnsmmcvutv7lqbs4udg/original.jpg",
      "https://images.uzum.uz/cjnsmmcvutv7lqbs4ud0/original.jpg",
      "https://images.uzum.uz/cjnsmmcjvf2q0hiqd2ng/original.jpg",
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
      "https://images.uzum.uz/ci99ejl6sfhndlboob0g/original.jpg",
      "https://images.uzum.uz/ci99ejlenntd8rfbv52g/original.jpg",
      "https://images.uzum.uz/ci99ejl6sfhndlboob00/original.jpg",
      "https://images.uzum.uz/ci99ejl40v9pplt4b0tg/original.jpg",
      "https://images.uzum.uz/ci99ejl40v9pplt4b0t0/original.jpg",
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
      "https://images.uzum.uz/ck014usjvf2qegt3btfg/original.jpg",
      "https://images.uzum.uz/cencn68l08k0o9qh31f0/original.jpg",
      "https://images.uzum.uz/cencn68v1htd23ak568g/original.jpg",
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
      "https://images.uzum.uz/cht11erltlh4bk4kqq10/original.jpg",
      "https://images.uzum.uz/cht11et40v9pplt304t0/original.jpg",
      "https://images.uzum.uz/cht11erltlh4bk4kqq1g/original.jpg",
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
      "https://images.uzum.uz/cit7frn5d7kom1tkcf6g/original.jpg",
      "https://images.uzum.uz/cit7fsf5d7kom1tkcf70/original.jpg",
      "https://images.uzum.uz/cit7ft5enntd8rfe23c0/original.jpg",
      "https://images.uzum.uz/cit7ftlenntd8rfe23cg/original.jpg",
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
      "https://images.uzum.uz/cj5k8gt6sfhndlbrl8p0/original.jpg",
      "https://images.uzum.uz/cj5k8gt6sfhndlbrl8pg/original.jpg",
      "https://images.uzum.uz/cj5k8h36edfostikasa0/original.jpg",
      "https://images.uzum.uz/ci6kv9denntd8rfbm050/original.jpg",
    ],
    title: "Sichqoncha simsiz K-Snake BM110 RGB, yorug'lik effektli",
    price: "76 000",
    rate: {
      value: 4.9,
      count: 39,
    },
  },
]);
const product = products.value.filter((item) => item.id == id)[0];
const changeImage = (index) => {
  imageId.value = index;
};
const liked = ref(false);
const heart = ref("heart_regular");

const likeIt = () => {
  liked.value = !liked.value;
  if (liked.value) {
    heart.value = "heart_full";
  } else {
    heart.value = "heart_regular";
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.main-container {
  height: 500px;
}
.side-images {
  height: 100%;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 0px;
}
.cards-wrapper {
  gap: 7px;
}
.card-img {
  border-radius: 8px;
  overflow: hidden;
  .card-img-top {
    transition: all 0.2s linear;
  }
}
.reaction {
  right: 10px;
  top: 5px;
  z-index: 10;
  cursor: pointer;
  user-select: none;
}
.card-body {
  padding: 0px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-title {
  padding: 0;
  margin: 0;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 400;
}

.card-rate {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  padding-left: 0;
  word-spacing: 2px;
}
.card-sale {
  background-color: yellow;
  width: fit-content;
  border-radius: 5px;
  padding: 3px 5px;
  font-size: 16px;
}
.price-old {
  font-size: 16px;
  text-decoration: line-through;
}
.price-new {
  font-size: 20px;
  font-weight: 500;
}
.add-to-cart {
  width: 40px;
  height: 40px;
  border: 1px solid #7777808f;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    background-color: #8383832a;
  }
}
.add-cart {
  height: 28px;
}

@media (max-width: 639px) {
  .cards-wrapper {
    flex-wrap: wrap;
  }
  .side-images {
    width: 20%;
  }
  .main-image {
    width: 300px !important;
  }
  .cards-wrapper {
    height: 300px !important;
  }
  .card-title {
    font-size: 20px !important;
  }
}
@media (max-width: 425px) {
  .side-images {
    display: none;
  }
  .container {
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .footer-btn {
    width: 100% !important;
    flex-wrap: wrap !important;
  }
  .cards-wrapper {
    width: 100% !important;
  }
  .image-body {
    padding: 0 !important;
  }
}
</style>
