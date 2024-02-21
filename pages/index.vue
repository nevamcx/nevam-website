<template>

    <Modal v-if="store.$state.modal"/>

    <Hero />

    <ImageHolderA
        v-if="store.mode == 'mobile'"
        :topColour="'white'"
        :bottomColour="'white-3'"
        :src="'images/hero-1.webp'" 
        :alt="'Image of person using keyboard'"
    />

    <!---------------- THE FOLD ---------------->

    <Services />

    <ProductHero />

    <Callout
        :effect="true"
        :effect-i-d="20"
        :effect-pre="callout1.effect.pre"
        :effect-post="callout1.effect.post"
        :effect-words="callout1.effect.words"
        :heading="callout1.heading"
        :text="callout1.text"
        :button="callout1.button"
        :url="callout1.url"
        :slug="'callout-1'"
    />

    <FloatingArrow :direction="0"/>

    <section id="testimonials">
        <div class="container">
            <div class="testimonial-card" v-for="(testimonial, testimonialIndex) in testimonials" >
                <TestimonialCard 
                    :name="testimonial.name"
                    :longName="testimonial.longName"
                    :company="testimonial.company"
                    :role="testimonial.role"
                    :linkedin="testimonial.linkedin"
                    :description="testimonial.description"
                    :image="testimonial.image"
                    :position="testimonial.position"
                />
            </div>
        </div>
    </section>

    <Support />

    <LoadStyles />

</template>

<script setup>
import { baseStore } from '@/stores'
const store = baseStore()

const testimonials = [
    {
        name: "Sam Hussey",
        company: "Deployable",
        url: "https://www.deployable.co",
        role: "CEO",
        linkedin: "https://www.linkedin.com/in/samhussey",
        description: "<p>The best thing I got out of NEVAM CX was clarity and direction around some of the key things that have been huge pain points but we were just not getting on top of them quick enough.</p><br><p>NEVAM CX was able to go through it and pin point the exact areas that were causing customer frustration on our website and platform. It created a pathway for us to fix the issues that could be causing some customers to leave our platform and given me a roadmap to improve them.</p>",
        image: "/images/clients/sam-hussey.jpg",
        position: "left"
    },
    {
        name: "Delia Suteja Yeboah",
        longName: true,
        company: "BrandRead.i.y",
        url: "https://brandreadiy.com",
        role: "Founder",
        linkedin: "https://www.linkedin.com/in/deliasuteja",
        description: "<p>I am confident in brand building and I have a great UX team, but where NEVAM CX differentiated was bridging the gap between the experience I wanted customers to have and the actual end to end flow.</p><br><p>The transparency of seeing it in one platform allows me to see opportunities I wouldn’t have noticed prior. I was able to easily identify the gaps and update what needed to be present so I could better brief my UX team.</p>",
        image: "/images/clients/delia-suteja-yeboah.jpg",
        position: "right"
    }
]

const callout1 = {
    effect: {
        pre: 'What people say </br>about our ',
        words: [
            { text: 'product' },
            { text: 'service' },
            { text: 'business' }
        ],
        post: ''
    },
    text: "We have a passion for helping our clients solve their marketing issues. So don't just take our word for it, see what our clients have to say about us:"
}
</script>

<style>
.desktop-mode {
    #testimonials {
        padding: 100px 100px;
    }
}
.mobile-mode {
    #testimonials {
        padding: 50px 15px;
    }
}
.not-loaded {
    height: 400px;
}
.loaded {
    height: initial;
}
</style>