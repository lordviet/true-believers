const postService = {
    getComic: function (comicId) {
        return fetch(`http://localhost:8080/api/comicbook/${comicId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    },

    getAllComics: function () {
        return fetch(`http://localhost:8080/api/comicbook`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    },

    addToCollection: function (data) {
        return fetch('http://localhost:8080/api/comicbook', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    },

    deleteFromCollection: function (comicId) {
        return fetch(`http://localhost:8080/api/comicbook/${comicId}`, {
            method: 'DELETE',
            credentials: 'include'
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    }
}

export default postService;