<template>
    <section class="contact-us-wrapper section-padding" id="contact-us">
        <div class="container">

            <div class="row">
                <div class="col-lg-12 mb-4">
                    <div class="block-contents">
                        <div class="section-title mb-0 wow fadeInDown" data-wow-duration="1.2s">
                            <h1 class="mb-0">Send us a message:</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="!messageSent" class="row intro-text">
                <div class="col-xl-12 mb-3">
                    Let us know if there's something we can help you with, simply fill out some of your details below to contact us. Our team will reply to your message shortly!
                </div>
            </div>

            <div class="row">

                <div v-if="!messageSent" class="col-lg-6 pe-lg-4 order-2 order-lg-1">

                    <div v-if="store.mode == 'mobile'" class="row mt-3 mb-4">
                        <h3>Our location:</h3>
                        <div><i class="icon far fa-map-marker-alt"></i>Level 1, Sydney Startup Hub</div>
                        <div>11 York Street</div>
                        <div>Sydney NSW 2000</div>
                        <div>Australia</div>
                    </div>

                    <div class="google-map me-lg-4 wow fadeInUp">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.945955093896!2d151.2029477116783!3d-33.8652836731163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae40d84468a5%3A0xc4c2c2ccbdd6044b!2sSydney%20Startup%20Hub!5e0!3m2!1sen!2sau!4v1700415298269!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" frameborder="0" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div v-if="!messageSent" class="col-lg-6 pls-lg-4 wow fadeInUp order-1 order-lg-2">
                    <form action="#" class="contact-form row">
                        <div class="col-12">
                            <input
                                v-model="field1" 
                                @input="e => field1error && checkEmptyField(e) && (field1error = false)" 
                                type="text" 
                                inputmode="text" 
                                placeholder="Name"
                            >
                            <div v-if="field1error" class="error-text">{{ errorText }}</div>
                        </div>
                        <div class="col-12">
                            <input
                                v-model="field2" 
                                @input="field2error && isEmailValid()"
                                type="email" 
                                inputmode="email" 
                                placeholder="Email"
                            >
                            <div v-if="field2error" class="error-text">{{ errorText }}</div>
                        </div>
                        <div class="col-12">
                            <textarea
                                v-model="field3" 
                                @input="e => field3error && checkEmptyField(e) && (field3error = false)" 
                                type="text" 
                                inputmode="text" 
                                placeholder="Write your message"
                            ></textarea>
                            <div v-if="field3error" class="error-text">{{ errorText }}</div>
                        </div>
                        <div class="col-12" v-if="field1error || field2error || field3error">
                            <InfoCard
                                type="error"
                                heading="There are some errors"
                                text="Please update the fields above. Some fields may be empty, too short, too long, or in the incorrect format."
                            />
                        </div>
                        <div class="col-12">
                            <BaseButton
                                @click.prevent="triggerChecks()"
                                :colour="'purple'" 
                                :fullWidth="store.mode == 'mobile' ? true : false"
                                :submit="true"
                            >Send</BaseButton>
                        </div>
                    </form>
                </div>

                <div v-if="messageSent" class="col-lg-6 pls-lg-4 wow fadeInUp order-1 order-lg-2">
                    <div class="row">
                        <div class="col-12">
                            <InfoCard
                                type="info"
                                heading="Message sent"
                                text="Thanks for contacting us, we're onto it! We'll process your message as soon as possible."
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="store.mode == 'desktop'" class="row mt-5">
                <h3>Our location:</h3>
                <div><i class="icon far fa-map-marker-alt"></i>Level 1, Sydney Startup Hub</div>
                <div>11 York Street</div>
                <div>Sydney NSW 2000</div>
                <div>Australia</div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { baseStore } from "@/stores"
const store = baseStore()
const router = useRouter()

const errorText = 'Please update this field'
const messageSent = ref(false)

const field1 = ref('') // name
const field2 = ref('') // email
const field3 = ref('') // message

const field1error = ref(false)
const field2error = ref(false)
const field3error = ref(false)

const triggerChecks = async () => {
    checkEmptyFields()
    isEmailValid()
    if(!field1error.value && !field2error.value && !field3error.value) {
        store.$state.spinner = true
        messageSent.value = false
        await new Promise(resolve => setTimeout(resolve, 3000))
        await sendEmail()
        messageSent.value = true
        window.scrollTo(0, 0)
        router.replace({ hash: store.mode == 'mobile' ? '?m-send-email' : '?d-send-email' })
        store.$state.spinner = false
    }
}

const checkEmptyField = (event) => {
    return event.target.value == '' || event.target.value.length < 3 ? false : true
}

const checkEmptyFields = () => {
    field1.value == '' || field1.value.length < 3 ? field1error.value = true : field1error.value = false
    field2.value == '' || field2.value.length < 3 ? field2error.value = true : field2error.value = false
    field3.value == '' || field3.value.length < 3 ? field3error.value = true : field3error.value = false
}

const isEmailValid = () => {
    (field2.value.includes('@')) && (field2.value.includes('.')) ? field2error.value = false : field2error.value = true
}

const sendEmail = async () => {
    const object = {
        "name": field1.value,
        "email": field2.value,
        "message": field3.value
    }
    try {
        await fetch('https://api.formium.io/submit/655ba0008716f20001e05741/contact-us', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        })
    }
    catch(e) {
        console.log('error: ', e)
    }
}
</script>

<style lang="scss">
@import './../style/_variables.scss';
@import './../style/pages/contact.scss';
#contact-us {
    background-color: $white3;

    .intro-text {
        margin-bottom: 40px;
    }

    .error-text {
        font-size: 15px;
        color: red;
        margin-top: -10px;
        margin-left: 5px;
        margin-bottom: 25px;
    }

    form {
        padding: 0px;
    }

    .icon {
        margin-right: 12px;
    }
}

.desktop-mode {
    #contact-us {
        padding: 100px 100px;

        .base-button {
            margin-top: 20px;
        }
    }
}

.mobile-mode {
    #contact-us {
        padding: 50px 15px;

        .base-button {
            margin-bottom: 140px;
        }
    }
}
</style>