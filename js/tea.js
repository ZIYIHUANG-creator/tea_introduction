// 茶叶页面交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 筛选功能
    const filterButtons = document.querySelectorAll('.tea-filter-buttons .filter-btn');
    const teaCards = document.querySelectorAll('.tea-type-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 为当前点击的按钮添加active类
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            teaCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-type') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // 茶叶详情模态框
    const teaDetailModal = document.getElementById('teaDetailModal');
    const teaDetailButtons = document.querySelectorAll('.tea-detail-btn');
    const closeBtn = teaDetailModal.querySelector('.close-btn');
    
    // 茶叶详细信息
    const teaDetails = {
        'lvcha': {
            title: '🍃 绿茶 - 不发酵的清新之选',
            image: 'images/lvcha/1.jpg',
            content: `
                <div class="tea-info-grid">
                    <div class="tea-info-item">
                        <h4>发酵程度</h4>
                        <p>0% (不发酵)</p>
                    </div>
                    <div class="tea-info-item">
                        <h4>茶性</h4>
                        <p>性寒</p>
                    </div>
                    <div class="tea-info-item">
                        <h4>适宜人群</h4>
                        <p>体质偏热、胃火旺者</p>
                    </div>
                    <div class="tea-info-item">
                        <h4>冲泡温度</h4>
                        <p>80-85°C</p>
                    </div>
                </div>
                
                <h4>主要产地</h4>
                <p>浙江、江苏、安徽、四川等地</p>
                
                <h4>品质特征</h4>
                <p>干茶绿、汤色绿、叶底绿，香气清高，滋味鲜爽</p>
                
                <div class="tea-process">
                    <h4>制作工艺</h4>
                    <ol>
                        <li><strong>杀青：</strong>高温破坏酶活性，阻止氧化</li>
                        <li><strong>揉捻：</strong>塑造外形，促进内含物渗出</li>
                        <li><strong>干燥：</strong>去除水分，固定品质</li>
                    </ol>
                </div>
                
                <h4>保健功效</h4>
                <p>提神醒脑、清热解毒、降脂减肥、防癌抗癌</p>
                
                <h4>著名品种</h4>
                <p>西湖龙井、碧螺春、黄山毛峰、信阳毛尖、六安瓜片</p>
            `
        },
        'hongcha': {
            title: '🔴 红茶 - 全发酵的醇厚之选',
            image: 'images/hongcha/1.jpg',
            content: `
                <div class="tea-info-grid">
                    <div class="tea-info-item">
                        <h4>发酵程度</h4>
                        <p>80-90% (全发酵)</p>
                    </div>
                    <div class="tea-info-item">
                        <h4>茶性</h4>
                        <p>性温</p>
                    </div>
                    <div class="tea-info-item">
                        <h4>适宜人群</h4>
                        <p>脾胃虚寒、体弱者</p>
                    </div>
                    <div class="tea-info-item">
                        <h4>冲泡温度</h4>
                        <p>90-100°C</p>
                    </div>
                </div>
                
                <h4>主要产地</h4>
                <p>福建、云南、安徽、四川等地</p>
                
                <h4>品质特征</h4>
                <p>红汤红叶，香气甜醇，滋味醇厚</p>
                
                <div class="tea-process">
                    <h4>制作工艺</h4>
                    <ol>
                        <li><strong>萎凋：</strong>散失水分，增强酶活性</li>
                        <li><strong>揉捻：</strong>破坏细胞结构，促进发酵</li>
                        <li><strong>发酵：</strong>多酚类物质氧化</li>
                        <li><strong>干燥：</strong>终止发酵，固定品质</li>
                    </ol>
                </div>
                
                <h4>保健功效</h4>
                <p>暖胃养生、消食解腻、提神消疲、生津清热</p>
                
                <h4>著名品种</h4>
                <p>祁门红茶、滇红、正山小种、金骏眉、英德红茶</p>
            `
        },
        // 可以继续添加其他茶叶的详细信息...
        'wulongcha': {
            title: '🌿 乌龙茶 - 半发酵的馥郁之选',
            image: 'images/wulongcha/1.jpg',
            content: `
                <div class="tea-info-grid">
                    <div class="tea-info-item">
                        <h4>发酵程度</h4>
                        <p>30-70% (半发酵)</p>
                    </div>
                    <div class="tea-info-item">
                        <h4>茶性</h4>
                        <p>性平</p>
                    </div>
                    <div class="tea-info-item">
                        <h4>适宜人群</h4>
                        <p>大多数人群</p>
                    </div>
                    <div class="tea-info-item">
                        <h4>冲泡温度</h4>
                        <p>95-100°C</p>
                    </div>
                </div>
                
                <h4>主要产地</h4>
                <p>福建、广东、台湾等地</p>
                
                <h4>品质特征</h4>
                <p>绿叶红边，香气馥郁，滋味醇厚回甘</p>
                
                <div class="tea-process">
                    <h4>制作工艺</h4>
                    <ol>
                        <li><strong>萎凋：</strong>散失水分</li>
                        <li><strong>做青：</strong>摇青与晾青交替</li>
                        <li><strong>炒青：</strong>高温杀青</li>
                        <li><strong>揉捻：</strong>塑造外形</li>
                        <li><strong>干燥：</strong>去除水分</li>
                    </ol>
                </div>
                
                <h4>保健功效</h4>
                <p>减肥美容、降血脂、抗衰老、提神益思</p>
                
                <h4>著名品种</h4>
                <p>铁观音、大红袍、凤凰单丛、冻顶乌龙、武夷岩茶</p>
            `
        }
    };
    
    // 打开详情模态框
    teaDetailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const teaType = this.getAttribute('data-tea');
            const teaDetail = teaDetails[teaType];
            
            if (teaDetail) {
                document.getElementById('teaModalImage').style.backgroundImage = `url('${teaDetail.image}')`;
                document.getElementById('teaModalTitle').textContent = teaDetail.title;
                document.getElementById('teaModalContent').innerHTML = teaDetail.content;
                
                teaDetailModal.style.display = 'block';
                document.body.classList.add('modal-open');
            }
        });
    });
    
    // 关闭模态框
    closeBtn.addEventListener('click', function() {
        teaDetailModal.style.display = 'none';
        document.body.classList.remove('modal-open');
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === teaDetailModal) {
            teaDetailModal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
});
