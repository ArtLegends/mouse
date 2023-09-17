function determineLocation() {
    const userLang = (navigator.language || navigator.userLanguage).substring(0,2);
    return translations[userLang] ? userLang : 'en';
}

var translations = {
    "de": {
        "meta": {
            "description": "Bestellen Sie die Logitech Pro X Superlight Gaming-Maus mit einem Rabatt von 30% mit dem Promo-Code TECH30. Erfahren Sie mehr über die neuesten Spezifikationen und Funktionen.",
            "keywords": "Logitech Pro X Superlight, Gaming-Maus, TechMarket, jetzt bestellen, Promo-Code",
            "title": "Logitech Pro X Superlight bestellen"
        },
        "images": {
            "photo_2023-08-06_15-42-25 (73).jpg": "Logitech Pro X Superlight Gaming-Maus",
            "photo_2023-08-06_15-42-25 (75).jpg": "Logitech Pro X Superlight Gaming-Maus"
        },
        "content": {
            "h1": "Logitech Pro X Superlight",
            "h3_preorder": "Sonderangebot bei TechMarket!",
            "p_description": "Jetzt bestellen und 30% Rabatt auf Ihren ersten Kauf erhalten mit dem Promo-Code: <strong>TECH30</strong>. Beeilen Sie sich, dieses Angebot ist begrenzt!",
            "button_order": "Jetzt bestellen"
        },
        "specifications": {
            "Physische Spezifikationen": {
                'Höhe': '125.0 mm',
                'Breite': '63.5 mm',
                'Tiefe': '40.0 mm',
                'Gewicht': '< 63 g'
            },
            "Tracking": {
                'Sensor': 'HERO',
                'Auflösung': '100 – 25,600 dpi',
                'Max. Beschleunigung': '>40 G',
                'Max. Geschwindigkeit': '400 IPS'
            },
            "Reaktionsfähigkeit": {
                'USB-Berichtsrate': '1 ms (1000 Hz)',
                'Mikroprozessor': '32-bit ARM'
            },
            "Batterielebensdauer": {
                'Konstante Bewegung': '70h'
            },
            "Teilenummer": {
                'Rosa': '910-005958',
                'Weiß': '910-005944',
                'Schwarz': '910-005882',
                'Rot': '910-006786'
            }
        },
        "promo_content": {
            "h2_1": "Warum Logitech Pro X Superlight?",
            "p1": "Die Logitech Pro X Superlight zeichnet sich durch ein ultraleichtes Design aus, das sie perfekt für schnelles Gaming macht. Mit ihrer fortschrittlichen Sensortechnologie und anpassbaren Tasten bietet sie präzise und reaktionsfreudige Leistung und maximiert so Ihr Spielerlebnis.",
            "h3_2": "Warum bei TechMarket bestellen?",
            "p2": "Bei TechMarket stellen wir sicher, dass Sie zu den Ersten gehören, die die neuesten Geräte in den Händen halten. Genießen Sie exklusive Vorbestellvorteile, unübertroffenen Kundenservice und ein nahtloses Einkaufserlebnis. Außerdem können Sie besondere Rabatte und Angebote nutzen, die Sie nirgendwo anders finden!",
            "button_order": "Jetzt bestellen"
        }
    },
    "en": {
        "meta": {
            "description": "Order the Logitech Pro X Superlight Gaming Mouse with a 30% discount using the promo code TECH30. Learn more about the latest specifications and features.",
            "keywords": "Logitech Pro X Superlight, Gaming Mouse, TechMarket, order now, Promo-Code",
            "title": "Order Logitech Pro X Superlight"
        },
        "images": {
            "photo_2023-08-06_15-42-25 (73).jpg": "Logitech Pro X Superlight Gaming Mouse",
            "photo_2023-08-06_15-42-25 (75).jpg": "Logitech Pro X Superlight Gaming Mouse"
        },
        "content": {
            "h1": "Logitech Pro X Superlight",
            "h3_preorder": "Special offer at TechMarket!",
            "p_description": "Order now and get a 30% discount on your first purchase with the promo code: <strong>TECH30</strong>. Hurry, this offer is limited!",
            "button_order": "Order now"
        },
        "specifications": {
            "Physical Specifications": {
                'Height': '125.0 mm',
                'Width': '63.5 mm',
                'Depth': '40.0 mm',
                'Weight': '< 63 g'
            },
            "Tracking": {
                'Sensor': 'HERO',
                'Resolution': '100 – 25,600 dpi',
                'Max. Acceleration': '>40 G',
                'Max. Speed': '400 IPS'
            },
            "Responsiveness": {
                'USB Reporting Rate': '1 ms (1000 Hz)',
                'Microprocessor': '32-bit ARM'
            },
            "Battery Life": {
                'Constant Movement': '70h'
            },
            "Part Number": {
                'Pink': '910-005958',
                'White': '910-005944',
                'Black': '910-005882',
                'Red': '910-006786'
            }
        },
        "promo_content": {
            "h2_1": "Why Logitech Pro X Superlight?",
            "p1": "The Logitech Pro X Superlight features an ultra-light design, making it perfect for fast-paced gaming. With its advanced sensor technology and customizable buttons, it provides precise and responsive performance, maximizing your gaming experience.",
            "h3_2": "Why order from TechMarket?",
            "p2": "At TechMarket, we ensure that you are among the first to get your hands on the latest devices. Enjoy exclusive pre-order benefits, unparalleled customer service, and a seamless shopping experience. Plus, you can avail of special discounts and offers that you won't find anywhere else!",
            "button_order": "Order now"
        }
    },
    "fr": {
        "meta": {
            "description": "Commandez la souris de jeu Logitech Pro X Superlight avec une réduction de 30% en utilisant le code promo TECH30. Découvrez les dernières spécifications et fonctionnalités.",
            "keywords": "Logitech Pro X Superlight, Souris de jeu, TechMarket, commandez maintenant, Code Promo",
            "title": "Commandez Logitech Pro X Superlight"
        },
        "images": {
            "photo_2023-08-06_15-42-25 (73).jpg": "Souris de jeu Logitech Pro X Superlight",
            "photo_2023-08-06_15-42-25 (75).jpg": "Souris de jeu Logitech Pro X Superlight"
        },
        "content": {
            "h1": "Logitech Pro X Superlight",
            "h3_preorder": "Offre spéciale chez TechMarket!",
            "p_description": "Commandez maintenant et bénéficiez d'une réduction de 30% sur votre premier achat avec le code promo : <strong>TECH30</strong>. Dépêchez-vous, cette offre est limitée!",
            "button_order": "Commandez maintenant"
        },
        "specifications": {
            "Spécifications physiques": {
                'Hauteur': '125.0 mm',
                'Largeur': '63.5 mm',
                'Profondeur': '40.0 mm',
                'Poids': '< 63 g'
            },
            "Suivi": {
                'Capteur': 'HERO',
                'Résolution': '100 – 25,600 dpi',
                'Accélération Max.': '>40 G',
                'Vitesse Max.': '400 IPS'
            },
            "Réactivité": {
                'Taux de rapport USB': '1 ms (1000 Hz)',
                'Microprocesseur': '32-bit ARM'
            },
            "Durée de vie de la batterie": {
                'Mouvement constant': '70h'
            },
            "Numéro de pièce": {
                'Rose': '910-005958',
                'Blanc': '910-005944',
                'Noir': '910-005882',
                'Rouge': '910-006786'
            }
        },
        "promo_content": {
            "h2_1": "Pourquoi choisir Logitech Pro X Superlight?",
            "p1": "La Logitech Pro X Superlight se caractérise par un design ultra-léger, la rendant parfaite pour le jeu rapide. Avec sa technologie de capteur avancée et ses boutons personnalisables, elle offre une performance précise et réactive, maximisant ainsi votre expérience de jeu.",
            "h3_2": "Pourquoi commander chez TechMarket?",
            "p2": "Chez TechMarket, nous nous assurons que vous faites partie des premiers à mettre la main sur les derniers appareils. Profitez d'avantages exclusifs de précommande, d'un service client inégalé et d'une expérience d'achat fluide. De plus, vous pouvez bénéficier de réductions spéciales et d'offres que vous ne trouverez nulle part ailleurs!",
            "button_order": "Commandez maintenant"
        }
    },
    "es": {
        "meta": {
            "description": "Ordene el ratón para juegos Logitech Pro X Superlight con un 30% de descuento usando el código promocional TECH30. Conozca más sobre las últimas especificaciones y características.",
            "keywords": "Logitech Pro X Superlight, Ratón para juegos, TechMarket, ordenar ahora, Código Promocional",
            "title": "Ordenar Logitech Pro X Superlight"
        },
        "images": {
            "photo_2023-08-06_15-42-25 (73).jpg": "Ratón para juegos Logitech Pro X Superlight",
            "photo_2023-08-06_15-42-25 (75).jpg": "Ratón para juegos Logitech Pro X Superlight"
        },
        "content": {
            "h1": "Logitech Pro X Superlight",
            "h3_preorder": "¡Oferta especial en TechMarket!",
            "p_description": "Ordene ahora y obtenga un 30% de descuento en su primera compra con el código promocional: <strong>TECH30</strong>. ¡Apresúrese, esta oferta es limitada!",
            "button_order": "Ordenar ahora"
        },
        "specifications": {
            "Especificaciones físicas": {
                'Altura': '125.0 mm',
                'Ancho': '63.5 mm',
                'Profundidad': '40.0 mm',
                'Peso': '< 63 g'
            },
            "Seguimiento": {
                'Sensor': 'HERO',
                'Resolución': '100 – 25,600 dpi',
                'Aceleración máx.': '>40 G',
                'Velocidad máx.': '400 IPS'
            },
            "Responsividad": {
                'Tasa de informe USB': '1 ms (1000 Hz)',
                'Microprocesador': '32-bit ARM'
            },
            "Duración de la batería": {
                'Movimiento constante': '70h'
            },
            "Número de parte": {
                'Rosa': '910-005958',
                'Blanco': '910-005944',
                'Negro': '910-005882',
                'Rojo': '910-006786'
            }
        },
        "promo_content": {
            "h2_1": "¿Por qué Logitech Pro X Superlight?",
            "p1": "El ratón para juegos Logitech Pro X Superlight cuenta con un diseño ultraligero, lo que lo hace perfecto para juegos rápidos. Con su avanzada tecnología de sensor y botones personalizables, ofrece un rendimiento preciso y receptivo, maximizando su experiencia de juego.",
            "h3_2": "¿Por qué ordenar desde TechMarket?",
            "p2": "En TechMarket, nos aseguramos de que esté entre los primeros en tener en sus manos los últimos dispositivos. Disfrute de beneficios exclusivos de preventa, un servicio al cliente inigualable y una experiencia de compra sin problemas. Además, puede aprovechar descuentos especiales y ofertas que no encontrará en ningún otro lugar!",
            "button_order": "Ordenar ahora"
        }
    }    
};

