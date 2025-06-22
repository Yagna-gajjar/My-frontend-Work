let collectionTags = document.querySelectorAll('.collection-itemtag')
let collections = document.querySelectorAll('.section')
changeTag("female");
collectionTags.forEach((item) => {
    item.addEventListener('click', () => {
        changeTag(item.id);
    })
})

function changeTag(collectionTagName) {
    collectionTags.forEach((item) => {
        if (item.id == collectionTagName) {
            document.getElementById(collectionTagName).style.backgroundColor = 'var(--accent-dark-50)'
        } else {
            document.getElementById(item.id).style.backgroundColor = 'var(--accent-dark)'
        }
    })

    collections.forEach((item) => {

        if (item.id == collectionTagName + '-section') {
            document.getElementById(collectionTagName + '-section').style.display = 'grid'
        } else {
            document.getElementById(item.id).style.display = 'none'
        }

    })
}