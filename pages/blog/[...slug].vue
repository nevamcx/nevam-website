<template>
    <section id="blog">
        <div class="container">
            <div class="row">
                <ContentDoc v-slot="{ doc }">
                    <article>
                        <div class="content">
                            <ContentRenderer :value="doc" />
                        </div>
                        <div class="bubbles">
                            <span class="date bubble">{{ doc.date }}</span>
                            <span class="category bubble">{{ doc.category }}</span>
                        </div>
                    </article>
                </ContentDoc>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import '~/assets/style/_variables.scss';
.desktop-mode {
    #blog {
        padding: 100px 100px;
    }
}
.mobile-mode {
    #blog {
        padding: 50px 15px;
    }
}

#blog img {
    margin-top: 50px;
    margin-bottom: 50px;
}
#blog h2 {
    margin-top: 40px;
}
#blog ul {
    list-style-type: disc;
    padding-left: 20px;
}
#blog ul li {
    list-style: initial;
    padding-left: 10px;
}
#blog .bubbles {
    margin-top: 50px;
}
#blog .bubble {
    color: #fff;
    border-radius: 25px;
    padding: 2px 10px;
    font-size: 14px;
    margin-right: 15px;
}
#blog .date {
    background-color: $blue;
}
#blog .category {
    background-color: $blue;
}
</style>