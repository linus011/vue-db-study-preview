<template>
  <div
    v-click-outside="hideSelect"
    class="select"
    :class="{ open: open}"
  >
    <button
      :id="btnID"
      ref="btnSelect"
      type="button"
      class="btn_select"
      :class="{ open: open , off: (value==='')}"
      :title="title"
      :disabled="disabled"
      :aria-expanded="open ? 'true' : 'false'"
      :aria-controls="optionsID"
      @click="showOpt"
      v-on="listeners"
      @focus="isFocus = true"
      @blur="isFocus = false"
    >
      {{ selected }}
    </button>
    <div
      class="items"
      :class="{ to_up: toUpPosition }"
    >
      <div
        :id="optionsID"
        role="listbox"
        :aria-labelledby="btnID"
        :style="{'max-height':itemsMaxHeight}"
      >
        <template
          v-for="(option, i) of options"
        >
          <button
            v-if="option.value != ''"
            :key="i"
            class="item"
            :class="{selected:(option.value===value),disabled:option.disabled}"
            :aria-selected="option.value === value? true: false"
            :title="option.value === value? '선택': null"
            type="button"
            role="option"
            :disabled="option.disabled"
            @click="selectedOpt(option,$event)"
          >
            {{ option.text }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
let uuid = 0
export default {
  name: 'UiSelect',
  props: {
    options: { type: [Array, Object], default: () => [] },
    value: { type: [Object, String, Number], default: null },
    title: { type: String, default: '선택' },
    disabled: { type: Boolean, default: false },
  },
  data() {
    return {
      open: false,
      toUpPosition: false,
      isFocus: false,
      itemsMaxHeight: null,
    }
  },
  computed: {
    listeners() {
      if (this.disabled) {
        return null
      }
      return {
        ...this.$listeners,
      }
    },
    selected() {
      const valObj = this.options.filter((obj) => obj.value === this.value)
      return valObj[0].text
    },
    btnID() {
      return `btnSelect__${this.uuid}`
    },
    optionsID() {
      return `selectOption__${this.uuid}`
    },
  },
  beforeCreate() {
    this.uuid = uuid.toString()
    uuid += 1
  },
  beforeMount() {
    window.addEventListener('scroll', this.hideSelect)
    window.addEventListener('resize', this.hideSelect)
  },
  mounted() {
    // this.$emit('input', this.value)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.hideSelect)
    window.removeEventListener('resize', this.hideSelect)
  },
  methods: {
    showOpt(e) {
      const $sclTop = window.pageYOffset
      const $target = e.target
      // const $targetTop = this.$getOffset($target).top
      const $targetTop = $target.getBoundingClientRect().top + window.pageYOffset
      const $targetHeight = $target.offsetHeight
      const $gap = 30
      const $winH = window.innerHeight
      const $upMargin = $targetTop - $sclTop - $gap
      const $downMargin = $winH + $sclTop - $targetTop - $targetHeight - $gap
      if (this.open) {
        this.open = false
        this.itemsMaxHeight = null
      } else {
        this.open = true
        if ($upMargin > $downMargin) {
          this.toUpPosition = true
          this.itemsMaxHeight = `${$upMargin}px`
        } else {
          this.toUpPosition = false
          this.itemsMaxHeight = `${$downMargin}px`
        }
      }
    },
    selectedOpt(option, event) {
      event.preventDefault()
      this.open = false
      if (this.custom) this.itemsMaxHeight = null
      this.$emit('input', option.value)
      this.$refs.btnSelect.focus()
    },
    updateValue(value) {
      this.$emit('input', value)
    },
    hideSelect() {
      if (this.open) {
        this.open = false
        this.itemsMaxHeight = null
      }
    },
  },
}
</script>
