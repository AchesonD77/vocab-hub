/**
 * 2026年9月第3周 清洗与结构化后的核心词库
 * 包含：词形还原(lemma)、原文摘录对照(raw)、语域(domain)、重现频次(freq)、
 * 音标、中英释义、高频搭配(collocations)、同近义词(synonyms)、构词解析(morphology) 及 日常+雅思/科研双造句
 */
const VOCAB_DATA_2026_09_W3 = [
  // ==================== 2026年9月13日 ====================
  {
    id: "w3-01",
    date: "2026-09-13",
    lemma: "administrative burden",
    raw: "administrative burden",
    pos: "n. phr.",
    phonetic: "/ədˈmɪnɪstrətɪv ˈbɜːdn/",
    domain: "学术高频",
    freq: 1,
    cn: "行政负担；繁琐的事务性流程开销",
    en: "The time, effort, and cost required to comply with official rules, paperwork, or organizational procedures.",
    synonyms: ["red tape", "bureaucratic overhead", "compliance cost"],
    collocations: ["reduce administrative burden", "heavy administrative burden", "impose a burden on"],
    morphology: "administrat(e)（管理）+ -ive（形容词后缀）+ burden（重担）",
    dailyEn: "Filling out all these reimbursement forms is such an administrative burden.",
    dailyCn: "填写所有这些报销表格真是太繁琐的行政负担了。",
    ieltsEn: "Automating routine data entry can substantially alleviate the administrative burden on healthcare professionals.",
    ieltsCn: "将常规数据录入自动化，可以大幅减轻医护人员的行政事务负担。"
  },
  {
    id: "w3-02",
    date: "2026-09-13",
    lemma: "disambiguate",
    raw: "disambiguate",
    pos: "v.",
    phonetic: "/ˌdɪsæmˈbɪɡjueɪt/",
    domain: "CS & 系统",
    freq: 1,
    cn: "消除歧义；明确区分（同名或易混概念）",
    en: "To remove uncertainty of meaning from an expression, query, or entity so that it has a single clear interpretation.",
    synonyms: ["clarify", "differentiate", "distinguish"],
    collocations: ["disambiguate entities", "context-aware disambiguation", "disambiguate between A and B"],
    morphology: "dis-（去除）+ ambi-（双向/模棱两可）+ -ate（动词后缀）。同周关联词：Ambiguity（9月15日）",
    dailyEn: "Could you add a middle initial to disambiguate the two Alex Smiths in our group?",
    dailyCn: "你能在中间名加上首字母，来区分我们组里那两个同名同姓的 Alex Smith 吗？",
    ieltsEn: "Natural language processing models rely on contextual embeddings to disambiguate polysemous words accurately.",
    ieltsCn: "自然语言处理模型依赖上下文嵌入向量来准确消除多义词的歧义。"
  },
  {
    id: "w3-03",
    date: "2026-09-13",
    lemma: "fortnightly",
    raw: "are released fortnightly",
    pos: "adv. / adj.",
    phonetic: "/ˈfɔːtnaɪtli/",
    domain: "英式日常",
    freq: 1,
    cn: "每两周一次地（的）；双周刊",
    en: "Happening or produced once every two weeks (fourteen nights).",
    synonyms: ["biweekly", "every two weeks"],
    collocations: ["published fortnightly", "fortnightly meeting", "fortnightly pay"],
    morphology: "源自古英语 fēowertīene niht（fourteen nights，十四夜 = 两周），英联邦与雅思听力极高频词。",
    dailyEn: "The podcast episodes are released fortnightly on Wednesday mornings.",
    dailyCn: "这档播客节目每两周在周三早上更新一期。",
    ieltsEn: "Municipal recycling collections are conducted fortnightly to optimize logistical efficiency across suburban districts.",
    ieltsCn: "市政回收工作每两周进行一次，以优化郊区各片区的物流效率。"
  },
  {
    id: "w3-04",
    date: "2026-09-13",
    lemma: "interrelated",
    raw: "are interrelated",
    pos: "adj.",
    phonetic: "/ˌɪntərɪˈleɪtɪd/",
    domain: "学术高频",
    freq: 1,
    cn: "相互关联的；彼此牵连的",
    en: "Having a mutual or reciprocal relation whereby changes in one factor affect the others.",
    synonyms: ["interconnected", "interdependent", "linked"],
    collocations: ["closely interrelated", "interrelated factors", "complex interrelated systems"],
    morphology: "inter-（在……之间/相互）+ relate（关联）+ -ed",
    dailyEn: "Sleep quality and mood are closely interrelated in daily life.",
    dailyCn: "在日常生活中，睡眠质量和情绪是紧密相连的。",
    ieltsEn: "Economic stability and environmental sustainability are fundamentally interrelated rather than mutually exclusive goals.",
    ieltsCn: "经济稳定与环境可持续性从根本上是相互关联的，而非彼此排斥的目标。"
  },
  {
    id: "w3-05",
    date: "2026-09-13",
    lemma: "fine-grained",
    raw: "Fine-Grained",
    pos: "adj.",
    phonetic: "/ˌfaɪn ˈɡreɪnd/",
    domain: "CS & 系统",
    freq: 1,
    cn: "细粒度的；精细入微的（反义词：同日收录的 coarse）",
    en: "Involving great attention to small details or operating at a very detailed, modular sub-component level.",
    synonyms: ["granular", "detailed", "minute"],
    collocations: ["fine-grained locking", "fine-grained access control", "coarse-to-fine"],
    morphology: "fine（细小的）+ grain（纹理/颗粒）+ -ed。对照同日词条：coarse（粗粒度的）。",
    dailyEn: "This app gives you fine-grained control over which notifications can wake your screen.",
    dailyCn: "这款应用让你能极其精细地控制哪些通知可以点亮屏幕。",
    ieltsEn: "Fine-grained profiling reveals that memory bandwidth, rather than compute capacity, dominates execution latency.",
    ieltsCn: "细粒度的性能分析表明，主导执行延迟的是内存带宽而非计算能力。"
  },
  {
    id: "w3-06",
    date: "2026-09-13",
    lemma: "exclude",
    raw: "are excluded from",
    pos: "v.",
    phonetic: "/ɪkˈskluːd/",
    domain: "学术高频",
    freq: 1,
    cn: "把……排除在外；不包括",
    en: "To deny someone access to a place or privilege, or to deliberately omit something from consideration.",
    synonyms: ["omit", "rule out", "bar"],
    collocations: ["be excluded from", "mutually exclusive", "compound exclusion"],
    morphology: "ex-（向外）+ clud（关闭，源自拉丁语 claudere）。同周关联词：exclusive (09-15)、compound exclusion (09-16)。",
    dailyEn: "Service charges are excluded from the bill, so you might want to leave a tip.",
    dailyCn: "账单里不包含服务费，所以你可能得留点小费。",
    ieltsEn: "Outlier samples with missing timestamps are excluded from the final evaluation dataset to preserve statistical validity.",
    ieltsCn: "缺失时间戳的异常样本被排除在最终评估数据集之外，以保证统计有效性。"
  },
  {
    id: "w3-07",
    date: "2026-09-13",
    lemma: "nominal",
    raw: "nominal",
    pos: "adj.",
    phonetic: "/ˈnɒmɪnəl/",
    domain: "学术高频",
    freq: 1,
    cn: "① 名义上的；②（费用）象征性的、微不足道的；③（统计学）定类/标称的",
    en: "Existing in name only; very small in comparison with real value; or referring to unranked categorical data.",
    synonyms: ["token", "symbolic", "categorical"],
    collocations: ["a nominal fee", "nominal value", "nominal variable"],
    morphology: "nomin-（名字，源自拉丁语 nomen）+ -al",
    dailyEn: "Students only have to pay a nominal fee of £2 to join the society.",
    dailyCn: "学生只需支付 2 英镑的象征性费用即可加入该社团。",
    ieltsEn: "Although nominal wages rose slightly, real purchasing power declined due to compounding inflation.",
    ieltsCn: "尽管名义工资略有上升，但由于复合通货膨胀，实际购买力反而下降了。"
  },
  {
    id: "w3-08",
    date: "2026-09-13",
    lemma: "eligible",
    raw: "eligible",
    pos: "adj.",
    phonetic: "/ˈelɪdʒəbl/",
    domain: "英式日常",
    freq: 1,
    cn: "符合条件的；有资格获得……的",
    en: "Having the right to do or obtain something; satisfying the appropriate conditions.",
    synonyms: ["qualified", "entitled"],
    collocations: ["be eligible for a refund", "eligible candidates", "eligible to vote"],
    morphology: "e-（出）+ lig（选择，同 elect）+ -ible（可……的）",
    dailyEn: "Full-time students are eligible for a 30% discount on public transport.",
    dailyCn: "全日制学生有资格享受公共交通七折优惠。",
    ieltsEn: "Only households falling below the stipulated income threshold are eligible for government housing subsidies.",
    ieltsCn: "只有低于规定收入门槛的家庭才有资格获得政府住房补贴。"
  },
  {
    id: "w3-09",
    date: "2026-09-13",
    lemma: "sparse",
    raw: "Sparse",
    pos: "adj.",
    phonetic: "/spɑːs/",
    domain: "CS & 系统",
    freq: 1,
    cn: "稀疏的（矩阵/数据含大量零值）；稀少的",
    en: "Thinly dispersed or scattered; in computing, having a high proportion of zero or missing elements.",
    synonyms: ["scanty", "scattered", "thin"],
    collocations: ["sparse matrix", "sparse representation", "sparse population"],
    morphology: "源自拉丁语 sparsus（散落的）。反义词：dense（稠密的）。",
    dailyEn: "Vegetation becomes increasingly sparse as you climb higher up the mountain.",
    dailyCn: "随着你往山上爬得越高，植被变得越来越稀疏。",
    ieltsEn: "Exploiting sparse tensor structures allows the kernel to bypass redundant zero-value multiplications.",
    ieltsCn: "利用稀疏张量结构使内核能够跳过冗余的零值乘法运算。"
  },
  {
    id: "w3-10",
    date: "2026-09-13",
    lemma: "canonical",
    raw: "Canonical",
    pos: "adj.",
    phonetic: "/kəˈnɒnɪkəl/",
    domain: "CS & 系统",
    freq: 1,
    cn: "规范的；标准化的；权威经典的",
    en: "Reduced to the simplest and most significant standard form without loss of generality; widely accepted as authoritative.",
    synonyms: ["standard", "authoritative", "orthodox"],
    collocations: ["canonical form", "canonical example", "canonical representation"],
    morphology: "canon（准则/经典）+ -ical",
    dailyEn: "That textbook gives the canonical explanation of how compilers work.",
    dailyCn: "那本教材对编译器的工作原理给出了最权威经典的解释。",
    ieltsEn: "Before hashing queries, the execution engine converts each expression into a canonical form to eliminate duplicate lookups.",
    ieltsCn: "在对查询进行哈希之前，执行引擎会将每个表达式转换为规范形式，以消除重复查找。"
  },
  {
    id: "w3-11",
    date: "2026-09-13",
    lemma: "speedup",
    raw: "Speedup",
    pos: "n.",
    phonetic: "/ˈspiːdʌp/",
    domain: "CS & 系统",
    freq: 2,
    cn: "加速比；性能加速幅度",
    en: "A metric measuring the relative performance improvement between two systems processing the same problem.",
    synonyms: ["acceleration", "performance gain"],
    collocations: ["achieve a 2x speedup", "geomean speedup", "asymptotic speedup"],
    morphology: "speed + up 合成名词。本周在 9月13日 与 9月15日 均高频出现。",
    dailyEn: "Upgrading to an SSD gave my old laptop a noticeable speedup.",
    dailyCn: "升级到固态硬盘让我的旧笔记本电脑有了明显的速度提升。",
    ieltsEn: "Across the benchmark suite, our adaptive routing mechanism achieves a geometric mean speedup of 1.38x over the baseline.",
    ieltsCn: "在基准测试套件中，我们的自适应路由机制相比基线实现了 1.38 倍的几何平均加速比。"
  },
  {
    id: "w3-12",
    date: "2026-09-13",
    lemma: "diagnostic",
    raw: "Diagnostic / Diagnostics",
    pos: "adj. / n.",
    phonetic: "/ˌdaɪəɡˈnɒstɪk/",
    domain: "CS & 系统",
    freq: 3,
    cn: "诊断的；系统诊断信息 / 诊断工具",
    en: "Concerned with the identification of the nature and cause of an error, bottleneck, or condition.",
    synonyms: ["analytical", "indicative", "troubleshooting"],
    collocations: ["run diagnostics", "diagnostic probe", "diagnostic metric"],
    morphology: "dia-（穿过/彻底）+ gnos（知晓）+ -tic。本周在 13日、15日、16日 连续三天出现！",
    dailyEn: "I ran a quick network diagnostic to figure out why the Wi-Fi kept dropping.",
    dailyCn: "我运行了一个快速网络诊断，想弄清楚为什么 Wi-Fi 老是断线。",
    ieltsEn: "Comprehensive diagnostic logs are emitted whenever execution latency exceeds the predefined calibration threshold.",
    ieltsCn: "每当执行延迟超过预定义的校准阈值时，系统都会输出全面的诊断日志。"
  },
  {
    id: "w3-13",
    date: "2026-09-13",
    lemma: "scalability",
    raw: "Scalability",
    pos: "n.",
    phonetic: "/ˌskeɪləˈbɪləti/",
    domain: "CS & 系统",
    freq: 1,
    cn: "可扩展性；可伸缩性",
    en: "The capacity of a system, network, or process to handle a growing amount of workload efficiently.",
    synonyms: ["expandability", "elasticity"],
    collocations: ["horizontal scalability", "scalability bottleneck", "evaluate scalability"],
    morphology: "scale（规模/扩展）+ -ability（具备……能力）",
    dailyEn: "When choosing a cloud database, scalability is just as important as price.",
    dailyCn: "在选择云数据库时，可扩展性和价格同样重要。",
    ieltsEn: "Centralized synchronization locks severely limit the scalability of distributed data processing pipelines.",
    ieltsCn: "集中式同步锁严重限制了分布式数据处理流水线的可扩展性。"
  },

  // ==================== 2026年9月15日 ====================
  {
    id: "w3-14",
    date: "2026-09-15",
    lemma: "overhead",
    raw: "overhead / Overhead",
    pos: "n.",
    phonetic: "/ˈəʊvəhed/",
    domain: "CS & 系统",
    freq: 2,
    cn: "① [CS] 系统额外开销（内存/CPU/通信耗损）；② [商] 日常管理开支",
    en: "Excess or indirect computation time, memory, or bandwidth required to perform a specific task; or ongoing business expenses.",
    synonyms: ["computational cost", "operating expense"],
    collocations: ["incur minimal overhead", "runtime overhead", "memory overhead"],
    morphology: "over + head。在 9月15日 当天词表中重复出现 2 次，CS 论文绝对核心词。",
    dailyEn: "Working remotely helps small startups keep their office overhead low.",
    dailyCn: "远程办公有助于小型初创公司保持较低的办公室日常开支。",
    ieltsEn: "Our lightweight candidate probe introduces negligible runtime overhead while preserving high classification accuracy.",
    ieltsCn: "我们轻量级的候选探针在保持高分类准确率的同时，仅引入了可忽略不计的运行时开销。"
  },
  {
    id: "w3-15",
    date: "2026-09-15",
    lemma: "cuppa",
    raw: "cuppa",
    pos: "n.",
    phonetic: "/ˈkʌpə/",
    domain: "英式日常",
    freq: 1,
    cn: "【英式口语】一杯茶（a cup of tea）",
    en: "British informal contraction for 'a cup of tea', often used as an invitation to chat and relax.",
    synonyms: ["brew", "cup of tea"],
    collocations: ["fancy a cuppa", "make a quick cuppa", "over a cuppa"],
    morphology: "cup of 的英式连读缩略拼写。",
    dailyEn: "Pop round whenever you're free and we'll have a nice cuppa and a catch-up.",
    dailyCn: "你有空随时过来坐坐，我们喝杯茶聊聊天。",
    ieltsEn: "In British workplace culture, sharing a informal 'cuppa' often serves as a vital social ritual that fosters team cohesion.",
    ieltsCn: "在英国职场文化中，非正式地共饮一杯茶往往是促进团队凝聚力的重要社交仪式。"
  },
  {
    id: "w3-16",
    date: "2026-09-15",
    lemma: "be keen to",
    raw: "is keen to",
    pos: "phr.",
    phonetic: "/biː kiːn tuː/",
    domain: "英式日常",
    freq: 1,
    cn: "热切希望做某事；渴望/热衷于",
    en: "Very enthusiastic or eager to do something.",
    synonyms: ["be eager to", "be enthusiastic about"],
    collocations: ["be keen to explore", "be keen on doing sth"],
    morphology: "keen 原义为“敏锐的、热切的”，英式英语中表达意愿的高频地道短语。",
    dailyEn: "She is keen to join the neuroinclusive study sessions this semester.",
    dailyCn: "她这学期很想参加神经多样性包容性学习会。",
    ieltsEn: "Policymakers are increasingly keen to incentivize renewable energy startups through targeted tax commissions.",
    ieltsCn: "政策制定者越来越热衷于通过定向税收优惠来激励可再生能源初创企业。"
  },
  {
    id: "w3-17",
    date: "2026-09-15",
    lemma: "curated",
    raw: "Curated",
    pos: "adj.",
    phonetic: "/kjʊˈreɪtɪd/",
    domain: "学术高频",
    freq: 1,
    cn: "精心筛选组织的；策展级的（数据集或内容）",
    en: "Carefully chosen, organized, and presented using professional or expert knowledge.",
    synonyms: ["handpicked", "carefully selected"],
    collocations: ["curated dataset", "curated benchmark", "expert-curated"],
    morphology: "源自拉丁语 curare（照料/管理，同 curator 策展人）。",
    dailyEn: "I love this bookstore because every shelf has a thoughtfully curated selection of books.",
    dailyCn: "我很喜欢这家书店，因为每个书架上的书都是精心挑选出来的。",
    ieltsEn: "Models trained on smaller, rigorously curated datasets frequently outperform those trained on massive noisy web scrapes.",
    ieltsCn: "在规模较小但经过严格筛选的数据集上训练的模型，往往优于在海量嘈杂网页抓取数据上训练的模型。"
  },
  {
    id: "w3-18",
    date: "2026-09-15",
    lemma: "stipulate",
    raw: "Stipulated",
    pos: "v. / adj.",
    phonetic: "/ˈstɪpjuleɪt/",
    domain: "学术高频",
    freq: 1,
    cn: "（法规、合同或协议）明确规定；约定",
    en: "To demand or specify a requirement clearly, typically as part of a formal agreement or regulation.",
    synonyms: ["specify", "mandate", "prescribe"],
    collocations: ["as stipulated in the policy", "stipulated deadline", "stipulate that..."],
    morphology: "stipul（契约规定）+ -ate",
    dailyEn: "The rental contract stipulates that tenants must give one month's notice before moving out.",
    dailyCn: "租房合同明确规定，租客搬离前必须提前一个月通知。",
    ieltsEn: "Refund requests must be submitted within the stipulated fourteen-day window to comply with consumer protection regulations.",
    ieltsCn: "退款申请必须在规定的 14 天窗口期内提交，以符合消费者保护法规。"
  },
  {
    id: "w3-19",
    date: "2026-09-15",
    lemma: "feasibility",
    raw: "Feasibility",
    pos: "n.",
    phonetic: "/ˌfiːzəˈbɪləti/",
    domain: "学术高频",
    freq: 1,
    cn: "可行性；切实可行程度",
    en: "The state or degree of being easily or conveniently done; practicality of a proposed plan.",
    synonyms: ["viability", "practicality", "workability"],
    collocations: ["feasibility study", "assess the feasibility of", "technical feasibility"],
    morphology: "feasible（可行的）+ -ity（名词后缀）",
    dailyEn: "Before we book the venue, let's check the feasibility of hosting 200 guests.",
    dailyCn: "在我们预订场地之前，先评估一下接待 200 位客人的可行性。",
    ieltsEn: "A preliminary study was conducted to evaluate the economic feasibility of deploying off-grid solar microgrids.",
    ieltsCn: "研究人员开展了一项初步研究，以评估部署离网太阳能微电网的经济可行性。"
  },
  {
    id: "w3-20",
    date: "2026-09-15",
    lemma: "ablation",
    raw: "Ablation",
    pos: "n.",
    phonetic: "/əˈbleɪʃn/",
    domain: "CS & 系统",
    freq: 1,
    cn: "【机器学习/系统】消融实验（逐一移除模块以验证其贡献度）",
    en: "In AI and systems research, the systematic removal of components of a system to understand their individual contribution to overall performance.",
    synonyms: ["component isolation", "sensitivity analysis"],
    collocations: ["ablation study", "conduct an ablation experiment", "ablation analysis"],
    morphology: "ab-（离开/移除）+ lat（携带）+ -ion。原为医学“切除/消融”，现为顶会论文必备实验环节。",
    dailyEn: "Reviewers will definitely ask for an ablation study to prove why that extra layer is needed.",
    dailyCn: "审稿人肯定会要求补充消融实验，来证明为什么需要那层额外的结构。",
    ieltsEn: "Comprehensive ablation studies confirm that both adaptive routing and counterbalancing contribute substantially to overall throughput.",
    ieltsCn: "全面的消融实验证实，自适应路由与平衡抵消机制均对整体吞吐量有显著贡献。"
  },
  {
    id: "w3-21",
    date: "2026-09-15",
    lemma: "provisional",
    raw: "Provisional",
    pos: "adj.",
    phonetic: "/prəˈvɪʒənl/",
    domain: "学术高频",
    freq: 1,
    cn: "临时的；暂定的（待进一步核实确认的）",
    en: "Arranged or existing for the present, possibly to be changed later when full information becomes available.",
    synonyms: ["tentative", "interim", "preliminary"],
    collocations: ["provisional results", "provisional driving licence", "provisional timetable"],
    morphology: "pro-（提前）+ vis（看）+ -ional。同日近义词：Preliminary（初步的）。",
    dailyEn: "They've only released the provisional exam schedule so far, so dates might still change.",
    dailyCn: "他们目前只发布了暂定的考试时间表，所以日期可能还会变动。",
    ieltsEn: "While provisional findings suggest a strong correlation, longitudinal data is required to establish causality.",
    ieltsCn: "虽然暂定研究结果暗示存在强相关性，但仍需纵向追踪数据来确立因果关系。"
  },
  {
    id: "w3-22",
    date: "2026-09-15",
    lemma: "sustained",
    raw: "Sustained",
    pos: "adj.",
    phonetic: "/səˈsteɪnd/",
    domain: "学术高频",
    freq: 2,
    cn: "持续不断的；持久稳定的",
    en: "Continuing for an extended period or without interruption at a steady level.",
    synonyms: ["prolonged", "continuous", "steady"],
    collocations: ["sustained growth", "sustained workload", "sustained effort"],
    morphology: "sustain（维持/支撑）+ -ed。在 9月15日 词表中重复出现 2 次。",
    dailyEn: "Learning a language requires sustained daily practice rather than last-minute cramming.",
    dailyCn: "学习一门语言需要每天持之以恒的练习，而不是临时抱佛脚。",
    ieltsEn: "Under sustained peak workloads, the executor maintains stable throughput without suffering from thermal throttling.",
    ieltsCn: "在持续的峰值工作负载下，执行器保持了稳定的吞吐量，而未出现过热降频现象。"
  },
  {
    id: "w3-23",
    date: "2026-09-15",
    lemma: "oracle",
    raw: "Oracle / Unprobed-Oracle",
    pos: "n.",
    phonetic: "/ˈɒrəkl/",
    domain: "CS & 系统",
    freq: 2,
    cn: "【CS】先知模型 / 理论最优基准（拥有全局先验信息的理想参照系）",
    en: "In computing, a theoretical baseline or test mechanism that knows the optimal decision or exact truth in advance.",
    synonyms: ["ideal baseline", "ground-truth reference"],
    collocations: ["oracle policy", "unprobed-oracle", "compare against an oracle"],
    morphology: "源自古希腊神谕（Oracle）。CS 论文中常用来表示“假设提前知道正确答案时的性能上限”。",
    dailyEn: "In our experiment, the oracle curve shows the theoretical upper bound that no real algorithm can beat.",
    dailyCn: "在我们的实验中，Oracle 曲线展示了任何真实算法都无法超越的理论上限。",
    ieltsEn: "Our heuristic scheduler achieves 96% of the performance of an omniscient Unprobed-Oracle that incurs zero probing cost.",
    ieltsCn: "我们的启发式调度器达到了零探测成本的全知型理想基准模型（Unprobed-Oracle）96% 的性能。"
  },
  {
    id: "w3-24",
    date: "2026-09-15",
    lemma: "jitter",
    raw: "Jitter",
    pos: "n.",
    phonetic: "/ˈdʒɪtə(r)/",
    domain: "CS & 系统",
    freq: 1,
    cn: "【系统/网络】时延抖动（响应时间的不规则微小波动）；紧张不安",
    en: "Slight irregular variation in the latency of packet delivery or task execution time.",
    synonyms: ["latency variance", "fluctuation"],
    collocations: ["network jitter", "latency jitter", "minimize tail jitter"],
    morphology: "拟声词演变，形容轻微高频颤动。",
    dailyEn: "Even if your bandwidth is high, high jitter will make video calls freeze and stutter.",
    dailyCn: "即使你的带宽很高，严重的网络抖动也会让视频通话卡顿掉帧。",
    ieltsEn: "Garbage collection pauses introduce severe tail-latency jitter in real-time transaction processing systems.",
    ieltsCn: "垃圾回收暂停会在实时事务处理系统中引入严重的尾延迟抖动。"
  },
  {
    id: "w3-25",
    date: "2026-09-15",
    lemma: "empirical",
    raw: "Empirical",
    pos: "adj.",
    phonetic: "/ɪmˈpɪrɪkl/",
    domain: "学术高频",
    freq: 1,
    cn: "实证的；基于实验与观测数据的（而非纯理论推导的）",
    en: "Based on, concerned with, or verifiable by observation or actual experience rather than theory or pure logic.",
    synonyms: ["experimental", "observational", "evidence-based"],
    collocations: ["empirical evidence", "empirical evaluation", "empirical study"],
    morphology: "源自希腊语 empeiria（经验/试验）。反义词：theoretical / analytical。",
    dailyEn: "Don't just guess which version is faster—collect some empirical data by running a benchmark.",
    dailyCn: "别光猜哪个版本更快——跑个基准测试收集点实证数据吧。",
    ieltsEn: "Empirical evaluations across twelve real-world workloads demonstrate the practical superiority of our decomposition scheme.",
    ieltsCn: "在十二个真实世界工作负载上的实证评估证明了我们分解方案的实际优越性。"
  },

  // ==================== 2026年9月16日 ====================
  {
    id: "w3-26",
    date: "2026-09-16",
    lemma: "Mind Your Mate",
    raw: "Mind Your Mate",
    pos: "phr.",
    phonetic: "/maɪnd jɔː meɪt/",
    domain: "英式日常",
    freq: 1,
    cn: "【校园文化】关心身边同伴（高校常见的同伴心理健康互助倡议）",
    en: "A peer-support initiative encouraging students or colleagues to look out for friends' mental wellbeing.",
    synonyms: ["peer support", "look out for friends"],
    collocations: ["Mind Your Mate workshop", "campus mental health initiative"],
    morphology: "mind（留意/照顾）+ mate（英式：朋友/同学）。",
    dailyEn: "Our student union runs 'Mind Your Mate' sessions to teach us how to support friends going through tough times.",
    dailyCn: "我们学生会举办了“关心同伴”活动，教我们如何支持正经历困难时期的朋友。",
    ieltsEn: "University-led initiatives such as 'Mind Your Mate' foster a compassionate campus culture by training students to recognize early signs of distress.",
    ieltsCn: "诸如“关心同伴”等由大学主导的倡议，通过培训学生识别心理困扰的早期迹象，营造了充满关怀的校园文化。"
  },
  {
    id: "w3-27",
    date: "2026-09-16",
    lemma: "dispatch",
    raw: "Dispatch",
    pos: "v. / n.",
    phonetic: "/dɪˈspætʃ/",
    domain: "CS & 系统",
    freq: 2,
    cn: "① [CS] 分派/调度（任务、线程、算子）；② [日常] 派遣；发货",
    en: "To send off a task, instruction, or message to a destination or execution unit for immediate processing.",
    synonyms: ["schedule", "route", "send off"],
    collocations: ["kernel dispatch", "dynamic dispatch", "dispatch queue"],
    morphology: "dis-（分开）+ patch（急速处理）。在 9月16日 当天重复出现 2 次。",
    dailyEn: "Your online order has been packed and will be dispatched first thing tomorrow morning.",
    dailyCn: "您的网购订单已打包完毕，将于明早第一时间发货。",
    ieltsEn: "Minimizing kernel dispatch latency is critical when executing thousands of fine-grained operators on GPUs.",
    ieltsCn: "在 GPU 上执行数千个细粒度算子时，最小化内核调度分派延迟至关重要。"
  },
  {
    id: "w3-28",
    date: "2026-09-16",
    lemma: "harness",
    raw: "Harness",
    pos: "v. / n.",
    phonetic: "/ˈhɑːnɪs/",
    domain: "CS & 系统",
    freq: 1,
    cn: "① v. 有效利用/驾驭（资源或技术）；② n. [CS] 测试框架/基准套件（Test Harness）",
    en: "To control and make use of natural or computational resources; or a collection of software and test data configured to test a program unit.",
    synonyms: ["utilize", "exploit", "test framework"],
    collocations: ["benchmark harness", "test harness", "harness the power of"],
    morphology: "原义为“马具/挽具”，引申为“把力量套上挽具加以利用”或“把代码套进测试架中”。",
    dailyEn: "We integrated the new kernel into our automated benchmark harness to check for regressions.",
    dailyCn: "我们把新内核集成到了自动化基准测试框架中，以检查是否存在性能回退。",
    ieltsEn: "Modern compilers must harness hardware-level parallelism effectively to satisfy growing computational demands.",
    ieltsCn: "现代编译器必须有效利用硬件级并行性，以满足不断增长的计算需求。"
  },
  {
    id: "w3-29",
    date: "2026-09-16",
    lemma: "conflate",
    raw: "Conflated",
    pos: "v.",
    phonetic: "/kənˈfleɪt/",
    domain: "学术高频",
    freq: 1,
    cn: "混淆（将两个本质不同的概念混为一谈）；合并",
    en: "To combine two or more distinct concepts, texts, or sets of information into one, often erroneously.",
    synonyms: ["confuse", "mix up", "amalgamate"],
    collocations: ["conflate A with B", "are often conflated", "avoid conflating"],
    morphology: "con-（一起）+ flat（吹/熔合，源自拉丁语 flare）。学术论文批判前人工作时的极高频词！",
    dailyEn: "People often conflate being busy with actually being productive.",
    dailyCn: "人们常常把“瞎忙”和真正的“高效”混为一谈。",
    ieltsEn: "Prior studies frequently conflated algorithmic complexity with actual runtime execution overhead.",
    ieltsCn: "先前的研究经常将算法复杂度与实际的运行时执行开销混为一谈。"
  },
  {
    id: "w3-30",
    date: "2026-09-16",
    lemma: "subtle",
    raw: "subtle",
    pos: "adj.",
    phonetic: "/ˈsʌtl/",
    domain: "学术高频",
    freq: 1,
    cn: "微妙的；不易察觉的；精妙的（注意字母 b 不发音）",
    en: "So delicate or precise as to be difficult to analyze or describe; making use of clever and indirect methods.",
    synonyms: ["nuanced", "delicate", "understated"],
    collocations: ["subtle difference", "a subtle bug", "subtle bias"],
    morphology: "源自拉丁语 subtilis（织得极细密的）。注意发音中 b 完全静音！",
    dailyEn: "There is a subtle difference in meaning between these two paraphrases.",
    dailyCn: "这两种改写表达之间存在着微妙的语义差异。",
    ieltsEn: "Even a subtle calibration bias in the training dataset can compound into substantial classification errors.",
    ieltsCn: "即使是训练数据集中极其微妙的校准偏差，也会累积放大为严重的分类错误。"
  },
  {
    id: "w3-31",
    date: "2026-09-16",
    lemma: "instantiate",
    raw: "instantiate",
    pos: "v.",
    phonetic: "/ɪnˈstænʃieɪt/",
    domain: "CS & 系统",
    freq: 1,
    cn: "① [CS] 实例化（根据类/模板创建具体对象）；② [学术] 用具体实例佐证",
    en: "To represent an abstraction by a concrete instance; in OOP, to create an object of a specific class.",
    synonyms: ["exemplify", "embody", "initialize"],
    collocations: ["instantiate an object", "instantiate a template", "concretely instantiate"],
    morphology: "instance（实例，9月15日已收录）+ -iate（动词化）。",
    dailyEn: "You cannot instantiate an abstract class directly in C++ or Java.",
    dailyCn: "在 C++ 或 Java 中，你不能直接实例化一个抽象类。",
    ieltsEn: "To validate our conceptual framework, we instantiate the executor across three distinct relational database engines.",
    ieltsCn: "为了验证我们的概念框架，我们在三个不同的关系型数据库引擎上对该执行器进行了实例化实现。"
  },
  {
    id: "w3-32",
    date: "2026-09-16",
    lemma: "disentangle",
    raw: "disentangle",
    pos: "v.",
    phonetic: "/ˌdɪsɪnˈtæŋɡl/",
    domain: "学术高频",
    freq: 1,
    cn: "解耦；理清；把纠缠在一起的因素拆解区分开",
    en: "To separate different factors, arguments, or representations that have become twisted or confused together.",
    synonyms: ["decouple", "untangle", "unravel"],
    collocations: ["disentangle factors", "disentangled representation", "disentangle A from B"],
    morphology: "dis-（解开）+ en-（使）+ tangle（纠缠）。机器学习与社科论文神仙动词！",
    dailyEn: "It took me half an hour to disentangle my headphone cables.",
    dailyCn: "我花了半个小时才把缠在一起的耳机线解开。",
    ieltsEn: "Controlled ablation experiments allow researchers to disentangle the effect of model capacity from data quality.",
    ieltsCn: "受控消融实验使研究人员能够将模型容量的影响与数据质量的影响剥离开来。"
  },
  {
    id: "w3-33",
    date: "2026-09-16",
    lemma: "provenance",
    raw: "provenance",
    pos: "n.",
    phonetic: "/ˈprɒvənəns/",
    domain: "CS & 系统",
    freq: 1,
    cn: "【数据系统】数据溯源 / 血缘追踪；起源与出处",
    en: "The chronology of the ownership, custody, or derivation history of a dataset, artifact, or computation result.",
    synonyms: ["lineage", "origin", "pedigree"],
    collocations: ["data provenance", "track provenance", "provenance audit"],
    morphology: "pro-（向前）+ ven（来，源自拉丁语 venire）+ -ance。",
    dailyEn: "The museum verified the provenance of the painting before buying it.",
    dailyCn: "博物馆在购买这幅画之前核实了它的流传出处。",
    ieltsEn: "Maintaining fine-grained data provenance is essential for reproducibility audits in scientific workflows.",
    ieltsCn: "维护细粒度的数据溯源对于科学工作流中的可复现性审查至关重要。"
  },
  {
    id: "w3-34",
    date: "2026-09-16",
    lemma: "body-doubling",
    raw: "accountability through ‘body-doubling’",
    pos: "n. phr.",
    phonetic: "/ˈbɒdi ˌdʌblɪŋ/",
    domain: "英式日常",
    freq: 1,
    cn: "同伴在场陪伴自律法（通过他人在旁同时工作来提升专注力与执行力）",
    en: "A productivity strategy where another person works alongside you (in person or virtually) to foster focus and accountability.",
    synonyms: ["co-working accountability", "parallel working"],
    collocations: ["virtual body-doubling", "accountability through body-doubling", "neuroinclusive study"],
    morphology: "源于影视术语“替身（body double）”，在现代心理学与高校学习社群中指“陪伴式专注”。",
    dailyEn: "Whenever I procrastinate on my manuscript, I use accountability through 'body-doubling' by studying with a friend in the library.",
    dailyCn: "每当我写论文初稿拖延症发作时，我就会去图书馆和朋友一起自习，靠“同伴在场陪伴法”来督促自己。",
    ieltsEn: "Neuroinclusive study sessions frequently incorporate accountability through 'body-doubling' to help graduate students sustain focus on complex analytical tasks.",
    ieltsCn: "神经多样性包容性学习会经常引入“同伴陪伴督促机制”，以帮助研究生在复杂的分析任务上保持专注。"
  },
  {
    id: "w3-35",
    date: "2026-09-16",
    lemma: "asymptotically",
    raw: "Asymptotically",
    pos: "adv.",
    phonetic: "/ˌæsɪmpˈtɒtɪkli/",
    domain: "CS & 系统",
    freq: 1,
    cn: "渐近地（当数据规模趋于无穷大时的复杂度趋势）",
    en: "In a way that approaches a limiting value or curve arbitrarily closely as an input variable tends toward infinity.",
    synonyms: ["in the limit", "theoretically at scale"],
    collocations: ["asymptotically optimal", "asymptotically faster", "behave asymptotically"],
    morphology: "a-（不）+ sym-（一起）+ ptot（相交/落下）——无限接近却永不相交的渐近线（asymptote）。",
    dailyEn: "Although the new algorithm is asymptotically faster, its large constant overhead makes it slower on small arrays.",
    dailyCn: "虽然新算法在渐近意义上更快，但它庞大的常数开销使其在小数组上反而更慢。",
    ieltsEn: "By replacing linear scans with hash-based lookups, query resolution becomes asymptotically constant-time.",
    ieltsCn: "通过用基于哈希的查找替代线性扫描，查询解析在渐近意义上达到了常数时间复杂度。"
  },
  {
    id: "w3-36",
    date: "2026-09-16",
    lemma: "constant-time",
    raw: "constant-time",
    pos: "adj.",
    phonetic: "/ˈkɒnstənt taɪm/",
    domain: "CS & 系统",
    freq: 1,
    cn: "常数时间的（即 O(1) 复杂度，耗时不随输入规模增长而增加）",
    en: "Taking a fixed amount of execution time independent of the size of the input dataset.",
    synonyms: ["O(1) complexity", "fixed-latency"],
    collocations: ["constant-time lookup", "amortized constant-time", "constant-time execution"],
    morphology: "constant（恒定的）+ time（时间）。",
    dailyEn: "A hash table gives you constant-time lookup on average.",
    dailyCn: "哈希表在平均情况下能为你提供常数时间的查找速度。",
    ieltsEn: "Preserving constant-time state transitions is vital for meeting strict nanosecond-level service level agreements.",
    ieltsCn: "保持常数时间的状态转换对于满足严苛的纳秒级服务水平协议至关重要。"
  },
  // ==================== 2026年9月13日（剩余全部补齐） ====================
  {
    id: "w3-37",
    date: "2026-09-13",
    lemma: "activity",
    raw: "Activity",
    pos: "n.",
    phonetic: "/ækˈtɪvəti/",
    domain: "学术高频",
    freq: 1,
    cn: "活动；活跃度；【系统/日志】操作行为记录",
    en: "A condition in which things are happening or being done; a specific action, task, or logged user/system event.",
    synonyms: ["action", "operation", "undertaking"],
    collocations: ["user activity log", "extracurricular activity", "economic activity"],
    morphology: "act（行动）+ -iv(e) + -ity（名词后缀，表状态或行为）",
    dailyEn: "The campus sports center offers a wide range of indoor activities on rainy days.",
    dailyCn: "校园体育中心在雨天提供丰富多样的室内活动。",
    ieltsEn: "Monitoring anomalous network activity in real time is crucial for preventing unauthorized data exfiltration.",
    ieltsCn: "实时监控异常网络活动对于防止未经授权的数据外泄至关重要。"
  },
  {
    id: "w3-38",
    date: "2026-09-13",
    lemma: "not attempted",
    raw: "Not Attempted",
    pos: "adj. phr.",
    phonetic: "/nɒt əˈtemptɪd/",
    domain: "英式日常",
    freq: 1,
    cn: "未尝试的；未作答的（在线评测/考试系统中常见状态标记）",
    en: "Not yet tried, undertaken, or answered in an assessment, task queue, or benchmark run.",
    synonyms: ["untried", "unanswered", "pending"],
    collocations: ["marked as not attempted", "not attempted questions", "attempt a task"],
    morphology: "not + attempt（尝试：at- 去 + tempt 试探）+ -ed",
    dailyEn: "Make sure you check the back page of the exam paper so no questions are left not attempted.",
    dailyCn: "务必检查试卷背面，确保没有题目漏掉未作答。",
    ieltsEn: "In automated grading pipelines, submissions marked as 'Not Attempted' are excluded from the calculation of mean completion time.",
    ieltsCn: "在自动评分流水线中，标记为“未作答”的提交记录将被排除在平均完成时间的计算之外。"
  },
  {
    id: "w3-39",
    date: "2026-09-13",
    lemma: "partially",
    raw: "Partially",
    pos: "adv.",
    phonetic: "/ˈpɑːʃəli/",
    domain: "学术高频",
    freq: 1,
    cn: "部分地；不完全地；一定程度上",
    en: "Only in part; to a limited extent rather than completely.",
    synonyms: ["partly", "incompletely", "to some degree"],
    collocations: ["partially completed", "partially offset", "partially observable"],
    morphology: "part（部分）+ -ial（形容词后缀）+ -ly（副词后缀）",
    dailyEn: "The project is only partially finished, so we'll need another meeting tomorrow.",
    dailyCn: "这个项目只完成了一部分，所以我们明天还得再开一次会。",
    ieltsEn: "Memory caching only partially mitigates the I/O bottleneck when query access patterns are highly random.",
    ieltsCn: "当查询访问模式高度随机时，内存缓存只能部分缓解 I/O 瓶颈。"
  },
  {
    id: "w3-40",
    date: "2026-09-13",
    lemma: "component",
    raw: "component",
    pos: "n. / adj.",
    phonetic: "/kəmˈpəʊnənt/",
    domain: "CS & 系统",
    freq: 1,
    cn: "组件；核心模块；构成要素",
    en: "A constituent part or modular element of a larger system, software architecture, or machine.",
    synonyms: ["module", "element", "constituent"],
    collocations: ["core component", "modular component", "principal component analysis"],
    morphology: "com-（共同）+ pon（放置，源自拉丁语 ponere）+ -ent → 放在一起构成整体的组件。",
    dailyEn: "Fresh ingredients are the most important component of a great home-cooked meal.",
    dailyCn: "新鲜食材是一顿美味家常菜最重要的要素。",
    ieltsEn: "Decoupling stateful storage from stateless compute components enables independent horizontal scaling.",
    ieltsCn: "将有状态存储与无状态计算组件解耦，能够实现独立的水平扩展。"
  },
  {
    id: "w3-41",
    date: "2026-09-13",
    lemma: "portfolio",
    raw: "portfolio",
    pos: "n.",
    phonetic: "/pɔːtˈfəʊliəʊ/",
    domain: "学术高频",
    freq: 1,
    cn: "① 个人作品集 / 项目集；② 投资组合；③（机构）业务版图",
    en: "A curated collection of work samples, projects, or financial investments held by an individual or organization.",
    synonyms: ["collection", "body of work", "asset mix"],
    collocations: ["project portfolio", "investment portfolio", "build a portfolio"],
    morphology: "port（携带）+ folio（纸张/页，源自拉丁语 folium）→ 随身携带的作品夹。",
    dailyEn: "Having a strong GitHub portfolio really helps when applying for software engineering internships.",
    dailyCn: "拥有一个高质量的 GitHub 项目作品集在申请软件工程实习时非常有帮助。",
    ieltsEn: "Diversifying the national energy portfolio is essential to reduce over-reliance on imported fossil fuels.",
    ieltsCn: "实现国家能源结构多元化对于减少对进口化石燃料的过度依赖至关重要。"
  },
  {
    id: "w3-42",
    date: "2026-09-13",
    lemma: "slot",
    raw: "two slots",
    pos: "n. / v.",
    phonetic: "/slɒt/",
    domain: "英式日常",
    freq: 1,
    cn: "①（日程表上的）时间段、名额空缺；②【CS】插槽 / 内存槽位",
    en: "An allotted place in a schedule or arrangement; a narrow opening or memory/execution position in computing.",
    synonyms: ["time window", "opening", "spot"],
    collocations: ["book a time slot", "two slots available", "execution slot"],
    morphology: "源自古法语 esclot（凹槽/狭缝），英伦校园预约 Office Hour 或实验室排期必用词。",
    dailyEn: "There are only two slots left for Friday's supervisor meeting, so book yours quickly.",
    dailyCn: "周五的导师见面会只剩两个时间段名额了，赶紧预约你的吧。",
    ieltsEn: "Each worker thread is assigned a dedicated memory slot to prevent lock contention during concurrent writes.",
    ieltsCn: "每个工作线程都被分配了一个专用内存槽位，以防止并发写入期间发生锁竞争。"
  },
  {
    id: "w3-43",
    date: "2026-09-13",
    lemma: "chrono",
    raw: "chrono",
    pos: "comb. form / n.",
    phonetic: "/ˈkrɒnəʊ/",
    domain: "CS & 系统",
    freq: 1,
    cn: "计时；时间库（如 C++/Rust 中的 std::chrono 高精度时间库）；与时间相关的",
    en: "Relating to time; widely used in programming as the name of high-resolution time and duration libraries.",
    synonyms: ["temporal", "chronological", "time-measuring"],
    collocations: ["std::chrono", "chronological order", "high-resolution chrono clock"],
    morphology: "源自古希腊语 khronos（时间）。衍生词：chronology（年代学）、synchronize（同步）。",
    dailyEn: "In C++, we use the chrono library to measure function execution time down to nanoseconds.",
    dailyCn: "在 C++ 中，我们使用 chrono 库将函数执行时间精确测量到纳秒级。",
    ieltsEn: "Monotonic chrono clocks are utilized in benchmark harnesses to ensure timestamp measurements are immune to system clock adjustments.",
    ieltsCn: "基准测试框架中采用单调计时时钟（chrono），以确保时间戳测量不受系统时钟回拨或调整的影响。"
  },
  {
    id: "w3-44",
    date: "2026-09-13",
    lemma: "sliding",
    raw: "Sliding",
    pos: "adj.",
    phonetic: "/ˈslaɪdɪŋ/",
    domain: "CS & 系统",
    freq: 1,
    cn: "滑动的；动态平滑移动的（如滑动窗口算法 Sliding Window）",
    en: "Moving smoothly along a surface or shifting continuously over a sequence of data or time intervals.",
    synonyms: ["moving", "rolling", "shifting"],
    collocations: ["sliding window", "sliding scale", "sliding average"],
    morphology: "slide（滑动）+ -ing",
    dailyEn: "The clinic charges fees on a sliding scale based on your household income.",
    dailyCn: "这家诊所根据家庭收入按浮动阶梯标准收费。",
    ieltsEn: "A sliding window aggregation operator computes rolling metrics over streaming data in constant memory.",
    ieltsCn: "滑动窗口聚合算子可在常数内存开销下计算流数据上的滚动指标。"
  },
  {
    id: "w3-45",
    date: "2026-09-13",
    lemma: "entity",
    raw: "Entity",
    pos: "n.",
    phonetic: "/ˈentəti/",
    domain: "CS & 系统",
    freq: 1,
    cn: "实体（数据库/知识图谱中的独立对象；或法律/商业独立机构）",
    en: "A thing with distinct and independent existence; in databases and NLP, a uniquely identifiable real-world object or concept.",
    synonyms: ["object", "unit", "body"],
    collocations: ["named entity recognition", "entity resolution", "legal entity"],
    morphology: "ent-（存在，源自拉丁语 ens）+ -ity（名词后缀）",
    dailyEn: "The startup was registered as a separate legal entity last month.",
    dailyCn: "这家初创公司上个月注册成为了一个独立的法人实体。",
    ieltsEn: "Entity disambiguation links ambiguous textual mentions in unstructured documents to canonical knowledge-base identifiers.",
    ieltsCn: "实体消歧将非结构化文档中存在歧义的文本提及链接到知识库中的规范标识符。"
  },
  {
    id: "w3-46",
    date: "2026-09-13",
    lemma: "formatting",
    raw: "Formatting",
    pos: "n.",
    phonetic: "/ˈfɔːmætɪŋ/",
    domain: "学术高频",
    freq: 1,
    cn: "排版格式；数据格式化；样式规范",
    en: "The way in which text, data, or storage media is arranged, structured, and presented.",
    synonyms: ["layout", "structuring", "styling"],
    collocations: ["string formatting", "manuscript formatting guidelines", "conditional formatting"],
    morphology: "format（格式/版式）+ -ting",
    dailyEn: "Converting a PDF to Word often messes up all the table formatting.",
    dailyCn: "把 PDF 转成 Word 经常会把所有的表格排版格式弄乱。",
    ieltsEn: "Adhering strictly to the publisher's formatting guidelines is mandatory before submitting the camera-ready manuscript.",
    ieltsCn: "在提交最终出版定稿之前，必须严格遵守出版商的排版格式规范。"
  },
  {
    id: "w3-47",
    date: "2026-09-13",
    lemma: "coarse",
    raw: "coarse",
    pos: "adj.",
    phonetic: "/kɔːs/",
    domain: "CS & 系统",
    freq: 1,
    cn: "粗粒度的（Coarse-grained）；粗糙的（反义词：同日收录的 Fine-Grained）",
    en: "Rough or loose in texture or grain; in computing, operating on large sub-components or broad intervals rather than tiny details.",
    synonyms: ["rough", "macro-level", "broad"],
    collocations: ["coarse-grained locking", "coarse-to-fine search", "coarse approximation"],
    morphology: "注意与 course（课程/过程）同音但拼写不同！同日反义对子：Fine-Grained vs. Coarse。",
    dailyEn: "Use coarse sea salt on top of the steak right before serving.",
    dailyCn: "上菜前在牛排表面撒一点粗海盐。",
    ieltsEn: "A coarse-to-fine candidate probe first filters out implausible regions rapidly before applying expensive exact evaluation.",
    ieltsCn: "由粗到细的候选探测机制会先快速过滤掉不合理的区域，然后再执行高开销的精确评估。"
  },
  {
    id: "w3-48",
    date: "2026-09-13",
    lemma: "ratio",
    raw: "ratio",
    pos: "n.",
    phonetic: "/ˈreɪʃiəʊ/",
    domain: "学术高频",
    freq: 1,
    cn: "比率；比例；比值",
    en: "The quantitative relation between two amounts showing the number of times one value contains or is contained within the other.",
    synonyms: ["proportion", "rate", "quotient"],
    collocations: ["compression ratio", "signal-to-noise ratio", "hit ratio"],
    morphology: "源自拉丁语 ratio（计算/推理，衍生出 rational 理性的）。",
    dailyEn: "To make perfect rice, use a water-to-rice ratio of roughly 1.2 to 1.",
    dailyCn: "要想煮出完美的米饭，水米比例大约控制在 1.2 比 1。",
    ieltsEn: "Achieving a high cache hit ratio is paramount for minimizing average memory access latency.",
    ieltsCn: "实现高缓存命中率对于最小化平均内存访问延迟至关重要。"
  },
  {
    id: "w3-49",
    date: "2026-09-13",
    lemma: "compounding",
    raw: "compounding",
    pos: "adj. / v.",
    phonetic: "/kəmˈpaʊndɪŋ/",
    domain: "学术高频",
    freq: 1,
    cn: "复合累积的；滚雪球式放大的（如复利效应或误差累积）",
    en: "Increasing or worsening progressively as successive effects or errors build upon one another.",
    synonyms: ["cumulative", "snowballing", "multiplying"],
    collocations: ["compounding error", "compounding effect", "compounding interest"],
    morphology: "com-（一起）+ pound（放置）。同周关联词：compound exclusion（9月16日）。",
    dailyEn: "Small daily habits have a massive compounding effect over several years.",
    dailyCn: "每天微小的习惯在几年时间里会产生巨大的复利累积效应。",
    ieltsEn: "In autoregressive generation, minor prediction inaccuracies at early steps can lead to severe compounding errors.",
    ieltsCn: "在自回归生成中，早期步骤中微小的预测偏差可能会导致严重的累积放大误差。"
  },
  {
    id: "w3-50",
    date: "2026-09-13",
    lemma: "missingness",
    raw: "real missingness",
    pos: "n.",
    phonetic: "/ˈmɪsɪŋnəs/",
    domain: "CS & 系统",
    freq: 1,
    cn: "【统计学/数据科学】数据缺失性；真实缺失状态（Real Missingness）",
    en: "The state, pattern, or mechanism by which data values are absent in a dataset (as opposed to zero values or padding).",
    synonyms: ["data absence", "nullity pattern", "incompleteness"],
    collocations: ["real missingness", "missingness mechanism", "informative missingness"],
    morphology: "missing（缺失的）+ -ness（抽象名词后缀），数据科学与生物统计学的标准专业术语。",
    dailyEn: "Before training the model, we need to check whether the missingness in the survey column is random.",
    dailyCn: "在训练模型之前，我们需要检查调查问卷列中的数据缺失是否是随机的。",
    ieltsEn: "The schema explicitly distinguishes structural zero values from real missingness to prevent biased statistical aggregation.",
    ieltsCn: "该数据模式明确区分了结构性零值与真实数据缺失（real missingness），以防止产生有偏的统计聚合结果。"
  },
  {
    id: "w3-51",
    date: "2026-09-13",
    lemma: "distinguish",
    raw: "Distinguish",
    pos: "v.",
    phonetic: "/dɪˈstɪŋɡwɪʃ/",
    domain: "学术高频",
    freq: 1,
    cn: "区分；辨别；使具有独特特征",
    en: "To recognize or treat someone or something as different; to perceive a clear difference between concepts.",
    synonyms: ["differentiate", "discern", "tell apart"],
    collocations: ["distinguish between A and B", "distinguish A from B", "distinguishing feature"],
    morphology: "di-（分开）+ stingu（刺/标记）+ -ish → 做出标记以示区分。",
    dailyEn: "It's sometimes hard to distinguish genuine reviews from paid advertisements online.",
    dailyCn: "在网上有时很难把真实评价和付费广告区分开来。",
    ieltsEn: "Diagnostic probes enable the runtime scheduler to distinguish transient network jitter from persistent node failures.",
    ieltsCn: "诊断探针使运行时调度器能够将短暂的网络抖动与持续的节点故障区分开来。"
  },
  {
    id: "w3-52",
    date: "2026-09-13",
    lemma: "underlying",
    raw: "Underlying",
    pos: "adj.",
    phonetic: "/ˌʌndəˈlaɪɪŋ/",
    domain: "学术高频",
    freq: 1,
    cn: "底层的（如底层硬件/架构）；潜在的；根本的",
    en: "Lying or situated beneath; serving as the fundamental cause, basis, or lower-level system layer.",
    synonyms: ["fundamental", "foundational", "root"],
    collocations: ["underlying hardware", "underlying distribution", "underlying cause"],
    morphology: "under（在……之下）+ lie（位于）+ -ing",
    dailyEn: "Painkillers only treat the symptoms, not the underlying cause of the headache.",
    dailyCn: "止痛药只能缓解症状，无法解决头痛的根本原因。",
    ieltsEn: "The abstraction layer shields application developers from the complexities of the underlying heterogeneous hardware.",
    ieltsCn: "抽象层为应用开发者屏蔽了底层异构硬件的复杂性。"
  },
  {
    id: "w3-53",
    date: "2026-09-13",
    lemma: "validity",
    raw: "Validity",
    pos: "n.",
    phonetic: "/vəˈlɪdəti/",
    domain: "学术高频",
    freq: 1,
    cn: "有效性；效度（实验结论的可靠真实程度）；合法性",
    en: "The quality of being logically or factually sound; the extent to which a metric or experiment measures what it claims to measure.",
    synonyms: ["soundness", "legitimacy", "cogency"],
    collocations: ["internal and external validity", "threats to validity", "statistical validity"],
    morphology: "valid（有效的/合理的）+ -ity。计算机与社科论文必写章节：Threats to Validity（有效性威胁分析）。",
    dailyEn: "Please check the validity of your passport before booking international flights.",
    dailyCn: "在预订国际航班之前，请先检查你护照的有效期。",
    ieltsEn: "To ensure external validity, we evaluate our algorithm across diverse real-world datasets rather than synthetic benchmarks alone.",
    ieltsCn: "为了确保外部效度，我们在多样化的真实世界数据集上评估了算法，而不仅仅局限于合成基准测试。"
  },
  {
    id: "w3-54",
    date: "2026-09-13",
    lemma: "duplicate",
    raw: "Duplicate",
    pos: "adj. / n. / v.",
    phonetic: "/ˈdjuːplɪkət/",
    domain: "CS & 系统",
    freq: 1,
    cn: "重复的（记录/数据）；副本；复制",
    en: "Exactly like something else, especially through having been copied; an identical record or entry in a dataset.",
    synonyms: ["redundant", "identical copy", "replicate"],
    collocations: ["remove duplicate entries", "de-duplication", "in duplicate"],
    morphology: "du-（二/双）+ plic（折叠）+ -ate（读作形容词/名词时尾音为 /ət/，作动词时为 /eɪt/）。",
    dailyEn: "I accidentally uploaded duplicate photos to the shared album.",
    dailyCn: "我一不小心往共享相册里上传了重复的照片。",
    ieltsEn: "Eliminating duplicate records during data ingestion substantially reduces downstream storage and indexing overhead.",
    ieltsCn: "在数据摄取阶段消除重复记录，可以大幅降低下游的存储与索引开销。"
  },
  {
    id: "w3-55",
    date: "2026-09-13",
    lemma: "aggregation",
    raw: "Aggregation",
    pos: "n.",
    phonetic: "/ˌæɡrɪˈɡeɪʃn/",
    domain: "CS & 系统",
    freq: 1,
    cn: "聚合；汇总计算（如 SQL/Dataframe 中的求和、均值等聚合操作）",
    en: "The formation of a number of things into a cluster; in data processing, combining multiple rows into summary metrics.",
    synonyms: ["consolidation", "accumulation", "summarization"],
    collocations: ["data aggregation", "aggregation operator", "hierarchical aggregation"],
    morphology: "ag-（朝向）+ greg（群体）+ -ation。同周动词原形：Aggregate（9月15日）。",
    dailyEn: "News aggregation apps let you read headlines from dozens of websites in one place.",
    dailyCn: "新闻聚合应用让你可以在一个地方浏览几十家网站的头条新闻。",
    ieltsEn: "Vectorized hash aggregation accelerates group-by queries by processing multiple data tuples in a single CPU instruction.",
    ieltsCn: "向量化哈希聚合通过在单条 CPU 指令中处理多个数据元组，显著加速了分组汇总查询。"
  },
  {
    id: "w3-56",
    date: "2026-09-13",
    lemma: "metric",
    raw: "Metric",
    pos: "n. / adj.",
    phonetic: "/ˈmetrɪk/",
    domain: "CS & 系统",
    freq: 1,
    cn: "评价指标；度量标准",
    en: "A quantitative standard of measurement used to assess performance, efficiency, or quality.",
    synonyms: ["measure", "indicator", "criterion"],
    collocations: ["evaluation metric", "performance metric", "distance metric"],
    morphology: "metr-（测量，源自希腊语 metron）+ -ic",
    dailyEn: "Customer retention is a key metric for any subscription-based business.",
    dailyCn: "客户留存率是任何订阅制企业的核心衡量指标。",
    ieltsEn: "Relying solely on average throughput as a performance metric can obscure severe tail-latency regressions.",
    ieltsCn: "仅依赖平均吞吐量作为性能评价指标，可能会掩盖严重的尾延迟退化问题。"
  },
  {
    id: "w3-57",
    date: "2026-09-13",
    lemma: "execution",
    raw: "Execution",
    pos: "n.",
    phonetic: "/ˌeksɪˈkjuːʃn/",
    domain: "CS & 系统",
    freq: 1,
    cn: "（程序、指令、计划的）执行；运行",
    en: "The carrying out or putting into effect of a plan, order, or computer program instruction sequence.",
    synonyms: ["implementation", "running", "enactment"],
    collocations: ["execution time", "speculative execution", "execution engine"],
    morphology: "ex-（出）+ secut（跟随/完成）+ -ion。同周关联词：Executor（执行器，9月15日）。",
    dailyEn: "We had a great business idea, but our execution was too slow.",
    dailyCn: "我们有一个很棒的商业点子，但我们的执行落地太慢了。",
    ieltsEn: "Out-of-order execution allows modern processors to utilize idle functional units while waiting for memory fetches.",
    ieltsCn: "乱序执行技术使现代处理器能够在等待内存读取的同时，充分利用空闲的功能单元。"
  },
  {
    id: "w3-58",
    date: "2026-09-13",
    lemma: "essence",
    raw: "Essence",
    pos: "n.",
    phonetic: "/ˈesns/",
    domain: "学术高频",
    freq: 1,
    cn: "本质；核心精髓；实质",
    en: "The intrinsic nature or indispensable quality of something, especially something abstract, that determines its character.",
    synonyms: ["core", "crux", "substance"],
    collocations: ["in essence", "be of the essence", "capture the essence of"],
    morphology: "源自拉丁语 essentia（存在之本）。高频学术过渡短语：In essence（本质上来说）。",
    dailyEn: "Time is of the essence, so let's get straight to the main point.",
    dailyCn: "时间紧迫（至关重要），我们就直接切入正题吧。",
    ieltsEn: "In essence, the proposed algorithm trades a marginal increase in memory footprint for a substantial reduction in query latency.",
    ieltsCn: "本质上，所提出的算法以微小的内存占用增长为代价，换取了查询延迟的大幅降低。"
  },
  {
    id: "w3-59",
    date: "2026-09-13",
    lemma: "reference implementation runtime",
    raw: "Reference implementation runtime",
    pos: "n. phr.",
    phonetic: "/ˈrefərəns ˌɪmplɪmenˈteɪʃn ˈrʌntaɪm/",
    domain: "CS & 系统",
    freq: 1,
    cn: "参考实现运行耗时（用于验证正确性与计算加速比的标准基线运行时间）",
    en: "The execution time of a standard, authoritative baseline implementation against which optimized versions are benchmarked.",
    synonyms: ["baseline execution time", "standard benchmark runtime"],
    collocations: ["compare against the reference implementation", "baseline runtime", "reference architecture"],
    morphology: "reference（参照标准）+ implementation（代码实现）+ runtime（运行时间）。",
    dailyEn: "Always verify your output against the reference implementation before optimizing for speed.",
    dailyCn: "在进行速度优化之前，务必先对照参考实现验证你输出结果的正确性。",
    ieltsEn: "Speedup is formally defined as the ratio of the reference implementation runtime to the execution time of the optimized kernel.",
    ieltsCn: "加速比被正式定义为参考实现运行耗时与优化后内核执行时间的比值。"
  },
  {
    id: "w3-60",
    date: "2026-09-13",
    lemma: "crossover",
    raw: "Crossover / crossover",
    pos: "n.",
    phonetic: "/ˈkrɒsəʊvə(r)/",
    domain: "CS & 系统",
    freq: 2,
    cn: "①【系统/算法】性能交叉点（两条性能曲线反转的临界规模）；② 跨界融合",
    en: "The point at which one algorithm or policy begins to outperform another as workload size or parameters change; or a blend of styles.",
    synonyms: ["breakeven point", "inflection point", "transition threshold"],
    collocations: ["practical crossover point", "crossover threshold", "genetic crossover"],
    morphology: "cross + over。本周在 9月13日 与 9月15日（practical crossover）均高频出现！",
    dailyEn: "This electric SUV is a popular crossover between a family estate and an off-road vehicle.",
    dailyCn: "这款电动 SUV 是家用旅行车与越野车之间颇受欢迎的跨界车型。",
    ieltsEn: "Empirical calibration identifies the exact crossover point where parallel dispatch begins to outperform sequential execution.",
    ieltsCn: "实证校准确定了并行调度开始优于串行执行的精确性能交叉点。"
  },
  {
    id: "w3-61",
    date: "2026-09-13",
    lemma: "tie",
    raw: "Tie / tie semantics",
    pos: "n. / v.",
    phonetic: "/taɪ/",
    domain: "CS & 系统",
    freq: 2,
    cn: "①【数据/排序】并列值 / 平局（如 Tie-breaking 并列决胜规则）；② 纽带；领带",
    en: "A situation in which two or more items have identical scores, timestamps, or keys during sorting or ranking.",
    synonyms: ["draw", "equal rank", "identical key"],
    collocations: ["tie-breaking rule", "tie semantics", "break a tie"],
    morphology: "本周在 9月13日（Tie）与 9月16日（tie semantics 并列值处理语义）连续出现。",
    dailyEn: "Since the vote ended in a tie, the committee chair had to cast the deciding vote.",
    dailyCn: "由于投票结果打成平局，委员会主席不得不投出决定性的一票。",
    ieltsEn: "Deterministic tie semantics must be specified in top-k queries to guarantee reproducible ordering across distributed nodes.",
    ieltsCn: "在 Top-K 查询中必须明确定义确定性的并列值处理语义（tie semantics），以保证跨分布式节点排序结果的可复现性。"
  },

  // ==================== 2026年9月15日（第一批追加） ====================
  {
    id: "w3-62",
    date: "2026-09-15",
    lemma: "alternate",
    raw: "is alternated",
    pos: "v. / adj.",
    phonetic: "/ˈɔːltəneɪt/",
    domain: "学术高频",
    freq: 1,
    cn: "交替；轮流切换（作动词读 /ˈɔːltəneɪt/，作形容词读 /ɔːlˈtɜːnət/）",
    en: "To occur in turn repeatedly; to switch back and forth between two states, phases, or strategies.",
    synonyms: ["rotate", "interleave", "take turns"],
    collocations: ["alternate between A and B", "is alternated with", "on alternate days"],
    morphology: "alter（另一个/改变）+ -nate",
    dailyEn: "To avoid eye strain, I alternate between reading papers on my tablet and printed copies.",
    dailyCn: "为了避免眼睛疲劳，我会在平板电脑和纸质打印稿之间交替阅读论文。",
    ieltsEn: "During training, gradient updates are alternated between the routing network and the expert modules.",
    ieltsCn: "在训练过程中，梯度更新在路由网络与专家模块之间交替进行。"
  },
  {
    id: "w3-63",
    date: "2026-09-15",
    lemma: "moderate",
    raw: "moderate",
    pos: "adj. / v.",
    phonetic: "/ˈmɒdərət/",
    domain: "学术高频",
    freq: 1,
    cn: "① adj. 适度的；中等的；温和的；② v. 主持（会议）；缓和",
    en: "Average in amount, intensity, quality, or degree; not extreme.",
    synonyms: ["modest", "reasonable", "temperate"],
    collocations: ["moderate overhead", "moderate workload", "at a moderate pace"],
    morphology: "moder（节制/尺度）+ -ate",
    dailyEn: "Doctors recommend at least 30 minutes of moderate exercise five days a week.",
    dailyCn: "医生建议每周至少有五天进行 30 分钟的适度运动。",
    ieltsEn: "Even under moderate concurrency levels, unoptimized lock contention can degrade system throughput significantly.",
    ieltsCn: "即使在中等并发水平下，未经优化的锁竞争也会显著降低系统吞吐量。"
  },
  {
    id: "w3-64",
    date: "2026-09-15",
    lemma: "hierarchy",
    raw: "Hierarchy",
    pos: "n.",
    phonetic: "/ˈhaɪərɑːki/",
    domain: "CS & 系统",
    freq: 1,
    cn: "层级结构（如计算机存储层级 Memory Hierarchy）；等级制度",
    en: "A system or organization in which items or components are ranked one above the other according to status, capacity, or speed.",
    synonyms: ["tiered structure", "ranking", "pecking order"],
    collocations: ["memory hierarchy", "cache hierarchy", "organizational hierarchy"],
    morphology: "hier-（神圣/高层）+ archy（统治/结构）",
    dailyEn: "Flat startups usually have much less corporate hierarchy than traditional banks.",
    dailyCn: "扁平化初创公司的企业层级通常比传统银行少得多。",
    ieltsEn: "Exploiting spatial locality across the CPU cache hierarchy is essential for maximizing memory-bound kernel performance.",
    ieltsCn: "充分利用 CPU 缓存层级结构中的空间局部性，对于最大化内存受限型内核的性能至关重要。"
  },
  {
    id: "w3-65",
    date: "2026-09-15",
    lemma: "dominate",
    raw: "dominates",
    pos: "v.",
    phonetic: "/ˈdɒmɪneɪt/",
    domain: "学术高频",
    freq: 1,
    cn: "主导；占绝对最大比重（如某项开销主导了总运行时间）",
    en: "To have a commanding influence on; in systems analysis, to account for the vast majority of execution time or cost.",
    synonyms: ["prevail", "outweigh", "govern"],
    collocations: ["dominate execution time", "market-dominating", "Pareto dominate"],
    morphology: "domin-（主人/统治，源自拉丁语 dominus）+ -ate",
    dailyEn: "One tall cathedral dominates the skyline of the old town.",
    dailyCn: "一座高耸的大教堂主导了老城区的天际线。",
    ieltsEn: "When input sequences exceed 32K tokens, quadratic attention computation dominates the overall inference latency.",
    ieltsCn: "当输入序列超过 32K 词元时，二次方复杂度的注意力计算主导了整体推理延迟。"
  },
  {
    id: "w3-66",
    date: "2026-09-15",
    lemma: "startup",
    raw: "startup",
    pos: "n.",
    phonetic: "/ˈstɑːtʌp/",
    domain: "CS & 系统",
    freq: 1,
    cn: "① 初创公司 / 创业企业；②【系统】启动阶段（如冷启动开销 Startup Cost）",
    en: "A newly established entrepreneurial business; or the action/phase of setting a computer system or process in motion.",
    synonyms: ["new venture", "initialization phase", "bootstrapping"],
    collocations: ["tech startup", "startup latency", "cold-start overhead"],
    morphology: "start + up 合成词，兼具商业“初创公司”（与同日紧邻词 entrepreneur 呼应）与系统“启动”双义。",
    dailyEn: "He left a big tech company to join an AI startup in London.",
    dailyCn: "他离开了一家大型科技公司，加入了伦敦的一家人工智能初创企业。",
    ieltsEn: "Amortizing thread-pool startup overhead across batches of queries substantially improves short-running job performance.",
    ieltsCn: "将线程池的启动开销分摊到多批查询中，可以显著提升短耗时作业的性能。"
  },
  {
    id: "w3-67",
    date: "2026-09-15",
    lemma: "entrepreneur",
    raw: "entrepreneur",
    pos: "n.",
    phonetic: "/ˌɒntrəprəˈnɜː(r)/",
    domain: "学术高频",
    freq: 1,
    cn: "创业者；企业家（雅思写作与听力高频拼写易错词）",
    en: "A person who sets up a business or businesses, taking on financial risks in the hope of innovation and profit.",
    synonyms: ["founder", "business innovator", "venture creator"],
    collocations: ["tech entrepreneur", "entrepreneurial spirit", "aspiring entrepreneur"],
    morphology: "源自法语 entreprendre（承担/着手做：entre- 在……之间 + prendre 拿取）。",
    dailyEn: "As a first-time entrepreneur, she had to learn accounting and marketing from scratch.",
    dailyCn: "作为一名初次创业者，她不得不从零开始学习财务和市场营销。",
    ieltsEn: "University incubators provide aspiring student entrepreneurs with seed funding, mentorship, and legal guidance.",
    ieltsCn: "大学孵化器为有抱负的学生创业者提供种子资金、导师辅导与法律指导。"
  },
  {
    id: "w3-68",
    date: "2026-09-15",
    lemma: "commission",
    raw: "Commission",
    pos: "n. / v.",
    phonetic: "/kəˈmɪʃn/",
    domain: "英式日常",
    freq: 1,
    cn: "① 委员会（官方监管机构）；② 佣金 / 手续费；③ 正式委托制作/调查",
    en: "An official group of people entrusted with authority; a fee paid to an agent in a transaction; or to formally order a study/work.",
    synonyms: ["committee", "brokerage fee", "authorize"],
    collocations: ["zero commission", "independent commission", "commission a report"],
    morphology: "com-（共同）+ miss（发送/托付）+ -ion",
    dailyEn: "Fintech apps like Revolut became popular because they exchange currencies with zero commission on weekdays.",
    dailyCn: "像 Revolut 这样的金融科技应用之所以受欢迎，是因为它们在工作日提供零佣金换汇服务。",
    ieltsEn: "The government commissioned an independent panel to audit the environmental impact of the proposed infrastructure project.",
    ieltsCn: "政府委托了一个独立专家组对拟议基础设施项目的环境影响进行审查。"
  },
  {
    id: "w3-69",
    date: "2026-09-15",
    lemma: "discipline",
    raw: "discipline",
    pos: "n. / v.",
    phonetic: "/ˈdɪsəplɪn/",
    domain: "学术高频",
    freq: 1,
    cn: "① 学科领域（Academic Discipline）；② 自律 / 纪律；③【系统】调度策略（如排队规则）",
    en: "A branch of academic knowledge studied in higher education; or the practice of training people to obey rules and self-control.",
    synonyms: ["field of study", "self-control", "scheduling policy"],
    collocations: ["academic discipline", "cross-disciplinary research", "queueing discipline"],
    morphology: "源自拉丁语 discipulus（学生/门徒，由此衍生出“教学科目”与“纪律”双义）。",
    dailyEn: "Remote working requires a high level of personal discipline.",
    dailyCn: "远程办公需要高度的个人自律。",
    ieltsEn: "Breakthroughs in computational biology increasingly require collaboration across multiple academic disciplines.",
    ieltsCn: "计算生物学领域的突破越来越需要跨多个学术学科的协同合作。"
  },
  {
    id: "w3-70",
    date: "2026-09-15",
    lemma: "remainder",
    raw: "remainder",
    pos: "n.",
    phonetic: "/rɪˈmeɪndə(r)/",
    domain: "CS & 系统",
    freq: 1,
    cn: "①【数学/CS】余数（整除后剩下的部分，或向量化循环尾部剩余元素）；② 剩余部分/其余时间",
    en: "A part, number, or quantity that is left over; in division or SIMD vectorization, the elements left after dividing by a fixed block size.",
    synonyms: ["modulo residue", "leftover", "rest"],
    collocations: ["remainder loop", "for the remainder of", "division with remainder"],
    morphology: "remain（剩余/保持）+ -der（名词后缀）",
    dailyEn: "We spent the remainder of the afternoon discussing our project proposal in a café.",
    dailyCn: "我们在咖啡馆里度过了下午剩下的时间，讨论我们的项目提案。",
    ieltsEn: "When the array length is not a multiple of the SIMD width, a scalar remainder loop processes the trailing elements.",
    ieltsCn: "当数组长度不是 SIMD 向量宽度的整数倍时，由标量尾部余数循环（remainder loop）处理剩余元素。"
  },
  {
    id: "w3-71",
    date: "2026-09-15",
    lemma: "policy",
    raw: "policy / Policy agreement",
    pos: "n.",
    phonetic: "/ˈpɒləsi/",
    domain: "CS & 系统",
    freq: 2,
    cn: "①【系统/强化学习】策略（如调度策略、缓存淘汰策略）；② 政策 / 规章条款",
    en: "In computing and RL, a formal rule or function mapping states to actions (e.g., scheduling or caching); or an official organizational rule.",
    synonyms: ["strategy", "protocol", "guideline"],
    collocations: ["eviction policy", "routing policy", "policy agreement"],
    morphology: "在 9月15日 词表中出现 2 次（policy 与 Policy agreement 策略一致性评估）。",
    dailyEn: "Please read the refund policy carefully before booking non-flexible train tickets.",
    dailyCn: "在预订不可改签的火车票之前，请仔细阅读退款政策。",
    ieltsEn: "High policy agreement between our lightweight heuristic and the offline oracle confirms the optimality of the routing decisions.",
    ieltsCn: "我们的轻量级启发式方法与离线先知模型（Oracle）之间极高的策略一致性，证实了路由决策的最优性。"
  },
  {
    id: "w3-72",
    date: "2026-09-15",
    lemma: "strand",
    raw: "Strand",
    pos: "n.",
    phonetic: "/strænd/",
    domain: "学术高频",
    freq: 1,
    cn: "①（研究、论证或计划的）分支方向 / 脉络（a strand of research）；② 一股（线、DNA链）",
    en: "An element that forms part of a complex whole, such as a distinct line of academic inquiry or a thread in a rope/DNA.",
    synonyms: ["thread", "branch", "stream"],
    collocations: ["two strands of literature", "research strand", "DNA strand"],
    morphology: "原义为“绳索中的一股线”，在学术论文 Literature Review 中极常用来表示“某一研究脉络/流派”。",
    dailyEn: "London's famous street 'The Strand' runs right past King's College.",
    dailyCn: "伦敦著名的斯特兰德大街（河滨路）正好从国王学院门前经过。",
    ieltsEn: "Our work bridges two previously separate strands of literature: database query optimization and adaptive machine learning.",
    ieltsCn: "我们的工作架起了此前相互独立的两个研究脉络之间的桥梁：数据库查询优化与自适应机器学习。"
  },
  {
    id: "w3-73",
    date: "2026-09-15",
    lemma: "likelihood",
    raw: "Likelihood",
    pos: "n.",
    phonetic: "/ˈlaɪklihʊd/",
    domain: "学术高频",
    freq: 1,
    cn: "可能性；【统计/机器学习】似然度（如最大似然估计 Maximum Likelihood）",
    en: "The state or fact of something's being probable; in statistics, a function measuring how plausible a parameter set is given observed data.",
    synonyms: ["probability", "plausibility", "chance"],
    collocations: ["maximum likelihood estimation", "log-likelihood", "in all likelihood"],
    morphology: "likely（可能的）+ -hood（抽象名词后缀，表状态或性质）",
    dailyEn: "Taking regular breaks reduces the likelihood of burnout during exam season.",
    dailyCn: "定期休息可以降低考试季出现精力透支的可能性。",
    ieltsEn: "Model parameters are optimized by maximizing the log-likelihood of the observed ground-truth trajectories.",
    ieltsCn: "模型参数通过最大化所观测到的真实轨迹的对数似然度来进行优化。"
  },
  {
    id: "w3-74",
    date: "2026-09-15",
    lemma: "refund",
    raw: "Refund",
    pos: "n. / v.",
    phonetic: "/ˈriːfʌnd/",
    domain: "英式日常",
    freq: 1,
    cn: "退款；退还费用（作名词重音在最前 /ˈriːfʌnd/，作动词重音在后 /rɪˈfʌnd/）",
    en: "A repayment of a sum of money, typically to a dissatisfied customer or for cancelled services.",
    synonyms: ["reimbursement", "repayment", "rebate"],
    collocations: ["claim a full refund", "eligible for a refund", "non-refundable deposit"],
    morphology: "re-（回）+ fund（资金）",
    dailyEn: "If your train is delayed by more than an hour, you can claim a full refund online.",
    dailyCn: "如果你的火车晚点超过一小时，你可以在网上申请全额退款。",
    ieltsEn: "Consumer protection regulations stipulate that digital purchases are eligible for an automatic refund within fourteen days.",
    ieltsCn: "消费者保护法规明确规定，数字商品购买后在十四天内有资格获得自动退款。"
  },
  {
    id: "w3-75",
    date: "2026-09-15",
    lemma: "regulation",
    raw: "Regulations",
    pos: "n.",
    phonetic: "/ˌreɡjuˈleɪʃn/",
    domain: "学术高频",
    freq: 1,
    cn: "法规；监管条例；规章制度（常作复数 Regulations）",
    en: "A rule or directive made and maintained by an authority to govern conduct, safety, or compliance.",
    synonyms: ["statute", "directive", "regulatory framework"],
    collocations: ["comply with regulations", "data privacy regulations", "stringent regulations"],
    morphology: "regul-（规则/尺子）+ -ation",
    dailyEn: "New building regulations require all student flats to have upgraded fire alarms.",
    dailyCn: "新的建筑法规要求所有学生公寓升级火灾报警器。",
    ieltsEn: "Stringent data protection regulations require cloud providers to enforce strict geographical boundaries on user storage.",
    ieltsCn: "严格的数据保护法规要求云服务提供商对用户存储实施严格的地理边界限制。"
  },
  {
    id: "w3-76",
    date: "2026-09-15",
    lemma: "compositional",
    raw: "Compositional",
    pos: "adj.",
    phonetic: "/ˌkɒmpəˈzɪʃənl/",
    domain: "CS & 系统",
    freq: 1,
    cn: "组合式的；具备可组合性的（由基础子模块组合构造复杂系统的能力）",
    en: "Relating to the way in which a whole or mixture is made up; in CS/AI, able to construct complex meanings or pipelines from modular primitives.",
    synonyms: ["modular", "combinatorial", "structural"],
    collocations: ["compositional generalization", "compositional semantics", "compositional reasoning"],
    morphology: "compose（组成）+ -ition + -al。同周姊妹词：Composable（可组合的，9月16日）。",
    dailyEn: "Lego bricks are a classic example of compositional design.",
    dailyCn: "乐高积木是组合式设计的经典例子。",
    ieltsEn: "Compositional operator design allows complex relational queries to be synthesized from a small set of verified primitives.",
    ieltsCn: "组合式算子设计允许从一小组经过验证的基础原语中合成出复杂的关系型查询。"
  },
  {
    id: "w3-77",
    date: "2026-09-15",
    lemma: "context",
    raw: "Context",
    pos: "n.",
    phonetic: "/ˈkɒntekst/",
    domain: "CS & 系统",
    freq: 1,
    cn: "① 上下文 / 语境；②【操作系统/大模型】执行上下文（Context Switch / Context Window）",
    en: "The circumstances that form the setting for an event or statement; in computing, the minimal state saved to interrupt and resume a task.",
    synonyms: ["environment", "background state", "surrounding text"],
    collocations: ["context switch overhead", "long-context window", "take out of context"],
    morphology: "con-（共同）+ text（编织）→ 前后编织在一起的语境与状态。",
    dailyEn: "You can often guess the meaning of an unfamiliar word from its context.",
    dailyCn: "你通常可以根据上下文语境猜出一个生词的意思。",
    ieltsEn: "Frequent kernel-mode context switches introduce substantial CPU overhead in I/O-intensive workloads.",
    ieltsCn: "在 I/O 密集型工作负载中，频繁的内核态上下文切换会引入可观的 CPU 开销。"
  },
  {
    id: "w3-78",
    date: "2026-09-15",
    lemma: "integrity",
    raw: "Integrity",
    pos: "n.",
    phonetic: "/ɪnˈteɡrəti/",
    domain: "CS & 系统",
    freq: 1,
    cn: "①【数据/系统】完整性（数据未被篡改或损坏的一致状态）；② 学术诚信 / 正直",
    en: "In computing, the maintenance and assurance of the accuracy and consistency of data over its life-cycle; moral honesty.",
    synonyms: ["soundness", "wholeness", "probity"],
    collocations: ["data integrity", "academic integrity", "referential integrity"],
    morphology: "integr-（完整无缺，同 integer 整数）+ -ity",
    dailyEn: "Universities take academic integrity very seriously when reviewing dissertations.",
    dailyCn: "大学在评审学位论文时非常重视学术诚信。",
    ieltsEn: "Cryptographic checksums are verified upon every block read to guarantee end-to-end data integrity.",
    ieltsCn: "系统在每次读取数据块时都会校验加密校验和，以保证端到端的数据完整性。"
  },
  {
    id: "w3-79",
    date: "2026-09-15",
    lemma: "schema",
    raw: "Schema",
    pos: "n.",
    phonetic: "/ˈskiːmə/",
    domain: "CS & 系统",
    freq: 1,
    cn: "【数据库/数据工程】模式；表结构定义；架构图式",
    en: "A formal description of the structure, data types, and constraints of a database or dataset.",
    synonyms: ["blueprint", "structural definition", "data model"],
    collocations: ["database schema", "schema evolution", "JSON schema validation"],
    morphology: "源自希腊语 skhēma（形态/轮廓），复数形式可为 schemas 或 schemata。",
    dailyEn: "Before writing any SQL queries, check the table schema to see the column names and types.",
    dailyCn: "在编写任何 SQL 查询之前，先查看一下表结构定义（schema）以了解列名和数据类型。",
    ieltsEn: "Enforcing strict schema validation at ingestion time prevents malformed entries from corrupting downstream analytical pipelines.",
    ieltsCn: "在数据摄取阶段强制执行严格的模式校验，可防止格式错误的记录破坏下游分析流水线。"
  },
  {
    id: "w3-80",
    date: "2026-09-15",
    lemma: "conditioned",
    raw: "Conditioned",
    pos: "adj.",
    phonetic: "/kənˈdɪʃnd/",
    domain: "CS & 系统",
    freq: 1,
    cn: "①【概率/生成模型】以……为条件的（Conditioned on X）；②【数值分析】条件数良好的（Well-conditioned）",
    en: "Dependent upon or controlled by a prior variable, distribution, or context; or having a specific numerical stability property.",
    synonyms: ["contingent on", "parameterized by", "dependent"],
    collocations: ["conditioned on context", "ill-conditioned matrix", "well-conditioned problem"],
    morphology: "condition（条件/状态）+ -ed",
    dailyEn: "Our outdoor picnic plans are conditioned on tomorrow's weather forecast.",
    dailyCn: "我们的户外野餐计划取决于明天的天气预报情况。",
    ieltsEn: "In conditional routing architectures, expert selection is dynamically conditioned on the complexity of each input token.",
    ieltsCn: "在条件路由架构中，专家模块的选择动态地以每个输入词元的复杂度为条件。"
  }
];

