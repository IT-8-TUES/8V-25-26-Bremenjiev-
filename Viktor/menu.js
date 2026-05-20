const products = [
    { id: 1, name: "Тирамису", category: "klasicheski", type: "kremoobrazni", price: 7.90,
      description: "Маскарпоне, прясно еспресо и какао – върху савоярди, накиснати в марсала.",
      image: "images/menu/tiramisu.avif" },
    { id: 2, name: "Крем брюле", category: "klasicheski", type: "kremoobrazni", price: 7.50,
      description: "Кадифен ванилов крем с хрупкава карамелизирана коричка, поднесен с пресни плодове.",
      image: "images/menu/Crème brûlée.avif" },
    { id: 3, name: "Афогато", category: "klasicheski", type: "kremoobrazni", price: 6.50,
      description: "Топка ванилов сладолед, полят с горещо еспресо – проста, но изящна италианска класика.",
      image: "images/menu/afogato.avif" },
    { id: 4, name: "Шоколадов фондан", category: "klasicheski", type: "shokoladov", price: 8.50,
      description: "Печен в момента кейк с топящо се сърце от 70% белгийски шоколад и топка сладолед.",
      image: "images/menu/chocolate fondant.avif" },
    { id: 5, name: "Ябълков тарт", category: "klasicheski", type: "plodov", price: 7.20,
      description: "Карамелизирани ябълки върху хрупкаво маслено тесто, поднесен със сладолед.",
      image: "images/menu/apple tart.avif" },
    { id: 6, name: "Чийзкейк с малини", category: "klasicheski", type: "plodov", price: 7.50,
      description: "Гладък крем от Филаделфия върху бисквитена основа, с компот от пресни малини.",
      image: "images/menu/Raspberry Cheesecake.avif" },
    { id: 7, name: "Лимонова целувка", category: "klasicheski", type: "plodov", price: 6.90,
      description: "Маслена кора, крем от прясно изцеден лимон и обгорена италианска целувка отгоре.",
      image: "images/menu/Lemon kiss.avif" },
    { id: 8, name: "Наполеон", category: "klasicheski", type: "kremoobrazni", price: 7.50,
      description: "Три хрупкави листа маслено тесто между слоеве лек ванилов крем и пудра захар.",
      image: "images/menu/Special Napoleon dessert.avif" },
    { id: 9, name: "Брауни с ванилов сладолед", category: "klasicheski", type: "shokoladov", price: 7.50,
      description: "Топло шоколадово брауни с печени орехи, топка ванилов сладолед и карамел.",
      image: "images/menu/Brownie with vanilla ice cream.avif" },
    { id: 10, name: "Трио сорбе „Камист“", category: "avtorski", type: "plodov", price: 6.50,
      description: "Три домашни сорбета – манго, малина и лимон-базилик. Освежаващ финал.",
      image: "images/menu/Trio sorbet Kamist.avif" },
    { id: 11, name: "Шамфъстъков мус", category: "avtorski", type: "kremoobrazni", price: 8.50,
      description: "Лек мус от печен шамфъстък с нотки на ванилия и хрупкав бадемов крокант.",
      image: "images/menu/Pistachio mousse.avif" },
    { id: 12, name: "Малинов тарт", category: "avtorski", type: "plodov", price: 7.50,
      description: "Маслена тарт основа с ванилов крем от сметана и маскарпоне, покрита с пресни малини.",
      image: "images/menu/Raspberry tart.avif" }
];
const BGN_PER_EUR = 1.95583;
const typeLabels = { kremoobrazni: "Кремообразни", shokoladov: "Шоколадов", plodov: "Плодов" };
const catSelect = document.getElementById('catSelect');
const typeSelect = document.getElementById('typeSelect');
const searchBox = document.getElementById('searchBox');
const grid = document.getElementById('menuGrid');
const emptyState = document.getElementById('emptyState');
function render() {
    const cat = catSelect.value;
    const type = typeSelect.value;
    const search = searchBox.value.trim().toLowerCase();
    const filtered = products.filter(p =>
        (cat === 'all' || p.category === cat) &&
        (type === 'all' || p.type === type) &&
        p.name.toLowerCase().includes(search)
    );
    emptyState.style.display = filtered.length ? 'none' : 'block';
    grid.innerHTML = filtered.map(p => `
        <article class="card">
            <img src="${p.image}" alt="${p.name}">
            <div class="card-body">
                <span class="tag">${typeLabels[p.type] || p.type}</span>
                <h3>${p.name}</h3>
                <p>${p.description}</p>
                <div class="card-foot">
                    <span class="price">${p.price.toFixed(2)} лв / ${(p.price / BGN_PER_EUR).toFixed(2)} €</span>
                    <button class="buy-btn" data-id="${p.id}">Добави</button>
                </div>
            </div>
        </article>
    `).join('');
}
grid.addEventListener('click', e => {
    const btn = e.target.closest('.buy-btn');
    if (!btn) return;
    const id = +btn.dataset.id;
    const product = products.find(p => p.id === id);
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item => item.id === id);
    if (existing) existing.qty += 1;
    else cart.push({ id, name: product.name, price: product.price, image: product.image, qty: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    btn.textContent = 'Добавено ✓';
    setTimeout(() => btn.textContent = 'Добави', 1000);
});
[catSelect, typeSelect, searchBox].forEach(el =>
    el.addEventListener('input', render));
render();
const topBtn = document.getElementById('to-top');
window.addEventListener('scroll', () =>
    topBtn.classList.toggle('show', window.scrollY > 300));
topBtn.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' }));