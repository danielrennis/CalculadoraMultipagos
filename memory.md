# Memoria de Identidad Visual - RyR Computación

Este documento registra las directivas estéticas y de diseño establecidas para la **Calculadora Multipagos RyR** (v5.3.0).

## 🎨 Paleta de Colores
- **Primario (RyR):** `#E30613` (Rojo intenso del logo).
- **Fondo de Interfaz:** `#f4f7fa` (Gris azulado ultra claro).
- **Texto Principal:** `#1e293b` (Slate 800).
- **Texto Secundario/Labels:** `#94a3b8` (Slate 400).

### Colores de Plataformas (Dropdown)
- **Unicobros:** Violeta (`#7C3AED`) con fondo `#f5f3ff`.
- **MP Point (ML):** Amarillo/Dorado (`#CA8A04`) con fondo `#fefce8`.
- **Fiserv:** Naranja (`#EA580C`) con fondo `#fff7ed`.

## ✍️ Tipografía
- **Fuente Principal:** `Outfit` (Google Fonts).
- **Estilo:** Moderno, redondeado y de alta legibilidad.
- **Pesos:** 400 (Regular), 600 (Semibold), 800 (ExtraBold/Black para números).

## 📐 Estructura y Layout (Bento Grid)
- **Contenedores (Cards):** 
  - Bordes redondeados: `rounded-[2rem]` (32px).
  - Fondo: Blanco puro (`#ffffff`).
  - Sombra: `shadow-sm` sutil con borde fino `border-slate-100`.
  - Padding: Compacto (`1.5rem` / `p-6`).
- **Inputs:** 
  - Bordes redondeados: `rounded-[1.25rem]`.
  - Altura compacta: `py-2.5`.
  - Enfoque: Borde rojo RyR con resplandor suave.

## 🛠️ Componentes Especiales
- **Selector de Planes:** 
  - Implementación personalizada (no nativa) para soportar colores.
  - Apertura: **Hacia arriba** (`bottom-full mb-2`).
  - Colores por categoría (Violeta, Amarillo, Naranja).
- **Indicador de Versión:** Ubicado en el header (v5.3.0 Estable).

## 📋 Reglas de Oro
1. **Menos es Más:** Mantener el diseño limpio y scannable.
2. **Jerarquía:** Los números de "Pasar por POS" y "Total a Cobrar" deben ser los elementos más grandes de la interfaz.
3. **Redondez:** Evitar esquinas cuadradas en cualquier elemento interactivo.
