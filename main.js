const surahNames = {
    "الفاتحة": 1,
    "البقرة": 2,
    "آل عمران": 3,
    "النساء": 4,
    "المائدة": 5,
    "الأنعام": 6,
    "الأعراف": 7,
    "الأنفال": 8,
    "التوبة": 9,
    "يونس": 10,
    "هود": 11,
    "يوسف": 12,
    "الرعد": 13,
    "إبراهيم": 14,
    "الحجر": 15,
    "النحل": 16,
    "الإسراء": 17,
    "الكهف": 18,
    "مريم": 19,
    "طه": 20,
    "الأنبياء": 21,
    "الحج": 22,
    "المؤمنون": 23,
    "النور": 24,
    "الفرقان": 25,
    "الشعراء": 26,
    "النمل": 27,
    "القصص": 28,
    "العنكبوت": 29,
    "الروم": 30,
    "لقمان": 31,
    "السجدة": 32,
    "الأحزاب": 33,
    "سبأ": 34,
    "فاطر": 35,
    "يس": 36,
    "الصافات": 37,
    "ص": 38,
    "الزمر": 39,
    "غافر": 40,
    "فصلت": 41,
    "الشورى": 42,
    "الزخرف": 43,
    "الدخان": 44,
    "الجاثية": 45,
    "الأحقاف": 46,
    "محمد": 47,
    "الفتح": 48,
    "الحجرات": 49,
    "ق": 50,
    "الذاريات": 51,
    "الطور": 52,
    "النجم": 53,
    "القمر": 54,
    "الرحمن": 55,
    "الواقعة": 56,
    "الحديد": 57,
    "المجادلة": 58,
    "الحشر": 59,
    "الممتحنة": 60,
    "الصف": 61,
    "الجمعة": 62,
    "المنافقون": 63,
    "التغابن": 64,
    "الطلاق": 65,
    "التحريم": 66,
    "الملك": 67,
    "القلم": 68,
    "الحاقة": 69,
    "المعارج": 70,
    "نوح": 71,
    "الجن": 72,
    "المزمل": 73,
    "المدثر": 74,
    "القيامة": 75,
    "الإنسان": 76,
    "المرسلات": 77,
    "النبأ": 78,
    "النازعات": 79,
    "عبس": 80,
    "التكوير": 81,
    "الانفطار": 82,
    "المطففين": 83,
    "الانشقاق": 84,
    "البروج": 85,
    "الطارق": 86,
    "الأعلى": 87,
    "الغاشية": 88,
    "الفجر": 89,
    "البلد": 90,
    "الشمس": 91,
    "الليل": 92,
    "الضحى": 93,
    "الشرح": 94,
    "التين": 95,
    "العلق": 96,
    "القدر": 97,
    "البينة": 98,
    "الزلزلة": 99,
    "العاديات": 100,
    "القارعة": 101,
    "التكاثر": 102,
    "العصر": 103,
    "الهمزة": 104,
    "الفيل": 105,
    "قريش": 106,
    "الماعون": 107,
    "الكوثر": 108,
    "الكافرون": 109,
    "النصر": 110,
    "المسد": 111,
    "الإخلاص": 112,
    "الفلق": 113,
    "الناس": 114
};

function fetchSurah() {
    const surahName = document.getElementById("surahInput").value.trim();
    const surahNumber = surahNames[surahName];

    if (surahNumber) {
        const url = `https://api.alquran.cloud/v1/surah/${surahNumber}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const surah = data.data.ayahs;
                let surahHTML = '';

                surah.forEach(ayah => {
                    surahHTML += `<p>${ayah.text}</p>`;
                });

                document.getElementById("surahDisplay").innerHTML = surahHTML;
                document.getElementById("surahDisplay").style.textAlign = "center";
                document.getElementById("surahDisplay").style.border = "2px solid black";
                document.getElementById("surahDisplay").style.marginRight = "400px";
                document.getElementById("surahDisplay").style.fontSize = "25px";
                document.getElementById("surahDisplay").style.color = "rgb(116, 66, 33)";
                document.getElementById("surahDisplay").style.padding = "20px";
                document.getElementById("surahDisplay").style.marginTop = "20px";
                document.getElementById("surahDisplay").style.borderRadius = "20px";
            })
            .catch(error => {
                console.error('حدث خطأ:', error);
            });
    } else {
        document.getElementById("surahDisplay").innerHTML = '<p>السورة غير موجودة، يرجى التأكد من الاسم.</p>';
    }
}

function displaySurahs() {
    const surahGrid = document.getElementById("surah-grid");
    surahGrid.innerHTML = ''; 

    for (let surah in surahNames) {
        const surahElement = document.createElement("div");
        surahElement.className = "surah-box";
        surahElement.textContent = surah;
        surahElement.onclick = function() {
            showSurahDetails(surah);
        };
        surahGrid.appendChild(surahElement);
    }
}


function showSurahDetails(surahName) {
    const surahNumber = surahNames[surahName];
    const url = `https://api.alquran.cloud/v1/surah/${surahNumber}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const surah = data.data.ayahs;
            let surahHTML = '';

            surah.forEach(ayah => {
                surahHTML += `<p>${ayah.text}</p>`;
            });

            const surahDisplay = document.getElementById("surahDisplay");
            surahDisplay.innerHTML = surahHTML;
            surahDisplay.style.textAlign = "center";
            surahDisplay.style.border = "2px solid black";
            surahDisplay.style.marginRight = "400px";
            surahDisplay.style.fontSize = "25px";
            surahDisplay.style.color = "rgb(116, 66, 33)";
            surahDisplay.style.padding = "20px";
            surahDisplay.style.marginTop = "20px";
            surahDisplay.style.borderRadius = "20px";
        })
        .catch(error => {
            console.error('حدث خطأ:', error);
        });
}