// ==================== 状态管理与初始化 ====================
const STORAGE_KEY = "lexis_pro_mastery_v1";
let masteryMap = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
let currentDateFilter = "all";
let currentDomainFilter = "all";
let currentStatusFilter = "all";
let searchQuery = "";
let currentAccent = "en-GB"; // 默认英式发音

const STATUS_CYCLE = ["Not Attempted", "Partially", "Mastered"];

function getWordStatus(id) {
  return masteryMap[id] || "Not Attempted";
}

function cycleWordStatus(id) {
  const current = getWordStatus(id);
  const nextIndex = (STATUS_CYCLE.indexOf(current) + 1) % STATUS_CYCLE.length;
  masteryMap[id] = STATUS_CYCLE[nextIndex];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(masteryMap));
  renderAll();
}

// ==================== Web Speech API 真人朗读 ====================
function speakText(text, event) {
  if (event) event.stopPropagation();
  if (!("speechSynthesis" in window)) {
    alert("当前浏览器不支持语音合成功能，建议使用 Chrome / Edge / Safari。");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = currentAccent;
  utterance.rate = 0.94;
  window.speechSynthesis.speak(utterance);
}

// ==================== 仪表盘统计更新 ====================
function updateDashboard() {
  const total = VOCAB_DATA_2026_09_W3.length;
  const freqWords = VOCAB_DATA_2026_09_W3.filter(w => w.freq > 1).length;
  document.getElementById("statTotal").textContent = total;
  document.getElementById("statFreqNote").textContent = `含 ${freqWords} 个跨日高频复现词 · 覆盖 3 个日期切片`;

  // 统计领域分布
  const counts = { "CS & 系统": 0, "学术高频": 0, "英式日常": 0 };
  let unattempted = 0, partially = 0, mastered = 0;

  VOCAB_DATA_2026_09_W3.forEach(w => {
    counts[w.domain] = (counts[w.domain] || 0) + 1;
    const st = getWordStatus(w.id);
    if (st === "Not Attempted") unattempted++;
    else if (st === "Partially") partially++;
    else if (st === "Mastered") mastered++;
  });

  const csPct = Math.round((counts["CS & 系统"] / total) * 100);
  const acadPct = Math.round((counts["学术高频"] / total) * 100);
  const dailyPct = 100 - csPct - acadPct;

  document.getElementById("domainBars").innerHTML = `
    <div class="bar-segment" style="width:${csPct}%; background:#38bdf8" title="CS & 系统: ${csPct}%"></div>
    <div class="bar-segment" style="width:${acadPct}%; background:#c084fc" title="学术高频: ${acadPct}%"></div>
    <div class="bar-segment" style="width:${dailyPct}%; background:#34d399" title="英式日常: ${dailyPct}%"></div>
  `;
  document.getElementById("domainLegend").textContent =
    `💻 CS科研 ${csPct}% · 🎓 学术雅思 ${acadPct}% · ☕ 英式日常 ${dailyPct}%`;

  document.getElementById("countUnattempted").textContent = unattempted;
  document.getElementById("countPartially").textContent = partially;
  document.getElementById("countMastered").textContent = mastered;
}

// ==================== 渲染卡片网格 ====================
function getDomainClass(domain) {
  if (domain === "CS & 系统") return "domain-cs";
  if (domain === "学术高频") return "domain-acad";
  return "domain-daily";
}

// ==================== 50张高清自然风光壁纸库（山水、雪地、冰川、河流、森林） ====================
const NATURE_WALLPAPERS = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80", // 1. 优胜美地山谷与河流
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80", // 2. 壮丽山脉云海
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80", // 3. 星空下的皑皑雪山
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80", // 4. 晨雾缭绕的山林
  "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1920&q=80", // 5. 翡翠高山湖泊与峰峦
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1920&q=80", // 6. 阳光森林与溪流峡谷
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80", // 7. 阿尔卑斯静谧山水湖面
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=80", // 8. 翠绿山谷日出
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80", // 9. 旷野孤峰与晨光
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1920&q=80", // 10. 幽静森林古木吊桥
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1920&q=80", // 11. 深林繁花与溪谷
  "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1920&q=80", // 12. 极寒雪山之巅迷雾
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80", // 13. 宁静海岸线与远山
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80", // 14. 冰岛黑沙滩与雪原
  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1920&q=80", // 15. 喜马拉雅冷峻雪峰
  "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=1920&q=80", // 16. 阿尔卑斯冬季雪脊
  "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1920&q=80", // 17. 金色日照金山雪顶
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1920&q=80", // 18. 森林飞瀑与翠绿深潭
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80", // 19. 阳光穿透高耸松林
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1920&q=80", // 20. 雪山脚下的镜面湖泊
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80", // 21. 蜿蜒山间公路与秋林
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1920&q=80", // 22. 朝霞映照的海湾奇石
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=80", // 23. 苍翠参天古树光影
  "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1920&q=80", // 24. 北欧针叶林与薄雾
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1920&q=80", // 25. 洛基山脉冰川湖泊
  "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80", // 26. 仰望森林峡谷一线天
  "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=1920&q=80", // 27. 茂密松林与远方山脊
  "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=1920&q=80", // 28. 极夜星云与雪野长空
  "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=1920&q=80", // 29. 暗调冷峻山峰与云雾
  "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1920&q=80", // 30. 黄金落日与平静水面
  "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1920&q=80", // 31. 秋季彩林与雪山倒影
  "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=1920&q=80", // 32. 晨曦草甸与层峦叠嶂
  "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=80", // 33. 红松林与山间迷雾
  "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1920&q=80", // 34. 冰封雪原上的孤寂木屋
  "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1920&q=80", // 35. 漫天飞雪中的冬日松林
  "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1920&q=80", // 36. 纯白雪地与远山晴空
  "https://images.unsplash.com/photo-1457269449834-928af64c684d?auto=format&fit=crop&w=1920&q=80", // 37. 极地冰晶与雪原风光
  "https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=1920&q=80", // 38. 银装素裹的森林雪道
  "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=1920&q=80", // 39. 冬季冰封河谷与雪峰
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80", // 40. 瑞士山水峡湾与轻舟
  "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1920&q=80", // 41. 蜿蜒穿行于山谷的河流
  "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1920&q=80", // 42. 森林湍急清澈河溪
  "https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&w=1920&q=80", // 43. 壮阔瀑布与深谷激流
  "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1920&q=80", // 44. 晚霞映射下的雪山湖畔
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85", // 45. 寒夜雪山星河万里
  "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?auto=format&fit=crop&w=1920&q=80", // 46. 新西兰南岛冰川雪山
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85", // 47. 晨光河谷与花岗岩峭壁
  "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1920&q=80", // 48. 春日高山草甸与远方雪顶
  "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=1920&q=80", // 49. 多洛米蒂奇峰与静谧草坡
  "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1920&q=80"  // 50. 极光夜空下的冰封雪地与山川
];

