function isRunNian(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const messages = {
  en: {
    invalidYear: 'Please enter a valid year between 0 and 9999.',
    leapYear: 'is a leap year.',
    notLeapYear: 'is not a leap year.'
  },
  zh: {
    invalidYear: '请输入0到9999之间的有效年份。',
    leapYear: '是闰年。',
    notLeapYear: '不是闰年。'
  },
  ta: {
    invalidYear: 'โปรดป้อนปีที่ถูกต้องระหว่าง 0 ถึง 9999',
    leapYear: 'เป็นปีอธิกสุรทิน',
    notLeapYear: 'ไม่ใช่ปีอธิกสุรทิน'
  },
  ja: {
    invalidYear: '0から9999の間の有効な年を入力してください。',
    leapYear: 'はうるう年です。',
    notLeapYear: 'はうるう年ではありません。'
  }
};

let currentLanguage = 'en';

document.getElementById('yearForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const year = parseInt(document.getElementById('year').value, 10);

  // Validate the year input
  if (isNaN(year) || year < 0 || year > 9999) {
    document.getElementById('result').textContent = messages[currentLanguage].invalidYear;
    return;
  }

  const result = isRunNian(year) ? `${year} ${messages[currentLanguage].leapYear}` : `${year} ${messages[currentLanguage].notLeapYear}`;
  document.getElementById('result').textContent = result;
});

document.getElementById('changeBgButton').addEventListener('click', function() {
  const fileInput = document.getElementById('bgInput');
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.body.style.backgroundImage = `url(${e.target.result})`;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('languageSelect').addEventListener('change', function() {
  currentLanguage = document.getElementById('languageSelect').value;
  if (currentLanguage === 'en') {
    document.getElementById('title').textContent = "Leap Year Checker";
    document.getElementById('yearLabel').textContent = 'Enter a year:';
    document.getElementById('checkButton').textContent = 'Check';
    document.getElementById('chooseFileLabel').textContent = 'Choose File';
    document.getElementById('changeBgButton').textContent = 'Change Background';
    document.getElementById('languageLabel').textContent = 'Choose Language:';
  } else if (currentLanguage === 'zh') {
    document.getElementById('title').textContent = '闰年检查器';
    document.getElementById('yearLabel').textContent = '输入年份:';
    document.getElementById('checkButton').textContent = '检查';
    document.getElementById('chooseFileLabel').textContent = '选择文件';
    document.getElementById('changeBgButton').textContent = '更改背景';
    document.getElementById('languageLabel').textContent = '选择语言:';
  } else if (currentLanguage === 'ta') {
    document.getElementById('title').textContent = 'ตัวตรวจสอบปีอธิกสุรทิน';
    document.getElementById('yearLabel').textContent = 'ป้อนปี:';
    document.getElementById('checkButton').textContent = 'ตรวจสอบ';
    document.getElementById('chooseFileLabel').textContent = 'เลือกไฟล์';
    document.getElementById('changeBgButton').textContent = 'เปลี่ยนพื้นหลัง';
    document.getElementById('languageLabel').textContent = 'เลือกภาษา:';
  } else if (currentLanguage === 'ja') {
    document.getElementById('title').textContent = 'うるう年チェッカー';
    document.getElementById('yearLabel').textContent = '年を入力:';
    document.getElementById('checkButton').textContent = 'チェック';
    document.getElementById('chooseFileLabel').textContent = 'ファイルを選択';
    document.getElementById('changeBgButton').textContent = '背景を変更';
    document.getElementById('languageLabel').textContent = '言語を選択:';
  }
});