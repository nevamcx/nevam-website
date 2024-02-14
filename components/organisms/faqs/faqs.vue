<template>
    <section class="faq-ask-wrapper section-padding section-bg" id="faqs">
      <div class="container">
        <div class="col-lg-8 col-xl-6 col-12">
          <div class="block-contents fw500">
            <div class="section-title wow fadeInUp" data-wow-duration="1s">
              <h2>Frequently asked questions:</h2>
            </div>
          </div>
        </div>
  
        <div class="row faq-ask">
          <div class="col-lg-6 col-12">
            <div class="faq-accordion">
              <div class="accordion" id="mainaccordion">
  
                <div class="accordion-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" aria-label="Open or close an FAQ item" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqask1" aria-expanded="false" aria-controls="faqask1">
                      {{ faqs[0].title }}
                    </button>
                  </h4>
                  <div id="faqask1" class="accordion-collapse collapse" data-bs-parent="#mainaccordion">
                    <div class="accordion-body">
                      {{ faqs[0].content }}
                    </div>
                  </div>
                </div>
  
                <div class="accordion-item wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".6s">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" aria-label="Open or close an FAQ item"  type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqask2" aria-expanded="false" aria-controls="faqask2">
                      {{ faqs[1].title }}
                    </button>
                  </h4>
                  <div id="faqask2" class="accordion-collapse collapse" data-bs-parent="#mainaccordion">
                    <div class="accordion-body">
                      {{ faqs[1].content }}
                    </div>
                  </div>
                </div>
  
                <div class="accordion-item wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".9s">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" aria-label="Open or close an FAQ item"  type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqask3" aria-expanded="false" aria-controls="faqask3">
                      {{ faqs[2].title }}
                    </button>
                  </h4>
                  <div id="faqask3" class="accordion-collapse collapse" data-bs-parent="#mainaccordion">
                    <div class="accordion-body">
                      {{ faqs[2].content }}
                    </div>
                  </div>
                </div>
  
                <div class="accordion-item wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".9s">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" aria-label="Open or close an FAQ item"  type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqask4" aria-expanded="false" aria-controls="faqask4">
                      {{ faqs[3].title }}
                    </button>
                  </h4>
                  <div id="faqask4" class="accordion-collapse collapse" data-bs-parent="#mainaccordion">
                    <div class="accordion-body">
                      {{ faqs[3].content }}
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="faq-accordion">
              <div class="accordion" id="faqtwo">
                <div class="accordion-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" aria-label="Open or close an FAQ item"  type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqask11" aria-expanded="false" aria-controls="faqask11">
                      {{ faqs[4].title }}
                    </button>
                  </h4>
                  <div id="faqask11" class="accordion-collapse collapse" data-bs-parent="#faqtwo">
                    <div class="accordion-body">
                      {{ faqs[4].content }}
                    </div>
                  </div>
                </div>
  
                <div class="accordion-item wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".6s">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" aria-label="Open or close an FAQ item"  type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqask22" aria-expanded="false" aria-controls="faqask22">
                      {{ faqs[5].title }}
                    </button>
                  </h4>
                  <div id="faqask22" class="accordion-collapse collapse" data-bs-parent="#faqtwo">
                    <div class="accordion-body">
                      {{ faqs[5].content }}
                    </div>
                  </div>
                </div>
  
                <div class="accordion-item wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".9s">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" aria-label="Open or close an FAQ item"  type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqask33" aria-expanded="false" aria-controls="faqask33">
                      {{ faqs[6].title }}
                    </button>
                  </h4>
                  <div id="faqask33" class="accordion-collapse collapse" data-bs-parent="#faqtwo">
                    <div class="accordion-body">
                      {{ faqs[6].content }}
                    </div>
                  </div>
                </div>
  
                <div class="accordion-item wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".9s">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" aria-label="Open or close an FAQ item"  type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqask44" aria-expanded="false" aria-controls="faqask44">
                      {{ faqs[7].title }}
                    </button>
                  </h4>
                  <div id="faqask44" class="accordion-collapse collapse" data-bs-parent="#faqtwo">
                    <div class="accordion-body">
                      {{ faqs[7].content }}
                    </div>
                  </div>
                </div>
  
                <div class="accordion-item wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".9s">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" aria-label="Open or close an FAQ item"  type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqask55" aria-expanded="false" aria-controls="faqask55">
                      {{ faqs[8].title }}
                    </button>
                  </h4>
                  <div id="faqask55" class="accordion-collapse collapse" data-bs-parent="#faqtwo">
                    <div class="accordion-body">
                      {{ faqs[8].content }}
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const faqs = [
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
    },
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
    },
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
  ]
  
  onMounted(() => {
      import('./faqs.scss')
  })
  </script>
  
  