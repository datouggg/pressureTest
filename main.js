// 全局状态
let currentQuestionIndex = 0;
let answers = [];
let startTime = null;
let timerInterval = null;

// 页面元素
let welcomePage, testPage, resultPage;

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    welcomePage = document.getElementById('welcomePage');
    testPage = document.getElementById('testPage');
    resultPage = document.getElementById('resultPage');
    console.log('焦虑测评系统已加载');
});

// 开始测评
window.startTest = function() {
    welcomePage.classList.add('hidden');
    testPage.classList.remove('hidden');
    currentQuestionIndex = 0;
    answers = new Array(questions.length).fill(null);
    startTime = Date.now();
    startTimer();
    renderQuestion();
};

// 渲染题目
function renderQuestion() {
    const question = questions[currentQuestionIndex];
    const questionNum = currentQuestionIndex + 1;
    
    // 更新进度
    document.getElementById('currentQuestionNum').textContent = questionNum;
    document.getElementById('progressText').textContent = `${questionNum}/20`;
    const progress = (questionNum / questions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    
    // 更新题目文本
    document.getElementById('questionText').textContent = question.text;
    
    // 渲染选项
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const isSelected = answers[currentQuestionIndex] === index;
        const optionCard = document.createElement('div');
        optionCard.className = `option-card p-4 rounded-xl flex items-center ${isSelected ? 'selected' : 'bg-gray-50'}`;
        optionCard.onclick = () => selectOption(index);
        
        optionCard.innerHTML = `
            <div class="option-radio mr-4"></div>
            <div class="flex-1">
                <p class="font-semibold text-gray-800">${option.text}</p>
            </div>
            <div class="text-sm text-gray-500 font-medium">${option.score}分</div>
        `;
        
        optionsContainer.appendChild(optionCard);
    });
    
    // 更新按钮状态
    updateButtons();
}

// 选择选项
window.selectOption = function(optionIndex) {
    answers[currentQuestionIndex] = optionIndex;
    renderQuestion();
};

// 上一题
window.previousQuestion = function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
};

// 下一题
window.nextQuestion = function() {
    if (answers[currentQuestionIndex] === null) {
        showToast('请选择一个选项后再继续', 'warning');
        return;
    }
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        // 完成测评
        finishTest();
    }
};

// 更新按钮状态
function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.innerHTML = '<i class="fas fa-check-circle mr-2"></i>完成测评';
    } else {
        nextBtn.innerHTML = '下一题<i class="fas fa-arrow-right ml-2"></i>';
    }
    
    nextBtn.disabled = answers[currentQuestionIndex] === null;
}

