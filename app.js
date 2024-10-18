function isRunNian(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

document.getElementById('yearForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const year = parseInt(document.getElementById('year').value, 10);

  // Validate the year input
  if (isNaN(year) || year < 0 || year > 9999) {
    document.getElementById('result').textContent = 'Please enter a valid year between 0 and 9999.';
    return;
  }

  const result = isRunNian(year) ? `${year} is a leap year.` : `${year} is not a leap year.`;
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
  const language = document.getElementById('languageSelect').value;
  if (language === 'en') {
    document.getElementById('title').textContent = "Leap Year Checker";
    document.getElementById('yearLabel').textContent = 'Enter a year:';
    document.getElementById('checkButton').textContent = 'Check';
    document.getElementById('chooseFileLabel').textContent = 'Choose File';
    document.getElementById('changeBgButton').textContent = 'Change Background';
    document.getElementById('languageLabel').textContent = 'Choose Language:';
  } else if (language === 'zh') {
    document.getElementById('title').textContent = '闰年检查器';
    document.getElementById('yearLabel').textContent = '输入年份:';
    document.getElementById('checkButton').textContent = '检查';
    document.getElementById('chooseFileLabel').textContent = '选择文件';
    document.getElementById('changeBgButton').textContent = '更改背景';
    document.getElementById('languageLabel').textContent = '选择语言:';
  } else if (language === 'ta') {
    document.getElementById('title').textContent = 'ตัวตรวจสอบปีอธิกสุรทิน';
    document.getElementById('yearLabel').textContent = 'ป้อนปี:';
    document.getElementById('checkButton').textContent = 'ตรวจสอบ';
    document.getElementById('chooseFileLabel').textContent = 'เลือกไฟล์';
    document.getElementById('changeBgButton').textContent = 'เปลี่ยนพื้นหลัง';
    document.getElementById('languageLabel').textContent = 'เลือกภาษา:';
  } else if (language === 'ja') {
    document.getElementById('title').textContent = 'うるう年チェッカー';
    document.getElementById('yearLabel').textContent = '年を入力:';
    document.getElementById('checkButton').textContent = 'チェック';
    document.getElementById('chooseFileLabel').textContent = 'ファイルを選択';
    document.getElementById('changeBgButton').textContent = '背景を変更';
    document.getElementById('languageLabel').textContent = '言語を選択:';
  }
});