<template>
    <Callout
        :effect="false"
        :heading="'Blog'"
        :text="'Welcome to our blog! We often post here so please check in often or subscribe to stay up to date...'"
        :slug="'callout-3'"
    />
    <section id="blog">
        <div class="container">
            <div class="row">
                <slot>
                    <ContentList path="/blog" v-slot="{ list }">
                        <div v-for="blog in list" :key="blog._path" class="blog-card">
                            <a @click.prevent="navigateTo(blog._path)" class="blog-link"><h4>{{ blog.title }}</h4></a>
                            <div class="blog-intro">{{ blog.intro }}</div>
                            <div>
                                <span class="date bubble">{{ blog.date }}</span>
                                <span class="category bubble">{{ blog.category }}</span>
                            </div>
                        </div>
                    </ContentList>
                </slot>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import '~/assets/style/_variables.scss';
#blog {
    .blog-card {
        margin-bottom: 50px;
    }
    .bubble {
        color: #fff;
        border-radius: 25px;
        padding: 2px 10px;
        font-size: 14px;
        margin-right: 15px;
    }
    .date {
        background-color: $blue;
    }
    .category {
        background-color: $blueMedium;
    }
}
.desktop-mode {
    #blog {
        padding: 100px 100px;
    }
    #callout-3 {
        .text {
            width: 70%;
            margin: auto;
        }
    }
}
.mobile-mode {
    #blog {
        padding: 50px 15px;
    }
    #callout-3 {
        .heading h2 {
            font-size: 30px;
            font-weight: 500;
        }
    }
}
</style>