document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    const commentText = document.getElementById('commentText');
    const commentContainer = document.getElementById('commentContainer');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const comment = commentText.value.trim();
        if (comment !== '') {
            addComment(comment);
            commentText.value = '';
        }
    });

    function addComment(comment) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = comment;
        commentContainer.appendChild(commentElement);
    }
});