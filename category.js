const categoryForm = document.getElementById('categoryForm');
const categoryList = document.getElementById('categoryList');
const backendUrl = 'http://localhost:5000/api/categories';

categoryForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const category = {
    name: document.getElementById('name').value,
  };

  const res = await fetch(backendUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(category),
  });

  await res.json();
  categoryForm.reset();
  fetchCategories();
});

async function fetchCategories() {
  const res = await fetch(backendUrl);
  const categories = await res.json();
  categoryList.innerHTML = '';

  categories.forEach(cat => {
    const li = document.createElement('li');
    li.textContent = cat.name;
    categoryList.appendChild(li);
  });
}

fetchCategories();
