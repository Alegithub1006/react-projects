## 🟢 Básico (funcionalidad esencial)

- Validar que al entrar en la app sin tareas se muestre el mensaje _“No hay tareas pendientes”_.
- Simular agregar una tarea desde el formulario y comprobar que aparece en la lista.
- Marcar una tarea como completada y verificar que cambia su estado visualmente.
- Eliminar una tarea y confirmar que desaparece de la lista.

---

## 🟡 Intermedio (flujo y lógica)

- Comprobar que el contador refleja correctamente total, pendientes y completadas al agregar, completar y eliminar.
- Crear más de 5 tareas pendientes y validar que aparece el mensaje ⚡.
- Completar todas las tareas y validar que aparece el mensaje 🎉.
- Verificar que el componente principal integra lista, formulario y contador, y que la interacción entre ellos funciona.

---

## 🔴 Avanzado (extras de entrevista)

- Agregar una tarea, recargar la página y confirmar que sigue visible (persistencia en localStorage).
- Validar que las estadísticas solo se recalculan cuando cambian las tareas (optimización con `useMemo`).
- Validar que las funciones de agregar, completar y eliminar no se regeneran innecesariamente (optimización con `useCallback`).
- Inicializar con 100 tareas y comprobar que la app sigue respondiendo rápido al agregar, completar y eliminar.

---

## 🚀 Extra (nivel experto)

- Simular un flujo completo: agregar → completar → eliminar → recargar, y validar que todo se mantiene coherente.
- Comprobar accesibilidad:
  - Los botones tienen etiquetas claras (`aria-label` o texto).
  - El formulario es navegable con teclado.
  - Los mensajes son legibles por screen readers.
