export const getNewId = (id) => {
    switch (id.toString().length) {
        case 1:
            return `#00${id}`
        case 2:
            return `#0${id}`
        default:
            return `#${id}`
    }
}