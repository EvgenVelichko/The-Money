function switchLanguageAndNavigate(langCode, pageUrl) {
    var languageName;
    switch (langCode) {
        case 'ru':
            languageName = 'Русский';
            break;
        case 'en':
            languageName = 'Английский';
            break;
        case 'uk':
            languageName = 'Украинский';
            break;
        default:
            languageName = 'Русский';
    }
    document.getElementById('current-language').textContent = languageName;
    closeLanguageDropdown();
    window.location.href = pageUrl;
}

function toggleLanguageDropdown() {
    var languageList = document.getElementById('language-list');
    languageList.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    var languageDropdown = document.getElementById('language-list');
    var dropdownToggle = document.getElementById('language-dropdown-toggle');
    if (!languageDropdown.contains(event.target) && event.target !== dropdownToggle) {
        closeLanguageDropdown();
    }
});

function closeLanguageDropdown() {
    var languageList = document.getElementById('language-list');
    if (languageList.classList.contains('active')) {
        languageList.classList.remove('active');
    }
}

