// Base de datos de recetas con las extensiones exactas de tus archivos
const bebidasData = [
    { 
        id: 'margarita', 
        nombre: 'Margarita', 
        categoria: 'con-alcohol',
        subcategoria: 'tequila',
        icono: 'margarita.png',
        imagenMain: 'margarita-main.jpg',
        descripcion: 'La Margarita es un cóctel clásico mexicano a base de tequila, licor de naranja (como triple sec o Cointreau) y jugo de lima o limón, servido tradicionalmente con sal en el borde del vaso. Es una de las bebidas más reconocidas de la coctelería internacional y un símbolo de la cultura gastronómica mexicana.',
        detallesHTML: `
            <p><strong>Ingredientes base:</strong> Tequila, licor de naranja, jugo de lima.</p>
            <p><strong>Servida en:</strong> Copa Margarita o vaso de tu preferencia con sal en el borde.</p>
        `
    },
    { 
        id: 'naranjada', 
        nombre: 'Naranjada', 
        categoria: 'sin-alcohol',
        subcategoria: null,
        icono: 'naranjada.png',
        imagenMain: 'naranjada.png',
        descripcion: 'Una refrescante bebida natural preparada a base de jugo de naranja fresco, agua (mineral o natural) y endulzada al gusto. Es una opción ideal y saludable para acompañar cualquier comida o refrescarse durante el día.',
        detallesHTML: `
            <p><strong>Ingredientes base:</strong> Jugo de naranja natural, agua mineral o natural, jarabe endulzante.</p>
            <p><strong>Servicio:</strong> Frío con bastantes cubos de hielo y una rodaja de naranja para decorar.</p>
        `
    },
    { 
        id: 'shirley-temple', 
        nombre: 'Shirley Temple', 
        categoria: 'mocktails',
        subcategoria: null,
        icono: 'Shirley-Temple.png',
        imagenMain: 'Shirley-Temple.png',
        descripcion: 'El Shirley Temple es el mocktail (cóctel sin alcohol) más famoso del mundo. Una deliciosa y dulce combinación de refresco de lima-limón, un toque de granadina y cerezas al marrasquino, ideal para todas las edades.',
        detallesHTML: `
            <p><strong>Ingredientes base:</strong> Refresco de lima-limón (o ginger ale), jarabe de granadina, cerezas.</p>
            <p><strong>Presentación:</strong> Vaso alto con hielo, decorado con una rodaja de limón y cerezas.</p>
        `
    },
    { 
        id: 'tequila-sunrise', 
        nombre: 'Tequila Sunrise', 
        categoria: 'con-alcohol',
        subcategoria: 'tequila',
        icono: 'teequila-sunrise.png', 
        imagenMain: 'teequila-sunrise-main.jpeg',
        descripcion: 'El Tequila Sunrise es un cóctel clásico elaborado con tequila, jugo de naranja y jarabe de granadina. Reconocido por su efecto visual en degradado —que evoca un amanecer—, combina sabores cítricos y dulces en una bebida refrescante, símbolo de la coctelería de los años setenta.',
        detallesHTML: `
            <p><strong>Bebida alcohólica:</strong> Tequila blanco</p>
            <p><strong>Preparación típica:</strong> Directa en vaso alto (sin shaker)</p>
            <p><strong>Tiempo de preparación:</strong> 3–5 minutos</p>
            <p><strong>Servicio:</strong> Frío, con hielo, rodaja de naranja y cereza</p><br>
            <p><strong>Ingredientes y preparación:</strong> Una receta estándar incluye 45 ml de tequila, 90 ml de jugo de naranja natural y 15 ml de granadina. Se vierte la tequila con el jugo sobre hielo en un vaso largo y luego se añade lentamente la granadina para crear el característico degradado rojizo. Se decora con una rodaja de naranja y una cereza marrasquino.</p>
        `
    },
    { 
        id: 'mojito', 
        nombre: 'Mojito', 
        categoria: 'con-alcohol',
        subcategoria: 'ron',
        icono: 'mojito.png',
        imagenMain: 'mojito-main.jpeg',
        descripcion: 'El mojito es un cóctel clásico cubano elaborado con ron blanco, jugo de lima, menta fresca, azúcar y agua con gas. Su equilibrio entre dulzura, acidez y frescura lo ha convertido en una de las bebidas veraniegas más populares del mundo y un ícono de la coctelería caribeña.',
        detallesHTML: `
            <p><strong>Ingredientes tradicionales:</strong> Menta (Hierba Buena), jugo de lima, azúcar, soda, hielo.</p><br>
            <p><strong>Elaboración clásica:</strong> Para un mojito tradicional se colocan hojas de menta y azúcar en un vaso alto y se presionan suavemente para liberar los aceites. Se añaden jugo de lima y ron blanco, se mezcla, se incorpora hielo picado y se completa con soda. Se decora con una ramita de menta y una rodaja de lima. La clave está en no triturar excesivamente la menta para evitar amargor.</p>
        `
    },
    { 
        id: 'piña-colada', 
        nombre: 'Piña Colada', 
        categoria: 'con-alcohol',
        subcategoria: 'ron',
        icono: 'piña-colada.png',
        imagenMain: 'piña-colada-main.jpeg',
        descripcion: 'La Piña Colada es un cóctel tropical elaborado con ron, crema de coco y jugo de piña, tradicionalmente servido con hielo. Es una bebida emblemática del Caribe, asociada especialmente con Puerto Rico, donde se considera la bebida nacional.',
        detallesHTML: `
            <p><strong>Ingredientes principales:</strong> Ron blanco, crema de coco, jugo de piña.</p><br>
            <p><strong>Preparación:</strong> Se prepara en licuadora mezclando ron, crema de coco y jugo de piña con hielo hasta lograr una textura cremosa. Algunas versiones sustituyen el ron blanco por ron dorado o añaden leche condensada para mayor dulzura.</p>
        `
    },
    { 
        id: 'moscow-mule', 
        nombre: 'Moscow Mule', 
        categoria: 'con-alcohol',
        subcategoria: 'vodka',
        icono: 'moscow-mule.png',
        imagenMain: 'moscow-mule-main.jpg',
        descripcion: 'El Moscow Mule es un cóctel clásico elaborado con vodka, cerveza de jengibre y jugo de lima, tradicionalmente servido en una taza de cobre. Se destaca por su sabor fresco, picante y ligeramente cítrico. Popularizado en Estados Unidos en la década de 1940, ayudó a impulsar el consumo de vodka en el país.',
        detallesHTML: `
            <p><strong>Mezcladores:</strong> Cerveza de jengibre y jugo de lima.</p>
            <p><strong>Vaso típico:</strong> Taza de cobre.</p><br>
            <p><strong>Preparación y presentación:</strong> Para elaborarlo, se mezcla vodka con jugo fresco de lima y se completa con cerveza de jengibre sobre hielo picado o en cubos. La bebida se sirve en una taza de cobre, que conserva el frío y resalta la sensación refrescante. Puede decorarse con una rodaja de lima o una ramita de menta.</p>
        `
    },
    { 
        id: 'bloody-mary', 
        nombre: 'Bloody Mary', 
        categoria: 'con-alcohol',
        subcategoria: 'vodka',
        icono: 'bloody-mary.png',
        imagenMain: 'bloody-mary-main.jpeg',
        descripcion: 'El Bloody Mary es un cóctel clásico preparado principalmente con vodka y jugo de tomate. Se caracteriza por su sabor salado, ligeramente picante y refrescante. Es una bebida muy popular en desayunos tardíos (brunch) y reuniones sociales.',
        detallesHTML: `
            <p><strong>Ingredientes principales:</strong> Vodka, jugo de tomate, Jugo de limón, Salsa Worcestershire, salsa picante, Sal y pimienta.</p>
            <p><strong>Decoración tradicional:</strong> Tallo de apio, Rodaja de limón, Aceitunas o pepinillos.</p><br>
            <p><strong>Procedimiento:</strong><br>
            1. Llena un vaso alto con hielo.<br>
            2. Agrega el vodka y el jugo de tomate.<br>
            3. Incorpora el jugo de limón.<br>
            4. Añade la salsa Worcestershire, la salsa picante, la sal y la pimienta.<br>
            5. Mezcla suavemente con una cuchara larga hasta integrar todos los ingredientes.<br>
            6. Decora con un tallo de apio y una rodaja de limón.<br>
            7. Sirve inmediatamente.</p>
        `
    }
];

