// story.js
const storyScenes = {
    title_screen: {
        text: "",
        image: "assets/title.webp",
        choices: [
            { 
                text: "Comenzar", 
                nextScene: "introduction" 
            }
        ]
    },
    introduction: {
        text: "En la página 242 de la *Historia de la Guerra Europea* de Lidell Hart, se lee que una ofensiva de trece divisiones británicas (apoyadas por mil cuatrocientas piezas de artillería) contra la línea Serre-Montauban había sido planeada para el 24 de julio de 1916 y debió postergarse hasta la mañana del día 29. Las lluvias torrenciales (anota el capitán Lidell Hart) provocaron esa demora —nada significativa, por cierto.\n\nUna declaración, dictada, releída y firmada por el doctor Yu Tsun, antiguo catedrático de inglés en la *Hochschule* de Tsingtao, arroja una insospechada luz sobre el caso. Faltan las dos páginas iniciales.",
        image: "assets/introduction.webp",
        choices: [
            { 
                text: "Continuar", 
                nextScene: "contemplation" 
            }
        ]
    },
    contemplation: {
        text: "Me pareció increíble que ese día sin premoniciones ni símbolos fuera el de mi muerte implacable. A pesar de mi padre muerto, a pesar de haber sido un niño en un simétrico jardín de Hai Feng ¿yo, ahora, iba a morir? Después reflexioné que todas las cosas le suceden a uno precisamente, precisamente ahora. Siglos de siglos y sólo en el presente ocurren los hechos; innumerables hombres en el aire, en la tierra y el mar, y todo lo que realmente pasa me pasa a mí…",
        image: "assets/contemplation.webp",
        choices: [
            {
                text: "Pensar en el Secreto",
                nextScene: "secret_thought"
            },
            {
                text: "Recordar el jardín de Hai Feng",
                nextScene: "childhood_memory"
            }
        ]
    },
    childhood_memory: {
        text: "El recuerdo del jardín simétrico de Hai Feng me transporta a mi niñez. Cada sendero, cada árbol, parecía contener un significado oculto. ¿Cuánto de ese niño perdura en el espía en que me he convertido? Pero el presente reclama mi atención...",
        image: "assets/childhood_memory.webp",
        choices: [
            {
                text: "Volver al presente",
                nextScene: "secret_thought"
            }
        ]
    },
    secret_thought: {
        text: "El casi intolerable recuerdo del rostro acaballado de Madden interrumpe mis divagaciones. En mitad de mi odio y de mi terror (ahora no me importa hablar de terror: ahora que he burlado a Richard Madden, ahora que mi garganta anhela la cuerda) pienso que ese guerrero tumultuoso y sin duda feliz no sospecha que poseo el Secreto. El nombre del preciso lugar del nuevo parque de artillería británico sobre el Ancre.",
        image: "assets/secret_thought.webp",
        choices: [
            {
                text: "Atender al teléfono que suena",
                nextScene: "discovery"
            }
        ]
    },
    discovery: {
        text: "...y colgué el tubo. Inmediatamente después, reconocí la voz que había contestado en alemán. Era la del capitán Richard Madden. Madden, en el departamento de Viktor Runeberg, quería decir el fin de nuestros afanes y —pero eso parecía muy secundario, o debería parecérmelo— también de nuestras vidas. Quería decir que Runeberg había sido arrestado o asesinado.",
        image: "assets/discovery.webp",
        choices: [
            { 
                text: "Huir inmediatamente de la casa", 
                nextScene: "escape" 
            },
            { 
                text: "Revisar mis posibilidades con calma", 
                nextScene: "review" 
            },
            {
                text: "Intentar contactar a Viktor Runeberg",
                nextScene: "contact"
            }
        ]
    },
    escape: {
        text: "Con el corazón acelerado, tomo solo lo esencial. El tiempo, ese laberinto de bifurcaciones infinitas, parece condensarse en este momento. La estación no distaba mucho de casa, pero quizás un coche sería más seguro...",
        image: "assets/escape.webp",
        choices: [
            {
                text: "Ir directamente a la estación a pie",
                nextScene: "station_walk"
            },
            {
                text: "Tomar un coche hacia la estación",
                nextScene: "station_cab"
            },
            {
                text: "Buscar una ruta alternativa",
                nextScene: "alternative_route"
            }
        ]
    },
    station_walk: {
        text: "Las calles parecen más largas que nunca. Cada paso podría acercarme a la salvación o a Madden. A lo lejos, la estación emerge entre la niebla matinal. El próximo tren sale en veinte minutos.",
        image: "assets/station_walk.webp",
        choices: [
            {
                text: "Esperar el tren en el andén",
                nextScene: "platform"
            },
            {
                text: "Ocultarse en la estación",
                nextScene: "hide_station"
            }
        ]
    },
    station_cab: {
        text: "Argüí que así corría menos peligro de ser reconocido. El hecho es que en la calle desierta me sentía visible y vulnerable, infinitamente. Le digo al cochero que se detenga un poco antes de la entrada central.",
        image: "assets/station_cab.webp",
        choices: [
            {
                text: "Bajar y entrar por la entrada principal",
                nextScene: "main_entrance"
            },
            {
                text: "Bajar y buscar una entrada lateral",
                nextScene: "side_entrance"
            }
        ]
    },
    alternative_route: {
        text: "Decido tomar callejuelas menos transitadas. El camino es más largo, pero más discreto. Las sombras de los edificios me ofrecen cierta protección mientras avanzo hacia la estación.",
        image: "assets/alternative_route.webp",
        choices: [
            {
                text: "Continuar por las calles secundarias",
                nextScene: "backstreets"
            },
            {
                text: "Atravesar el parque cercano",
                nextScene: "through_park"
            }
        ]
    },
    main_entrance: {
        text: "La estación está relativamente tranquila. Desde aquí puedo ver el tablero de horarios: el próximo tren sale a las ocho y cincuenta. Tengo que apresurarme.",
        choices: [
            {
                text: "Ir directamente al andén",
                nextScene: "platform"
            },
            {
                text: "Comprar el billete primero",
                nextScene: "ticket_purchase"
            }
        ]
    },
    ticket_purchase: {
        text: "'Un billete para Ashgrove', digo, pero en el último momento cambio de opinión. 'No, mejor para la estación siguiente.' La precaución nunca está de más. Pago con algunos de mis escasos peniques.",
        image: "assets/ticket_purchase.webp",
        choices: [
            {
                text: "Ir al andén con el billete",
                nextScene: "platform"
            },
            {
                text: "Esperar discretamente",
                nextScene: "wait_ticket"
            }
        ]
    },
    wait_ticket: {
        text: "Me mantengo cerca de la ventanilla, observando a los demás viajeros. Un joven lee los Anales de Tácito, hay una enlutada, unos labradores, un soldado herido. Ninguno parece prestarme atención.",
        choices: [
            {
                text: "Dirigirme al andén",
                nextScene: "platform"
            },
            {
                text: "Seguir observando",
                nextScene: "observe_passengers"
            }
        ]
    },
   
    last_minute: {
        text: "Aguardo hasta que suena el silbato final. En ese momento, una figura familiar aparece en la entrada de la estación. Es Madden. Me apresuro a subir al tren que ya está en movimiento.",
        image: "assets/last_minute.webp",
        choices: [
            {
                text: "Esconderme en el vagón",
                nextScene: "train_departs"
            },
            {
                text: "Cambiar rápidamente de coche",
                nextScene: "change_car"
            },
            {
                text: "Observar desde la ventana",
                nextScene: "window_observation"
            }
        ]
    },

    side_entrance: {
        text: "Esta entrada menos visible me permite observar mejor sin ser visto. Desde aquí puedo vigilar si alguien me ha seguido antes de dirigirme al andén.",
        image: "assets/side_entrance.webp",
        choices: [
            {
                text: "Observar por unos minutos",
                nextScene: "observe_surroundings_station"
            },
            {
                text: "Dirigirse sigilosamente al andén",
                nextScene: "platform_stealth"
            },
            {
                text: "Buscar otra entrada",
                nextScene: "alternative_route"
            }
        ]
    },

    observe_surroundings: {
        text: "Me detengo un momento para estudiar el ambiente. La biblioteca es impresionante: libros orientales y occidentales se alinean en las estanterías. Un gramófono toca música china junto a un fénix de bronce. En las paredes, caligrafías antiguas.",
        image: "assets/observe_surroundings.webp",
        choices: [
            {
                text: "Examinar los libros más de cerca",
                nextScene: "examine_library"
            },
            {
                text: "Prestar atención a la música",
                nextScene: "chinese_music"
            }
        ]
    },

    observe_surroundings_station: {
        text: "Me detengo un momento para estudiar el ambiente de la estación. Los pasajeros van y vienen, cada uno en su propio tiempo, ajenos a mi situación desesperada.",
        image: "assets/observe_surroundings_station.webp",
        choices: [
            {
                text: "Dirigirse al andén",
                nextScene: "platform"
            },
            {
                text: "Seguir observando",
                nextScene: "observe_passengers"
            }
        ]
    },

    chinese_music: {
        text: "La melodía china fluye suavemente en el aire. Me doy cuenta de que la había estado escuchando todo este tiempo sin extrañeza, como si de alguna manera ya perteneciera a este lugar, a esta bifurcación del tiempo.",
        image: "assets/chinese_music.webp",
        choices: [
            {
                text: "Comentar sobre la música",
                nextScene: "discuss_china"
            },
            {
                text: "Volver a examinar la biblioteca",
                nextScene: "examine_library"
            }
        ]
    },

    backstreets: {
        text: "Las callejuelas forman su propio laberinto. Por un momento, pienso en mi antepasado Ts'ui Pên y su jardín de senderos que se bifurcan. ¿Cada elección de camino crea una nueva realidad?",
         image: "assets/backstreets.webp",
        choices: [
            {
                text: "Continuar hacia la estación",
                nextScene: "reach_station"
            },
            {
                text: "Detenerse a reflexionar",
                nextScene: "philosophical_moment"
            }
        ]
    },
    reach_station: {
        text: "La estación emerge finalmente entre la niebla. El reloj marca las ocho y cuarenta. El próximo tren parte a las ocho y cincuenta, y el siguiente no sale hasta las nueve y media. No puedo permitirme perder el primero.",
        image: "assets/reach_station.webp",
        choices: [
            {
                text: "Comprar el boleto",
                nextScene: "buy_ticket"
            },
            {
                text: "Ir directamente al andén",
                nextScene: "platform"
            }
        ]
    },
    buy_ticket: {
        text: "Me acerco a la ventanilla. 'Un boleto a Ashgrove', digo, pero compro uno para una estación más lejana. La precaución nunca está de más.",
        image: "assets/buy_ticket.webp",
        choices: [
            {
                text: "Esperar en el andén",
                nextScene: "platform"
            },
            {
                text: "Buscar un lugar discreto",
                nextScene: "hide_station"
            }
        ]
    },
    platform: {
        text: "No había casi nadie en el andén. Recorro los coches: veo a unos labradores, una enlutada, un joven que lee con fervor los Anales de Tácito, un soldado herido y feliz. Los minutos se arrastran.",
        image: "assets/platform.webp",
        choices: [
            {
                text: "Subir al tren",
                nextScene: "board_train"
            },
            {
                text: "Observar a los pasajeros",
                nextScene: "observe_passengers"
            }
        ]
    },
    board_train: {
        text: "Me siento lejos de la ventana, intentando pasar desapercibido. Cada nuevo pasajero que sube podría ser Madden. El tren debe partir en minutos.",
        image: "assets/board_train.webp",
        choices: [
            {
                text: "Mantener la calma",
                nextScene: "train_departs"
            },
            {
                text: "Cambiar de vagón",
                nextScene: "change_car"
            }
        ]
    },
    change_car: {
        text: "Me muevo hacia otro vagón, buscando un lugar más seguro. De repente, el tren comienza a moverse. ¿Habré logrado despistar a Madden?",
        image: "assets/change_car.webp",
        choices: [
            {
                text: "Observar por la ventana",
                nextScene: "window_observation"
            },
            {
                text: "Mantenerme oculto",
                nextScene: "train_departs"
            }
        ]
    },
    window_observation: {
        text: "Un hombre que reconocí corrió en vano hasta el límite del andén. Era el capitán Richard Madden. Aniquilado, trémulo, me encogí en la otra punta del sillón, lejos del temido cristal.",
        image: "assets/window_observation.webp",
        choices: [
            {
                text: "Reflexionar sobre el escape",
                nextScene: "train_reflection"
            },
            {
                text: "Planear el siguiente paso",
                nextScene: "plan_ahead"
            }
        ]
    },

    through_park: {
        text: "El parque está casi desierto a esta hora. Las sombras de los árboles ofrecen refugio, pero también podrían ocultar a Madden o sus hombres.",
        image: "assets/through_park.webp",
        choices: [
            {
                text: "Apresurarse a través del parque",
                nextScene: "hurry_station"
            },
            {
                text: "Moverse con cautela",
                nextScene: "cautious_approach"
            },
            {
                text: "Buscar otro camino",
                nextScene: "alternative_route"
            }
        ]
    },
    review: {
        text: "Con metódica calma, reviso mis bolsillos: el reloj norteamericano, la cadena de níquel, la moneda cuadrangular, el llavero, la libreta, una carta, el falso pasaporte, una corona, dos chelines y unos peniques, el lápiz rojo-azul, el pañuelo, el revólver con una bala. La guía telefónica me ofrece una posibilidad inesperada...",
        image: "assets/review.webp",
        choices: [
            {
                text: "Consultar la guía telefónica con detenimiento",
                nextScene: "phonebook"
            },
            {
                text: "Examinar la carta con más atención",
                nextScene: "examine_letter"
            },
            {
                text: "Considerar el significado del revólver",
                nextScene: "contemplate_gun"
            }
        ]
    },
    contemplate_gun: {
        text: "Sopeso el revólver en mi mano. Una sola bala. Un solo disparo que podría significar mi salvación o mi condena. ¿Para qué lo usaré? ¿Para defenderme de Madden... o para algo más definitivo?",
        image: "assets/contemplate_gun.webp",
        choices: [
            {
                text: "Examinar la única bala",
                nextScene: "examine_bullet"
            },
            {
                text: "Guardar el arma y seguir planeando",
                nextScene: "return_planning"
            }
        ]
    },
    examine_bullet: {
        text: "Una bala. Una decisión. Una bifurcación en el tiempo que podría cambiar el destino de una ciudad entera. Vagamente pienso que un pistoletazo puede oírse muy lejos...",
        choices: [
            {
                text: "Pensar en las posibilidades",
                nextScene: "consider_possibilities"
            },
            {
                text: "Volver a los planes inmediatos",
                nextScene: "return_planning"
            }
        ]
    },
    consider_possibilities: {
        text: "La bala podría servir para defenderme, para amenazar, para enviar un mensaje... o para algo que aún no imagino. Como en el jardín de mi antepasado, cada posibilidad crea su propia rama en el tiempo.",
        image: "assets/consider_possibilities.webp",
        choices: [
            {
                text: "Consultar la guía telefónica",
                nextScene: "phonebook"
            },
            {
                text: "Prepararse para partir",
                nextScene: "prepare_departure"
            }
        ]
    },
    return_planning: {
        text: "Guardo el revólver, consciente de su peso y su propósito aún indefinido. Debo concentrarme en el siguiente paso. La guía telefónica todavía espera ser consultada.",
        image: "assets/return_planning.webp",
        choices: [
            {
                text: "Revisar la guía telefónica",
                nextScene: "phonebook"
            },
            {
                text: "Considerar otras opciones",
                nextScene: "review"
            }
        ]
    },

    examine_letter: {
        text: "La carta tiembla en mis manos. ¿Debería destruirla como pensé inicialmente? Podría contener información que me comprometa, pero también pistas cruciales...",
        image: "assets/examine_letter.webp",
        choices: [
            {
                text: "Destruir la carta definitivamente",
                nextScene: "destroy_evidence"
            },
            {
                text: "Leerla una última vez",
                nextScene: "read_letter"
            }
        ]
    },
    destroy_evidence: {
        text: "Mientras los pedazos de la carta caen, sé que debo actuar rápido. Ya no hay vuelta atrás.",
        image: "assets/destroy_evidence.webp",
        choices: [
            {
                text: "Consultar la guía telefónica",
                nextScene: "phonebook"
            },
            {
                text: "Prepararse para huir",
                nextScene: "escape"
            }
        ]
    },
    read_letter: {
        text: "Las palabras cobran nuevo significado en mi situación actual. Quizás hay un mensaje que antes pasé por alto...",
        image: "assets/read_letter.webp",
        choices: [
            {
                text: "Buscar pistas sobre Albert",
                nextScene: "investigate_albert"
            },
            {
                text: "Guardar la carta y partir",
                nextScene: "prepare_departure"
            }
        ]
    },
    phonebook: {
        text: "La guía telefónica me revela un nombre: Stephen Albert, que vive en un suburbio de Fenton. Algo en ese nombre resuena en mi memoria, como un eco de historias antiguas, de laberintos y de tiempo...",
        image: "assets/phonebook.webp",
        choices: [
            {
                text: "Dirigirme a Fenton inmediatamente",
                nextScene: "to_fenton"
            },
            {
                text: "Investigar más sobre Stephen Albert",
                nextScene: "research_albert"
            }
        ]
    },
    to_fenton: {
        text: "Decido partir inmediatamente hacia Fenton. La estación no distaba mucho de casa, pero cada minuto cuenta. Madden podría estar siguiendo mi pista en este preciso momento.",
        image: "assets/to_fenton.webp",
        choices: [
            {
                text: "Ir directamente a la estación",
                nextScene: "reach_station"
            },
            {
                text: "Tomar precauciones adicionales",
                nextScene: "extra_precautions"
            }
        ]
    },
    research_albert: {
        text: "El nombre de Stephen Albert despierta ecos en mi memoria. Recuerdo vagamente haber oído sobre un sinólogo británico, un estudioso que había sido misionero en Tientsin. ¿Podría ser el mismo?",
        image: "assets/research_albert.webp",
        choices: [
            {
                text: "Buscar más información en la guía",
                nextScene: "more_research"
            },
            {
                text: "Confiar en el instinto",
                nextScene: "to_fenton"
            }
        ]
    },
    more_research: {
        text: "La guía menciona una dirección en Ashgrove, un suburbio tranquilo. También hay una nota sobre un pabellón en su jardín. Algo en esta combinación de detalles me resulta significativo.",
        image: "assets/more_research.webp",
        choices: [
            {
                text: "Dirigirse a Ashgrove",
                nextScene: "prepare_journey"
            },
            {
                text: "Investigar más a fondo",
                nextScene: "deeper_research"
            }
        ]
    },
    prepare_journey: {
        text: "El tiempo apremia. Ashgrove está a menos de media hora en tren. Debo partir ahora si quiero llegar antes que Madden me encuentre.",
        image: "assets/prepare_journey.webp",
        choices: [
            {
                text: "Ir a la estación",
                nextScene: "reach_station"
            },
            {
                text: "Planear la ruta con cuidado",
                nextScene: "plan_route"
            }
        ]
    },
    deeper_research: {
        text: "Entre las páginas de la guía encuentro una hoja suelta: un recorte de periódico que menciona a Albert como experto en cultura china. La coincidencia es demasiado grande para ignorarla.",
        image: "assets/deeper_research.webp",
        choices: [
            {
                text: "Partir inmediatamente",
                nextScene: "to_fenton"
            },
            {
                text: "Memorizar los detalles",
                nextScene: "prepare_journey"
            }
        ]
    },
    extra_precautions: {
        text: "Decido ser cauteloso. Memorizo la dirección y destruyo cualquier evidencia de mi destino. No debo dejar pistas que Madden pueda seguir.",
        image: "assets/extra_precautions.webp",
        choices: [
            {
                text: "Dirigirse a la estación",
                nextScene: "reach_station"
            },
            {
                text: "Crear una distracción",
                nextScene: "create_diversion"
            }
        ]
    },
    create_diversion: {
        text: "Dejo algunas pistas falsas que podrían hacer perder tiempo a Madden. Compraré un boleto para una estación más lejana que Ashgrove.",
        image: "assets/create_diversion.webp",
        choices: [
            {
                text: "Proceder con el plan",
                nextScene: "reach_station"
            },
            {
                text: "Añadir más pistas falsas",
                nextScene: "extra_precautions"
            },
            {
                text: "Cambiar de estrategia",
                nextScene: "alternative_route"
            }
        ]
    },

    contact: {
        text: "Intento contactar a Runeberg, pero solo encuentro silencio. La voz del capitán Madden aún resuena en mi memoria. Runeberg probablemente ya ha sido capturado... o algo peor.",
        image: "assets/contact.webp",
        choices: [
            {
                text: "Aceptar que Runeberg está perdido y huir",
                nextScene: "escape"
            },
            {
                text: "Intentar averiguar su destino",
                nextScene: "investigate_runeberg"
            }
        ]
    },
    investigate_runeberg: {
        text: "Irlandés a las órdenes de Inglaterra, hombre acusado de tibieza y tal vez de traición, Madden no perdonaría a Runeberg. Intento recordar los lugares que frecuentaba, los contactos que podría tener...",
        image: "assets/investigate_runeberg.webp",
        choices: [
            {
                text: "Buscar en su departamento",
                nextScene: "search_apartment"
            },
            {
                text: "Preguntar discretamente",
                nextScene: "ask_around"
            }
        ]
    },
    search_apartment: {
        text: "El departamento de Runeberg está peligrosamente cerca de donde escuché a Madden. Entrar sería arriesgado, pero podría encontrar información vital.",
        image: "assets/search_apartment.webp",
        choices: [
            {
                text: "Arriesgarse a entrar",
                nextScene: "enter_apartment"
            },
            {
                text: "Es demasiado peligroso",
                nextScene: "escape"
            }
        ]
    },
    enter_apartment: {
        text: "El departamento muestra signos de lucha. Sobre el escritorio, documentos dispersos y una nota a medio escribir. La letra apresurada de Runeberg revela su último mensaje...",
        choices: [
            {
                text: "Leer la nota",
                nextScene: "read_note"
            },
            {
                text: "Buscar otras pistas",
                nextScene: "search_more"
            }
        ]
    },
    read_note: {
        text: "Las palabras confirman mis temores. Runeberg intentó advertirme. El ruido de pasos en el corredor me indica que debo actuar rápido.",
        image: "assets/read_note.webp",
        choices: [
            {
                text: "Huir inmediatamente",
                nextScene: "escape"
            },
            {
                text: "Destruir la evidencia",
                nextScene: "destroy_evidence"
            }
        ]
    },
    ask_around: {
        text: "Con cautela, intento obtener información de los vecinos. Sus miradas nerviosas y respuestas evasivas me dicen más que sus palabras. El miedo se ha instalado en el edificio.",
        choices: [
            {
                text: "Seguir investigando",
                nextScene: "more_questions"
            },
            {
                text: "Ya he oído suficiente",
                nextScene: "escape"
            }
        ]
    },
    more_questions: {
        text: "Una anciana finalmente susurra: 'Hubo gritos, luego disparos. Se lo llevaron... o algo peor. La policía estuvo aquí.' No necesito escuchar más.",
        choices: [
            {
                text: "Es hora de huir",
                nextScene: "escape"
            }
        ]
    },
    search_more: {
        text: "Entre los papeles dispersos encuentro una dirección en Fenton y una referencia a Stephen Albert. ¿Coincidencia? En este momento, no puedo creer en coincidencias.",
        choices: [
            {
                text: "Memorizar la dirección",
                nextScene: "escape"
            },
            {
                text: "Investigar más sobre Albert",
                nextScene: "research_albert"
            }
        ]
    },

    station_walk: {
        text: "Las calles parecen más largas que nunca. Cada paso podría acercarme a la salvación o a Madden. A lo lejos, la estación emerge entre la niebla matinal.",
        image: "assets/station_walk.webp",
        choices: [
            {
                text: "Esperar el tren en el andén",
                nextScene: "platform"
            },
            {
                text: "Ocultarse en la estación",
                nextScene: "hide_station"
            },
            {
                text: "Buscar otra entrada",
                nextScene: "side_entrance"
            }
        ]
    },
    // Continuar con más escenas...
    platform: {
        text: "No había casi nadie en el andén. Recorro los coches: unos labradores, una enlutada, un joven que lee con fervor los Anales de Tácito, un soldado herido y feliz. El tren saldrá a las ocho y cincuenta.",
        choices: [
            {
                text: "Subir al tren inmediatamente",
                nextScene: "train_immediate"
            },
            {
                text: "Esperar hasta el último momento",
                nextScene: "train_last_minute"
            }
        ]
    },
    hide_station: {
        text: "Me oculto entre las sombras de la estación. Desde aquí puedo observar sin ser visto. Los minutos pasan con insoportable lentitud.",
        image: "assets/hide_station.webp",
        choices: [
            {
                text: "Observar a los pasajeros",
                nextScene: "observe_passengers"
            },
            {
                text: "Dirigirse al andén",
                nextScene: "platform"
            }
        ]
    },

    observe_passengers: {
        text: "Recuerdo a unos labradores, una enlutada, un joven que leía con fervor los Anales de Tácito, un soldado herido y feliz. Ninguno parece prestar atención a mi presencia.",
        image: "assets/observe_passengers.webp",
        choices: [
            {
                text: "Subir al tren",
                nextScene: "board_train"
            },
            {
                text: "Esperar un poco más",
                nextScene: "wait_more"
            }
        ]
    },

    train_immediate: {
        text: "Me siento lejos de la ventana, intentando pasar desapercibido. Los minutos se arrastran mientras espero la partida. Cada nuevo pasajero que sube podría ser Madden.",
        image: "assets/train_immediate.webp",
        choices: [
            {
                text: "Mantener la calma y esperar",
                nextScene: "train_departs"
            },
            {
                text: "Cambiar de vagón",
                nextScene: "change_car"
            }
        ]
    },
    train_departs: {
        text: "Los coches arrancaron al fin. Un hombre que reconocí corrió en vano hasta el límite del andén. Era el capitán Richard Madden. Aniquilado, trémulo, me encogí en la otra punta del sillón, lejos del temido cristal.",
        image: "assets/train_departs.webp",
        choices: [
            {
                text: "Reflexionar sobre mi escape",
                nextScene: "train_reflection"
            },
            {
                text: "Planear mi próximo movimiento",
                nextScene: "plan_ahead"
            }
        ]
    },
    train_reflection: {
        text: "De esa aniquilación pasé a una felicidad casi abyecta. Me dije que ya estaba empeñado mi duelo y que yo había ganado el primer asalto, al burlar, siquiera por cuarenta minutos, el ataque de mi adversario.",
        image: "assets/train_reflection.webp",
        choices: [
            {
                text: "Concentrarse en el destino: Ashgrove",
                nextScene: "approach_ashgrove"
            },
            {
                text: "Meditar sobre el tiempo y el destino",
                nextScene: "philosophical_meditation"
            }
        ]
    },
    approach_ashgrove: {
        text: "El tren se detuvo, casi en medio del campo. Nadie gritó el nombre de la estación. '¿Ashgrove?', les pregunté a unos chicos en el andén. 'Ashgrove', contestaron.",
        image: "assets/approach_ashgrove.webp",
        choices: [
            {
                text: "Preguntar por el doctor Stephen Albert",
                nextScene: "ask_directions"
            },
            {
                text: "Explorar el camino por mi cuenta",
                nextScene: "explore_alone"
            }
        ]
    },
    explore_alone: {
        text: "Decido explorar por mi cuenta. El camino está solitario, y una luna baja y circular parece acompañarme. Era de tierra elemental, arriba se confundían las ramas. En cada bifurcación, debo tomar una decisión.",
        choices: [
            {
                text: "Seguir el camino principal",
                nextScene: "main_path"
            },
            {
                text: "Buscar senderos alternativos",
                nextScene: "alternative_paths"
            }
        ]
    },
    main_path: {
        text: "El camino serpentea entre árboles antiguos. Una música tenue llega desde algún lugar lejano. Algo en este jardín me recuerda a mi infancia en Hai Feng.",
        image: "assets/main_path.webp",
        choices: [
            {
                text: "Seguir el sonido de la música",
                nextScene: "follow_music"
            },
            {
                text: "Mantenerme en el camino principal",
                nextScene: "continue_main_path"
            }
        ]
    },
    alternative_paths: {
        text: "Me adentro por senderos menos evidentes. Cada elección podría llevarme más cerca o más lejos de mi destino. Como en el jardín de Ts'ui Pên, cada decisión crea nuevas bifurcaciones.",
        image: "assets/alternative_paths.webp",
        choices: [
            {
                text: "Intentar orientarme por la música",
                nextScene: "follow_music"
            },
            {
                text: "Volver al camino principal",
                nextScene: "return_main"
            }
        ]
    },
    follow_music: {
        text: "La música se hace más clara. Es una melodía china, lo que explica por qué la había aceptado sin extrañeza. Entre los árboles, vislumbro un portón herrumbrado.",
        image: "assets/follow_music.webp",
        choices: [
            {
                text: "Acercarme al portón",
                nextScene: "approach_house"
            },
            {
                text: "Observar desde la distancia",
                nextScene: "observe_gate"
            }
        ]
    },
    continue_main_path: {
        text: "El camino desciende suavemente. La tarde es íntima, infinita. Entre las ya confusas praderas, distingo una alameda y, más allá, un pabellón.",
        image: "assets/continue_main_path.webp",
        choices: [
            {
                text: "Dirigirme al pabellón",
                nextScene: "approach_house"
            },
            {
                text: "Examinar los alrededores",
                nextScene: "examine_surroundings"
            }
        ]
    },
    return_main: {
        text: "Decido volver al camino principal. A veces, la ruta más directa es la más sabia. A lo lejos, diviso lo que parece ser el pabellón que busco.",
        choices: [
            {
                text: "Avanzar hacia el pabellón",
                nextScene: "approach_house"
            },
            {
                text: "Examinar el entorno",
                nextScene: "examine_surroundings"
            },
            {
                text: "Buscar otro sendero",
                nextScene: "alternative_paths"
            }
        ]
    },

    ask_directions: {
        text: "Uno me interrogó: '¿Usted va a casa del doctor Stephen Albert?' Sin aguardar contestación, otro dijo: 'La casa queda lejos de aquí, pero usted no se perderá si toma ese camino a la izquierda y en cada encrucijada del camino dobla a la izquierda.'",
        image: "assets/ask_directions.webp",
        choices: [
            {
                text: "Seguir las indicaciones de los niños",
                nextScene: "follow_left"
            },
            {
                text: "Buscar otro camino",
                nextScene: "alternative_path"
            }
        ]
    },
    follow_left: {
        text: "El consejo de siempre doblar a la izquierda me recordó que tal era el procedimiento común para descubrir el patio central de ciertos laberintos. Algo entiendo de laberintos: no en vano soy bisnieto de aquel Ts'ui Pên, que fue gobernador de Yunnan...",
        choices: [
            {
                text: "Reflexionar sobre Ts'ui Pên",
                nextScene: "contemplate_ancestor"
            },
            {
                text: "Continuar el camino",
                nextScene: "approach_house"
            }
        ]
    },
    approach_house: {
        text: "Llegué a un alto portón herrumbrado. Entre las rejas descifré una alameda y un pabellón. De pronto, comprendí dos cosas: la música que venía del pabellón era china, y por eso, yo la había aceptado con naturalidad.",
        image: "assets/approach_house.webp",
        choices: [
            {
                text: "Llamar a la puerta",
                nextScene: "meet_albert"
            },
            {
                text: "Observar más detenidamente",
                nextScene: "observe_garden"
            }
        ]
    },
    meet_albert: {
        text: "Un hombre alto se acerca con un farol. No veo su rostro por la luz, pero me habla en mi idioma, mencionando a Hsi P'êng. Es Stephen Albert, y me invita a ver el jardín.",
        image: "assets/meet_albert.webp",
        choices: [
            {
                text: "Mencionar a mi antepasado Ts'ui Pên",
                nextScene: "reveal_connection"
            },
            {
                text: "Entrar sin revelar mi identidad",
                nextScene: "enter_quietly"
            }
        ]
    },
    enter_quietly: {
        text: "Decido mantener mi identidad en secreto por ahora. Sigo a Albert a través del húmedo sendero. El farol proyecta sombras oscilantes sobre el camino mientras nos acercamos a la casa.",
        image: "assets/enter_quietly.webp",
        choices: [
            {
                text: "Observar el entorno con atención",
                nextScene: "observe_surroundings"
            },
            {
                text: "Concentrarse en la conversación",
                nextScene: "discuss_china"
            }
        ]
    },
    casual_conversation: {
        text: "Albert habla sobre su jardín, sobre China, sobre el tiempo. Su voz es amable, pero hay algo en su tono que sugiere que intuye más de lo que aparenta. Llegamos a una biblioteca con libros orientales y occidentales.",
        image: "assets/casual_conversation.webp",
        choices: [
            {
                text: "Examinar la biblioteca",
                nextScene: "examine_library"
            },
            {
                text: "Mantener la conversación casual",
                nextScene: "continue_conversation"
            }
        ]
    },
    examine_library: {
        text: "Reconozco algunos tomos de la Enciclopedia Perdida, encuadernados en seda amarilla. El disco de un gramófono gira junto a un fénix de bronce. La presencia de estos objetos me hace cada vez más difícil ocultar mi familiaridad con ellos.",
        image: "assets/examine_library.webp",
        choices: [
            {
                text: "Revelar finalmente mi identidad",
                nextScene: "reveal_connection"
            },
            {
                text: "Seguir disimulando",
                nextScene: "maintain_facade"
            }
        ]
    },
    maintain_facade: {
        text: "Albert sonríe con cierta ironía. 'Es curioso', dice, 'cómo ciertos objetos parecen despertar recuerdos ancestrales. ¿No le sucede lo mismo con esta Enciclopedia de la Dinastía Luminosa?'",
        image: "assets/maintain_facade.webp",
        choices: [
            {
                text: "Admitir la conexión",
                nextScene: "reveal_connection"
            },
            {
                text: "Evadir la pregunta",
                nextScene: "final_evasion"
            }
        ]
    },
    final_evasion: {
        text: "Pero es demasiado tarde para evasivas. Albert señala un retrato en la pared: es Ts'ui Pên. 'El parecido es notable', dice suavemente. El tiempo de los secretos ha terminado.",
        image: "assets/final_evasion.webp",
        choices: [
            {
                text: "Reconocer mi identidad",
                nextScene: "reveal_connection"
            }
        ]
    },

    reveal_connection: {
        text: "Al mencionar a Ts'ui Pên, mi antepasado, Albert me mira con renovado interés. Me guía por un húmedo sendero hasta una biblioteca con libros orientales y occidentales.",
        image: "assets/reveal_connection.webp",
        choices: [
            {
                text: "Preguntar por el laberinto",
                nextScene: "discuss_labyrinth"
            },
            {
                text: "Preguntar por el libro",
                nextScene: "discuss_book"
            }
        ]
    },
    discuss_labyrinth: {
        text: "Albert me explica una revelación asombrosa: el libro y el laberinto de Ts'ui Pên son un mismo objeto. Un laberinto de símbolos, un invisible laberinto de tiempo.",
        image: "assets/discuss_labyrinth.webp",
        choices: [
            {
                text: "Pedir que explique más",
                nextScene: "garden_revelation"
            },
            {
                text: "Reflexionar sobre el tiempo",
                nextScene: "time_contemplation"
            }
        ]
    },
    garden_revelation: {
        text: "Albert explica que en el jardín de Ts'ui Pên, los senderos del tiempo se bifurcan. En cada decisión, se crean múltiples futuros, todos existiendo simultáneamente.",
        image: "assets/garden_revelation.webp",
        choices: [
            {
                text: "Pensar en mi propia decisión inminente",
                nextScene: "contemplation_decision"
            },
            {
                text: "Pedir ver el manuscrito",
                nextScene: "examine_manuscript"
            }
        ]
    },
    contemplation_decision: {
        text: "Mientras Albert habla del tiempo y sus bifurcaciones, siento el peso del revólver en mi bolsillo. El tiempo se agota: Madden llegará pronto.",
        image: "assets/contemplation_decision.webp",
        choices: [
            {
                text: "Pedir examinar la carta una vez más",
                nextScene: "final_moment"
            },
            {
                text: "Buscar otra solución",
                nextScene: "alternate_ending"
            }
        ]
    },
    final_moment: {
        text: "Albert se levanta para buscar la carta. Alto, me da la espalda mientras abre el cajón del escritorio. El tiempo se bifurca en este instante crucial.",
        image: "assets/final_moment.webp",
        choices: [
            {
                text: "Usar el revólver",
                nextScene: "tragic_choice"
            },
            {
                text: "Revelar toda la verdad",
                nextScene: "confession"
            }
        ]
    },
    // Alternative endings...
    tragic_choice: {
        text: "La decisión está tomada. Con ella, comunico en silencio el nombre de una ciudad, pero cargo también con un peso que me acompañará en todos los tiempos posibles.",
        image: "assets/tragic_choice.webp",
        choices: [
            {
                text: "Aceptar el destino",
                nextScene: "ending_one"
            },
            {
                text: "Reflexionar sobre las alternativas",
                nextScene: "ending_philosophical"
            }
        ]
    },
    confession: {
        text: "Decido revelar mi misión y el peligro que nos acecha. Quizás en esta bifurcación del tiempo, existe una salida que no requiera violencia.",
        image: "assets/confession.webp",
        choices: [
            {
                text: "Continuar",
                nextScene: "peaceful_ending"
            }
        ]
    },
    contemplate_ancestor: {
        text: "Trece años dedicó Ts'ui Pên a heterogéneas fatigas, pero la mano de un forastero lo asesinó y su novela era insensata y nadie encontró el laberinto. Bajo estos árboles ingleses medito en ese laberinto perdido: lo imagino inviolado y perfecto en la cumbre secreta de una montaña, lo imagino borrado por arrozales o debajo del agua, lo imagino infinito...",
        image: "assets/contemplate_ancestor.webp",
        choices: [
            {
                text: "Pensar en el libro misterioso",
                nextScene: "think_book"
            },
            {
                text: "Imaginar el laberinto físico",
                nextScene: "imagine_labyrinth"
            }
        ]
    },
    think_book: {
        text: "El libro es un acervo indeciso de borradores contradictorios. Lo he examinado alguna vez: en el tercer capítulo muere el héroe, en el cuarto está vivo. ¿Qué misterio oculta esta aparente insensatez?",
        image: "assets/think_book.webp",
        choices: [
            {
                text: "Reflexionar sobre el tiempo",
                nextScene: "time_thought"
            },
            {
                text: "Volver al camino",
                nextScene: "approach_house"
            },
            {
                text: "Contemplar las contradicciones",
                nextScene: "study_paradox"
            }
        ]
    },
    imagine_labyrinth: {
        text: "Pienso en un laberinto de laberintos, en un sinuoso laberinto creciente que abarcara el pasado y el porvenir y que implicara de algún modo los astros. Absorto en esas ilusorias imágenes, olvido mi destino de perseguido.",
        image: "assets/imagine_labyrinth.webp",
        choices: [
            {
                text: "Seguir imaginando",
                nextScene: "deeper_reflection"
            },
            {
                text: "Volver a la realidad",
                nextScene: "return_reality"
            }
        ]
    },
    deeper_reflection: {
        text: "Me siento, por un tiempo indeterminado, percibidor abstracto del mundo. El vago y vivo campo, la luna, los restos de la tarde, obran en mí; asimismo el declive que elimina cualquier posibilidad de cansancio.",
        image: "assets/deeper_reflection.webp",
        choices: [
            {
                text: "Contemplar la naturaleza",
                nextScene: "nature_contemplation"
            },
            {
                text: "Retomar el camino",
                nextScene: "approach_house"
            }
        ]
    },
    nature_contemplation: {
        text: "Pienso que un hombre puede ser enemigo de otros hombres, de otros momentos de otros hombres, pero no de un país: no de luciérnagas, palabras, jardines, cursos de agua, ponientes...",
        image: "assets/nature_contemplation.webp",
        choices: [
            {
                text: "Continuar hacia la casa",
                nextScene: "approach_house"
            },
            {
                text: "Meditar sobre el tiempo",
                nextScene: "time_contemplation"
            },
            {
                text: "Volver al sendero principal",
                nextScene: "main_path"
            }
        ]
    },
    return_reality: {
        text: "La tarde es íntima, infinita. El camino baja y se bifurca, entre las ya confusas praderas. Una música aguda y como silábica se aproxima y se aleja en el vaivén del viento, empañada de hojas y de distancia.",
        image: "assets/return_reality.webp",
        choices: [
            {
                text: "Seguir el sonido de la música",
                nextScene: "approach_house"
            }
        ]
    },
    time_thought: {
        text: "¿Y si el libro de mi antepasado fuera más que una simple novela? ¿Si cada contradicción fuera una rama diferente del tiempo? La idea me estremece mientras continúo mi camino.",
        image: "assets/nature_contemplation.webp",
        choices: [
            {
                text: "Avanzar hacia la casa",
                nextScene: "approach_house"
            }
        ]
    },
    investigate_albert: {
        text: "El nombre de Stephen Albert resuena en mi memoria. ¿Por qué me resulta familiar? Mi mente viaja a conversaciones pasadas, a rumores sobre un sinólogo británico...",
        image: "assets/investigate_albert.webp",
        choices: [
            {
                text: "Recordar lo que sé de él",
                nextScene: "albert_background"
            },
            {
                text: "Partir hacia Fenton sin más demora",
                nextScene: "to_fenton"
            }
        ]
    },

    philosophical_meditation: {
        text: "Preveo que el hombre se resignará cada día a empresas más atroces. Mientras el tren avanza, pienso en las infinitas ramificaciones del tiempo, en las innumerables convergencias y divergencias...",
        image: "assets/philosophical_meditation.webp",
        choices: [
            {
                text: "Concentrarse en el plan",
                nextScene: "approach_ashgrove"
            },
            {
                text: "Seguir reflexionando",
                nextScene: "deep_thoughts"
            }
        ]
    },
    peaceful_ending: {
        text: "Albert escucha mi confesión con una calma sorprendente. '¿No ha considerado', dice, 'que en alguna de esas infinitas bifurcaciones del tiempo podríamos no ser enemigos?'",
        image: "assets/peaceful_ending.webp",
        choices: [
            {
                text: "Considerar alternativas",
                nextScene: "alternate_solution"
            },
            {
                text: "Es demasiado tarde",
                nextScene: "tragic_choice"
            },
            {
                text: "Reflexionar sobre el tiempo",
                nextScene: "time_contemplation"
            }
        ]
    },
    alternate_solution: {
        text: "Pero el tiempo, ese laberinto de bifurcaciones infinitas, ya ha elegido su camino. Escucho pasos que se acercan...",
        image: "assets/alternate_solution.webp",
        choices: [
            {
                text: "Aceptar el destino",
                nextScene: "ending_one"
            }
        ]
    },

    ending_one: {
        text: "Lo demás es irreal, insignificante. Madden irrumpió, me arrestó. He sido condenado a la horca. Abominablemente he vencido: he comunicado a Berlín el secreto nombre de la ciudad que deben atacar.",
        image: "assets/ending_one.webp",
        choices: [
            {
                text: "Reflexionar sobre las consecuencias",
                nextScene: "final_reflection"
            }
        ]
    },

    final_reflection: {
        text: "El Jefe ha descifrado ese enigma. No sabe (nadie puede saber) mi innumerable contrición y cansancio. El tiempo seguirá bifurcándose en infinitos senderos, pero mi camino ha llegado a su fin.",
        image: "assets/final_reflection.webp",
        choices: [
            {
                text: "Volver a empezar",
                nextScene: "title_screen"
            }
        ]
    },
    // Train-related scenes
    train_last_minute: {
        text: "Espero hasta el último momento posible. El silbato del tren suena, anunciando la partida inminente. En ese instante crítico, una figura aparece en la entrada de la estación.",
        choices: [
            {
                text: "Subir rápidamente al tren",
                nextScene: "train_departs"
            },
            {
                text: "Observar si es Madden",
                nextScene: "window_observation"
            }
        ]
    },
    wait_more: {
        text: "Los minutos pasan con angustiosa lentitud. Cada rostro nuevo podría ser el de Madden. El reloj de la estación marca las ocho y cuarenta y ocho.",
        image: "assets/wait_more.webp",
        choices: [
            {
                text: "Subir al tren ahora",
                nextScene: "board_train"
            },
            {
                text: "Esperar hasta el último segundo",
                nextScene: "train_last_minute"
            }
        ]
    },
    plan_ahead: {
        text: "Mientras el tren avanza, considero mis próximos pasos. Debo encontrar a Albert, pero también debo estar preparado para la llegada inevitable de Madden.",
        image: "assets/plan_ahead.webp",
        choices: [
            {
                text: "Repasar las direcciones a Ashgrove",
                nextScene: "approach_ashgrove"
            },
            {
                text: "Meditar sobre el propósito final",
                nextScene: "deep_thoughts"
            }
        ]
    },
    // Garden and observation scenes
    alternative_path: {
        text: "Decido no confiar ciegamente en las indicaciones. Busco un camino alternativo, consciente de que cada elección podría crear una nueva bifurcación en el tiempo.",
        image: "assets/alternative_path.webp",
        choices: [
            {
                text: "Seguir el sonido de la música",
                nextScene: "follow_music"
            },
            {
                text: "Explorar los senderos laterales",
                nextScene: "explore_alone"
            }
        ]
    },
    observe_garden: {
        text: "A través de las rejas, observo el jardín. Los senderos se bifurcan y entrelazan en patrones que me recuerdan extrañamente a los que describía mi antepasado. La música china flota en el aire.",
        image: "assets/observe_garden.webp",
        choices: [
            {
                text: "Llamar a la puerta",
                nextScene: "meet_albert"
            },
            {
                text: "Estudiar más el diseño del jardín",
                nextScene: "examine_surroundings"
            }
        ]
    },
    observe_gate: {
        text: "Me detengo a cierta distancia del portón. Desde aquí puedo ver un farol que se mueve entre los árboles, acercándose. La música se hace más clara.",
        image: "assets/observe_gate.webp",
        choices: [
            {
                text: "Esperar a que se acerque",
                nextScene: "meet_albert"
            },
            {
                text: "Examinar los alrededores",
                nextScene: "examine_surroundings"
            }
        ]
    },
    // Conversation and investigation scenes
    continue_conversation: {
        text: "'¿Es usted aficionado a la música china?', pregunta Albert. Su tono es casual, pero hay algo en su mirada que sugiere un conocimiento más profundo.",
        image: "assets/continue_conversation.webp",
        choices: [
            {
                text: "Hablar sobre China",
                nextScene: "discuss_china"
            },
            {
                text: "Observar su reacción",
                nextScene: "watch_albert"
            }
        ]
    },
    plan_route: {
        text: "Estudio mentalmente el camino a seguir. Cada decisión podría ser crucial. Como en el jardín de mi antepasado, cada elección crea nuevas bifurcaciones.",
        image: "assets/plan_route.webp",
        choices: [
            {
                text: "Tomar la ruta más directa",
                nextScene: "reach_station"
            },
            {
                text: "Buscar un camino más discreto",
                nextScene: "alternative_route"
            }
        ]
    },
    examine_manuscript: {
        text: "Albert me muestra el manuscrito de Ts'ui Pên. Las páginas amarillentas están llenas de contradicciones aparentes. 'Su antepasado', dice, 'creía en infinitas series de tiempos.'",
        image: "assets/examine_manuscript.webp",
        choices: [
            {
                text: "Pedir más explicaciones",
                nextScene: "garden_revelation"
            },
            {
                text: "Examinar las contradicciones",
                nextScene: "study_paradox"
            }
        ]
    },
    // Philosophical and background scenes
    ending_philosophical: {
        text: "En este momento, pienso en todas las bifurcaciones del tiempo. En alguna de ellas, quizás, no soy un espía, ni un asesino. Pero en ésta, mi camino ya está trazado.",
        choices: [
            {
                text: "Aceptar el destino",
                nextScene: "ending_one"
            },
            {
                text: "Un último momento de reflexión",
                nextScene: "final_reflection"
            }
        ]
    },
    discuss_book: {
        text: "'El libro', explica Albert, 'es el laberinto. En él, todos los desenlaces ocurren simultáneamente. El tiempo se bifurca perpetuamente hacia innumerables futuros.'",
        image: "assets/discuss_book.webp",
        choices: [
            {
                text: "Preguntar por las contradicciones",
                nextScene: "examine_manuscript"
            },
            {
                text: "Reflexionar sobre el tiempo",
                nextScene: "time_contemplation"
            }
        ]
    },
    deep_thoughts: {
        text: "Mientras el paisaje pasa por la ventana, medito sobre el tiempo y sus infinitas ramificaciones. ¿Cuántas versiones de mí mismo existen en este momento?",
        image: "assets/deep_thoughts.webp",
        choices: [
            {
                text: "Volver a la realidad presente",
                nextScene: "approach_ashgrove"
            },
            {
                text: "Continuar la meditación",
                nextScene: "philosophical_meditation"
            }
        ]
    },
    albert_background: {
        text: "Los rumores hablaban de un sinólogo británico, un estudioso que había sido misionero en Tientsin. Su conocimiento de la cultura china era legendario, especialmente su interés por los laberintos del tiempo.",
        image: "assets/albert_background.webp",
        choices: [
            {
                text: "Partir hacia Fenton",
                nextScene: "to_fenton"
            },
            {
                text: "Investigar más",
                nextScene: "more_research"
            }
        ]
    },
    // Time and philosophy related scenes
    time_contemplation: {
        text: "'El tiempo', dice Albert, 'se bifurca perpetuamente hacia innumerables futuros. A diferencia de Newton y de Schopenhauer, su antepasado no creía en un tiempo uniforme, absoluto.'",
        image: "assets/time_contemplation.webp",
        choices: [
            {
                text: "Pedir más detalles sobre la teoría",
                nextScene: "garden_revelation"
            },
            {
                text: "Reflexionar sobre mi propia situación",
                nextScene: "contemplation_decision"
            }
        ]
    },
    study_paradox: {
        text: "Examino las aparentes contradicciones del manuscrito. 'En el tercer capítulo muere el héroe, en el cuarto está vivo', le digo a Albert. 'Precisamente', responde él con una sonrisa.",
        image: "assets/study_paradox.webp",
        choices: [
            {
                text: "Escuchar la explicación",
                nextScene: "garden_revelation"
            },
            {
                text: "Compartir mis propias teorías",
                nextScene: "discuss_book"
            }
        ]
    },

    // Conversation with Albert scenes
    discuss_china: {
        text: "'Fui misionero en Tientsin', dice Albert, 'antes de aspirar a sinólogo. La música es del periodo Ming tardío.' Su conocimiento parece infinito, como el jardín de mi antepasado.",
        image: "assets/discuss_china.webp",
        choices: [
            {
                text: "Preguntar por su investigación",
                nextScene: "examine_manuscript"
            },
            {
                text: "Revelar mi conexión con China",
                nextScene: "reveal_connection"
            }
        ]
    },
    watch_albert: {
        text: "Observo cuidadosamente sus reacciones. Sus ojos brillan con un conocimiento contenido, como si esperara el momento preciso para revelar algo importante.",
        image: "assets/watch_albert.webp",
        choices: [
            {
                text: "Revelar mi identidad",
                nextScene: "reveal_connection"
            },
            {
                text: "Seguir el juego de las insinuaciones",
                nextScene: "continue_conversation"
            }
        ]
    },

    // Station and movement scenes
    platform_stealth: {
        text: "Me muevo sigilosamente por el andén, manteniéndome en las sombras. Desde aquí puedo ver sin ser visto, mientras evalúo la situación.",
        image: "assets/platform_stealth.webp",
        choices: [
            {
                text: "Subir discretamente al tren",
                nextScene: "board_train"
            },
            {
                text: "Continuar observando",
                nextScene: "observe_passengers"
            }
        ]
    },
    change_wagon: {
        text: "Me deslizo entre los vagones, buscando una posición más segura. Cada movimiento podría delatarme, pero quedarse quieto también es un riesgo.",
        choices: [
            {
                text: "Encontrar un nuevo asiento",
                nextScene: "train_departs"
            },
            {
                text: "Vigilar desde el pasillo",
                nextScene: "window_observation"
            }
        ]
    },

    // Alternative paths and endings
    alternate_ending: {
        text: "¿Y si existiera otra solución? Como en el jardín de mi antepasado, cada momento se bifurca en infinitas posibilidades. Pero Madden se acerca, y el tiempo se agota.",
        image: "assets/alternate_ending.webp",
        choices: [
            {
                text: "Buscar una salida pacífica",
                nextScene: "peaceful_ending"
            },
            {
                text: "Aceptar lo inevitable",
                nextScene: "tragic_choice"
            }
        ]
    },

    // Park and approach scenes
    hurry_station: {
        text: "Atravieso el parque con paso rápido pero medido, intentando no llamar la atención. Cada sombra podría ser una amenaza, cada sonido podría ser Madden.",
        image: "assets/hurry_station.webp",
        choices: [
            {
                text: "Mantener el paso acelerado",
                nextScene: "reach_station"
            },
            {
                text: "Reducir la velocidad y observar",
                nextScene: "cautious_approach"
            }
        ]
    },
    cautious_approach: {
        text: "Me muevo con extrema precaución, deteniéndome periódicamente para escuchar y observar. La estación está cerca, pero la prudencia podría ser la diferencia entre la vida y la muerte.",
        image: "assets/cautious_approach.webp",
        choices: [
            {
                text: "Continuar hacia la estación",
                nextScene: "reach_station"
            },
            {
                text: "Buscar una ruta alternativa",
                nextScene: "alternative_route"
            }
        ]
    },
    examine_surroundings: {
        text: "Me detengo a estudiar el diseño del jardín. Los senderos parecen formar patrones geométricos precisos, como si cada bifurcación hubiera sido cuidadosamente calculada. ¿Es este el verdadero laberinto de Ts'ui Pên?",
        image: "assets/examine_surroundings.webp",
        choices: [
            {
                text: "Seguir los patrones del jardín",
                nextScene: "follow_patterns"
            },
            {
                text: "Llamar a la puerta",
                nextScene: "meet_albert"
            }
        ]
    },
    follow_patterns: {
        text: "Al seguir el diseño del jardín, noto que cada sendero parece representar una posible decisión, un momento en el tiempo. La música china se hace más intensa.",
        image: "assets/follow_patterns.webp",
        choices: [
            {
                text: "Acercarme al origen de la música",
                nextScene: "approach_house"
            },
            {
                text: "Contemplar el significado",
                nextScene: "contemplate_ancestor"
            }
        ]
    },
    philosophical_moment: {
        text: "Me detengo a reflexionar sobre mi situación. Como en el jardín de mi antepasado, cada decisión crea nuevas bifurcaciones en el tiempo. ¿Cuántos futuros posibles se están creando en este momento?",
        image: "assets/philosophical_moment.webp",
        choices: [
            {
                text: "Continuar el camino",
                nextScene: "reach_station"
            },
            {
                text: "Meditar más profundamente",
                nextScene: "deep_thoughts"
            }
        ]
    },

    // Add prepare_departure scene
    prepare_departure: {
        text: "Me preparo para partir. Cada momento es crucial, y Madden podría estar cada vez más cerca. Reviso mentalmente mi plan mientras me dirijo hacia la puerta.",
        image: "assets/prepare_departure.webp",
        choices: [
            {
                text: "Salir inmediatamente",
                nextScene: "escape"
            },
            {
                text: "Tomar precauciones adicionales",
                nextScene: "extra_precautions"
            }
        ]
    }


};