<template>
        <div class="mian-right">
        <div class="title">
          <div class="title-left">
            <h3>Models</h3>
            <div class="num">166,616</div>
            <div class="ipt-box">
              <input type="text" placeholder="Filter by name" />
              <img src="../assets/imgs/m-9.png" alt="" />
            </div>
          </div>
          <div class="title-right">
            <div class="left">
              <span>new</span>
              <div>Full-text search</div>
            </div>
            <div class="right">
              <img src="../assets/imgs/m-3.png" alt="" />
              <span> Sort: Most Downloads</span>
            </div>
          </div>
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
          url: require("../assets/imgs/m-9.png"),
          title: "bert-base-uncased",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "44.4M",
          like: "659",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "jonatasgrosman/wav2vec2-large-xlsr-53-english",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "31.3M",
          like: "46",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "gpt2",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "21.3M",
          like: "811",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },

        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
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
              padding-left: 2.5rem;
              width: 20rem;
            }
            img {
              left: 0.9375rem;
              position: absolute;
              width: 1.25rem;
              top: 50%;
              transform: translateY(-50%);
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
        margin-top: 2.5rem;
        // column-count: 2; //想要排成的列数
        // column-gap: 0.9375rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .list-item {
          text-align: left;
          border: 0.0625rem solid #ccc;
          padding: 0.625rem 0.9375rem;
          width: 46%;
          margin: 0.625rem 1%;
          border-radius: 0.625rem;
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