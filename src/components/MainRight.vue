<template>
        <div class="mian-right">

        <div class="title">
          <div class="title-left">
            <h3>Models</h3>
            <div class="num">3</div>
            <div class="ipt-box">
              <input type="text" placeholder="Filter by name" />
              <!-- <img src="../assets/imgs/task1.png" alt="" /> -->
              <svg class="absolute left-2 top-1.5 text-gray-300 w-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path class="uim-quaternary" d="M20.23 7.24L12 12L3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z" opacity=".25" fill="currentColor"></path><path class="uim-tertiary" d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z" opacity=".5" fill="currentColor"></path><path class="uim-primary" d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z" fill="currentColor"></path></svg>
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
          </div> -->

        </div>

        <div class="list">
          <div class="list-item" v-for="(v, i) in modelsArr" :key="i">
            <div class="name">
              <img :src="v.url" alt="" />
              <h5>{{ v.title }}</h5>
            </div>
            <div class="info">
              <span>{{ v.Updated }}</span>
              <span>{{ v.time }}</span>
              <span>{{ v.size }}</span>
              <span>{{ v.like }}</span>
            </div>
          </div>
        </div>
      </div>


      
</template>

<script>
export default {
    data() {
    return {
      modelsArr: [
        {
          url: require("../assets/imgs/task1.png"),
          title: "bert-base-uncased",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "44.4M",
          like: "659",
        },
        {
          url: require("../assets/imgs/task1.png"),

          title: "jonatasgrosman/wav2vec2-large-xlsr-53-english",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "31.3M",
          like: "46",
        },
        {
          url: require("../assets/imgs/task1.png"),

          title: "gpt2",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "21.3M",
          like: "811",
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
    .mian-right {
      padding: 2.5rem 1.25rem;
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
              color: rgb(209 213 219/var(--tw-text-opacity));
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
        // column-count: 2; //想要排成的列数
        // column-gap: 0.9375rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .list-item {
          text-align: left;
          border: 0.0625rem solid #ccc;
          padding: 0.625rem 0.5375rem;
          width: 46%;
          margin: 0.625rem 0rem;
          border-radius: 0.625rem;

          background-image: linear-gradient(to right,var(--tw-gradient-stops));
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
    }
</style>