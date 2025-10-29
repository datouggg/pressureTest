// 焦虑测评题目数据
const questions = [
    {
        id: 1,
        text: "在过去一周里，您是否经常感到紧张不安或焦虑？",
        options: [
            { text: "完全没有", score: 0 },
            { text: "偶尔有", score: 1 },
            { text: "有时候", score: 2 },
            { text: "经常有", score: 3 },
            { text: "几乎总是", score: 4 }
        ]
    },
    {
        id: 2,
        text: "您是否难以控制自己的担忧情绪？",
        options: [
            { text: "完全可以控制", score: 0 },
            { text: "大部分时候可以", score: 1 },
            { text: "有时难以控制", score: 2 },
            { text: "经常难以控制", score: 3 },
            { text: "完全无法控制", score: 4 }
        ]
    },
    {
        id: 3,
        text: "您是否对很多事情感到过度担心？",
        options: [
            { text: "从不", score: 0 },
            { text: "很少", score: 1 },
            { text: "有时", score: 2 },
            { text: "经常", score: 3 },
            { text: "总是", score: 4 }
        ]
    },
    {
        id: 4,
        text: "您是否很难放松下来？",
        options: [
            { text: "很容易放松", score: 0 },
            { text: "比较容易", score: 1 },
            { text: "有些困难", score: 2 },
            { text: "很困难", score: 3 },
            { text: "完全无法放松", score: 4 }
        ]
    },
    {
        id: 5,
        text: "您是否因为焦虑而感到坐立不安？",
        options: [
            { text: "从未", score: 0 },
            { text: "偶尔", score: 1 },
            { text: "有时", score: 2 },
            { text: "经常", score: 3 },
            { text: "持续", score: 4 }
        ]
    },
    {
        id: 6,
        text: "您是否容易变得烦躁或易怒？",
        options: [
            { text: "不会", score: 0 },
            { text: "很少", score: 1 },
            { text: "有时会", score: 2 },
            { text: "经常会", score: 3 },
            { text: "总是", score: 4 }
        ]
    },
    {
        id: 7,
        text: "您是否感到害怕，好像将要发生可怕的事情？",
        options: [
            { text: "完全没有", score: 0 },
            { text: "轻微", score: 1 },
            { text: "中等程度", score: 2 },
            { text: "比较严重", score: 3 },
            { text: "非常严重", score: 4 }
        ]
    },
    {
        id: 8,
        text: "您的睡眠质量如何？是否因焦虑而失眠？",
        options: [
            { text: "睡眠很好", score: 0 },
            { text: "偶尔失眠", score: 1 },
            { text: "有时失眠", score: 2 },
            { text: "经常失眠", score: 3 },
            { text: "严重失眠", score: 4 }
        ]
    },
    {
        id: 9,
        text: "您是否经常感到疲劳或精力不足？",
        options: [
            { text: "精力充沛", score: 0 },
            { text: "偶尔疲劳", score: 1 },
            { text: "有时疲劳", score: 2 },
            { text: "经常疲劳", score: 3 },
            { text: "持续疲劳", score: 4 }
        ]
    },
    {
        id: 10,
        text: "您是否难以集中注意力？",
        options: [
            { text: "注意力很好", score: 0 },
            { text: "偶尔分心", score: 1 },
            { text: "有时难集中", score: 2 },
            { text: "经常难集中", score: 3 },
            { text: "完全无法集中", score: 4 }
        ]
    },
    {
        id: 11,
        text: "您是否经常感到肌肉紧张或身体疼痛？",
        options: [
            { text: "从不", score: 0 },
            { text: "很少", score: 1 },
            { text: "有时", score: 2 },
            { text: "经常", score: 3 },
            { text: "持续", score: 4 }
        ]
    },
    {
        id: 12,
        text: "您是否出现心跳加速或心悸的症状？",
        options: [
            { text: "没有", score: 0 },
            { text: "偶尔", score: 1 },
            { text: "有时", score: 2 },
            { text: "经常", score: 3 },
            { text: "频繁", score: 4 }
        ]
    },
    {
        id: 13,
        text: "您是否感到呼吸困难或气短？",
        options: [
            { text: "呼吸正常", score: 0 },
            { text: "偶尔气短", score: 1 },
            { text: "有时气短", score: 2 },
            { text: "经常气短", score: 3 },
            { text: "严重气短", score: 4 }
        ]
    },
    {
        id: 14,
        text: "您是否经常出汗或感到手脚冰凉？",
        options: [
            { text: "没有", score: 0 },
            { text: "很少", score: 1 },
            { text: "有时", score: 2 },
            { text: "经常", score: 3 },
            { text: "总是", score: 4 }
        ]
    },
    {
        id: 15,
        text: "您是否感到胃部不适或恶心？",
        options: [
            { text: "没有", score: 0 },
            { text: "偶尔", score: 1 },
            { text: "有时", score: 2 },
            { text: "经常", score: 3 },
            { text: "持续", score: 4 }
        ]
    },
    {
        id: 16,
        text: "您是否回避某些场合或活动，因为它们让您感到焦虑？",
        options: [
            { text: "从不回避", score: 0 },
            { text: "很少回避", score: 1 },
            { text: "有时回避", score: 2 },
            { text: "经常回避", score: 3 },
            { text: "总是回避", score: 4 }
        ]
    },
    {
        id: 17,
        text: "您是否感到自己的焦虑影响了工作或学习效率？",
        options: [
            { text: "没有影响", score: 0 },
            { text: "轻微影响", score: 1 },
            { text: "中等影响", score: 2 },
            { text: "严重影响", score: 3 },
            { text: "极大影响", score: 4 }
        ]
    },
    {
        id: 18,
        text: "您是否感到自己的焦虑影响了人际关系？",
        options: [
            { text: "没有影响", score: 0 },
            { text: "轻微影响", score: 1 },
            { text: "中等影响", score: 2 },
            { text: "严重影响", score: 3 },
            { text: "极大影响", score: 4 }
        ]
    },
    {
        id: 19,
        text: "您是否经常感到无助或绝望？",
        options: [
            { text: "从不", score: 0 },
            { text: "很少", score: 1 },
            { text: "有时", score: 2 },
            { text: "经常", score: 3 },
            { text: "总是", score: 4 }
        ]
    },
    {
        id: 20,
        text: "总体而言，您认为自己的焦虑程度如何？",
        options: [
            { text: "没有焦虑", score: 0 },
            { text: "轻度焦虑", score: 1 },
            { text: "中度焦虑", score: 2 },
            { text: "重度焦虑", score: 3 },
            { text: "极重度焦虑", score: 4 }
        ]
    }
];

