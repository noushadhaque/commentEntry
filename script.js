// add comment
document.getElementById('btn-post').addEventListener('click', function(){
    const writeComment = document.getElementById('write-comment');
    
    const newComment = document.createElement('p');

    newComment.innerText = writeComment.value;

    writeComment.value = '';

    const commentContainer = document.getElementById('comment-container');

    commentContainer.appendChild(newComment); 
})