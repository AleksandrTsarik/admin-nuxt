<template>
  <div class="product">
    <div class="product__list">
      <NuxtLink 
        class="product__item product-item"
        v-for="(item, i) in itemProduct"
        :key="i"
        :to="item.url"
      >
        <div class="product-item__img">
          <!-- <v-img
            cover
            :src="item.img"
          ></v-img> -->
          <v-parallax :src="item.img"></v-parallax>
        </div>
        <div class="product-item__info">
          <div class="product-item__name">{{ item.name }}</div>
          <div class="product-item__price">
            <div class="product-item__price--old">{{ item.oldPrice }}</div>
            <div class="product-item__price--new">{{ item.newPrice }}</div>
            <div class="product-item__money">рублей</div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemProduct: [],
    }
  },
  async mounted() {
    const itemProductNew = [];
    itemProductNew.push(
      {
        id: 0,
        img: (await import("@/assets/img/product.jpeg")).default,
        name: 'DEVA FLORUM / Дегригатор для ...',
        oldPrice: 189,
        newPrice: 245,
        url: '#'
      },
      {
        id: 0,
        img: (await import("@/assets/img/product.jpeg")).default,
        name: 'DEVA FLORUM / Дегригатор для ...',
        oldPrice: 189,
        newPrice: 245,
        url: '#'
      },
      {
        id: 0,
        img: (await import("@/assets/img/product.jpeg")).default,
        name: 'DEVA FLORUM / Дегригатор для ...',
        oldPrice: 189,
        newPrice: 245,
        url: '#'
      },
      {
        id: 0,
        img: (await import("@/assets/img/product.jpeg")).default,
        name: 'DEVA FLORUM / Дегригатор для ...',
        oldPrice: 189,
        newPrice: 245,
        url: '#'
      },
      {
        id: 0,
        img: (await import("@/assets/img/product.jpeg")).default,
        name: 'DEVA FLORUM / Дегригатор для ...',
        oldPrice: 189,
        newPrice: 245,
        url: '#'
      },
      {
        id: 0,
        img: (await import("@/assets/img/product.jpeg")).default,
        name: 'DEVA FLORUM / Дегригатор для ...',
        oldPrice: 189,
        newPrice: 245,
        url: '#'
      },
      {
        id: 0,
        img: (await import("@/assets/img/product.jpeg")).default,
        name: 'DEVA FLORUM / Дегригатор для ...',
        oldPrice: 189,
        newPrice: 245,
        url: '#'
      },
      {
        id: 0,
        img: (await import("@/assets/img/product.jpeg")).default,
        name: 'DEVA FLORUM / Дегригатор для ...',
        oldPrice: 189,
        newPrice: 245,
        url: '#'
      },
      {
        id: 0,
        img: (await import("@/assets/img/product.jpeg")).default,
        name: 'DEVA FLORUM / Дегригатор для ...',
        oldPrice: 189,
        newPrice: 245,
        url: '#'
      },
      {
        id: 0,
        img: (await import("@/assets/img/product.jpeg")).default,
        name: 'DEVA FLORUM / Дегригатор для ...',
        oldPrice: 189,
        newPrice: 245,
        url: '#'
      }
    );
    this.itemProduct = itemProductNew;
  }
}
</script>

<style lang="scss">
  .product {
    &__list {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 25px;
      max-width: 80%;
      margin: 0 0 40px;
      @media(max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
        max-width: 100%;
      }
      @media(max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media(max-width: 575px) {
        grid-template-columns: 1fr;
      }
    }
    &__item {}
  }
  .product-item {
    padding: 20px;
    border-radius: 10px;
    transition: 0.3s;
    @media (max-width: 1023px) {
      padding: 0;
    }
    &:hover {
      @media (min-width: 1023px) {
        box-shadow: 0 0 5px rgba(#000, 0.5);
      }
    }
    &__img {
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__info {}
    &__name {
      font-size: 20px;
      font-weight: 400;
      color: var(--text);
      line-height: 120%;
      margin-bottom: 10px;
    }
    &__price {
      font-size: 20px;
      font-weight: 400;
      display: flex;
      align-items: center;
      color: var(--text);
      &--old {
        text-decoration: line-through;
        font-size: 16px;
      }
      &--new {
        font-size: 16px;
        margin-left: 0.3em;
      }
    }
    &__money {
      margin-left: 0.3em;
    }
  }
</style>