window.onload = function() {
    displaySurahs(); 
};



//////////////tafser/////////////////////


function fetchtafser() {
    const surahName = document.getElementById("surahInput").value.trim();
    const surahNumber = surahNames[surahName];

    if (surahNumber) {
        const url = `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${surahNumber}`;

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {

                if (data && data.result) {

                    data.result.forEach((ayah, index) => {
                    });

                    let surahHTML = '';

                    data.result.forEach(ayah => {
                        if (ayah.translation) { 
                            surahHTML += `<p>${ayah.translation}</p>`;
                        } 
                    });

                    const surahContainer = document.getElementById("surahtafser");
                    surahContainer.innerHTML = surahHTML;
                    surahContainer.style.textAlign = "center";
                    surahContainer.style.border = "2px solid black";
                    surahContainer.style.marginRight = "400px";
                    surahContainer.style.fontSize = "25px";
                    surahContainer.style.color = "rgb(116, 66, 33)";
                    surahContainer.style.padding = "20px";
                    surahContainer.style.marginTop = "20px";
                    surahContainer.style.borderRadius = "20px";
                } 
            })
            .catch(error => {
                document.getElementById("surahtafser").innerHTML = '<p>حدث خطأ أثناء جلب التفسير. حاول مرة أخرى لاحقًا.</p>';
            });
    } 
}


function displaySurahs() {
    const surahGrid = document.getElementById("surah-grid");
    surahGrid.innerHTML = ''; 

    for (let surah in surahNames) {
        const surahElement = document.createElement("div");
        surahElement.className = "surah-box";
        surahElement.textContent = surah;
        surahElement.onclick = function() {
            showSurahtafser(surah);
        };
        surahGrid.appendChild(surahElement);
    }
}


function displaySurahs() {
    const surahGrid = document.getElementById("surah-grid");
    surahGrid.innerHTML = ''; 

    
    for (let surah in surahNames) {
        const surahElement = document.createElement("div");
        surahElement.className = "surah-box";
        surahElement.textContent = surah; 
        surahElement.onclick = function() {
            showSurahDetails(surah); 
        };
        surahGrid.appendChild(surahElement);
    }
}

function showSurahDetails(surahName) {
    const surahNumber = surahNames[surahName]; 
    const url = `https://api.alquran.cloud/v1/surah/${surahNumber}`;

    
    fetch(url)
        .then(response => response.json()) 
        .then(data => {
            const surah = data.data.ayahs; 
            let surahHTML = '';

            surah.forEach(ayah => {
                surahHTML += `<p>${ayah.text}</p>`;
            });

            const surahDisplay = document.getElementById("surahDisplay");
            if (surahDisplay) {
                surahDisplay.innerHTML = surahHTML; 
                surahDisplay.style.textAlign = "center";
                surahDisplay.style.border = "2px solid black";
                surahDisplay.style.marginRight = "400px";
                surahDisplay.style.fontSize = "25px";
                surahDisplay.style.color = "rgb(116, 66, 33)";
                surahDisplay.style.padding = "20px";
                surahDisplay.style.marginTop = "20px";
                surahDisplay.style.borderRadius = "20px";
            } 
        })
        .catch(error => {
            console.error('حدث خطأ:', error); 
        });
}

window.onload = function() {
    displaySurahs(); 
}



/////////////////////ahadith///////////////////////////


let hadiths = []; // مصفوفة لتخزين الأحاديث
let currentIndex = 0; // مؤشر الحديث الحالي

// دالة لجلب الأحاديث من API
function fetchHadiths() {
    const url = "https://hadis-api-id.vercel.app/hadith/abu-dawud?page=2&limit=300";
    
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        hadiths = data.items;
        displayHadith();
    })
    .catch(error => {
        document.getElementById("hadithText").textContent = "حدث خطأ أثناء جلب الأحاديث.";
    });
}

// دالة لعرض الحديث الحالي
function displayHadith() {
    const hadithText = document.getElementById("hadithText");
    if (hadiths.length > 0) {
        hadithText.textContent = hadiths[currentIndex].arab;
    } else {
        hadithText.textContent = "لا توجد أحاديث للعرض.";
    }
    
    // تحديث حالة الأزرار
    document.getElementById("prevButton").disabled = currentIndex === 0;
    document.getElementById("nextButton").disabled = currentIndex === hadiths.length - 1;
}

// دالة للانتقال إلى الحديث التالي
function nextHadith() {
    if (currentIndex < hadiths.length - 1) {
        currentIndex++;
        displayHadith();
    }
}

// دالة للعودة إلى الحديث السابق
function prevHadith() {
    if (currentIndex > 0) {
        currentIndex--;
        displayHadith();
    }
}

// استدعاء الدالة لجلب الأحاديث عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", fetchHadiths);
