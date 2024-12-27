<template>
  <div class="folder">
    <div class="folder__head">
      <div class="folder__title">
        <div class="folder__title">
          Дегригаторы <TheSvg :type="'pencil'" />
        </div>
      </div>
    </div>
    <div class="folder__body">
      <div class="folder__open">
        <v-btn variant="text"><TheSvg :type="'folderOpen'" />...</v-btn>
      </div>
      <div class="folder__list">
        <v-btn 
          variant="text"
          class="folder__item folder-item"
          v-for="(item, i) in folder"
          :key="i"
        >
          <div class="folder-item__ico"><TheSvg :type="'folder'" /></div>
          <div class="folder-item__name">{{ item }}</div>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      folder: ['Папка 1','Папка 2','Папка 3','Папка 4',],
    }
  }
}
</script>

<style lang="scss">
  .folder {
    &__title {
      display: flex;
      align-items: center;
      font-weight: 500;
      svg {
        max-width: 1em;
        margin-left: 0.3em;
      }
    }
    &__body {
      margin: 10px 0;
    }
    &__list {
      margin: 5px 0;
    }
  }
  .folder-item {
    display: flex;
    flex-direction: column;
    margin-left: 0.5em;
    &__ico {
      margin-right: 0.3em;
    }
  }
</style>