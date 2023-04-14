<template>
  <div class="body">
    <div
      class="from-gray-50-to-white border-b border-gray-100 bg-gradient-to-t via-white dark:via-gray-950 pt-6 sm:pt-9"
    >
      <div class="title">
        <h1 class="flex flex-wrap items-center leading-tight mb-3 text-lg md:text-xl">
          <div class="group flex items-center">
            <div class="relative mr-1.5 flex items-center"></div>
            <a href="#" class="text-gray-400 hover:text-blue-600">{{model.developer}}</a>
            <div class="mx-0.5 text-gray-300">/</div>
          </div>

          <div class="max-w-full">
            <a class="break-words font-mono font-semibold" href="#">{{model.name}}</a>
          </div>

          <div
            class="inline-flex items-center overflow-hidden whitespace-nowrap rounded-md border bg-white text-sm leading-none text-gray-500 mr-2 like"
          >
            <button
              class="relative flex items-center px-1.5 py-1 hover:bg-gradient-to-t focus:outline-none overflow-hidden from-red-50 to-transparent dark:from-red-900 dark:to-red-800"
              title="Like"
            >
              <svg
                class="mr-1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path
                  d="M22.45,6a5.47,5.47,0,0,1,3.91,1.64,5.7,5.7,0,0,1,0,8L16,26.13,5.64,15.64a5.7,5.7,0,0,1,0-8,5.48,5.48,0,0,1,7.82,0L16,10.24l2.53-2.58A5.44,5.44,0,0,1,22.45,6m0-2a7.47,7.47,0,0,0-5.34,2.24L16,7.36,14.89,6.24a7.49,7.49,0,0,0-10.68,0,7.72,7.72,0,0,0,0,10.82L16,29,27.79,17.06a7.72,7.72,0,0,0,0-10.82A7.49,7.49,0,0,0,22.45,4Z"
                />
              </svg>
              <svg
                class="mr-1 absolute text-red-500 origin-center transform transition ease-in translate-y-10 scale-0"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path
                  d="M22.5,4c-2,0-3.9,0.8-5.3,2.2L16,7.4l-1.1-1.1C12,3.3,7.2,3.3,4.3,6.2c0,0-0.1,0.1-0.1,0.1c-3,3-3,7.8,0,10.8L16,29l11.8-11.9c3-3,3-7.8,0-10.8C26.4,4.8,24.5,4,22.5,4z"
                />
              </svg>
              like
            </button>
            <button
              class="flex items-center border-l px-1.5 py-1 text-gray-400 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none dark:hover:bg-gray-900 dark:focus:bg-gray-800"
              title="See users who liked this repository"
            >7</button>
          </div>
        </h1>

        <div class="Multimodal-list">
          <div class="Multimodal-list-item">
            <div class="img-box">
              <img src="@/assets/imgs/task.png" alt />
            </div>
            <span>铜排拉弧</span>
          </div>

          <div class="Multimodal-list-item">
            <div class="img-box">
              <img src="@/assets/imgs/task1.png" alt />
            </div>
            <span>旋变</span>
          </div>

          <div class="Multimodal-list-item">
            <div class="img-box">
              <img src="@/assets/imgs/pytorch.png" alt />
            </div>
            <span>Pytorch</span>
          </div>

          <div class="Multimodal-list-item">
            <div class="img-box">
              <img src="@/assets/imgs/tensorflow.png" alt />
            </div>
            <span>Tensorflow</span>
          </div>
        </div>

        <div class="-mb-px flex h-12 items-center overflow-x-auto overflow-y-hidden">
          <a class="tab-alternate active" href="#">
            <svg
              class="mr-1.5 text-gray-400 flex-none"
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
            Model card
          </a>

          <a class="tab-alternate" href="#">
            <svg
              class="mr-1.5 text-gray-400 flex-none"
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
                class="uim-tertiary"
                d="M21 19h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0-4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0-8h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0 4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
                opacity=".5"
                fill="currentColor"
              />
              <path
                class="uim-primary"
                d="M9 19a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1zm-6-4.333a1 1 0 0 1-.64-1.769L3.438 12l-1.078-.898a1 1 0 0 1 1.28-1.538l2 1.667a1 1 0 0 1 0 1.538l-2 1.667a.999.999 0 0 1-.64.231z"
                fill="currentColor"
              />
            </svg>
            <span class="xl:hidden">Files</span>
            <span class="hidden xl:inline">Files and versions</span>
          </a>
        </div>
      </div>
    </div>

    <iframe :src="model.url"></iframe>
  </div>
</template>

<script>
export default {
  created() {
    var url = "/getmodelbyid";
    this.axios
      .get(url, {
        params: {
          id: this.$route.query.id
        }
      })
      .then(res => {
        // console.log(res);
        this.model = res.data;
      })
      .catch(error => console.log(error));
  },

  data() {
    return {
      model: {}
    };
  }
};
</script>

<style lang="scss" scoped>
.body {
  padding: 0rem 1.5rem;
  height: 100%;
  .from-gray-50-to-white {
    --tw-gradient-from: #f9fafb;
    --tw-gradient-to: rgba(249, 250, 251, 0);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: #fff;

    .title {
      width: 95rem;
      margin: 0 auto;

      .like{
        margin-left: 2rem;
      }
      .Multimodal-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        margin-left: 0.4rem;
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

      .tab-alternate.active {
        --tw-border-opacity: 1;
        --tw-text-opacity: 1;
        border-color: rgb(55 65 81 / var(--tw-border-opacity));
        color: rgb(31 41 55 / var(--tw-text-opacity));
        font-weight: 600;
      }
      .tab-alternate {
        font-size: 0.9rem;
        padding-left: 0.875rem;
        padding-right: 0.875rem;
        --tw-text-opacity: 1;
        align-items: center;
        border-bottom-width: 2px;
        border-color: transparent;
        color: rgb(75 85 99 / var(--tw-text-opacity));
        display: flex;
        font-weight: 500;
        height: 100%;
        padding-left: 0.625rem;
        padding-right: 0.625rem;
        white-space: nowrap;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
    }
  }
  iframe {
    border: none;
    height: 100%;
    width: 95rem;
    margin: 0 auto;
  }
}
</style>