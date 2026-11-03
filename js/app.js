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
  },
  // ==================== 2026年9月15日（后半部分全部补齐，100%收官9月15日） ====================
  {
    id: "w3-81",
    date: "2026-09-15",
    lemma: "instance",
    raw: "Instance",
    pos: "n.",
    phonetic: "/ˈɪnstəns/",
    domain: "CS & 系统",
    freq: 1,
    cn: "①【CS/云计算】实例（类的具体对象、云主机实例或问题算例）；② 例子 / 具体情况",
    en: "An example or single occurrence of something; in computing, a concrete realization of a class, virtual machine, or benchmark problem.",
    synonyms: ["example", "case", "object"],
    collocations: ["cloud compute instance", "problem instance", "for instance"],
    morphology: "in-（在内）+ st（站立）+ -ance → 站在面前的具体事例。同周关联动词：instantiate（实例化，9月16日）。",
    dailyEn: "In most instances, restarting the router fixes temporary connection drops.",
    dailyCn: "在大多数情况下，重启路由器就能解决暂时的断网问题。",
    ieltsEn: "Each benchmark instance is executed five times on an isolated cloud instance to minimize performance variance.",
    ieltsCn: "每个基准测试算例都在隔离的云实例上运行五次，以最小化性能波动。"
  },
  {
    id: "w3-82",
    date: "2026-09-15",
    lemma: "ambiguity",
    raw: "Ambiguity",
    pos: "n.",
    phonetic: "/ˌæmbɪˈɡjuːəti/",
    domain: "学术高频",
    freq: 1,
    cn: "歧义性；模棱两可；不明确的状态",
    en: "The quality of being open to more than one interpretation; inexactness or uncertainty of meaning.",
    synonyms: ["vagueness", "uncertainty", "equivocation"],
    collocations: ["lexical ambiguity", "resolve ambiguity", "avoid ambiguity"],
    morphology: "ambi-（双向/两边）+ agere（驱使）+ -ity。同周反义动作词：disambiguate（消除歧义，9月13日）。",
    dailyEn: "Please word the contract carefully so there is no room for ambiguity.",
    dailyCn: "请仔细斟酌合同措辞，以免留下任何模棱两可的余地。",
    ieltsEn: "Syntactic ambiguity in natural language queries often necessitates interactive clarification from the user.",
    ieltsCn: "自然语言查询中的句法歧义往往需要用户进行交互式澄清。"
  },
  {
    id: "w3-83",
    date: "2026-09-15",
    lemma: "mean of qualified daily evidence",
    raw: "mean of qualified daily evidence",
    pos: "n. phr.",
    phonetic: "/miːn ɒv ˈkwɒlɪfaɪd ˈdeɪli ˈevɪdəns/",
    domain: "CS & 系统",
    freq: 1,
    cn: "合格每日证据均值（按日聚合过滤后有效观测样本的统计平均值）",
    en: "A statistical metric representing the average value of daily observations or records that satisfy predefined validity criteria.",
    synonyms: ["filtered daily average", "qualified sample mean"],
    collocations: ["compute the mean of", "qualified evidence", "daily aggregation"],
    morphology: "mean（统计学：算术平均值）+ qualified（符合筛选标准的）+ daily evidence（每日观测证据/数据记录）。",
    dailyEn: "Instead of using raw noisy logs, our dashboard plots the mean of qualified daily evidence.",
    dailyCn: "我们的仪表盘没有使用充满噪点的原始日志，而是绘制了合格每日证据的平均值。",
    ieltsEn: "To mitigate sampling bias from incomplete logs, the estimator computes the mean of qualified daily evidence across active partitions.",
    ieltsCn: "为了减轻不完整日志带来的采样偏差，估计器跨活跃分区计算合格每日证据的均值。"
  },
  {
    id: "w3-84",
    date: "2026-09-15",
    lemma: "dataset",
    raw: "dataset",
    pos: "n.",
    phonetic: "/ˈdeɪtəset/",
    domain: "CS & 系统",
    freq: 1,
    cn: "数据集；语料数据集合",
    en: "A structured collection of related sets of data or records used for empirical analysis, benchmarking, or machine learning.",
    synonyms: ["corpus", "data collection", "benchmark suite"],
    collocations: ["benchmark dataset", "curated dataset", "training and validation datasets"],
    morphology: "data（数据）+ set（集合）合成词。",
    dailyEn: "We need to clean the dataset before feeding it into the regression model.",
    dailyCn: "在把数据集输入回归模型之前，我们需要先对其进行清洗。",
    ieltsEn: "Evaluating generalization requires testing the trained model on an out-of-distribution dataset.",
    ieltsCn: "评估泛化能力需要在分布外（OOD）数据集上对训练好的模型进行测试。"
  },
  {
    id: "w3-85",
    date: "2026-09-15",
    lemma: "internal",
    raw: "internal",
    pos: "adj.",
    phonetic: "/ɪnˈtɜːnl/",
    domain: "学术高频",
    freq: 1,
    cn: "内部的；体系内的；【实验设计】内部效度的（Internal Validity）",
    en: "Of or situated on the inside; existing or operating within a system, organization, or model architecture.",
    synonyms: ["inner", "interior", "intrinsic"],
    collocations: ["internal consistency", "internal representation", "internal validity"],
    morphology: "inter-（在内）+ -nal（形容词后缀）。原文中与下一行 consistency 紧邻构成高频搭配 internal consistency（内部一致性）。",
    dailyEn: "This document is for internal use only and shouldn't be shared with external clients.",
    dailyCn: "本文件仅供内部使用，不得与外部客户共享。",
    ieltsEn: "Probing classifiers are frequently employed to inspect the internal representations learned by deep neural networks.",
    ieltsCn: "探针分类器常被用来检查深度神经网络所学习到的内部表征。"
  },
  {
    id: "w3-86",
    date: "2026-09-15",
    lemma: "consistency",
    raw: "consistency",
    pos: "n.",
    phonetic: "/kənˈsɪstənsi/",
    domain: "CS & 系统",
    freq: 3,
    cn: "①【分布式/数据库】一致性（如强一致性、最终一致性）；② 前后连贯性 / 稳定性",
    en: "Conformity in the application of something; in distributed systems, the guarantee that all nodes see the same data at the same time.",
    synonyms: ["uniformity", "coherence", "stability"],
    collocations: ["internal consistency", "eventual consistency", "sequential consistency"],
    morphology: "con-（共同）+ sist（站立）+ -ency。本周在 9月15日 与 9月16日（2次）共高频出现 3 次！",
    dailyEn: "When learning to code, daily consistency matters much more than occasional all-nighters.",
    dailyCn: "学习编程时，每天持之以恒的连贯性远比偶尔通宵突击重要得多。",
    ieltsEn: "Strict serializability guarantees strong data consistency across replicated storage nodes at the expense of higher coordination overhead.",
    ieltsCn: "严格可串行化以更高的协调开销为代价，保证了跨副本存储节点的强数据一致性。"
  },
  {
    id: "w3-87",
    date: "2026-09-15",
    lemma: "flat structured executor",
    raw: "Flat Structured Executor",
    pos: "n. phr.",
    phonetic: "/flæt ˈstrʌktʃəd ɪɡˈzekjʊtə(r)/",
    domain: "CS & 系统",
    freq: 1,
    cn: "扁平化结构执行器（消除深层嵌套调用开销、采用扁平布局的执行引擎）",
    en: "An execution engine architecture that organizes operators or tasks in a non-hierarchical, flattened layout to reduce dispatch and indirection overhead.",
    synonyms: ["flattened execution engine", "non-nested runtime"],
    collocations: ["flat structured executor", "query executor", "vectorized executor"],
    morphology: "flat（扁平的，无深层嵌套的）+ structured（结构化的）+ executor（执行器）。",
    dailyEn: "Switching from a deeply nested tree interpreter to a flat structured executor simplified our debugging.",
    dailyCn: "从深度嵌套的树形解释器切换到扁平化结构执行器，简化了我们的调试工作。",
    ieltsEn: "By eliminating virtual function call indirection, the flat structured executor achieves superior instruction-cache locality.",
    ieltsCn: "通过消除虚函数调用的间接寻址，扁平化结构执行器实现了卓越的指令缓存局部性。"
  },
  {
    id: "w3-88",
    date: "2026-09-15",
    lemma: "dataframe",
    raw: "Dataframe",
    pos: "n.",
    phonetic: "/ˈdeɪtəfreɪm/",
    domain: "CS & 系统",
    freq: 1,
    cn: "【数据科学】数据框（如 Pandas / Polars / R 中按行列组织的二维表格数据结构）",
    en: "A two-dimensional, size-mutable, potentially heterogeneous tabular data structure with labeled axes (rows and columns).",
    synonyms: ["tabular data structure", "relational table"],
    collocations: ["in-memory dataframe", "columnar dataframe", "dataframe manipulation"],
    morphology: "data（数据）+ frame（框架/表框）。",
    dailyEn: "You can load the CSV file directly into a Pandas dataframe with a single line of Python.",
    dailyCn: "你只需一行 Python 代码就能把 CSV 文件直接加载到 Pandas 数据框中。",
    ieltsEn: "Columnar dataframe engines leverage SIMD instructions to accelerate analytical scans over hundreds of millions of rows.",
    ieltsCn: "列式数据框引擎利用 SIMD 指令来加速对数亿行数据的分析扫描。"
  },
  {
    id: "w3-89",
    date: "2026-09-15",
    lemma: "conservation",
    raw: "Conservation",
    pos: "n.",
    phonetic: "/ˌkɒnsəˈveɪʃn/",
    domain: "学术高频",
    freq: 1,
    cn: "①【物理/系统】守恒（如能量守恒、流量/工作量守恒定律）；② 自然资源保护 / 节约",
    en: "Preservation or restoration of the natural environment; in physics and queueing theory, the principle that a certain property remains constant.",
    synonyms: ["preservation", "invariance", "saving"],
    collocations: ["conservation law", "work conservation", "energy conservation"],
    morphology: "con-（共同/完全）+ serv（保持/守护）+ -ation。在排队论与系统调度中常指 Work Conservation（工作守恒：只要有任务就不让处理器空转）。",
    dailyEn: "Wildlife conservation projects help protect endangered species from habitat loss.",
    dailyCn: "野生动物保护项目有助于保护濒危物种免受栖息地丧失的威胁。",
    ieltsEn: "Strict adherence to flow conservation constraints ensures that no data packets are silently dropped across intermediate routing hops.",
    ieltsCn: "严格遵守流量守恒约束，可确保数据包在中间路由跳点传输时不会被静默丢弃。"
  },
  {
    id: "w3-90",
    date: "2026-09-15",
    lemma: "boundary",
    raw: "boundary",
    pos: "n.",
    phonetic: "/ˈbaʊndri/",
    domain: "CS & 系统",
    freq: 1,
    cn: "边界；分界线；【CS】决策边界 / 内存对齐边界 / 区间边界",
    en: "A line or threshold that marks the limits of an area, partition, memory page, or classification region.",
    synonyms: ["border", "limit", "frontier"],
    collocations: ["decision boundary", "partition boundary", "page boundary alignment"],
    morphology: "bound（界限）+ -ary（名词后缀）",
    dailyEn: "Setting clear boundary lines between work and rest is essential when working from home.",
    dailyCn: "居家办公时，在工作和休息之间划定清晰的界限至关重要。",
    ieltsEn: "Aligning data structures to 64-byte cache-line boundaries prevents false sharing across concurrent processor cores.",
    ieltsCn: "将数据结构对齐到 64 字节缓存行边界，可以防止并发处理器核心之间发生伪共享。"
  },
  {
    id: "w3-91",
    date: "2026-09-15",
    lemma: "lookup",
    raw: "lookup",
    pos: "n.",
    phonetic: "/ˈlʊkʌp/",
    domain: "CS & 系统",
    freq: 1,
    cn: "【CS】查找；检索查询操作（如哈希表查找、索引查找、查表法）",
    en: "The systematic process of searching for and retrieving a specific value from a table, index, cache, or dictionary.",
    synonyms: ["retrieval", "index search", "query"],
    collocations: ["lookup table (LUT)", "hash lookup", "constant-time lookup"],
    morphology: "由动词短语 look up 合成的计算机专有名词。",
    dailyEn: "Using a lookup table is much faster than recalculating trigonometric functions every frame.",
    dailyCn: "使用查找表（查表法）比每一帧重新计算三角函数要快得多。",
    ieltsEn: "Replacing binary tree traversal with a direct array lookup reduces memory indirection overhead.",
    ieltsCn: "用直接数组查找替代二叉树遍历，降低了内存间接寻址的开销。"
  },
  {
    id: "w3-92",
    date: "2026-09-15",
    lemma: "entry",
    raw: "entries",
    pos: "n.",
    phonetic: "/ˈentri/",
    domain: "CS & 系统",
    freq: 1,
    cn: "①【数据库/缓存】条目 / 记录项（复数 entries）；② 进入；参赛作品",
    en: "An item written or printed in a diary, list, database table, page table, or cache directory.",
    synonyms: ["record", "item", "row"],
    collocations: ["cache entries", "log entries", "duplicate entries"],
    morphology: "enter（进入/录入）+ -y（名词后缀），复数形式为 entries。",
    dailyEn: "There are over ten thousand dictionary entries in this terminology database.",
    dailyCn: "这个术语数据库里有一万多个词典词条。",
    ieltsEn: "Stale cache entries are periodically evicted to reclaim memory space for newly accessed hot keys.",
    ieltsCn: "过期的缓存条目会被定期驱逐淘汰，以便为新访问的热点键回收内存空间。"
  },
  {
    id: "w3-93",
    date: "2026-09-15",
    lemma: "regime",
    raw: "regime",
    pos: "n.",
    phonetic: "/reɪˈʒiːm/",
    domain: "学术高频",
    freq: 1,
    cn: "①【科研/物理/ML】运行区间 / 状态机制（如低延迟区间、过参数化机制）；② 政权；管理体制",
    en: "In science and engineering, a characteristic set of operating conditions, parameters, or dynamic behaviors; a system of governance.",
    synonyms: ["operating region", "mode", "paradigm"],
    collocations: ["high-concurrency regime", "low-latency regime", "training regime"],
    morphology: "源自法语 régime（管理方式/状态体系）。在 CS 与机器学习论文中极常用来指“某种特定负载或参数规模下的运行状态区间”。",
    dailyEn: "The athlete followed a strict daily training regime ahead of the marathon.",
    dailyCn: "这位运动员在马拉松赛前遵循着严格的日常训练计划。",
    ieltsEn: "While the baseline algorithm performs adequately on small inputs, its throughput collapses in the high-contention regime.",
    ieltsCn: "虽然基线算法在小规模输入下表现尚可，但在高竞争负载区间（high-contention regime）下其吞吐量会急剧崩溃。"
  },
  {
    id: "w3-94",
    date: "2026-09-15",
    lemma: "off-calendar",
    raw: "Off-calendar",
    pos: "adj.",
    phonetic: "/ˌɒf ˈkælɪndə(r)/",
    domain: "CS & 系统",
    freq: 1,
    cn: "非标准日历周期的；自然日历之外的（指按滑动天数/事件触发而非按固定自然月/周对齐的周期）",
    en: "Occurring outside standard calendar boundaries (such as arbitrary rolling intervals or non-standard fiscal/scheduling cycles).",
    synonyms: ["non-standard cycle", "rolling-interval", "asynchronous schedule"],
    collocations: ["off-calendar window", "off-calendar aggregation", "off-calendar release"],
    morphology: "off-（脱离/偏离）+ calendar（日历周期）。",
    dailyEn: "Several tech companies operate on an off-calendar fiscal year that ends in January.",
    dailyCn: "好几家科技公司采用非自然年对齐的财年制度，于每年一月份结束。",
    ieltsEn: "Supporting off-calendar sliding windows requires fine-grained timestamp indexing rather than coarse monthly pre-aggregations.",
    ieltsCn: "支持非标准日历对齐的滑动窗口需要细粒度的时间戳索引，而非粗粒度的按月预聚合。"
  },
  {
    id: "w3-95",
    date: "2026-09-15",
    lemma: "extension",
    raw: "Extension",
    pos: "n.",
    phonetic: "/ɪkˈstenʃn/",
    domain: "CS & 系统",
    freq: 1,
    cn: "①【CS】扩展插件 / 指令集扩展 / 文件扩展名；②（截止日期的）延期；延伸",
    en: "A part that is added to something to enlarge or prolong it; a software plugin, instruction set addition, or deadline postponement.",
    synonyms: ["add-on", "expansion", "prolongation"],
    collocations: ["file extension", "VS Code extension", "grant a deadline extension"],
    morphology: "ex-（向外）+ tens（伸展）+ -ion",
    dailyEn: "Installing the Live Server extension in VS Code makes previewing webpages effortless.",
    dailyCn: "在 VS Code 中安装 Live Server 扩展插件，让预览网页变得毫不费力。",
    ieltsEn: "Vector instruction set extensions enable modern CPUs to process multiple 64-bit integers simultaneously.",
    ieltsCn: "向量指令集扩展使现代 CPU 能够同时处理多个 64 位整数。"
  },
  {
    id: "w3-96",
    date: "2026-09-15",
    lemma: "substantially",
    raw: "Substantially",
    pos: "adv.",
    phonetic: "/səbˈstænʃəli/",
    domain: "学术高频",
    freq: 1,
    cn: "大幅度地；显著地；实质上地（雅思写作与学术论文替代 very much / a lot 的黄金副词）",
    en: "To a great or significant extent; in essence or substance.",
    synonyms: ["significantly", "considerably", "markedly"],
    collocations: ["improve substantially", "substantially reduce overhead", "substantially different"],
    morphology: "substance（实质/主体）+ -ial + -ly",
    dailyEn: "Living costs in central London are substantially higher than in smaller university towns.",
    dailyCn: "伦敦市中心的生活成本比小型大学城要高得多。",
    ieltsEn: "Pruning redundant execution paths substantially reduces tail latency without compromising classification accuracy.",
    ieltsCn: "剪枝冗余的执行路径在不牺牲分类准确率的前提下，大幅降低了尾延迟。"
  },
  {
    id: "w3-97",
    date: "2026-09-15",
    lemma: "decomposition",
    raw: "Decomposition / decomposition",
    pos: "n.",
    phonetic: "/ˌdiːkɒmpəˈzɪʃn/",
    domain: "CS & 系统",
    freq: 2,
    cn: "【数学/CS】分解；拆解（如矩阵分解、任务/算子拆解、时间序列分解）",
    en: "The process of breaking down a complex problem, matrix, or system into simpler, modular constituent parts.",
    synonyms: ["factorization", "breakdown", "partitioning"],
    collocations: ["matrix decomposition", "task decomposition", "functional decomposition"],
    morphology: "de-（解开/逆向）+ compose（组合）+ -ition。在 9月15日 当天词表中重复出现 2 次！",
    dailyEn: "Task decomposition helps teams turn a huge project into manageable daily tickets.",
    dailyCn: "任务拆解有助于团队把一个庞大的项目转化为易于管理的日常工单。",
    ieltsEn: "Singular value decomposition is widely applied to compress high-dimensional weight matrices in neural networks.",
    ieltsCn: "奇异值分解被广泛应用于压缩神经网络中的高维权重矩阵。"
  },
  {
    id: "w3-98",
    date: "2026-09-15",
    lemma: "preliminary",
    raw: "Preliminary",
    pos: "adj. / n.",
    phonetic: "/prɪˈlɪmɪnəri/",
    domain: "学术高频",
    freq: 1,
    cn: "初步的；预备性的；【论文章节】预备知识（Preliminaries）",
    en: "Denoting an action or event preceding or done in preparation for something fuller or more important.",
    synonyms: ["initial", "preparatory", "exploratory"],
    collocations: ["preliminary experiments", "preliminary results", "section 2: preliminaries"],
    morphology: "pre-（在……之前）+ limin（门槛/界限，源自拉丁语 limen）+ -ary → 正式迈入门槛前的预备阶段。",
    dailyEn: "After passing the preliminary phone screening, she was invited to the final on-site interview.",
    dailyCn: "通过初步电话筛选后，她受邀参加了最终的现场面试。",
    ieltsEn: "Preliminary profiling indicates that over 60% of execution time is spent on datetime conversion and string parsing.",
    ieltsCn: "初步性能分析表明，超过 60% 的执行时间耗费在日期时间转换和字符串解析上。"
  },
  {
    id: "w3-99",
    date: "2026-09-15",
    lemma: "compression",
    raw: "Compression / compression",
    pos: "n.",
    phonetic: "/kəmˈpreʃn/",
    domain: "CS & 系统",
    freq: 2,
    cn: "压缩（数据无损/有损压缩、模型压缩、列存编码压缩）",
    en: "The reduction in size of data in order to save storage space or transmission time.",
    synonyms: ["compaction", "encoding reduction", "shrinkage"],
    collocations: ["lossless compression", "dictionary compression", "compression ratio"],
    morphology: "com-（一起）+ press（挤压）+ -ion。在 9月15日 与 9月16日 均高频出现！",
    dailyEn: "Zip compression makes it much faster to email a large folder of documents.",
    dailyCn: "Zip 压缩让通过电子邮件发送大型文档文件夹变得快得多。",
    ieltsEn: "Lightweight integer compression schemes allow columnar databases to evaluate predicates directly on compressed data.",
    ieltsCn: "轻量级整数压缩方案允许列式数据库直接在压缩数据上计算谓词过滤条件。"
  },
  {
    id: "w3-100",
    date: "2026-09-15",
    lemma: "prevent",
    raw: "Prevent",
    pos: "v.",
    phonetic: "/prɪˈvent/",
    domain: "学术高频",
    freq: 1,
    cn: "防止；预防；阻止……发生",
    en: "To keep something from happening or arising; to make it impossible for someone to do something.",
    synonyms: ["avert", "preclude", "forestall"],
    collocations: ["prevent data corruption", "prevent A from doing B", "preventive measure"],
    morphology: "pre-（提前）+ vent（来）→ 提前到场堵住隐患。",
    dailyEn: "Regular backups prevent you from losing important work if your hard drive fails.",
    dailyCn: "定期备份能防止你在硬盘损坏时丢失重要工作成果。",
    ieltsEn: "Strict memory bounds checking is enforced at compile time to prevent buffer overflow vulnerabilities.",
    ieltsCn: "在编译期强制执行严格的内存边界检查，以防止缓冲区溢出漏洞。"
  },
  {
    id: "w3-101",
    date: "2026-09-15",
    lemma: "integer",
    raw: "Integer / integer",
    pos: "n.",
    phonetic: "/ˈɪntɪdʒə(r)/",
    domain: "CS & 系统",
    freq: 2,
    cn: "整数；整型数据类型（如 int32 / int64）",
    en: "A whole number that is not a fraction; a fundamental numeric data type in computer programming.",
    synonyms: ["whole number", "integral value"],
    collocations: ["64-bit integer", "integer overflow", "integer arithmetic"],
    morphology: "源自拉丁语 integer（完整的、未分割的，与 integrity 同源）。在 9月15日 当天重复出现 2 次。",
    dailyEn: "Array indices in programming languages must always be integers rather than floating-point numbers.",
    dailyCn: "编程语言中的数组下标必须始终是整数，而不能是浮点数。",
    ieltsEn: "Converting string timestamps into 64-bit integer epochs accelerates range comparisons by an order of magnitude.",
    ieltsCn: "将字符串时间戳转换为 64 位整数纪元时间，可将范围比较的速度提升一个数量级。"
  },
  {
    id: "w3-102",
    date: "2026-09-15",
    lemma: "nanosecond",
    raw: "Nanoseconds",
    pos: "n.",
    phonetic: "/ˈnænəʊsekənd/",
    domain: "CS & 系统",
    freq: 1,
    cn: "纳秒（十亿分之一秒，$10^{-9}$ 秒，CPU 指令与内存访问的核心时间量级）",
    en: "One billionth of a second ($10^{-9}$ s), commonly used to measure CPU cycle times and main memory latency.",
    synonyms: ["ns", "billionth of a second"],
    collocations: ["nanosecond resolution", "tens of nanoseconds", "elapsed nanoseconds"],
    morphology: "nano-（纳，十亿分之一）+ second（秒）。",
    dailyEn: "Light travels roughly 30 centimeters in a single nanosecond.",
    dailyCn: "光在短短一纳秒内大约传播 30 厘米。",
    ieltsEn: "Fetching data from main DRAM incurs a latency of roughly 80 nanoseconds, compared to just 1 nanosecond for L1 cache.",
    ieltsCn: "从主内存 DRAM 读取数据会产生约 80 纳秒的延迟，而一级缓存（L1 Cache）仅需 1 纳秒。"
  },
  {
    id: "w3-103",
    date: "2026-09-15",
    lemma: "kernel",
    raw: "Kernel",
    pos: "n.",
    phonetic: "/ˈkɜːnl/",
    domain: "CS & 系统",
    freq: 1,
    cn: "①【HPC/GPU/系统】计算内核算子（如 CUDA Kernel / 算子核函数）；② 操作系统内核；③ 核函数（SVM/数学）",
    en: "In GPU and high-performance computing, a compiled compute routine dispatched to accelerators; or the core of an operating system.",
    synonyms: ["compute routine", "core engine", "operator"],
    collocations: ["compute kernel", "kernel fusion", "operating system kernel"],
    morphology: "原义为“果仁/核心”，在高性能计算与系统论文中指最核心的底层计算函数或 OS 内核。",
    dailyEn: "Updating the Linux kernel improved battery life and hardware compatibility on my laptop.",
    dailyCn: "更新 Linux 内核改善了我笔记本电脑的电池续航和硬件兼容性。",
    ieltsEn: "Fusing consecutive element-wise operations into a single GPU kernel eliminates intermediate global memory traffic.",
    ieltsCn: "将连续的逐元素操作融合为单个 GPU 计算内核，消除了中间结果的全局显存读写流量。"
  },
  {
    id: "w3-104",
    date: "2026-09-15",
    lemma: "datetime conversion",
    raw: "datetime conversion",
    pos: "n. phr.",
    phonetic: "/ˈdeɪttaɪm kənˈvɜːʃn/",
    domain: "CS & 系统",
    freq: 1,
    cn: "日期时间转换（在字符串、时区、日历结构与整数时间戳之间进行的解析与转换）",
    en: "The computational process of parsing, formatting, or transforming date and time representations across different formats or time zones.",
    synonyms: ["timestamp parsing", "temporal type casting"],
    collocations: ["vectorized datetime conversion", "timezone conversion", "epoch conversion"],
    morphology: "date（日期）+ time（时间）+ conversion（转换）。",
    dailyEn: "Handling leap years and time zones makes datetime conversion surprisingly tricky.",
    dailyCn: "处理闰年和时区让日期时间转换变得出奇地棘手。",
    ieltsEn: "By replacing standard library calls with integer decomposition, our vectorized datetime conversion achieves a 4x speedup.",
    ieltsCn: "通过用整数分解替代标准库调用，我们的向量化日期时间转换实现了 4 倍的加速比。"
  },
  {
    id: "w3-105",
    date: "2026-09-15",
    lemma: "adaptive",
    raw: "Adaptive",
    pos: "adj.",
    phonetic: "/əˈdæptɪv/",
    domain: "CS & 系统",
    freq: 2,
    cn: "自适应的（能根据运行时负载或数据分布动态调整策略的）",
    en: "Characterized by the ability to dynamically adjust behavior, parameters, or routing decisions in response to changing conditions.",
    synonyms: ["dynamic", "self-adjusting", "flexible"],
    collocations: ["adaptive routing", "adaptive query execution", "adaptive threshold"],
    morphology: "adapt（适应/调整）+ -ive。本周在 9月15日（Adaptive）与 9月16日（Adaptive Routing）连续出现。",
    dailyEn: "Modern smartphones use adaptive brightness to match the lighting in your room.",
    dailyCn: "现代智能手机使用自适应亮度来匹配你房间里的光线环境。",
    ieltsEn: "Adaptive query execution dynamically switches join algorithms at runtime when cardinality estimates prove inaccurate.",
    ieltsCn: "当基数估计被证明不准确时，自适应查询执行会在运行时动态切换连接算法。"
  },
  {
    id: "w3-106",
    date: "2026-09-15",
    lemma: "reproducibility audit",
    raw: "reproducibility audit",
    pos: "n. phr.",
    phonetic: "/ˌriːprəˌdjuːsəˈbɪləti ˈɔːdɪt/",
    domain: "CS & 系统",
    freq: 1,
    cn: "可复现性审查 / 复现性审计（核验实验代码、数据与结果能否被独立一致复现的核查流程）",
    en: "A systematic verification process ensuring that published experimental results can be independently regenerated using the provided code and data.",
    synonyms: ["artifact evaluation", "replication check", "verification audit"],
    collocations: ["pass a reproducibility audit", "artifact reproducibility", "reproducibility checklist"],
    morphology: "reproduce（复现/再生产）+ -ibility + audit（审计/审查）。计算机顶会 Artifact Evaluation 核心概念。",
    dailyEn: "Before submitting the paper, we ran a full reproducibility audit on a clean server.",
    dailyCn: "在提交论文之前，我们在全新服务器上运行了一次完整的可复现性自查。",
    ieltsEn: "Fixing random seeds and recording exact hardware provenance are mandatory to pass a rigorous reproducibility audit.",
    ieltsCn: "固定随机种子并记录精确的硬件溯源信息，是通过严格可复现性审查的必要条件。"
  },
  {
    id: "w3-107",
    date: "2026-09-15",
    lemma: "exhibit",
    raw: "exhibits",
    pos: "v. / n.",
    phonetic: "/ɪɡˈzɪbɪt/",
    domain: "学术高频",
    freq: 1,
    cn: "表现出；展现出（某种特性、趋势或性能现象）；展览品",
    en: "To clearly manifest, display, or demonstrate a particular quality, behavior, or statistical pattern.",
    synonyms: ["demonstrate", "display", "manifest"],
    collocations: ["exhibit linear scalability", "exhibit high variance", "exhibit similar behavior"],
    morphology: "ex-（向外）+ hibit（拿/持，源自拉丁语 habere）→ 拿出来展示。论文描述实验图表曲线时的黄金动词！",
    dailyEn: "The new museum exhibit attracts thousands of visitors every weekend.",
    dailyCn: "博物馆的新展览每个周末都吸引成千上万的游客。",
    ieltsEn: "As illustrated in Figure 4, the proposed algorithm exhibits near-linear scalability up to 64 processor cores.",
    ieltsCn: "如图 4 所示，所提出的算法在扩展至 64 个处理器核心时表现出了近似线性的可扩展性。"
  },
  {
    id: "w3-108",
    date: "2026-09-15",
    lemma: "calibration",
    raw: "calibration",
    pos: "n.",
    phonetic: "/ˌkælɪˈbreɪʃn/",
    domain: "CS & 系统",
    freq: 1,
    cn: "校准；标定（对硬件参数、成本模型阈值或概率置信度进行精确调校）",
    en: "The action or process of aligning, tuning, or adjusting experimental parameters, thresholds, or model probabilities against a known standard.",
    synonyms: ["tuning", "adjustment", "standardization"],
    collocations: ["threshold calibration", "model calibration", "calibration phase"],
    morphology: "caliber（口径/刻度标准）+ -ation",
    dailyEn: "Professional photographers perform monitor color calibration every month.",
    dailyCn: "专业摄影师每个月都会进行显示器色彩校准。",
    ieltsEn: "An offline calibration phase profiles hardware bandwidth to determine the optimal crossover threshold automatically.",
    ieltsCn: "离线校准阶段通过对硬件带宽进行剖析，自动确定最优的性能交叉点阈值。"
  },
  {
    id: "w3-109",
    date: "2026-09-15",
    lemma: "threshold",
    raw: "threshold",
    pos: "n.",
    phonetic: "/ˈθreʃhəʊld/",
    domain: "CS & 系统",
    freq: 1,
    cn: "阈值；临界点；准入门槛",
    en: "A magnitude, value, or boundary that must be exceeded for a certain reaction, phenomenon, or policy switch to occur.",
    synonyms: ["cutoff", "critical point", "limit"],
    collocations: ["exceed the threshold", "crossover threshold", "latency threshold"],
    morphology: "源自古英语“门槛（thresh + hold）”，引申为触发状态切换的“临界阈值”。",
    dailyEn: "Everyone has a different threshold for spicy food.",
    dailyCn: "每个人对辛辣食物的承受阈值都不一样。",
    ieltsEn: "Whenever the queue length exceeds a predefined threshold, incoming requests are dynamically routed to backup instances.",
    ieltsCn: "每当队列长度超过预定义阈值时，新到达的请求就会被动态路由到备用实例。"
  },
  {
    id: "w3-110",
    date: "2026-09-15",
    lemma: "practical",
    raw: "practical",
    pos: "adj.",
    phonetic: "/ˈpræktɪkl/",
    domain: "学术高频",
    freq: 1,
    cn: "实际的；实用的；工程实践中可落地的（对比纯理论渐近性质）",
    en: "Of or concerned with the actual doing or use of something rather than with theory and idealized assumptions.",
    synonyms: ["pragmatic", "real-world", "applied"],
    collocations: ["practical crossover", "practical significance", "for all practical purposes"],
    morphology: "practic（实践）+ -al。原文中与下一行 crossover 构成搭配 practical crossover（实际工程中的性能交叉点）。",
    dailyEn: "Cycling is the most practical way to get around Cambridge.",
    dailyCn: "骑自行车是在剑桥出行的最实用方式。",
    ieltsEn: "Despite its superior asymptotic complexity, the algorithm has limited practical utility due to its massive constant overhead.",
    ieltsCn: "尽管该算法具有优越的渐近复杂度，但由于其庞大的常数开销，其实际工程效用十分有限。"
  },
  {
    id: "w3-111",
    date: "2026-09-15",
    lemma: "candidate probe",
    raw: "candidate probe",
    pos: "n. phr.",
    phonetic: "/ˈkændɪdət prəʊb/",
    domain: "CS & 系统",
    freq: 2,
    cn: "候选探测 / 候选探针（在自适应调度或哈希查找中对候选方案进行轻量级试探测试）",
    en: "A lightweight exploratory check or sample test performed on a candidate configuration or hash slot before committing to full execution.",
    synonyms: ["exploratory trial", "trial lookup", "sampling probe"],
    collocations: ["lightweight candidate probe", "probe overhead", "linear probing"],
    morphology: "candidate（候选者）+ probe（探针/探测，在 9月16日 亦单独出现）。",
    dailyEn: "The router sends a quick candidate probe to check which server responds fastest.",
    dailyCn: "路由器发送一个快速的候选探测包，以检查哪台服务器响应最快。",
    ieltsEn: "Executing a lightweight candidate probe over a 1% data sample accurately predicts the optimal execution policy.",
    ieltsCn: "在 1% 的数据样本上执行轻量级候选探测，即可准确预测最优的执行策略。"
  },
  {
    id: "w3-112",
    date: "2026-09-15",
    lemma: "workload",
    raw: "workload",
    pos: "n.",
    phonetic: "/ˈwɜːkləʊd/",
    domain: "CS & 系统",
    freq: 1,
    cn: "①【系统/数据库】工作负载（系统所承受的计算任务特征与压力集合）；② 工作量",
    en: "The amount and type of computational processing that a system is given to do at a particular time; or personal work burden.",
    synonyms: ["task load", "traffic profile", "burden"],
    collocations: ["read-heavy workload", "analytical workload", "skewed workload"],
    morphology: "work（工作）+ load（载荷/负载）",
    dailyEn: "Sharing the coding workload evenly helped our group finish the project ahead of time.",
    dailyCn: "平均分担编程工作量帮助我们小组提前完成了项目。",
    ieltsEn: "Real-world production workloads often exhibit severe temporal skew and bursty arrival patterns.",
    ieltsCn: "真实生产环境的工作负载通常表现出显著的时间偏斜和突发性到达模式。"
  },
  {
    id: "w3-113",
    date: "2026-09-15",
    lemma: "exclusive",
    raw: "exclusive / Exclusively",
    pos: "adj. / adv.",
    phonetic: "/ɪkˈskluːsɪv/",
    domain: "CS & 系统",
    freq: 2,
    cn: "①【CS】排他的 / 独占的（如独占锁 Exclusive Lock、左闭右开区间右端不包含）；② 仅限特定对象的（副词 exclusively：仅仅、专门地）",
    en: "Excluding or not admitting other things; restricted to the person, group, or thread concerned.",
    synonyms: ["sole", "dedicated", "mutually exclusive"],
    collocations: ["mutually exclusive", "exclusive lock", "rely exclusively on"],
    morphology: "ex-（出）+ clus（关闭）+ -ive。在 9月15日 当天同时收录了形容词 exclusive 与副词 Exclusively。",
    dailyEn: "This study room is for the exclusive use of postgraduate students.",
    dailyCn: "这间自习室供研究生专用。",
    ieltsEn: "Acquiring an exclusive write lock prevents concurrent threads from reading partially updated state.",
    ieltsCn: "获取排他写锁可防止并发线程读取到仅更新了一半的中间状态。"
  },
  {
    id: "w3-114",
    date: "2026-09-15",
    lemma: "sanity",
    raw: "sanity",
    pos: "n.",
    phonetic: "/ˈsænəti/",
    domain: "CS & 系统",
    freq: 1,
    cn: "①【CS/工程】合理性基本校验（Sanity Check：快速排查明显低级错误的健全性检查）；② 心智健全 / 理智",
    en: "In software engineering and research, a quick basic test ('sanity check') to verify that a calculation or system output is reasonable.",
    synonyms: ["soundness", "reasonableness", "rationality"],
    collocations: ["sanity check", "pass a sanity test", "keep one's sanity"],
    morphology: "源自拉丁语 sanitas（健康/健全）。工程与科研极高频搭配：Sanity Check（基本健全性检查）。",
    dailyEn: "Let's do a quick sanity check on the numbers before we send the slide deck to our supervisor.",
    dailyCn: "在把演示文稿发给导师之前，我们先对这些数字做个快速的合理性检查吧。",
    ieltsEn: "As an automated sanity check, the test harness verifies that row counts remain invariant before and after partitioning.",
    ieltsCn: "作为一项自动化健全性检查（sanity check），测试框架会核验分区前后的总行数是否保持不变。"
  },
  {
    id: "w3-115",
    date: "2026-09-15",
    lemma: "plenary",
    raw: "Plenary",
    pos: "adj. / n.",
    phonetic: "/ˈpliːnəri/",
    domain: "学术高频",
    freq: 1,
    cn: "【学术会议】全体大会的；全员出席的大会报告（Plenary Session / Keynote）",
    en: "To be attended by all participants at a conference or assembly, who otherwise meet in smaller parallel groups.",
    synonyms: ["general assembly", "full-attendance", "keynote"],
    collocations: ["plenary session", "plenary speaker", "plenary lecture"],
    morphology: "plen-（满/完全，同 plenty）+ -ary → 全体参会人员悉数到场的会议。",
    dailyEn: "All parallel workshops pause at 10 AM so everyone can attend the plenary talk in the main hall.",
    dailyCn: "所有并行分论坛在上午 10 点暂停，以便所有人都能去主会场听全体大会报告。",
    ieltsEn: "During the opening plenary session, the keynote speaker outlined the ethical challenges of autonomous decision systems.",
    ieltsCn: "在开幕全体大会上，主旨报告人概述了自主决策系统面临的伦理挑战。"
  },
  {
    id: "w3-116",
    date: "2026-09-15",
    lemma: "geomean",
    raw: "Geomean",
    pos: "n.",
    phonetic: "/ˈdʒiːəʊmiːn/",
    domain: "CS & 系统",
    freq: 1,
    cn: "【统计学/体系结构】几何平均数（Geometric Mean，汇总多个加速比与归一化性能指标的黄金标准）",
    en: "Short for geometric mean ($\sqrt[n]{x_1 x_2 \dots x_n}$), the standard statistical metric for averaging normalized speedup ratios across benchmarks.",
    synonyms: ["geometric mean", "multiplicative average"],
    collocations: ["geomean speedup", "report the geomean across benchmarks"],
    morphology: "geo(metric)（几何的）+ mean（平均数）缩略词。体系结构与系统论文汇报总体加速比时必用 Geomean 而非算术平均！",
    dailyEn: "When averaging speedup ratios, always use the geomean so a single outlier doesn't skew the result.",
    dailyCn: "在计算加速比的平均值时，务必要使用几何平均数（geomean），以免单个极端异常值扭曲整体结果。",
    ieltsEn: "Across all twenty benchmark workloads, our compiler optimization achieves a geomean speedup of 1.42x.",
    ieltsCn: "在全部二十个基准工作负载上，我们的编译器优化实现了 1.42 倍的几何平均加速比。"
  },
  {
    id: "w3-117",
    date: "2026-09-15",
    lemma: "occasional",
    raw: "Occasional",
    pos: "adj.",
    phonetic: "/əˈkeɪʒənl/",
    domain: "英式日常",
    freq: 1,
    cn: "偶尔的；偶发的；非经常性的",
    en: "Occurring, appearing, or done infrequently and irregularly.",
    synonyms: ["sporadic", "infrequent", "intermittent"],
    collocations: ["occasional jitter", "occasional spike", "on an occasional basis"],
    morphology: "occasion（场合/时机）+ -al",
    dailyEn: "Apart from an occasional rainy afternoon, the weather during our trip was lovely.",
    dailyCn: "除了偶尔有一两个下雨的下午，我们旅行期间的天气非常好。",
    ieltsEn: "While steady-state latency remains low, background compaction triggers occasional latency spikes.",
    ieltsCn: "虽然稳态延迟保持在较低水平，但后台数据压缩会触发偶发的延迟尖峰。"
  },
  {
    id: "w3-118",
    date: "2026-09-15",
    lemma: "bare",
    raw: "Bare",
    pos: "adj.",
    phonetic: "/beə(r)/",
    domain: "CS & 系统",
    freq: 1,
    cn: "①【CS】裸机的 / 无额外封装开销的（如 Bare-metal 裸金属服务器、裸指针）；② 仅够基本的；赤裸的",
    en: "Without addition, wrapper, or abstraction layer (e.g., bare-metal hardware); basic and simple.",
    synonyms: ["unwrapped", "raw", "minimal"],
    collocations: ["bare-metal server", "bare minimum", "bare execution loop"],
    morphology: "古英语 bær（无遮蔽的）。在系统性能分析中常指“去掉一切框架封装开销的裸算子/裸机（bare）基线”。",
    dailyEn: "We packed only the bare essentials for our weekend hiking trip.",
    dailyCn: "我们周末徒步旅行只带了最基本的必需品。",
    ieltsEn: "Deploying containers directly on bare-metal servers eliminates hypervisor virtualization overhead.",
    ieltsCn: "将容器直接部署在裸金属服务器上，消除了虚拟机监控程序的虚拟化开销。"
  },
  {
    id: "w3-119",
    date: "2026-09-15",
    lemma: "transition",
    raw: "Transition",
    pos: "n. / v.",
    phonetic: "/trænˈzɪʃn/",
    domain: "学术高频",
    freq: 1,
    cn: "过渡；状态转换（State Transition）；转变阶段",
    en: "The process or a period of changing from one state, regime, or condition to another.",
    synonyms: ["shift", "switchover", "handover"],
    collocations: ["state transition", "phase transition", "smooth transition"],
    morphology: "trans-（跨越/转变）+ it（走）+ -ion",
    dailyEn: "The university offers orientation workshops to help freshmen make a smooth transition to college life.",
    dailyCn: "大学提供迎新工作坊，帮助大一新生顺利过渡到大学生活。",
    ieltsEn: "Hysteresis margins are incorporated into the controller to prevent rapid oscillation during regime transitions.",
    ieltsCn: "控制器中引入了迟滞裕度，以防止在运行区间转换（regime transitions）期间发生高频振荡。"
  },
  {
    id: "w3-120",
    date: "2026-09-15",
    lemma: "aggregate",
    raw: "Aggregate",
    pos: "v. / adj. / n.",
    phonetic: "/ˈæɡrɪɡeɪt/",
    domain: "CS & 系统",
    freq: 1,
    cn: "① v. 聚合 / 汇总（读 /ˈæɡrɪɡeɪt/）；② adj./n. 总计的 / 聚合总体（读 /ˈæɡrɪɡət/）",
    en: "To combine or group multiple individual elements or metrics into a single consolidated whole.",
    synonyms: ["consolidate", "combine", "amass"],
    collocations: ["in the aggregate", "aggregate throughput", "aggregate daily metrics"],
    morphology: "ag- + greg（群）+ -ate。9月13日 已收录其名词形式 Aggregation。",
    dailyEn: "The app aggregates flight prices from ratusan airlines in seconds.",
    dailyCn: "这款应用能在几秒钟内汇总数百家航空公司的机票价格。",
    ieltsEn: "When local statistics are aggregated across distributed worker nodes, communication bandwidth becomes the primary bottleneck.",
    ieltsCn: "当跨分布式工作节点汇总局部统计信息时，通信带宽成为了主要瓶颈。"
  },
  {
    id: "w3-121",
    date: "2026-09-15",
    lemma: "supplementary",
    raw: "supplementary",
    pos: "adj.",
    phonetic: "/ˌsʌplɪˈmentri/",
    domain: "学术高频",
    freq: 1,
    cn: "补充的；附带的；【学术论文】补充材料/附录（Supplementary Material）",
    en: "Provided in addition to what is already present or available to complete or enhance it.",
    synonyms: ["additional", "ancillary", "complementary"],
    collocations: ["supplementary material", "supplementary appendix", "supplementary experiments"],
    morphology: "supplement（增补物）+ -ary",
    dailyEn: "Full mathematical proofs and hyperparameter tables are included in the supplementary material.",
    dailyCn: "完整的数学证明和超参数表格均包含在论文补充材料中。",
    ieltsEn: "Due to page constraints, detailed per-query latency breakdowns are deferred to the supplementary appendix.",
    ieltsCn: "受篇幅限制，详细的逐查询延迟拆解分析被移至补充附录中。"
  },
  {
    id: "w3-122",
    date: "2026-09-15",
    lemma: "training optimal interval",
    raw: "Training optimal interval",
    pos: "n. phr.",
    phonetic: "/ˈtreɪnɪŋ ˈɒptɪməl ˈɪntəvl/",
    domain: "CS & 系统",
    freq: 1,
    cn: "训练最优区间（离线训练或校准阶段所确定的最佳超参数/切分区间）",
    en: "The value range or time window determined during the training or calibration phase that yields the best objective performance.",
    synonyms: ["calibrated optimal range", "learned interval"],
    collocations: ["determine the optimal interval", "confidence interval", "re-training interval"],
    morphology: "training（训练期）+ optimal（最优的）+ interval（区间/时间间隔）。",
    dailyEn: "Once we find the training optimal interval on the validation set, we lock those thresholds for deployment.",
    dailyCn: "一旦我们在验证集上找到训练最优区间，就会锁定这些阈值用于上线部署。",
    ieltsEn: "Empirical results confirm that thresholds selected within the training optimal interval generalize robustly to unseen test workloads.",
    ieltsCn: "实证结果证实，在训练最优区间内选取的阈值能够稳健地泛化到未见过的测试工作负载中。"
  },
  {
    id: "w3-123",
    date: "2026-09-15",
    lemma: "anniversary & commemorative",
    raw: "Anniversary / Commemorative",
    pos: "n. / adj.",
    phonetic: "/ˌænɪˈvɜːsəri/ · /kəˈmemərətɪv/",
    domain: "英式日常",
    freq: 1,
    cn: "周年纪念日（Anniversary） & 纪念性的（Commemorative）",
    en: "The date on which an event took place in a previous year; and acting as a memorial or mark of celebration for an event.",
    synonyms: ["jubilee", "memorial", "celebratory"],
    collocations: ["centenary anniversary", "commemorative coin/stamp", "commemorative lecture"],
    morphology: "ann-（年）+ vers（转）→ 每年转回来的日子；com-（共同）+ memor（记忆）+ -ative → 共同铭记的。",
    dailyEn: "The Royal Mint released a special commemorative 50p coin for the university's 100th anniversary.",
    dailyCn: "英国皇家造币厂为该大学建校一百周年发行了一枚特别纪念版 50 便士硬币。",
    ieltsEn: "To mark its fiftieth anniversary, the scientific society published a commemorative volume reviewing landmark discoveries.",
    ieltsCn: "为庆祝成立五十周年，该科学学会出版了一部回顾里程碑式发现的纪念文集。"
  },
  {
    id: "w3-124",
    date: "2026-09-15",
    lemma: "proofread",
    raw: "Proofread / Registration / Upon / Society",
    pos: "v.",
    phonetic: "/ˈpruːfriːd/",
    domain: "学术高频",
    freq: 1,
    cn: "校对；审阅订正（文稿中的拼写、语法与排版错误）",
    en: "To read written or printed material and mark any errors in spelling, grammar, or formatting for correction.",
    synonyms: ["copy-edit", "vet", "review"],
    collocations: ["proofread a manuscript", "carefully proofread upon completion", "society registration"],
    morphology: "proof（校样）+ read（阅读）。（注：已同步覆盖 9月15日 末尾的常用基础词 Registration 注册、Upon 一……就、Society 学会/社团）。",
    dailyEn: "Upon completing your society registration form, please proofread your email address carefully.",
    dailyCn: "填写完社团注册表后，请仔细校对你的电子邮箱地址。",
    ieltsEn: "Authors are strongly advised to proofread the final manuscript thoroughly prior to submission to the academic society.",
    ieltsCn: "强烈建议作者在向学术学会提交论文之前，对最终手稿进行彻底的校对。"
  },
  // ==================== 2026年9月16日（剩余全部补齐，整周100%收官） ====================
  {
    id: "w3-125",
    date: "2026-09-16",
    lemma: "initiative",
    raw: "Initiatives",
    pos: "n.",
    phonetic: "/ɪˈnɪʃətɪv/",
    domain: "学术高频",
    freq: 1,
    cn: "① 倡议；新举措 / 专项计划（常作复数 Initiatives）；② 主动性",
    en: "An act or strategy intended to resolve a difficulty or improve a situation; the ability to assess and initiate things independently.",
    synonyms: ["programme", "enterprise", "undertaking"],
    collocations: ["launch an initiative", "campus mental health initiatives", "take the initiative"],
    morphology: "init-（开始，同 initial）+ -iative → 率先发起的行动或倡议。",
    dailyEn: "The university launched several green initiatives to reduce plastic waste on campus.",
    dailyCn: "大学推出了好几项绿色环保举措，以减少校园内的塑料垃圾。",
    ieltsEn: "Government-backed research initiatives play a pivotal role in accelerating the commercialization of clean energy technologies.",
    ieltsCn: "政府支持的科研专项计划在加速清洁能源技术的商业化方面发挥着关键作用。"
  },
  {
    id: "w3-126",
    date: "2026-09-16",
    lemma: "enhance",
    raw: "Enhance",
    pos: "v.",
    phonetic: "/ɪnˈhɑːns/",
    domain: "学术高频",
    freq: 1,
    cn: "增强；提升；改善（性能、质量或表现，雅思写作替代 improve 的高频词）",
    en: "To intensify, increase, or further improve the quality, value, or extent of something.",
    synonyms: ["augment", "boost", "elevate"],
    collocations: ["enhance performance", "substantially enhance", "enhance readability"],
    morphology: "en-（使……）+ hance（高，源自拉丁语 altus）→ 使水平拔高。",
    dailyEn: "Adding a bit of lemon juice will really enhance the flavour of the fish.",
    dailyCn: "加一点柠檬汁真的会大大提升这道鱼的风味。",
    ieltsEn: "Incorporating hardware prefetching instructions can significantly enhance memory throughput for sequential scans.",
    ieltsCn: "引入硬件预取指令可以显著提升顺序扫描时的内存吞吐量。"
  },
  {
    id: "w3-127",
    date: "2026-09-16",
    lemma: "circumstance",
    raw: "Circumstances",
    pos: "n.",
    phonetic: "/ˈsɜːkəmstəns/",
    domain: "学术高频",
    freq: 1,
    cn: "环境；客观情况；境况（常作复数 Circumstances）",
    en: "A fact or condition connected with or relevant to an event or action.",
    synonyms: ["conditions", "context", "situation"],
    collocations: ["under no circumstances", "mitigating circumstances", "depending on the circumstances"],
    morphology: "circum-（周围/环绕）+ stance（站立）→ 环绕在周围的客观态势。",
    dailyEn: "If you miss an exam due to illness, you can submit a mitigating circumstances form.",
    dailyCn: "如果你因病缺考，可以提交一份特殊情况说明表（英国高校常见申请流程）。",
    ieltsEn: "Under no circumstances should unvalidated user input be concatenated directly into executable database queries.",
    ieltsCn: "在任何情况下，都不应将未经校验的用户输入直接拼接到可执行的数据库查询中。"
  },
  {
    id: "w3-128",
    date: "2026-09-16",
    lemma: "decision",
    raw: "Decision",
    pos: "n.",
    phonetic: "/dɪˈsɪʒn/",
    domain: "CS & 系统",
    freq: 1,
    cn: "决策；决定；【CS/ML】判定（如决策树 Decision Tree、路由判定）",
    en: "A conclusion or resolution reached after consideration; an algorithmic choice made by a scheduler or classifier.",
    synonyms: ["determination", "choice", "resolution"],
    collocations: ["routing decision", "decision boundary", "make an informed decision"],
    morphology: "de-（切开/彻底）+ cis（剪断，源自拉丁语 caedere）+ -ion → 一刀斩断犹豫、做出决断。",
    dailyEn: "Moving to a new city for postgraduate study was a big decision.",
    dailyCn: "为了读研搬去一个新城市是一个重大的决定。",
    ieltsEn: "Explainable AI frameworks aim to make algorithmic decision processes transparent to domain experts.",
    ieltsCn: "可解释人工智能框架旨在使算法决策过程对领域专家透明化。"
  },
  {
    id: "w3-129",
    date: "2026-09-16",
    lemma: "probe",
    raw: "Probe",
    pos: "n. / v.",
    phonetic: "/prəʊb/",
    domain: "CS & 系统",
    freq: 2,
    cn: "①【系统/数据库】探针；哈希探测（Hash Join / Hash Table 中的探测阶段）；② 深入探究",
    en: "In computing, an exploratory lookup in a hash table or an instrumentation hook; to physically or analytically explore.",
    synonyms: ["investigate", "test hook", "lookup trial"],
    collocations: ["build and probe phases", "linear probing", "diagnostic probe"],
    morphology: "源自拉丁语 probare（测试/检验，与 prove 同源）。在 9月15日（candidate probe）与 9月16日 均出现。",
    dailyEn: "The space probe sent back high-resolution images of Jupiter's moons.",
    dailyCn: "太空探测器传回了木星卫星的高分辨率图像。",
    ieltsEn: "In a hash join operator, the smaller relation is used to build the hash table, while the larger relation is scanned during the probe phase.",
    ieltsCn: "在哈希连接算子中，较小的关系表用于构建哈希表，而较大的关系表则在探测阶段（probe phase）被扫描比对。"
  },
  {
    id: "w3-130",
    date: "2026-09-16",
    lemma: "bias",
    raw: "Bias",
    pos: "n. / v.",
    phonetic: "/ˈbaɪəs/",
    domain: "CS & 系统",
    freq: 1,
    cn: "①【统计/ML】偏差 / 偏置项（Bias Term）；② 偏见；系统性倾向",
    en: "A systematic distortion of a statistical result; a learnable offset parameter in neural networks; or unfair prejudice.",
    synonyms: ["skew", "systematic error", "prejudice"],
    collocations: ["inductive bias", "selection bias", "bias-variance tradeoff"],
    morphology: "原指斜纹织物或草地滚球的“偏心重心”，后成为统计学与机器学习的核心术语。",
    dailyEn: "Reading news from only one source can reinforce confirmation bias.",
    dailyCn: "只从单一来源阅读新闻会强化确认偏见。",
    ieltsEn: "Unrepresentative training corpora inevitably introduce demographic bias into downstream classification models.",
    ieltsCn: "不具代表性的训练语料库不可避免地会将人口统计学偏差引入下游分类模型。"
  },
  {
    id: "w3-131",
    date: "2026-09-16",
    lemma: "counterbalancing",
    raw: "Counterbalancing",
    pos: "n. / adj.",
    phonetic: "/ˌkaʊntəˈbælənsɪŋ/",
    domain: "学术高频",
    freq: 1,
    cn: "【实验设计/系统】平衡抵消法（通过交叉轮换实验顺序来抵消顺序效应）；相互制衡的",
    en: "In experimental design, systematically varying the order of conditions to neutralize order or carryover effects; acting as an offsetting weight.",
    synonyms: ["offsetting", "neutralizing", "compensating"],
    collocations: ["Latin square counterbalancing", "counterbalancing effect", "counterbalance order bias"],
    morphology: "counter-（相反/对抗）+ balance（平衡）+ -ing",
    dailyEn: "Good posture relies on counterbalancing the weight of your head over your spine.",
    dailyCn: "良好的体态依赖于将头部的重量平衡分布在脊柱上方。",
    ieltsEn: "To eliminate順序 bias in user evaluations, task presentation order was randomized with full counterbalancing across participants.",
    ieltsCn: "为了消除用户评估中的顺序偏差，任务呈现顺序在受试者之间采用了完全平衡抵消（counterbalancing）的随机化设计。"
  },
  {
    id: "w3-132",
    date: "2026-09-16",
    lemma: "adaptive routing",
    raw: "Adaptive Routing",
    pos: "n. phr.",
    phonetic: "/əˈdæptɪv ˈruːtɪŋ/",
    domain: "CS & 系统",
    freq: 1,
    cn: "自适应路由（根据实时网络拥塞、算子开销或输入特征动态选择执行路径的机制）",
    en: "A routing mechanism that dynamically selects paths or execution backends based on real-time system state, workload characteristics, or congestion.",
    synonyms: ["dynamic path selection", "state-aware dispatch"],
    collocations: ["adaptive routing policy", "congestion-aware adaptive routing", "dynamic routing"],
    morphology: "adaptive（自适应的，9月15日已收录）+ routing（路由分发，英音常读 /ˈruːtɪŋ/，美音常读 /ˈraʊtɪŋ/）。",
    dailyEn: "GPS navigation uses adaptive routing to steer you around sudden traffic jams.",
    dailyCn: "GPS 导航使用自适应路由引导你绕开突发的交通拥堵。",
    ieltsEn: "Our adaptive routing layer dynamically dispatches lightweight queries to CPU cores while offloading dense matrix workloads to GPUs.",
    ieltsCn: "我们的自适应路由层将轻量级查询动态分派给 CPU 核心，同时将稠密矩阵工作负载卸载到 GPU 上执行。"
  },
  {
    id: "w3-133",
    date: "2026-09-16",
    lemma: "unified",
    raw: "Unified",
    pos: "adj.",
    phonetic: "/ˈjuːnɪfaɪd/",
    domain: "CS & 系统",
    freq: 1,
    cn: "统一的；一体化的（如统一内存架构 Unified Memory、统一接口框架）",
    en: "Made or joined into a single uniform entity, architecture, or representation.",
    synonyms: ["integrated", "consolidated", "uniform"],
    collocations: ["unified memory architecture", "unified framework", "unified API"],
    morphology: "uni-（单一/统一）+ fy（使……化）+ -ed",
    dailyEn: "Apple's M-series chips use a unified memory architecture shared by the CPU and GPU.",
    dailyCn: "苹果的 M 系列芯片采用了由 CPU 和 GPU 共享的统一内存架构。",
    ieltsEn: "We propose a unified execution abstraction that seamlessly integrates batch analytics and real-time stream processing.",
    ieltsCn: "我们提出了一种统一的执行抽象层，将批处理分析与实时流处理无缝集成在一起。"
  },
  {
    id: "w3-134",
    date: "2026-09-16",
    lemma: "rotated",
    raw: "Rotated",
    pos: "adj. / v.",
    phonetic: "/rəʊˈteɪtɪd/",
    domain: "CS & 系统",
    freq: 1,
    cn: "旋转的；轮换的（如矩阵旋转、平衡抵消实验中的分组轮换、日志轮转）",
    en: "Turned around an axis or center point; or cycled regularly through different positions or experimental conditions.",
    synonyms: ["cycled", "pivoted", "revolved"],
    collocations: ["rotated bounding box", "log rotation", "rotated across groups"],
    morphology: "rot-（轮子，源自拉丁语 rota）+ -ate + -ed",
    dailyEn: "Security keys are automatically rotated every thirty days.",
    dailyCn: "安全密钥每三十天自动轮换更新一次。",
    ieltsEn: "Prompt templates are systematically rotated across evaluation runs to ensure that model rankings are invariant to prompt phrasing.",
    ieltsCn: "提示词模板在各轮评估运行中进行系统性轮换，以确保模型排名不受提示词措辞变化的影响。"
  },
  {
    id: "w3-135",
    date: "2026-09-16",
    lemma: "compilation",
    raw: "compilation",
    pos: "n.",
    phonetic: "/ˌkɒmpɪˈleɪʃn/",
    domain: "CS & 系统",
    freq: 1,
    cn: "①【CS】代码编译（将高级语言或查询计划转化为底层机器码的过程）；② 汇编集 / 合辑",
    en: "The translation of source code or query plans into executable machine code by a compiler; or a collection of items gathered together.",
    synonyms: ["code generation", "transpilation", "anthology"],
    collocations: ["just-in-time (JIT) compilation", "ahead-of-time compilation", "compilation overhead"],
    morphology: "compile（编译/汇编）+ -ation",
    dailyEn: "Enabling incremental compilation cut our C++ build times in half.",
    dailyCn: "启用增量编译将我们的 C++ 项目构建时间缩短了一半。",
    ieltsEn: "Just-in-time query compilation eliminates interpretation overhead by generating specialized machine code for each SQL query.",
    ieltsCn: "即时查询编译（JIT）通过为每条 SQL 查询生成专用的机器码，消除了逐行解释执行的开销。"
  },
  {
    id: "w3-136",
    date: "2026-09-16",
    lemma: "publication",
    raw: "publication",
    pos: "n.",
    phonetic: "/ˌpʌblɪˈkeɪʃn/",
    domain: "学术高频",
    freq: 1,
    cn: "发表；出版；学术发表物（论文/期刊）",
    en: "The preparation and issuing of a book, journal, or academic paper for public readership; a published work.",
    synonyms: ["issuance", "published paper", "release"],
    collocations: ["accepted for publication", "peer-reviewed publication", "publication record"],
    morphology: "public（公众的）+ -ation",
    dailyEn: "Congratulations on having your manuscript accepted for publication!",
    dailyCn: "祝贺你的论文手稿被接收发表！",
    ieltsEn: "Open-access publication models democratize scientific knowledge by removing subscription paywalls for global readers.",
    ieltsCn: "开放获取（Open-Access）出版模式通过为全球读者消除订阅付费墙，推动了科学知识的普及。"
  },
  {
    id: "w3-137",
    date: "2026-09-16",
    lemma: "synthesis",
    raw: "synthesis",
    pos: "n.",
    phonetic: "/ˈsɪnθəsɪs/",
    domain: "CS & 系统",
    freq: 1,
    cn: "① 综合；文献综述提炼；②【CS】程序合成 / 语音与图像合成（Program / Speech Synthesis）",
    en: "The combination of components or elements to form a connected whole; in CS, the automated generation of programs or signals from specifications.",
    synonyms: ["integration", "amalgamation", "automated generation"],
    collocations: ["program synthesis", "literature synthesis", "speech synthesis"],
    morphology: "syn-（共同/一起）+ thesis（放置/论点）→ 放在一起融会贯通。复数形式为 syntheses /ˈsɪnθəsiːz/。",
    dailyEn: "A good literature review is a critical synthesis of existing studies, not just a list of summaries.",
    dailyCn: "一篇好的文献综述是对现有研究的批判性综合提炼，而不仅仅是摘要的罗列。",
    ieltsEn: "Syntax-guided program synthesis automatically constructs provably correct bit-manipulation kernels from high-level specifications.",
    ieltsCn: "语法制导的程序合成技术能够根据高层规约，自动构造出可证明正确的位操作计算内核。"
  },
  {
    id: "w3-138",
    date: "2026-09-16",
    lemma: "classification accuracy",
    raw: "classification accuracy",
    pos: "n. phr.",
    phonetic: "/ˌklæsɪfɪˈkeɪʃn ˈækjərəsi/",
    domain: "CS & 系统",
    freq: 1,
    cn: "分类准确率（分类模型预测正确的样本数占总样本数的比例）",
    en: "The evaluation metric measuring the proportion of total predictions that a classification model identifies correctly.",
    synonyms: ["predictive accuracy", "hit rate"],
    collocations: ["top-1 classification accuracy", "achieve high classification accuracy", "accuracy degradation"],
    morphology: "classification（分类）+ accuracy（准确度）。",
    dailyEn: "When a dataset is heavily imbalanced, raw classification accuracy can be misleading.",
    dailyCn: "当数据集严重不平衡时，单纯看原始分类准确率可能会产生误导。",
    ieltsEn: "Quantizing weights from 16-bit floats to 8-bit integers halves memory bandwidth requirements with negligible loss in classification accuracy.",
    ieltsCn: "将权重从 16 位浮点数敏化为 8 位整数，可在分类准确率损失微乎其微的情况下将内存带宽需求减半。"
  },
  {
    id: "w3-139",
    date: "2026-09-16",
    lemma: "relevance",
    raw: "relevance",
    pos: "n.",
    phonetic: "/ˈreləvəns/",
    domain: "学术高频",
    freq: 1,
    cn: "相关性；切题度；现实参考价值（同行评审与信息检索核心指标）",
    en: "The quality or state of being closely connected, appropriate, or pertinent to the matter at hand.",
    synonyms: ["pertinence", "applicability", "bearing"],
    collocations: ["practical relevance", "relevance score", "of direct relevance to"],
    morphology: "relevant（相关的）去 t 加 -ce",
    dailyEn: "Search engines rank web pages based on their relevance to your query.",
    dailyCn: "搜索引擎根据网页与你查询词的相关性来对网页进行排序。",
    ieltsEn: "Reviewers evaluate submitted manuscripts based on their technical soundness, empirical rigor, and relevance to the conference scope.",
    ieltsCn: "审稿人根据技术可靠性、实证严谨性以及与会议主题的相关性来评估提交的论文手稿。"
  },
  {
    id: "w3-140",
    date: "2026-09-16",
    lemma: "novelty",
    raw: "novelty",
    pos: "n.",
    phonetic: "/ˈnɒvlti/",
    domain: "学术高频",
    freq: 2,
    cn: "创新性；新颖度（科研论文审稿的核心维度：Technical Novelty）；新鲜事物",
    en: "The quality of being new, original, and previously unexplored in scientific research or design.",
    synonyms: ["originality", "innovation", "freshness"],
    collocations: ["technical novelty", "novelty detection", "lack sufficient novelty"],
    morphology: "novel（新奇的/新颖的）+ -ty。在 9月16日 当天词表中连续重复出现 2 次！",
    dailyEn: "Once the initial novelty of the new gadget wore off, he rarely used it.",
    dailyCn: "一旦对这个新电子产品最初的新鲜感过去，他就很少再用它了。",
    ieltsEn: "To highlight the architectural novelty of our approach, we contrast our unified executor against conventional two-stage pipelines.",
    ieltsCn: "为了突显我们方法在架构上的创新性，我们将统一执行器与传统的两阶段流水线进行了对比。"
  },
  {
    id: "w3-141",
    date: "2026-09-16",
    lemma: "ethics",
    raw: "ethics",
    pos: "n.",
    phonetic: "/ˈeθɪks/",
    domain: "学术高频",
    freq: 1,
    cn: "伦理规范；道德准则；【科研】伦理审查与声明（Ethics Statement / IRB Approval）",
    en: "Moral principles that govern a person's or group's behavior, especially in scientific research involving human subjects or AI deployment.",
    synonyms: ["moral principles", "ethical guidelines", "deontology"],
    collocations: ["research ethics approval", "AI ethics", "ethics statement"],
    morphology: "源自希腊语 ēthos（品格/习俗）。现代计算机与社科论文必含章节：Ethics Statement。",
    dailyEn: "Any study involving student questionnaires must first get approval from the university ethics committee.",
    dailyCn: "任何涉及学生问卷调查的研究都必须先获得大学伦理委员会的批准。",
    ieltsEn: "Adhering to rigorous research ethics requires anonymizing all personally identifiable information prior to dataset release.",
    ieltsCn: "遵守严格的科研伦理规范，要求在公开数据集之前对所有个人身份识别信息进行匿名化处理。"
  },
  {
    id: "w3-142",
    date: "2026-09-16",
    lemma: "manuscript",
    raw: "manuscript",
    pos: "n.",
    phonetic: "/ˈmænjuskrɪpt/",
    domain: "学术高频",
    freq: 1,
    cn: "（待发表或审稿中的）论文手稿 / 书稿；古籍手抄本",
    en: "An author's text or academic paper submitted for publication prior to final printing; a handwritten document.",
    synonyms: ["draft paper", "submission", "preprint"],
    collocations: ["submit a manuscript", "revise the manuscript", "unpublished manuscript"],
    morphology: "manu-（手，同 manual）+ script（写）→ 手稿/论文原稿。",
    dailyEn: "We spent the whole weekend polishing the manuscript before the submission deadline.",
    dailyCn: "在投稿截止日期前，我们花了整个周末来打磨润色这篇论文手稿。",
    ieltsEn: "Following constructive feedback from anonymous referees, the authors substantially revised the manuscript to include additional ablation studies.",
    ieltsCn: "在收到匿名审稿人建设性的反馈意见后，作者对论文手稿进行了大幅修改，补充了额外的消融实验。"
  },
  {
    id: "w3-143",
    date: "2026-09-16",
    lemma: "polish",
    raw: "polish",
    pos: "v. / n.",
    phonetic: "/ˈpɒlɪʃ/",
    domain: "学术高频",
    freq: 1,
    cn: "润色；打磨（文章、代码或演讲表达）；使臻于完美",
    en: "To improve, refine, or add the finishing touches to a piece of writing, presentation, or software interface.",
    synonyms: ["refine", "perfect", "burnish"],
    collocations: ["polish a manuscript", "polish up one's English", "visual polish"],
    morphology: "源自拉丁语 polire（使光滑发亮）。注意小写 polish（润色 /ˈpɒlɪʃ/）与大写 Polish（波兰的 /ˈpəʊlɪʃ/）发音不同！",
    dailyEn: "Could you help me polish my cover letter before I send it out?",
    dailyCn: "在我寄出求职信之前，你能帮我润色一下吗？",
    ieltsEn: "Iterative editing is essential to polish the prose and ensure logical coherence across all sections of a dissertation.",
    ieltsCn: "反复修改对于润色文笔并确保学位论文各章节之间的逻辑连贯性至关重要。"
  },
  {
    id: "w3-144",
    date: "2026-09-16",
    lemma: "conceptual",
    raw: "conceptual",
    pos: "adj.",
    phonetic: "/kənˈseptʃuəl/",
    domain: "学术高频",
    freq: 1,
    cn: "概念上的；理论框架层面的（Conceptual Framework / Model）",
    en: "Relating to or based on mental concepts and abstract principles rather than concrete implementation details.",
    synonyms: ["theoretical", "abstract", "ideational"],
    collocations: ["conceptual framework", "conceptual simplicity", "conceptual diagram"],
    morphology: "concept（概念）+ -ual（形容词后缀）",
    dailyEn: "Figure 1 provides a high-level conceptual overview of how our system works.",
    dailyCn: "图 1 提供了我们系统工作原理的高层概念概览。",
    ieltsEn: "Despite its conceptual simplicity, the proposed routing heuristic matches the empirical performance of complex reinforcement learning policies.",
    ieltsCn: "尽管所提出的路由启发式方法在概念上十分简洁，但其实证性能媲美复杂的强化学习策略。"
  },
  {
    id: "w3-145",
    date: "2026-09-16",
    lemma: "population",
    raw: "population",
    pos: "n.",
    phonetic: "/ˌpɒpjuˈleɪʃn/",
    domain: "学术高频",
    freq: 1,
    cn: "①【统计学】总体 / 全集（与抽样样本 Sample 相对）；② 人口；特定群体",
    en: "In statistics, the entire pool of items, events, or individuals from which a statistical sample is drawn; all inhabitants of a place.",
    synonyms: ["entire universe", "demographic group", "inhabitants"],
    collocations: ["target population", "population mean", "student population"],
    morphology: "popul-（人民/群体）+ -ation",
    dailyEn: "International students make up nearly a third of the university's student population.",
    dailyCn: "国际学生占这所大学学生总数的近三分之一。",
    ieltsEn: "Inferential statistics enable researchers to estimate true population parameters from a relatively small random sample.",
    ieltsCn: "推论统计使研究人员能够根据相对较小的随机样本估计真实的总体参数。"
  },
  {
    id: "w3-146",
    date: "2026-09-16",
    lemma: "exactness",
    raw: "exactness",
    pos: "n.",
    phonetic: "/ɪɡˈzæktnəs/",
    domain: "CS & 系统",
    freq: 1,
    cn: "精确性；严密无误（指计算结果无近似误差，对比近似算法 Approximation）",
    en: "The quality of being strictly accurate, precise, and free from approximation error.",
    synonyms: ["precision", "rigor", "accuracy"],
    collocations: ["mathematical exactness", "preserve exactness", "trade exactness for speed"],
    morphology: "exact（精确的）+ -ness（名词后缀）",
    dailyEn: "Financial accounting requires absolute exactness down to the last penny.",
    dailyCn: "财务会计要求精确到每一分钱，绝对不能有偏差。",
    ieltsEn: "Unlike probabilistic sketches, our deterministic index guarantees query exactness without incurring false positives.",
    ieltsCn: "与概率型草图数据结构不同，我们的确定性索引保证了查询结果的精确性，不会产生假阳性误报。"
  },
  {
    id: "w3-147",
    date: "2026-09-16",
    lemma: "composable",
    raw: "Composable",
    pos: "adj.",
    phonetic: "/kəmˈpəʊzəbl/",
    domain: "CS & 系统",
    freq: 1,
    cn: "【软件架构/系统】可组合的；积木式模块化的（各组件可自由拼装嵌套而不破坏彼此语义）",
    en: "Capable of being combined with other modular components in arbitrary ways to build complex systems cleanly.",
    synonyms: ["modular", "interoperable", "plug-and-play"],
    collocations: ["composable architecture", "composable operators", "composable data systems"],
    morphology: "compose（组合）+ -able（可……的）。现代数据系统顶会热词（如 Composable Data Systems）。",
    dailyEn: "Unix command-line tools are highly composable because you can pipe the output of one directly into another.",
    dailyCn: "Unix 命令行工具具有极高的可组合性，因为你可以通过管道将一个工具的输出直接传给另一个工具。",
    ieltsEn: "Designing composable primitives allows developers to construct custom analytical pipelines without rewriting low-level execution kernels.",
    ieltsCn: "设计可组合的基础原语，使开发者无需重写底层执行内核即可构建自定义分析流水线。"
  },
  {
    id: "w3-148",
    date: "2026-09-16",
    lemma: "expose",
    raw: "Expose",
    pos: "v.",
    phonetic: "/ɪkˈspəʊz/",
    domain: "CS & 系统",
    freq: 1,
    cn: "①【CS】暴露 / 开放（向外提供 API 接口、硬件特性或配置参数）；② 揭露；使接触",
    en: "In software engineering, to make an internal function, API endpoint, or hardware capability accessible to external callers.",
    synonyms: ["make accessible", "surface", "uncover"],
    collocations: ["expose an API", "expose fine-grained controls", "be exposed to"],
    morphology: "ex-（向外）+ pose（放置）→ 摆到外面上层可调用的位置。",
    dailyEn: "Studying abroad exposes you to different cultures and ways of thinking.",
    dailyCn: "出国留学能让你接触到不同的文化和思维方式。",
    ieltsEn: "The runtime exposes a declarative configuration interface while encapsulating low-level thread scheduling details.",
    ieltsCn: "该运行时向外暴露了声明式的配置接口，同时将底层的线程调度细节封装在内部。"
  },
  {
    id: "w3-149",
    date: "2026-09-16",
    lemma: "preserve",
    raw: "Preserving",
    pos: "v.",
    phonetic: "/prɪˈzɜːv/",
    domain: "CS & 系统",
    freq: 1,
    cn: "保持；维持不变（如保序 Order-preserving、隐私保护 Privacy-preserving）；保存",
    en: "To maintain something in its original or invariant state (such as order, accuracy, or privacy) during a transformation.",
    synonyms: ["maintain", "retain", "conserve"],
    collocations: ["privacy-preserving", "order-preserving", "while preserving accuracy"],
    morphology: "pre-（提前）+ serve（守护/保持）。论文摘要神仙句型：...reduces overhead while preserving exactness.",
    dailyEn: "Freezing fresh berries is a great way to preserve their vitamins.",
    dailyCn: "冷冻新鲜浆果是保存其维生素的好方法。",
    ieltsEn: "Order-preserving dictionary compression enables range predicates to be evaluated directly on encoded integer keys.",
    ieltsCn: "保序字典压缩技术使范围谓词能够直接在编码后的整数键上进行计算。"
  },
  {
    id: "w3-150",
    date: "2026-09-16",
    lemma: "enclose",
    raw: "Is Enclosed",
    pos: "v.",
    phonetic: "/ɪnˈkləʊz/",
    domain: "学术高频",
    freq: 1,
    cn: "① 用（括号、引号或边界）括起来 / 围住；② 随函附上（附件）",
    en: "To surround or close off on all sides (e.g., enclosing strings in quotation marks); to place within an envelope or package.",
    synonyms: ["surround", "encapsulate", "attach"],
    collocations: ["be enclosed in brackets/quotes", "enclosed document", "enclose herewith"],
    morphology: "en-（进入/使）+ close（关闭）",
    dailyEn: "Any text string containing spaces must be enclosed in double quotation marks.",
    dailyCn: "任何包含空格的文本字符串都必须用双引号括起来。",
    ieltsEn: "Each micro-benchmark execution is enclosed within a hardware performance counter barrier to isolate measurement noise.",
    ieltsCn: "每次微基准测试的执行都被包裹在硬件性能计数器屏障之内，以隔离测量噪声。"
  },
  {
    id: "w3-151",
    date: "2026-09-16",
    lemma: "separate",
    raw: "Separates",
    pos: "v. / adj.",
    phonetic: "/ˈsepəreɪt/",
    domain: "CS & 系统",
    freq: 1,
    cn: "分离；切分；将……隔开（作动词读 /ˈsepəreɪt/，作形容词读 /ˈseprət/）",
    en: "To cause to move or be apart; in architecture, to decouple distinct concerns such as control plane and data plane.",
    synonyms: ["decouple", "segregate", "divide"],
    collocations: ["separate storage from compute", "separate control and data planes", "keep separate"],
    morphology: "se-（分开）+ par（准备/排列）+ -ate",
    dailyEn: "A comma separates items in a standard CSV file.",
    dailyCn: "在标准的 CSV 文件中，逗号用来分隔各个数据项。",
    ieltsEn: "Our architecture cleanly separates policy formulation from mechanism execution, facilitating independent optimization of each layer.",
    ieltsCn: "我们的架构将策略制定与机制执行清晰地分离开来，便于对每一层进行独立优化。"
  },
  {
    id: "w3-152",
    date: "2026-09-16",
    lemma: "elapsed",
    raw: "elapsed",
    pos: "adj.",
    phonetic: "/ɪˈlæpst/",
    domain: "CS & 系统",
    freq: 1,
    cn: "（时间）已经过去的；实际流逝的（Elapsed Time：挂钟真实耗时 Wall-clock Time）",
    en: "Of time: having passed by; in benchmarking, total wall-clock time from start to finish of a task.",
    synonyms: ["wall-clock", "passed", "transpired"],
    collocations: ["elapsed time", "total elapsed nanoseconds", "measure elapsed runtime"],
    morphology: "e-（出）+ lapse（滑过/流逝）+ -d",
    dailyEn: "The timer on the screen shows the total elapsed time since the presentation started.",
    dailyCn: "屏幕上的计时器显示自演讲开始以来已经过去的总时间。",
    ieltsEn: "While CPU time sums active cycles across all threads, elapsed wall-clock time reflects the actual latency perceived by the end user.",
    ieltsCn: "虽然 CPU 时间汇总了所有线程的活跃周期，但实际流逝的挂钟时间（elapsed time）才反映了终端用户感知到的真实延迟。"
  },
  {
    id: "w3-153",
    date: "2026-09-16",
    lemma: "formulate",
    raw: "formulate",
    pos: "v.",
    phonetic: "/ˈfɔːmjuleɪt/",
    domain: "学术高频",
    freq: 1,
    cn: "①【数学/CS】将……形式化建模为（Formulate X as an optimization problem）；② 构想；系统阐述",
    en: "To express an idea or problem in a concise, systematic, or mathematical form; to devise a strategy or policy.",
    synonyms: ["formalize", "devise", "frame"],
    collocations: ["formulate the problem as", "formulate a hypothesis", "formulate a policy"],
    morphology: "formula（公式/范式）+ -ate（动词后缀）。科研论文 Method 第一段必用动词！",
    dailyEn: "Take a few minutes to formulate your thoughts before answering the interviewer's question.",
    dailyCn: "在回答面试官的问题之前，先花几分钟理清并组织一下你的思路。",
    ieltsEn: "We formulate adaptive operator routing as a constrained integer linear programming problem.",
    ieltsCn: "我们将自适应算子路由形式化建模为一个带约束的整数线性规划问题。"
  },
  {
    id: "w3-154",
    date: "2026-09-16",
    lemma: "analytical",
    raw: "analytical",
    pos: "adj.",
    phonetic: "/ˌænəˈlɪtɪkl/",
    domain: "CS & 系统",
    freq: 1,
    cn: "① 分析型的（如分析型数据库查询 OLAP）；② 解析的（数学闭式解的，对比 Empirical 实证的）",
    en: "Relating to or using analysis or logical reasoning; in databases, involving complex aggregations over large datasets (OLAP).",
    synonyms: ["diagnostic", "closed-form", "investigative"],
    collocations: ["analytical workload (OLAP)", "analytical cost model", "analytical skills"],
    morphology: "analysis（分析）衍生形容词。",
    dailyEn: "Writing a dissertation really sharpens your critical and analytical thinking.",
    dailyCn: "撰写学位论文确实能磨练你的批判性与分析性思维。",
    ieltsEn: "Our analytical cost model accurately predicts memory bandwidth saturation without requiring expensive runtime profiling.",
    ieltsCn: "我们的解析成本模型无需高开销的运行时性能剖析，即可准确预测内存带宽饱和点。"
  },
  {
    id: "w3-155",
    date: "2026-09-16",
    lemma: "assess",
    raw: "assess",
    pos: "v.",
    phonetic: "/əˈses/",
    domain: "学术高频",
    freq: 1,
    cn: "评估；评定；估量（雅思写作与学术论文替代 evaluate / test 的高频核心词）",
    en: "To evaluate or estimate the nature, ability, quality, or magnitude of something systematically.",
    synonyms: ["evaluate", "appraise", "gauge"],
    collocations: ["assess the impact of", "quantitatively assess", "assess feasibility"],
    morphology: "as-（朝向）+ sess（坐，源自拉丁语 sedere）→ 评审官坐下来核定估算。",
    dailyEn: "Coursework essays are used to assess your understanding of the module.",
    dailyCn: "课程论文被用来评估你对这门课内容的理解程度。",
    ieltsEn: "To quantitatively assess the sensitivity of our algorithm to hyperparameter choices, we sweep the threshold across three orders of magnitude.",
    ieltsCn: "为了定量评估算法对超参数选择的敏感度，我们在三个数量级范围内对阈值进行了扫描测试。"
  },
  {
    id: "w3-156",
    date: "2026-09-16",
    lemma: "algebra",
    raw: "algebra",
    pos: "n.",
    phonetic: "/ˈældʒɪbrə/",
    domain: "CS & 系统",
    freq: 1,
    cn: "代数（如关系代数 Relational Algebra、线性代数 Linear Algebra）",
    en: "The part of mathematics and computer science in which symbols and formal operators represent numbers, relations, and quantities.",
    synonyms: ["symbolic mathematics", "formal calculus"],
    collocations: ["relational algebra", "linear algebra", "Boolean algebra"],
    morphology: "源自阿拉伯语 al-jabr（碎骨复位/移项合并）。数据库理论的基石：Relational Algebra（关系代数）。",
    dailyEn: "A solid foundation in linear algebra is essential for understanding machine learning.",
    dailyCn: "扎实的线性代数基础对于理解机器学习至关重要。",
    ieltsEn: "Query optimizers apply equivalence-preserving relational algebra rewrite rules to push selections down below join operators.",
    ieltsCn: "查询优化器应用保持等价性的关系代数重写规则，将选择过滤算子下推到连接算子之前执行。"
  },
  {
    id: "w3-157",
    date: "2026-09-16",
    lemma: "bug",
    raw: "bug",
    pos: "n.",
    phonetic: "/bʌɡ/",
    domain: "CS & 系统",
    freq: 1,
    cn: "程序缺陷；软件漏洞 / 故障；小虫",
    en: "An error, flaw, or fault in the design, development, or operation of computer software or hardware that causes incorrect results.",
    synonyms: ["defect", "flaw", "glitch"],
    collocations: ["subtle concurrency bug", "reproduce a bug", "bug fix"],
    morphology: "源于早期机电计算机继电器中卡入飞蛾导致故障的典故（1947年 Grace Hopper 记录）。",
    dailyEn: "It took me three hours to track down a tiny off-by-one bug in the loop.",
    dailyCn: "我花了三个小时才追踪到循环里一个微小的差一错误（off-by-one bug）。",
    ieltsEn: "Automated fuzzing frameworks systematically mutate inputs to uncover subtle memory-safety bugs in systems software.",
    ieltsCn: "自动化模糊测试框架通过对输入进行系统性变异，来发掘系统软件中隐蔽的内存安全漏洞。"
  },
  {
    id: "w3-158",
    date: "2026-09-16",
    lemma: "paraphrase",
    raw: "paraphrases",
    pos: "v. / n.",
    phonetic: "/ˈpærəfreɪz/",
    domain: "学术高频",
    freq: 1,
    cn: "改写；同义转述（用不同的词汇和句型表达相同的语义，雅思写作与 NLP 核心词）",
    en: "A rewording of something written or spoken using different words to achieve greater clarity or avoid plagiarism.",
    synonyms: ["rephrase", "rewording", "restatement"],
    collocations: ["paraphrase the prompt", "semantically equivalent paraphrases", "paraphrase generation"],
    morphology: "para-（在旁边/平行）+ phrase（短语表达）→ 平行转换的同义表达。",
    dailyEn: "In IELTS Writing Task 2, always paraphrase the essay question in your introduction rather than copying it word for word.",
    dailyCn: "在雅思大作文中，引言段一定要对题目进行同义改写，而不是逐字照抄。",
    ieltsEn: "Evaluating language models across diverse paraphrases of the same query assesses their robustness to surface-level lexical variations.",
    ieltsCn: "在同一查询的多种同义改写形式上评估语言模型，可以检验其对表层词汇变化的鲁棒性。"
  },
  {
    id: "w3-159",
    date: "2026-09-16",
    lemma: "denote",
    raw: "denote",
    pos: "v.",
    phonetic: "/dɪˈnəʊt/",
    domain: "学术高频",
    freq: 1,
    cn: "表示；代表；记作（数学公式与算法伪代码定义符号时的绝对高频动词）",
    en: "To stand as a symbol or mathematical notation for; to indicate explicitly.",
    synonyms: ["represent", "signify", "designate"],
    collocations: ["let X denote...", "denote the set of", "boldface letters denote vectors"],
    morphology: "de-（完全/强调）+ note（标记）→ 用符号明确标记代表。",
    dailyEn: "In traffic signs, a red circle usually denotes a prohibition.",
    dailyCn: "在交通标志中，红色圆圈通常表示禁止。",
    ieltsEn: "Throughout this paper, we use calligraphic letters to denote sets and boldface lowercase letters to denote column vectors.",
    ieltsCn: "在本文通篇中，我们使用花体字母表示集合，使用粗体小写字母表示列向量。"
  },
  {
    id: "w3-160",
    date: "2026-09-16",
    lemma: "neuroinclusive study sessions",
    raw: "neuroinclusive study sessions",
    pos: "n. phr.",
    phonetic: "/ˌnjʊərəʊɪnˈkluːsɪv ˈstʌdi ˈseʃnz/",
    domain: "英式日常",
    freq: 1,
    cn: "神经多样性包容性自习会（照顾 ADHD、自闭谱系等不同认知风格学生的互助学习活动）",
    en: "Structured group study environments designed to accommodate and support individuals with diverse neurological styles (such as ADHD, autism, or dyslexia).",
    synonyms: ["neurodiversity-friendly co-working", "inclusive focus groups"],
    collocations: ["attend neuroinclusive study sessions", "body-doubling accountability", "accessible learning environment"],
    morphology: "neuro-（神经系统的）+ inclusive（包容性的）+ study sessions（自习时段/学习会）。英国高校学生会（SU）与福祉中心极富人文关怀的现代短语。",
    dailyEn: "The library hosts neuroinclusive study sessions every Tuesday with quiet zones, timers, and body-doubling support.",
    dailyCn: "图书馆每周二举办神经多样性包容性自习会，提供安静区、番茄钟计时和同伴陪伴支持。",
    ieltsEn: "By introducing neuroinclusive study sessions alongside traditional tutorials, universities cultivate an equitable academic environment for diverse learners.",
    ieltsCn: "通过在传统辅导课之外引入神经多样性包容性自习会，高校为不同认知特点的学习者营造了公平的学术环境。"
  },
  {
    id: "w3-161",
    date: "2026-09-16",
    lemma: "partition",
    raw: "partition",
    pos: "n. / v.",
    phonetic: "/pɑːˈtɪʃn/",
    domain: "CS & 系统",
    freq: 1,
    cn: "【数据库/分布式/算法】分区；数据切分（将大表或图切分为互不重叠的子集）",
    en: "The division of a database, storage drive, or graph into distinct, non-overlapping independent parts; to divide into parts.",
    synonyms: ["shard", "segment", "subdivide"],
    collocations: ["horizontal partitioning", "partition pruning", "network partition"],
    morphology: "part（部分）+ -ition",
    dailyEn: "We used a wooden screen to partition the studio flat into a sleeping area and a workspace.",
    dailyCn: "我们用一扇木屏风把单间公寓分隔成了睡眠区和工作区。",
    ieltsEn: "Hash-based partitioning distributes workload evenly across worker nodes, whereas range partitioning preserves locality for interval queries.",
    ieltsCn: "基于哈希的分区能将工作负载均匀分布到各个工作节点，而范围分区则能为区间查询保留局部性。"
  },
  {
    id: "w3-162",
    date: "2026-09-16",
    lemma: "compound exclusion & accordingly",
    raw: "compound exclusion / Accordingly",
    pos: "n. phr. / adv.",
    phonetic: "/ˈkɒmpaʊnd ɪkˈskluːʒn/ · /əˈkɔːdɪŋli/",
    domain: "学术高频",
    freq: 1,
    cn: "复合排除规则（多条件组合过滤剔除） & 相应地 / 因此（Accordingly）",
    en: "Filtering out records based on multiple combined criteria simultaneously; and in a way that is appropriate to the particular circumstances ('therefore').",
    synonyms: ["multi-predicate filtering", "consequently", "correspondingly"],
    collocations: ["compound exclusion criteria", "adjust parameters accordingly", "act accordingly"],
    morphology: "compound（复合的）+ exclusion（排除）；according（根据/一致）+ -ly → 学术论文推导因果关系的黄金过渡副词。",
    dailyEn: "We've updated the project timeline; please adjust your personal schedules accordingly.",
    dailyCn: "我们已经更新了项目时间线，请大家相应地调整各自的日程安排。",
    ieltsEn: "Samples violating the compound exclusion criteria are discarded during preprocessing, and normalization weights are recalibrated accordingly.",
    ieltsCn: "违反复合排除标准的样本在预处理阶段被剔除，归一化权重也随之进行相应重新校准。"
  },
  {
    id: "w3-163",
    date: "2026-09-16",
    lemma: "illustrative & diversity",
    raw: "illustrative / Diversity / graduate students",
    pos: "adj. / n.",
    phonetic: "/ˈɪləstrətɪv/ · /daɪˈvɜːsəti/",
    domain: "学术高频",
    freq: 1,
    cn: "起例证说明作用的（Illustrative） & 多样性（Diversity） & 研究生（Graduate Students）",
    en: "Serving as a clear example or explanation; the state of including a wide range of different types or backgrounds; postgraduate learners.",
    synonyms: ["explanatory", "exemplary", "variety", "postgraduates"],
    collocations: ["illustrative example", "workload diversity", "graduate students"],
    morphology: "illustrate（阐明/图解）+ -ive；diverse（多样的）+ -ity。（注：已完整囊括 9月16日 末尾收官的三个词条）。",
    dailyEn: "The professor used a simple illustrative example to explain the complex algebra to new graduate students.",
    dailyCn: "教授用了一个简单的说明性例子，向新入学的研究生们解释那段复杂的代数。",
    ieltsEn: "Figure 2 provides an illustrative walkthrough of our algorithm, while Section 5 evaluates its robustness across a high diversity of real-world workloads.",
    ieltsCn: "图 2 提供了我们算法的图解说明示例，而第 5 节则在高度多样化的真实世界工作负载上评估了其鲁棒性。"
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

// ==================== 50张 4K UHD 超高清自然风光壁纸库（山水、雪地、冰川、河流、森林） ====================
const RAW_WALLPAPER_IDS = [
  "photo-1506744038136-46273834b3fb", // 1. 优胜美地山谷与河流
  "photo-1464822759023-fed622ff2c3b", // 2. 壮丽山脉云海
  "photo-1519681393784-d120267933ba", // 3. 星空下的皑皑雪山
  "photo-1470071459604-3b5ec3a7fe05", // 4. 晨雾缭绕的山林
  "photo-1439853949127-fa647821eba0", // 5. 翡翠高山湖泊与峰峦
  "photo-1426604966848-d7adac402bff", // 6. 阳光森林与溪流峡谷
  "photo-1501785888041-af3ef285b470", // 7. 阿尔卑斯静谧山水湖面
  "photo-1472214103451-9374bd1c798e", // 8. 翠绿山谷日出
  "photo-1469474968028-56623f02e42e", // 9. 旷野孤峰与晨光
  "photo-1447752875215-b2761acb3c5d", // 10. 幽静森林古木吊桥
  "photo-1465146344425-f00d5f5c8f07", // 11. 深林繁花与溪谷
  "photo-1483728642387-6c3bdd6c93e5", // 12. 极寒雪山之巅迷雾
  "photo-1507525428034-b723cf961d3e", // 13. 宁静海岸线与远山
  "photo-1518709268805-4e9042af9f23", // 14. 冰岛黑沙滩与雪原
  "photo-1454496522488-7a8e488e8606", // 15. 喜马拉雅冷峻雪峰
  "photo-1491555103944-7c647fd857e6", // 16. 阿尔卑斯冬季雪脊
  "photo-1486870591958-9b9d0d1dda99", // 17. 金色日照金山雪顶
  "photo-1433086966358-54859d0ed716", // 18. 森林飞瀑与翠绿深潭
  "photo-1441974231531-c6227db76b6e", // 19. 阳光穿透高耸松林
  "photo-1470770841072-f978cf4d019e", // 20. 雪山脚下的镜面湖泊
  "photo-1500530855697-b586d89ba3ee", // 21. 蜿蜒山间公路与秋林
  "photo-1475924156734-496f6cac6ec1", // 22. 朝霞映照的海湾奇石
  "photo-1502082553048-f009c37129b9", // 23. 苍翠参天古树光影
  "photo-1511497584788-876760111969", // 24. 北欧针叶林与薄雾
  "photo-1493246507139-91e8fad9978e", // 25. 洛基山脉冰川湖泊
  "photo-1513836279014-a89f7a76ae86", // 26. 仰望森林峡谷一线天
  "photo-1418065460487-3e41a6c84dc5", // 27. 茂密松林与远方山脊
  "photo-1464802686167-b939a6910659", // 28. 极夜星云与雪野长空
  "photo-1477346611705-65d1883cee1e", // 29. 暗调冷峻山峰与云雾
  "photo-1490730141103-6cac27aaab94", // 30. 黄金落日与平静水面
  "photo-1505765050516-f72dcac9c60e", // 31. 秋季彩林与雪山倒影
  "photo-1434725039720-aaad6dd32dfe", // 32. 晨曦草甸与层峦叠嶂
  "photo-1509316975850-ff9c5deb0cd9", // 33. 红松林与山间迷雾
  "photo-1482192505345-5655af888cc4", // 34. 冰封雪原上的孤寂木屋
  "photo-1517299321609-52687d1bc55a", // 35. 漫天飞雪中的冬日松林
  "photo-1483921020237-2ff51e8e4b22", // 36. 纯白雪地与远山晴空
  "photo-1457269449834-928af64c684d", // 37. 极地冰晶与雪原风光
  "photo-1491002052546-bf38f186af56", // 38. 银装素裹的森林雪道
  "photo-1516466723877-e4ec1d736c8a", // 39. 冬季冰封河谷与雪峰
  "photo-1476514525535-07fb3b4ae5f1", // 40. 瑞士山水峡湾与轻舟
  "photo-1504893524553-b855bce32c67", // 41. 蜿蜒穿行于山谷的河流
  "photo-1437482078695-73f5ca6c96e2", // 42. 森林湍急清澈河溪
  "photo-1455218873509-8097305ee378", // 43. 壮阔瀑布与深谷激流
  "photo-1508739773434-c26b3d09e071", // 44. 晚霞映射下的雪山湖畔
  "photo-1542224566-6e85f2e6772f", // 45. 破晓云海山巅
  "photo-1465056836041-7f43ac27dcb5", // 46. 新西兰南岛冰川雪山
  "photo-1464278533981-50106e6176b1", // 47. 晨光河谷与花岗岩峭壁
  "photo-1470240731273-7821a6eeb6bd", // 48. 春日高山草甸与远方雪顶
  "photo-1518098268026-4e89f1a2cd8e", // 49. 多洛米蒂奇峰与静谧草坡
  "photo-1531366936337-7c912a4589a7"  // 50. 极光夜空下的冰封雪地与山川
];

// 统一生成 4K UHD (3840px) + q=95 高清无损画质链接
const NATURE_WALLPAPERS = RAW_WALLPAPER_IDS.map(
  id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=3840&q=95`
);

let currentBgIndex = Math.floor(Math.random() * NATURE_WALLPAPERS.length);
let isAllExpanded = false; // 全局一键展开锁定状态

function applyWallpaper(index) {
  currentBgIndex = (index + NATURE_WALLPAPERS.length) % NATURE_WALLPAPERS.length;
  const url = NATURE_WALLPAPERS[currentBgIndex];

  // 预加载4K大图，加载完成后平滑切换，避免闪烁并预热下一张
  const img = new Image();
  img.src = url;
  img.onload = () => {
    document.body.style.setProperty("--custom-wallpaper", `url('${url}')`);
    document.body.classList.add("has-wallpaper");
  };
  // 兜底立即设置
  document.body.style.setProperty("--custom-wallpaper", `url('${url}')`);
  document.body.classList.add("has-wallpaper");

  // 预热下一张壁纸
  const nextImg = new Image();
  nextImg.src = NATURE_WALLPAPERS[(currentBgIndex + 1) % NATURE_WALLPAPERS.length];

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

// ==================== 渲染卡片网格 ====================
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
    const expandedClass = isAllExpanded ? "expanded" : "";
    const arrowSymbol = isAllExpanded ? "▴" : "▾";

    return `
      <article class="word-card ${expandedClass}" data-id="${item.id}" onmouseleave="collapseCardOnLeave(this)">
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
          <span class="arrow">${arrowSymbol}</span>
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

// 1. 单卡点击切换（当「一键展开」锁定时不起作用）
function toggleCardDrawer(btn) {
  if (isAllExpanded) return;
  const card = btn.closest(".word-card");
  card.classList.toggle("expanded");
  const arrow = btn.querySelector(".arrow");
  if (arrow) arrow.textContent = card.classList.contains("expanded") ? "▴" : "▾";
}

// 2. 鼠标移入「展开搭配、构词与双语境造句」自动展开（当「一键展开」锁定时不起作用）
function expandCardOnHover(btn) {
  if (isAllExpanded) return;
  const card = btn.closest(".word-card");
  if (!card.classList.contains("expanded")) {
    card.classList.add("expanded");
    const arrow = btn.querySelector(".arrow");
    if (arrow) arrow.textContent = "▴";
  }
}

// 3. 鼠标移出整个单词卡片范围后自动收回（当「一键展开」锁定时不起作用）
function collapseCardOnLeave(card) {
  if (isAllExpanded) return;
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
  applyWallpaper(currentBgIndex);
  renderAll();

  // 切换下一张 4K 自然风景
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

  // 新增：一键展开 / 一键收回全局锁定开关
  const expandAllBtn = document.getElementById("expandAllToggle");
  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", () => {
      isAllExpanded = !isAllExpanded;
      document.body.classList.toggle("expand-all-locked", isAllExpanded);
      expandAllBtn.classList.toggle("active", isAllExpanded);

      const label = document.getElementById("expandAllLabel");
      const icon = expandAllBtn.querySelector(".icon");
      if (label) label.textContent = isAllExpanded ? "一键收回" : "一键展开";
      if (icon) icon.textContent = isAllExpanded ? "📁" : "📂";

      // 同步当前页面上所有卡片的展开/收回状态
      document.querySelectorAll(".word-card").forEach(card => {
        card.classList.toggle("expanded", isAllExpanded);
        const arrow = card.querySelector(".drawer-toggle .arrow");
        if (arrow) arrow.textContent = isAllExpanded ? "▴" : "▾";
      });
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