<template>
  <div>
    <header>
      <div class="header-left">
        <img
          src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
          alt=""
        />
        <h1>Hugging Face</h1>
        <div class="ipt-box">
          <input type="text" placeholder="Search models, datasets, users..." />
          <svg
            class="absolute left-2.5 text-gray-400 top-1/2 transform -translate-y-1/2"
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
            ></path>
          </svg>
        </div>
      </div>

      <ul class="header-right">
        <li>
          <a class="group flex items-center px-2 py-0.5 dark:hover:text-gray-400 hover:text-indigo-700"
            ><svg
              class="mr-1.5 text-gray-400 group-hover:text-indigo-500"
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
              ></path>
              <path
                class="uim-tertiary"
                d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z"
                opacity=".5"
                fill="currentColor"
              ></path>
              <path
                class="uim-primary"
                d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z"
                fill="currentColor"
              ></path>
            </svg>
            Models</a>
        </li>

        <li>
          <a
            class="group flex items-center px-2 py-0.5 dark:hover:text-gray-400 hover:text-red-700"
            ><svg
              class="mr-1.5 text-gray-400 group-hover:text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 25 25"
            >
              <ellipse
                cx="12.5"
                cy="5"
                fill="currentColor"
                fill-opacity="0.25"
                rx="7.5"
                ry="2"
              ></ellipse>
              <path
                d="M12.5 15C16.6421 15 20 14.1046 20 13V20C20 21.1046 16.6421 22 12.5 22C8.35786 22 5 21.1046 5 20V13C5 14.1046 8.35786 15 12.5 15Z"
                fill="currentColor"
                opacity="0.5"
              ></path>
              <path
                d="M12.5 7C16.6421 7 20 6.10457 20 5V11.5C20 12.6046 16.6421 13.5 12.5 13.5C8.35786 13.5 5 12.6046 5 11.5V5C5 6.10457 8.35786 7 12.5 7Z"
                fill="currentColor"
                opacity="0.5"
              ></path>
              <path
                d="M5.23628 12C5.08204 12.1598 5 12.8273 5 13C5 14.1046 8.35786 15 12.5 15C16.6421 15 20 14.1046 20 13C20 12.8273 19.918 12.1598 19.7637 12C18.9311 12.8626 15.9947 13.5 12.5 13.5C9.0053 13.5 6.06886 12.8626 5.23628 12Z"
                fill="currentColor"
              ></path>
            </svg>
            Datasets</a
          >
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  padding: 0 0.9375rem;
  height: 4rem;
  line-height: 4rem;
  border-bottom: 0.0625rem solid rgb(243 244 246);
  display: flex;
  align-items: center;
  .header-left {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 1.75rem;
    }
    h1 {
      font-size: 1.125rem;
      font-weight: 700;
      margin-left: 0.625rem;
    }
    .ipt-box {
      width: 24rem;

      position: relative;
      margin-left: 1.25rem;
      input {
        width: 100%;
        height: 2.25rem;
        border-radius: 0.625rem;
        padding-left: 1.875rem;
        border: 0.0625rem solid #e5e7eb;
        box-shadow: 0 0 #000;
      }
      .absolute {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0.625rem;
      }
    }
  }
  .header-right {
    margin-left: 6.25rem;
    display: flex;
    align-items: center;
    li {
      margin-right: 1.25rem;
      cursor: pointer;
      a {
        display: flex;
        align-items: center;
        color: inherit;
        &:hover {
          color: rgba(59, 130, 246, 0.5);
        }
      }
      .text-gray-400 {
        margin-right: 0.375rem;
      }
    }
  }
}
</style>