let currentBgIndex = Math.floor(Math.random() * NATURE_WALLPAPERS.length);

function applyWallpaper(index) {
  currentBgIndex = (index + NATURE_WALLPAPERS.length) % NATURE_WALLPAPERS.length;
  const url = NATURE_WALLPAPERS[currentBgIndex];
  document.body.style.setProperty("--custom-wallpaper", `url('${url}')`);
  document.body.classList.add("has-wallpaper");

  const label = document.getElementById("bgIndexLabel");
  if (label) {
    label.textContent = `切换风景 (${currentBgIndex + 1}/50)`;
  }
  const minimalBtn = document.getElementById("bgMinimalBtn");
  if (minimalBtn) minimalBtn.classList.remove("active");
}

function restoreMinimalBackground() {
  document.body.classList.remove("has-wallpaper");
  document.body.style.removeProperty("--custom-wallpaper");
  const minimalBtn = document.getElementById("bgMinimalBtn");
  if (minimalBtn) minimalBtn.classList.add("active");
}

// ==================== 渲染卡片网格（新增悬停展开 + 移出卡片自动收回） ====================
function getDomainClass(domain) {
  if (domain === "CS & 系统") return "domain-cs";
  if (domain === "学术高频") return "domain-acad";
  return "domain-daily";
}

