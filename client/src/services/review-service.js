const reviewService = {
    getAllUserReviews: function () {
        return fetch(`http://localhost:8080/api/review/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json())
            .catch(err => console.error(err));
    },
    getUserReview: function (comicId) {
        return fetch(`http://localhost:8080/api/review/user/${comicId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json())
            .catch(err => console.error(err));
    },
    getAllReviews: function (id) {
        return fetch(`http://localhost:8080/api/review/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json())
            .catch(err => console.error(err));
    },
    addReview: function (data) {
        return fetch('http://localhost:8080/api/review', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json())
            .catch(err => console.error(err));
    },
    editReview: function (comicId, review) {
        let data = { review };
        return fetch(`http://localhost:8080/api/review/${comicId}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.text())
            .catch(err => console.error(err));
    },
    deleteReview: function (comicId) {
        return fetch(`http://localhost:8080/api/review/${comicId}`, {
            method: 'DELETE',
            credentials: 'include'
        }).then(res => res.json())
            .catch(err => console.error(err));
    }
}

export default reviewService;