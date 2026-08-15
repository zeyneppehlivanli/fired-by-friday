// --- ÇOK DİLLİ METİN SÖZLÜĞÜ (DICTIONARY) ---
const TEXTS = {
    tr: {
        budget: "BÜTÇE: ",
        sanity: "AKIL SAĞLIĞI: ",
        produced: "Üretilen Ürün: ",
        queue: "Kuyruk: ",
        goal: "HEDEF: 5000",
        flowStateGoal: "HEDEF: 5000 (🔥 FLOW STATE 🔥)",
        flowStatus: "AKIŞ DURUMU (FLOW)",
        upgradesTitle: "GELİŞTİRMELER (UPGRADES)",
        m3Upgrade: "M-3 Turbo",
        autoUpgrade: "Bant Hızı",
        coffeeUpgrade: "Kahve Makinesi",
        m3Desc: "M-3 makinesinin işlem süresini kalıcı olarak hızlandırır (Darboğazı rahatlatır).",
        autoDesc: "Banta yeni ürün gelme hızını artırır (Daha hızlı üretim, daha fazla risk!).",
        coffeeDesc: "Her 5 saniyede bir Akıl Sağlığını pasif olarak yeniler. Hayat kurtarır!",
        lvl: "Lvl",
        maxLvl: "MAX SEVİYE",
        insufficientBudget: "YETERSİZ BÜTÇE!",
        welcomeTitle: "FIRED BY FRIDAY'E HOŞ GELDİN!",
        welcomeBody: "Sonunda işi kabul eden birini bulduk! Senden önceki müdürler nedense hemen istifa etti. Yeni nesil çalışmak istemiyor, hep bir bahane!\n\nÜretim bandı çok basit. Ancak küçük bir detay: 3 numaralı makine (M-3) biraz eski, yavaş çalışır ve sürekli tıkanıp kriz çıkarır. Onu hızlandırmak veya krizleri çözmek senin işin. Reviri kapattık, bol bol nefes egzersizi yapmanı öneririm.",
        nextBtn: "İLERİ >>",
        howToTitle: "ŞİRKET İÇİ YÖNERGE",
        howToBody: "[1] AKIŞ: Ürünler bantta ilerler. 3 numaralı makine (M-3) sistemdeki darboğazdır (bottleneck) ve ürünler orada birikmeye başlar.\n\n[2] MÜDAHALE (OVERDRIVE): Bir makine tıkanmak üzereyse arıza vermesini bekleme! Üzerine tıklayarak kutuları manuel eritebilirsin. Sana para kazandırır ama yorulduğun için Akıl Sağlığını (-10) düşürür.\n\n[3] GELİŞTİRME: Kazandığın bütçeyle sol alt köşeden M-3'ü hızlandırabilir, bant hızını artırabilir veya pasif iyileşme için Kahve Makinesi alabilirsin.\n\n>> HEDEF: Bütçeni veya Akıl Sağlığını sıfırlamadan 5000$ bütçeye ulaş!",
        startWork: "MESAİYE BAŞLA",
        companyAdvance: "+1000 (Şirket Avansı)",
        speed: "Hız: ",
        statusIdle: "BOŞTA",
        statusWorking: "ÇALIŞIYOR",
        statusBusy: "YOĞUN",
        statusOverdrive: "⚡ OVERDRIVE",
        statusCrisisNear: "⚠️ KRİZ YAKIN",
        statusBroken: "💥 ARIZALI",
        bottleneckWarning: "⚠️ DARBOĞAZ",
        manualBonus: "⚡ MANUEL",
        repairCost: "-100$ (Tamir)",
        flowBonus: "🔥 FLOW STATE! Ürünler +75$ 🔥",
        flowBroken: "❌ Akış Bozuldu...",
        tutorialTitle: "YENİ YETENEK: OVERDRIVE",
        tutorialBody: "Makine tıkanmak üzere! Kriz çıkmadan önce makineye (üzerine) tıklayarak kutuları MANUEL olarak eritebilirsin.\n\nKAZANIM: Anında +50$ Bütçe\nBEDEL: -10 Akıl Sağlığı (Çok Yorulursun!)\n\nAkıl sağlığını sıfırlamadan krizleri önlemek için bu gücü dikkatli kullan!",
        understood: "ANLADIM",
        crisisTitle: "KRİZ: ÜRETİM HATTI TIKANDI!",
        callMaster: "Usta Çağır (-500 Bütçe)",
        fixYourself: "Kendin Tamir Et",
        sanityCost: "Akıl Sağlığı",
        breakdownTitle: "ARIZA:",
        repairNow: "Hemen Tamir Et (-100$)",
        ignoreBreakdown: "Sonra İlgilen (Beklet)",
        breakdownBody: "makinesi arızalandı! Üretim durdu ve ürünler birikmeye başlayacak.",
        gameOver: "GAME OVER - KOVULDUN!",
        victoryTitle: "YÖNETİM KURULU KARARI",
        victoryBody: "Tebrikler Yeni CEO!\n\nKısa sürede fabrikanın kârını inanılmaz bir seviyeye çıkardın.\n\nEski müdür Andrew'un vizyonsuz olduğu ve şirketi zarara uğrattığı kanıtlandı. Kendisinin işine tazminatsız son verildi, şu an lobiye inip karton kutusunu topluyor.\n\nArtık fabrikanın tam yetkili yöneticisi sensin. İşçilerine iyi davranmayı unutma...\n\nOYUNU KAZANDIN!",
        patronQuotes: [
            "Kriz diye bir şey yoktur müdür, sadece henüz paketlenmemiş fırsatlar vardır!",
            "Bantların durması şirketimizin 'sürekli çeviklik' vizyonuyla hiç uyuşmuyor.",
            "Üretim durdu mu?! Şu an dakikada 12 dolar kaybediyoruz! Bandı çalıştır!",
            "Usta çağırırsan o 500 bütçeyi senin yıl sonu priminden keserim.",
            "Makineleri 'Boz' diye değil, 'Çalıştır' diye teslim ettim. Zor mu geldi?",
            "Senden önceki müdür de tam burada pes etmişti. Klasik yeni nesil..."
        ]
    },
    en: {
        budget: "BUDGET: ",
        sanity: "SANITY: ",
        produced: "Produced: ",
        queue: "Queue: ",
        goal: "GOAL: 5000",
        flowStateGoal: "GOAL: 5000 (🔥 FLOW STATE 🔥)",
        flowStatus: "FLOW STATE",
        upgradesTitle: "UPGRADES",
        m3Upgrade: "M-3 Turbo",
        autoUpgrade: "Belt Speed",
        coffeeUpgrade: "Coffee Machine",
        m3Desc: "Permanently speeds up M-3's processing time (Relieves the bottleneck).",
        autoDesc: "Increases the rate of new products arriving on the belt (Faster production, more risk!).",
        coffeeDesc: "Passively restores Sanity every 5 seconds. A lifesaver!",
        lvl: "Lvl",
        maxLvl: "MAX LEVEL",
        insufficientBudget: "NOT ENOUGH BUDGET!",
        welcomeTitle: "WELCOME TO FIRED BY FRIDAY!",
        welcomeBody: "We finally found someone to take the job! The previous managers resigned immediately for some reason. The new generation just doesn't want to work, always making excuses!\n\nThe production line is simple. But a small detail: machine number 3 (M-3) is a bit old, works slowly, and constantly jams, causing crises. Speeding it up or solving the crises is your job. We closed the infirmary, so I suggest doing plenty of breathing exercises.",
        nextBtn: "NEXT >>",
        howToTitle: "INTERNAL COMPANY MEMO",
        howToBody: "[1] THE FLOW: Products move along the belt. Machine 3 (M-3) is the bottleneck, products will pile up there.\n\n[2] INTERVENTION (OVERDRIVE): Don't wait for a breakdown! If a machine is jamming, click on it to manually melt the boxes. It earns you money but drains your Sanity (-10).\n\n[3] UPGRADES: Use your budget on the bottom left to speed up M-3, increase belt speed, or buy a Coffee Machine for passive healing.\n\n>> GOAL: Reach $5000 Budget without letting your Budget or Sanity drop to zero!",
        startWork: "START SHIFT",
        companyAdvance: "+1000 (Company Advance)",
        speed: "Spd: ",
        statusIdle: "IDLE",
        statusWorking: "WORKING",
        statusBusy: "BUSY",
        statusOverdrive: "⚡ OVERDRIVE",
        statusCrisisNear: "⚠️ CRISIS NEAR",
        statusBroken: "💥 BROKEN",
        bottleneckWarning: "⚠️ BOTTLENECK",
        manualBonus: "⚡ MANUAL",
        repairCost: "-100$ (Repair)",
        flowBonus: "🔥 FLOW STATE! Products +$75 🔥",
        flowBroken: "❌ Flow Broken...",
        tutorialTitle: "NEW SKILL: OVERDRIVE",
        tutorialBody: "The machine is about to jam! Before a crisis hits, you can click on the machine to MANUALLY melt away the boxes.\n\nREWARD: Instant +$50 Budget\nCOST: -10 Sanity (It's exhausting!)\n\nUse this power carefully to prevent crises without draining your sanity to zero!",
        understood: "GOT IT",
        crisisTitle: "CRISIS: PRODUCTION LINE JAMMED!",
        callMaster: "Call Mechanic (-500 Budget)",
        fixYourself: "Fix It Yourself",
        sanityCost: "Sanity",
        breakdownTitle: "BREAKDOWN:",
        repairNow: "Repair Now (-$100)",
        ignoreBreakdown: "Deal With It Later",
        breakdownBody: "machine broke down! Production stopped and products will pile up.",
        gameOver: "GAME OVER - YOU'RE FIRED!",
        victoryTitle: "BOARD OF DIRECTORS DECISION",
        victoryBody: "Congratulations New CEO!\n\nYou've incredibly increased the factory's profit in a short time.\n\nIt's been proven that the former manager Andrew lacked vision and caused the company to lose money. He was fired without severance and is currently packing his cardboard box in the lobby.\n\nYou are now the fully authorized manager of the factory. Don't forget to treat your workers well...\n\nYOU WON THE GAME!",
        patronQuotes: [
            "There is no such thing as a crisis, manager, only unpackaged opportunities!",
            "The belts stopping doesn't align with our company's 'continuous agility' vision at all.",
            "Production stopped?! We're losing 12 dollars a minute right now! Start the belt!",
            "If you call the mechanic, I'll deduct that 500 budget from your year-end bonus.",
            "I handed you the machines to 'Run' them, not 'Break' them. Was that too hard?",
            "The manager before you gave up right here too. Classic new generation..."
        ]
    }
};

