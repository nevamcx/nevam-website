<template>
  <section class="faq-ask-wrapper section-padding section-bg" id="faqs">
    <div class="container">
      <div class="col-12">
        <div class="block-contents fw500">
          <div class="section-title">
            <h2>Frequently asked questions:</h2>
          </div>
          <div class="section-content">
            <p>Below are some of our most asked questions, and also some interesting facts about us. Also if you're not able to find an answer to a question you have, please feel to send us a message on our <a id="contact-link" @click.prevent="navigateTo('/contact')">contact page.</a></p>
          </div>
        </div>
      </div>
      <div class="row faq-ask">
        <template v-for="(faqParent, faqParentIndex) in faqs" :key="faqParentIndex.heading">
          <h4 class="heading">{{ faqParent.heading }}</h4>
          <div class="col-lg-6 col-12">
            <div class="faq-accordion">
              <div class="accordion" :id="`parent-accordion-${faqParentIndex}-left`">
                <div v-for="(faqChild, faqChildIndex) in faqParent.faqsLeft" class="accordion-item">
                  <h4 class="accordion-header">
                    <button 
                      class="accordion-button collapsed" 
                      aria-label="Open or close an FAQ item" 
                      type="button" 
                      data-bs-toggle="collapse"
                      :data-bs-target="`#id-${faqParentIndex}-${faqChildIndex}-left`" 
                      aria-expanded="false" 
                      :aria-controls="`#id-${faqParentIndex}-${faqChildIndex}-left`"
                    >
                      {{ faqChild.title }}
                    </button>
                  </h4>
                  <div 
                    :id="`id-${faqParentIndex}-${faqChildIndex}-left`"
                    class="accordion-collapse collapse" 
                    :data-bs-parent="`#parent-accordion-${faqParentIndex}-left`"
                  >
                    <div class="accordion-body">
                      {{ faqChild.content }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="faq-accordion">
              <div class="accordion" :id="`parent-accordion-${faqParentIndex}-right`">
                <div v-for="(faqChild, faqChildIndex) in faqParent.faqsRight" class="accordion-item">
                  <h4 class="accordion-header">
                    <button 
                      class="accordion-button collapsed" 
                      aria-label="Open or close an FAQ item" 
                      type="button" 
                      data-bs-toggle="collapse"
                      :data-bs-target="`#id-${faqParentIndex}-${faqChildIndex}-right`" 
                      aria-expanded="false" 
                      :aria-controls="`#id-${faqParentIndex}-${faqChildIndex}-right`"
                    >
                      {{ faqChild.title }}
                    </button>
                  </h4>
                  <div 
                    :id="`id-${faqParentIndex}-${faqChildIndex}-right`"
                    class="accordion-collapse collapse" 
                    :data-bs-parent="`#parent-accordion-${faqParentIndex}-right`"
                  >
                    <div class="accordion-body">
                      {{ faqChild.content }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqs = [
  {
    heading: 'Some FAQ heading 1',
    faqsLeft: [
      {
        title: "Here is a FAQ question?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Here is a FAQ question?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Here is a FAQ question?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ],
    faqsRight: [
      {
        title: "Here is a FAQ question?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Here is a FAQ question?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  },
  {
    heading: 'Some FAQ heading 2',
    faqsLeft: [
      {
        title: "Here is a FAQ question?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Here is a FAQ question?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Here is a FAQ question?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ],
    faqsRight: [
      {
        title: "Here is a FAQ question?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Here is a FAQ question?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  },
  {
    heading: 'Some FAQ heading 3',
    faqsLeft: [
      {
        title: "Here is a FAQ question?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Here is a FAQ question?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Here is a FAQ question?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ],
    faqsRight: [
      {
        title: "Here is a FAQ question?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Here is a FAQ question?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  }
]

onMounted(() => {
  import('./faqs.scss')
})
</script>

<style lang="scss">
@import './../style/_variables.scss';
.desktop-mode {
  #faqs {
    h4.heading {
      color: $grayDark;
      margin-top: 80px;
      margin-bottom: 10px;
    }
  }
  #contact-link {
    color: $grayDark;
    font-size: 20px;
    font-weight: initial;
    border-bottom: 1px solid;
  }
}
.mobile-mode {
  #faqs {
    h4.heading {
      color: $grayDark;
      margin-top: 60px;
      margin-bottom: 10px;
    }
  }
  #contact-link {
    color: $grayDark;
    font-size: 18px;
    font-weight: initial;
    border-bottom: 1px solid;
  }
}

</style>