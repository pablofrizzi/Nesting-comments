$(document).ready(main);

function main() {
    
   $('.comment-btn').one('click', showCommentForm); 
   commentContainer.on('click', '.publish-btn', renderComment);
    
    
}

var commentContainer = $('.comment-container');


function showCommentForm() {
    var commentForm = $(commentFormTemplate);

    commentForm.appendTo('.article');
    commentForm.fadeIn();
    
}

function renderComment() {
    var comment = $(commentTemplate);
    var commentForm = $(commentFormTemplate);
    var commentContainer = $('.comment-container');
    
    comment.find('.user-name').text(commentForm.find('.name').val() + ' writes:');
    comment.find('.user-comment').text(commentForm.find('.comment').val());
    comment.appendTo(commentContainer);
    comment.fadeIn();
    
    commentForm.fadeOut();
    
}

var commentFormTemplate = `
    <div class="comment-form form-group">
        <label for="name">Your name:</label>
        <input class="name form-control">
        <label for="comment">Comment:</label>
        <textarea class="comment form-control"></textarea>
        <button type="button" class="btn btn-default publish-btn">Publish</button>
    </div>
`;

var commentTemplate = `
    <div class="comment-publish">
        <h2 class="user-name"></h2>
        <p class="user-comment"></p>
        <button type="button" class="btn btn-default comment-btn">Comment</button>
    </div>
`;