class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
        this.productCount = 0;
        this.machines = [];
        this.spawnEvent = null;
        this.breakdownEvent = null; 
        this.spawnDelay = 2400; 
        this.character = null;
        this.currentState = 'normal';
        this.budget = 0; 
        this.sanity = 100;
        this.isPaused = false;
        this.isGameOver = false;
        this.crisisPopup = null;
        this.breakdownPopup = null; 
        this.patronContainer = null;
        
        this.hasSeenOverdriveTutorial = false; 
        this.flowTimer = 0;
        this.isFlowState = false;
    }

    init(data) {
        this.currentLang = data.lang || null;
    }

    t(key) {
        return TEXTS[this.currentLang][key];
    }

    preload() {
        this.load.image('mudur', 'assets/mudur.png');
        this.load.image('stres', 'assets/stres.png');
        this.load.image('kriz', 'assets/kriz.png');
        this.load.image('patron', 'assets/patron.png'); 
        this.load.image('bg', 'assets/bg.png');
    }

    create() {
        const width = this.scale.width;
        const height = this.scale.height;

        if (!this.currentLang) {
            this.add.rectangle(0, 0, width, height, 0x1a252f).setOrigin(0);
            
            this.add.text(width / 2, height / 2 - 100, "SELECT LANGUAGE / DİL SEÇİNİZ", {
                fontFamily: 'Courier', fontSize: '32px', color: '#ffffff', fontStyle: 'bold'
            }).setOrigin(0.5);

            const btnTr = this.add.rectangle(width / 2 - 150, height / 2 + 50, 200, 60, 0xe74c3c).setInteractive({ useHandCursor: true });
            btnTr.setStrokeStyle(2, 0xc0392b);
            this.add.text(width / 2 - 150, height / 2 + 50, "TÜRKÇE", { fontFamily: 'Courier', fontSize: '24px', color: '#ffffff', fontStyle: 'bold' }).setOrigin(0.5);
            
            const btnEn = this.add.rectangle(width / 2 + 150, height / 2 + 50, 200, 60, 0x3498db).setInteractive({ useHandCursor: true });
            btnEn.setStrokeStyle(2, 0x2980b9);
            this.add.text(width / 2 + 150, height / 2 + 50, "ENGLISH", { fontFamily: 'Courier', fontSize: '24px', color: '#ffffff', fontStyle: 'bold' }).setOrigin(0.5);

            btnTr.on('pointerdown', () => {
                this.playSound('click');
                this.scene.restart({ lang: 'tr' });
            });

            btnEn.on('pointerdown', () => {
                this.playSound('click');
                this.scene.restart({ lang: 'en' });
            });
            
            return; 
        }

        this.bgImage = this.add.image(width / 2, height / 2, 'bg');
        this.bgImage.setDisplaySize(width, height); 
        this.bgImage.depth = 0;

        const floor = this.add.rectangle(0, 350, width, height - 350, 0x747d8c).setOrigin(0);
        floor.depth = 0; 
        
        const baseboard = this.add.graphics();
        baseboard.lineStyle(4, 0x2c3e50, 1);
        baseboard.beginPath();
        baseboard.moveTo(0, 350);
        baseboard.lineTo(width, 350);
        baseboard.strokePath();
        baseboard.depth = 0;

        const shadow = this.add.ellipse(640, 570, 90, 25, 0x000000, 0.4);
        shadow.depth = 9; 

        const beltGraphics = this.add.graphics();
        beltGraphics.lineStyle(16, 0x1a252f, 1);
        beltGraphics.depth = 1;
        beltGraphics.beginPath();
        beltGraphics.moveTo(0, 450);
        beltGraphics.lineTo(150, 450);
        beltGraphics.lineTo(150, 150);
        beltGraphics.lineTo(1130, 150);
        beltGraphics.lineTo(1130, 450);
        beltGraphics.lineTo(1280, 450);
        beltGraphics.strokePath();

        const machinePositions = [
            { x: 150, y: 450 }, { x: 350, y: 150 }, { x: 640, y: 150 },
            { x: 930, y: 150 }, { x: 1130, y: 450 }
        ];

        machinePositions.forEach((pos, i) => {
            const mShadow = this.add.ellipse(pos.x, pos.y + 75, 110, 25, 0x000000, 0.4);
            mShadow.depth = 4; 

            const machine = this.add.rectangle(pos.x, pos.y, 100, 150, 0x2c3e50);
            machine.setStrokeStyle(3, 0xbdc3c7);
            machine.depth = 5;

            this.add.text(pos.x, pos.y, `M-${i + 1}`, {
                fontSize: '20px', fontFamily: 'Courier', color: '#ffffff', fontStyle: 'bold'
            }).setOrigin(0.5).setDepth(6);

            const diagBg = this.add.rectangle(pos.x, pos.y - 90, 115, 52, 0x000000, 0.75); 
            diagBg.depth = 7;
            diagBg.setStrokeStyle(1, 0x7f8c8d);

            const cycleText = this.add.text(pos.x, pos.y - 100, `${this.t('speed')}--`, {
                fontSize: '14px', fontFamily: 'Courier', color: '#3498db', fontStyle: 'bold' 
            }).setOrigin(0.5).setDepth(8);

            const statusText = this.add.text(pos.x, pos.y - 80, this.t('statusIdle'), {
                fontSize: '15px', fontFamily: 'Courier', color: '#2ecc71', fontStyle: 'bold' 
            }).setOrigin(0.5).setDepth(8);

            machine.setInteractive({ useHandCursor: true });
            machine.on('pointerdown', () => {
                if (this.isPaused || this.isGameOver) return;
                
                if (machineData.isBroken) {
                    if (this.budget >= 100) {
                        this.budget -= 100;
                        this.updateResourceBars();
                        
                        machineData.isBroken = false;
                        machine.setStrokeStyle(3, 0xbdc3c7);
                        
                        this.playSound('money');
                        this.showFloatingText(pos.x, pos.y - 50, this.t('repairCost'), '#2ecc71');
                        
                        if (machineData.queue.length > 0 && !machineData.busy) {
                            const nextProduct = machineData.queue.shift();
                            this.startProcessing(machineData, nextProduct, machineData.id);
                        }
                    } else {
                        this.showWarning(pos.x, pos.y - 130, this.t('insufficientBudget'));
                    }
                    return;
                }
                
                if (machineData.queue.length >= 5) {
                    this.sanity -= 10; 
                    this.updateResourceBars();
                    
                    const product = machineData.queue.shift();
                    product.destroy(); 
                    
                    const salePrice = this.isFlowState ? 75 : 50;
                    this.budget += salePrice;
                    this.productCount++;
                    this.scoreText.setText(`${this.t('produced')}${this.productCount}`);
                    
                    this.showFloatingText(pos.x, pos.y - 50, `${this.t('manualBonus')} (+${salePrice}$)`, '#e67e22');
                    this.playSound('thud');
                    
                    this.cameras.main.shake(50, 0.002);
                    machine.setFillStyle(0xe67e22);
                    this.time.delayedCall(100, () => machine.setFillStyle(0x2c3e50));
                }
            });

            const led = this.add.graphics();
            const ledX = pos.x - 35;
            const ledY = pos.y - 60;
            
            led.fillStyle(0x2ecc71, 1);
            led.fillCircle(ledX, ledY, 8);
            led.fillStyle(0x2ecc71, 0.3);
            led.fillCircle(ledX, ledY, 11);
            led.depth = 6;

            const machineData = {
                id: i + 1, x: pos.x, y: pos.y, width: 100, height: 150,
                busy: false, 
                isBroken: false, 
                processingTime: i === 2 ? 3800 : 1500, 
                led: led, ledX: ledX, ledY: ledY, queue: [],
                diagBg: diagBg, cycleText: cycleText, statusText: statusText,
                machineGraphics: machine 
            };
            this.machines.push(machineData);
        });

        this.character = this.add.image(640, 500, 'mudur').setScale(0.5);
        this.character.depth = 10;

        this.products = this.add.group();
        
        this.spawnEvent = this.time.addEvent({
            delay: this.spawnDelay, callback: this.spawnProduct, callbackScope: this, loop: true
        });
        
        this.breakdownEvent = this.time.addEvent({
            delay: 15000, 
            callback: () => {
                if (!this.gameStarted || this.isPaused || this.isGameOver) return;
                
                if (Math.random() > 0.6) {
                    const workingMachines = this.machines.filter(m => !m.isBroken);
                    if (workingMachines.length > 0) {
                        const target = Phaser.Utils.Array.GetRandom(workingMachines);
                        this.triggerBreakdownPopup(target);
                    }
                }
            },
            loop: true
        });

        this.productSpeed = 2; 

        this.time.addEvent({
            delay: 5000,
            callback: () => {
                if (this.gameStarted && !this.isPaused && !this.isGameOver) {
                    if (this.upgrades.coffee.level > 0 && this.sanity < 100) {
                        const healAmount = this.upgrades.coffee.level * 2;
                        this.sanity = Math.min(100, this.sanity + healAmount);
                        this.updateResourceBars();
                        this.showFloatingText(this.scale.width / 2 + 250, 70, `+${healAmount} ☕`, '#3498db');
                    }
                }
            },
            loop: true
        });

        const barWidth = 200;
        const barHeight = 20;
        const barSpacing = 20;
        const totalBarWidth = (barWidth * 2) + barSpacing;
        const startX = (width - totalBarWidth) / 2;

        const budgetBarBg = this.add.graphics();
        budgetBarBg.fillStyle(0x1a1a1a, 0.8);
        budgetBarBg.fillRoundedRect(startX, 20, barWidth, barHeight, 5);
        budgetBarBg.lineStyle(2, 0x27ae60, 1);
        budgetBarBg.strokeRoundedRect(startX, 20, barWidth, barHeight, 5);
        budgetBarBg.depth = 20;

        this.budgetBar = this.add.graphics();
        this.budgetBar.fillStyle(0x27ae60, 1);
        this.budgetBar.fillRoundedRect(startX, 20, barWidth, barHeight, 5);
        this.budgetBar.depth = 21;

        this.budgetText = this.add.text(startX + barWidth / 2, 30, `${this.t('budget')}0`, {
            fontSize: '12px', color: '#ffffff', fontStyle: 'bold'
        }).setOrigin(0.5).setDepth(22);

        const sanityBarBg = this.add.graphics();
        sanityBarBg.fillStyle(0x1a1a1a, 0.8);
        sanityBarBg.fillRoundedRect(startX + barWidth + barSpacing, 20, barWidth, barHeight, 5);
        sanityBarBg.lineStyle(2, 0x3498db, 1);
        sanityBarBg.strokeRoundedRect(startX + barWidth + barSpacing, 20, barWidth, barHeight, 5);
        sanityBarBg.depth = 20;

        this.sanityBar = this.add.graphics();
        this.sanityBar.fillStyle(0x3498db, 1);
        this.sanityBar.fillRoundedRect(startX + barWidth + barSpacing, 20, barWidth, barHeight, 5);
        this.sanityBar.depth = 21;

        this.sanityText = this.add.text(startX + barWidth + barSpacing + barWidth / 2, 30, `${this.t('sanity')}100`, {
            fontSize: '12px', color: '#ffffff', fontStyle: 'bold'
        }).setOrigin(0.5).setDepth(22);

        const scoreBox = this.add.graphics();
        scoreBox.fillStyle(0x1a1a1a, 0.8);
        scoreBox.fillRoundedRect(width - 220, 20, 200, 50, 10);
        scoreBox.lineStyle(2, 0x3498db, 1);
        scoreBox.strokeRoundedRect(width - 220, 20, 200, 50, 10);
        scoreBox.depth = 20;

        this.scoreText = this.add.text(width - 120, 45, `${this.t('produced')}0`, {
            fontSize: '16px', color: '#ffffff', fontStyle: 'bold'
        }).setOrigin(0.5).setDepth(21);

        this.queueText = this.add.text(width - 120, 100, `${this.t('queue')}0`, {
            fontSize: '14px', color: '#ffffff', fontStyle: 'bold'
        }).setOrigin(0.5).setDepth(21);

        this.goalText = this.add.text(width - 120, 130, this.t('goal'), {
            fontSize: '14px', color: '#f1c40f', fontStyle: 'bold' 
        }).setOrigin(0.5).setDepth(21);

        this.add.text(width - 150, height - 70, this.t('flowStatus'), { 
            fontSize: '15px', color: '#f1c40f', fontStyle: 'bold' 
        }).setOrigin(0.5).setDepth(22);
        
        const flowBarBg = this.add.graphics();
        flowBarBg.fillStyle(0x1a1a1a, 0.8).fillRoundedRect(width - 250, height - 50, 200, 15, 5).setDepth(20);
        this.flowBar = this.add.graphics().setDepth(21);

        this.updateResourceBars();
        this.createUpgrades();

        this.spawnEvent.paused = true;
        this.breakdownEvent.paused = true; 
        this.gameStarted = false;

        // --- 1. EKRAN: ANDREW'UN MEKTUBU ---
        this.introContainer = this.add.container(0, 0);
        this.introContainer.setDepth(2000);

        const darkOverlay = this.add.rectangle(0, 0, width, height, 0x000000, 0.8).setOrigin(0);
        
        // Eskimiş Kağıt Görünümü (Vintage Manila/Parchment)
        const letterBg = this.add.rectangle(width / 2, height / 2, 700, 600, 0xe8dcc7);
        letterBg.setStrokeStyle(4, 0x5c4033);
        const letterInnerLine = this.add.rectangle(width / 2, height / 2, 680, 580);
        letterInnerLine.setStrokeStyle(2, 0x8b7355, 0.6); // İç çerçeve

        const patronImg = this.add.image(width / 2 + 200, height / 2 - 50, 'patron');
        patronImg.setScale(0.35);

        const letterTitle = this.add.text(width / 2, height / 2 - 250, this.t('welcomeTitle'), {
            fontFamily: 'Courier', fontSize: '27px', color: '#c0392b', fontStyle: 'bold'
        }).setOrigin(0.5);

        const letterBody = this.add.text(width / 2 - 100, height / 2 - 190, this.t('welcomeBody'), {
            fontFamily: 'Courier', fontSize: '17px', color: '#2c3e50',
            wordWrap: { width: 440 }, align: 'left', lineSpacing: 8, fontStyle: 'bold'
        }).setOrigin(0.5, 0);

        const startBtnBg = this.add.rectangle(width / 2, height / 2 + 230, 250, 50, 0xe74c3c).setInteractive({ useHandCursor: true });
        startBtnBg.setStrokeStyle(2, 0xc0392b);
        
        const startBtnText = this.add.text(width / 2, height / 2 + 230, this.t('nextBtn'), {
            fontSize: '20px', color: '#ffffff', fontStyle: 'bold'
        }).setOrigin(0.5);

        startBtnBg.on('pointerdown', () => {
            this.playSound('click'); 
            this.introContainer.destroy();
            
            // --- 2. EKRAN: OYUNUN İŞLEYİŞİ ---
            this.howToContainer = this.add.container(0, 0);
            this.howToContainer.setDepth(2000);
            
            const overlay2 = this.add.rectangle(0, 0, width, height, 0x000000, 0.8).setOrigin(0);
            
            // Eskimiş Kağıt Görünümü (Vintage Manila/Parchment)
            const parchmentBg = this.add.rectangle(width / 2, height / 2, 700, 640, 0xe8dcc7);
            parchmentBg.setStrokeStyle(4, 0x5c4033);
            const parchmentInnerLine = this.add.rectangle(width / 2, height / 2, 680, 620);
            parchmentInnerLine.setStrokeStyle(2, 0x8b7355, 0.6); // İç çerçeve

            const howToTitle = this.add.text(width / 2, height / 2 - 270, this.t('howToTitle'), {
                fontFamily: 'Courier', fontSize: '28px', color: '#d35400', fontStyle: 'bold'
            }).setOrigin(0.5);

            const howToBody = this.add.text(width / 2, height / 2 - 210, this.t('howToBody'), {
                fontFamily: 'Courier', fontSize: '18px', color: '#2c3e50',
                wordWrap: { width: 620 }, align: 'left', lineSpacing: 10, fontStyle: 'bold'
            }).setOrigin(0.5, 0);

            // Buton rahatlasın diye y=250'ye kadar indirildi!
            const startRealBtnBg = this.add.rectangle(width / 2, height / 2 + 250, 280, 50, 0x27ae60).setInteractive({ useHandCursor: true });
            startRealBtnBg.setStrokeStyle(2, 0x2ecc71);
            
            const startRealBtnText = this.add.text(width / 2, height / 2 + 250, this.t('startWork'), {
                fontSize: '22px', color: '#ffffff', fontStyle: 'bold'
            }).setOrigin(0.5);

            startRealBtnBg.on('pointerdown', () => {
                this.playSound('click'); 
                this.howToContainer.destroy();
                
                this.gameStarted = true;
                this.spawnEvent.paused = false;
                this.breakdownEvent.paused = false; 
                
                this.budget = 1000; 
                this.updateResourceBars();
                
                const barStartX = (width - 420) / 2; 
                this.showFloatingText(barStartX + 100, 50, this.t('companyAdvance'), '#2ecc71');
                
                this.playSound('money');
                this.startAmbientSound(); 
            });

            this.howToContainer.add([overlay2, parchmentBg, parchmentInnerLine, howToTitle, howToBody, startRealBtnBg, startRealBtnText]);
        });

        this.introContainer.add([darkOverlay, letterBg, letterInnerLine, patronImg, letterTitle, letterBody, startBtnBg, startBtnText]);
    }

    spawnProduct() {
        const product = this.add.rectangle(0, 450, 30, 30, 0xf0f0f0);
        product.setStrokeStyle(1, 0xcccccc);
        product.depth = 2;
        product.productData = { state: 'moving', currentMachine: 0, processedBy: [], pathPhase: 0 };
        this.products.add(product);
    }

    update(time, delta) {
        if (!this.gameStarted || this.isGameOver || this.isPaused) return;

        const totalQueue = this.machines.reduce((sum, machine) => sum + machine.queue.length, 0);
        this.queueText.setText(`${this.t('queue')}${totalQueue}`);
        this.updateStateMachine(totalQueue);

        const maxQueue = Math.max(...this.machines.map(m => m.queue.length));
        if (maxQueue >= 8 && !this.isPaused) {
            this.triggerCrisis();
            return;
        }

        let allClear = true;
        this.machines.forEach(m => {
            if (m.queue.length > 2) allClear = false; 
            if (m.isBroken) allClear = false; 
            
            m.cycleText.setText(`${this.t('speed')}${(m.processingTime / 1000).toFixed(1)}s`);
            
            if (m.isBroken) {
                m.statusText.setText(this.t('statusBroken'));
                m.statusText.setColor('#e74c3c');
                m.diagBg.setStrokeStyle(2, 0xe74c3c);
            } else if (m.queue.length >= 7) {
                m.statusText.setText(this.t('statusCrisisNear'));
                m.statusText.setColor('#e74c3c');
                m.diagBg.setStrokeStyle(2, 0xe74c3c);
            } else if (m.queue.length >= 5) {
                m.statusText.setText(this.t('statusOverdrive'));
                m.statusText.setColor('#e67e22');
                m.diagBg.setStrokeStyle(2, 0xe67e22);
                
                if (!this.hasSeenOverdriveTutorial && !this.isPaused) {
                    this.hasSeenOverdriveTutorial = true;
                    this.triggerOverdriveTutorial();
                }
            } else if (m.queue.length >= 3) {
                m.statusText.setText(this.t('statusBusy'));
                m.statusText.setColor('#f1c40f'); 
                m.diagBg.setStrokeStyle(1, 0xf1c40f);
            } else if (m.busy) {
                m.statusText.setText(this.t('statusWorking'));
                m.statusText.setColor('#3498db'); 
                m.diagBg.setStrokeStyle(1, 0x7f8c8d);
            } else {
                m.statusText.setText(this.t('statusIdle'));
                m.statusText.setColor('#2ecc71'); 
                m.diagBg.setStrokeStyle(1, 0x7f8c8d);
            }
        });

        if (allClear) {
            this.flowTimer += delta;
            if (this.flowTimer >= 20000 && !this.isFlowState) {
                this.enterFlowState();
            }
        } else {
            this.flowTimer = 0;
            if (this.isFlowState) {
                this.exitFlowState();
            }
        }

        const flowProgress = Math.min(this.flowTimer / 20000, 1);
        this.flowBar.clear();
        this.flowBar.fillStyle(this.isFlowState ? 0xf1c40f : 0x3498db, 1);
        this.flowBar.fillRoundedRect(this.scale.width - 250, this.scale.height - 50, 200 * flowProgress, 15, 5);


        this.products.children.each((product) => {
            const data = product.productData;

            if (data.state === 'moving') {
                if (data.pathPhase === 0) {
                    product.x += this.productSpeed;
                    if (product.x >= 150) { product.x = 150; data.pathPhase = 1; }
                } else if (data.pathPhase === 1) {
                    product.y -= this.productSpeed;
                    if (product.y <= 150) { product.y = 150; data.pathPhase = 2; }
                } else if (data.pathPhase === 2) {
                    product.x += this.productSpeed;
                    if (product.x >= 1130) { product.x = 1130; data.pathPhase = 3; }
                } else if (data.pathPhase === 3) {
                    product.y += this.productSpeed;
                    if (product.y >= 450) { product.y = 450; data.pathPhase = 4; }
                } else if (data.pathPhase === 4) {
                    product.x += this.productSpeed;
                    if (product.x >= 1280) {
                        const salePrice = this.isFlowState ? 75 : 50;
                        this.showFloatingText(1200, 420, `+${salePrice}$`, '#2ecc71');
                        
                        product.destroy();
                        this.productCount++;
                        this.scoreText.setText(`${this.t('produced')}${this.productCount}`);
                        
                        this.budget += salePrice;
                        this.updateResourceBars();
                        return;
                    }
                }

                this.machines.forEach((machine, index) => {
                    const machineIndex = index + 1;
                    
                    if (!data.processedBy.includes(machineIndex) && 
                        Math.abs(product.x - machine.x) < 40 && 
                        Math.abs(product.y - machine.y) < 40) {
                        
                        if (machine.busy || machine.isBroken) {
                            data.state = 'waiting';
                            machine.queue.push(product);
                            
                            const offset = machine.queue.length * 35;
                            if (data.pathPhase === 0 || data.pathPhase === 2 || data.pathPhase === 4) {
                                product.x = machine.x - offset;
                            } else if (data.pathPhase === 1) {
                                product.y = machine.y + offset;
                            } else if (data.pathPhase === 3) {
                                product.y = machine.y - offset;
                            }
                        } else {
                            this.startProcessing(machine, product, machineIndex);
                        }
                    }
                });
            }
        });
    }

    enterFlowState() {
        this.isFlowState = true;
        this.bgImage.setTint(0xf1c40f); 
        this.goalText.setText(this.t('flowStateGoal'));
        this.goalText.setColor('#ffffff');
        
        if (this.ambientOsc && this.sound.context) {
            this.ambientOsc.frequency.setTargetAtTime(180, this.sound.context.currentTime, 0.5);
        }
        
        this.showFloatingText(this.scale.width / 2, 200, this.t('flowBonus'), '#f1c40f');
        this.playSound('money');
    }

    exitFlowState() {
        this.isFlowState = false;
        this.bgImage.clearTint(); 
        this.goalText.setText(this.t('goal'));
        this.goalText.setColor('#f1c40f');
        
        if (this.ambientOsc && this.sound.context) {
            this.ambientOsc.frequency.setTargetAtTime(120, this.sound.context.currentTime, 0.5);
        }
        
        this.showFloatingText(this.scale.width / 2, 200, this.t('flowBroken'), '#e74c3c');
        this.playSound('click');
    }

    showPatronQuote() {
        const width = this.scale.width;
        const height = this.scale.height;

        if (this.patronContainer) {
            this.patronContainer.destroy();
        }

        this.patronContainer = this.add.container(width + 400, height); 
        this.patronContainer.depth = 1900;

        const patronImg = this.add.image(0, 0, 'patron');
        patronImg.setOrigin(1, 1);
        patronImg.setScale(0.4);

        const patronSozleri = this.t('patronQuotes');
        const secilenSoz = patronSozleri[Math.floor(Math.random() * patronSozleri.length)];

        const bubbleWidth = 320;
        const bubbleHeight = 110;
        const bubbleX = -450; 
        const bubbleY = -350;

        const bubble = this.add.graphics();
        bubble.fillStyle(0xfdf6e3, 1); 
        bubble.fillRoundedRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight, 15);
        bubble.lineStyle(3, 0x2c3e50, 1);
        bubble.strokeRoundedRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight, 15);

        bubble.fillStyle(0xfdf6e3, 1);
        bubble.beginPath();
        bubble.moveTo(bubbleX + bubbleWidth - 50, bubbleY + bubbleHeight); 
        bubble.lineTo(bubbleX + bubbleWidth - 10, bubbleY + bubbleHeight + 40); 
        bubble.lineTo(bubbleX + bubbleWidth - 20, bubbleY + bubbleHeight); 
        bubble.fillPath();

        const diyalogText = this.add.text(bubbleX + bubbleWidth / 2, bubbleY + bubbleHeight / 2, secilenSoz, {
            fontFamily: 'Courier', fontSize: '16px', color: '#2c3e50', fontStyle: 'bold',
            align: 'center', wordWrap: { width: 290 }
        }).setOrigin(0.5);

        this.patronContainer.add([patronImg, bubble, diyalogText]);

        this.tweens.add({
            targets: this.patronContainer,
            x: width - 20, 
            duration: 400,
            ease: 'Power2'
        });
    }

    hidePatronQuote() {
        if (this.patronContainer) {
            this.tweens.add({
                targets: this.patronContainer,
                x: this.scale.width + 400, 
                duration: 300,
                ease: 'Power2',
                onComplete: () => {
                    if(this.patronContainer) {
                        this.patronContainer.destroy();
                        this.patronContainer = null;
                    }
                }
            });
        }
    }

    triggerBreakdownPopup(machine) {
        this.playSound('alarm');
        this.playSound('thud');
        
        this.isPaused = true;
        this.spawnEvent.paused = true;
        this.breakdownEvent.paused = true;

        machine.isBroken = true; 
        machine.machineGraphics.setStrokeStyle(4, 0xe74c3c);
        this.cameras.main.shake(150, 0.005);
        
        this.flowTimer = 0;
        if (this.isFlowState) this.exitFlowState();

        this.breakdownPopup = this.add.container(0, 0);
        this.breakdownPopup.depth = 1600;

        const width = this.scale.width;
        const height = this.scale.height;

        const overlay = this.add.graphics();
        overlay.fillStyle(0x000000, 0.6);
        overlay.fillRect(0, 0, width, height);
        overlay.setInteractive();
        this.breakdownPopup.add(overlay);

        const modalWidth = 450;
        const modalHeight = 240; 
        const modalX = width / 2 - modalWidth / 2;
        const modalY = height / 2 - modalHeight / 2;

        const popupBg = this.add.graphics();
        popupBg.fillStyle(0x1a1a1a, 0.95);
        popupBg.fillRoundedRect(modalX, modalY, modalWidth, modalHeight, 15);
        popupBg.lineStyle(3, 0xe74c3c, 1);
        popupBg.strokeRoundedRect(modalX, modalY, modalWidth, modalHeight, 15);
        this.breakdownPopup.add(popupBg);

        const title = this.add.text(width / 2, modalY + 40, `${this.t('breakdownTitle')} M-${machine.id}`, {
            fontSize: '22px', color: '#e74c3c', fontStyle: 'bold', align: 'center'
        }).setOrigin(0.5);
        this.breakdownPopup.add(title);

        const body = this.add.text(width / 2, modalY + 90, `M-${machine.id} ${this.t('breakdownBody')}`, {
            fontSize: '16px', color: '#ffffff', fontStyle: 'bold', align: 'center', wordWrap: { width: 400 }
        }).setOrigin(0.5);
        this.breakdownPopup.add(body);

        const buttonA = this.add.rectangle(width / 2, modalY + 150, 350, 40, 0x27ae60);
        buttonA.setStrokeStyle(2, 0x2ecc71, 1);
        buttonA.setInteractive({ useHandCursor: true });
        
        const textA = this.add.text(width / 2, modalY + 150, this.t('repairNow'), {
            fontSize: '16px', color: '#ffffff', fontStyle: 'bold'
        }).setOrigin(0.5);
        
        buttonA.on('pointerdown', () => { 
            if (this.budget >= 100) {
                this.playSound('money');
                this.budget -= 100;
                this.updateResourceBars();
                
                machine.isBroken = false;
                machine.machineGraphics.setStrokeStyle(3, 0xbdc3c7);
                
                this.closeBreakdownPopup();
                
                if (machine.queue.length > 0 && !machine.busy) {
                    const nextProduct = machine.queue.shift();
                    this.startProcessing(machine, nextProduct, machine.id);
                }
            } else {
                this.showWarning(width / 2, modalY + 150, this.t('insufficientBudget'));
            }
        });
        
        this.breakdownPopup.add([buttonA, textA]);

        const buttonB = this.add.rectangle(width / 2, modalY + 200, 350, 40, 0x7f8c8d);
        buttonB.setStrokeStyle(2, 0x95a5a6, 1);
        buttonB.setInteractive({ useHandCursor: true });
        
        const textB = this.add.text(width / 2, modalY + 200, this.t('ignoreBreakdown'), {
            fontSize: '16px', color: '#ffffff', fontStyle: 'bold'
        }).setOrigin(0.5);
        
        buttonB.on('pointerdown', () => { 
            this.playSound('click');
            this.closeBreakdownPopup();
        });
        
        this.breakdownPopup.add([buttonB, textB]);

        this.showPatronQuote();
    }

    closeBreakdownPopup() {
        if (this.breakdownPopup) {
            this.breakdownPopup.destroy();
            this.breakdownPopup = null;
        }
        this.hidePatronQuote();
        
        this.isPaused = false;
        this.spawnEvent.paused = false;
        this.breakdownEvent.paused = false;
    }

    triggerOverdriveTutorial() {
        this.playSound('click'); 
        this.isPaused = true;
        this.spawnEvent.paused = true;
        this.breakdownEvent.paused = true;

        this.tutorialPopup = this.add.container(0, 0);
        this.tutorialPopup.depth = 1700; 

        const width = this.scale.width;
        const height = this.scale.height;

        const overlay = this.add.graphics();
        overlay.fillStyle(0x000000, 0.7);
        overlay.fillRect(0, 0, width, height);
        overlay.setInteractive();
        this.tutorialPopup.add(overlay);

        const modalWidth = 600;
        const modalHeight = 460; 
        const modalX = width / 2 - modalWidth / 2;
        const modalY = height / 2 - modalHeight / 2;

        const popupBg = this.add.graphics();
        popupBg.fillStyle(0x1a1a1a, 0.95);
        popupBg.fillRoundedRect(modalX, modalY, modalWidth, modalHeight, 15);
        popupBg.lineStyle(3, 0xe67e22, 1); 
        popupBg.strokeRoundedRect(modalX, modalY, modalWidth, modalHeight, 15);
        this.tutorialPopup.add(popupBg);

        const title = this.add.text(width / 2, modalY + 50, this.t('tutorialTitle'), {
            fontSize: '26px', color: '#e67e22', fontStyle: 'bold', align: 'center'
        }).setOrigin(0.5);
        this.tutorialPopup.add(title);
        
        const textBody = this.add.text(width / 2, modalY + 110, this.t('tutorialBody'), {
            fontSize: '18px', color: '#ffffff', fontStyle: 'bold', align: 'center', wordWrap: { width: 520 }, lineSpacing: 15
        }).setOrigin(0.5, 0);
        this.tutorialPopup.add(textBody);

        const btn = this.add.rectangle(width / 2, modalY + 390, 200, 50, 0xe67e22);
        btn.setStrokeStyle(2, 0xd35400, 1);
        btn.setInteractive({ useHandCursor: true });
        
        const btnText = this.add.text(width / 2, modalY + 390, this.t('understood'), {
            fontSize: '20px', color: '#ffffff', fontStyle: 'bold'
        }).setOrigin(0.5);

        btn.on('pointerdown', () => {
            this.playSound('click');
            this.tutorialPopup.destroy();
            this.tutorialPopup = null;
            this.isPaused = false;
            this.spawnEvent.paused = false;
            this.breakdownEvent.paused = false;
        });
        
        this.tutorialPopup.add([btn, btnText]);
    }

    updateResourceBars() {
        const barWidth = 200;
        const barHeight = 20;
        const barSpacing = 20;
        const width = this.scale.width;
        const startX = (width - (barWidth * 2 + barSpacing)) / 2;

        const budgetRatio = Math.min(this.budget / 2000, 1);
        this.budgetBar.clear();
        this.budgetBar.fillStyle(0x27ae60, 1);
        this.budgetBar.fillRoundedRect(startX, 20, barWidth * budgetRatio, barHeight, 5);
        this.budgetText.setText(`${this.t('budget')}${this.budget}`);

        const sanityRatio = Math.max(this.sanity / 100, 0);
        this.sanityBar.clear();
        this.sanityBar.fillStyle(0x3498db, 1);
        this.sanityBar.fillRoundedRect(startX + barWidth + barSpacing, 20, barWidth * sanityRatio, barHeight, 5);
        this.sanityText.setText(`${this.t('sanity')}${this.sanity}`);

        if (this.budget < 0 || this.sanity <= 0) {
            this.triggerGameOver();
        }
        
        if (this.budget >= 5000 && !this.isGameOver) {
            this.triggerVictory();
        }
    }

    triggerCrisis() {
        this.playSound('alarm');
        this.isPaused = true;
        this.spawnEvent.paused = true;
        this.breakdownEvent.paused = true; 

        this.crisisPopup = this.add.container(0, 0);
        this.crisisPopup.depth = 1500;

        const width = this.scale.width;
        const height = this.scale.height;

        const overlay = this.add.graphics();
        overlay.fillStyle(0x000000, 0.7);
        overlay.fillRect(0, 0, width, height);
        overlay.setInteractive();
        this.crisisPopup.add(overlay);

        const modalWidth = 500;
        const modalHeight = 220; 
        const modalX = width / 2 - modalWidth / 2;
        const modalY = height / 2 - modalHeight / 2;

        const popupBg = this.add.graphics();
        popupBg.fillStyle(0x1a1a1a, 0.95);
        popupBg.fillRoundedRect(modalX, modalY, modalWidth, modalHeight, 15);
        popupBg.lineStyle(3, 0xe74c3c, 1);
        popupBg.strokeRoundedRect(modalX, modalY, modalWidth, modalHeight, 15);
        this.crisisPopup.add(popupBg);

        const title = this.add.text(width / 2, modalY + 40, this.t('crisisTitle'), {
            fontSize: '24px', color: '#e74c3c', fontStyle: 'bold', align: 'center'
        }).setOrigin(0.5);
        this.crisisPopup.add(title);

        const buttonA = this.add.rectangle(width / 2, modalY + 110, 400, 50, 0x27ae60);
        buttonA.setStrokeStyle(2, 0x2ecc71, 1);
        buttonA.setInteractive({ useHandCursor: true });
        buttonA.on('pointerdown', () => { 
            this.playSound('click');
            this.resolveCrisis('budget'); 
        });
        this.crisisPopup.add(buttonA);

        const textA = this.add.text(width / 2, modalY + 110, this.t('callMaster'), {
            fontSize: '18px', color: '#ffffff', fontStyle: 'bold'
        }).setOrigin(0.5);
        this.crisisPopup.add(textA);

        const buttonB = this.add.rectangle(width / 2, modalY + 180, 400, 50, 0x3498db);
        buttonB.setStrokeStyle(2, 0x2980b9, 1);
        buttonB.setInteractive({ useHandCursor: true });
        buttonB.on('pointerdown', () => { 
            this.playSound('click');
            this.resolveCrisis('sanity'); 
        });
        this.crisisPopup.add(buttonB);

        const textB = this.add.text(width / 2, modalY + 180, `${this.t('fixYourself')} (-${this.sanityPenalty} ${this.t('sanityCost')})`, {
            fontSize: '18px', color: '#ffffff', fontStyle: 'bold'
        }).setOrigin(0.5);
        this.crisisPopup.add(textB);

        this.showPatronQuote();
    }

    resolveCrisis(choice) {
        const width = this.scale.width;
        const height = this.scale.height;

        if (this.crisisPopup) {
            this.crisisPopup.destroy();
            this.crisisPopup = null;
        }

        this.hidePatronQuote();

        if (choice === 'budget') {
            this.budget -= 500;
            this.updateResourceBars();

            let sortedMachines = [...this.machines].sort((a, b) => b.queue.length - a.queue.length);
            let targetMachines = sortedMachines.slice(0, 3); 
            let workersFinished = 0; 

            targetMachines.forEach((machine, index) => {
                const usta = this.add.rectangle(width / 2 - 50 + (index * 50), height + 50, 30, 30, 0x3498db);
                usta.setStrokeStyle(2, 0x2980b9);
                usta.depth = 100;

                this.time.delayedCall(index * 150, () => {
                    this.tweens.add({
                        targets: usta,
                        x: machine.x, y: machine.y + 60,
                        duration: 600, ease: 'Power2',
                        onComplete: () => {
                            this.tweens.add({
                                targets: machine,
                                alpha: 0.3, yoyo: true, repeat: 2, duration: 100,
                                onComplete: () => {
                                    this.tweens.add({
                                        targets: usta, x: width + 50, duration: 500,
                                        onComplete: () => {
                                            usta.destroy();
                                            workersFinished++;
                                            if(workersFinished === targetMachines.length) {
                                                this.clearQueuesAndResume();
                                            }
                                        }
                                    });
                                }
                            });
                        }
                    });
                });
            });

        } else if (choice === 'sanity') {
            this.sanity -= this.sanityPenalty; 
            this.updateResourceBars();
            
            this.character.setTint(0xe74c3c);
            this.cameras.main.shake(300, 0.01);
            
            this.time.delayedCall(500, () => {
                this.character.clearTint();
                this.clearQueuesAndResume();
            });
        }
    }

    clearQueuesAndResume() {
        this.machines.forEach(machine => {
            machine.queue.forEach(product => { product.destroy(); });
            machine.queue = [];
            
            machine.isBroken = false;
            machine.machineGraphics.setStrokeStyle(3, 0xbdc3c7);
        });
        
        this.flowTimer = 0;
        if (this.isFlowState) this.exitFlowState();
        
        this.isPaused = false;
        this.spawnEvent.paused = false;
        this.breakdownEvent.paused = false; 
    }

    triggerGameOver() {
        this.isGameOver = true;
        this.spawnEvent.paused = true;
        this.breakdownEvent.paused = true;
        const width = this.scale.width;
        const height = this.scale.height;

        const overlay = this.add.graphics();
        overlay.fillStyle(0x000000, 0.9);
        overlay.fillRect(0, 0, width, height);
        overlay.depth = 2000;

        this.add.text(width / 2, height / 2, this.t('gameOver'), {
            fontSize: '48px', color: '#e74c3c', fontStyle: 'bold', align: 'center'
        }).setOrigin(0.5).setDepth(2001);
    }

    triggerVictory() {
        this.isGameOver = true;
        this.spawnEvent.paused = true;
        this.breakdownEvent.paused = true;
        this.isPaused = true; 

        const width = this.scale.width;
        const height = this.scale.height;

        const overlay = this.add.graphics();
        overlay.fillStyle(0x000000, 0.85);
        overlay.fillRect(0, 0, width, height);
        overlay.depth = 2000;

        const letterBg = this.add.rectangle(width / 2, height / 2, 700, 480, 0xfdf6e3);
        letterBg.setStrokeStyle(4, 0x27ae60); 
        letterBg.depth = 2001;

        this.add.text(width / 2, height / 2 - 190, this.t('victoryTitle'), {
            fontFamily: 'Courier', fontSize: '32px', color: '#27ae60', fontStyle: 'bold'
        }).setOrigin(0.5).setDepth(2002);

        this.add.text(width / 2, height / 2 - 120, this.t('victoryBody'), {
            fontFamily: 'Courier', fontSize: '20px', color: '#2c3e50',
            wordWrap: { width: 600 }, align: 'center', lineSpacing: 10, fontStyle: 'bold'
        }).setOrigin(0.5, 0).setDepth(2002);
        
        this.playSound('money');
        this.time.delayedCall(200, () => this.playSound('money'));
    }

    createUpgrades() {
        const startX = 50;
        const startY = 550;

        const panelBg = this.add.graphics();
        panelBg.fillStyle(0x1a1a1a, 0.85);
        panelBg.fillRoundedRect(startX, startY, 400, 150, 10);
        panelBg.lineStyle(2, 0xf1c40f, 1);
        panelBg.strokeRoundedRect(startX, startY, 400, 150, 10);
        panelBg.depth = 20;

        this.add.text(startX + 200, startY + 15, this.t('upgradesTitle'), {
            fontSize: '16px', color: '#f1c40f', fontStyle: 'bold'
        }).setOrigin(0.5).setDepth(21);

        this.upgrades = {
            m3: { level: 0, max: 3, costs: [800, 1500, 2500] },
            auto: { level: 0, max: 3, costs: [1000, 1800, 3000] },
            coffee: { level: 0, max: 3, costs: [500, 900, 1500] }
        };
        this.sanityPenalty = 30; 

        this.tooltipText = this.add.text(0, 0, "", {
            fontSize: '14px', fontFamily: 'Courier', color: '#f1c40f', fontStyle: 'bold',
            backgroundColor: 'rgba(0,0,0,0.9)', padding: { x: 10, y: 10 },
            wordWrap: { width: 280 }
        }).setDepth(500).setOrigin(0, 0.5).setVisible(false);

        const btn1 = this.add.rectangle(startX + 200, startY + 50, 360, 30, 0x2c3e50).setInteractive({ useHandCursor: true });
        btn1.depth = 21;
        const txt1 = this.add.text(startX + 200, startY + 50, `${this.t('m3Upgrade')} [${this.t('lvl')} 0] (${this.upgrades.m3.costs[0]}$)`, { fontSize: '14px', color: '#ffffff' }).setOrigin(0.5).setDepth(22);

        btn1.on('pointerover', () => {
            this.tooltipText.setText(this.t('m3Desc'));
            this.tooltipText.setPosition(startX + 390, startY + 50); 
            this.tooltipText.setVisible(true);
        });
        btn1.on('pointerout', () => this.tooltipText.setVisible(false));

        btn1.on('pointerdown', () => {
            let up = this.upgrades.m3;
            if (up.level < up.max) {
                if (this.budget >= up.costs[up.level]) {
                    this.budget -= up.costs[up.level];
                    up.level++;
                    this.machines[2].processingTime -= 500; 
                    this.updateResourceBars();
                    this.playSound('money');
                    
                    if (up.level < up.max) {
                        txt1.setText(`${this.t('m3Upgrade')} [${this.t('lvl')} ${up.level}] (${up.costs[up.level]}$)`);
                    } else {
                        txt1.setText(`${this.t('m3Upgrade')} [${this.t('maxLvl')}]`);
                        btn1.setFillStyle(0x27ae60); 
                    }
                } else {
                    this.showWarning(startX + 200, startY + 50, this.t('insufficientBudget'));
                }
            }
        });

        const btn2 = this.add.rectangle(startX + 200, startY + 90, 360, 30, 0x2c3e50).setInteractive({ useHandCursor: true });
        btn2.depth = 21;
        const txt2 = this.add.text(startX + 200, startY + 90, `${this.t('autoUpgrade')} [${this.t('lvl')} 0] (${this.upgrades.auto.costs[0]}$)`, { fontSize: '14px', color: '#ffffff' }).setOrigin(0.5).setDepth(22);

        btn2.on('pointerover', () => {
            this.tooltipText.setText(this.t('autoDesc'));
            this.tooltipText.setPosition(startX + 390, startY + 90);
            this.tooltipText.setVisible(true);
        });
        btn2.on('pointerout', () => this.tooltipText.setVisible(false));

        btn2.on('pointerdown', () => {
            let up = this.upgrades.auto;
            if (up.level < up.max) {
                if (this.budget >= up.costs[up.level]) {
                    this.budget -= up.costs[up.level];
                    up.level++;
                    this.spawnDelay = Math.max(500, this.spawnDelay - 400);
                    
                    if (this.spawnEvent) this.spawnEvent.destroy();
                    this.spawnEvent = this.time.addEvent({
                        delay: this.spawnDelay, 
                        callback: this.spawnProduct, 
                        callbackScope: this, 
                        loop: true
                    });

                    this.productSpeed += 0.5;

                    this.updateResourceBars();
                    this.playSound('money');
                    
                    if (up.level < up.max) {
                        txt2.setText(`${this.t('autoUpgrade')} [${this.t('lvl')} ${up.level}] (${up.costs[up.level]}$)`);
                    } else {
                        txt2.setText(`${this.t('autoUpgrade')} [${this.t('maxLvl')}]`);
                        btn2.setFillStyle(0x27ae60);
                    }
                } else {
                    this.showWarning(startX + 200, startY + 90, this.t('insufficientBudget'));
                }
            }
        });

        const btn3 = this.add.rectangle(startX + 200, startY + 130, 360, 30, 0x2c3e50).setInteractive({ useHandCursor: true });
        btn3.depth = 21;
        const txt3 = this.add.text(startX + 200, startY + 130, `${this.t('coffeeUpgrade')} [${this.t('lvl')} 0] (${this.upgrades.coffee.costs[0]}$)`, { fontSize: '14px', color: '#ffffff' }).setOrigin(0.5).setDepth(22);

        btn3.on('pointerover', () => {
            this.tooltipText.setText(this.t('coffeeDesc'));
            this.tooltipText.setPosition(startX + 390, startY + 130);
            this.tooltipText.setVisible(true);
        });
        btn3.on('pointerout', () => this.tooltipText.setVisible(false));

        btn3.on('pointerdown', () => {
            let up = this.upgrades.coffee;
            if (up.level < up.max) {
                if (this.budget >= up.costs[up.level]) {
                    this.budget -= up.costs[up.level];
                    up.level++;
                    this.updateResourceBars();
                    this.playSound('money');
                    
                    if (up.level < up.max) {
                        txt3.setText(`${this.t('coffeeUpgrade')} [${this.t('lvl')} ${up.level}] (${up.costs[up.level]}$)`);
                    } else {
                        txt3.setText(`${this.t('coffeeUpgrade')} [${this.t('maxLvl')}]`);
                        btn3.setFillStyle(0x27ae60);
                    }
                } else {
                    this.showWarning(startX + 200, startY + 130, this.t('insufficientBudget'));
                }
            }
        });
    }

    showWarning(x, y, message) {
        const warning = this.add.text(x, y, message, {
            fontSize: '18px', color: '#e74c3c', fontStyle: 'bold',
            backgroundColor: 'rgba(0,0,0,0.8)', padding: { x: 5, y: 5 }
        }).setOrigin(0.5).setDepth(300);

        this.tweens.add({
            targets: warning, y: y - 50, alpha: 0, duration: 1500, ease: 'Power2',
            onComplete: () => warning.destroy()
        });
        
        this.playSound('click'); 
        this.cameras.main.shake(100, 0.005);
    }

    showFloatingText(x, y, message, color) {
        const floatText = this.add.text(x, y, message, {
            fontSize: '22px', color: color, fontStyle: 'bold',
            stroke: '#000000', strokeThickness: 4
        }).setOrigin(0.5).setDepth(300);

        this.tweens.add({
            targets: floatText, y: y - 50, alpha: 0, duration: 1500, ease: 'Power2',
            onComplete: () => floatText.destroy()
        });
    }

    startProcessing(machine, product, machineIndex) {
        if (machine.isBroken) return;
        
        machine.busy = true;
        product.productData.state = 'processing';
        
        product.x = machine.x;
        product.y = machine.y;

        machine.led.clear();
        machine.led.fillStyle(0xe74c3c, 1);
        machine.led.fillCircle(machine.ledX, machine.ledY, 8);
        machine.led.fillStyle(0xe74c3c, 0.3);
        machine.led.fillCircle(machine.ledX, machine.ledY, 11);

        this.time.delayedCall(machine.processingTime, () => {
            if (!machine.isBroken) {
                this.finishProcessing(machine, product, machineIndex);
            } else {
                machine.queue.unshift(product); 
                machine.busy = false; 
            }
        });
    }

    finishProcessing(machine, product, machineIndex) {
        machine.busy = false;
        product.productData.state = 'moving';
        product.productData.processedBy.push(machineIndex);

        machine.led.clear();
        machine.led.fillStyle(0x2ecc71, 1);
        machine.led.fillCircle(machine.ledX, machine.ledY, 8);
        machine.led.fillStyle(0x2ecc71, 0.3);
        machine.led.fillCircle(machine.ledX, machine.ledY, 11);

        if (machine.queue.length > 0 && !machine.isBroken) {
            const nextProduct = machine.queue.shift();
            this.startProcessing(machine, nextProduct, machineIndex);
        }
    }

    updateStateMachine(totalQueue) {
        let newState = this.currentState;

        if (this.currentState === 'normal') {
            if (totalQueue >= 4) newState = 'stress';
        } 
        else if (this.currentState === 'stress') {
            if (totalQueue <= 2) newState = 'normal';
            if (totalQueue >= 8) newState = 'crisis';
        } 
        else if (this.currentState === 'crisis') {
            if (totalQueue <= 6) newState = 'stress';
        }

        if (this.currentState !== newState) {
            this.currentState = newState;
            
            let newCharacterKey = newState === 'crisis' ? 'kriz' : (newState === 'stress' ? 'stres' : 'mudur');
            if (this.textures.exists(newCharacterKey)) {
                this.character.setTexture(newCharacterKey);
            } else {
                this.character.setTexture('mudur');
            }
            
            if (newState === 'crisis') {
                this.cameras.main.shake(200, 0.005);
            }
        }
    }

    startAmbientSound() {
        if (!this.sound || !this.sound.context) return;
        
        const ctx = this.sound.context;
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        
        this.ambientOsc = ctx.createOscillator();
        this.ambientGain = ctx.createGain();
        
        this.ambientOsc.type = 'triangle'; 
        this.ambientOsc.frequency.setValueAtTime(120, ctx.currentTime); 
        this.ambientGain.gain.setValueAtTime(0.08, ctx.currentTime); 
        
        this.ambientOsc.connect(this.ambientGain);
        this.ambientGain.connect(ctx.destination);
        
        this.ambientOsc.start();
        
        this.time.addEvent({
            delay: 800, 
            callback: () => {
                if (!this.isPaused && Math.random() > 0.6) {
                    this.playSound('thud');
                }
            },
            loop: true
        });
    }

    playSound(type) {
        if (!this.sound || !this.sound.context) return;
        
        const ctx = this.sound.context;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        const now = ctx.currentTime;

        if (type === 'click') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, now);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.start(now);
            osc.stop(now + 0.05);
        } 
        else if (type === 'thud') {
            osc.type = 'square'; 
            osc.frequency.setValueAtTime(80, now);
            osc.frequency.exponentialRampToValueAtTime(10, now + 0.1);
            gain.gain.setValueAtTime(0.06, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
            osc.start(now);
            osc.stop(now + 0.1);
        }
        else if (type === 'money') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523, now); 
            osc.frequency.setValueAtTime(659, now + 0.08); 
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
            osc.start(now);
            osc.stop(now + 0.25);
        } 
        else if (type === 'alarm') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.linearRampToValueAtTime(300, now + 0.2);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            osc.start(now);
            osc.stop(now + 0.4);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    parent: 'game-container',
    backgroundColor: '#c8d6e5',
    scene: MainScene
};

const game = new Phaser.Game(config);