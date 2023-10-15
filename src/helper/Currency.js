class Currency {
    static formatARS = x => {
        return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(x);
    }
}