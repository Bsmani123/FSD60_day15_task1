
// Pagination logic
function createPagination(totalPages, currentPage) {
  const container = document.getElementById('pagination-container');
  const ul = document.createElement('ul');
  ul.className = 'pagination';
  
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = i;
    if (i === currentPage) {
      a.className = 'active';
    }
    a.addEventListener('click', (e) => {
      e.preventDefault();
      createPagination(totalPages, i);
    });
    li.appendChild(a);
    ul.appendChild(li);
  }
  
  container.innerHTML = '';
  container.appendChild(ul);
}

// Initial pagination setup
createPagination(10, 1);