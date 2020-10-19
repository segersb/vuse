<template>
  <div class="bar">
    <div class="start">
      <i class="menu-toggle material-icons" @click="menu.toggleCollapse">menu</i>
      <div class="title">KC Floriant</div>
    </div>
    <img
        class="logo"
        src="data:image/png;base64,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"
    />
    <div>
      <div class="avatar">BO</div>
    </div>
  </div>

  <div class="main">

    <div class="menu" :class="menu.collapsedClass">
      <div v-for="menuItem in menu.menuItems"
           class="item"
           :class="menuItem.selectedClass"
           @click="menuItem.select"
      >
        <i class="icon material-icons" v-text="menuItem.icon"/>
        <div class="label" v-text="menuItem.label"/>
      </div>
    </div>

    <div class="page" v-if="menu.selectedKey === 'users'">
      Users page
    </div>

    <div class="page" v-if="menu.selectedKey === 'cards'">
      Cards page
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue'
import {vuseMenu} from "@/lib-components";

export default {
  setup () {
    const menu = vuseMenu()
    menu.addMenuItem({
      key: 'users',
      label: 'Users',
      icon: 'group'
    })
    menu.addMenuItem({
      key: 'cards',
      label: 'Cards',
      icon: 'payments'
    })

    return reactive({
      menu
    })
  }
}
</script>

<style scoped lang="scss">
@import "theme.css";

.clickable {
  cursor: pointer;
  user-select: none;
}

#app {
  display: flex;
  flex-direction: column;

  .bar {
    height: 64px;
    background-color: #272727;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    .start {
      display: flex;
      align-items: center;

      .menu-toggle {
        height: 48px;
        width: 48px;
        margin: 8px;
        color: var(--color-primary);
        cursor: pointer;
        user-select: none;
        border-radius: 2px;
        overflow: hidden;
        position: relative;

        &:hover {
          background-color: var(--color-primary-transparent-5);
        }

        &:after {
          content: "";
          background: var(--color-primary-transparent-3);
          display: block;
          position: absolute;
          padding-top: 300%;
          padding-left: 350%;
          opacity: 0;
          transition: all 0.8s;
        }

        &:active:after {
          opacity: 1;
          transition: 0s
        }
      }

      .title {
        color: var(--color-primary);
        font-size: 1.4rem;
      }
    }

    .logo {
      height: 32px;
    }
  }

  .main {
    display: flex;
    flex-grow: 1;

    .menu {
      height: 100%;
      padding-right: 48px;
      padding-left: 16px;
      padding-top: 8px;
      background-color: #212121;
      margin-right: 8px;
      &.collapsed {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 16px;
        padding-left: 16px;
        .item {
          .label {
            max-width: 0;
            padding: 0;
            margin: 0;
          }
        }
      }

      .item {
        @extend .clickable;
        padding: 8px 0;
        display: flex;
        align-items: center;
        :hover {
          cursor: pointer;
        }
        &.selected {
          color: var(--color-primary);
        }

        .label {
          margin-left: 16px;
          transition: all 0.5s;
          overflow: hidden;
        }
      }
    }

    .page {
      flex-grow: 1;
      background-color: #1e1e1e;
      align-self: flex-start;
      padding: 8px;
    }
  }
}
</style>
