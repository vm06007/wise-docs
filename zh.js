import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';

class ZHDOC extends Component {
    componentDidMount () {
        this.scrollToHashId()
    }

    componentDidUpdate () {
        this.scrollToHashId()
    }

    scrollToHashId () {
        const removeHash = this.removeHash
        // get URL hash (minus the hash mark)
        const hash = window.location.hash.substring(1)

        // if there's a hash, scroll to that ID
        if (hash && hash.length) {
            setTimeout(
                window.requestAnimationFrame(function () {
                    const el = document.getElementById(hash)
                    el.scrollIntoView()
                    // clean up the hash, so we don't scroll on every prop update
                    removeHash()
                }),
                0
            )
        }
    }

    removeHash () {
        const loc = window.location
        const hist = window.history

        // use modern browser history API
        if (hist && 'pushState' in hist) {
            hist.replaceState('', document.title, loc.pathname + loc.search)
            // fallback for older browsers
        } else {
            // prevent scrolling by storing the page's current scroll offset
            const scrollV = document.body.scrollTop
            const scrollH = document.body.scrollLeft
            loc.hash = ''
            // restore the scroll offset, should be flicker free
            document.body.scrollTop = scrollV
            document.body.scrollLeft = scrollH
        }
    }
    render() {
        return (
            <PerfectScrollbar>
                <div className="docs-overflow-visible">
                <div className="card-header rounded-0 bg-white px-0 px-lg-3 py-1 border-bottom">
                    <Container className="d-block text-center py-2 text-sm-left align-items-center justify-content-between docs">
                        <section className="text-center">
                            <div className="app-page-title--heading text-center">
                                <h1>WISE（智慧币）文档</h1>
                            </div>
                        </section>
                        <section className="text-left">
                            <div className="app-page-title--heading text-left">
                                <h2 id="sec-1"><a href="/docs#sec-1">1</a>&nbsp;&nbsp;介绍</h2>
                            </div>
                            <p><strong>WISE Token</strong>, 在此文档将称为 <strong>智慧币</strong>,符合ERC-20的智能合约，旨在部署在以太坊区块链上。WISE是去中心化的,&nbsp;
                                <a href="/docs#sec-2-2">公平</a>,&nbsp;
                                <a href="/docs#sec-2-3-1">自动化的流动性</a>,&nbsp;
                                <a href="/docs#sec-2-3-1">可信任地交易</a>,&nbsp;
                                <a href="/docs#sec-2-3-5">计息</a>,&nbsp;
                                <a href="/docs#sec-1-1">债券</a> 币.
                            </p>
                            <p>本文档是WISE合同及其功能的一般技术规范
                            </p>
                            <p>主网计划启动WISE合同r <span className="nowrap">2020年10月</span>.
                            </p>
                        </section>
                        <section className="text-left">
                            <div className="app-page-title--heading text-left">
                                <h3 id="sec-1-1"><a href="/docs#sec-1-1">1.1</a>&nbsp;&nbsp;WISE（智慧币）的用处</h3>
                            </div>
                            <p>WISE（智慧币）的核心目的 — <a href="/docs#sec-2-3-5">质押</a> — 类似于债券和CD（存款证明）：奖励持有人所赚取的利息，以换取他们锁定一段时间的资金。 WISE融合了这两种传统工具的某些功能，但在功能上做了很大的改进。
                            </p>
                            <p><strong>CDs</strong> 往往具有较低的风险，较低的回报，并且只在到期日支付利息。
                            </p>
                            <p><strong>债券</strong> 往往会有更高的风险，更高的回报，并且会按既定时间表定期付款（通常每六个月付款一次）
                            </p>
                            <p><strong>WISE</strong> 与债券最相似，因为它赚取了相对较高的利息，但允许用户随时提取
                            </p>
                            <strong>WISE在所有方面都优于债券和CD:</strong>
                            <p>WISE使放样人完全灵活地选择确切的时间&nbsp;
                                <a href="/docs#sec-2-3-5-3">提取利息</a> 在桩的生命中。您可以每天，不定期地提取利息，等到到期或任何您喜欢的利息！
                            </p>
                            <p>WISE股份比债券和CD具有更高的回报，更低的风险（由于分散和不受信任）以及更高的灵活性。不再有信任的银行和政府保持偿付能力而不改变其规则。无需再担心债券发行人可能会拖欠您的款项。
                            </p>
                            <p>WISE是纯净的，不变的代码.</p>
                        </section>
                        <section className="text-left">
                            <div className="app-page-title--heading text-left">
                                <h3 id="sec-1-2"><a href="/docs#sec-1-2">1.2</a>&nbsp;&nbsp;Wise基金会</h3>
                            </div>
                            <p>Wise基金会（Wise Foundation）是2020年2月成立的非法人非营利组织。WISE合同和各种 <a href="/docs#sec-3">相关软件和网站</a> 由Wise基金会完全资助和开发.
                            </p>
                            <p>Wise基金会致力于提供任何人都可以深入了解合同的材料。这是在合同源代码及其功能上建立高度信任的重要一步，因为并非每个人都有能力或意愿来消化该代码。
                            </p>
                            <p>WISE合同源代码将在以下位置公开
                                <a href="https://github.com/wise-foundation">我们的</a>. <a href="/docs#sec-7-3">WISE合同源代码的付费专业审核已完成，并包含在本文档中</a>.
                            </p>
                            <p>如果您有任何疑问，或想与创始人，开发人员和其他社区讨论该项目，请加入官方WISE电报群，网址为： <a href="https://t.me/WiseToken">t.me/WiseToken</a>. 我们欢迎我们这个谦虚社区的所有有兴趣的，受人尊敬的聚会。有关WISE的各种新闻稿，请加入WiseTokenNews电报频道，网址为： <a href="https://t.me/WiseTokenNews">t.me/WiseTokenNews</a>
                            </p>
                        </section>
                        <section className="text-left">
                            <div className="app-page-title--heading text-left">
                                <h3 id="sec-1-3"><a href="/docs#sec-1-3">1.3</a>&nbsp;&nbsp;动机和原则</h3>
                            </div>
                            <p>将您的钱托付给其他人看管具有内在的风险。传统金融工具中的明显缺陷是开发WISE的主要动机。 WISE合同旨在确保即使在进行各种经济活动的过程中，用户也始终可以完全保管和控制其WISE令牌
                            </p>
                            <p>The <a href="/docs#sec-2-3-3">WISE的初始铸造</a>,&nbsp;
                                <a href="/docs#sec-2-2-3">邀请返佣</a>,&nbsp;
                                <a href="/docs#sec-2-3-5-1">开启</a> 和 <a href="/docs#sec-2-3-5-4">关闭质押</a>,&nbsp;
                                <a href="/docs#sec-2-3-5-4">获得利息</a>, 甚至&nbsp;
                                <a href="/docs#sec-2-3-1">为ETH或其他代币出售WISE</a>&nbsp;
                                可以端对端完成所有工作，而无需使用用户的WISE令牌在另一个人或系统的控制下。将此与您不能信任的银行世界以及（根本）没有最大利益的传统理财公司进行比较。
                            </p>
                            <p>拥有加密货币的一个非常重要的方面是有一个地方，可以在需要时安全，轻松，快速地进行交易。我们认为Uniswap是以太坊上广受欢迎且备受推崇的去中心化交易所（DEX）
                                智能合约。五十天之后 <a href="/docs#sec-2-2">流动性变压器时代</a>, WISE合同将自动，不可信赖且不可撤销 <a href="/docs#sec-2-3-1">在Uniswap上引导自己的初始流动资金池</a>. 用户在LT纪元期间发送给合同的所有ETH中的至少90％将依次由WISE合同自动转移到Uniswap，以及等价的铸造WISE。
                            </p>
                            <p>作为对此流动性池存款的交换并同时进行，Uniswap将适当数量的UNI流动性代币转让给WISE合同，该令
                            牌具有唯一的权力，以后可以撤回该流动性池。 WISE合同通过将这些UNI令牌转移到已知的刻录地址，将自
                            动，立即且可证明地销毁这些令牌。在这样做时，WISE合同确保任何个人，一方，合同或实体在整个永恒的
                            时间内都不能从Uniswap撤回该初始ETH / WISE流动资金池。
                            </p>
                            <p>WISE合约还允许用户赚取被称为WISE令牌定期存款的利息 <a href="/docs#sec-2-3-5">质押</a>,与债券最相似，但更灵活。股份可以像债券一样赚取利息，但其附加功能是可以在股份存续期内随时提取利息。债券不允许的东西。 
                                WISE中这些类似债券的计息股份始终完全由用户及其钱包保管，从未被任何第三方持有，影响或没收。
                            </p>
                        </section>
                        <section className="text-left">
                            <div className="app-page-title--heading text-left">
                                <h2 id="sec-2"><a href="/docs#sec-2">2</a>&nbsp;&nbsp;WISE合约功能</h2>
                            </div>
                            <p>WISE合同具有几个关键属性和核心功能，以下各节将详细概述。这里还介绍了一些重要的数学计算和数据结构。在适当的地方，说明了用户和多用户活动以及合同状态演变的各种示例方案。
                            </p>
                        </section>
                        <section className="text-left">
                            <div className="app-page-title--heading text-left">
                                <h2 id="sec-2-1"><a href="/docs#sec-2-1">2.1</a> 一般性质</h2>
                            </div>
                            <p>合同将令牌名称定义为 <code>"WISE（智慧币）"</code>, 符号为<code>"WISE"</code>, 小数点为
                                <code>18</code>.
                            </p>
                            <p>WISE的基本单位称为 <code>YODA</code>. 一个WISE由五十分之一组成 (1 × 10<sup>18</sup>) YODA.
                            </p>
                            <p>从第天开始，合同以全天增量跟踪时间
                                <code>0</code>, 从合同部署之前的UTC午夜开始。用于 <a href="/docs#sec-2-2">LT时代</a> 在代码中将是较高的日期数字，而不是从字面上看是1至50的日期数字
                            </p>
                            <p>合同没有授予部署帐户的特殊功能，没有管理密钥，也没有合同所有者的概念。所有用户，包括创始人
                                和开发人员，都可以平等地使用合同的功能。
                            </p>
                            <p>合同一旦部署，就不会改变。不涉及代理或委托合同.
                            </p>
                        </section>
                        <section className="text-left">
                            <div className="app-page-title--heading text-left">
                                <h4 id="sec-2-1-1"><a href="/docs#sec-2-1-1">2.1.1</a> 代币供给量</h4>
                            </div>
                            <p>合同没有设定的令牌供应。用户通过购买的总初始供应量 <a href="/docs#sec-2-2">流动性变压器</a>将落入定义的范围内，部分由局限随机性决定，部分由 <a href="/docs#sec-2-2-3">邀请奖励</a>.
                            </p>
                            <p>50天的流动性变压器平均每天有500万可用量，尽管有些日子涉及随机性，这意味着长期可用的总供应量可能约为2.5亿WISE。由于推荐人奖金，最多可以额外增加10％（即最多增加2500万）
                            </p>
                            <p>然后将总供应量与铸造批次匹配，然后 <a href="/docs#sec-2-3-1">永久性地发送到Uniswap</a>.由于基金会报销ETH，发送给Uniswap的WISE金额将比通过LT和推荐奖金可铸造的金额少10％。无论如何，发送给Uniswap的WISE / ETH比率将与可铸造的LT WISE（包括推荐奖金WISE）与LT ETH的比率完全匹配。这样可以确保Uniswap的初始价格与LT的整体价格相匹配。
                            </p>
                            <p>例如，如果我们假设随机性达到平均水平，假设获得了所有可能的推荐人奖金的一半，并且假设基金会的报销上限导致其仅为LT ETH的5％，那么总初始供应量将为：
                            </p>
                            <p>
                            </p>
                            <pre><code>
                                基础供应量 = 250,000,000 WISE<br/>
                                推荐奖励 = 基础供应量 * 5% = 12,500,000 WISE<br/>
                                总量 = 基础供应量 + 推荐奖励量 = 262,500,000 WISE<br/>
                                uniswapBatch = 总量 * 95% = 249,375,000 WISE<br/>
                                <br/>
                                初始总量 = 总量 + uniswapBatch = 511,875,000 WISE
                            </code></pre>
                            <p>尽管极不可能（几乎不可能），但绝对最低的总初始供应量（所有随机天数都达到最小值，没有推荐奖金，并且足够低的LT ETH总数使基金会偿还的金额仅为10％）将为：
                            </p>
                            <pre><code>
                                基础供应量 = 180,000,010 WISE<br/>
                                推荐奖励 = 基础供应量 * 0% = 0 WISE<br/>
                                总量 = 基础供应量 + 推荐奖励量 = 180,000,010 WISE<br/>
                                uniswapBatch = 总量 * 90% = 162,000,009 WISE<br/>
                                <br/>
                                totalInitialSupply = totalLTSupply + uniswapBatch = 342,000,019 WISE
                            </code></pre>
                            <p>尽管同样不太可能（几乎不可能），但绝对最大可能的总初始供应量（所有随机日均获得其最大值，最大推荐奖金以及使基金会报销率接近0％的高LT ETH总额）将为：
                            </p>
                            <pre><code>
                                基础供应量 = 319,999,990 WISE<br/>
                                推荐奖励 = 基础供应量 * 10% = 31,999,999 WISE<br/>
                                总量= 基础供应量 + 推荐奖励量 = 351,999,989 WISE<br/>
                                uniswapBatch = 总量 * ~100% = 351,999,989 WISE<br/>
                                <br/>
                                初始总量 = 总量 + uniswapBatch = 703,999,978 WISE
                            </code></pre>
                            <p>代币总供应量将 <a href="/docs#sec-2-3-4">每年以4％的速度膨胀</a>, 
                                从流动性变压器时代结束后开始 <a href="/docs#sec-2-3">流通时代</a> 
                                开始。一些新代币将在。 <a href="/docs#sec-2-3-5-4">关闭质押</a>, 和一些铸造给 <a href="/docs#sec-2-3-5-5">质押邀请人</a>. 
                                如果在指定的一天没有关闭任何股份，并且当天没有任何股份失去兴趣，那么即使指定了以后再铸造，当天实际上也不会铸造新的代币。过去的所有时间都被立即铸造。
                            </p>
                        </section>
                        <section className="text-left">
                            <div className="app-page-title--heading text-left">
                                <h3 id="sec-2-2"><a href="/docs#sec-2-2">2.2</a>流动性变压器时代</h3>
                            </div>
                            <p>WISE合同的启动将在最初的50天阶段开始，在此阶段，用户可以向合同发送ETH（或在Uniswap V2上交易的任何ERC-20令牌）以保留WISE令牌。保留的令牌可以是 <a href="/docs#sec-2-3-3">被其它用户开采</a> LT时代结束后即第51天开始时
                            </p>
                            <p>LT时代的每一天都将有一定数量的WISE令牌，可供当天存入ETH的所有人员保留。大多数日子将精确提供五百万个WISE，而其他日子将其可用WISE数量随机设置在预定范围内。这些随机金额将由合同在每个随机日结束后不久通过利用 <a href="https://provable.xyz/">
                                可验证</a> （以前称为“ Oraclize”）智能合约的随机数据源接口。生成的随机性以不可信且可证明的密码安全方式在链上传递。有关Provable的更多详细信息，请阅读 <a href="https://provable.xyz/papers/random_datasource-rev1.pdf">random
                                数据源白皮书</a> 和他们的 <a href="https://docs.provable.xyz/#security-deep-dive">安全</a>.
                            </p>
                            <p>每天可用的WISE最终会按比例直接分配给当天存入ETH的用户。换句话说，在特定的LT日进行预订的用户以后将能够提取当天可用WISE的分数，该分数等于他们个人发送的当日总ETH的分数。
                            </p>
                        </section>
                        <section className="text-left">
                            <div className="app-page-title--heading text-left">
                                <h4 id="sec-2-2-1"><a href="/docs#sec-2-2-1">2.2.1</a> 代币预留</h4>
                            </div>
                            <p>在LT Epoch的任何给定日期，用户可以选择将ETH（或在Uniswap V2上交易的任何ERC-20令牌）发送到合同，并将其分配给尚未结束的LT Epoch的任何一天。我们将此动作称为“令牌保留”。
                            </p>
                            <p>例如，在第12天，用户可以将ETH发送并分配给第12–50天中的任何一天，但不能发送至第1-11天，因为这些天已经结束。
                            </p>
                            <p>每个令牌预留都分配给一天，但是用户可以根据自己的意愿进行任意数量的预定，并按照自己的意愿进行不同的日期。
                            </p>
                            <p>WISE合同前端还将包括用户能够在所有剩余的LT天中平均分配单个预留金额的ETH（或ERC-20）的功能。这个 &ldquo;平均成本&rdquo; 该功能为希望在每个LT天中保留相同时间的用户节省了gas
                            </p>
                            <p>可以使用ETH进行预订，也可以使用Uniswap V2上交易的任何ERC-20令牌进行预订。这是通过与Uniswap直接集成完成的，Uniswap将ERC-20交换为ETH，作为预订交易的一部分。这在功能上与用户自己在Uniswap上将ERC-20交换为ETH，然后将ETH发送到WISE合同进行令牌保留相同。使用WISE预订界面执行此操作的好处是可以为用户节省一些汽油费和时间。
                            </p>
                            <p>每个单个令牌保留必须具有最小的ETH数量，以使垃圾邮件攻击的成本过高。具体的最低金额将在较晚的发布日期确定。这是因为在撰写本文和发布合同之间，ETH的价格可能会发生重大变化。最低价格可能在10美元左右的以太坊附近。
                            </p>
                            <p>该合同将提供公共界面，以查看所有用户当前分配给每个LT Epoch日的ETH总量，以及每天可用的WISE总量（在确定供应的情况下，如果是随机天数）。对于尚未最终确定供应的天数，最小/最大范围也可从合同中获取。
                            </p>
                        </section>
                        <section className="text-left">
                            <div className="app-page-title--heading text-left">
                                <h4 id="sec-2-2-2"><a href="/docs#sec-2-2-2">2.2.2</a> 每日LT供应时间表</h4>
                            </div>
                            <p>LT每天平均有500万个WISE可供预订。某些日期的数量随机确定，只有几亿个WISE波动，而另一些日子则变化很大，范围从单个WISE到一千万WISE（技术上为9,999,999 WISE，以严格保持平均500万每天）。通过这种方式，LT时代为希望与ETH赌博的用户以及处于各种风险/回报水平的用户提供了各种令人兴奋的选择。
                            </p>
                            <p>下表概述了LT时代的每一天有多少WISE可用于用户预订。在大多数日子里，恰好有五百万个WISE可用。其余显示两个供应值：当天的最小可用量和最大可用量。每天用颜色标记相对风险水平，从 <span className="no-risk">没有</span> 至 <span className="high-risk">高</span>):
                            </p>
                            <div className="table-container">
                                <table className="cal">
                                    <thead>
                                        <tr>
                                            <th>Sun</th>
                                            <th>Mon</th>
                                            <th>Tue</th>
                                            <th>Wed</th>
                                            <th>Thu</th>
                                            <th>Fri</th>
                                            <th>Sat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="risk0">
                                                Nov 11<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk0">
                                                Nov 12<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk0">
                                                Nov 13<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk0">
                                                Nov 14<br/>
                                                <div>5M</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="risk0">
                                                Nov 15<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk0">
                                                Nov 16<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk0">
                                                Nov 17<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk1">
                                                Nov 18<br/>
                                                <div>5.5M<br/>4.5M</div>
                                            </td>
                                            <td className="risk0">
                                                Nov 19<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk1">
                                                Nov 20<br/>
                                                <div>5.5M<br/>4.5M</div>
                                            </td>
                                            <td className="risk0">
                                                Nov 21<br/>
                                                <div>5M</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="risk6">
                                                Nov 22<br/>
                                                <div>10M<br/>1</div>
                                            </td>
                                            <td className="risk0">
                                                Nov 23<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk2">
                                                Nov 24<br/>
                                                <div>6M<br/>4M</div>
                                            </td>
                                            <td className="risk0">
                                                Nov 25<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk2">
                                                Nov 26<br/>
                                                <div>6M<br/>4M</div>
                                            </td>
                                            <td className="risk2">
                                                Nov 27<br/>
                                                <div>6M<br/>4M</div>
                                            </td>
                                            <td className="risk0">
                                                Nov 28<br/>
                                                <div>5M</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="risk6">
                                                Nov 29<br/>
                                                <div>10M<br/>1</div>
                                            </td>
                                            <td className="risk0">
                                                Nov 30<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk3">
                                                Dec 1<br/>
                                                <div>6.5M<br/>3.5M</div>
                                            </td>
                                            <td className="risk0">
                                                Dec 2<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk3">
                                                Dec 3<br/>
                                                <div>6.5M<br/>3.5M</div>
                                            </td>
                                            <td className="risk0">
                                                Dec 4<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk3">
                                                Dec 5<br/>
                                                <div>6.5M<br/>3.5M</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="risk6">
                                                Dec 6<br/>
                                                <div>10M<br/>1</div>
                                            </td>
                                            <td className="risk0">
                                                Dec 7<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk0">
                                                Dec 8<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk4">
                                                Dec 9<br/>
                                                <div>7M<br/>3M</div>
                                            </td>
                                            <td className="risk0">
                                                Dec 10<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk4">
                                                Dec 11<br/>
                                                <div>7M<br/>3M</div>
                                            </td>
                                            <td className="risk0">
                                                Dec 12<br/>
                                                <div>5M</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="risk6">
                                                Dec 13<br/>
                                                <div>10M<br/>1</div>
                                            </td>
                                            <td className="risk0">
                                                Dec 14<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk5">
                                                Dec 15<br/>
                                                <div>7.5M<br/>2.5M</div>
                                            </td>
                                            <td className="risk5">
                                                Dec 16<br/>
                                                <div>7.5M<br/>2.5M</div>
                                            </td>
                                            <td className="risk0">
                                                Dec 17<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk5">
                                                Dec 18<br/>
                                                <div>7.5M<br/>2.5M</div>
                                            </td>
                                            <td className="risk0">
                                                Dec 19<br/>
                                                <div>5M</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="risk6">
                                                Dec 20<br/>
                                                <div>10M<br/>1</div>
                                            </td>
                                            <td className="risk0">
                                                Dec 21<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk6">
                                                Dec 22<br/>
                                                <div>10M<br/>1</div>
                                            </td>
                                            <td className="risk0">
                                                Dec 23<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk6">
                                                Dec 24<br/>
                                                <div>10M<br/>1</div>
                                            </td>
                                            <td className="risk0">
                                                Dec 25<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk6">
                                                Dec 26<br/>
                                                <div>10M<br/>1</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="risk6">
                                                Dec 27<br/>
                                                <div>10M<br/>1</div>
                                            </td>
                                            <td className="risk6">
                                                Dec 28<br/>
                                                <div>10M<br/>1</div>
                                            </td>
                                            <td className="risk0">
                                                Dec 29<br/>
                                                <div>5M</div>
                                            </td>
                                            <td className="risk0">
                                                Dec 30<br/>
                                                <div>5M</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                        <section className="text-left">
                            <h4 id="sec-2-2-3"><a href="/docs#sec-2-2-3">2.2.3</a>&nbsp;&nbsp;Reservation Referrals</h4>
                            <p>WISE合同具有直接的一级推荐系统，当用户在LT中保留WISE令牌时，该系统会同时奖励推荐人和被推荐人。此推荐系统是一种激励措施，可以帮助增加发送的ETH数量，从而为Uniswap上更大，更强大的初始流动资金池提供资金。
                            </p>
                            <p>当用户进行 <a href="/docs#sec-2-2-1">代币预订</a>, 前端界面检查他们的浏览器是否存储了引用cookie。如果存在这样的cookie，则合同会记录推荐人的以太坊地址，并将其与裁判的代币预订相关联。合同还将用户的代币预订标记为已通过引荐，并且该预订被认为比实际多了10％的ETH。当用户 <a href="/docs#sec-2-3-3">铸造他们的保留令牌</a> 在LT纪元结束之后，通过转介进行的每个令牌预留将比未通过转介进行的WISE产生10％的WISE。
                            </p>
                            <p>用户可以随时通过单击其他引荐来源链接来更改存储在其浏览器中的引荐cookie。如果他们这样做，他们将来的令牌保留将与新的引荐来源相关联。该用户过去的所有令牌保留均保持不变；他们的先前推荐人不会因其现有的推荐代币保留而失去信用。
                            </p>
                        </section>
                        <section className="text-left">
                            <h4 id="sec-2-2-3-1"><a href="/docs#sec-2-2-3-1">2.2.3.1</a>&nbsp;&nbsp;Referrer Bonuses</h4>
                            <p>当LT纪元结束时，通过其推荐用户令牌保留将足够的ETH推荐给系统的推荐人可以创建一些奖励WISE。
                            </p>
                            <p>LT推荐人奖励系统分为两个层次。奖金（以WISE支付）基于其推荐链接带给LT的总ETH数量：
                            </p>
                            <ul>
                                <li><i>1 - 49.999999999999999999 ETH</i>
                                    <br/><strong>红利= 0.05 ETH（以WISE支付）</strong>
                                </li>
                                <li><i>参考50个或更多的ETH</i>
                                    <br/><strong>奖金= ETH的10％（以WISE支付），以及&nbsp;
                                    <a href="/docs#sec-2-3-5-5">“CM邀请”</a> 状态</strong>
                                </li>
                            </ul>
                            <p>例子:</p>
                            <ul>
                                <li>爱丽丝指的是几个朋友，他们总共向LT发送了0.83 ETH。爱丽丝未能达到第一等级的最低要求，因此她没有赚到任何WISE奖金。
                                </li>
                                <li>Bob推荐了几个朋友，这些朋友总共向LT发送了3.6 ETH。鲍勃有资格获得第一级奖金，因此他获得了固定的0.05 ETH的WISE奖金。
                                </li>
                                <li>Eve创建了多个WISE视频，并在其上发布了她的推荐链接。单击她的引荐链接的用户将总共64 ETH发送到LT。夏娃有资格获得最高奖金级别，因此她获得了6.4 ETH的WISE以及永久性&nbsp;
                                    <a href="/docs#sec-2-3-5-5">“CM推荐人”</a> 状态.
                                </li>
                            </ul>
                            <p><i>注意：所有推荐奖金均以WISE支付。 LT结束时，通过查看所有用户发送的ETH总量以及可供预订的WISE总量，计算出LT WISE / ETH的有效总汇率。该比率然后用于计算每次推荐奖金的WISE金额.</i>
                            </p>
                        </section>
                        <section className="text-left">
                            <div className="app-page-title--heading text-left">
                                <h3 id="sec-2-3"><a href="/docs#sec-2-3">2.3</a>流通时代</h3>
                            </div>
                            <p>LT时代最后一天结束时，循环时代开始。此时，无法进行进一步的令牌保留。
                            </p>
                            <p><a href="/docs#sec-2-2-1">预留WISE</a>及<a href="/docs#sec-2-2-3-1">推荐人奖金WISE</a> 现在可以由用户随意创建。用户可以开始 <a href="/docs#sec-2-3-5">质押
                                WISE</a>. 发送到LT中的所有ETH的90％或更多，并自动匹配一批WISE <a href="/docs#sec-2-3-1">发送至
                                Uniswap</a>, 因此用户可以在那里开始交易WISE和ETH。所有 <a href="/docs#sec-2-4">标准ERC-20功能</a> 现在还可以使用涉及铸造令牌的产品。在发行纪元的第十五天开始时，将会有一次自动 <a href="/docs#sec-2-3-5-2">份额价格</a> 增加10％.
                            </p>
                            <p>一旦LT纪元结束，合同中就会有一个公共功能，任何人都可以调用它来触发以下一次性动作序列来启动Circulation纪元：
                            </p>
                            <ol>
                                <li>计算发送到LT的总ETH。预留10％或2,000 ETH，以较低者为准。 <a href="/docs#sec-2-3-2">基金会的报销</a> 在下面的步骤4中执行。该ETH剩余的90％（或更多）是 <strong>“Uniswap供Ether”</strong>.
                                </li>
                                <li>计算由于令牌保留和推荐人奖励而可铸造的总WISE。计算此WISE的相同分数（90％或更高），该分数在上面的步骤1中用于确定Uniswap储备醚。立即铸造新的WISE数量. 这是 <strong>“Uniswap条款WISE”</strong>.
                                </li>
                                <li>将“ Uniswap准备金醚”和“ Uniswap准备金WISE”转移到WISE / ETH Uniswap交换对合约，形成其初始流动资金池。作为此转移的一部分，WISE合同从Uniswap合同中收取一定数量的UNI-V2流动性代币，并通过将其转移到已知的烧录地址来立即进行烧制。
                                </li>
                                <li>将在步骤1中预留的LT ETH的10％（或更少）转移到The Wise Foundations以太坊地址。
                                </li>
                            </ol>
                        </section>
                        <section className="text-left">
                            <h4 id="sec-2-3-1"><a href="/docs#sec-2-3-1">2.3.1</a>&nbsp;&nbsp;Uniswap规定</h4>
                            <p>部署WISE合同时执行的WISE合同的构造函数将调用Uniswap V2工厂合同，以创建Uniswap WISE / ETH交换对合同。该新创建的交换合同的地址将在内部存储在WISE合同中
                            </p>
                            <p>这个新创建的Uniswap WISE / ETH交换对合约将一直处于休眠状态，直到循环纪元开始并且使用存储的地址执行Uniswap拨备。在此之前，没有铸造的WISE，因此在此之前无法添加流动性。
                            </p>
                            <p>作为向交换对合同发送Uniswap条款WISE和ETH的一部分，使用了UniswapV2Router合同，该合同在内部将ETH包装为WETH（包装的ETH），这是Uniswap V2中的标准。
                            </p>
                            <p>作为Uniswap设置交易的一部分，UniswapV2Router合同向WISE合同返回一定数量的UNI-V2流动性令牌。这些UNI-V2流动性代币代表WISE合同刚刚发送的流动性池的所有权，并且具有撤回该流动性的唯一权力。 WISE合同没有允许这种流动性提取的代码或功能。但是，作为Wise Foundation致力于使WISE成为完全不信任系统的承诺的进一步体现，WISE合同一经收到，将自动，不可撤销地销毁这些UNI-V2流动性代币。可以通过将它们转移到已知的“刻录地址”来完成，例如
                                <code>0x0</code>.
                            </p>
                            <p>Uniswap条款完成后，用户可以自由使用Uniswap的前端将WISE交换为ETH，反之亦然。他们还可以选择存入自己的WISE / ETH流动资金池，以从交易商那里收取费用。
                            </p>
                        </section>
                        <section className="text-left">
                            <h4 id="sec-2-3-2"><a href="/docs#sec-2-3-2">2.3.2</a>&nbsp;&nbsp;Wise的基金会报销</h4>
                            <p>在部署WISE合同之前，Wise基金会将确定其在开发和启动WISE中产生的总费用。这些将包括支付给开发人员的工资，支付给律师的费用，营销支出以及审计成本。
                            </p>
                            <p>该费用总额在合同源代码中表示为2,000 ETH的硬编码金额。
                            </p>
                            <p>当LT纪元关闭且循环纪元开始时，送入LT的总ETH将分为两个存储段：
                            </p>
                            <ul>
                                <li>LT ETH的10％（不超过2,000 ETH）
                                </li>
                                <li>所有剩余的LT ETH</li>
                            </ul>
                            <p>然后将10％（或更少）的ETH桶转移到The Wise Foundation拥有的以太坊地址。另一个存储桶（超过90％）被发送到Uniswap，为WISE创建第一个流动资金池。
                            </p>
                        </section>
                        <section className="text-left">
                            <h4 id="sec-2-3-3"><a href="/docs#sec-2-3-3">2.3.3</a>&nbsp;&nbsp;铸造币</h4>
                            <p>一旦LT时代结束并且流通时代已经开始，用户现在可以铸造WISE令牌，原因是&nbsp;
                                <a href="/docs#sec-2-2-1">LT时代保留了WISE</a> 或者拥有 <a href="/docs#sec-2-2-3-1">获得推荐奖金WISE</a>
                            </p>
                            <p>用户可以通过前端界面按批次完成WISE的铸造。该界面将显示用户可以创建多少WISE，并按预订和/或推荐奖金来源细分。用户可以立即铸造他们的WISE，也可以根据需要等待，而不会受到任何惩罚。
                            </p>
                            <p>用户可能希望尽快而不是稍后铸造他们的WISE，以便利用 <a href="/docs#sec-2-3-5">质押</a>他们赚取利息，等待的时间越长，利润就越少。
                            </p>
                        </section>
                        <section className="text-left">
                            <h4 id="sec-2-3-4"><a href="/docs#sec-2-3-4">2.3.4</a>&nbsp;&nbsp;供应膨胀</h4>
                            <p>WISE的总循环供应量以每年4％的恒定速度增长。在流通时代的每一天结束时，合同都会计算出该天需要铸造多少新的WISE，才能达到该通货膨胀率。
                            </p>
                            <pre><code>
                                                        totalWiseSupply = circulatingWise + stakedWise<br/>
                                                    dailyInflationRate = (1.04 ^ (1 / 365) - 1)<br/>
                                                dailyInflationRate =~ 0.0001074597820279<br/>
                                            <br/>
                                                        newWiseToday = totalWiseSupply × dailyInflationRate
                                                    </code></pre>
                            <p>这些新的每日通胀WISE不会立即产生。相反，它们专用于分发给两个方：四分之三（通货膨胀率3％）给所有活动方 <a href="/docs#sec-2-3-5-2">股份</a> 当天的
                                one quarter (1% inflation) to all active, qualified&nbsp;
                                <a href="/docs#sec-2-3-5-5">CM股份</a> 每个活跃的股份都被指定为该新WISE的一小部分，与该股份在当天总股份中所占的百分比成比例。指定给合格CM股份的WISE使用相同的分配方案。
                            </p>
                            <p>一个示例场景:</p>
                            <pre><code>
                                                        假设在第X天:<br/>
                                                    &nbsp;&nbsp;100,000,000 总流通WISE<br/>
                                                &nbsp;&nbsp;30,000,000 总质押 WISE<br/>
                                            &nbsp;&nbsp;10,000,000 总份额<br/>
                                        <br/>
                                                        然后，将在这一天生成的新WISE总数:<br/>
                                                        &nbsp;&nbsp;newWiseDayX = (100,000,000 + 30,000,000) ×
                                                        0.0001074597820279<br/>
                                                    &nbsp;&nbsp;newWiseDayX = 13,969.771663627 WISE<br/>
                                                <br/>
                                                        新的WISE分为两个部分:<br/>
                                                    &nbsp;&nbsp;四分之三的股份（即3％的通货膨胀率）<br/>
                                                &nbsp;&nbsp;CM股票四分之一（即1％的通胀率）<br/>
                                            <br/>
                                                        现在，假设用户A的有效股份为2,000,000股.<br/>
                                                    在第X天，此用户的股份将为此指定一些WISE:<br/>
                                                <br/>
                                                        &nbsp;&nbsp;userANewWiseDayX = newWiseDayX × (3/4) × stakeShares /
                                                        totalShares<br/>
                                                        &nbsp;&nbsp;userANewWiseDayX = 13,969.771663627 × (3/4) × 2,000,000 /
                                                        10,000,000<br/>
                                                    &nbsp;&nbsp;userANewWiseDayX = 2,095.46574954405 WISE<br/>
                                                    </code></pre>
                        </section>
                        <section className="text-left">
                            <h4 id="sec-2-3-5"><a href="/docs#sec-2-3-5">2.3.5</a>&nbsp;&nbsp;Staking</h4>
                            <p>WISE合同允许用户放样其WISE，将其锁定为几天内，以赚取利息。这是合同期间的主要功能 <a href="/docs#sec-2-3">流通时代</a>.
                            </p>
                            <p>用户可以随意打开任意数量的质押。股份达到完全到期后，用户可以随时将其关闭以收取其全部本金和利息，而不会受到罚款。
                            </p>
                            <p>与其他一些可抵押代币不同，WISE永远不会惩罚成熟的股权，无论最终关闭多久。这允许用户更多灵活性，特别是用于应税收入的目的。此外，如果用户在能够及时关闭股份之前就已经去世，那么WISE合同将仍然遵守各个司法管辖区的房地产法，这将使对死者财产的处罚成为非法。
                            </p>
                        </section>
                        <section className="text-left">
                            <h5 id="sec-2-3-5-1"><a href="/docs#sec-2-3-5-1">2.3.5.1</a>&nbsp;&nbsp;Opening Stakes</h5>
                            <p>当用户打开新质押时，他们选择要投放的WISE数量以及以天为单位的质押长。
                                最低保证金为0.000000000001 WISE（1000000 YODA）。
                                最小允许质押时间为1天， 最大允许质押时间为15330天（42年）。
                            </p>
                            <p>质押一旦打开，便处于“待定”状态。这意味着从技术上讲，直到第二天才开始抵押。用户可以关闭处于待处理状态的股份，收回股份本金，而不会受到罚款或利息。
                            </p>
                            <p>第二天开始时，待处理的赌注将变为“活动”状态。此时，在达到“成熟”状态之前关闭股份将产生罚款。
                            </p>
                            <p>开立质押后，注资的WISE代币实际上会被合同烧毁并转换为into&nbsp;
                                <a href="/docs#sec-2-3-5-2">“股份”</a>.  这些股份在股份存续期内一直存在。股份平仓后，股份将被销毁，WISE将被铸造回用户（以及增加的利息和扣除的罚款）。
                            </p>
                        </section>
                        <section className="text-left">
                            <h5 id="sec-2-3-5-2"><a href="/docs#sec-2-3-5-2">2.3.5.2</a>&nbsp;&nbsp;质押及利息</h5>
                            <p>开立质押后，其WISE本金将被燃烧并转换为质押，这些质押代表质押的大小和长度，以及间接表示质押的开立时间。新开立的质押获得的质押数量取决于WISE合同中跟踪的全球“质押”以及基于质押长度的百分比奖励。该质押只会上涨，因此早盘好于晚盘。
                            </p>
                            <p>每日通过WISE供应膨胀以及其他收益来赚取利息 <a href="/docs#sec-2-3-5-4">罚款</a> paid.
                                <a href="/docs#sec-2-3-4">WISE供应膨胀</a> 每年约4％。该通货膨胀的四分之三（即3％的年利率）每天分配给所有在职股票，并按其在总股本中所占的比例分配。剩余的四分之一（即1％的年利率）每天分配给<a href="/docs#sec-2-3-5-5">CM推荐人份额</a> 以同样的比例方式。
                            </p>
                            <p>根据所持质押的长度，将在由WISE的所持质押数量和当前质押确定的数量之上产生质押数量。奖金从一天质押的0％略高于0％到5年以上质押的25％线性增长。例如，将产生1.5年的质押
                                <code>1.5 * 5% = 7.5%</code> 红利分享.
                            </p>
                            <p>质押始于以
                                <code>质押收益收益</code>. 每当结清任何质押时，合同都会计算该质押的总回报（本金+利息-罚款）与其质押的比率。如果该比率大于当前质押，则质押将立即设置为该新的增加的价值。
                            </p>
                            <p>质押只会随着时间的流逝而增加，尽管相当缓慢。这样可以确保早先的质押比相同数量的WISE的以后的质押获得更多的质押。这质押上涨机制还阻止用户将自己的兴趣与一系列较小的质押相加，以试图胜过相同规模的单个多头质押。
                            </p>
                            <p>第十五天开始 <a href="/docs#sec-2-3">流通时代</a>, 一次性的股价将自动上涨10％。 这极大地刺激了用户在发行纪元的第前两周开立股份。 等到第十五天开立股份，您将获得与前一天相同数量的WISE股份，比前一天减少约9％的股份。 反过来，这意味着股份所赚取的利息大约减少了9％。
                            </p>
                        </section>
                        <section className="text-left">
                            <h5 id="sec-2-3-5-3"><a href="/docs#sec-2-3-5-3">2.3.5.3</a>&nbsp;&nbsp;废除质押的利息</h5>
                            <p>用户将能够从活跃的股份中提取（取消）任何赚取的利息（即在股份完全到期之前）
                            </p>
                            <p>用户可以准确选择希望刮取的利息，最高可以是最大利息（从前几天开始累积的所有未刮除的利息）。可以从有效股份中划掉权益在整个股份过程中进行多次。
                            </p>
                            <p>从有效股份的第二天开始就有可能产生刮擦利息。 在第1天（第一个活动日），股份尚未完成一整天的活动，因此尚未产生任何利息。
                            </p>
                            <p>当平仓股份时，无论是“活跃”还是“成熟”，回馈给用户的利息仅包括尚未清除的利息。
                            </p>
                            <p>削减利息不会影响股权的本金，但会减少股权的数量。 这实际上意味着，该股份在当前和所有将来的日子中所赚取的利息将比其他情况少一些。 如果用户选择立即重新获得自己的报废权益，这种份额减少还可以防止用户获得更多的总体份额。
                            </p>
                            <p>质押利息&nbsp;
                                <a href="/docs#sec-2-3-5-2">份额</a> 增加, 相当&nbsp;
                                <a href="/docs#sec-2-3-5-4">平仓</a>. 为了进行这些计算，利益攸关方准确地跟踪用户在股权交易过程中累积了多少累积的利息。 确定可能的股价上涨和股份数量减少的过程如下：
                            </p>
                            <p>首先，根据质押的假收益（本金加上到目前为止的所有报废利息，包括这次报废）除以质押的初始股份，计算可能的新股价：
                            </p>
                            <pre><code>
                                新的份额价格 = (质押本金 + 累计移除利息) / 质押初始份额
                            </code></pre>
                            <p>接下来，如果此新股价大于当前的全球股价，则更新全球股价（由于这种刮擦而可能刚刚增加）：
                            </p>
                            <pre><code>
                                如果(新的份额价格 &gt; 全份额价格) 全份额价格 = 新的份额价格
                            </code></pre>
                            <p>接下来，根据现在要清除的利息和全球股价，计算要从股份中删除的股份数量：
                            </p>
                            <pre><code>
                                                        移除质押份额 = 移除的利息 / 全质押价格
                                                    </code></pre>
                            <p>移除当前质押:</p>
                            <pre><code>
                                                        当前质押份额 = 质押份额 - 移除质押份额
                                                    </code></pre>
                        </section>
                        <section className="text-left">
                            <h5 id="sec-2-3-5-4"><a href="/docs#sec-2-3-5-4">2.3.5.4</a>&nbsp;&nbsp;关闭质押</h5>
                            <p>用户可以随时关闭股份。 根据桩的状态（桩在生命周期中的位置），会发生不同的事情：
                            </p>
                            <ul>
                                <li>关闭 <strong>准备</strong> 质押 - 质押被销毁。 整个质押本金被铸造回用户，没有利息或罚款。
                                </li>
                                <li>关闭 <strong>正活跃</strong> （未成熟质押）质押-质押被销毁。 质押本金将受到处罚（见下文），并与到目前为止累积的所有利息一起回铸给用户。
                                </li>
                                <li>关闭 <strong>到期的</strong> 质押 - 质押被销毁。 整个质押本金和所有累积的利息被铸造回用户。 不论成熟多久，关闭成熟股份都不会受到任何处罚。
                                </li>
                            </ul>
                            <p>在平仓有效股份时从本金（质押Wise）中扣除的罚款如下：
                            </p>
                            <pre><code>
                                                        如果质押为其一天:<br/>
                                                    &nbsp;&nbsp;惩罚金额=赌注明智×0.1<br/>
                                                <br/>
                                                        如果质押为两天或更长时间:<br/>
                                                        &nbsp;&nbsp;惩罚金额=赌注明智×（.1 + .8×（（天数-1）/（质押天数-1）））
                                                    </code></pre>
                            <p>因此，如果您在到期日的最后一天关闭了100天长的有效股权，则将对本金施加10％的罚款。 如果您在交易的第一天就关闭了相同的股份，您将受到90％的罚款。 惩罚在这两个极端之间线性缩放。
                            </p>
                            <p>任何从股份回报中受到惩罚的WISE都将被指定用于当天分配给所有活跃股份。 仅当这些股份中的每一个结束时，这些罚款分配才由这些股份的份额实现。
                            </p>
                        </section>
                        <section className="text-left">
                            <h5 id="sec-2-3-5-5"><a href="/docs#sec-2-3-5-5">2.3.5.5</a>&nbsp;&nbsp;质押邀请人</h5>
                            <p>正如WISE合同中包含推荐计划一样，该计划旨在激励用户以帮助将更多ETH纳入 <a href="/docs#sec-2-2">流动性变压器</a>, 它还提供了一个下注的推荐程序。
                            </p>
                            <p>当用户打开新的股份时，前端界面会检查浏览器是否具有引荐Cookie，就像制作引荐Cookie一样。 <a href="/docs#sec-2-2-1">代币预留</a> 在LT时代。 如果存在这样的cookie，并且新股份至少有365天，则合同会用推荐人的地址标记该新股份。
                            </p>
                            <p>推荐的股份可以为持股人带来10％的额外股份（超出了不被推荐的份额），以及为推荐人提供等量（但没有10％的红利）的“关键大众股份”（aka“ CM股份”） 。 系统范围的CM份额专用于每日通货膨胀WISE的四分之一，但仅适用于具有CM推荐人资格的推荐人。
                            </p>
                            <p>要获得成为CM推荐人的资格，用户必须在任何一天达到365天以上的当前活跃推荐股份的总价值为10,000美元。 如果用户满足此条件，则他们将立即被永久标记为CM推荐人，并且永远不会失去这种区别，无论其推荐人是否关闭所有赌注。
                            </p>
                            <p>拥有CM推荐人资格的另一种方法是，在推荐人中引用50 ETH的令牌预留 <a href="/docs#sec-2-2-3-1">LT时代的推荐系统</a>. 达到该级别的用户将自动永久获得CM推荐人的资格。
                            </p>
                            <p>开立股份后，仅计算一次新股份的美元价值。 用于计算的WISE / USD汇率将通过查询Uniswap WISE / ETH和ETH / DAI交易对合约的价格预付款接口来确定。
                            </p>
                        </section>
                        <section className="text-left">
                            <h4 id="sec-2-3-6"><a href="/docs#sec-2-3-6">2.3.6</a>&nbsp;&nbsp;流动资金提供者抵押</h4>
                            <p>WISE还有另外一种筹码方式，如果满足某些条件，可以奖励WISE / ETH对的流动性提供者。 如果WISE在Uniswap上的流动性百分比低于20％，则您可以将W代币与LP代币放在一起，并开始赚取利息（除了已经获得的交易费用外）。
                            </p>
                            <p>这笔新资金来自抵押人3％的通胀，因此，抵押人3％的通胀缓慢下降，有限合伙人的0％缓慢上升。 一旦触发，对于一定数量的人来说，购买有限合伙人将变得有价值，因为现在有新的资金可用于有限合伙人赚取每日利息。
                            </p>
                            <p>LP股份的额外好处是您可以随时结束股份并收集LP代币。 当Uniswap的流动资金回到30％以上时，回报逐渐开始减少。 固定通胀将回升至3％，LP通胀将回升至0％，直到再次触发。
                            </p>
                            <p>这是系统中的一种保障措施，很可能根本不会触发好几年。 用户仍然可以随时选择自己增加流动性，以从收费中获得大约6％的投资回报率，但是直到需要时，才触发股票利息的额外激励。
                            </p>
                        </section>
                        <section className="text-left">
                            <h3 id="sec-2-4"><a href="/docs#sec-2-4">2.4</a>&nbsp;&nbsp;ERC-20 Functionality</h3>
                            <p>WISE合同完全符合ERC-20代币标准，如 <a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md">EIP-20</a>.
                                这实际上是代币合约必须实现的一组功能，才能成为ERC-20代币。
                            </p>
                            <p>此ERC-20标准合规性意味着应用程序，网站，交易所和智能合约可以非常轻松地与WISE合约集成或在WISE合约之上构建。
                            </p>
                        </section>
                        <section className="text-left">
                            <br />
                            <h2 id="sec-3"><a href="/docs#sec-3">3</a>&nbsp;&nbsp;WISE生态系统</h2>
                        </section>
                        <section className="text-left">
                            <h5 id="sec-3-1"><a href="/docs#sec-3-1">3.1</a>&nbsp;&nbsp;邀请链接</h5>
                            <p className="aside">注意：WISE推荐链接和cookie系统&nbsp;
                                <strong>已上线!</strong> 您可以立即开始传播您的ref链接，并在合同发布之前就建立参考用户群。 因此，请帮自己一个忙，开始在所有地方传播您的ref链接！
                            </p>
                            <p>格式:
                                <code className="select-all">https://wisetoken.net/?w=YOURETHADDRESS</code>
                            </p>
                            <p>例子: <a href="https://wisetoken.net/?w=0x91143a01a6111ac86efBcc92Fc4f86c01c10AE9F">
                                Get 10% Bonus WISE!
                                </a>
                            </p>
                            <p>任何人都可以使用引荐链接将用户定向到WISE网站，此Teal Paper，即将发布的官方合同Web界面或网站上的任何其他页面。<a href="https://wisetoken.net/">wisetoken.net</a>&nbsp;
                                域或它的子域，以便可能从那些用户的合同互动中获得各种推荐奖励WISE。
                            </p>
                            <p>当用户单击这样的引用链接时，wisetoken.net网站会在其浏览器中存储一个cookie，其中包含来自引用链接的引用者的eth地址。 如果该用户以后将ETH发送给LT或开始至少持续一年的抵押，则cookie将使合同将该LT保留或抵押标记为该引荐人已转介。
                            </p>
                            <p>如果用户已经在其浏览器中拥有引荐cookie，然后单击其他引用链接，则该cookie将被第二个引用链接的以太坊地址覆盖。 因此，引荐是“最终点击获胜”。
                            </p>
                            <p>包含无效以太坊地址的引荐链接将不起作用； 网站将不会创建（或覆盖）cookie。
                            </p>
                        </section>
                        <section className="text-left">
                            <h2 id="sec-4"><a href="/docs#sec-4">4</a>&nbsp;&nbsp;结论</h2>
                            <p>Wise基金会真诚地希望，我们为广大民众提供一种不信任，分散化，计息的手段的努力将硕果累累，并且怀斯将取得巨大的成功。 但是，如果没有周围社区的帮助，我们就无法实现这些目标。
                            </p>
                            <p>WISE项目的开始并不是出于赢利的目的，而是出于创造对世界有用的东西的渴望。 我们希望该文件使我们的愿景和意图明确。
                            </p>
                            <p>我们欢迎您提出任何问题，意见或批评。 我们还需要对该项目的各种类型的贡献者。
                            </p>
                            <p>请加入我们的官方WISE电报群<a href="https://t.me/WiseToken">t.me/WiseToken</a> 与创始人，开发人员，支持者，评论家和社区其他成员讨论WISE项目。
                            </p>
                        </section>
                        <section className="text-left">
                            <h2 id="sec-5"><a href="/docs#sec-5">5</a>&nbsp;&nbsp;致谢</h2>
                            <p>Wise基金会衷心感谢以下一直致力于继续实现WISE和取得成功的人和团体：
                            </p>
                            <ul>
                                <li><strong><a href="https://twitter.com/haydenzadams">Hayden Adams</a> 及
                                    <a href="https://uniswap.org/">Uniswap的开发者</a></strong> —
                                    为您开发如此完美无瑕的开创性的去中心化交换协议，以及就如何最好地将WISE直接与其集成提供宝贵的建议。
                                </li>
                                <li><strong><a href="https://twitter.com/VitalikButerin">Vitalik Buterin</a>,&nbsp;
                                    <a href="https://gavwood.com/">Dr. Gavin Wood</a>,&nbsp;
                                    <a href="https://github.com/ethereum">et al.</a></strong> —
                                    您对以太坊平台的构想，指导和开发
                                </li>
                                <li><strong><a href="https://ethereum.org/">以太坊基金会</a></strong> —
                                    为以太坊生态系统中许多初期项目提供持续的财政支持。
                                </li>
                                <li><strong><a href="http://provable.xyz/">Provable Things Ltd.</a></strong> —
                                    适用于您功能齐全且可证明安全的区块链oracle合同和基于Ledger的随机数据源。
                                </li>
                                <li><strong><a href="https://openzeppelin.com/">OpenZeppelin</a></strong> —
                                    为您开发基本的Solidity智能合约界面和构件块。.
                                </li>
                                <li><strong><a href="https://www.trufflesuite.com/">Truffle区块链群</a></strong> — 为Truffle Suite的开发和支持提供帮助，该套件帮助加快并简化了WISE和许多其他智能合约，界面及其测试的开发。
                                </li>
                                <li><strong><a href="https://t.me/WiseToken">The WISE电报群</a></strong> —
                                    在设计和开发过程中，不断提供有价值的想法，建设性的批评，诚实的反馈，俏皮的玩笑和漫画的浮雕。
                                </li>
                                <li><strong><a href="https://www.coinfabrik.com/">CoinFabrik</a></strong> — 帮助您审核WISE合同Solidity源代码。
                                </li>
                                <li><strong><a href="https://99designs.com/profiles/OpayaCreative">Opaya
                                    Creative</a></strong> — 为您的WISE徽标，相关图像和品牌指南的清晰设计。
                                </li>
                                <li><strong><a href="https://www.upwork.com/">Upwork</a></strong> — 使有才华的开发人员的搜索减少了搜索量。
                                </li>
                                <li><strong><a href="https://coderpad.io/">编码器</a></strong> — 用于使开发人员筛选和采访能够顺利进行，并产生无法通过电话获得的详细技术见解。
                                </li>
                                <li><strong><a href="https://99designs.com/">99设计</a></strong> — 用于托管一个充满才华和渴望的设计师的光滑平台。
                                </li>
                                <li>白皮书采用&nbsp;
                                    <strong><a href="https://makerdao.com/purple/">DAI稳定代币白皮书的风格</a></strong>
                                </li>
                            </ul>
                        </section>
                        <section className="text-left">
                            <h2 id="sec-6"><a href="/docs#sec-6">6</a>&nbsp;&nbsp;Availability</h2>
                            <p>本文的网络版本托管在 <a href="/teal">https://wisetoken.net/teal/</a>.
                                其源代码保持在 <a href="https://github.com/wise-foundation/wise-website/tree/master/html/teal">https://github.com/wise-foundation/wise-website/tree/master/html/teal</a>.
                            </p>
                        </section>
                        <section className="text-left">
                            <h2 id="sec-7"><a href="/docs#sec-7">7</a>&nbsp;&nbsp;附录</h2>
                        </section>
                        <section className="text-left">
                            <h3 id="sec-7-1"><a href="/docs#sec-7-1">附录A</a>&nbsp;&nbsp;术语</h3>
                            <ul>
                                <li><strong>WISE</strong> — 本文所述的代币和合同。.</li>
                                <li><strong>YODA</strong> — WISE代币的基本单位，类似于ETH的wei或BTC的satoshi。 一WISE等于一百万亿YODA（1,000,000,000,000,000,000）。</li>
                                <li><a href="/docs#sec-2-3-5">Stake</a> — WISE的定期存款，随着时间的推移会赚取利息。
                                </li>
                                <li><a href="/docs#sec-2-2">流动性变压器</a> — 合同存在的头五十天，在此期间，用户可以存入以太坊以保留WISE初始供应的一部分。
                                </li>
                                <li><a href="/docs#sec-2-3">循环纪元</a> — LT纪元结束之后的纪元，在此期间，用户可以铸造他们在LT纪元中保留的代币，转移代币，抵押代币等。
                                </li>
                                <li><a href="/docs#sec-2-3-1">Uniswap</a> — 以太坊区块链上的去中心化非托管性ERC-20令牌和ETH交易所。 WISE合同直接与Uniswap集成。 关于Uniswap的一般信息是 <a href="https://uniswap.org/">此处</a>,
                                    Uniswap的交易链接为 <a href="https://uniswap.info/">此处</a>, 主要交易链接为 <a href="https://app.uniswap.org/">此处</a>.
                                </li>
                                <li><strong>ERC-20</strong> — 以太坊智能合约令牌的标准接口。 ERC代表“以太坊征求意见”。 可以找到描述ERC-20代币的原始EIP（以太坊改进提案） <a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md">这里</a>.
                                </li>
                            </ul>
                        </section>
                        <section className="text-left">
                            <h3 id="sec-7-2"><a href="/docs#sec-7-2">附录B</a>&nbsp;&nbsp;编码标准</h3>
                            <ul>
                                <li>WISE合同完全以Solidity编写，并使用solc 0.7.2进行编译。
                                </li>
                                <li>该代码应遵循由 <a href="https://solidity.readthedocs.io/en/v0.7.2/style-guide.html">指南</a> 官方部分 <a href="https://solidity.readthedocs.io/en/v0.7.2/">Solidity 0.7.2文档</a>.
                                </li>
                                <li>所有公共接口（至少）应使用 <a href="https://solidity.readthedocs.io/en/v0.7.2/natspec-format.html">NatSpec格式</a>.
                                </li>
                                <li>单元测试应提供100％的源代码覆盖率。 所有可能的边缘和角落情况都应覆盖。
                                </li>
                                <li>函数和变量名称应使用简明英语尽可能清楚，简洁地传达其目的和用法。 避免使用数字，不必要的缩写，首字母缩写词，速记或语。
                                </li>
                                <li>功能应尽可能短。 他们应该按照自己的名字所暗示的去做，而不是其他。 一条好的经验法则是，如果可能的话，一个函数应该试图在一个典型的监视器上以一个典型的字体大小整体上被查看。
                                </li>
                                <li>应当明智地使用评论。 不要发表评论以解释代码的作用。 好的函数和变量名将达到目的。
                                </li>
                                <li><code>需要()</code>函数调用应返回简短但描述性的错误消息，并始终以“ WISE：”为前缀。
                                </li>
                                <li>避免重复代码</li>
                                <li>尽可能以实用的方式优先考虑gas效率。 出于某些重要原因，该代码的某些部分可能会牺牲微小的gas效率。 当被认为具有更大的价值时，代码易读，结构简洁，简单易懂 具有全功能的最终用户体验
                                    应该优先于这种微小的gas节省。
                                </li>
                            </ul>
                        </section>
                        <section className="text-left">
                            <h3 id="sec-7-3"><a href="/docs#sec-7-3">附录C</a>&nbsp;&nbsp;源代码审核</h3>
                            <p>Wise Foundation已从以下机构获得了WISE合同Solidity源代码的有偿专业审核： <a href="https://www.coinfabrik.com/">CoinFabrik</a>, a
                                信誉良好的审计公司。 完整的审计报告如下。
                            </p>
                            <p>TL;DR - 审计师的结论是， &ldquo;<i>我们发现，尽管该项目显示出一定的复杂性，但代码编写得很好并且已考虑到安全性。提供的文档也非常有帮助，并且与未发现安全问题和唯一的非安全问题正确相关 团队很快解决了这个问题.</i>&rdquo;
                            </p>
                            <embed src="/Wise_Audit_Report.pdf" width="100%" height="800px" />
                        </section>
                        <section className="text-left">
                            <h2 className="centered" id="sec-8"><a href="/docs#sec-8">References</a></h2>
                            <p className="bib">Adams, H. (2020, February). <cite>Uniswap whitepaper.</cite> <a
                                href="https://hackmd.io/@Uniswap/HJ9jLsfTz">https://hackmd.io/@Uniswap/HJ9jLsfTz</a>
                            </p>
                            <p className="bib">Adams, H., Zinsmeister, N., Robinson, D. (2020, March). <cite>Uniswap
                                v2 core.</cite> <a
                                    href="https://uniswap.org/whitepaper.pdf">https://uniswap.org/whitepaper.pdf</a>
                            </p>
                            <p className="bib">Knightly Crypto. (2020, March). <cite>Wise token: Trustless
                                and easy interest-bearing crypto.</cite> <a
                                href="https://wisetoken.net/wise-token-white-paper.pdf">https://wisetoken.net/wise-token-white-paper.pdf</a>
                            </p>
                            <p className="bib">Mushegian, N., Brockman, D., Brockman, M. (2018, February 6). <cite>Reference
                                implementation of the decentralized DAI stablecoin issuance system.</cite> <a
                                    href="https://makerdao.com/purple/">https://makerdao.com/purple/</a>
                            </p>
                            <p className="bib">Oraclize. (n.d.). <cite>A scalable architecture for
                                on-demand, untrusted delivery of entropy.</cite> Retrieved March 22,
                                2020, from <a
                                    href="https://provable.xyz/papers/random_datasource-rev1.pdf">https://provable.xyz/papers/random_datasource-rev1.pdf</a>.
                            </p>
                            <p className="bib">Provable Things. (n.d.). <cite>Security deep dive.</cite> Provable
                                docs. Retrieved March 22, 2020, from <a
                                    href="https://docs.provable.xyz//docs#security-deep-dive">https://docs.provable.xyz//docs#security-deep-dive</a>
                            </p>
                            <p className="bib">Vogelsteller, F., &amp; Buterin, V. (2015, November). <cite>EIP-20:
                                ERC-20 token standard.</cite> <a
                                    href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md">https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md</a>
                            </p>
                            <p className="bib">Wood, G. (2019, October 20). <cite>Ethereum: A secure
                                decentralized generalised transaction ledger: Byzantium version
                                7e819ec.</cite> <a
                                href="https://ethereum.github.io/yellowpaper/paper.pdf">https://ethereum.github.io/yellowpaper/paper.pdf</a>
                            </p>
                            <p className="bib">Zhang, Y., Chen, X., &amp; Park, D. (2018, October). <cite>Formal
                                specification of constant product (x × y = k) market
                                maker model and implementation.</cite> <a
                                    href="https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf">https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf</a>
                            </p>
                        </section>
                    </Container>
                </div>
            </div>
        </PerfectScrollbar>        
        );
    }
}

export default ZHDOC;

