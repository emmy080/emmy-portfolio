function likePost(button) {
    const likeCount = button.nextElementSibling;
    let count = parseInt(likeCount.textContent);
    count++;
    likeCount.textContent = count;
  }

  function toggleComments(link) {
    const commentSection = link.parentElement.nextElementSibling;
    if (commentSection.style.display === 'none' || commentSection.style.display === '') {
      commentSection.style.display = 'block';
      link.textContent = 'Hide comments';
    } else {
      commentSection.style.display = 'none';
      link.textContent = 'View comments';
    }
  }

  function handleComment(event, input) {
    if (event.key === 'Enter' && input.value.trim() !== '') {
      const commentText = input.value;
      const commentContainer = input.previousElementSibling;

      const newComment = document.createElement('div');
      newComment.className = 'comment';
      newComment.textContent = commentText;

      commentContainer.appendChild(newComment);
      input.value = '';
    }
  }