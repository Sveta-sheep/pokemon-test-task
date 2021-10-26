export const getNewId = (id) => {
    let newId = '#'

    if (id.toString().length === 1) {
        newId += `00${id}`
    } else if (id.toString().length === 2) {
        newId += `0${id}`
    } else if (id.toString().length === 3) {
        newId += `${id}`
    } else {
        newId += id
    }
    return newId;
}