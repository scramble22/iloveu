const translations = {
    "English": "I love you",
    "French": "Je t'aime",
    "Spanish": "Te quiero",
    "German": "Ich liebe dich",
    "Italian": "Ti amo",
    "Russian": "Я тебя люблю",
    "Japanese": "愛してる",
    "Korean": "사랑해",
    "Chinese": "我爱你",
    "Swahili": "Nakupenda",
    "Hindi": "मैं तुमसे प्यार करता हूँ",
    "Arabic": "أحبك",
    "Portuguese": "Eu te amo",
    "Dutch": "Ik hou van jou",
    "Swedish": "Jag älskar dig",
    "Bengali": "আমি তোমায় ভালোবাসি",
    "Turkish": "Seni seviyorum",
    "Thai": "ฉันรักคุณ",
    "Vietnamese": "Anh yêu em",
    "Polish": "Kocham cię",
    "Indonesian": "Aku cinta padamu",
    "Czech": "Miluji tě",
    "Greek": "Σ' αγαπώ",
    "Finnish": "Rakastan sinua",
    "Danish": "Jeg elsker dig",
    "Norwegian": "Jeg elsker deg",
    "Hebrew": "אני אוהב אותך",
    "Tagalog": "Mahal kita",
    "Romanian": "Te iubesc",
    "Hungarian": "Szeretlek",
    "Ukrainian": "Я тебе люблю",
    "Malay": "Aku cinta padamu",
    "Slovak": "Ľúbim ťa",
    "Croatian": "Volim te",
    "Bulgarian": "Обичам те",
    "Serbian": "Волим те",
    "Mongolian": "Би чамд хайртай",
    "Georgian": "მიყვარხარ",
    "Armenian": "Ես քեզ սիրում եմ",
    "Latvian": "Es tevi miilu",
    "Lithuanian": "As tave myliu",
    "Estonian": "Ma armastan sind",
    "Albanian": "Te dua",
    "Macedonian": "Те сакам",
    "Maltese": "Inhobbok",
    "Icelandic": "Ég elska þig",
    "Slovenian": "Ljubim te",
    "Luxembourgish": "Ech hun dech gaer",
    "Malagasy": "Tiako ianao",
    "Pashto": "زه ته دوست ګرم",
    "Uzbek": "Men seni sevaman",
    "Kyrgyz": "Мен сени сүйөм",
    "Turkmen": "Men seni söýýärin",
    "Kazakh": "Мен сені сұрамын",
    "Tajik": "Ман туро дуст медорам",
    "Kiribati": "Ti aro mai te aroha",
    "Tongan": "Ofa atu",
    "Fijian": "Au domoni iko",
    "Samoan": "Uo te alofa ia te oe",
    "Maori": "Aroha ahau ki a koe",
    "Chamorro": "Hu guaiya hao",
    "Hawaiian": "Aloha wau ia'oe",
    "Marshallese": "I love you",
    "Palauan": "A klalo elengua",
    "Hausa": "Ina son ku",
    "Yoruba": "Mo ni fe e",
    "Igbo": "A a hụrụ m gị n'anya",
    "Haitian Creole": "Mwen renmen ou",
    "Jamaican Patois": "Mi love yuh",
    "Navajo": "Ayóó anííníshní",
    "Inuktitut": "ᓄᓇᕗᑦ ᐃᓄᖕᒥᑦᓯ",
    "Esperanto": "Mi amas vin",
    "Klingon": "qamuSHa'",
    "Dothraki": "Anha zhilak yeroon",
    "Minion Speak": "Bello!",
    "Pirate Speak": "I be lovin' ye",
    "Morse Code": ".. / .-.. --- ...- . / -.-- --- ..-",
    "Binary Code": "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01111001 01101111 01110101",
    "Sign Language": "🤟🏻🤟🏻🤟🏻🤟🏻🤟🏻🤟🏻",
    // ... (добавьте еще несколько языков) ...
};

const translationsContainer = document.getElementById('translations');

        for (const language in translations) {
            const translation = translations[language];
            const languageDiv = document.createElement('div');
            languageDiv.className = 'language';
            languageDiv.innerHTML = `<strong>${language}:</strong> ${translation}`;
            translationsContainer.appendChild(languageDiv);
        }
