$(document).ready(main);

function main() {
    
   article.on('click', '.comment-btn', function(){
   		showCommentForm('.article');
   }); 
    
}

var article = $('.article');
var commentContainer = $('.comment-container');

function showCommentForm(hostEl) {
     
    var commentForm = $(commentFormTemplate);
         
    commentForm.appendTo(hostEl);
    commentForm.fadeIn();        
            
    commentForm.find('.publish-btn').on('click', function() {
    	
    	renderComment(commentForm.find('.name').val() + ' writes:', commentForm.find('.comment').val(), commentContainer);
        
    });
        
}

function renderComment(name, text, hostEl) {
      
    var comment = $(commentTemplate);
    var commentContainer = $('.comment-container');
    var commentForm = $('.comment-form');
        
    comment.find('.user-name').text(name);
    comment.find('.user-comment').text(text);
    comment.appendTo(hostEl);
    comment.fadeIn();
    commentForm.fadeOut();
    
    comment.find('.comment-btn').on('click', function(){
       
        showCommentForm(commentContainer.find('.comment-publish'));
         
    });
       
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
