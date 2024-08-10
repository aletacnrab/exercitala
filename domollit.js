// Example localization function
function _(key) {
    const translations = {
        'domainCap': 'round' // Example translation for 'domainCap'
    };
    return translations[key];
}

// Object definition
const style = {
    strokeCap: _('domainCap')
};

console.log(style.strokeCap); // Output: round