function applyTranslation(lang) {
    if (!translations[lang]) {
        console.error(`No translations available for language: ${lang}`);
        return; 
    }

    console.log("Lang value:", lang);

    document.querySelector('meta[name="description"]').setAttribute('content', translations[lang].meta.description);
    if (translations[lang] && translations[lang].meta) {
        document.querySelector('meta[name="description"]').setAttribute('content', translations[lang].meta.description);
        document.querySelector('meta[name="keywords"]').setAttribute('content', translations[lang].meta.keywords);
        document.title = translations[lang].meta.title;
    } else {
        console.warn("Translation for the specified language is not available.");
    }    
    document.querySelector('meta[name="keywords"]').setAttribute('content', translations[lang].meta.keywords);
    document.title = translations[lang].meta.title;
    document.querySelector('img[src="photo_2023-08-06_15-42-25 (73).jpg"]').setAttribute("alt", translations[lang].images["photo_2023-08-06_15-42-25 (73).jpg"]);


    document.querySelectorAll('img[alt="Bild von MacBook Air 15"]').forEach(img => {
        img.setAttribute('alt', translations[lang].images.macbook_air_15);
    });

    document.querySelector('h1').textContent = translations[lang].content.h1;
    document.querySelector('#preorderContent h3').textContent = translations[lang].content.h3_preorder;
    document.querySelector('#preorderContent p').textContent = translations[lang].content.p_description;
    document.querySelector('#preorderContent button').textContent = translations[lang].content.button_order;

    document.querySelector('.promo-content h2').textContent = translations[lang].promo_content.h2_1;
    document.querySelector('.promo-content h3').textContent = translations[lang].promo_content.h3_2;
    document.querySelector('.promo-content p:nth-child(2)').textContent = translations[lang].promo_content.p1;
    document.querySelector('.promo-content h3').textContent = translations[lang].promo_content.h3;
    document.querySelector('.promo-content p:nth-child(4)').textContent = translations[lang].promo_content.p2;
    document.querySelector('.promo-content button').textContent = translations[lang].promo_content.button_order;

    var specSections = document.querySelectorAll('.specs-section');
    var specCategories = Object.keys(translations[lang].specifications);

    specSections.forEach((section, idx) => {
        var specCategory = specCategories[idx];
        var specKeys = Object.keys(translations[lang].specifications[specCategory]);
        specKeys.forEach(function(key, index) {
            section.querySelector(`.spec-row:nth-child(${index + 1}) .spec-value`).textContent = translations[lang].specifications[specCategory][key];
        });
    });
}

window.onload = function() {
    const userLang = determineLocation();
    applyTranslation(userLang);
    
    // Устанавливаем выбранным язык пользователя в выпадающем списке
    document.getElementById('languageSelector').value = userLang;
}


document.getElementById('languageSelector').addEventListener('change', function() {
    applyTranslation(this.value);
});
