import { square } from '../elements/square'
import { image } from '../elements/image'
import { textWrap } from '../elements/textWrap'
import { text } from '../elements/text'
import { trimString } from './../../../../../composables/functions'

export const socialCards = (context, x, y, width, height, radius, color, posts) => {

    const padding = 20

    var offset = 95
    const spacing = 40

    posts.forEach((post) => {

        square(
            'visible',
            context,
            x,
            y + offset,
            width,
            height,
            20,
            '#FFFFFF',
            true,
            false
        )

        // date
        text(
            context,
            post.date,
            x + 22,
            y + 37 + offset,
            '18px',
            '#000000'
        )

        // time
        text(
            context,
            post.time,
            x + 22 + 140,
            y + 37 + offset,
            '18px',
            '#000000'
        )

        // description
        textWrap(
            context,
            trimString(post.text, 100),
            x + padding,
            y + padding + 50 + offset,
            width - padding - 10, // max width
            '12px',
            15, // line height
            '#aaaaaa'
        )

        // image
        image(
            context,
            post.image,
            x + padding,
            y + padding + 100 + offset,
            200, // width
            200 // height
        )

        offset += height + spacing
    })
}