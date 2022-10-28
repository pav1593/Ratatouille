//--------------create comment----------------

const submitComment = document.querySelector('#comment-submit');

const submitCommentHandler = async (event) => {
    const comment = document.querySelector('#comment').value.trim();
    const rating = document.querySelector('#rating').value.trim();
    const recipe_id = window.location.toString().split('/')[
        window.location.toString.split('/').length - 1
    ];

    if (comment && rating) {
       const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({comment, rating, recipe_id}),
        headers: {
            'Content-Type': 'application/json',
       }
    });
    //direct back to recipe if response ok.
    if (response.ok) {
        document.location.replace('/api/recipe');
    }else {
        alert('Failed to create a comment');
    }
    }
};

submitComment.addEventListener('submit', submitCommentHandler);


//-----------------delete comment--------------------
const deleteComment = document.querySelector('#comment-delete');

const deleteCommentHandler = async (event) => {
    if(event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/comments/${id}`, {
            method:'DELETE',
        });
        //direct to the recipe page after deleting the comment;
        if(response.ok) {
            document.location.replace('/recipe')
        } else {
            alert('Failed to delete comment');
        }
    }
};

deleteComment.addEventListener('click', deleteCommentHandler);