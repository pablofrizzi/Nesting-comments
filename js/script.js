$(document).ready(main);

function main() {
    
   commentButton.on('click', showCommentForm); 
   publishButton.on('click', renderComment);
    
    
}


var commentButton = $('.comment-btn');
var publishButton = $(commentFormTemplate).find('.publish-btn');



function showCommentForm() {
    var commentForm = $(commentFormTemplate);

    commentForm.appendTo('.article');
    commentForm.fadeIn();
    
}

function renderComment() {
    var comment = $(commentTemplate);
    var commentForm = $(commentFormTemplate);
    
    comment.find('.user-name').text(commentForm.find('.name').val() + ' writes:');
    comment.find('.user-comment').text(commentForm.find('.comment').val());
    comment.appendTo('.comment-container');
    
    commentForm.fadeOut();
    
}

var commentFormTemplate = `
    <div class="comment-form form-group">
        <label for="name">Your name:</label>
        <input class="name form-control">
        <label for="comment">Comment:</label>
        <textarea class="comment form-control"></textarea>
        <button type="button" class="publish-btn btn btn-default">Publish</button>
    </div>
`;

var commentTemplate = `
    <div class="comment-publish">
        <h2 class="user-name"></h2>
        <p class="user-comment"></p>
        <button type="button" class="comment-btn btn btn-default">Comment</button>
    </div>
`;
