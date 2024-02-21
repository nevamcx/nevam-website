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
                    <div class="accordion-body" v-html="faqChild.content">
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
                    <div class="accordion-body" v-html="faqChild.content">
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
    heading: 'About NEVAM',
    faqsLeft: [
      {
        title: "Why the NEVAM name?",
        content: "When you flip it around, you get Maven. Coined by Malcolm Gladwell in his book 'The Tipping Point', Mavens are the savvy information brokers, adept at sharing and trading their knowledge. Nevam CX, on the other hand, forms the backbone of a brand's information system. See the clever connection?"
      },
      {
        title: "How did NEVAM start?",
        content: "Well, isn't this a coincidence? We've actually penned a whole 'About Us' section just for your entertainment! Dive in for a bit of light reading on our <a id='contact-link' href='/about'>about page</a>."
      },
      {
        title: "Is NEVAM an analytics tool?",
        content: "While traditional analytics depend on tagging and coding to extract data, presenting it through numbers, charts, and graphs, NEVAM takes a different approach. It scans your content and channel code directly, providing visual representations of the issues encountered. This method offers a more intuitive understanding of the problems you're facing. In analytics, users typically guide the search for insights. However, NEVAM's Insights Finder operates differently—it draws from the multitude of issues we've encountered in our customers' digital experiences. This means you gain from the collective wisdom amassed over time, benefiting from the shared learnings indefinitely."
      }
    ],
    faqsRight: [
      {
        title: "Is NEVAM a SAAS or consultancy?",
        content: "We utilize both approaches. While our platform evolves, some insights are discovered manually by our team and then incorporated into the algorithm to enhance its capabilities. This collaborative effort involves working with you to identify problems, which in turn teaches the platform to autonomously detect similar issues in the future. It's a continuous cycle of improvement, where human expertise and machine learning complement each other to refine our capabilities."
      },
      {
        title: "Who can use Nevam CX?",
        content: "Anyone who has to manage or interact with the customer experience digitally. UX professionals: Access the latest pages directly instead of relying on outdated Miro boards. Media teams: Review downstream experiences of their ads and identify optimization opportunities. Email marketers: Monitor real-time email sends, traffic destinations, and rendering accuracy. CMOs and Executives: Stay informed about all activities and maintain control over the customer experience. Campaign managers: Verify the accurate deployment of campaigns. Analytics specialists: Identify opportunities for better tagging and report inclusion of page elements. Content managers: Enforce governance over copy and image assets. Developers: Understand issues without the need for screenshots."
      }
    ]
  },
  {
    heading: 'Functionality and features',
    faqsLeft: [
      {
        title: "How do we identify problems cross channel?",
        content: "Many tools are limited to specific channels, making it challenging to identify issues that might occur across various channels in the customer experience journey. Even with extensive data resources like data lakes, data warehouses, or CDPs, pinpointing problems can be daunting. You either have to guide the algorithm on what to look for or sift through vast amounts of data to locate them. NEVAM CX eliminates this data barrier by scanning all content across channels. Our built-in Insights Finder does the heavy lifting, proactively seeking out and flagging problems for you, streamlining the process and saving you time and effort."
      },
      {
        title: "What types of problems do we identify?",
        content: "The list is extensive, but here are a few examples: Images not displaying correctly. Broken links. Outdated templates, colors, or fonts in use. Unanticipated emails being sent out. Locating outdated Terms and Conditions. Unintentional dead ends or loops. Media directing to messaging that doesn't match the site. Duplicate tags leading to incorrect metrics."
      },
      {
        title: "How long does it take to get a full report?",
        content: "Initially, we'll need to gather information about the platforms you use for marketing. Then, we'll collaborate closely with your team to seamlessly integrate with each tool. The timeline for implementation varies depending on the accessibility of different platforms, ranging from a couple of days to several weeks."
      }
    ],
    faqsRight: [
      {
        title: "What do I actually see in NEVAM?",
        content: "We've developed a comprehensive view that enables brands to visualize all their content across various channels organized into swim lanes. With a touch of personalization, content can be seamlessly transitioned into vertical swim lanes based on specific life stages. This setup empowers users to effortlessly navigate through content categorized by life stage or campaign, across different channels, all within a single interface."
      },
      {
        title: "Are there examples of reports I can see?",
        content: "Certainly! We have compelling customer case studies, but due to privacy considerations, our clients prefer that we share them directly with potential customers rather than publishing them on our website. Feel free to reach out to us, and we'll be delighted to provide you with a personalized walkthrough."
      }
    ]
  },
  {
    heading: 'Onboarding',
    faqsLeft: [
      {
        title: "What is the process of becoming a customer?",
        content: "Having been marketers ourselves, we understand the importance of alleviating anxiety. That's why we created NEVAM. We don't simply provide a link and hope for the best; instead, we take a proactive approach: We kick things off with a straightforward exercise to identify the channels and platforms utilized throughout the customer experience. Collaboratively, we delve into your organization's major pain points to ensure that NEVAM's presentation aligns with your team's preferences for adoption. We then assist in integrating NEVAM into each of your tools, either working alongside you or handling the process entirely. Our goal is to ensure minimal disruption to your daily operations, allowing you to focus on your core responsibilities while we manage the heavy lifting. Once all integrations are in place and content is seamlessly flowing through the system, we categorize and organize content according to its respective life stage or campaign for improved visibility. We establish a meeting schedule that suits your team's needs, convening to review the insights uncovered by the tool and your team collaboratively. Our support continues until you feel confident and self-sufficient in utilizing NEVAM autonomously."
      },
      {
        title: "How do I become a customer?",
        content: "When you're prepared, simply inform one of our team members that you've been in touch, or click the 'Book a call' button. We'll then arrange an initial call to delve into your platform requirements and take it from there."
      }
    ],
    faqsRight: [
      {
        title: "How much does it cost?",
        content: "The cost depends on a few factors: the number of integrated channels and the frequency of insights you require. We're more than happy to provide you with a quote, with no obligation attached. Simply <a id='contact-link' href='/about'>contact us</a> for more info."
      },
      {
        title: "What payment methods are available?",
        content: "We accept direct payments and transfers, offering billing options annually or upfront based on your preference."
      }
    ]
  }
]

onMounted(() => {
  import('./faqs.scss')
})
</script>

<style lang="scss">
@import '~/assets/style/_variables.scss';
#faqs {
  h4.heading {
      color: $black;
  }
}
.desktop-mode {
  #faqs {
    h4.heading {
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