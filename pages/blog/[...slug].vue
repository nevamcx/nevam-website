<template>
    <section id="blog">
        <div class="container">
            <div class="row">
                <ContentDoc v-slot="{ doc }">
                    <article>
                        <h1>{{ doc.title }}</h1>
                        <div>
                            <span class="date bubble">{{ doc.date }}</span>
                            <span class="category bubble">{{ doc.category }}</span>
                        </div>
                        <div class="description">
                            {{ doc.description }}
                        </div>
                    </article>
                </ContentDoc>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import './../style/_variables.scss';
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
.bubble {
    color: #fff;
    border-radius: 25px;
    padding: 2px 10px;
    font-size: 14px;
    margin-right: 15px;
}
.date {
    background-color: $purple;
}
.category {
    background-color: $blue;
}
.description {
    margin-top: 30px;
}
</style>