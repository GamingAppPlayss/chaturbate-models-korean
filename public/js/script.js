document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('load-more');
    const modelGrid = document.getElementById('model-grid');
    let models = [];
    let displayedCount = 40;
    const batchSize = 40;

    if (loadMoreBtn) {
        // Fetch all models
        fetch('/models.json')
            .then(response => response.json())
            .then(data => {
                models = data;
                if (models.length <= displayedCount) {
                    loadMoreBtn.style.display = 'none';
                }
            })
            .catch(err => console.error('Error loading models:', err));

        loadMoreBtn.addEventListener('click', () => {
            const nextBatch = models.slice(displayedCount, displayedCount + batchSize);
            
            nextBatch.forEach(model => {
                const slug = model.slug || model.username.toLowerCase().replace(/[^a-z0-9]/g, '');
                const card = document.createElement('div');
                card.className = 'model-card';
                card.innerHTML = `
                    <a href="/model/${slug}" class="block h-full">
                        <div class="relative pb-[56.25%]">
                            <img src="${model.image_url}" alt="${model.username}" class="absolute top-0 left-0 w-full h-full object-cover" loading="lazy">
                            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-white">
                                <div class="font-bold">${model.username}</div>
                                <div class="text-xs flex justify-between">
                                    <span>${model.age}세</span>
                                    <span>${model.num_users}명 시청중</span>
                                </div>
                            </div>
                        </div>
                    </a>
                `;
                modelGrid.appendChild(card);
            });

            displayedCount += nextBatch.length;

            if (displayedCount >= models.length) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }
});
