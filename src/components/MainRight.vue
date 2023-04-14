<template>
  <div class="mian-right">
    <div class="title">
      <div class="title-left">
        <h3>Models</h3>
        <div class="num">{{modelCnt}}</div>
        <div class="ipt-box">
          <input type="text" placeholder="Filter by name" v-model="inputVal" />
          <!-- <img src="../assets/imgs/task1.png" alt="" /> -->
          <svg
            class="absolute left-2 top-1.5 text-gray-300 w-4"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              class="uim-quaternary"
              d="M20.23 7.24L12 12L3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z"
              opacity=".25"
              fill="currentColor"
            />
            <path
              class="uim-tertiary"
              d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z"
              opacity=".5"
              fill="currentColor"
            />
            <path
              class="uim-primary"
              d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

    </div>

    <el-row :gutter="30">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12" v-for="(v, i) in modelsshow" :key="i">
        <!-- <a :href="v.url==''?'#':v.url" :target="v.url==''?'_self':'_blank'"> -->
        <router-link :to="{ name: 'Detail', query: { id: v.id }}">
          <div class="grid-content">
            <div class="name">
              <h5>{{ v.name }}</h5>
            </div>

            <div class="info">
              <svg
                class
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                fill="currentColor"
                focusable="false"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 18 19"
                v-show="v.isonline"
              >
                <path
                  d="M12.3625 13.85H10.1875V12.7625H12.3625V10.5875H13.45V12.7625C13.4497 13.0508 13.335 13.3272 13.1312 13.5311C12.9273 13.735 12.6508 13.8497 12.3625 13.85V13.85Z"
                />
                <path
                  d="M5.8375 8.41246H4.75V6.23746C4.75029 5.94913 4.86496 5.67269 5.06884 5.4688C5.27272 5.26492 5.54917 5.15025 5.8375 5.14996H8.0125V6.23746H5.8375V8.41246Z"
                />
                <path
                  d="M15.625 5.14998H13.45V2.97498C13.4497 2.68665 13.335 2.4102 13.1312 2.20632C12.9273 2.00244 12.6508 1.88777 12.3625 1.88748H2.575C2.28666 1.88777 2.01022 2.00244 1.80633 2.20632C1.60245 2.4102 1.48778 2.68665 1.4875 2.97498V12.7625C1.48778 13.0508 1.60245 13.3273 1.80633 13.5311C2.01022 13.735 2.28666 13.8497 2.575 13.85H4.75V16.025C4.75028 16.3133 4.86495 16.5898 5.06883 16.7936C5.27272 16.9975 5.54916 17.1122 5.8375 17.1125H15.625C15.9133 17.1122 16.1898 16.9975 16.3937 16.7936C16.5975 16.5898 16.7122 16.3133 16.7125 16.025V6.23748C16.7122 5.94915 16.5975 5.6727 16.3937 5.46882C16.1898 5.26494 15.9133 5.15027 15.625 5.14998V5.14998ZM15.625 16.025H5.8375V13.85H8.0125V12.7625H5.8375V10.5875H4.75V12.7625H2.575V2.97498H12.3625V5.14998H10.1875V6.23748H12.3625V8.41248H13.45V6.23748H15.625V16.025Z"
                />
              </svg>
              <svg
                v-show="!v.isonline"
                class="flex-none w-3 text-gray-400 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 12 12"
              >
                <path
                  d="M6 9.75828C4.86056 9.75828 3.81948 9.45144 2.87678 8.83776C1.93407 8.22373 1.22089 7.39474 0.737243 6.35077C0.712651 6.30901 0.696256 6.25673 0.688059 6.19393C0.679861 6.13146 0.675763 6.06681 0.675763 6C0.675763 5.93319 0.679861 5.86838 0.688059 5.80557C0.696256 5.7431 0.712651 5.69098 0.737243 5.64923C1.22089 4.60526 1.93407 3.77643 2.87678 3.16274C3.81948 2.54872 4.86056 2.24171 6 2.24171C7.13944 2.24171 8.18052 2.54872 9.12323 3.16274C10.0659 3.77643 10.7791 4.60526 11.2628 5.64923C11.2873 5.69098 11.3037 5.7431 11.3119 5.80557C11.3201 5.86838 11.3242 5.93319 11.3242 6C11.3242 6.06681 11.3201 6.13146 11.3119 6.19393C11.3037 6.25673 11.2873 6.30901 11.2628 6.35077C10.7791 7.39474 10.0659 8.22373 9.12323 8.83776C8.18052 9.45144 7.13944 9.75828 6 9.75828ZM6 8.75608C6.92631 8.75608 7.77688 8.50753 8.5517 8.01043C9.32619 7.51367 9.91838 6.84353 10.3282 6C9.91838 5.15647 9.32619 4.48616 8.5517 3.98907C7.77688 3.4923 6.92631 3.24392 6 3.24392C5.07369 3.24392 4.22312 3.4923 3.4483 3.98907C2.67381 4.48616 2.08162 5.15647 1.67175 6C2.08162 6.84353 2.67381 7.51367 3.4483 8.01043C4.22312 8.50753 5.07369 8.75608 6 8.75608Z"
                  fill="currentColor"
                />
                <path
                  d="M7.80933 5.92992C7.80933 6.51092 7.53544 7.02796 7.10973 7.35894C6.80337 7.59714 6.41838 6.98403 6.00027 6.98403C5.58215 6.98403 5.19716 7.59714 4.8908 7.35894C4.46509 7.02796 4.1912 6.51092 4.1912 5.92992C4.1912 4.9308 5.00115 4.12086 6.00027 4.12086C6.99939 4.12086 7.80933 4.9308 7.80933 5.92992Z"
                  fill="currentColor"
                />
              </svg>
              <span>{{v.isonline?'Online':'Preview'}}</span>
              <span>{{ v.developer }}</span>
            </div>
          </div>
        </router-link>
        <!-- </a> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$bus.$on("filtermodel", this.filtermodel);
  },
  created() {
    var url = "/getallmodels";
    this.axios
      .get(url)
      .then(res => {
        // console.log(res);
        var modeldata = res.data;
        this.modelsArr = this.modelsArr.concat(modeldata);
        this.modelsArr.sort(t => t.id);
        this.modelsshow = this.modelsArr;
      })
      .catch(error => console.log(error));
  },

  data() {
    return {
      inputVal: "",
      timeout: null,
      modelsArr: [],
      modelsshow: []
    };
  },
  watch: {
    inputVal(curVal, oldVal) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.filtermodelbyname(curVal);
      }, 1000);
    }
  },
  computed: {
    modelCnt() {
      return this.modelsshow.length;
    }
  },
  methods: {
    filtermodel(name) {
      // console.log(name);
      if (name == "") {
        this.modelsshow = this.modelsArr;
      } else {
        this.modelsshow = this.modelsArr.filter(item => item.belong == name);
      }
    },

    filtermodelbyname(name) {
      console.log(name);
      if (name == "") {
        this.modelsshow = this.modelsArr;
      } else {
        this.modelsshow = this.modelsArr.filter(item =>
          item.name.toUpperCase().includes(name.toUpperCase())
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mian-right {
  padding: 0.9rem 1.25rem 25rem;
  width: 70%;

  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title-left {
      display: flex;
      align-items: center;
      h3 {
        font-weight: normal;
      }
      .num {
        margin: 0 0.9375rem;
        --tw-text-opacity: 1;
        color: rgb(156 163 175 / var(--tw-text-opacity));
      }
      .ipt-box {
        position: relative;
        height: 1.875rem;
        width: 20rem;
        input {
          height: 1.875rem;
          border-radius: 0.9375rem;
          border: 0.0625rem solid #ccc;
          padding-left: 2rem;
          width: 20rem;
        }
        img {
          left: 0.9375rem;
          position: absolute;
          width: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
        }
        svg {
          left: 0.4375rem;
          position: absolute;
          width: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          --tw-text-opacity: 1;
          color: rgb(209 213 219 / var(--tw-text-opacity));
        }
      }
    }
  }

  a {
    color: inherit;
  }

  .grid-content {
    background: #fefefe;
    border-radius: 0.4rem;
    min-height: 36px;
    margin-top: 1rem;

    border: 0 solid #e5e7eb;
    box-sizing: border-box;
    border-color: rgb(243 244 246 / var(--tw-border-opacity));
    border-width: 1px;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --tw-border-opacity: 1;
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    --tw-gradient-from: #f9fafb;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: #fff;
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
    border-color: rgb(243 244 246 / var(--tw-border-opacity));
    cursor: pointer;
    &:hover .name h5 {
      color: #4f51e6;
    }
    &:hover {
      background: #f5f6f8;
    }
    .name {
      display: flex;
      align-items: center;
      margin-bottom: 0.3125rem;
      h5 {
        font-family: IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco,
          Consolas, Liberation Mono, Courier New, monospace;
        --tw-text-opacity: 1;
        font-size: 1rem;
        margin-top: 0.625rem;
        margin-left: 0.625rem;
        font-weight: normal;
      }
    }
    .info {
      display: flex;
      align-items: baseline;
      margin-left: 0.625rem;
      margin-top: 0.225rem;
      margin-bottom: 0.525rem;
      --tw-text-opacity: 1;
      color: rgb(156 163 175 / var(--tw-text-opacity));
      font-size: 0.875rem;
      // svg {
      //   padding-top: 0.07rem;
      // }
      span {
        &::before {
          content: "";
          display: inline-block;
          width: 0.1875rem;
          height: 0.1875rem;
          border-radius: 50%;
          background-color: #ccc;
          margin: 0 0.3125rem;
          margin-bottom: 0.1875rem;
        }
      }
    }
  }
}
</style>