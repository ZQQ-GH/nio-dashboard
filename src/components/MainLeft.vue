<template>
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
</template>

<script>
export default {
    data() {
    return {
      MultimodalArr: [
        {
          text: "Feature Extraction",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Text-to-Image",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Image-to-Text",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Text-to-Video",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Visual Question Answering",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Document Question Answering",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Graph Machine Learning",
          url: require("../assets/imgs/m-2.png"),
        },
      ],
      ComputerVisionArr: [
        {
          text: "Depth Estimation",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Image Classification",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Object Detection",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Image Segmentation",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Image-to-Image",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Unconditional Image Generation",
          url: require("../assets/imgs/m-8.png"),
        },
        {
          text: "Video Classification",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Zero-Shot Image Classification",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
      ],
      NaturalLanguageProcessingArr: [
        {
          text: "Text Classification",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Token Classification",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Table Question Answering",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Question Answering",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Zero-Shot Classification",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Translation",
          url: require("../assets/imgs/m-6.png"),
        },
        {
          text: "Summarization",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Conversational",
          url: require("../assets/imgs/m-7.png"),
        },
        {
          text: "Text Generation",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Text2Text Generation",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Fill-Mask",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Sentence Similarity",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
      ],
      AudioArr: [
        {
          text: "Text-to-Speech",
          url: require("../assets/imgs/m-5.png"),
        },
        {
          text: "Automatic Speech Recognition",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Audio-to-Audio",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Audio Classification",
          url: require("../assets/imgs/mg-4.png"),
        },
        {
          text: "Voice Activity Detection",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
      ],
      TabularArr: [
        {
          text: "Tabular Classification",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Tabular Regression",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
      ],

      ReinforcementLearningArr: [
        {
          text: "Reinforcement Learning",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
        {
          text: "Robotics",
          url: require("../assets/imgs/Multimodal-1.png"),
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
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
</style>