$(document).ready(main);

function main() {
    
   article.on('click', '.comment-btn', function(){
   		showCommentForm($(this).parent());
   }); 
    
}

var article = $('.article');

function showCommentForm(hostEl) {
     
    var commentForm = $(commentFormTemplate);
         
    commentForm.appendTo(hostEl);
    commentForm.fadeIn();        
            
    commentForm.find('.publish-btn').on('click', function() {
    
    var name = commentForm.find('.name').val() + ' writes:';
    var text = commentForm.find('.comment').val();
    var hostEl = $(this).parent().parent();
        
    	renderComment(name, text, hostEl);
        
    });
        
}

function renderComment(name, text, hostEl) {
      
    var comment = $(commentTemplate);
        
    comment.find('.user-name').text(name);
    comment.find('.user-comment').text(text);
    comment.appendTo(hostEl);
   
    comment.fadeIn();
    $('.comment-form').fadeOut();
           
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
