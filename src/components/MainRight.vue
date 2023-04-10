<template>
  <div class="mian-right">
    <div class="title">
      <div class="title-left">
        <h3>Models</h3>
        <div class="num">{{modelCnt}}</div>
        <div class="ipt-box">
          <input type="text" placeholder="Filter by name" />
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

      <!-- <div class="title-right">
            <div class="left">
              <span>new</span>
              <div>Full-text search</div>
            </div>
            <div class="right">
              <img src="../assets/imgs/task1.png" alt="" />
              <span> Sort: Most Downloads</span>
            </div>
      </div>-->
    </div>

    <el-row :gutter="30" >
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12" v-for="(v, i) in modelsArr" :key="i">
        <div class="grid-content">
          <div class="name">
            <h5>{{ v.title }}</h5>
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

            <span>Updated</span>
            <span>{{ v.Updated }}</span>
            <span>{{ v.author }}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$bus.$on('hello',this.demo)
  },
  data() {
    return {
      modelsArr: [
        {
          title: "bert-base-uncased",
          Updated: "Nov 16, 2022",
          author: "hao.wei"
        },
        {
          title: "jonatasgrosman/wav2vec2-large-xlsr-53-english",
          Updated: "Nov 16, 2022",
          author: "shihaoi.li"
        },
        {
          title: "gpt2",
          Updated: "Nov 16, 2022",
          author: "theone.zhu"
        },
        {
          title: "gpt2",
          Updated: "Nov 16, 2022",
          author: "theone.zhu"
        }
      ]
    };
  },
  computed: {
      modelCnt() {
        return this.modelsArr.length;
      }
    },
    methods:{
      demo(data){
        console.log("right"+data)
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
    .title-right {
      display: flex;
      align-items: center;
      font-size: 0.875rem;
      .left {
        height: 1.875rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 0.0625rem solid #ccc;
        border-radius: 0.9375rem;
        margin-right: 0.9375rem;
        padding: 0 0.625rem;
        span {
          --tw-text-opacity: 1;
          color: rgb(29 78 216 / var(--tw-text-opacity));
          background-color: #ecf1fc;
          padding: 0 0.3125rem;
          //   display: inline-block;
          //   width: 1.875rem;
          text-align: center;
        }
      }
      .right {
        height: 1.875rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 0.0625rem solid #ccc;
        border-radius: 0.625rem;
        padding: 0 0.625rem;

        img {
          width: 1.25rem;
        }
      }
    }
  }
  .list {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .list-item {
      text-align: left;
      border: 0.0625rem solid #ccc;
      padding: 0.625rem 0.5375rem;
      width: 46%;
      // margin-top: 0.5rem;
      border-radius: 0.625rem;

      background-image: linear-gradient(to right, var(--tw-gradient-stops));
      // border-color: rgb(243 244 246/var(--tw-border-opacity));

      cursor: pointer;
      //   box-shadow: 0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.5);
      &:hover .name h5 {
        color: rgba(59, 130, 246, 0.5);
      }
      &:hover {
        background-color: #f3f3f3;
      }
      .name {
        display: flex;
        align-items: center;
        margin-bottom: 0.3125rem;
        h5 {
          --tw-text-opacity: 1;
          color: rgb(0 0 0 / var(--tw-text-opacity));
          font-size: inherit;
          margin-left: 0.625rem;
          font-weight: normal;
        }
        img {
          width: 1.25rem;
        }
      }
      .info {
        --tw-text-opacity: 1;
        color: rgb(156 163 175 / var(--tw-text-opacity));
        font-size: 0.875rem;
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
      margin-left: 0.625rem;
      margin-top: 0.225rem;
      margin-bottom: 0.525rem;
      --tw-text-opacity: 1;
      color: rgb(156 163 175 / var(--tw-text-opacity));
      font-size: 0.875rem;
      svg {
        padding-top: 0.07rem;
      }
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