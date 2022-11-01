

const delButtonHandler = async (event) => {
  
  if(event.target.id==='del-link') {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/recipes/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  if(event.target.id==='edit-link')
    document.location.replace('/profile');
  };


document
  .querySelector('#recipe-list')
  .addEventListener('click', delButtonHandler);
