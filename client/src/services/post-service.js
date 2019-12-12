const postService = {
    addToCollection: function (data) {
        // Check this
        // console.log(data);
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
    }
}

export default postService;