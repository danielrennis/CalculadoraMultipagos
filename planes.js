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
    { team: 'Unicobros', name: 'Mi Pyme - 3 Cuotas',      coefficient: 1.1355, color: 'purple' },
    { team: 'Unicobros', name: 'Mi Pyme - 6 Cuotas',      coefficient: 1.2461, color: 'purple' },
    { team: 'Unicobros', name: 'Visa/Master - 9 Cuotas',  coefficient: 1.4785, color: 'purple' },
    { team: 'Unicobros', name: 'Visa/Master - 12 Cuotas', coefficient: 1.6416, color: 'purple' },
    { team: 'Unicobros', name: 'Tuya - 3 Cuotas',         coefficient: 1.0000, color: 'purple' },
    { team: 'Unicobros', name: 'Tuya - 5 Cuotas',         coefficient: 1.1124, color: 'purple' },
    { team: 'Unicobros', name: 'Tuya - 10 Cuotas',        coefficient: 1.2122, color: 'purple' },
    { team: 'Unicobros', name: 'Naranja - 1 Pago',        coefficient: 1.0000, color: 'purple' },
    { team: 'Unicobros', name: 'Naranja - Plan Z',        coefficient: 1.1755, color: 'purple' },

    /* --- MP POINT --- */
    { team: 'MP Point', name: 'Point - 2 Cuotas',  coefficient: 1.1198, color: 'yellow' },
    { team: 'MP Point', name: 'Point - 3 Cuotas',  coefficient: 1.1468, color: 'yellow' },
    { team: 'MP Point', name: 'Point - 6 Cuotas',  coefficient: 1.2136, color: 'yellow' },
    { team: 'MP Point', name: 'Point - 9 Cuotas',  coefficient: 1.2987, color: 'yellow' },
    { team: 'MP Point', name: 'Point - 12 Cuotas', coefficient: 1.3928, color: 'yellow' },
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
    { team: 'Fiserv', name: 'Naranja - 6 Cuotas',     coefficient: 1.1481, color: 'orange' }
];

const PLANES_VERSION    = 'ryr_plans_v4';
const PLANES_UPDATED    = 'Julio 2026';
