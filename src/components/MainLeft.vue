<template>
  <div class="mian-left">
    <ul class="nav-list">
      <li v-for="(nav,index) in navList" :key="index">
        <button :class="{active:nav.activete}" @click="navClick(index)">{{ nav.label }}</button>
      </li>
    </ul>

    <div class="ipt-box">
      <svg
        class="absolute text-gray-300 pointer-events-none left-2 text-sm"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 32 32"
      >
        <path
          d="M30 28.59L22.45 21A11 11 0 1 0 21 22.45L28.59 30zM5 14a9 9 0 1 1 9 9a9 9 0 0 1-9-9z"
          fill="currentColor"
        />
      </svg>
      <input type="text" placeholder="Filter by name" />
    </div>

    <div class="Multimodal">
      <h3></h3>
      <div class="Multimodal-list">
        <div
          class="Multimodal-list-item"
          v-for="(v, i) in taskList"
          :key="i"
          v-show="v.navindex==navIndex"
        >
          <div class="img-box">
            <img :src="v.imgurl" alt />
          </div>

          <span>{{ v.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navIndex: 0,
      navList: [
        { id: 10, label: "Tasks", activete: true },
        { id: 20, label: "Libraries", activete: false },
        { id: 30, label: "Datasets", activete: false }
      ],

      taskList: [
        {
          id: 10,
          navindex: 0,
          text: "铜排拉弧",
          imgurl: require("../assets/imgs/task1.png")
        },
        {
          id: 10,
          navindex: 0,
          text: "旋变",
          imgurl: require("../assets/imgs/task1.png")
        },
        {
          id: 10,
          navindex: 0,
          text: "车辆寿命预估",
          imgurl: require("../assets/imgs/task.png")
        },
        {
          id: 10,
          navindex: 1,
          text: "PyTorch",
          imgurl: require("../assets/imgs/pytorch.png")
        },
        {
          id: 10,
          navindex: 1,
          text: "TensorFlow",
          imgurl: require("../assets/imgs/tensorflow.png")
        }
      ]
    };
  },
  methods: {
    navClick(index) {
      // console.log(index)
      this.navList.forEach(nav => {
        nav.activete = false;
      });
      this.navList[index].activete = true;
      this.navIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.mian-left {
  padding: 1.4rem 1.25rem;
  width: 26.875rem;
  background-color: #fafbfc;
  //   margin-right: 1.875rem;
  .nav-list {
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: flex;
    flex-wrap: wrap;
    button {
      padding: 0.1875rem 0.3125rem;
      background-color: #fafbfc;
      font-size: 100%;
      margin: 0 0.3125rem 0.3125rem 0;
      cursor: pointer;
      --tw-text-opacity: 1;
      color: rgb(107 114 128 / var(--tw-text-opacity));
      border-radius: 0.5rem;
      white-space: nowrap;

      &.active {
        background-color: #000;
        color: #fff;
      }
    }
  }
  .ipt-box {
    margin-top: 0.625rem;
    position: relative;
    width: 100%;
    height: 1.875rem;
    .absolute {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0.9375rem;
    }
    input {
      padding-left: 2.5rem;
      width: 100%;
      height: 1.875rem;
      border-radius: 1.875rem;
      border: 0.0625rem solid rgb(243 244 246);
    }
  }

  .Multimodal {
    h3 {
      margin: 1.25rem 0;
      text-align: left;
      font-size: 0.875rem;
      font-weight: normal;
      --tw-text-opacity: 1;
      color: rgb(107 114 128 / var(--tw-text-opacity));
    }
    .Multimodal-list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      //   font-size: 0.75rem !important;

      .Multimodal-list-item {
        padding: 0.125rem 0.3125rem 0.125rem 0;
        height: 1.5625rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        border: 0.0625rem solid #ccc;
        border-radius: 0.5rem;
        margin: 0 0.625rem 0.625rem 0;
        &:hover {
          background-color: #f3f3f3;
        }
        .img-box {
          width: 1.475rem;
          height: 100%;
          // margin-right: 0.3125rem;
          border-top-left-radius: 00.625rem;
          border-bottom-left-radius: 00.625rem;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 0.8975rem;
            height: 0.8975rem;
          }
        }
        span {
          font-size: 0.4rem;
          padding-right: 0.1rem;
          padding-bottom: 0.1rem;
        }
      }
    }
  }
}
</style>