function renderCards() {
  const grid = document.getElementById("wordGrid");
  const filtered = VOCAB_DATA_2026_09_W3.filter(item => {
    const matchDate = currentDateFilter === "all" || item.date === currentDateFilter;
    const matchDomain = currentDomainFilter === "all" || item.domain === currentDomainFilter;
    const status = getWordStatus(item.id);
    const matchStatus =
      currentStatusFilter === "all" ||
      (currentStatusFilter === "freq" ? item.freq > 1 : status === currentStatusFilter);

    const q = searchQuery.trim().toLowerCase();
    const matchSearch =
      !q ||
      item.lemma.toLowerCase().includes(q) ||
      item.raw.toLowerCase().includes(q) ||
      item.cn.toLowerCase().includes(q) ||
      item.en.toLowerCase().includes(q) ||
      item.collocations.some(c => c.toLowerCase().includes(q));

    return matchDate && matchDomain && matchStatus && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color: var(--text-muted);">没有找到匹配当前筛选条件的词条，请尝试切换日期或清空搜索框。</div>`;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const status = getWordStatus(item.id);
    const showRawDiff = item.raw.toLowerCase() !== item.lemma.toLowerCase();
    const shortDate = item.date.slice(5);

    return `
      <article class="word-card" data-id="${item.id}" onmouseleave="collapseCardOnLeave(this)">
        <div class="card-top">
          <div class="badge-group">
            <span class="domain-badge ${getDomainClass(item.domain)}">${item.domain}</span>
            <span class="date-badge">${shortDate}</span>
            ${item.freq > 1 ? `<span class="freq-badge">🔥 高频 ×${item.freq}</span>` : ""}
          </div>
          <button class="status-btn" data-status="${status}" onclick="cycleWordStatus('${item.id}')" title="点击切换掌握状态">
            ${status}
          </button>
        </div>

        <div class="word-head">
          <div class="word-title-wrap">
            <h2 class="word-lemma">${item.lemma}</h2>
            ${showRawDiff ? `<span class="raw-source-note">📄 原文摘录: ${item.raw}</span>` : ""}
          </div>
          <div class="phonetic-row">
            <span class="phonetic-text">${item.phonetic}</span>
            <button class="speak-btn" onclick="speakText('${item.lemma.replace(/'/g, "\\'")}', event)" title="朗读单词">
              🔊
            </button>
          </div>
        </div>

        <div class="meaning-box">
          <div class="pos-cn">
            <span class="pos-tag">${item.pos}</span>${item.cn}
          </div>
          <div class="en-def">${item.en}</div>
        </div>

        <button
          class="drawer-toggle"
          onclick="toggleCardDrawer(this)"
          onmouseenter="expandCardOnHover(this)"
        >
          <span>展开搭配、构词与双语境造句</span>
          <span class="arrow">▾</span>
        </button>

        <div class="drawer-content">
          <div>
            <div style="font-size:0.72rem; color:var(--text-muted); margin-bottom:0.3rem;">📌 高频搭配 (Collocations) & 近义词</div>
            <div class="meta-pills">
              ${item.collocations.map(c => `<span class="meta-pill">🔗 ${c}</span>`).join("")}
              ${item.synonyms.map(s => `<span class="meta-pill">≈ ${s}</span>`).join("")}
            </div>
          </div>

          <div class="morph-note">
            <strong>💡 构词与语境解析：</strong>${item.morphology}
          </div>

          <div class="sentence-block">
            <div class="sent-item">
              <div class="sent-header">
                <span class="sent-type">🗣️ Daily Spoken · 日常口语</span>
                <button class="speak-btn" style="width:24px;height:24px;font-size:0.7rem;" onclick="speakText('${item.dailyEn.replace(/'/g, "\\'")}', event)" title="朗读日常例句">🔊</button>
              </div>
              <div class="sent-en">${item.dailyEn}</div>
              <div class="sent-cn">${item.dailyCn}</div>
            </div>

            <div class="sent-item">
              <div class="sent-header">
                <span class="sent-type">🏛️ IELTS & Academic · 雅思与科研学术</span>
                <button class="speak-btn" style="width:24px;height:24px;font-size:0.7rem;" onclick="speakText('${item.ieltsEn.replace(/'/g, "\\'")}', event)" title="朗读学术例句">🔊</button>
              </div>
              <div class="sent-en">${item.ieltsEn}</div>
              <div class="sent-cn">${item.ieltsCn}</div>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// 1. 原有点击切换展开/收起（保持不变）
function toggleCardDrawer(btn) {
  const card = btn.closest(".word-card");
  card.classList.toggle("expanded");
  const arrow = btn.querySelector(".arrow");
  arrow.textContent = card.classList.contains("expanded") ? "▴" : "▾";
}

// 2. 新增：鼠标移动到「展开搭配、构词与双语境造句」上时，自动展开为截图2效果
function expandCardOnHover(btn) {
  const card = btn.closest(".word-card");
  if (!card.classList.contains("expanded")) {
    card.classList.add("expanded");
    const arrow = btn.querySelector(".arrow");
    if (arrow) arrow.textContent = "▴";
  }
}

// 3. 新增：鼠标移出整个单词卡片范围后，自动收回为截图1效果
function collapseCardOnLeave(card) {
  if (card.classList.contains("expanded")) {
    card.classList.remove("expanded");
    const arrow = card.querySelector(".drawer-toggle .arrow");
    if (arrow) arrow.textContent = "▾";
  }
}

function renderAll() {
  updateDashboard();
  renderCards();
}

// ==================== 事件绑定 ====================
document.addEventListener("DOMContentLoaded", () => {
  // 每次打开网页自动随机应用一张自然风景图
  applyWallpaper(currentBgIndex);
  renderAll();

  // 切换下一张随机/顺序自然风景
  const bgSwitchBtn = document.getElementById("bgSwitchBtn");
  if (bgSwitchBtn) {
    bgSwitchBtn.addEventListener("click", () => {
      applyWallpaper(currentBgIndex + 1);
    });
  }

  // 恢复极简纯色极光背景
  const bgMinimalBtn = document.getElementById("bgMinimalBtn");
  if (bgMinimalBtn) {
    bgMinimalBtn.addEventListener("click", () => {
      restoreMinimalBackground();
    });
  }

  // 日期筛选
  document.querySelectorAll("#dateFilter .seg-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#dateFilter .seg-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentDateFilter = btn.dataset.date;
      renderCards();
    });
  });

  // 领域筛选
  document.querySelectorAll("#domainFilter .seg-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#domainFilter .seg-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentDomainFilter = btn.dataset.domain;
      renderCards();
    });
  });

  // 状态下拉筛选
  document.getElementById("statusFilter").addEventListener("change", e => {
    currentStatusFilter = e.target.value;
    renderCards();
  });

  // 实时搜索
  document.getElementById("searchInput").addEventListener("input", e => {
    searchQuery = e.target.value;
    renderCards();
  });

  // 切换英美发音
  document.getElementById("accentToggle").addEventListener("click", () => {
    currentAccent = currentAccent === "en-GB" ? "en-US" : "en-GB";
    document.getElementById("accentLabel").textContent = currentAccent === "en-GB" ? "UK 发音" : "US 发音";
    document.querySelector("#accentToggle .icon").textContent = currentAccent === "en-GB" ? "🇬🇧" : "🇺🇸";
  });

  // 切换主动回忆遮挡模式
  const recallBtn = document.getElementById("recallToggle");
  recallBtn.addEventListener("click", () => {
    document.body.classList.toggle("recall-mode");
    recallBtn.classList.toggle("active");
  });

  // 切换深浅主题
  document.getElementById("themeToggle").addEventListener("click", () => {
    const html = document.documentElement;
    const nextTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", nextTheme);
    document.getElementById("themeIcon").textContent = nextTheme === "dark" ? "☀️" : "🌙";
  });

  // 重置进度
  document.getElementById("resetProgressBtn").addEventListener("click", () => {
    if (confirm("确定要将本周所有单词的自测进度重置为 Not Attempted 吗？")) {
      masteryMap = {};
      localStorage.removeItem(STORAGE_KEY);
      renderAll();
    }
  });
});