import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import PerfectScrollbar  from 'react-perfect-scrollbar';
class ENDOC extends Component {
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
                <div  className="docs-overflow-visible">
                    <div className="card-header rounded-0 bg-white px-0 px-lg-3 py-1 border-bottom">
                        <Container className="d-block text-center py-2 text-sm-left align-items-center justify-content-between docs">
                            <section className="text-center">
                                <div className="app-page-title--heading text-center">
                                    <h1>WISE Token Documentation</h1>
                                </div>
                            </section>
                            <section className="text-left">
                                <div className="app-page-title--heading text-left">
                                    <h2 id="sec-1"><a href="/docs#sec-1">1</a>&nbsp;&nbsp;Introduction</h2>
                                </div>
                                <p><strong>WISE Token</strong>, hereinafter referred to as <strong>WISE</strong>, is an
                                    ERC-20 compliant smart contract designed for deployment on the
                                    Ethereum blockchain. WISE is a decentralized,&nbsp;
                                    <a href="/docs#sec-2-2">fairly launched</a>,&nbsp;
                                    <a href="/docs#sec-2-3-1">automatically liquid</a>,&nbsp;
                                    <a href="/docs#sec-2-3-1">trustlessly exchangeable</a>,&nbsp;
                                    <a href="/docs#sec-2-3-5">interest-bearing</a>,&nbsp;
                                    <a href="/docs#sec-1-1">bond-like</a> token.
                                </p>
                                <p>This document is a general technical specification of the WISE contract and
                                    its functionality.
                                </p>
                                <p>Mainnet launch of the WISE contract is scheduled for <span className="nowrap">October
                                    8, 2020</span>.
                                </p>
                            </section>
                            <section className="text-left">
                                <div className="app-page-title--heading text-left">
                                    <h3 id="sec-1-1"><a href="/docs#sec-1-1">1.1</a>&nbsp;&nbsp;WISE Token Purpose</h3>
                                </div>
                                <p>The core purpose of the WISE token — <a href="/docs#sec-2-3-5">staking</a> — is similar to both
                                    bonds and CDs (certificates of deposit): rewarding the holder with
                                    earned interest in exchange for locking up their funds for a period of
                                    time. WISE incorporates some of the features from both of these
                                    traditional instruments but improves greatly upon them.
                                </p>
                                <p><strong>CDs</strong> tend to be lower risk, lower return, and only pay out
                                    interest on their maturity date.
                                </p>
                                <p><strong>Bonds</strong> tend to be somewhat higher
                                    risk, higher return, and pay out interest regularly on a set schedule
                                    (typically every six months).
                                </p>
                                <p><strong>WISE</strong> is most similar to a bond, in that it earns relatively high
                                    interest, but allows users to withdraw it whenever they want.
                                </p>
                                <strong>WISE is superior to bonds and CDs in every way:</strong>
                                <p>WISE gives the staker complete flexibility in choosing exactly when to&nbsp;
                                    <a href="/docs#sec-2-3-5-3">withdraw their interest</a> during
                                    the life of the stake. You can withdraw interest daily,
                                    irregularly, wait until maturity, or whatever you like!
                                </p>
                                <p>WISE stakes have higher return, much lower risk (due to being
                                    decentralized and trustless), and far higher flexibility than both bonds
                                    and CDs. No more trusting banks and governments to stay solvent and not change
                                    their rules. No more worrying that a bond issuer may default on you.
                                </p>
                                <p>WISE is pure, immutable code.</p>
                            </section>
                            <section className="text-left">
                                <div className="app-page-title--heading text-left">
                                    <h3 id="sec-1-2"><a href="/docs#sec-1-2">1.2</a>&nbsp;&nbsp;The Wise Foundation</h3>
                                </div>
                                <p>The Wise Foundation is an unincorporated nonprofit association formed in
                                    February 2020. The WISE contract and various <a href="/docs#sec-3">related software and websites</a> are
                                    being wholly funded and developed by The Wise Foundation.
                                </p>
                                <p>The Wise Foundation is dedicated to providing material through which
                                    anyone may understand the contract in depth. This is an important step
                                    towards fostering a high level of trust in the contract source code and
                                    its functionality, as not everyone has the means or will to digest the
                                    code.
                                </p>
                                <p>The WISE contract source code will be made public on
                                    <a href="https://github.com/wise-foundation">our Github</a> at
                                    launch. <a href="/docs#sec-7-3">A paid, professional audit of the
                                    WISE contract source code has been completed and included
                                    in this document</a>.
                                </p>
                                <p>If you have any questions, or would like to discuss the project with
                                    the founders, developers, and the rest of the community, please join the
                                    official WISE Telegram group at <a href="https://t.me/WiseToken">t.me/WiseToken</a>. We welcome all interested, respectful
                                    parties to our humble community. For various news releases related to
                                    WISE, please join the WiseTokenNews
                                    Telegram channel at <a href="https://t.me/WiseTokenNews">t.me/WiseTokenNews</a>
                                </p>
                            </section>
                            <section className="text-left">
                                <div className="app-page-title--heading text-left">
                                    <h3 id="sec-1-3"><a href="/docs#sec-1-3">1.3</a>&nbsp;&nbsp;Motivations and Principles</h3>
                                </div>
                                <p>Trusting your money in the custody of other humans is inherently risky.
                                    This glaring flaw in traditional financial instruments is a primary
                                    motivation for developing WISE. The WISE contract aims to ensure that
                                    a user can always be in full custody and control of their WISE tokens,
                                    even during the course of various economic activities.
                                </p>
                                <p>The <a href="/docs#sec-2-3-3">initial minting of WISE</a>, earning&nbsp;
                                    <a href="/docs#sec-2-2-3">referral bonuses</a>,&nbsp;
                                    <a href="/docs#sec-2-3-5-1">opening</a> and <a href="/docs#sec-2-3-5-4">closing stakes</a>,&nbsp;
                                    <a href="/docs#sec-2-3-5-4">receiving interest</a>, and even&nbsp;
                                    <a href="/docs#sec-2-3-1">selling WISE for ETH or other tokens</a>&nbsp;
                                    can all be done end-to-end without the user's WISE tokens ever being
                                    under the control of another person or system. Compare this to the world
                                    of banks you can('t) trust and traditional money managers that (don't)
                                    have your best interests at heart.
                                </p>
                                <p>One very important aspect of owning cryptocurrencies is having a place to
                                    safely, easily, and quickly trade them when the need arises. We believe
                                    Uniswap, a popular and highly regarded decentralized exchange (DEX)
                                    smart contract on Ethereum, is such a place. Following the fifty day <a href="/docs#sec-2-2">Liquidity Transformer Epoch</a>, the WISE contract will
                                    automatically, trustlessly, and irrevocably <a href="/docs#sec-2-3-1">bootstrap its own initial liquidity pool
                                    on Uniswap</a>. At least 90% of all ETH sent by users to the WISE
                                    contract during the LT Epoch will in turn be automatically transferred
                                    to Uniswap by the WISE contract, along with an amount of minted WISE in
                                    equal value.
                                </p>
                                <p>In exchange for and simultaneous to this liquidity pool deposit, Uniswap
                                    transfers to the WISE contract an appropriate amount of UNI liquidity
                                    tokens, which carry the sole power to later withdraw that liquidity
                                    pool. The WISE contract will automatically, immediately, and provably
                                    destroy these UNI tokens by transferring them to a known burn address.
                                    In doing so, the WISE contract ensures that this initial ETH/WISE
                                    liquidity pool cannot be withdrawn from Uniswap by any person, party,
                                    contract, or entity — for all eternity.
                                </p>
                                <p>The WISE contract also allows users to earn interest on WISE token time
                                    deposits called <a href="/docs#sec-2-3-5">stakes</a>, which are most similar
                                    to bonds, but more flexible. A stake earns interest like a bond, but
                                    with the added feature of allowing interest withdrawals at any time
                                    during the life of the stake; not something bonds allow. These bond-like
                                    interest-bearing stakes in WISE are always fully in the custody of the
                                    user and their wallet, never held, influenced, or able to be confiscated
                                    by any third party.
                                </p>
                            </section>
                            <section className="text-left">
                                <div className="app-page-title--heading text-left">
                                    <h2 id="sec-2"><a href="/docs#sec-2">2</a>&nbsp;&nbsp;WISE Contract Functionality</h2>
                                </div>
                                <p>The WISE contract has several key properties and core functions,
                                    outlined in detail in the following sections. Some of the important
                                    mathematical calculations and data structures are also presented here.
                                    Various example scenarios of user and multi-user activity and contract
                                    state evolution are illustrated where appropriate.
                                </p>
                            </section>
                            <section className="text-left">
                                <div className="app-page-title--heading text-left">
                                    <h2 id="sec-2-1"><a href="/docs#sec-2-1">2.1</a> General Properties</h2>
                                </div>
                                <p>The contract defines the token name as <code>"WISE Token"</code>, the
                                    token symbol as <code>"WISE"</code>, and the number of decimals as
                                    <code>18</code>.
                                </p>
                                <p>The base unit of WISE is called <code>YODA</code>. One WISE is composed
                                    of one quintillion (1 × 10<sup>18</sup>) YODA.
                                </p>
                                <p>Time is tracked by the contract in whole day increments, beginning at Day
                                    <code>0</code>, which starts at the midnight UTC preceding the contract
                                    deployment. The individual days used for the <a href="/docs#sec-2-2">LT Epoch</a> will be higher day
                                    numbers in the code, rather than literally being day numbers
                                    1–50.
                                </p>
                                <p>The contract has no special functionality granted to the deploying
                                    account, no administrative keys, and no concept of a contract owner. All
                                    users, including the founders and developers, have precisely equal
                                    access to the contract's functionality.
                                </p>
                                <p>The contract, once deployed, is immutable. No proxy or delegate contracts
                                    are involved.
                                </p>
                            </section>
                            <section className="text-left">
                                <div className="app-page-title--heading text-left">
                                    <h4 id="sec-2-1-1"><a href="/docs#sec-2-1-1">2.1.1</a> Token Supply</h4>
                                </div>
                                <p>The contract has no set token supply. The total initial supply minted by
                                    users through the <a href="/docs#sec-2-2">Liquidity Transformer</a> will
                                    fall within a defined range, determined partially by confined
                                    randomness, and partially by <a href="/docs#sec-2-2-3">referral bonuses</a>.
                                </p>
                                <p>The 50 day Liquidity Transformer has an average of five million WISE
                                    available each day, though some days have randomness involved.
                                    This means the total supply available in the LT will likely be around 250
                                    million WISE. Due to referrer bonuses, there could be up to an
                                    additional 10% minted on top of that (i.e. up to 25 million more).
                                </p>
                                <p>This total supply is then matched by a minted batch that is
                                    then <a href="/docs#sec-2-3-1">sent permanently to Uniswap</a>. The amount
                                    of WISE sent to Uniswap will be up to 10% less than what was mintable
                                    through the LT and referral bonuses, due to the foundation reimbursement
                                    ETH. Regardless, the ratio of WISE/ETH sent to Uniswap will match
                                    exactly the ratio of mintable LT WISE (including referral bonus WISE) to
                                    LT ETH. This ensures that the initial Uniswap price matches the overall
                                    price of the LT.
                                </p>
                                <p>The total supply of WISE in existence after the LT and Uniswap provision is
                                    subject to LT randomness, referral activity, and whether the foundation
                                    reimbursement ends up being a full 10% or less due to the hardcoded cap.
                                </p>
                                <p>For example, if we assume the randomness averages out, assume half of
                                    all possible referrer bonuses are earned, and assume the foundation
                                    reimbursement cap causes it to be only 5% of the LT ETH, then the total
                                    initial supply would be:
                                </p>
                                <pre><code>
                                    baseLTSupply = 250,000,000 WISE<br/>
                                    referrerBonuses = baseLTSupply * 5% = 12,500,000 WISE<br/>
                                    totalLTSupply = baseLTSupply + referrerBonuses = 262,500,000 WISE<br/>
                                    uniswapBatch = totalLTSupply * 95% = 249,375,000 WISE<br/>
                                    <br/>
                                    totalInitialSupply = totalLTSupply + uniswapBatch = 511,875,000 WISE
                                </code></pre>
                                <p>Though extremely unlikely (virtually impossible), the absolute minimum
                                    possible total initial supply (all random days get their minimum values,
                                    no referral bonuses, and a low enough LT ETH total that makes the
                                    foundation reimbursement exactly 10%) would be:
                                </p>
                                <pre><code>
                                    baseLTSupply = 180,000,010 WISE<br/>
                                    referrerBonuses = baseLTSupply * 0% = 0 WISE<br/>
                                    totalLTSupply = baseLTSupply + referrerBonuses = 180,000,010 WISE<br/>
                                    uniswapBatch = totalLTSupply * 90% = 162,000,009 WISE<br/>
                                    <br/>
                                    totalInitialSupply = totalLTSupply + uniswapBatch = 342,000,019 WISE
                                </code></pre>
                                <p>Though equally unlikely (virtually impossible), the absolute maximum
                                    possible total initial supply (all random days get their maximum values,
                                    maximum referral bonuses, and a high LT ETH total that makes the
                                    foundation reimbursement approach 0%) would be:
                                </p>
                                <pre><code>
                                    baseLTSupply = 319,999,990 WISE<br/>
                                    referrerBonuses = baseLTSupply * 10% = 31,999,999 WISE<br/>
                                    totalLTSupply = baseLTSupply + referrerBonuses = 351,999,989 WISE<br/>
                                    uniswapBatch = totalLTSupply * ~100% = 351,999,989 WISE<br/>
                                    <br/>
                                    totalInitialSupply = totalLTSupply + uniswapBatch = 703,999,978 WISE
                                </code></pre>
                                <p>The total token supply will <a href="/docs#sec-2-3-4">inflate at a
                                    rate of 4% per year</a>, starting once the Liquidity Transformer
                                    Epoch ends and the <a href="/docs#sec-2-3">Circulation Epoch</a> begins. Some of the new
                                    tokens will be minted directly to stakers upon <a href="/docs#sec-2-3-5-4">closing a stake</a>, and some minted to <a href="/docs#sec-2-3-5-5">stake referrers</a>. If no stakes are closed
                                    on a given day, and no stakes scrape interest on that day,, no new tokens
                                    are actually minted that day, though they are earmarked to be minted later.
                                    Once a stake is closed, all tokens the stake had earmarked to it for all
                                    past days are then minted at once.
                                </p>
                            </section>
                            <section className="text-left">
                                <div className="app-page-title--heading text-left">
                                    <h3 id="sec-2-2"><a href="/docs#sec-2-2">2.2</a> Liquidity Transformer Epoch</h3>
                                </div>
                                <p>The launch of the WISE contract will kick off an initial 50 day phase
                                    during which users may send ETH (or any ERC-20 token traded on Uniswap V2) to the contract in order to reserve
                                    WISE tokens. The tokens reserved can be <a href="/docs#sec-2-3-3">minted by the users</a> immediately following
                                    the end of the LT Epoch, i.e. the start of day 51.
                                </p>
                                <p>Each day of the LT Epoch will have an amount of WISE tokens that are
                                    reservable by all those who deposit ETH to that day. Most days will
                                    have exactly five million WISE available, but the other days will have
                                    their available WISE amount randomly set within a predefined range.
                                    These random amounts will be determined by the contract shortly after
                                    the end of each random day, by leveraging the <a href="https://provable.xyz/">Provable</a> (formerly called
                                    “Oraclize”) smart contract's Random Datasource interface. The generated
                                    randomness is delivered on-chain in a trustless and provably
                                    cryptographically secure manner. For more detailed information about
                                    Provable, please read their <a href="https://provable.xyz/papers/random_datasource-rev1.pdf">random
                                    datasource white paper</a> and their <a href="https://docs.provable.xyz/#security-deep-dive">security deep
                                    dive</a>.
                                </p>
                                <p>Each day's available WISE ends up getting split amongst the users who
                                    deposited ETH to that day, in direct proportion. In other words, a
                                    user that made a reservation on a particular LT day will later be able
                                    to mint the fraction of that day's available WISE that equals the
                                    fraction of the day's total ETH they personally sent in.
                                </p>
                            </section>
                            <section className="text-left">
                                <div className="app-page-title--heading text-left">
                                    <h4 id="sec-2-2-1"><a href="/docs#sec-2-2-1">2.2.1</a> Token Reservation</h4>
                                </div>
                                <p>On any given day of the LT Epoch, users may choose to send ETH (or any ERC-20 token traded on Uniswap V2) to the
                                    contract and assign it to any of the LT Epoch days that have not yet
                                    concluded. We call this action a “token reservation”.
                                </p>
                                <p>For example, during day 12, users may send and assign ETH to any of the
                                    days 12–50, but not to days 1–11, since those days have already
                                    concluded.
                                </p>
                                <p>Each token reservation is assigned to a single day, but users may make as
                                    many such reservations as they wish, to as many different days as they
                                    wish.
                                </p>
                                <p>The WISE contract front end will also include the ability for a user to
                                    spread a single reservation amount of ETH (or ERC-20) evenly across all
                                    remaining LT days. This &ldquo;dollar cost averaging&rdquo; feature
                                    saves gas for the user who wishes to reserve an equal part of each LT
                                    day.
                                </p>
                                <p>Reservations can be made with ETH, but also with any ERC-20 token that's
                                    traded on Uniswap V2. This
                                    is done via direct integration with Uniswap, which swaps the ERC-20
                                    for ETH as part of the reservation transaction. This is functionally
                                    the same as the users themselves swapping the ERC-20 for ETH on Uniswap,
                                    and then later sending the ETH to the WISE contract for a token
                                    reservation. The benefit of using the WISE reservation interface to do
                                    this is that it saves the user some gas fees and time.
                                </p>
                                <p>Each single token reservation must be of a minimum ETH amount, to make
                                    spam attacks cost-prohibitive. The specific minimum amount will be
                                    finalized at a later date, closer to launch. This is because the price
                                    of ETH may change significantly between the time of this writing and
                                    the contract launch. The minimum will likely be in the neighborhood of
                                    $10 worth of ETH.
                                </p>
                                <p>The contract will provide public interfaces for viewing the total amount
                                    of ETH currently assigned to each LT Epoch day across all users, as
                                    well as the total WISE available for each day (where that supply has
                                    been determined, in the case of random days). For days where the supply
                                    has not yet been finalized, the min/max range will also be retrievable
                                    from the contract.
                                </p>
                            </section>
                            <section className="text-left">
                                <div className="app-page-title--heading text-left">
                                    <h4 id="sec-2-2-2"><a href="/docs#sec-2-2-2">2.2.2</a> Daily LT Supply Schedule</h4>
                                </div>
                                <p>Every LT day has an average of five million WISE available for
                                    reservation. Some of the days with randomly determined amounts have
                                    tight ranges only a few hundred million WISE in variance, and others are
                                    extremely variant, ranging from a single WISE to ten million WISE
                                    (technically 9,999,999 WISE, in order to preserve a strict average
                                    of five million per day). In this way, the LT Epoch provides various
                                    exciting options for users wishing to gamble with their ETH, and at
                                    various levels of risk/reward.
                                </p>
                                <p>The following table outlines how many WISE will be available for user
                                    reservation on each day of the LT Epoch. Most days have exactly five
                                    million WISE available. The rest show two supply values: the minimum and
                                    maximum available that day. Each day is color coded for relative risk
                                    level, from <span className="no-risk">none</span> to <span className="high-risk">high</span>):
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
                                <p>The WISE contract has a direct, one-level referral system that rewards
                                    both the referrer and referee when a user reserves WISE tokens in the
                                    LT. This referral system is an incentive to help increase the amount of
                                    ETH sent in, in turn funding a larger and more robust initial
                                    liquidity pool on Uniswap.
                                </p>
                                <p>When a user makes a <a href="/docs#sec-2-2-1">token reservation</a>, the front-end interface
                                    checks if their browser has a referral cookie stored. If such a cookie
                                    is present, the contract makes note of the referrer's ethereum address
                                    and associates it with the referee's token reservation. The contract
                                    also tags the user's token reservation as having been through a
                                    referral, and this reservation is credited as having been 10% more
                                    ETH than it actually was. When the user <a href="/docs#sec-2-3-3">mints
                                    their reserved tokens</a> after the end of the LT Epoch, each token
                                    reservation that was through a referral will thus mint 10% more WISE
                                    than if it hadn't been through a referral.
                                </p>
                                <p>Users may change the referral cookie stored in their browser at any time
                                    by clicking another referrer's link. If they do, their future token
                                    reservations would be associated with the new referrer. All past token
                                    reservations for that user remain as is; their previous referrer(s) do
                                    not lose credit for their existing referred token reservations.
                                </p>
                            </section>
                            <section className="text-left">
                                <h4 id="sec-2-2-3-1"><a href="/docs#sec-2-2-3-1">2.2.3.1</a>&nbsp;&nbsp;Referrer Bonuses</h4>
                                <p>When the LT Epoch ends, referrers that have referred enough ETH into
                                    the system, via their referred users token reservations, can then mint
                                    an amount of bonus WISE.
                                </p>
                                <p>The LT referrer bonus system has two tiers. Bonuses (paid in WISE) are
                                    based on how much total ETH their referral link brought in to the
                                    LT:
                                </p>
                                <ul>
                                    <li><i>Refer 1 - 49.999999999999999999 ETH</i>
                                        <br/><strong>Bonus = 0.05 ETH (paid in WISE)</strong>
                                    </li>
                                    <li><i>Refer 50 or more ETH</i>
                                        <br/><strong>Bonus = 10% of ETH (paid in WISE), and&nbsp;
                                        <a href="/docs#sec-2-3-5-5">“CM Referrer”</a> status</strong>
                                    </li>
                                </ul>
                                <p>Examples:</p>
                                <ul>
                                    <li>Alice refers a few friends who, in total, send 0.83
                                        ETH into the LT. Alice fails to reach the 1 eth minimum for
                                        the first tier, so she earns no bonus WISE.
                                    </li>
                                    <li>Bob refers several friends who, in total, send 3.6 ETH into the
                                        LT. Bob qualifies for the first bonus tier, so he earns a flat
                                        bonus of 0.05 ETH worth of WISE.
                                    </li>
                                    <li>Eve creates several WISE videos and publishes her referral link on
                                        them. Users clicking her referral link send a total
                                        of 64 ETH in to the LT. Eve qualifies for the top bonus
                                        tier, so she earns 6.4 ETH worth of WISE, as well as permanent&nbsp;
                                        <a href="/docs#sec-2-3-5-5">“CM Referrer”</a> status.
                                    </li>
                                </ul>
                                <p><i>Note: all referral bonuses are paid in WISE. When the LT ends,
                                    an effective total LT WISE/ETH exchange rate is calculated by looking
                                    at the total amount of ETH sent in by all users, and the total amount
                                    of WISE made available for reservation. This ratio is then used to
                                    calculate the amount of WISE for each referral bonus.</i>
                                </p>
                            </section>
                            <section className="text-left">
                                <div className="app-page-title--heading text-left">
                                    <h3 id="sec-2-3"><a href="/docs#sec-2-3">2.3</a> Circulation Epoch</h3>
                                </div>
                                <p>When the final LT Epoch day ends, the Circulation Epoch begins. At this
                                    point, no further token reservations can be made.
                                </p>
                                <p><a href="/docs#sec-2-2-1">Reserved WISE</a> and <a href="/docs#sec-2-2-3-1">referrer bonus WISE</a> may now be minted
                                    by users, at their leisure. Users may begin <a href="/docs#sec-2-3-5">staking
                                    WISE</a>. 90% or more of all ETH sent into the LT and a matching
                                    batch of WISE is automatically <a href="/docs#sec-2-3-1">sent to
                                    Uniswap</a>, so users may begin trading WISE and ETH there. All <a href="/docs#sec-2-4">standard ERC-20 functions</a> involving
                                    minted tokens are also now available. At the start of the fifteenth day
                                    of the Circulation Epoch, there will be a one-time automatic <a href="/docs#sec-2-3-5-2">share price</a> increase of 10%.
                                </p>
                                <p>Once the LT Epoch has ended, there is a public function in the contract
                                    that may be called by anyone to trigger the following one-time sequence
                                    of actions to start the Circulation Epoch:
                                </p>
                                <ol>
                                    <li>Calculate the total ETH sent into the LT. Set aside 10% or 2,000 ETH,
                                        whichever is less, for the <a href="/docs#sec-2-3-2">Wise Foundation reimbursement</a> performed in Step 4 below.
                                        The remaining 90% (or more) of this ETH is the <strong>“Uniswap
                                        Provision Ether”</strong>.
                                    </li>
                                    <li>Calculate the total WISE that is available to be minted due to token
                                        reservations and referrer bonuses. Calculate the same
                                        fraction of this WISE (90% or more) that was used to determine the
                                        Uniswap Provision Ether in Step 1 above. Immediately mint this
                                        amount of new WISE. This is the <strong>“Uniswap Provision
                                        WISE”</strong>.
                                    </li>
                                    <li>Transfer the “Uniswap Provision Ether” and “Uniswap Provision WISE”
                                        to the WISE/ETH Uniswap exchange pair contract, forming its
                                        initial liquidity pool. As part of this transfer, the WISE contract
                                        receives back from the Uniswap contract an amount of UNI-V2
                                        liquidity tokens and immediately burns these by transferring them
                                        to a known burn address.
                                    </li>
                                    <li>Transfer the 10% (or less) of LT ETH set aside in Step 1 to The
                                        Wise Foundations ethereum address.
                                    </li>
                                </ol>
                            </section>
                            <section className="text-left">
                                <h4 id="sec-2-3-1"><a href="/docs#sec-2-3-1">2.3.1</a>&nbsp;&nbsp;Uniswap Provision</h4>
                                <p>The WISE contract's constructor function, executed when deploying the
                                    WISE contract, will make a call to the Uniswap V2 factory contract in
                                    order to create the Uniswap WISE/ETH exchange pair contract. This
                                    newly created exchange contract's address will be stored internally
                                    in the WISE contract.
                                </p>
                                <p>This newly created Uniswap WISE/ETH exchange pair contract will simply
                                    lie dormant until the Circulation Epoch begins and the Uniswap provision
                                    transfer is executed, using the stored address. No minted WISE exists
                                    until that point, so no liquidity can be added until then.
                                </p>
                                <p>As part of sending the Uniswap provision WISE and ETH to the exchange
                                    pair contract, a UniswapV2Router contract is used, which internally
                                    wraps the ETH into WETH (wrapped ETH), as is standard in Uniswap
                                    V2.
                                </p>
                                <p>The UniswapV2Router contract returns an amount of UNI-V2 liquidity tokens
                                    to the WISE contract as part of the Uniswap provision transaction. These
                                    UNI-V2 liquidity tokens represent ownership of the liquidity pool the
                                    WISE contract just sent in, and carry the sole power to withdraw that
                                    liquidity. The WISE contract has no code or function allowing such
                                    a liquidity withdrawal. However, as a further show of The Wise
                                    Foundation's commitment to making WISE a totally trustless system, the
                                    WISE contract will automatically and irrevocably destroy these UNI-V2
                                    liquidity tokens upon receipt. This is done by transferring them to a
                                    known “burn address”, such as
                                    <code>0x0</code>.
                                </p>
                                <p>Once the Uniswap provision is complete, users are free to use Uniswap's
                                    front end to swap WISE into ETH, and vice-versa. They may also choose
                                    to deposit their own liquidity pools of WISE/ETH in order to earn
                                    fees from traders.
                                </p>
                            </section>
                            <section className="text-left">
                                <h4 id="sec-2-3-2"><a href="/docs#sec-2-3-2">2.3.2</a>&nbsp;&nbsp;Wise Foundation Reimbursement</h4>
                                <p>Prior to deploying the WISE contract, The Wise Foundation will determine
                                    its total expenses incurred in developing and launching WISE. These will
                                    include wages paid to developers, fees paid to lawyers, marketing spend,
                                    and the cost of the audit.
                                </p>
                                <p>This expense total is represented in the contract source code
                                    as a hardcoded amount of 2,000 ETH.
                                </p>
                                <p>When the LT Epoch closes and the
                                    Circulation Epoch begins, the total ETH sent into the LT gets
                                    divided into two buckets:
                                </p>
                                <ul>
                                    <li>10% of the LT ETH (not to exceed 2,000 ETH)
                                    </li>
                                    <li>All remaining LT ETH</li>
                                </ul>
                                <p>The 10% (or less) bucket of ETH is then transferred to an ethereum
                                    address owned by The Wise Foundation. The other bucket (90%+) is sent
                                    to Uniswap to create the first liquidity pool for WISE.
                                </p>
                            </section>
                            <section className="text-left">
                                <h4 id="sec-2-3-3"><a href="/docs#sec-2-3-3">2.3.3</a>&nbsp;&nbsp;Minting Tokens</h4>
                                <p>Once the LT Epoch has ended and the Circulation Epoch has begun, users
                                    may now mint WISE tokens, either due to having&nbsp;
                                    <a href="/docs#sec-2-2-1">reserved WISE in the LT Epoch</a> or
                                    having <a href="/docs#sec-2-2-3-1">earned referral bonus WISE</a>, or
                                    both.
                                </p>
                                <p>The minting of WISE is done on-demand by the user, in a single batch,
                                    through the front-end interface. The interface will show how many WISE
                                    the user can mint, broken down by reservation and/or referral bonus
                                    sources. Users may mint their WISE immediately, or wait as long as they
                                    like, without penalty.
                                </p>
                                <p>Users will likely want to mint their WISE sooner rather than later
                                    in order to take advantage of <a href="/docs#sec-2-3-5">staking</a> them to earn interest,
                                    which becomes less profitable the longer one waits.
                                </p>
                            </section>
                            <section className="text-left">
                                <h4 id="sec-2-3-4"><a href="/docs#sec-2-3-4">2.3.4</a>&nbsp;&nbsp;Supply Inflation</h4>
                                <p>The total circulating supply of WISE inflates at a constant rate of 4%
                                    per year. At the end of every day of the Circulation Epoch, the contract
                                    calculates how many new WISE will need to be minted for that day in
                                    order to achieve that rate of inflation.
                                </p>
                                <pre><code>
                                                            totalWiseSupply = circulatingWise + stakedWise<br/>
                                                        dailyInflationRate = (1.04 ^ (1 / 365) - 1)<br/>
                                                    dailyInflationRate =~ 0.0001074597820279<br/>
                                                <br/>
                                                            newWiseToday = totalWiseSupply × dailyInflationRate
                                                        </code></pre>
                                <p>These new daily inflation WISE are not immediately minted. Instead, they
                                    are earmarked for distribution to two parties: three quarters (3% inflation) to all
                                    active <a href="/docs#sec-2-3-5-2">stake shares</a> on that day, and
                                    one quarter (1% inflation) to all active, qualified&nbsp;
                                    <a href="/docs#sec-2-3-5-5">CM shares</a> that day. Each active stake is
                                    earmarked a fraction of this new WISE in proportion to the stake's
                                    shares percentage of the total share pool that day. The same
                                    apportionment scheme is used for the WISE earmarked to qualified CM
                                    shares.
                                </p>
                                <p>An example scenario:</p>
                                <pre><code>
                                                            On day X, suppose there are:<br/>
                                                        &nbsp;&nbsp;100,000,000 total circulating WISE<br/>
                                                    &nbsp;&nbsp;30,000,000 total staked WISE<br/>
                                                &nbsp;&nbsp;10,000,000 total shares<br/>
                                            <br/>
                                                            The total new WISE that will be generated this day is then:<br/>
                                                            &nbsp;&nbsp;newWiseDayX = (100,000,000 + 30,000,000) ×
                                                            0.0001074597820279<br/>
                                                        &nbsp;&nbsp;newWiseDayX = 13,969.771663627 WISE<br/>
                                                    <br/>
                                                            This new WISE is split into two amounts:<br/>
                                                        &nbsp;&nbsp;three quarters for stake shares (i.e. 3% inflation)<br/>
                                                    &nbsp;&nbsp;one quarter for CM shares (i.e. 1% inflation)<br/>
                                                <br/>
                                                            Now, suppose user A has an active stake that is 2,000,000 shares.<br/>
                                                        On day X, this user's stake then gets some WISE earmarked for it:<br/>
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
                                <p>The WISE contract allows users to stake their WISE, locking it up for a
                                    period of days, in order to earn interest. This is the primary function
                                    of the contract during the <a href="/docs#sec-2-3">Circulation Epoch</a>.
                                </p>
                                <p>Users may open as many stakes as they like. After a stake reaches full
                                    maturity, the user may close it at any time to receive their full
                                    principal, plus interest, without penalty.
                                </p>
                                <p>Unlike some other stakeable tokens, WISE never penalizes a mature stake,
                                    no matter how late it is eventually closed. This allows users much more
                                    flexibility, especially for taxable income purposes. Also, should a user
                                    pass away before being able to close their stakes in a timely fashion,
                                    the WISE contract thus remains in compliance with estate laws of various
                                    jurisdictions that make it illegal to penalize the assets of a deceased
                                    person.
                                </p>
                            </section>
                            <section className="text-left">
                                <h5 id="sec-2-3-5-1"><a href="/docs#sec-2-3-5-1">2.3.5.1</a>&nbsp;&nbsp;Opening Stakes</h5>
                                <p>When a user opens a new stake, they choose an amount of WISE to stake,
                                    and a stake length in days. The minimum stake amount is 0.000000000001
                                    WISE (1000000 YODA). The minimum stake length is one day, and the
                                    maximum stake length is 15,330 days (just under 42 years).
                                </p>
                                <p>Once a stake is opened, it is in “Pending” status. This means
                                    that the stake won't technically begin until the following day. A user
                                    may close a stake in Pending status, receiving back the stake's
                                    principal, without penalty or interest.
                                </p>
                                <p>Pending stakes become “Active” status once the next day begins. At this
                                    point, closing the stake before it reaches “Mature” status will incur a
                                    penalty.
                                </p>
                                <p>When a stake is opened, the WISE tokens staked are actually burned by the
                                    contract and converted into&nbsp;
                                    <a href="/docs#sec-2-3-5-2">“shares”</a>.  These shares exist for
                                    the life of the stake. Once the stake is closed, the shares are
                                    destroyed, and WISE is minted back to the user (along with any interest
                                    added and penalties deducted.
                                </p>
                            </section>
                            <section className="text-left">
                                <h5 id="sec-2-3-5-2"><a href="/docs#sec-2-3-5-2">2.3.5.2</a>&nbsp;&nbsp;Shares and Interest</h5>
                                <p>When a stake is opened, its WISE principal is burned and converted into shares.
                                    These shares represent the stake size and length as well as, indirectly, how early
                                    the stake was opened. The amount of shares a newly opened stake gets is
                                    determined by a global “share price” tracked in the WISE contract, as
                                    well as a percentage bonus based on the length of the stake. This share
                                    price only increases, hence staking earlier is better than later.
                                </p>
                                <p>Stakes earn interest daily through the WISE supply inflation, as well as
                                    from other <a href="/docs#sec-2-3-5-4">stakes' penalties</a> paid.
                                    The <a href="/docs#sec-2-3-4">WISE supply inflates</a> at about 4%
                                    per year. Three quarters of that inflation (i.e. 3% APR) is distributed
                                    daily to all active stakes, in proportion to their shares as compared to
                                    the total share pool. The remaining one quarter (i.e. 1% APR)
                                    is distributed daily to
                                    the <a href="/docs#sec-2-3-5-5">CM referrer shares</a> in the same
                                    proportional manner.
                                </p>
                                <p>Depending on the length of the stake, a bonus amount of shares will be
                                    generated on top of the amount determined by the staked amount of WISE
                                    and current share price. This bonus scales linearly from slightly above
                                    0% for a one day stake, to 25% for a 5 year stake, and then to 30% for a
                                    42 year stake. For instance, a stake with a length of 1.5 years will
                                    generate<code>1.5 * 5% = 7.5%</code> bonus shares.
                                </p>
                                <p>The share price starts at some predetermined value denominated in
                                    <code>WISE per share</code>. Whenever any stake is closed, the contract
                                    calculates a ratio of that stake's total return (principal + interest -
                                    penalty) to its shares. If this ratio is greater than the current share
                                    price, then the share price is immediately set to this new, increased
                                    value.
                                </p>
                                <p>The share price can only increase over time, albeit fairly slowly. This
                                    ensures that earlier stakes get more shares than later stakes of the
                                    same amount of WISE. This share price increase mechanism also prevents
                                    users from being able to compound their interest with a sequence of
                                    smaller stakes in order to try and outperform a single long stake of the
                                    same size.
                                </p>
                                <p>On the start of the fifteenth day of the <a href="/docs#sec-2-3">Circulation Epoch</a>, the
                                    share price will be automatically increased by 10% as a one-time event.
                                    This creates a very strong incentive for users to open their stakes during
                                    the first two weeks of the Circulation Epoch. Waiting until day
                                    fifteen to open a stake will mean you get roughly 9% less shares than you
                                    would have on the previous day, for the same amount of WISE staked. In
                                    turn, that means roughly 9% less interest earned by the stake.
                                </p>
                            </section>
                            <section className="text-left">
                                <h5 id="sec-2-3-5-3"><a href="/docs#sec-2-3-5-3">2.3.5.3</a>&nbsp;&nbsp;Scraping Stake Interest</h5>
                                <p>Users will have the ability to withdraw (scrape) any amount of earned
                                    interest from an Active stake (i.e. before the stake fully matures).
                                </p>
                                <p>Users can choose exactly how much interest they wish to scrape, up to
                                    the maximum (all accrued, unscraped interest from all previous days).
                                    Scraping interest from an Active stake can be done multiple times over
                                    the course of the stake.
                                </p>
                                <p>Scraping interest is possible starting on day 2 of the active stake. On
                                    day 1 (the first active day), the stake has not yet completed a full
                                    day of being active, and thus has not yet accrued any interest.
                                </p>
                                <p>When a stake is closed, whether Active or Mature, the interest minted
                                    back to the user only includes interest that hasn't already been
                                    scraped.
                                </p>
                                <p>Scraping interest will not affect the stake's principal, but will reduce
                                    the number of shares the stake has going forward. This effectively means
                                    that the stake will earn slightly less interest on the current and all
                                    future days of the stake than it otherwise would have. This share
                                    reduction also prevents users from being able to end up with more
                                    overall shares if they choose to immediately re-stake their scraped
                                    interest.
                                </p>
                                <p>Scraping interest may cause a&nbsp;
                                    <a href="/docs#sec-2-3-5-2">share price</a> increase, just as when&nbsp;
                                    <a href="/docs#sec-2-3-5-4">closing a stake</a>. Stakes track exactly how
                                    much cumulative scraped interest the user has scraped over the course
                                    of the stake, for the purpose of these calculations. The process for
                                    determining the possible share price increase and the stake shares
                                    reduction is as follows:
                                </p>
                                <p>First, calculate a possible new share price based on the stake's
                                    pseudo-return (principal plus all scraped interest thus far, including this scrape)
                                    divided by the stake's initial shares:
                                </p>
                                <pre><code>
                                                            newSharePrice = (stakePrincipal + cumulativeScrapedInterest) / stakeInitialShares
                                                        </code></pre>
                                <p>Next, if this new share price is greater than the current global share
                                    price, update the global share price (which may have just increased due
                                    to this scrape):
                                </p>
                                <pre><code>
                                                            if (newSharePrice &gt; globalSharePrice) globalSharePrice = newSharePrice
                                                        </code></pre>
                                <p>Next, calculate an amount of shares to be removed from the stake,
                                    based on the interest being scraped now and the global share price:
                                </p>
                                <pre><code>
                                                            stakeSharesToRemove = interestBeingScrapedNow / globalSharePrice
                                                        </code></pre>
                                <p>Finally, reduce the stake's current shares:</p>
                                <pre><code>
                                                            stakeCurrentShares = stakeCurrentShares - stakeSharesToRemove
                                                        </code></pre>
                            </section>
                            <section className="text-left">
                                <h5 id="sec-2-3-5-4"><a href="/docs#sec-2-3-5-4">2.3.5.4</a>&nbsp;&nbsp;Closing Stakes</h5>
                                <p>A user may close a stake at any time. Depending on the stake's status
                                    (where the stake is in its lifecycle), different things will
                                    happen:
                                </p>
                                <ul>
                                    <li>Closing a <strong>Pending</strong> stake - the stake shares are destroyed. The
                                        entire stake principal is minted back to the user, without interest
                                        or penalty.
                                    </li>
                                    <li>Closing an <strong>Active</strong> (premature) stake - the stake shares are
                                        destroyed. The stake principal is penalized (see below) and minted
                                        back to the user along with all interest accumulated thus far.
                                    </li>
                                    <li>Closing a <strong>Mature</strong> stake - the stake shares are destroyed. The
                                        entire stake principal and all interest accumulated is minted back
                                        to the user. There are never any penalties for closing a Mature
                                        stake, no matter how late.
                                    </li>
                                </ul>
                                <p>The penalty deducted from the principal (stakedWise) when closing an
                                    Active stake is as follows:
                                </p>
                                <pre><code>
                                                            If the stake is one day long:<br/>
                                                        &nbsp;&nbsp;penaltyAmount = stakedWise × 0.1<br/>
                                                    <br/>
                                                            If the stake is two or more days long:<br/>
                                                            &nbsp;&nbsp;penaltyAmount = stakedWise × (.1 + .8 ×
                                                            ((daysLeft - 1) / (stakedDays - 1)))
                                                        </code></pre>
                                <p>Thus, if you close an Active stake that was 100 days long on its final
                                    day before maturity, you get a 10% penalty applied to the principal. If
                                    you close the same stake on the first day of it being Active, you get a
                                    90% penalty. The penalty scales linearly between those two extremes.
                                </p>
                                <p>Any such WISE penalized from a stake's return is earmarked for
                                    distribution to all active stake shares that day. These penalty
                                    distributions are only realized by those stakes' shares when each of
                                    those stakes end.
                                </p>
                            </section>
                            <section className="text-left">
                                <h5 id="sec-2-3-5-5"><a href="/docs#sec-2-3-5-5">2.3.5.5</a>&nbsp;&nbsp;Stake Referrals</h5>
                                <p>Just as the WISE contract includes a referral program to incentivize
                                    users to help bring more ETH into the <a href="/docs#sec-2-2">Liquidity Transformer</a>, it
                                    also provides a referral program for staking.
                                </p>
                                <p>When a user opens a new stake, the front-end interface checks whether the
                                    browser has a referral cookie, just as it does when making a <a href="/docs#sec-2-2-1">token
                                    reservation</a> in the LT Epoch. If such a cookie is present, AND the
                                    new stake is at least 365 days long, the contract tags this new stake
                                    with the referrer's address.
                                </p>
                                <p>A referred stake generates 10% extra shares for the staker (beyond what
                                    it would have if not referred) as well an equal (but without the 10%
                                    bonus) amount of “critical mass shares” (a.k.a. “CM shares”) for the
                                    referrer. The system-wide pool of CM shares gets earmarked one quarter
                                    of the daily inflation WISE, but only for referrers that have qualified
                                    as CM referrers.
                                </p>
                                <p>To qualify as a CM referrer, a user must, on any one day, have reached a
                                    total of $10,000 worth of currently active referred stakes of 365+ days
                                    in length. If a user meets this condition, they are immediately and
                                    forever tagged as a CM referrer, and cannot ever lose that distinction,
                                    regardless of if their referees close all their stakes.
                                </p>
                                <p>Another way to qualify as a CM referrer is to have referred 50 ETH of
                                    token reservations in the <a href="/docs#sec-2-2-3-1">referral system
                                    of the LT Epoch</a>. Users reaching that level are automatically
                                    pre-qualified as CM referrers forever.
                                </p>
                                <p>Calculating a new stake's USD value is only done once, when the stake is
                                    opened. The WISE/USD exchange rate used for this calculation will be
                                    determined by querying the Uniswap WISE/ETH and ETH/DAI exchange
                                    pair contracts' price oracle interfaces.
                                </p>
                            </section>
                            <section className="text-left">
                                <h4 id="sec-2-3-6"><a href="/docs#sec-2-3-6">2.3.6</a>&nbsp;&nbsp;Liquidity Provider Staking</h4>
                                <p>WISE has an additional way of staking that rewards liquidity providers
                                    for the WISE/ETH pair if certain conditions are met. If the liquidity
                                    percentage of WISE on Uniswap falls below 20%, then you may stake your
                                    LP tokens with the WISE contract and start earning interest (on top of
                                    the trading fees you already get).
                                </p>
                                <p>This new money comes from the 3% inflation for stakers such that, the 3%
                                    for stakers slowly decreases and the 0% for LPs slowly increases. Once
                                    this triggers, it will become valuable for a certain amount of people to
                                    LP stake since there is now a new pot of money available for LPs to earn
                                    daily interest.
                                </p>
                                <p>An additional perk for LP staking is that you may end
                                    your stake at any time and collect your LP tokens. When the Uniswap
                                    liquidity goes back above 30%, the rewards slowly start diminishing. The
                                    staking inflation will creep back up towards 3% and the LP inflation
                                    will creep back towards 0% until triggered again.
                                </p>
                                <p>This is a safeguard in the system that will most likely not be triggered
                                    for years if at all. Users can still choose to add to liquidity
                                    themselves at any time in order to earn about 6% ROI from fees, but the
                                    additional incentive of shares interest doesn't trigger until
                                    needed.
                                </p>
                            </section>
                            <section className="text-left">
                                <h3 id="sec-2-4"><a href="/docs#sec-2-4">2.4</a>&nbsp;&nbsp;ERC-20 Functionality</h3>
                                <p>The WISE contract conforms fully with the ERC-20 token standard, as
                                    proposed in <a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md">EIP-20</a>.
                                    This is essentially a set of functions that a token contract must implement
                                    in order to be an ERC-20 token.
                                </p>
                                <p>This ERC-20 standard compliance means that applications, websites,
                                    exchanges, and smart contracts can very easily integrate with or be
                                    built on top of the WISE contract.
                                </p>
                            </section>
                            <section className="text-left">
                                <br />
                                <h2 id="sec-3"><a href="/docs#sec-3">3</a>&nbsp;&nbsp;WISE Ecosystem</h2>
                                <p className="text-left">This section contains additional information about
                                    the WISE website and ecosystem.
                                </p>
                            </section>
                            <section className="text-left">
                                <h5 id="sec-3-1"><a href="/docs#sec-3-1">3.1</a>&nbsp;&nbsp;Referral Links</h5>
                                <p className="aside">ATTENTION: the WISE referral link and cookie system is&nbsp;
                                    <strong>ALREADY LIVE!</strong> You can start spreading your ref link today and
                                    building a base of referred users well before contract launch. So, do
                                    yourself a favor and start spreading your ref link everywhere!
                                </p>
                                <p>Format:
                                    <code className="select-all">https://wisetoken.net/?w=YOURETHADDRESS</code>
                                </p>
                                <p>Example: <a href="https://wisetoken.net/?w=0x91143a01a6111ac86efBcc92Fc4f86c01c10AE9F">
                                    Get 10% Bonus WISE!
                                    </a>
                                </p>
                                <p>Anyone may use a referral link to direct users to the WISE website, this
                                    Teal Paper, the forthcoming official contract web interface, or any
                                    other page on the <a href="https://wisetoken.net/">wisetoken.net</a>&nbsp;
                                    domain or its subdomains, in order to potentially earn various referral
                                    bonus WISE from those users contract interactions.
                                </p>
                                <p>When a user clicks such a ref link, the wisetoken.net website stores a
                                    cookie on their browser, containing the referrer's eth address from the
                                    ref link. If that user later sends ETH to the LT or starts a stake at
                                    least one year in duration, the cookie will cause the contract to mark
                                    that LT reservation or stake as having been referred by that
                                    referrer.
                                </p>
                                <p>If a user already has a referral cookie in their browser and clicks a
                                    different ref link, the cookie will be overwritten with the second
                                    ref link's ethereum address. Referrals are thus "last click wins".
                                </p>
                                <p>Referral links containing invalid ethereum addresses will not work; the
                                    website will not create (or overwrite) the cookie.
                                </p>
                            </section>
                            <section className="text-left">
                                <h2 id="sec-4"><a href="/docs#sec-4">4</a>&nbsp;&nbsp;Conclusion</h2>
                                <p>The Wise Foundation sincerely hopes that our efforts to provide the
                                    general public with a trustless, decentralized, interest-bearing
                                    instrument will bear fruit, and that WISE will be a great success. But,
                                    we can't achieve these goals without the help of the community around
                                    us.
                                </p>
                                <p>The WISE project was started not with the intention to profit, but from
                                    the desire to create something incredibly useful for the world. We hope
                                    this document has made our vision and intentions clear.
                                </p>
                                <p>We welcome any questions, comments, or criticism you may have. We also
                                    have some need for various types of contributors to the project.
                                </p>
                                <p>Please join us in the <a href="https://t.me/WiseToken">official WISE
                                    Telegram group at t.me/WiseToken</a> and
                                    the <a href="https://discord.gg/keJUb4W">official WISE Discord
                                    server</a> to discuss the WISE project
                                    with the founders, developers, supporters, critics, and the rest of the
                                    community.
                                </p>
                            </section>
                            <section className="text-left">
                                <h2 id="sec-5"><a href="/docs#sec-5">5</a>&nbsp;&nbsp;Acknowledgements</h2>
                                <p>The Wise Foundation would like to sincerely thank the following people
                                    and groups that have been and continue to be instrumental in making WISE
                                    a reality and a success:
                                </p>
                                <ul>
                                    <li><strong><a href="https://twitter.com/haydenzadams">Hayden Adams</a> and
                                        the <a href="https://uniswap.org/">Uniswap developers</a></strong> —
                                        for your development of such an impeccable and groundbreaking
                                        decentralized exchange protocol, and for your valued advice on how
                                        best to integrate WISE directly with it.
                                    </li>
                                    <li><strong><a href="https://twitter.com/VitalikButerin">Vitalik Buterin</a>,&nbsp;
                                        <a href="https://gavwood.com/">Dr. Gavin Wood</a>,&nbsp;
                                        <a href="https://github.com/ethereum">et al.</a></strong> —
                                        for your conception, guidance, and development of the
                                        Ethereum platform.
                                    </li>
                                    <li><strong><a href="https://ethereum.org/">The Ethereum Foundation</a></strong> —
                                        for your continued generous financial support of the many
                                        incipient projects in the Ethereum ecosystem.
                                    </li>
                                    <li><strong><a href="http://provable.xyz/">Provable Things Ltd.</a></strong> —
                                        for your fully featured and provably secure blockchain
                                        oracle contract and Ledger-based random datasource.
                                    </li>
                                    <li><strong><a href="https://openzeppelin.com/">OpenZeppelin</a></strong> —
                                        for your development of essential Solidity smart contract interfaces
                                        and building blocks.
                                    </li>
                                    <li><strong><a href="https://www.trufflesuite.com/">Truffle Blockchain
                                        Group</a></strong> — for your development and support of the
                                        Truffle Suite, which has helped speed and simplify development of
                                        WISE and many other smart contracts, interfaces, and testing
                                        thereof.
                                    </li>
                                    <li><strong><a href="https://t.me/WiseToken">The WISE Telegram crowd</a></strong> —
                                        for your steady stream of valuable ideas, constructive
                                        criticism, honest feedback, witty banter, and comic relief
                                        throughout the design and development process.
                                    </li>
                                    <li><strong><a href="https://www.coinfabrik.com/">CoinFabrik</a></strong> — for
                                        your help in auditing the WISE contract Solidity source code.
                                    </li>
                                    <li><strong><a href="https://99designs.com/profiles/OpayaCreative">Opaya
                                        Creative</a></strong> — for your sharp design of the WISE logo,
                                        related images, and branding guide.
                                    </li>
                                    <li><strong><a href="https://www.upwork.com/">Upwork</a></strong> — for
                                        making the search for talented developers less of a search.
                                    </li>
                                    <li><strong><a href="https://coderpad.io/">CoderPad</a></strong> — for
                                        allowing developer screenings and interviews to run smoothly and
                                        produce detailed technical insights not available through a phone
                                        call.
                                    </li>
                                    <li><strong><a href="https://99designs.com/">99designs</a></strong> — for
                                        hosting a slick platform full of talented and eager designers.
                                    </li>
                                    <li>Teal Paper style adopted from the&nbsp;
                                        <strong><a href="https://makerdao.com/purple/">DAI Stablecoin Purple
                                        Paper</a></strong>.
                                    </li>
                                </ul>
                            </section>
                            <section className="text-left">
                                <h2 id="sec-6"><a href="/docs#sec-6">6</a>&nbsp;&nbsp;Availability</h2>
                                <p>The web version of this paper is hosted at <a href="/teal">https://wisetoken.net/teal/</a>.
                                    Its source code is maintained at <a href="https://github.com/wise-foundation/wise-website/tree/master/html/teal">https://github.com/wise-foundation/wise-website/tree/master/html/teal</a>.
                                </p>
                            </section>
                            <section className="text-left">
                                <h2 id="sec-7"><a href="/docs#sec-7">7</a>&nbsp;&nbsp;Appendices</h2>
                            </section>
                            <section className="text-left">
                                <h3 id="sec-7-1"><a href="/docs#sec-7-1">Appendix A</a>&nbsp;&nbsp;Terminology</h3>
                                <ul>
                                    <li><strong>WISE</strong> — the token and contract described herein.</li>
                                    <li><strong>YODA</strong> — the base unit of the WISE token, analogous to
                                        wei for ETH, or satoshi for BTC. One WISE equals one
                                        quintillion YODA (1,000,000,000,000,000,000).
                                    </li>
                                    <li><a href="/docs#sec-2-3-5">Stake</a> — a time locked deposit of WISE
                                        which earns interest over time.
                                    </li>
                                    <li><a href="/docs#sec-2-2">Liquidity Transformer Epoch</a> — the first fifty days of
                                        the contract's existence, during which users may deposit ETH to
                                        reserve part of the initial supply of WISE.
                                    </li>
                                    <li><a href="/docs#sec-2-3">Circulation Epoch</a> — the epoch immediately following the
                                        end of the LT Epoch, during which users may mint their tokens
                                        reserved in the LT Epoch, transfer tokens, stake tokens, etc.
                                    </li>
                                    <li><a href="/docs#sec-2-3-1">Uniswap</a> — a decentralized,
                                        non-custodial ERC-20 token and ETH exchange on the Ethereum
                                        blockchain. The WISE contract is integrated directly with Uniswap.
                                        General info on Uniswap is <a href="https://uniswap.org/">here</a>,
                                        Uniswap exchange stats are
                                        are <a href="https://uniswap.info/">here</a>, and the main
                                        exchange is <a href="https://app.uniswap.org/">here</a>.
                                    </li>
                                    <li><strong>ERC-20</strong> — a standard interface for Ethereum smart
                                        contract tokens. ERC stands for “Ethereum Request for Comment”. The
                                        original EIP (Ethereum Improvement Proposal) describing ERC-20
                                        tokens can be
                                        found <a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md">here</a>.
                                    </li>
                                </ul>
                            </section>
                            <section className="text-left">
                                <h3 id="sec-7-2"><a href="/docs#sec-7-2">Appendix B</a>&nbsp;&nbsp;Coding Standards</h3>
                                <ul>
                                    <li>The WISE contract is written entirely in Solidity and compiled with solc 0.7.2.
                                    </li>
                                    <li>The code should adhere to the formats prescribed by
                                        the <a href="https://solidity.readthedocs.io/en/v0.7.2/style-guide.html">style
                                        guide</a> section of in the
                                        official <a href="https://solidity.readthedocs.io/en/v0.7.2/">Solidity 0.7.2
                                        documentation</a>.
                                    </li>
                                    <li>All public interfaces (at a minimum) should be annotated using
                                        the <a href="https://solidity.readthedocs.io/en/v0.7.2/natspec-format.html">NatSpec
                                        format</a>.
                                    </li>
                                    <li>Unit tests should provide 100% coverage of the source code. All
                                        conceivable edge and corner cases should be covered.
                                    </li>
                                    <li>Function and variable names should convey their purpose and usage as
                                        clearly and tersely as possible, in plain English. Avoid using
                                        digits, unnecessary abbreviations, acronyms, shorthand, or
                                        slang.
                                    </li>
                                    <li>Functions should be as short as is practical. They should do what
                                        their name implies, and not much else. A good rule of thumb is that
                                        a function should try to be viewable in its entirety on a typical
                                        monitor, at a typical font size, if at all possible.
                                    </li>
                                    <li>Comments should be employed wisely. Dont comment to explain what
                                        code does. Good function and variable names will accomplish that.
                                        Rather, use comments to explain why something is coded a certain
                                        way, Use comments to explain any non-obvious technical points or
                                        decisions involved in a piece of code.
                                    </li>
                                    <li><code>require()</code> function calls should return a short but
                                        descriptive error message, always prefixed with "WISE: ".
                                    </li>
                                    <li>Avoid duplicated code (don't repeat yourself).</li>
                                    <li>Wherever possible and practical, write with gas efficiency as a
                                        priority. Some parts of the code may sacrifice minuscule gas
                                        efficiencies for various important reasons. When deemed to be of
                                        greater value, code legibility, clean architecture, and a
                                        straightforward and fully
                                        featured end-user experience should take priority over such
                                        tiny gas savings.
                                    </li>
                                </ul>
                            </section>
                            <section className="text-left">
                                <h3 id="sec-7-3"><a href="/docs#sec-7-3">Appendix C</a>&nbsp;&nbsp;Source Code Audit</h3>
                                <p>The Wise Foundation has obtained a paid, professional audit of the WISE contract
                                    Solidity source code from <a href="https://www.coinfabrik.com/">CoinFabrik</a>, a
                                    reputable auditing firm. The full audit report is included below.
                                </p>
                                <p>TL;DR - The auditors' conclusion was, &ldquo;<i>We found that although the project shows a certain
                                    complexity, the code [is] well written and security has been taken into account.
                                    The documentation provided was also very helpful and relates correctly to what is
                                    implemented in the contracts. No security issues were found and the only
                                    non-security issue was quickly fixed by the team.</i>&rdquo;
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
                </div >
            </PerfectScrollbar>
        );
    }

}

export default ENDOC;

