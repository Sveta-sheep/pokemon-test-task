export const setFirstLetterToUpperCase = (name) => {
    return name.replace(/./, name[0].toUpperCase())
}