// 评分标准和结果分析
const scoreRanges = [
    {
        min: 0,
        max: 20,
        level: "优秀",
        title: "心理状态非常健康 🌟",
        color: "score-excellent",
        image: "https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/f28b499c-4f59-4758-8902-3012fddefcee/image_1761734836_1_1.jpg",
        description: "恭喜您！您的焦虑水平非常低，心理状态非常健康。您能够很好地管理压力，保持积极乐观的心态。继续保持这种良好的状态，您的生活质量很高。",
        suggestions: [
            "继续保持规律的作息和健康的生活方式",
            "可以尝试帮助身边有焦虑困扰的朋友",
            "定期进行自我反思，保持心理健康意识",
            "培养更多兴趣爱好，丰富精神生活"
        ]
    },
    {
        min: 21,
        max: 40,
        level: "良好",
        title: "轻度焦虑 😊",
        color: "score-good",
        image: "https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/fdb6bea8-d3a7-48ab-8b1a-a85f5e14d4df/image_1761734856_6_1.jpg",
        description: "您的焦虑水平处于正常范围内，偶尔会有一些担忧和紧张，这是正常的情绪反应。适度的焦虑可以帮助您保持警觉和动力。注意自我调节，避免焦虑累积。",
        suggestions: [
            "学习并实践放松技巧，如深呼吸、冥想",
            "保持规律运动，每周至少3次，每次30分钟",
            "与朋友家人保持良好沟通，分享感受",
            "合理安排工作和休息时间，避免过度劳累",
            "培养积极的思维方式，关注生活中的美好"
        ]
    },
    {
        min: 41,
        max: 60,
        level: "需要关注",
        title: "中度焦虑 😟",
        color: "score-moderate",
        image: "https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/2ad2e7bc-da8e-43a8-b251-0b236ec179db/image_1761734844_4_1.jpg",
        description: "您的焦虑水平已经达到中等程度，可能会影响到您的日常生活和工作。建议您开始重视这个问题，采取积极措施来缓解焦虑。如果情况持续，建议寻求专业帮助。",
        suggestions: [
            "建议咨询心理健康专业人士，获取专业指导",
            "学习认知行为疗法（CBT）技巧，改变负面思维",
            "建立规律的睡眠习惯，保证充足睡眠",
            "减少咖啡因和酒精摄入",
            "尝试瑜伽、太极等身心结合的运动",
            "写日记记录情绪，识别焦虑触发因素",
            "学会说'不'，避免过度承诺"
        ]
    },
    {
        min: 61,
        max: 80,
        level: "需要重视",
        title: "重度焦虑 😰",
        color: "score-high",
        image: "https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/59e2ff2d-f776-4b34-abb0-5eac7aa01d6d/image_1761734837_2_1.jpg",
        description: "您的焦虑水平较高，已经严重影响到您的生活质量。强烈建议您尽快寻求专业心理咨询或医疗帮助。专业人士可以为您提供更有效的治疗方案，帮助您走出困境。",
        suggestions: [
            "⚠️ 强烈建议立即寻求专业心理咨询或精神科医生帮助",
            "考虑接受系统的心理治疗，如认知行为疗法",
            "在医生指导下，可能需要药物辅助治疗",
            "告知家人朋友您的状况，寻求支持",
            "避免独处，保持与他人的联系",
            "暂时减轻工作压力，必要时请假休息",
            "建立紧急联系人名单，包括心理危机热线",
            "每天进行放松练习，如渐进性肌肉放松",
            "避免做重大决定，等情绪稳定后再考虑"
        ]
    }
];
