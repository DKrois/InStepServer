export function formatNumber(x: number, fractionDigits = 0, useGrouping = true) {
    const [intPart, fracPart = ''] = x
        .toFixed(fractionDigits)
        .split('.');

    const groupedInt = useGrouping
        ? intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        : intPart;

    // Remove trailing 0s
    const cleanedFrac = fracPart?.replace(/0+$/, '');

    return cleanedFrac ? `${groupedInt}.${cleanedFrac}` : groupedInt;
}