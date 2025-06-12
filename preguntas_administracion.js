const preguntasOriginales = [];
preguntasOriginales.push(
    {
        question: "¿Qué es la supervisión?",
        options: ['Es una técnica de producción', 'Es una función de dirección que guía las actividades de los subalternos', 'Es una tarea exclusiva del departamento de recursos humanos', 'Es el proceso de contratar nuevo personal'],
        answer: 1
    },
    {
        question: "¿Cuáles son las características de la supervisión?",
        options: ['Tiene autoridad absoluta y se comunica solo de forma escrita', 'Requiere solo experiencia técnica y controla directamente los recursos', 'Representa a la administración, depende de la pericia y tiene autoridad limitada', 'Es informal, improvisada y se realiza sin planificación'],
        answer: 2
    },
    {
        question: "¿Qué es el control en la administración?",
        options: ['Contratar más personal en épocas de crisis', 'Medición y corrección del desempeño para cumplir objetivos', 'Analizar los recursos financieros sin aplicar cambios', 'Realizar auditorías internas de rutina'],
        answer: 1
    },
    {
        question: "¿Qué niveles de control existen?",
        options: ['Control estructural, de personal y contable', 'Control logístico, financiero y emocional', 'Control estratégico, táctico y operativo', 'Control directivo, grupal e individual'],
        answer: 2
    },
    {
        question: "¿Qué busca el control estratégico?",
        options: ['Reducir el número de empleados', 'Asegurar el cumplimiento de objetivos en el nivel institucional', 'Evaluar únicamente el rendimiento operativo', 'Delegar tareas al personal de menor rango'],
        answer: 1
    },
    {
        question: "¿Cuál es la finalidad del control?",
        options: ['Capacitar a los supervisores de cada área', 'Corregir errores existentes y prevenir nuevas fallas', 'Aumentar las reuniones ejecutivas', 'Sustituir al proceso de planificación'],
        answer: 1
    },
    {
        question: "¿Cuáles son las fases del control?",
        options: ['Planificación, ejecución y evaluación', 'Organización, dirección y liderazgo', 'Establecimiento de estándares, evaluación del desempeño, comparación y acción correctiva', 'Supervisión, comunicación y capacitación'],
        answer: 2
    },
    {
        question: "¿Qué son los patrones de control?",
        options: ['Estilos de liderazgo de los gerentes', 'Normas que determinan el desempeño esperado', 'Técnicas para motivar al personal', 'Indicadores financieros de la empresa'],
        answer: 1
    },
    {
        question: "¿Qué implica la acción correctiva en el control?",
        options: ['Recompensar únicamente a los empleados más antiguos', 'Ajustar los presupuestos anuales sin justificación', 'Medidas que se toman cuando el desempeño no cumple con los estándares', 'Evitar que el personal cometa errores'],
        answer: 2
    },
    {
        question: "¿Qué beneficios trae el control organizacional?",
        options: ['Aumenta los niveles de estrés y burocracia', 'Mejora la calidad, protege bienes y evalúa el desempeño', 'Elimina la necesidad de supervisión directa', 'Reduce los recursos humanos necesarios'],
        answer: 1
    },
    {
        question: "¿Qué relación hay entre supervisión y control?",
        options: ['La supervisión se encarga del presupuesto y el control de la planificación', 'Son procesos independientes sin relación directa', 'La supervisión guía, el control mide y corrige', 'El control reemplaza a la supervisión en todas las áreas'],
        answer: 2
    },
    {
        question: "¿Cómo se evalúa la efectividad de la supervisión?",
        options: ['Por la cantidad de reuniones realizadas', 'A través del cumplimiento de objetivos y satisfacción del personal', 'Por el número de supervisores asignados', 'Mediante entrevistas externas al personal'],
        answer: 1
    },
    {
        question: "¿Qué herramientas se utilizan en el control?",
        options: ['Códigos éticos y manuales operativos', 'Indicadores de desempeño y métricas de evaluación', 'Planillas de asistencia y currículums', 'Rondas de vigilancia y encuestas informales'],
        answer: 1
    },
    {
        question: "¿Por qué es importante la supervisión continua?",
        options: ['Para aumentar la presión sobre los empleados', 'Para controlar exclusivamente la asistencia', 'Para ajustar procesos y mejorar rendimiento en tiempo real', 'Para imponer sanciones más estrictas'],
        answer: 2
    },
    {
        question: "¿Qué papel juegan los supervisores en la motivación del personal?",
        options: ['Aplican medidas disciplinarias con frecuencia', 'Fomentan un ambiente positivo y apoyan el desarrollo', 'Se encargan exclusivamente de tareas administrativas', 'Evalúan el desempeño sin interacción directa'],
        answer: 1
    },
    {
        question: "¿Qué es el control táctico?",
        options: ['Es el control que se realiza únicamente a largo plazo', 'Control ejercido en el nivel intermedio, orientado al mediano plazo', 'Supervisión directa sobre las actividades del personal operativo', 'Análisis de la visión institucional a futuro'],
        answer: 1
    },
    {
        question: "¿Cuáles son las etapas del control táctico?",
        options: ['Planificación, ejecución y cierre', 'Supervisión, análisis y archivo', 'Establecimiento de patrones, evaluación de resultados, comparación y acción correctiva', 'Comunicación, motivación y liderazgo'],
        answer: 2
    },
    {
        question: "¿Qué es la retroinformación?",
        options: ['Estrategia para eliminar procesos ineficientes', 'Método de control presupuestal anticipado', 'Mecanismo que proporciona información sobre el desempeño pasado o presente', 'Proceso de contratación interna'],
        answer: 2
    },
    {
        question: "¿Por qué es importante el establecimiento de patrones?",
        options: ['Porque reduce la supervisión directa del personal', 'Porque impide que se cometan errores contables', 'Proporciona parámetros para medir el desempeño y evaluar resultados', 'Sustituye la necesidad de presupuestos'],
        answer: 2
    },
    {
        question: "¿Cómo se evalúan los resultados en el control táctico?",
        options: ['Mediante encuestas de clima laboral', 'A través del seguimiento de la ejecución de los planes de acción', 'Mediante entrevistas con los supervisores', 'Con revisiones anuales del reglamento interno'],
        answer: 1
    },
    {
        question: "¿Qué es la comparación en el control táctico?",
        options: ['Es un análisis subjetivo de los planes futuros', 'Evaluación del desempeño respecto a los patrones preestablecidos', 'Comparación entre distintas empresas competidoras', 'Técnica de reducción de costos operativos'],
        answer: 1
    },
    {
        question: "¿Qué tipos de control táctico existen?",
        options: ['Control logístico, técnico y operativo', 'Control administrativo, funcional y financiero', 'Control presupuestal, presupuesto-programa y contabilidad de costos', 'Control político, estructural y gerencial'],
        answer: 2
    },
    {
        question: "¿Cuál es la función del control presupuestal?",
        options: ['Identificar necesidades de formación del personal', 'Facilitar la planificación y control de los recursos financieros', 'Controlar el comportamiento del consumidor', 'Monitorear exclusivamente los activos físicos'],
        answer: 1
    },
    {
        question: "¿Qué es el presupuesto-programa?",
        options: ['Lista de precios de materiales y herramientas', 'Sistema que identifica misiones y gastos relacionados para mejor asignación de recursos', 'Cronograma de actividades administrativas', 'Informe de auditoría externa'],
        answer: 1
    },
    {
        question: "¿Qué clasificaciones de costos se usan en la contabilidad de costos?",
        options: ['Costos directos e indirectos', 'Costos internos y externos', 'Costos fijos y costos variables', 'Costos reales y estimados'],
        answer: 2
    },
    {
        question: "¿Cómo se realiza la evaluación del desempeño en el control táctico?",
        options: ['Entrevistando únicamente a los gerentes', 'Revisando las políticas institucionales', 'Comparando resultados con los patrones establecidos', 'A través de la rotación de personal'],
        answer: 2
    },
    {
        question: "¿Qué papel juega la descentralización en el control?",
        options: ['Reduce la necesidad de supervisión', 'Requiere mayor énfasis en los controles al delegar autoridad', 'Elimina las jerarquías de decisión', 'Aumenta el poder del nivel directivo exclusivamente'],
        answer: 1
    },
    {
        question: "¿Qué es la acción correctiva en el control táctico?",
        options: ['Medidas adoptadas cuando hay desviaciones del desempeño esperado', 'Cambios en la misión y visión de la empresa', 'Revisión de contratos con proveedores', 'Sustitución de personal por fallas menores'],
        answer: 0
    },
    {
        question: "¿Cómo se determina la efectividad del control táctico?",
        options: ['Según el tiempo invertido en las reuniones tácticas', 'Evaluando si se alcanzan los objetivos establecidos', 'Por la cantidad de recursos utilizados', 'Mediante entrevistas informales al personal'],
        answer: 1
    },
    {
        question: "¿Por qué es fundamental el seguimiento en el control táctico?",
        options: ['Permite reducir el número de supervisores', 'Permite ajustar las estrategias y mejorar el rendimiento organizacional', 'Asegura la estabilidad financiera a corto plazo', 'Impide que se realicen auditorías externas'],
        answer: 1
    },
    {
        question: "¿Qué es el reclutamiento?",
        options: ['Proceso para capacitar a nuevos empleados', 'Conjunto de técnicas para atraer candidatos calificados para puestos en la organización', 'Evaluación del desempeño del personal activo', 'Procedimiento de despido por bajo rendimiento'],
        answer: 1
    },
    {
        question: "¿Cuáles son las etapas del reclutamiento?",
        options: ['Contratación directa, inducción y capacitación', 'Entrevista, promoción y ascenso', 'Investigación interna, investigación externa y definición de técnicas', 'Selección, evaluación y desempeño'],
        answer: 2
    },
    {
        question: "¿Qué medios de reclutamiento existen?",
        options: ['Individual y colectivo', 'Regional e internacional', 'Internos (empleados actuales) y externos (candidatos de otras empresas)', 'Gratuitos y pagados'],
        answer: 2
    },
    {
        question: "¿Qué implica el reclutamiento externo?",
        options: ['Capacitar a los empleados recién ascendidos', 'Atraer candidatos de fuera de la organización', 'Reasignar tareas dentro de la empresa', 'Aplicar pruebas de desempeño'],
        answer: 1
    },
    {
        question: "¿Cómo se lleva a cabo el reclutamiento interno?",
        options: ['A través de ferias de empleo y redes sociales', 'Mediante promoción o transferencia de empleados actuales', 'Utilizando anuncios en periódicos', 'Por medio de convenios con universidades'],
        answer: 1
    },
    {
        question: "¿Cuál es el objetivo de la selección de personal?",
        options: ['Rotar empleados entre distintas áreas', 'Escoger a los candidatos más adecuados para las necesidades de la organización', 'Crear un banco de datos de currículos', 'Elaborar el manual de funciones'],
        answer: 1
    },
    {
        question: "¿Qué técnicas se utilizan en la selección de personal?",
        options: ['Observación indirecta y encuestas externas', 'Entrevistas, pruebas de conocimientos, tests psicológicos, entre otros', 'Juegos y dinámicas grupales únicamente', 'Revisión de redes sociales'],
        answer: 1
    },
    {
        question: "¿Cuál es la importancia de las entrevistas en la selección?",
        options: ['Evalúan únicamente habilidades físicas', 'Son la técnica más utilizada, a pesar de su subjetividad', 'Sustituyen la aplicación de pruebas psicométricas', 'Determinan el salario inicial del candidato'],
        answer: 1
    },
    {
        question: "¿Qué son los tests psicológicos?",
        options: ['Exámenes médicos para ingresar a la empresa', 'Pruebas que valoran el desarrollo mental y las aptitudes de los candidatos', 'Entrevistas con psicólogos clínicos', 'Cuestionarios sobre la cultura empresarial'],
        answer: 1
    },
    {
        question: "¿Qué se busca con la capacitación?",
        options: ['Reforzar la disciplina en el lugar de trabajo', 'Desarrollar habilidades y competencias en función de objetivos definidos', 'Enseñar normas internas de convivencia', 'Evaluar la actitud del personal'],
        answer: 1
    },
    {
        question: "¿Qué es un candidato potencial?",
        options: ['Persona recomendada por un familiar', 'Aspirante que ya trabajó anteriormente en la empresa', 'Persona que no busca empleo activamente, pero podría estar interesada', 'Participante de una bolsa de trabajo'],
        answer: 2
    },
    {
        question: "¿Cómo se evalúa la efectividad del reclutamiento?",
        options: ['Por la cantidad de currículos recibidos', 'Mediante la calidad de los candidatos seleccionados', 'Por el número de entrevistas realizadas', 'Observando el comportamiento de los candidatos'],
        answer: 1
    },
    {
        question: "¿Qué papel juegan las referencias en el reclutamiento?",
        options: ['Determinan el salario del aspirante', 'Ayudan a validar la idoneidad de los candidatos', 'Sustituyen la entrevista personal', 'Permiten saltarse el proceso de selección'],
        answer: 1
    },
    {
        question: "¿Qué es la evaluación de desempeño en el reclutamiento?",
        options: ['Proceso de medir la efectividad de los empleados en sus roles', 'Comparación entre perfiles de candidatos', 'Técnica de entrevista masiva', 'Evaluación médica previa a la contratación'],
        answer: 0
    },
    {
        question: "¿Por qué es importante la planificación en el reclutamiento?",
        options: ['Reduce costos en publicidad', 'Asegura que se satisfacen las necesidades de recursos humanos a corto y largo plazo', 'Evita entrevistas innecesarias', 'Permite seleccionar solo a empleados internos'],
        answer: 1
    },
    {
        question: "¿Qué es la evaluación del desempeño?",
        options: ['Proceso de inducción para nuevos empleados', 'Revisión general de la empresa', 'Apreciación sistemática del desempeño de cada persona en su puesto', 'Control de asistencia y puntualidad'],
        answer: 2
    },
    {
        question: "¿Cuáles son los objetivos de la evaluación del desempeño?",
        options: ['Medir el cumplimiento de horarios', 'Analizar las finanzas de la empresa', 'Medir el potencial humano y ofrecer oportunidades de crecimiento', 'Comparar empleados entre sí'],
        answer: 2
    },
    {
        question: "¿Qué usos administrativos tiene la evaluación del desempeño?",
        options: ['Compra de equipo de oficina', 'Capacitación, promociones, incentivos salariales, entre otros', 'Reducción de personal', 'Mantenimiento de infraestructura'],
        answer: 1
    },
    {
        question: "¿Qué métodos tradicionales existen para evaluar el desempeño?",
        options: ['Pruebas físicas y médicas', 'Escalas gráficas, elección forzosa, incidentes críticos', 'Entrevistas de salida', 'Análisis financiero'],
        answer: 1
    },
    {
        question: "¿Qué es la evaluación 360º?",
        options: ['Proceso de selección de nuevos empleados', 'Evaluación realizada únicamente por el gerente', 'Incluye retroalimentación de múltiples fuentes sobre el desempeño', 'Valoración del clima laboral externo'],
        answer: 2
    },
    {
        question: "¿Cómo se determina el desempeño de un empleado?",
        options: ['Por la cantidad de años que lleva trabajando', 'Comparando su trabajo con estándares preestablecidos', 'Observando su comportamiento social', 'Analizando sus redes sociales'],
        answer: 1
    },
    {
        question: "¿Qué importancia tiene el feedback en la evaluación del desempeño?",
        options: ['Reduce el tiempo de evaluación', 'Sustituye la supervisión directa', 'Proporciona información valiosa para el desarrollo del empleado', 'Permite comparar sueldos'],
        answer: 2
    },
    {
        question: "¿Qué papel juega el gerente en la evaluación del desempeño?",
        options: ['Castiga a los empleados que no cumplen metas', 'Facilita el proceso y proporciona orientación a los empleados', 'Evita la participación del empleado', 'Solo revisa el cumplimiento de horarios'],
        answer: 1
    },
    {
        question: "¿Qué es la autoevaluación?",
        options: ['Evaluación de desempeño hecha por el área de recursos humanos', 'Proceso en el que el empleado evalúa su propio desempeño', 'Valoración de las condiciones laborales', 'Evaluación realizada por compañeros de trabajo'],
        answer: 1
    },
    {
        question: "¿Cómo se implementa un sistema de evaluación del desempeño?",
        options: ['Observando informalmente el trabajo', 'Estableciendo criterios claros y procedimientos consistentes', 'Aplicando encuestas anónimas', 'Evaluando solo a los nuevos empleados'],
        answer: 1
    },
    {
        question: "¿Qué desafíos enfrenta la evaluación del desempeño?",
        options: ['Falta de materiales de oficina', 'Subjetividad y resistencia de los empleados a la crítica', 'Exceso de supervisión técnica', 'Rotación frecuente de gerentes'],
        answer: 1
    },
    {
        question: "¿Qué es el rendimiento esperado?",
        options: ['Nivel de desempeño que se considera aceptable para un puesto', 'Meta financiera mensual', 'Nivel máximo de productividad', 'Promedio de rendimiento de todo el equipo'],
        answer: 0
    },
    {
        question: "¿Cómo se mide el desempeño?",
        options: ['Mediante entrevistas personales', 'A través de indicadores específicos y objetivos cuantificables', 'Solo con observación directa', 'Analizando los resultados de capacitación'],
        answer: 1
    },
    {
        question: "¿Qué beneficios trae una buena evaluación del desempeño?",
        options: ['Aumenta la rotación de personal', 'Mejora la productividad y el compromiso de los empleados', 'Reduce el número de contrataciones', 'Permite eliminar el área de recursos humanos'],
        answer: 1
    },
    {
        question: "¿Qué es un plan de desarrollo individual?",
        options: ['Registro de asistencia del empleado.', 'Evaluación general del clima laboral.', 'Estrategia personalizada para mejorar las habilidades y competencias de un empleado.', 'Manual de bienvenida institucional.'],
        answer: 2
    },
    {
        question: "¿Por qué es importante la ética en las organizaciones?",
        options: ['Mejora únicamente la productividad.', 'Reduce la competencia interna.', 'Contribuye a un desempeño financiero sólido y mejora la reputación.', 'Elimina la necesidad de supervisión.'],
        answer: 2
    },
    {
        question: "¿Cuáles son las influencias que conforman la conducta ética?",
        options: ['Religiosas, políticas y culturales.', 'Culturales, legales y normativas, organizacionales e individuales.', 'Sociales, recreativas y económicas.', 'Ambientales, económicas y técnicas.'],
        answer: 1
    },
    {
        question: "¿Qué es la ética profesional?",
        options: ['Reglamento interno de una empresa.', 'Conjunto de valores y principios que guían el comportamiento en el trabajo.', 'Normas legales obligatorias.', 'Documentos de comportamiento externo.'],
        answer: 1
    },
    {
        question: "¿Cómo afecta la cultura organizacional a la ética?",
        options: ['Define la rotación del personal.', 'Determina la estructura jerárquica.', 'Define las normas y valores que influyen en el comportamiento de los empleados.', 'Sustituye los reglamentos legales.'],
        answer: 2
    },
    {
        question: "¿Qué papel juegan los líderes en la ética organizacional?",
        options: ['Controlan los presupuestos.', 'Modelan comportamientos éticos y establecen expectativas claras.', 'Evalúan el clima laboral externo.', 'Aplican sanciones únicamente.'],
        answer: 1
    },
    {
        question: "¿Qué son los códigos de ética?",
        options: ['Leyes universales para todas las empresas.', 'Documentos que establecen principios de conducta esperados en la organización.', 'Contratos laborales confidenciales.', 'Informes financieros anuales.'],
        answer: 1
    },
    {
        question: "¿Qué es el enfoque utilitario?",
        options: ['Evalúa únicamente las intenciones.', 'Se centra en los resultados de las acciones y no en los motivos.', 'Prioriza los beneficios individuales.', 'Obliga a seguir reglas sin excepción.'],
        answer: 1
    },
    {
        question: "¿Qué implica el enfoque de derechos morales?",
        options: ['Valorar siempre las normas sociales.', 'Respetar decisiones legales solamente.', 'Las decisiones deben respetar los derechos y privilegios fundamentales de las personas.', 'Apoyar únicamente al grupo mayoritario.'],
        answer: 2
    },
    {
        question: "¿Qué es el enfoque de justicia?",
        options: ['Analiza el impacto ambiental de las decisiones.', 'Evalúa decisiones con respecto a la equidad en la distribución de beneficios y costos.', 'Establece leyes empresariales.', 'Se basa en la eficiencia de las decisiones.'],
        answer: 1
    },
    {
        question: "¿Cuáles son las etapas del desarrollo moral según Kohlberg?",
        options: ['Motivación, acción, evaluación y corrección.', 'Obediencia y castigo, instrumental, interpersonal, ley y orden, contrato social y principios universales.', 'Ética básica, intermedia y avanzada.', 'Reglas sociales, normas legales y principios personales.'],
        answer: 1
    },
    {
        question: "¿Qué es la responsabilidad social empresarial?",
        options: ['Cumplimiento de metas económicas.', 'Compromiso de las organizaciones a actuar éticamente y contribuir al bienestar social.', 'Aumento de beneficios laborales.', 'Reducción de impuestos mediante donaciones.'],
        answer: 1
    },
    {
        question: "¿Qué consecuencias tiene una conducta no ética?",
        options: ['Mejora de las relaciones laborales.', 'Aumento de productividad temporal.', 'Puede resultar en multas, daños a la reputación y pérdida de confianza.', 'Mayor autonomía para los líderes.'],
        answer: 2
    },
    {
        question: "¿Cómo se puede fomentar una cultura ética?",
        options: ['Evitando evaluaciones del desempeño.', 'Comunicando expectativas, estableciendo sistemas formales de ética y premiando comportamientos éticos.', 'Contratando más personal externo.', 'Eliminando reglamentos internos.'],
        answer: 1
    },
    {
        question: "¿Qué es el principio de justicia distributiva?",
        options: ['Se enfoca en maximizar el beneficio económico.', 'Busca la equidad en los negocios internacionales.', 'Establece que las personas similares deben recibir un trato similar.', 'Evalúa el esfuerzo individual solamente.'],
        answer: 2
    },
    {
        question: "¿Qué significa tener una conducta ética en el trabajo?",
        options: ['Seguir las órdenes sin cuestionarlas.', 'Actuar de acuerdo con principios que promueven el bienestar de todos los involucrados.', 'Cumplir metas sin importar los medios.', 'Aplicar las reglas estrictamente sin excepciones.'],
        answer: 1
    },
    {
        question: "¿Qué es la capacitación?",
        options: ['Proceso para seleccionar empleados.', 'Proceso educativo que permite adquirir conocimientos y desarrollar habilidades.', 'Sistema de evaluación de personal.', 'Conjunto de normas laborales.'],
        answer: 1
    },
    {
        question: "¿Cuál es el objetivo de la capacitación?",
        options: ['Supervisar las tareas diarias.', 'Aumentar el salario.', 'Mejorar el desempeño y preparar a los empleados para sus roles.', 'Controlar el comportamiento del personal.'],
        answer: 2
    },
    {
        question: "¿Qué tipos de capacitación existen?",
        options: ['Legal, ética y financiera.', 'Técnica, administrativa, de habilidades blandas y de inducción.', 'Obligatoria, voluntaria y de emergencia.', 'Presencial, híbrida y virtual.'],
        answer: 1
    },
    {
        question: "¿Cómo se evalúa la efectividad de la capacitación?",
        options: ['Por la asistencia de los empleados.', 'Mediante encuestas de satisfacción.', 'Mediante el desempeño posterior de los empleados en sus funciones.', 'Por la duración de los cursos.'],
        answer: 2
    },
    {
        question: "¿Qué es el adiestramiento?",
        options: ['Curso introductorio de bienvenida.', 'Actividad recreativa del personal.', 'Proceso de enseñanza de habilidades prácticas para tareas específicas.', 'Evaluación psicológica inicial.'],
        answer: 2
    },
    {
        question: "¿Qué papel juegan los objetivos en la capacitación?",
        options: ['Determinan los horarios.', 'Guían el contenido y las actividades para asegurar que se cumplan las expectativas.', 'Seleccionan a los instructores.', 'Sustituyen los manuales operativos.'],
        answer: 1
    },
    {
        question: "¿Qué es la capacitación continua?",
        options: ['Formación única durante el ingreso.', 'Actualización trimestral obligatoria.', 'Proceso de aprendizaje a lo largo de la carrera profesional del empleado.', 'Talleres durante los fines de semana.'],
        answer: 2
    },
    {
        question: "¿Cómo se pueden identificar las necesidades de capacitación?",
        options: ['Por sugerencia del gerente.', 'Por comparación entre empleados.', 'A través de evaluaciones de desempeño y análisis de brechas de habilidades.', 'Mediante rotación de puestos.'],
        answer: 2
    },
    {
        question: "¿Qué es el aprendizaje basado en competencias?",
        options: ['Sistema basado en normas de conducta.', 'Enfoque que se centra en la adquisición de habilidades y conocimientos específicos.', 'Estudio de la historia de la empresa.', 'Práctica de actividades recreativas.'],
        answer: 1
    },
    {
        question: "¿Qué métodos se utilizan en la capacitación?",
        options: ['Exámenes, sanciones y promociones.', 'Talleres, cursos en línea, mentoría y aprendizaje práctico.', 'Sesiones de control y penalización.', 'Capacitaciones obligatorias por ley.'],
        answer: 1
    },
    {
        question: "¿Qué es la inducción?",
        options: ['Proceso de evaluación inicial.', 'Integración de los empleados a equipos deportivos.', 'Proceso de familiarización de nuevos empleados con la organización y su cultura.', 'Formación en liderazgo empresarial.'],
        answer: 2
    },
    {
        question: "¿Qué beneficios trae una buena capacitación?",
        options: ['Reduce los beneficios laborales.', 'Aumenta la productividad, mejora la moral y reduce la rotación de personal.', 'Disminuye la comunicación entre áreas.', 'Limita el crecimiento profesional.'],
        answer: 1
    },
    {
        question: "¿Qué es la capacitación en el puesto de trabajo?",
        options: ['Capacitación virtual antes de ingresar.', 'Formación que se realiza mientras el empleado realiza sus funciones laborales.', 'Simulación en ambientes externos.', 'Talleres fuera del horario laboral.'],
        answer: 1
    },
    {
        question: "¿Cómo se debe planificar la capacitación?",
        options: ['Asignando fechas aleatorias.', 'Consultando únicamente a los líderes.', 'Identificando objetivos, recursos y métodos adecuados para cada grupo.', 'Organizando eventos sociales.'],
        answer: 2
    },
    {
        question: "¿Qué importancia tiene la retroalimentación en la capacitación?",
        options: ['Permite a los supervisores cambiar el plan de trabajo.', 'Aumenta la presión sobre los empleados.', 'Ayuda a los empleados a entender su progreso y áreas de mejora.', 'Disminuye la responsabilidad del instructor.'],
        answer: 2
    },
    {
        question: "¿Qué es la responsabilidad social empresarial?",
        options: ['Obligación legal de contratar empleados locales.', 'Estrategia de marketing para atraer clientes.', 'Compromiso de las empresas para contribuir al bienestar social y ambiental.', 'Plan para aumentar las ventas a corto plazo.'],
        answer: 2
    },
    {
        question: "¿Por qué es importante la responsabilidad social?",
        options: ['Mejora el control interno.', 'Aumenta los impuestos.', 'Mejora la reputación y puede aumentar la lealtad del cliente.', 'Disminuye el número de empleados.'],
        answer: 2
    },
    {
        question: "¿Qué acciones pueden ser consideradas como socialmente responsables?",
        options: ['Reducción de salarios.', 'Prácticas sostenibles, apoyo a la comunidad y trato justo a los empleados.', 'Campañas de publicidad engañosa.', 'Aumento de precios sin justificación.'],
        answer: 1
    },
    {
        question: "¿Cuál es el impacto de las acciones no éticas en la empresa?",
        options: ['Mejora la rentabilidad inmediata.', 'Puede resultar en pérdida de confianza, sanciones legales y daño a la reputación.', 'Aumenta la moral de los empleados.', 'Mejora las relaciones con proveedores.'],
        answer: 1
    },
    {
        question: "¿Qué es el código de conducta?",
        options: ['Guía para entrevistas laborales.', 'Documento que establece las expectativas éticas para los empleados.', 'Manual de uso de software interno.', 'Reglamento de vacaciones.'],
        answer: 1
    },
    {
        question: "¿Cómo se puede medir la efectividad de la responsabilidad social?",
        options: ['Por la cantidad de productos vendidos.', 'A través de encuestas de satisfacción, informes de impacto y análisis de beneficios.', 'Por la presencia en redes sociales.', 'Mediante la reducción de gastos.'],
        answer: 1
    },
    {
        question: "¿Qué papel juega la ética en la toma de decisiones?",
        options: ['Asegura que se maximicen los beneficios.', 'Guía las acciones hacia opciones que respeten los derechos y valores de todos.', 'Obliga a seguir normas externas sin análisis.', 'Reemplaza la planeación estratégica.'],
        answer: 1
    },
    {
        question: "¿Qué es un enfoque de partes interesadas?",
        options: ['Considera únicamente a los accionistas.', 'Se basa en decisiones rápidas sin análisis.', 'Considera los intereses de todos los grupos afectados por las decisiones empresariales.', 'Rechaza las opiniones de los empleados.'],
        answer: 2
    },
    {
        question: "¿Por qué es importante la transparencia en los negocios?",
        options: ['Facilita la evasión fiscal.', 'Reduce el control gubernamental.', 'Fomenta la confianza y permite a los stakeholders tomar decisiones informadas.', 'Aumenta la burocracia interna.'],
        answer: 2
    },
    {
        question: "¿Qué es el greenwashing?",
        options: ['Política interna de reciclaje obligatorio.', 'Práctica engañosa donde una empresa exagera sus esfuerzos ambientales.', 'Técnica de marketing para productos verdes.', 'Nueva norma ISO para sostenibilidad.'],
        answer: 1
    },
    {
        question: "¿Cómo se puede fomentar la ética en la cultura organizacional?",
        options: ['Con sanciones y castigos frecuentes.', 'A través de formación, comunicación y liderazgo ético.', 'Mediante competencia entre empleados.', 'Estableciendo premios monetarios exclusivamente.'],
        answer: 1
    },
    {
        question: "¿Qué son los informes de sostenibilidad?",
        options: ['Documentos financieros mensuales.', 'Manuales operativos de recursos humanos.', 'Documentos que detallan el desempeño social y ambiental de una empresa.', 'Informes de inventario.'],
        answer: 2
    },
    {
        question: "¿Qué es la ética del cuidado?",
        options: ['Normas para el trato al cliente.', 'Enfoque que enfatiza la importancia de cuidar a los demás en las decisiones empresariales.', 'Técnica para prevenir accidentes.', 'Estilo de liderazgo directivo.'],
        answer: 1
    },
    {
        question: "¿Cuál es la relación entre ética y rentabilidad?",
        options: ['Son incompatibles.', 'Las prácticas éticas pueden conducir a un mejor rendimiento financiero a largo plazo.', 'La ética solo genera costos.', 'No hay relación comprobada.'],
        answer: 1
    },
    {
        question: "¿Qué desafíos enfrenta la ética en el mundo empresarial actual?",
        options: ['Acceso a financiamiento barato.', 'Estabilidad laboral permanente.', 'Presiones por resultados rápidos, competencia feroz y expectativas cambiantes de los consumidores.', 'Reducción del mercado digital.'],
        answer: 2
    }
);