let seleccionActual = {
    menuNivel: 'principal', 
    categoria: null,
    subcategoria: null,
    tamaño: null,
    bebida: null
};

document.addEventListener('DOMContentLoaded', () => {
    const btnLogo = document.getElementById('btn-logo');
    const dynamicMenu = document.getElementById('dynamic-menu-container');
    const sizeBtns = document.querySelectorAll('.size-btn');
    const contentWrapper = document.getElementById('panel-content-wrapper');
    const rightPanelInfo = document.getElementById('info-status-panel');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    cargarPantallaInicioOriginal();

    btnLogo.addEventListener('click', () => {
        seleccionActual = { menuNivel: 'principal', categoria: null, subcategoria: null, tamaño: null, bebida: null };
        sizeBtns.forEach(b => b.classList.remove('active'));
        renderizarMenuLateral();
        cargarPantallaInicioOriginal();
        actualizarPanelDerecho();
    });

    function cargarPantallaInicioOriginal() {
        contentWrapper.innerHTML = `
            <div class="welcome-text">
                <p class="headline">Bienvenido a la página de Chichabebidas, aquí podrás encontrar un menú de distintas bebidas que tu mismo puedes realizar.</p>
                <p class="subheadline">Selecciona la bebida de tu preferencia para visualizar su método de preparación y su información general.</p>
            </div>
            
            <div class="drinks-grid">
                <button class="drink-item-btn" data-drink="margarita">
                    <img src="imagenes/margarita.png" alt="Margarita">
                    <span>MARGARITA</span>
                </button>
                <button class="drink-item-btn" data-drink="naranjada">
                    <img src="imagenes/naranjada.png" alt="Naranjada">
                    <span>NARANJADA</span>
                </button>
                <button class="drink-item-btn" data-drink="shirley-temple">
                    <img src="imagenes/Shirley-Temple.png" alt="Shirley Temple">
                    <span>SHIRLEY TEMPLE</span>
                </button>
            </div>
        `;
        rebindDrinkButtons();
    }

    function renderizarMenuLateral() {
        if (seleccionActual.menuNivel === 'principal') {
            dynamicMenu.innerHTML = `
                <button class="category-btn" data-category="con-alcohol">Con alcohol</button>
                <button class="category-btn" data-category="sin-alcohol">Sin alcohol</button>
                <button class="category-btn" data-category="mocktails">Mocktails</button>
            `;
            
            dynamicMenu.querySelectorAll('.category-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const cat = btn.getAttribute('data-category');
                    
                    if (cat === 'con-alcohol') {
                        seleccionActual.menuNivel = 'destilados';
                        seleccionActual.categoria = 'con-alcohol';
                        renderizarMenuLateral();
                        
                        contentWrapper.innerHTML = `
                            <div class="welcome-text">
                                <p class="headline" style="font-size: 32px; margin-top: 20px;">Tipo de Destilado</p>
                            </div>
                            <div class="drinks-grid" id="submenu-drinks-grid">
                                <p style="font-family:'Bebas Neue'; font-size:24px; opacity:0.6; text-align:center; width:100%;">Selecciona un destilado en el menú izquierdo</p>
                            </div>
                        `;
                        actualizarPanelDerecho();
                    } else {
                        seleccionActual.categoria = cat;
                        seleccionActual.subcategoria = null;
                        seleccionActual.bebida = null;
                        
                        const filtradas = bebidasData.filter(b => b.categoria === cat);
                        contentWrapper.innerHTML = `
                            <div class="welcome-text">
                                <p class="headline">${cat.replace('-', ' ').toUpperCase()}</p>
                            </div>
                            <div class="drinks-grid" id="submenu-drinks-grid"></div>
                        `;
                        renderSubmenuGrid(filtradas);
                        actualizarPanelDerecho();
                    }
                });
            });
        } 
        else if (seleccionActual.menuNivel === 'destilados') {
            dynamicMenu.innerHTML = `
                <button class="category-btn" data-sub="tequila">Tequila</button>
                <button class="category-btn" data-sub="vodka">Vodka</button>
                <button class="category-btn" data-sub="ron">Ron</button>
            `;

            dynamicMenu.querySelectorAll('.category-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    dynamicMenu.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    const sub = btn.getAttribute('data-sub');
                    seleccionActual.subcategoria = sub;
                    seleccionActual.bebida = null;
                    
                    contentWrapper.innerHTML = `
                        <div class="welcome-text">
                            <p class="headline" style="font-size: 32px; margin-top: 20px;">Opciones con ${sub.toUpperCase()}</p>
                        </div>
                        <div class="drinks-grid" id="submenu-drinks-grid"></div>
                    `;
                    
                    const filtradas = bebidasData.filter(b => b.subcategoria === sub);
                    renderSubmenuGrid(filtradas);
                    actualizarPanelDerecho();
                });
            });
        }
    }

    function renderSubmenuGrid(lista) {
        const grid = document.getElementById('submenu-drinks-grid');
        if(!grid) return;
        grid.innerHTML = '';

        lista.forEach(b => {
            const btn = document.createElement('button');
            btn.className = 'drink-item-btn';
            // Se concatena la ruta de la carpeta "imagenes"
            btn.innerHTML = `
                <img src="imagenes/${b.icono}" alt="${b.nombre}">
                <span>${b.nombre.toUpperCase()}</span>
            `;
            btn.addEventListener('click', () => {
                seleccionActual.bebida = b.nombre;
                mostrarFichaTecnicaReceta(b);
                actualizarPanelDerecho();
            });
            grid.appendChild(btn);
        });
    }

    function mostrarFichaTecnicaReceta(bebida) {
        // Se concatena la ruta de la carpeta "imagenes" al contenedor central principal
        contentWrapper.innerHTML = `
            <div class="drink-detail-view" style="width: 100%; display: flex; gap: 30px; align-items: flex-start; text-align: left;">
                <img src="imagenes/${bebida.imagenMain}" alt="${bebida.nombre}" style="width: 220px; height: auto; border-radius: 6px; box-shadow: 0 6px 15px rgba(0,0,0,0.25);">
                <div style="flex: 1;">
                    <h2 style="font-family: 'Bebas Neue', sans-serif; font-size: 38px; margin-bottom: 15px; letter-spacing: 1px;">${bebida.nombre.toUpperCase()}</h2>
                    <p style="font-family: 'Lato', sans-serif; font-size: 16px; margin-bottom: 20px; line-height: 1.5; color: #1a1a1a;">${bebida.descripcion}</p>
                    <div class="receta-cuerpo-detalles" style="font-family: 'Lato', sans-serif; font-size: 15px; color: #000;">
                        ${bebida.detallesHTML}
                    </div>
                </div>
            </div>
        `;
    }

    function rebindDrinkButtons() {
        document.querySelectorAll('.drink-item-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const dId = btn.getAttribute('data-drink');
                const bObj = bebidasData.find(b => b.id === dId);
                if(bObj) {
                    seleccionActual.bebida = bObj.nombre;
                    seleccionActual.categoria = bObj.categoria;
                    seleccionActual.subcategoria = bObj.subcategoria;
                    mostrarFichaTecnicaReceta(bObj);
                    actualizarPanelDerecho();
                }
            });
        });
    }

    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            seleccionActual.tamaño = btn.getAttribute('data-size');
            actualizarPanelDerecho();
        });
    });

    function actualizarPanelDerecho() {
        rightPanelInfo.classList.remove('status-empty');
        let textoHtml = `<strong style="color: #7FDBB6; display:block; margin-bottom:12px; font-size:16px;">SELECCIÓN:</strong>`;
        
        if (seleccionActual.categoria) {
            textoHtml += `• <strong>Categoría:</strong> ${seleccionActual.categoria.replace('-', ' ').toUpperCase()}<br><br>`;
        }
        if (seleccionActual.subcategoria) {
            textoHtml += `• <strong>Destilado:</strong> ${seleccionActual.subcategoria.toUpperCase()}<br><br>`;
        }
        if (seleccionActual.tamaño) {
            let capacidad = seleccionActual.tamaño === 'chico' ? '250 ml' : seleccionActual.tamaño === 'mediano' ? '500 ml' : '1 litro';
            textoHtml += `• <strong>Tamaño:</strong> ${seleccionActual.tamaño.toUpperCase()} (${capacidad})<br><br>`;
        }
        if (seleccionActual.bebida) {
            textoHtml += `• <strong>Bebida:</strong> ${seleccionActual.bebida}<br><br>`;
        }

        if (!seleccionActual.categoria && !seleccionActual.subcategoria && !seleccionActual.tamaño && !seleccionActual.bebida) {
            rightPanelInfo.innerHTML = "Aún no se ha seleccionado ninguna opción";
            rightPanelInfo.classList.add('status-empty');
        } else {
            rightPanelInfo.innerHTML = textoHtml;
        }
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if(query === '') {
            searchResults.classList.add('hidden');
            return;
        }

        const encontrados = bebidasData.filter(b => b.nombre.toLowerCase().includes(query));
        
        if(encontrados.length > 0) {
            searchResults.innerHTML = '';
            encontrados.forEach(b => {
                const li = document.createElement('li');
                li.textContent = b.nombre;
                li.addEventListener('click', () => {
                    seleccionActual.bebida = b.nombre;
                    seleccionActual.categoria = b.categoria;
                    seleccionActual.subcategoria = b.subcategoria;
                    seleccionActual.menuNivel = b.subcategoria ? 'destilados' : 'principal';
                    
                    renderizarMenuLateral();
                    mostrarFichaTecnicaReceta(b);
                    
                    searchResults.classList.add('hidden');
                    searchInput.value = '';
                    actualizarPanelDerecho();
                });
                searchResults.appendChild(li);
            });
            searchResults.classList.remove('hidden');
        } else {
            searchResults.innerHTML = '<li style="color:#666; font-style:italic;">No hay matches</li>';
            searchResults.classList.remove('hidden');
        }
    });

    document.addEventListener('click', (e) => {
        if(!searchInput.contains(e.target)) searchResults.classList.add('hidden');
    });

    renderizarMenuLateral();
});