$(document).ready(main);

function main() {
    
   article.on('click', '.comment-btn', showCommentForm); 
    
}

var article = $('.article');
var commentContainer = $('.comment-container');

function createCommentForm() {
    
    var template = {
        
        commentFormDiv : "$('<div>').addClass('comment-form form-group')",
        commentFormNameLabel : "$('<label>').text('Your name:')",   
        commentFormInput : "$('<input>').addClass('name form-control')",
        commentFormTextLabel : "$('<label>').text('Comment:')",
        commentFormTextArea : "$('<textarea>').addClass('comment form-control')",
        commentFormPublishBtn : "$('<button>').text('Publish').addClass('btn btn-default publish-btn')"
        
    };
    
    template.commentFormDiv.append(template.commentFormNameLabel);
    template.commentFormDiv.append(template.commentFormInput);
    template.commentFormDiv.append(template.commentFormTextLabel);
    template.commentFormDiv.append(template.commentFormTextArea);
    template.commentFormDiv.append(template.commentFormPublishBtn);
    
}

function showCommentForm() {
    
//    var commentFormDiv = $('<div>').addClass('comment-form form-group');
//    var commentFormNameLabel = $('<label>').text('Your name:');   
//    var commentFormInput = $('<input>').addClass('name form-control');
//    var commentFormTextLabel = $('<label>').text('Comment:');
//    var commentFormTextArea = $('<textarea>').addClass('comment form-control');
//    var commentFormPublishBtn = $('<button>').text('Publish')
//                                             .addClass('btn btn-default publish-btn');
//    
//    
//    commentFormDiv.append(commentFormNameLabel);
//    commentFormDiv.append(commentFormInput);
//    commentFormDiv.append(commentFormTextLabel);
//    commentFormDiv.append(commentFormTextArea);
//    commentFormDiv.append(commentFormPublishBtn);
    
    createCommentForm();

    template.commentFormDiv.appendTo('.article');
    template.commentFormDiv.fadeIn();


    $('.publish-btn').on('click', renderComment);
    
    
    
}

function renderComment() {
    
    var commentDiv = $('<div>').addClass('comment-publish');
    var commentHeader = $('<h2>').addClass('user-name');
    var commentParagraph = $('<p>').addClass('user-comment');
    var commentBtn = $('<button>').text('Comment')
                                  .addClass('btn btn-default comment-btn');
    
    commentDiv.append(commentHeader);
    commentDiv.append(commentParagraph);
    commentDiv.append(commentBtn);
    
    
    var commentContainer = $('.comment-container');
    var commentForm = $('.comment-form');
    
    commentDiv.find('.user-name').text(commentForm.find('.name').val() + ' writes:');
    commentDiv.find('.user-comment').text(commentForm.find('.comment').val());
    commentDiv.appendTo(commentContainer);
    commentDiv.fadeIn();
    
    commentForm.fadeOut();
    
    
}

//var commentFormTemplate = `
//    <div class="comment-form form-group">
//        <label for="name">Your name:</label>
//        <input class="name form-control">
//        <label for="comment">Comment:</label>
//        <textarea class="comment form-control"></textarea>
//        <button type="button" class="btn btn-default publish-btn">Publish</button>
//    </div>
//`;
//
//var commentTemplate = `
//    <div class="comment-publish">
//        <h2 class="user-name"></h2>
//        <p class="user-comment"></p>
//        <button type="button" class="btn btn-default comment-btn">Comment</button>
//    </div>
//`;
