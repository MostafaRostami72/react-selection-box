export const array_unique = (array) => {
    return array.filter(function (item, key) {
        return (array.indexOf(item) === key);
    })
};