// 计时器
function startTimer() {
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        document.getElementById('timer').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// 完成测评
function finishTest() {
    clearInterval(timerInterval);
    
    // 计算总分
    let totalScore = 0;
    answers.forEach((answerIndex, questionIndex) => {
        if (answerIndex !== null) {
            totalScore += questions[questionIndex].options[answerIndex].score;
        }
    });
    
    // 显示结果
    showResult(totalScore);
}

// 显示结果
function showResult(totalScore) {
    testPage.classList.add('hidden');
    resultPage.classList.remove('hidden');
    
    // 找到对应的分数范围
    const result = scoreRanges.find(range => 
        totalScore >= range.min && totalScore <= range.max
    );
    
    // 更新结果显示
    document.getElementById('totalScore').textContent = `${totalScore} 分`;
    document.getElementById('resultTitle').textContent = result.title;
    document.getElementById('resultBadge').textContent = result.level;
    document.getElementById('resultBadge').className = 
        `inline-block px-6 py-2 rounded-full text-white font-bold text-xl ${result.color}`;
    document.getElementById('resultImage').src = result.image;
    document.getElementById('resultDescription').textContent = result.description;
    
    // 更新分数条
    const scorePercentage = (totalScore / 80) * 100;
    const scoreBar = document.getElementById('scoreBar');
    scoreBar.className = `h-4 rounded-full transition-all duration-1000 ${result.color}`;
    setTimeout(() => {
        scoreBar.style.width = `${scorePercentage}%`;
    }, 100);
    
    // 更新建议列表
    const suggestionsList = document.getElementById('suggestionsList');
    suggestionsList.innerHTML = '';
    result.suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.className = 'flex items-start text-gray-700';
        li.innerHTML = `
            <i class="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
            <span>${suggestion}</span>
        `;
        suggestionsList.appendChild(li);
    });
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 重新测评
window.restartTest = function() {
    resultPage.classList.add('hidden');
    welcomePage.classList.remove('hidden');
    currentQuestionIndex = 0;
    answers = new Array(questions.length).fill(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 分享结果
window.shareResult = function() {
    const totalScore = answers.reduce((sum, answerIndex, questionIndex) => {
        if (answerIndex !== null) {
            return sum + questions[questionIndex].options[answerIndex].score;
        }
        return sum;
    }, 0);
    
    const result = scoreRanges.find(range => 
        totalScore >= range.min && totalScore <= range.max
    );
    
    const shareText = `我完成了焦虑程度心理测评！\n得分：${totalScore}分\n评级：${result.level}\n${result.title}\n\n关注心理健康，从了解自己开始 🐰`;
    
    // 尝试使用 Web Share API
    if (navigator.share) {
        navigator.share({
            title: '焦虑程度心理测评',
            text: shareText,
            url: window.location.href
        }).then(() => {
            showToast('分享成功！', 'success');
        }).catch((error) => {
            if (error.name !== 'AbortError') {
                copyToClipboard(shareText);
            }
        });
    } else {
        // 降级方案：复制到剪贴板
        copyToClipboard(shareText);
    }
};

// 复制到剪贴板
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('结果已复制到剪贴板！', 'success');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

// 降级复制方案
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast('结果已复制到剪贴板！', 'success');
    } catch (err) {
        showToast('复制失败，请手动复制', 'error');
    }
    
    document.body.removeChild(textArea);
}

// 显示提示消息
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-semibold animate-slide-up';
    
    const colors = {
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
        error: 'bg-red-500',
        info: 'bg-blue-500'
    };
    
    const icons = {
        success: 'fa-check-circle',
        warning: 'fa-exclamation-triangle',
        error: 'fa-times-circle',
        info: 'fa-info-circle'
    };
    
    toast.className += ` ${colors[type]}`;
    toast.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${icons[type]} mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// 键盘快捷键支持
document.addEventListener('keydown', (e) => {
    if (testPage.classList.contains('hidden')) return;
    
    // 数字键 1-5 选择选项
    if (e.key >= '1' && e.key <= '5') {
        const optionIndex = parseInt(e.key) - 1;
        if (optionIndex < questions[currentQuestionIndex].options.length) {
            selectOption(optionIndex);
        }
    }
    
    // 左箭头：上一题
    if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
        previousQuestion();
    }
    
    // 右箭头或回车：下一题
    if ((e.key === 'ArrowRight' || e.key === 'Enter') && answers[currentQuestionIndex] !== null) {
        nextQuestion();
    }
});

// 自动保存进度到本地存储
function saveProgress() {
    const progress = {
        currentQuestionIndex,
        answers,
        startTime
    };
    localStorage.setItem('anxietyTestProgress', JSON.stringify(progress));
}

// 加载保存的进度
function loadProgress() {
    const saved = localStorage.getItem('anxietyTestProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        // 可以在这里添加恢复进度的逻辑
        return progress;
    }
    return null;
}

// 清除保存的进度
function clearProgress() {
    localStorage.removeItem('anxietyTestProgress');
}

// 答题时自动保存
const originalSelectOption = window.selectOption;
window.selectOption = function(optionIndex) {
    originalSelectOption(optionIndex);
    saveProgress();
};

// 完成测评时清除进度
const originalFinishTest = finishTest;
finishTest = function() {
    clearProgress();
    originalFinishTest();
};