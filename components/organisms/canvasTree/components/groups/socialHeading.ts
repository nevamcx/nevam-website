import { square } from '../elements/square'
import { image } from '../elements/image'
import { text } from '../elements/text'

export const socialHeading = (context, x, y, width, color, icon, name) => {

    const headingPadding = 5

    // rectangle
    square(
        'visible',
        context,
        x,
        y,
        width,
        60, // height
        20, // radius
        color,
        true,
        false
    )

    // icon
    image(
        context,
        icon,
        x + headingPadding,
        y + headingPadding,
        50, // width
        50 // height
    )

    // text
    text(
        context,
        name,
        x + 75,
        y + 34,
        '15px',
        '#000000'
    )
}