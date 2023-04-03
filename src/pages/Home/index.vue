<template>
  <div class="index">
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
          <a
            class="group flex items-center px-2 py-0.5 dark:hover:text-gray-400 hover:text-indigo-700"
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
            Models</a
          >
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

    <main>
      <div class="mian-left">
        <ul class="nav-list flex gap-1 text-sm flex-wrap mt-1.5 mb-5">
          <li>
            <button
              class="active flex items-center whitespace-nowrap rounded-lg px-2 bg-black text-white dark:bg-gray-800"
            >
              Tasks
            </button>
          </li>
          <li>
            <button
              class="flex items-center whitespace-nowrap rounded-lg px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-900 dark:hover:text-gray-300"
            >
              Libraries
            </button>
          </li>
          <li>
            <button
              class="flex items-center whitespace-nowrap rounded-lg px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-900 dark:hover:text-gray-300"
            >
              Datasets
            </button>
          </li>
          <li>
            <button
              class="flex items-center whitespace-nowrap rounded-lg px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-900 dark:hover:text-gray-300"
            >
              Languages
            </button>
          </li>
          <li>
            <button
              class="flex items-center whitespace-nowrap rounded-lg px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-900 dark:hover:text-gray-300"
            >
              Licenses
            </button>
          </li>
          <li>
            <button
              class="flex items-center whitespace-nowrap rounded-lg px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-900 dark:hover:text-gray-300"
            >
              Other
            </button>
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
            ></path>
          </svg>
          <input type="text" placeholder="Filter Tasks by name" />
        </div>

        <div class="Multimodal">
          <h3>Multimodal</h3>
          <div class="Multimodal-list">
            <div
              class="Multimodal-list-item"
              v-for="(v, i) in MultimodalArr"
              :key="i"
            >
              <div class="img-box">
                <img :src="v.url" alt="" />
              </div>

              <span>{{ v.text }}</span>
            </div>
          </div>
        </div>
        <div class="Multimodal">
          <h3>Computer Vision</h3>
          <div class="Multimodal-list">
            <div
              class="Multimodal-list-item"
              v-for="(v, i) in ComputerVisionArr"
              :key="i"
            >
              <div class="img-box">
                <img :src="v.url" alt="" />
              </div>

              <span>{{ v.text }}</span>
            </div>
          </div>
        </div>
        <div class="Multimodal">
          <h3>Natural Language Processing</h3>
          <div class="Multimodal-list">
            <div
              class="Multimodal-list-item"
              v-for="(v, i) in NaturalLanguageProcessingArr"
              :key="i"
            >
              <div class="img-box">
                <img :src="v.url" alt="" />
              </div>

              <span>{{ v.text }}</span>
            </div>
          </div>
        </div>

        <div class="Multimodal">
          <h3>Audio</h3>
          <div class="Multimodal-list">
            <div
              class="Multimodal-list-item"
              v-for="(v, i) in AudioArr"
              :key="i"
            >
              <div class="img-box">
                <img :src="v.url" alt="" />
              </div>

              <span>{{ v.text }}</span>
            </div>
          </div>
        </div>
        <div class="Multimodal">
          <h3>Tabular</h3>
          <div class="Multimodal-list">
            <div
              class="Multimodal-list-item"
              v-for="(v, i) in TabularArr"
              :key="i"
            >
              <div class="img-box">
                <img :src="v.url" alt="" />
              </div>

              <span>{{ v.text }}</span>
            </div>
          </div>
        </div>

        <div class="Multimodal">
          <h3>Reinforcement Learning</h3>
          <div class="Multimodal-list">
            <div
              class="Multimodal-list-item"
              v-for="(v, i) in ReinforcementLearningArr"
              :key="i"
            >
              <div class="img-box">
                <img :src="v.url" alt="" />
              </div>

              <span>{{ v.text }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mian-right">
        <div class="title">
          <div class="title-left">
            <h3>Models</h3>
            <div class="num">166,616</div>
            <div class="ipt-box">
              <input type="text" placeholder="Filter by name" />
              <img src="../../assets/imgs/m-9.png" alt="" />
            </div>
          </div>
          <div class="title-right">
            <div class="left">
              <span>new</span>
              <div>Full-text search</div>
            </div>
            <div class="right">
              <img src="../../assets/imgs/m-3.png" alt="" />
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
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      MultimodalArr: [
        {
          text: "Feature Extraction",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Text-to-Image",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Image-to-Text",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Text-to-Video",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Visual Question Answering",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Document Question Answering",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Graph Machine Learning",
          url: require("../../assets/imgs/m-2.png"),
        },
      ],
      ComputerVisionArr: [
        {
          text: "Depth Estimation",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Image Classification",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Object Detection",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Image Segmentation",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Image-to-Image",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Unconditional Image Generation",
          url: require("../../assets/imgs/m-8.png"),
        },
        {
          text: "Video Classification",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Zero-Shot Image Classification",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
      ],
      NaturalLanguageProcessingArr: [
        {
          text: "Text Classification",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Token Classification",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Table Question Answering",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Question Answering",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Zero-Shot Classification",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Translation",
          url: require("../../assets/imgs/m-6.png"),
        },
        {
          text: "Summarization",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Conversational",
          url: require("../../assets/imgs/m-7.png"),
        },
        {
          text: "Text Generation",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Text2Text Generation",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Fill-Mask",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Sentence Similarity",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
      ],
      AudioArr: [
        {
          text: "Text-to-Speech",
          url: require("../../assets/imgs/m-5.png"),
        },
        {
          text: "Automatic Speech Recognition",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Audio-to-Audio",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Audio Classification",
          url: require("../../assets/imgs/mg-4.png"),
        },
        {
          text: "Voice Activity Detection",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
      ],
      TabularArr: [
        {
          text: "Tabular Classification",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Tabular Regression",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
      ],

      ReinforcementLearningArr: [
        {
          text: "Reinforcement Learning",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Robotics",
          url: require("../../assets/imgs/Multimodal-1.png"),
        },
      ],
      modelsArr: [
        {
          url: require("../../assets/imgs/m-9.png"),
          title: "bert-base-uncased",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "44.4M",
          like: "659",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "jonatasgrosman/wav2vec2-large-xlsr-53-english",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "31.3M",
          like: "46",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "gpt2",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "21.3M",
          like: "811",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },

        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
        {
          url: require("../../assets/imgs/m-9.png"),

          title: "xlm-roberta-base",
          Updated: "Updated",
          time: "Nov 16, 2022",
          size: "18M",
          like: "200",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
  width: 70%;
  margin: 0 auto;

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
  main {
    width: 100%;
    display: flex;
    // justify-content: space-between;
    .mian-left {
      padding: 2.5rem 1.25rem;
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
          border-radius: 0.625rem;
          background-color: #fafbfc;
          font-size: 1rem;
          margin: 0 0.3125rem 0.3125rem 0;
          cursor: pointer;
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
              width: 1.875rem;
              height: 100%;
              margin-right: 0.3125rem;
              border-top-left-radius: 00.625rem;
              border-bottom-left-radius: 00.625rem;
              display: flex;
              align-items: center;
              justify-content: center;

              img {
                width: 0.9375rem;
                height: 0.9375rem;
              }
            }
            span {
              font-size: 0.75rem;
            }
          }
        }
      }
    }
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
  }
}
</style>