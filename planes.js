/**
 * =====================================================
 *  PLANES Y COEFICIENTES - RyR SISTEMA MULTIPAGOS
 *  Última actualización: Julio 2026
 *
 *  IMPORTANTE: Este es el archivo ÚNICO de configuración
 *  de aranceles. Al modificarlo, index.html y aranceles.html
 *  se actualizan automáticamente.
 * =====================================================
 */

const DEFAULT_PLANS = [
    /* --- UNICOBROS --- */
    { team: 'Unicobros', name: 'Visa/Master - 3 Cuotas',  coefficient: 1.1059, color: 'purple' },
    { team: 'Unicobros', name: 'Visa/Master - 6 Cuotas',  coefficient: 1.1827, color: 'purple' },
    { team: 'Unicobros', name: 'Visa/Master - 9 Cuotas',  coefficient: 1.3152, color: 'purple' },
    { team: 'Unicobros', name: 'Visa/Master - 12 Cuotas', coefficient: 1.4131, color: 'purple' },
    { team: 'Unicobros', name: 'Tuya - 3 Cuotas',         coefficient: 1.0000, color: 'purple' },
    { team: 'Unicobros', name: 'Tuya - 5 Cuotas',         coefficient: 1.1124, color: 'purple' },
    { team: 'Unicobros', name: 'Tuya - 10 Cuotas',        coefficient: 1.2122, color: 'purple' },
    { team: 'Unicobros', name: 'Naranja - 1 Pago',        coefficient: 1.0000, color: 'purple' },
    { team: 'Unicobros', name: 'Naranja - Plan Z',        coefficient: 1.1755, color: 'purple' },

    /* --- MP POINT --- */
    { team: 'MP Point', name: 'Point - 2 Cuotas',  coefficient: 1.1296, color: 'yellow' },
    { team: 'MP Point', name: 'Point - 3 Cuotas',  coefficient: 1.1508, color: 'yellow' },
    { team: 'MP Point', name: 'Point - 6 Cuotas',  coefficient: 1.2519, color: 'yellow' },
    { team: 'MP Point', name: 'Point - 9 Cuotas',  coefficient: 1.3545, color: 'yellow' },
    { team: 'MP Point', name: 'Point - 12 Cuotas', coefficient: 1.4547, color: 'yellow' },
    { team: 'MP Point', name: 'Point - 18 Cuotas', coefficient: 1.5361, color: 'yellow' },

    /* --- FISERV --- */
    { team: 'Fiserv', name: 'Visa/Master - 2 Cuotas',  coefficient: 1.1049, color: 'orange' },
    { team: 'Fiserv', name: 'Visa/Master - 3 Cuotas',  coefficient: 1.1302, color: 'orange' },
    { team: 'Fiserv', name: 'Visa/Master - 4 Cuotas',  coefficient: 1.1576, color: 'orange' },
    { team: 'Fiserv', name: 'Visa/Master - 5 Cuotas',  coefficient: 1.1840, color: 'orange' },
    { team: 'Fiserv', name: 'Visa/Master - 6 Cuotas',  coefficient: 1.2110, color: 'orange' },
    { team: 'Fiserv', name: 'Visa/Master - 9 Cuotas',  coefficient: 1.3034, color: 'orange' },
    { team: 'Fiserv', name: 'Visa/Master - 12 Cuotas', coefficient: 1.3945, color: 'orange' },
    { team: 'Fiserv', name: 'Naranja - Plan Z',        coefficient: 1.0805, color: 'orange' },
    { team: 'Fiserv', name: 'Naranja - 5 Cuotas',     coefficient: 1.1377, color: 'orange' },
    { team: 'Fiserv', name: 'Naranja - 6 Cuotas',     coefficient: 1.1481, color: 'orange' },
    { team: 'Fiserv', name: 'Naranja - 9 Cuotas',     coefficient: 1.2702, color: 'orange' }
];

const PLANES_VERSION    = 'ryr_plans_v10';
const PLANES_UPDATED    = 'Noviembre 2026';
