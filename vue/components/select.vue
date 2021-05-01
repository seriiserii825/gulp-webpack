<template>
  <div class="select" tabindex="-1" @blur="hideVisibleOptions">
    <header class="select__header">
      <h3 class="select__title">
        <span class="select__span">{{ title }}</span>
      </h3>
    </header>
    <div class="select__body">
      <div class="select-selected" @click="toggleIsVisibleOptions">
        {{ value }}
      </div>
      <ul
        class="select-options"
        :class="{ overflow: options.length > 4 }"
        v-if="isVisibleOptions"
      >
        <li
          v-for="(item, index) in options"
          :key="item.title"
          class="select-options__item"
          :class="{ sel: item.active }"
          @click="handleOptionClick(item.title, index)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: Array,
    id: String,
    title: String,
    label: String,
    height: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      isVisibleOptions: false,
      value: ""
    };
  },
  methods: {
    toggleIsVisibleOptions() {
      this.isVisibleOptions = !this.isVisibleOptions;
    },
    hideVisibleOptions() {
      this.isVisibleOptions = false;
    },
    handleOptionClick(value, index) {
      this.options.forEach((item) => {
        item.active = false;
      });
      this.options[index].active = true;
      this.value = value;
      this.$emit("handle-func", value);
      this.isVisibleOptions = false;
    }
  },
  mounted() {
    this.value = this.options[0].title;
  }
};
</script>
<style lang="scss">
.select {
  position: relative;
  background-color: white;
  z-index: 100;

  &__title {
    margin-bottom: 18rem;
    font-size: 20rem;
    font-weight: 500;
  }

  &-selected {
    padding: 0 26rem;
    width: 100%;
    height: 55rem;
    line-height: 55rem;
    background-color: white;
    border: 1px solid #999;
    border-radius: 27.5rem;
    z-index: 2;
  }

  &__body {
    position: relative;
  }

  &-options {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 60rem;
    width: 100%;
    background-color: white;
    border: 1px solid #999;
    border-radius: 27.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    z-index: 1;

    &.overflow {
      height: 20rem;
      overflow-y: scroll;
    }
    &__item {
      padding: 0 26rem;
      height: 55rem;
      line-height: 55rem;
      transition: all 0.4s;
      cursor: pointer;
      &:hover {
        background-color: #eee;
      }
      &.sel {
        color: #fa6100;
        background-color: #f1f1f1;
      }
    }
  }
  &-selected {
    cursor: pointer;
  }
}
</style>
