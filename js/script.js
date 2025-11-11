// 分类标签功能
function initCategoryTags() {
    const categoryTags = document.querySelectorAll('.category-tag');
    
    categoryTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            navigateToCategory(category);
        });
        
        // 添加键盘支持
        tag.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const category = this.getAttribute('data-category');
                navigateToCategory(category);
            }
        });
        
        // 设置可访问性
        tag.setAttribute('tabindex', '0');
        tag.setAttribute('role', 'button');
        tag.setAttribute('aria-label', `查看${getCategoryName(category)}详情`);
    });
}

// 跳转到分类页面
function navigateToCategory(category) {
    const pageMap = {
        'mountains': 'mountains.html?from=category-tags',
        'rivers': 'rivers.html?from=category-tags',
        'regions': 'regions.html?from=category-tags'
    };
    
    const page = pageMap[category];
    if (page) {
        // 添加点击反馈
        const tag = document.querySelector(`[data-category="${category}"]`);
        tag.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            window.location.href = page;
        }, 150);
    }
}

// 获取分类名称
function getCategoryName(category) {
    const names = {
        'mountains': '名山峻岭',
        'rivers': '江河湖海',
        'regions': '区域特色'
    };
    return names[category] || category;
}
// 主题切换功能 - 修复版本
function initTheme() {
    const themeSwitch = document.getElementById('theme-checkbox');
    const themeLabel = document.querySelector('.theme-label');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // 应用保存的主题
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'light') {
        themeSwitch.checked = true;
        themeLabel.textContent = '深色模式';
    } else {
        themeLabel.textContent = '浅色模式';
    }
    
    // 切换主题事件 - 修复事件冒泡问题
    themeSwitch.addEventListener('change', function(e) {
        // 阻止事件冒泡，避免影响其他元素
        e.stopPropagation();
        
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeLabel.textContent = '深色模式';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeLabel.textContent = '浅色模式';
        }
        
        // 强制重新计算样式
        document.body.clientWidth;
    });
}
const locationData = {
    mountain: {
        1: {
            title: "黄山",
            image: "images/huangshan/1.jpg",
            description: "黄山位于安徽省南部，以奇松、怪石、云海、温泉'四绝'著称。",
            details: `
                <h3>详细信息</h3>
                <ul>
                    <li><strong>海拔：</strong>1864.8米（莲花峰）</li>
                    <li><strong>位置：</strong>安徽省黄山市</li>
                    <li><strong>特色景点：</strong>迎客松、光明顶、天都峰、西海大峡谷</li>
                    <li><strong>最佳游览时间：</strong>春季和秋季</li>
                    <li><strong>文化遗产：</strong>世界文化与自然双重遗产</li>
                </ul>
                <p>黄山被誉为"天下第一奇山"，其雄伟壮观的自然景观和深厚的文化底蕴吸引了无数游客和文人墨客。</p>
            `
        },
        2: {
            title: "泰山",
            image: "images/taishan/1.jpg",
            description: "泰山位于山东省中部，有'五岳之首'、'天下第一山'之称。",
            details: `
                <h3>详细信息</h3>
                <ul>
                    <li><strong>海拔：</strong>1545米</li>
                    <li><strong>位置：</strong>山东省泰安市</li>
                    <li><strong>特色景点：</strong>南天门、日观峰、玉皇顶、十八盘</li>
                    <li><strong>文化意义：</strong>古代帝王封禅之地</li>
                    <li><strong>文化遗产：</strong>世界文化与自然双重遗产</li>
                </ul>
                <p>泰山是中华民族的象征，是东方文化的缩影，是"天人合一"思想的寄托之地。</p>
            `
        },
        3: {
            title: "珠穆朗玛峰",
            image: "images/zumulangma/8.jpg",
            description: "珠穆朗玛峰是世界海拔最高的山峰，被誉为'地球之巅'。",
            details: `
                <h3>详细信息</h3>
                <ul>
                    <li><strong>海拔：</strong>8848.86米</li>
                    <li><strong>位置：</strong>中国与尼泊尔边界</li>
                    <li><strong>首次登顶：</strong>1953年</li>
                    <li><strong>登山季节：</strong>4月-5月，9月-10月</li>
                    <li><strong>特色：</strong>世界最高峰</li>
                </ul>
                <p>珠穆朗玛峰是无数登山者向往的圣地，其壮丽的景色和严峻的挑战吸引着世界各地的探险家。</p>
            `
        }
    },
    river: {
        1: {
            title: "黄河",
            image: "images/huanghe/1.jpg",
            description: "黄河是中华民族的母亲河，发源于青藏高原，流经九个省区。",
            details: `
                <h3>详细信息</h3>
                <ul>
                    <li><strong>长度：</strong>5464公里</li>
                    <li><strong>发源地：</strong>青海省巴颜喀拉山脉</li>
                    <li><strong>流经省份：</strong>青海、四川、甘肃、宁夏、内蒙古、陕西、山西、河南、山东</li>
                    <li><strong>特色：</strong>中华文明的主要发源地</li>
                    <li><strong>著名景观：</strong>壶口瀑布、黄河石林</li>
                </ul>
                <p>黄河承载着中华民族五千年的文明历史，是中华文化的摇篮和象征。</p>
            `
        },
        2: {
            title: "长江",
            image: "images/changjiang/1.jpg",
            description: "长江是中国第一大河，世界第三长河，全长6300余公里。",
            details: `
                <h3>详细信息</h3>
                <ul>
                    <li><strong>长度：</strong>6300余公里</li>
                    <li><strong>发源地：</strong>青海省唐古拉山脉</li>
                    <li><strong>流经省份：</strong>青海、西藏、四川、云南、重庆、湖北、湖南、江西、安徽、江苏、上海</li>
                    <li><strong>特色：</strong>中国最重要的内河航道</li>
                    <li><strong>著名景观：</strong>三峡、武汉长江大桥</li>
                </ul>
                <p>长江流域是中国经济最发达的地区之一，孕育了灿烂的长江文明。</p>
            `
        },
        3: {
            title: "南海",
            image: "images/nanhai/1.jpg",
            description: "南海是中国三大边缘海之一，海域辽阔，资源丰富。",
            details: `
                <h3>详细信息</h3>
                <ul>
                    <li><strong>面积：</strong>约350万平方公里</li>
                    <li><strong>位置：</strong>中国南部</li>
                    <li><strong>主要岛屿：</strong>西沙群岛、南沙群岛、中沙群岛</li>
                    <li><strong>资源：</strong>丰富的石油、天然气和渔业资源</li>
                    <li><strong>战略地位：</strong>海上丝绸之路的重要通道</li>
                </ul>
                <p>南海是中国重要的海洋国土，具有重要的战略地位和经济价值。</p>
            `
        }
    },
    region: {
        1: {
            title: "北国风光",
            image: "images/beiguofengguang/1.jpg",
            description: "北国风光以冰雪景观著称，展现了北国特有的雄浑壮美。",
            details: `
                <h3>详细信息</h3>
                <ul>
                    <li><strong>代表地区：</strong>黑龙江、吉林、辽宁、内蒙古</li>
                    <li><strong>气候特点：</strong>温带季风气候，冬季寒冷漫长</li>
                    <li><strong>特色文化：</strong>冰雪文化、东北二人转</li>
                    <li><strong>著名景点：</strong>哈尔滨冰雕、长白山天池</li>
                    <li><strong>最佳游览时间：</strong>冬季（冰雪景观）和夏季（避暑）</li>
                </ul>
                <p>北国风光展现了北方地区独特的自然景观和人文风情，冬季的冰雪世界尤为壮观。</p>
            `
        },
        2: {
            title: "江南水乡",
            image: "images/jiangnanshuixiang/2.jpg",
            description: "江南水乡以小桥流水、古镇园林为特色。",
            details: `
                <h3>详细信息</h3>
                <ul>
                    <li><strong>代表地区：</strong>江苏、浙江、上海、安徽南部</li>
                    <li><strong>气候特点：</strong>亚热带季风气候，四季分明</li>
                    <li><strong>特色文化：</strong>吴越文化、江南园林</li>
                    <li><strong>著名景点：</strong>苏州园林、周庄、乌镇</li>
                    <li><strong>最佳游览时间：</strong>春季和秋季</li>
                </ul>
                <p>江南水乡以其温婉秀丽的自然风光和精致典雅的人文景观闻名于世。</p>
            `
        },
        3: {
            title: "西部高原",
            image: "images/xibugaoyuan/2.jpg",
            description: "西部高原以壮丽的高原风光、独特的民族文化为特色。",
            details: `
                <h3>详细信息</h3>
                <ul>
                    <li><strong>代表地区：</strong>西藏、青海、新疆、四川西部</li>
                    <li><strong>气候特点：</strong>高原气候，昼夜温差大</li>
                    <li><strong>特色文化：</strong>藏族文化、伊斯兰文化</li>
                    <li><strong>著名景点：</strong>布达拉宫、青海湖、喀纳斯</li>
                    <li><strong>最佳游览时间：</strong>5月-10月</li>
                </ul>
                <p>西部高原展现了中国的辽阔与多元，是体验独特民族文化和壮丽自然风光的绝佳之地。</p>
            `
        }
    }
};
// 修改暂停和恢复函数
function pauseCarousel() {
    clearInterval(carouselInterval);
    carouselContainer.classList.add('paused'); // 添加暂停状态类
}

function resumeCarousel() {
    clearInterval(carouselInterval);
    carouselContainer.classList.remove('paused'); // 移除暂停状态类
    if (currentImages.length > 1) {
        carouselInterval = setInterval(nextSlide, 3000);
    }
}
function initMapMarkers() {
    const markers = document.querySelectorAll('.location-marker');
    const locationDetail = document.getElementById('locationDetail');
    const initialPrompt = document.getElementById('initialPrompt');
    const carouselContainer = document.querySelector('.carousel-container');
    const detailContent = document.getElementById('detailContent');
    const carouselSlides = document.getElementById('carouselSlides');
    const carouselIndicators = document.getElementById('carouselIndicators');

    let currentCarouselIndex = 0;
    let currentImages = [];
    let carouselInterval;

    // 轮播控制函数
    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.carousel-indicator');

        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        if (slides[index]) {
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
        }

        currentCarouselIndex = index;
    }

    function nextSlide() {
        const nextIndex = (currentCarouselIndex + 1) % currentImages.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentCarouselIndex - 1 + currentImages.length) % currentImages.length;
        showSlide(prevIndex);
    }

    // 暂停轮播函数
    function pauseCarousel() {
        clearInterval(carouselInterval);
    }

    // 恢复轮播函数
    function resumeCarousel() {
        clearInterval(carouselInterval);
        if (currentImages.length > 1) {
            carouselInterval = setInterval(nextSlide, 2000); // 2秒轮播一次
        }
    }

    // 绑定轮播控制按钮
    document.getElementById('carouselPrev').addEventListener('click', prevSlide);
    document.getElementById('carouselNext').addEventListener('click', nextSlide);

    // 添加鼠标事件监听器
    if (carouselContainer) {
        // 鼠标进入轮播区域时暂停
        carouselContainer.addEventListener('mouseenter', pauseCarousel);

        // 鼠标离开轮播区域时恢复
        carouselContainer.addEventListener('mouseleave', resumeCarousel);
    }

    markers.forEach(marker => {
        marker.addEventListener('click', function () {
            const type = this.dataset.type;
            const id = this.dataset.id;

            // 根据类型和ID获取对应的数据
            const locationData = getLocationData(type, id);

            if (locationData) {
                // 隐藏初始提示，显示详情框架
                initialPrompt.style.display = 'none';
                carouselContainer.style.display = 'block';
                detailContent.style.display = 'block';

                // 激活详情框架
                locationDetail.classList.add('active');

                // 清空之前的轮播内容
                carouselSlides.innerHTML = '';
                carouselIndicators.innerHTML = '';
                currentImages = locationData.images || [];

                // 创建轮播图片
                currentImages.forEach((image, index) => {
                    const slide = document.createElement('div');
                    slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
                    slide.style.backgroundImage = `url(${image})`;
                    carouselSlides.appendChild(slide);

                    // 创建指示器
                    const indicator = document.createElement('button');
                    indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
                    indicator.addEventListener('click', () => showSlide(index));
                    carouselIndicators.appendChild(indicator);
                });

                // 更新详情内容（删除了解更多按钮）
                detailContent.innerHTML = `
                    <h3>${locationData.name}</h3>
                    <div class="panorama-stats">
                        ${locationData.stats ? locationData.stats.map(stat =>
                    `<span>${stat}</span>`
                ).join('') : ''}
                    </div>
                    <p>${locationData.description}</p>
                `;

                // 重置轮播索引
                currentCarouselIndex = 0;

                // 自动轮播（可选）
                pauseCarousel(); // 先清除之前的定时器
                if (currentImages.length > 1) {
                    resumeCarousel(); // 开始新的轮播
                }

                // 添加点击标记的动画反馈
                this.style.animation = 'pulse 0.5s ease';
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
            }
        });
    });

    // 添加地图标记悬停效果
    markers.forEach(marker => {
        marker.addEventListener('mouseenter', function () {
            this.style.transform = 'translate(-50%, -50%) scale(1.3)';
        });

        marker.addEventListener('mouseleave', function () {
            this.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}
// 详细信息数据
function getLocationData(type, id) {
    const data = {
        mountain: {
            '1': {
                name: '黄山',
                description: '黄山位于安徽省南部，以奇松、怪石、云海、温泉"四绝"著称，是中国十大名山之一，也是世界文化与自然双重遗产。',
                images: [
                    'images/huangshan/1.jpg',
                    'images/huangshan/2.jpg',
                    'images/huangshan/3.jpg',
                    'images/huangshan/4.jpg'
                ],
                stats: ['海拔: 1864米', '位置: 安徽省', '荣誉: 世界遗产']
            },
            '2': {
                name: '泰山',
                description: '泰山位于山东省中部，有"五岳之首"、"天下第一山"之称，是中华民族的象征，也是东方文化的缩影。',
                images: [
                    'images/taishan/1.jpg',
                    'images/taishan/2.jpg',
                    'images/taishan/3.jpg',
                    'images/taishan/4.jpg'
                ],
                stats: ['海拔: 1545米', '位置: 山东省', '荣誉: 五岳之首']
            },
            '3': {
                name: '珠穆朗玛峰',
                description: '珠穆朗玛峰位于中国与尼泊尔边界，是世界海拔最高的山峰，被誉为"地球之巅"，是无数登山者向往的圣地。',
                images: [
                    'images/zumulangma/1.jpg',
                    'images/zumulangma/2.jpg',
                    'images/zumulangma/3.jpg',
                    'images/zumulangma/4.jpg'
                ],
                stats: ['海拔: 8848米', '位置: 西藏', '荣誉: 世界最高峰']
            },
            '4': {
                name: '华山',
                description: '华山位于陕西省华阴市，以险峻著称，有"奇险天下第一山"之称，是五岳中的西岳，道教圣地之一。',
                images: [
                    'images/huashan/1.jpg',
                    'images/huashan/2.jpg',
                    'images/huashan/3.jpg',
                    'images/huashan/4.jpg'
                ],
                stats: ['海拔: 2154米', '位置: 陕西省', '称号: 西岳']
            },
            '5': {
                name: '峨眉山',
                description: '峨眉山位于四川省峨眉山市，是中国佛教名山之一，以秀丽的自然风光和丰富的佛教文化闻名于世。',
                images: [
                    'images/emeishan/1.jpg',
                    'images/emeishan/2.jpg',
                    'images/emeishan/3.jpg',
                    'images/emeishan/4.jpg'
                ],
                stats: ['海拔: 3099米', '位置: 四川省', '称号: 佛教名山']
            },
            '6': {
                name: '庐山',
                description: '庐山位于江西省九江市，以雄、奇、险、秀闻名于世，素有"匡庐奇秀甲天下"之美誉，是世界文化遗产。',
                images: [
                    'images/lushan/1.jpg',
                    'images/lushan/2.jpg',
                    'images/lushan/3.jpg',
                    'images/lushan/4.jpg'
                ],
                stats: ['海拔: 1474米', '位置: 江西省', '荣誉: 世界遗产']
            },
            '7': {
                name: '武夷山',
                description: '武夷山位于福建省武夷山市，以丹霞地貌著称，是世界文化与自然双重遗产，也是乌龙茶和红茶的发源地。',
                images: [
                    'images/wuyishan/1.jpg',
                    'images/wuyishan/2.jpg',
                    'images/wuyishan/3.jpg',
                    'images/wuyishan/4.jpg'
                ],
                stats: ['海拔: 2158米', '位置: 福建省', '荣誉: 双世遗']
            },
            '8': {
                name: '张家界',
                description: '张家界位于湖南省张家界市，以独特的石英砂岩峰林地貌闻名，是《阿凡达》电影中悬浮山的取景地。',
                images: [
                    'images/zhangjiajie/1.jpg',
                    'images/zhangjiajie/2.jpg',
                    'images/zhangjiajie/3.jpg',
                    'images/zhangjiajie/4.jpg'
                ],
                stats: ['海拔: 1262米', '位置: 湖南省', '特色: 砂岩峰林']
            },
            '9': {
                name: '长白山',
                description: '长白山位于吉林省东南部，是中国东北第一高峰，以天池、瀑布、林海等自然景观著称，是中朝界山。',
                images: [
                    'images/changbaishan/1.jpg',
                    'images/changbaishan/2.jpg',
                    'images/changbaishan/3.jpg',
                    'images/changbaishan/4.jpg'
                ],
                stats: ['海拔: 2691米', '位置: 吉林省', '特色: 天池']
            },
            '10': {
                name: '玉龙雪山',
                description: '玉龙雪山位于云南省丽江市，是北半球最南的大雪山，以险、奇、美、秀著称，是纳西族的神山。',
                images: [
                    'images/yulongxueshan/1.jpg',
                    'images/yulongxueshan/2.jpg',
                    'images/yulongxueshan/3.jpg',
                    'images/yulongxueshan/4.jpg'
                ],
                stats: ['海拔: 5596米', '位置: 云南省', '特色: 雪山景观']
            },
            '11': {
                name: '衡山',
                description: '衡山位于湖南省衡阳市，是五岳中的南岳，以秀丽的自然风光和深厚的宗教文化底蕴闻名。',
                images: [
                    'images/hengshan2/1.jpg',
                    'images/hengshan2/2.jpg',
                    'images/hengshan2/3.jpg',
                    'images/hengshan2/4.jpg'
                ],
                stats: ['海拔: 1300米', '位置: 湖南省', '称号: 南岳']
            },
            '12': {
                name: '恒山',
                description: '恒山位于山西省浑源县，是五岳中的北岳，以险峻的山势和悠久的道教文化历史著称。',
                images: [
                    'images/hengshan1/1.jpg',
                    'images/hengshan1/2.jpg',
                    'images/hengshan1/3.jpg',
                    'images/hengshan1/4.jpg'
                ],
                stats: ['海拔: 2016米', '位置: 山西省', '称号: 北岳']
            },
            '13': {
                name: '嵩山',
                description: '嵩山位于河南省登封市，是五岳中的中岳，以少林寺、中岳庙等丰富的文化遗迹闻名于世。',
                images: [
                    'images/songshan/1.jpg',
                    'images/songshan/2.jpg',
                    'images/songshan/3.jpg',
                    'images/songshan/4.jpg'
                ],
                stats: ['海拔: 1492米', '位置: 河南省', '称号: 中岳']
            },
            '14': {
    name: '塔里木盆地',
    description: '塔里木盆地位于中国新疆南部，是中国最大的内陆盆地，也是世界第二大流动沙漠——塔克拉玛干沙漠的所在地。这里有着独特的地理环境和丰富的自然资源。',
    images: [
        'images/tarim/1.jpg',
        'images/tarim/2.jpg',
        'images/tarim/3.jpg',
        'images/tarim/4.jpg'
    ],
    stats: ['面积: 约53万平方公里', '位置: 新疆南部', '特征: 中国最大内陆盆地']
}          
        },
        river: {
            '1': {
                name: '黄河',
                description: '黄河是中华民族的母亲河，发源于青藏高原，流经九个省区，全长5464公里，是中国第二长河，也是中华文明的主要发源地。',
                images: [
                    'images/huanghe/1.jpg',
                    'images/huanghe/2.jpg',
                    'images/huanghe/3.jpg',
                    'images/huanghe/4.jpg'
                ],
                stats: ['长度: 5464公里', '流域: 九省区', '称号: 母亲河']
            },
            '2': {
                name: '长江',
                description: '长江是中国第一大河，世界第三长河，全长6300余公里，流经11个省市区，孕育了灿烂的长江文明。',
                images: [
                    'images/changjiang/1.jpg',
                    'images/changjiang/2.jpg',
                    'images/changjiang/3.jpg',
                    'images/changjiang/4.jpg'
                ],
                stats: ['长度: 6300公里', '流域: 十一省市', '称号: 第一大河']
            },
            '3': {
                name: '南海',
                description: '南海是中国三大边缘海之一，海域辽阔，资源丰富，岛屿众多，是中国重要的海洋国土和海上丝绸之路的重要通道。',
                images: [
                    'images/nanhai/1.jpg',
                    'images/nanhai/2.jpg',
                    'images/nanhai/3.jpg',
                    'images/nanhai/4.jpg'
                ],
                stats: ['面积: 350万km²', '位置: 中国南部', '资源: 丰富多样']
            },
            '4': {
                name: '珠江',
                description: '珠江是中国南方最大河系，流经云南、贵州、广西、广东等省区，全长2320公里，是中国第三长河，水量仅次于长江。',
                images: [
                    'images/zhujiang/1.jpg',
                    'images/zhujiang/2.jpg',
                    'images/zhujiang/3.jpg',
                    'images/zhujiang/4.jpg'
                ],
                stats: ['长度: 2320公里', '流域: 南方六省', '称号: 南方母亲河']
            },
            '5': {
                name: '黑龙江',
                description: '黑龙江流经中国东北部，是中国与俄罗斯的界河，全长约4440公里，流域内森林茂密，资源丰富。',
                images: [
                    'images/heilongjiang/1.jpg',
                    'images/heilongjiang/2.jpg',
                    'images/heilongjiang/3.jpg',
                    'images/heilongjiang/4.jpg'
                ],
                stats: ['长度: 4440公里', '位置: 东北地区', '特点: 中俄界河']
            },
            '6': {
                name: '澜沧江',
                description: '澜沧江发源于青海省，流经西藏、云南，出境后称湄公河，是亚洲最重要的国际河流之一，水资源丰富。',
                images: [
                    'images/lancangjiang/1.jpg',
                    'images/lancangjiang/2.jpg',
                    'images/lancangjiang/3.jpg',
                    'images/lancangjiang/4.jpg'
                ],
                stats: ['长度: 2161公里', '流经: 青藏高原', '国际: 湄公河上游']
            },
            '7': {
                name: '雅鲁藏布江',
                description: '雅鲁藏布江是世界海拔最高的大河之一，发源于喜马拉雅山脉，流经西藏南部，最后注入印度洋。',
                images: [
                    'images/yaluzangbujiang/1.jpg',
                    'images/yaluzangbujiang/2.jpg',
                    'images/yaluzangbujiang/3.jpg',
                    'images/yaluzangbujiang/4.jpg'
                ],
                stats: ['长度: 2057公里', '位置: 西藏', '特点: 世界海拔最高']
            },
            '8': {
                name: '青海湖',
                description: '青海湖位于青海省，是中国最大的内陆咸水湖，面积4583平方公里，以壮丽的湖光山色和丰富的鸟类资源闻名。',
                images: [
                    'images/qinghaihu/1.jpg',
                    'images/qinghaihu/2.jpg',
                    'images/qinghaihu/3.jpg',
                    'images/qinghaihu/4.jpg'
                ],
                stats: ['面积: 4583km²', '位置: 青海省', '称号: 最大咸水湖']
            },
            '9': {
                name: '鄱阳湖',
                description: '鄱阳湖位于江西省北部，是中国第一大淡水湖，面积约3150平方公里，是重要的候鸟越冬地和生态保护区。',
                images: [
                    'images/poyanghu/1.jpg',
                    'images/poyanghu/2.jpg',
                    'images/poyanghu/3.jpg',
                    'images/poyanghu/4.jpg'
                ],
                stats: ['面积: 3150km²', '位置: 江西省', '称号: 第一大淡水湖']
            },
            '10': {
                name: '洞庭湖',
                description: '洞庭湖位于湖南省北部，是中国第二大淡水湖，素有"鱼米之乡"美誉，湖区风光秀丽，文化底蕴深厚。',
                images: [
                    'images/dongtinghu/1.jpg',
                    'images/dongtinghu/2.jpg',
                    'images/dongtinghu/3.jpg',
                    'images/dongtinghu/4.jpg'
                ],
                stats: ['面积: 2579km²', '位置: 湖南省', '称号: 第二大淡水湖']
            },
            '11': {
                name: '太湖',
                description: '太湖位于江苏、浙江两省交界处，是中国第三大淡水湖，面积2427平方公里，以优美的湖光山色和丰富的水产闻名。',
                images: [
                    'images/taihu/1.jpg',
                    'images/taihu/2.jpg',
                    'images/taihu/3.jpg',
                    'images/taihu/4.jpg'
                ],
                stats: ['面积: 2427km²', '位置: 江浙交界', '特点: 江南水乡']
            },
            '12': {
                name: '杭州西湖',
                description: '杭州西湖位于浙江省杭州市，是中国最著名的风景名胜之一，以其秀丽的湖光山色和深厚的文化底蕴被誉为"人间天堂"。',
                images: [
                    'images/xihu/1.jpg',
                    'images/xihu/2.jpg',
                    'images/xihu/3.jpg',
                    'images/xihu/4.jpg'
                ],
                stats: ['面积: 6.39km²', '位置: 杭州市', '荣誉: 世界遗产']
            }
        }
    };

    return data[type] ? data[type][id] : null;
}
// 游戏数据
const gameData = {
    mountain: {
        1: {  // 黄山
            title: "黄山拼图挑战",
            description: "通过拼图游戏了解黄山的奇松怪石",
            gameHtml: `
                <div class="game-section">
                    <h3>黄山拼图挑战</h3>
                    <p>点击下方按钮，开始黄山拼图挑战！体验黄山的奇松怪石美景</p>
                    <div class="external-game-link">
                        <!-- 预览图和跳转按钮 -->
                        <a href="huangshan-puzzle.html" class="btn btn-primary">🎮开始拼图挑战</a>
                    </div>
                </div>
            `
        },
        2: {  // 泰山 - 山水合成游戏
            title: "泰山山水合成",
            description: "通过合成游戏体验泰山的雄伟壮丽",
            gameHtml: `
                <div class="game-section">
                    <h3>泰山山水合成游戏</h3>
                    <p>合成山峰，感受泰山"会当凌绝顶，一览众山小"的雄伟气势</p>
                    <div class="external-game-link">
                        <div class="game-preview">
                            <div class="preview-image" style="background: linear-gradient(135deg, #0a192f, #112240); display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
                                山水合成
                            </div>
                            <div class="preview-overlay">
                                <span class="play-icon">▶</span>
                            </div>
                        </div>
                        
                        <div class="game-info">
                            <h4>泰山山水合成</h4>
                            <p>通过合成不同等级的山峰，最终合成雄伟的泰山</p>
                            <a href="sml.html" class="btn btn-primary">
                                🎮 开始游戏
                            </a>
                        </div>
                    </div>
                    
                    <div class="game-tips">
                        <p>💡 <strong>游戏提示：</strong>放下相同等级的山峰进行合成，小心不要让山峰堆得太高！</p>
                    </div>
                </div>
            `
        },
        3: {  // 珠穆朗玛峰的ID
            title: "珠穆朗玛峰2048挑战",
            description: "攀登数字高峰，体验珠穆朗玛峰的壮丽", 
            gameHtml: `
                <div class="game-section">
                    <h3>珠穆朗玛峰2048挑战</h3>
                    <p>点击下方按钮，开始攀登数字高峰！</p>
                    
                    <div class="external-game-link">
                        <div class="game-preview">
                            <div class="preview-image" style="background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d); display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
                                2048
                            </div>
                            <div class="preview-overlay">
                                <span class="play-icon">▶</span>
                            </div>
                        </div>
                        
                        <div class="game-info">
                            <h4>珠穆朗玛峰2048</h4>
                            <p>专为山河主题定制的2048游戏，体验数字攀登的乐趣</p>
                            <a href="zhumulangma.html" class="btn btn-primary">
                                🎮 开始挑战
                            </a>
                        </div>
                    </div>
                    
                    <div class="game-tips">
                        <p>💡 <strong>游戏提示：</strong>使用方向键移动方块，相同数字会合并，目标是合成2048！</p>
                    </div>
                </div>
            `
        }
    },
    river: {
    1: {  // 黄河
        title: "黄河漂流记",
        description: "沿着黄河漂流，收集沿岸风景", 
        gameHtml: `
            <div class="game-section">
                <h3>黄河漂流记</h3>
                <p>点击下方按钮，开始黄河漂流冒险！</p>
                <div class="external-game-link">
                    <!-- 预览图和跳转按钮 -->
                    <a href="huanghe-river.html" class="btn btn-primary">🎮 开始漂流冒险</a>
                </div>
            </div>
        `
    },
    2: {  // 长江 - 长江守护者游戏
        title: "长江守护者",
        description: "保护长江生态环境，清理污染物",
        gameHtml: `
            <div class="game-section">
                <h3>长江守护者</h3>
                <p>驾驶江南小船，清理长江污染物，保护水乡生态环境</p>
                <div class="external-game-link">
                    <div class="game-preview">
                        <div class="preview-image" style="background: linear-gradient(135deg, #0a192f, #112240); display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
                            长江守护
                        </div>
                        <div class="preview-overlay">
                            <span class="play-icon">▶</span>
                        </div>
                    </div>
                    
                    <div class="game-info">
                        <h4>长江守护者</h4>
                        <p>射击游戏，保护长江生态环境，清理污染物</p>
                        <a href="changjiang-guardian.html" class="btn btn-primary">
                            🎮 开始守护
                        </a>
                    </div>
                </div>
                
                <div class="game-tips">
                    <p>💡 <strong>游戏提示：</strong>使用WASD移动，鼠标瞄准射击，收集氧气罐补充氧气！</p>
                </div>
            </div>
        `
    },
    3: {  // 南海 - 大鱼吃小鱼
        title: "南海大鱼吃小鱼",
        description: "在南海深海中生存成长，体验海洋生态",
        gameHtml: `
            <div class="game-section">
                <h3>南海大鱼吃小鱼</h3>
                <p>在南海的深海中，你是一条小鱼，需要不断成长，躲避大鱼，吃掉小鱼和虾蟹！</p>
                <div class="external-game-link">
                    <div class="game-preview">
                        <div class="preview-image" style="background: linear-gradient(135deg, #0a192f, #112240); display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
                            南海冒险
                        </div>
                        <div class="preview-overlay">
                            <span class="play-icon">▶</span>
                        </div>
                    </div>
                    
                    <div class="game-info">
                        <h4>南海大鱼吃小鱼</h4>
                        <p>生存游戏，吃掉小鱼躲避大鱼，不断成长壮大</p>
                        <a href="nanhai-game.html" class="btn btn-primary">
                            🎮 开始冒险
                        </a>
                    </div>
                </div>
                
                <div class="game-tips">
                    <p>💡 <strong>游戏提示：</strong>使用WASD或鼠标移动，吃掉比你小的鱼，躲避比你大的鱼！</p>
                    <p>🐟 <strong>鱼类种类：</strong>虾米、螃蟹、小鱼、热带鱼、鲨鱼、海龟、鲸鱼等15+种海洋生物</p>
                </div>
            </div>
        `
    }
},
region: {
  1: {  // 北国风光
    title: "北国风光华容道", 
    description: "滑动拼图，还原北国冰雪美景",
    gameHtml: `
      <div class="game-section">
        <h3>北国风光华容道</h3>
        <p>点击下方按钮，开始北国风光华容道挑战！</p>
        <div class="external-game-link">
          <a href="beiguo-sliding.html" class="btn btn-primary">🎮 开始华容道挑战</a>
        </div>
      </div>
    `
  },
  2: {  // 江南水乡消消乐
            title: "江南水乡消消乐",
            description: "消除相同图案，体验江南水乡的温婉韵味", 
            gameHtml: `
                <div class="game-section">
                    <h3>江南水乡消消乐</h3>
                    <p>点击下方按钮，开始江南水乡消消乐挑战！</p>
                    <div class="external-game-link">
                        <a href="jiangnanshuixiang.html" class="btn btn-primary">🎮 开始消消乐挑战</a>
                    </div>
                </div>
            `
        },
        3: {  // 高原牦牛骑手
            title: "高原牦牛骑手",
            description: "在辽阔高原上骑行牦牛，体验西部探险的刺激",
            gameHtml: `
                <div class="game-section">
                    <h3>高原牦牛骑手</h3>
                    <p>驾驭牦牛穿越高原，收集经幡和酥油，避开障碍物</p>
                    <div class="external-game-link">
                        <div class="game-preview">
                            <div class="preview-image" style="background: linear-gradient(135deg, #0a192f, #112240); display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
                                牦牛骑行
                            </div>
                            <div class="preview-overlay">
                                <span class="play-icon">▶</span>
                            </div>
                        </div>
                        
                        <div class="game-info">
                            <h4>高原牦牛骑手</h4>
                            <p>在辽阔的西部高原上骑行牦牛，随着时间推移速度会越来越快！</p>
                            <a href="plateau-game.html" class="btn btn-primary">
                                🎮 开始探险
                            </a>
                        </div>
                    </div>
                    
                    <div class="game-tips">
                        <p>💡 <strong>游戏提示：</strong>使用方向键移动，空格键跳跃，避开岩石和河流！</p>
                    </div>
                </div>
            `
        }
    }
};

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('quiz')) {
        new MountainRiverQuiz();
    }
    initCategoryTags();
    initTheme();
    // 模态框功能
    const modal = document.getElementById('infoModal');
    const closeBtn = document.querySelector('.close-btn');
    const learnMoreBtns = document.querySelectorAll('.filter-btn');
    const logo = document.querySelector('.logo-image');
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // 添加键盘可访问性
        logo.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }

    // 打开模态框
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            const id = this.getAttribute('data-id');
            const data = locationData[type][id];
            const game = gameData[type] ? gameData[type][id] : null;
            
            if (data) {
                document.getElementById('modalImage').style.backgroundImage = `url('${data.image}')`;
                document.getElementById('modalTitle').textContent = data.title;
                document.getElementById('modalDescription').textContent = data.description;
                
                // 创建标签页内容
                const detailsTab = `
                    <div class="tab-content active" id="detailsTab">
                        ${data.details}
                    </div>
                `;
                
                const gameTab = game ? `
                    <div class="tab-content" id="gameTab">
                        ${game.gameHtml}
                    </div>
                ` : `
                    <div class="tab-content" id="gameTab">
                        <div class="no-game">
                            <h3>互动游戏开发中</h3>
                            <p>该景点的互动游戏正在开发中，敬请期待！</p>
                        </div>
                    </div>
                `;
                
                const tabsHtml = `
                    <div class="modal-tabs">
                        <button class="tab-btn active" onclick="switchTab('detailsTab')">详细信息</button>
                        <button class="tab-btn" onclick="switchTab('gameTab')">互动游戏</button>
                    </div>
                `;
                
                document.getElementById('modalDetails').innerHTML = `
                    ${tabsHtml}
                    ${detailsTab}
                    ${gameTab}
                `;
                
                modal.style.display = 'block';
                
                // 初始化游戏（如果有）
                if (game) {
                    setTimeout(() => {
                        if (type === 'mountain' && id === '1') {
                            initPuzzle();
                        } else if (type === 'mountain' && id === '2') {
                            initClimbingGame();
                        } else if (type === 'river' && id === '1') {
                            initRiverGame();
                        } else if (type === 'region' && id === '1') {
                            initSlidingPuzzle();
                        }
                    }, 100);
                }
            }
        });
    });

    // 关闭模态框
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        // 停止黄河游戏
        if (riverGameInterval) {
            clearInterval(riverGameInterval);
            riverGameActive = false;
        }
    });

    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            // 停止黄河游戏
            if (riverGameInterval) {
                clearInterval(riverGameInterval);
                riverGameActive = false;
            }
        }
    });

    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if(window.scrollY > 50) {
            header.style.background = 'rgba(10, 25, 47, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(10, 25, 47, 0.9)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // 探索更多按钮 - 修改为支持下拉菜单
document.getElementById('exploreMore').addEventListener('click', function(e) {
    e.preventDefault();
    // 点击按钮时也可以显示下拉菜单（可选）
    const dropdown = this.parentElement.querySelector('.explore-dropdown');
    dropdown.style.opacity = dropdown.style.opacity === '1' ? '0' : '1';
    dropdown.style.visibility = dropdown.style.visibility === 'visible' ? 'hidden' : 'visible';
    dropdown.style.transform = dropdown.style.transform === 'translateY(0px)' ? 'translateY(-10px)' : 'translateY(0)';
});

// 点击页面其他区域关闭下拉菜单
document.addEventListener('click', function(e) {
    const exploreContainer = document.querySelector('.explore-more-container');
    const dropdown = document.querySelector('.explore-dropdown');
    
    if (!exploreContainer.contains(e.target)) {
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
        dropdown.style.transform = 'translateY(-10px)';
    }
});
});

// 标签页切换函数
function switchTab(tabName) {
    // 隐藏所有标签内容
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 移除所有标签按钮的active类
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 显示选中的标签内容
    document.getElementById(tabName).classList.add('active');
    
    // 激活对应的标签按钮
    event.target.classList.add('active');
}

// ========== 数据可视化功能 ==========
class DataVisualization {
    // 在DataVisualization类中添加完整的颜色管理
constructor() {
    this.charts = {};
    this.init();
    this.setupThemeListener();
}
updateAllChartsForTheme() {
    const colors = this.getChartColors();
    
    // 更新游客访问热度图表
    if (this.charts.visitor) {
        this.charts.visitor.options.scales.x.grid.color = colors.gridLine;
        this.charts.visitor.options.scales.y.grid.color = colors.gridLine;
        this.charts.visitor.update();
    }
    
    // 更新四季访问分布图表
    if (this.charts.season) {
        this.charts.season.options.scales.r.grid.color = colors.gridLine;
        this.charts.season.options.scales.r.angleLines.color = colors.angleLine;
        this.charts.season.update();
    }
}

// 获取当前主题的颜色
getChartColors() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    return {
        textPrimary: isLight ? '#2d3748' : '#e6f1ff',
        textSecondary: isLight ? '#4a5568' : '#a8b2d1',
        gridLine: isLight ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.1)', // 浅色主题用深灰色网格线
        angleLine: isLight ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.1)', // 浅色主题用深灰色角度线
        pointLabel: isLight ? '#4a5568' : '#a8b2d1',
        tooltipBg: isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)',
        tooltipBorder: isLight ? '#3182ce' : '#64ffda'
    };
}

// 更新所有图表颜色
updateAllChartColors() {
    const colors = this.getChartColors();
    
    Object.values(this.charts).forEach(chart => {
        if (chart && chart.options) {
            this.updateChartColors(chart, colors);
            chart.update();
        }
    });
}

// 更新单个图表颜色
updateChartColors(chart, colors) {
    // 更新坐标轴
    if (chart.options.scales) {
        // 柱状图坐标轴
        if (chart.options.scales.x && chart.options.scales.x.ticks) {
            chart.options.scales.x.ticks.color = colors.textSecondary;
        }
        if (chart.options.scales.y && chart.options.scales.y.ticks) {
            chart.options.scales.y.ticks.color = colors.textSecondary;
        }
        if (chart.options.scales.y && chart.options.scales.y.title) {
            chart.options.scales.y.title.color = colors.textSecondary;
        }
        
        // 雷达图坐标轴
        if (chart.options.scales.r) {
            chart.options.scales.r.grid.color = colors.gridLine;
            chart.options.scales.r.angleLines.color = colors.angleLine;
            if (chart.options.scales.r.pointLabels) {
                chart.options.scales.r.pointLabels.color = colors.pointLabel;
            }
        }
    }
    
    // 更新工具提示
    if (chart.options.plugins && chart.options.plugins.tooltip) {
        chart.options.plugins.tooltip.backgroundColor = colors.tooltipBg;
        chart.options.plugins.tooltip.borderColor = colors.tooltipBorder;
        chart.options.plugins.tooltip.titleColor = colors.tooltipBorder;
        chart.options.plugins.tooltip.bodyColor = colors.textPrimary;
    }
}
    
    init() {
        this.createMountainChart();
        this.createRiverChart();
        this.createVisitorChart();
        this.createSeasonChart();
        this.bindEvents();
        setTimeout(() => {
        this.updateAllChartsForTheme();
    }, 500);
    }
    
    createMountainChart() {
    const ctx = document.getElementById('mountainChart').getContext('2d');
    const data = {
        labels: ['珠穆朗玛峰', '乔戈里峰', '贡嘎山', '黄山', '泰山', '华山'],
        datasets: [{
            label: '海拔（米）',
            data: [8848, 8611, 7556, 1864, 1545, 2154],
            backgroundColor: [
                'rgba(100, 255, 218, 0.8)',
                'rgba(100, 255, 218, 0.7)',
                'rgba(100, 255, 218, 0.6)',
                'rgba(100, 255, 218, 0.5)',
                'rgba(100, 255, 218, 0.4)',
                'rgba(100, 255, 218, 0.3)'
            ],
            borderColor: [
                'rgba(100, 255, 218, 1)',
                'rgba(100, 255, 218, 1)',
                'rgba(100, 255, 218, 1)',
                'rgba(100, 255, 218, 1)',
                'rgba(100, 255, 218, 1)',
                'rgba(100, 255, 218, 1)'
            ],
            borderWidth: 2,
            borderRadius: 8,
            borderSkipped: false,
            // 增加悬停区域
            hoverBackgroundColor: [
                'rgba(100, 255, 218, 1)',
                'rgba(100, 255, 218, 0.9)',
                'rgba(100, 255, 218, 0.8)',
                'rgba(100, 255, 218, 0.7)',
                'rgba(100, 255, 218, 0.6)',
                'rgba(100, 255, 218, 0.5)'
            ],
            hoverBorderWidth: 3,
            hoverBorderColor: '#ffffff'
        }]
    };
    
    this.charts.mountain = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            // 关键：增加悬停检测灵敏度
            interaction: {
                mode: 'index',  // 改为index模式，更容易触发
                intersect: false, // 不要求精确相交
                axis: 'x' // 只在X轴方向检测
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#64ffda',
                    bodyColor: 'white',
                    borderColor: '#64ffda',
                    borderWidth: 1,
                    // 增加工具提示的显示范围
                    position: 'nearest',
                    callbacks: {
                        label: function(context) {
                            return `海拔: ${context.parsed.y}米`;
                        },
                        afterLabel: function(context) {
                            const mountainsInfo = {
                                '珠穆朗玛峰': '世界最高峰',
                                '乔戈里峰': '世界第二高峰',
                                '贡嘎山': '蜀山之王', 
                                '黄山': '天下第一奇山',
                                '泰山': '五岳之首',
                                '华山': '奇险天下第一山'
                            };
                            return mountainsInfo[context.label] || '';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    // 设置合适的Y轴范围，让低海拔山峰更明显
                    suggestedMax: 10000,
                    title: {
                        display: true,
                        text: '海拔（米）',
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim()
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.5)'  // 更深的黑
                    },
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim()
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim(),
                        maxRotation: 45
                    }
                }
            },
            // 增强悬停效果
            onHover: (event, elements) => {
                const canvas = event.native.target;
                if (elements.length > 0) {
                    canvas.style.cursor = 'pointer';
                    this.highlightMountainBar(elements[0].index);
                } else {
                    canvas.style.cursor = 'default';
                    this.resetMountainBarHighlight();
                }
            },
            // 增强点击检测
            onClick: (event, elements) => {
                // 即使没有精确悬停在柱子上，也尝试检测
                if (elements.length > 0) {
                    const index = elements[0].index;
                    this.handleMountainClick(index);
                } else {
                    // 如果没有检测到元素，尝试通过X坐标计算
                    const chart = this.charts.mountain;
                    if (chart && event.x !== undefined && event.y !== undefined) {
                        const elements = chart.getElementsAtEventForMode(event, 'index', { intersect: false }, true);
                        if (elements.length > 0) {
                            this.handleMountainClick(elements[0].index);
                        }
                    }
                }
            },
            // 动画配置
            animations: {
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });
    
    this.createMountainLegend();
}

// 处理山脉点击
handleMountainClick(index) {
    const mountainName = this.charts.mountain.data.labels[index];
    const mountainHeight = this.charts.mountain.data.datasets[0].data[index];
    this.showMountainDetail(mountainName, mountainHeight);
    
    // 点击动画
    this.animateMountainBarClick(index);
}

// 增强高亮效果
highlightMountainBar(index) {
    const chart = this.charts.mountain;
    if (chart) {
        const meta = chart.getDatasetMeta(0);
        meta.data.forEach((bar, i) => {
            if (i === index) {
                // 增强高亮效果
                bar.options.borderWidth = 4;
                bar.options.borderColor = '#ffffff';
                bar.options.backgroundColor = this.getHoverColor(bar.options.backgroundColor);
            }
        });
        chart.update('none');
    }
}

// 获取悬停颜色
getHoverColor(originalColor) {
    // 简单地将颜色变亮
    if (originalColor.includes('rgba')) {
        return originalColor.replace(/0\.[0-9]+\)$/, '1)');
    }
    return originalColor;
}

// 重置高亮
resetMountainBarHighlight() {
    const chart = this.charts.mountain;
    if (chart) {
        const meta = chart.getDatasetMeta(0);
        meta.data.forEach((bar, i) => {
            bar.options.borderWidth = 2;
            bar.options.borderColor = chart.data.datasets[0].borderColor[i];
            bar.options.backgroundColor = chart.data.datasets[0].backgroundColor[i];
        });
        chart.update('none');
    }
}

// 重置柱状图高亮
resetMountainBarHighlight() {
    const chart = this.charts.mountain;
    if (chart) {
        const meta = chart.getDatasetMeta(0);
        meta.data.forEach((bar) => {
            bar.options.borderWidth = 2;
            bar.options.borderColor = chart.data.datasets[0].borderColor[bar.index];
        });
        chart.update('none');
    }
}

// 柱状图点击动画
animateMountainBarClick(index) {
    const chart = this.charts.mountain;
    if (chart) {
        const meta = chart.getDatasetMeta(0);
        const bar = meta.data[index];
        
        // 临时改变颜色
        const originalColor = bar.options.backgroundColor;
        bar.options.backgroundColor = '#ffffff';
        chart.update();
        
        // 恢复颜色
        setTimeout(() => {
            bar.options.backgroundColor = originalColor;
            chart.update();
        }, 300);
    }
}

// 显示山脉详情
showMountainDetail(name, height) {
    const mountainDetails = {
        '珠穆朗玛峰': {
            description: '世界海拔最高的山峰，位于中国与尼泊尔边界，海拔8848.86米，被誉为"地球之巅"。',
            features: ['世界最高峰', '喜马拉雅山脉', '登山圣地'],
            icon: '🏔️',
            location: '中国-尼泊尔边境',
            range: '喜马拉雅山脉'
        },
        '乔戈里峰': {
            description: '世界第二高峰，海拔8611米，位于中国新疆与巴基斯坦边界，是喀喇昆仑山脉的主峰。',
            features: ['世界第二高峰', '喀喇昆仑山脉', '攀登难度极大'],
            icon: '⛰️',
            location: '中国新疆-巴基斯坦边境',
            range: '喀喇昆仑山脉'
        },
        '贡嘎山': {
            description: '四川省最高峰，海拔7556米，被称为"蜀山之王"，是横断山脉的最高峰。',
            features: ['蜀山之王', '横断山脉', '冰川发育'],
            icon: '🗻',
            location: '四川省康定市',
            range: '横断山脉'
        },
        '黄山': {
            description: '中国十大名山之一，以奇松、怪石、云海、温泉"四绝"著称，世界文化与自然双重遗产。',
            features: ['四绝奇观', '世界遗产', '道教圣地'],
            icon: '🌄',
            location: '安徽省黄山市',
            range: '黄山山脉'
        },
        '泰山': {
            description: '五岳之首，有"天下第一山"之称，古代帝王封禅之地，世界文化与自然双重遗产。',
            features: ['五岳独尊', '帝王封禅', '文化象征'],
            icon: '⛩️',
            location: '山东省泰安市',
            range: '泰山山脉'
        },
        '华山': {
            description: '以险著称，有"奇险天下第一山"之说，道教全真派圣地，五岳之一。',
            features: ['天下第一险', '道教圣地', '长空栈道'],
            icon: '🧗',
            location: '陕西省华阴市',
            range: '秦岭山脉'
        }
    };
    
    const detail = mountainDetails[name] || {
        description: '中国著名山峰。',
        features: ['著名山峰'],
        icon: '🏞️',
        location: '中国',
        range: '山脉'
    };
    
    this.showCustomMountainModal(name, height, detail);
}

// 自定义山脉详情模态框
showCustomMountainModal(name, height, detail) {
    const modal = document.createElement('div');
    modal.className = 'mountain-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
    `;
    
    const featuresHtml = detail.features.map(feature => 
        `<span class="mountain-feature">${feature}</span>`
    ).join('');
    
    modal.innerHTML = `
        <div class="mountain-modal-content" style="
            background: var(--bg-card);
            padding: 2rem;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            border: 2px solid var(--accent-color);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            position: relative;
        ">
            <button class="mountain-modal-close" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--accent-color);
                cursor: pointer;
            ">&times;</button>
            
            <div class="mountain-header" style="
                text-align: center;
                margin-bottom: 1.5rem;
            ">
                <div style="font-size: 3rem; margin-bottom: 0.5rem;">${detail.icon}</div>
                <h2 style="color: var(--accent-color); margin: 0.5rem 0;">${name}</h2>
                <div style="color: var(--text-secondary); font-size: 1.2rem;">海拔: ${height}米</div>
            </div>
            
            <div class="mountain-info" style="
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
                margin-bottom: 1.5rem;
            ">
                <div style="text-align: center;">
                    <div style="color: var(--text-secondary); font-size: 0.9rem;">地理位置</div>
                    <div style="color: var(--text-primary); font-weight: bold;">${detail.location}</div>
                </div>
                <div style="text-align: center;">
                    <div style="color: var(--text-secondary); font-size: 0.9rem;">所属山脉</div>
                    <div style="color: var(--text-primary); font-weight: bold;">${detail.range}</div>
                </div>
            </div>
            
            <div class="mountain-description" style="
                color: var(--text-primary);
                line-height: 1.6;
                margin-bottom: 1.5rem;
                text-align: justify;
            ">${detail.description}</div>
            
            <div class="mountain-features" style="
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin-bottom: 1.5rem;
                justify-content: center;
            ">${featuresHtml}</div>
            
            <button class="mountain-modal-ok" style="
                background: var(--accent-color);
                color: var(--bg-primary);
                border: none;
                padding: 0.8rem 2rem;
                border-radius: 5px;
                cursor: pointer;
                width: 100%;
                font-size: 1rem;
                font-weight: bold;
                transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(100, 255, 218, 0.3)'" 
            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">关闭</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 关闭事件
    const closeBtn = modal.querySelector('.mountain-modal-close');
    const okBtn = modal.querySelector('.mountain-modal-ok');
    const closeModal = () => {
        document.body.removeChild(modal);
    };
    
    closeBtn.addEventListener('click', closeModal);
    okBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

createMountainLegend() {
    const legend = document.getElementById('mountainLegend');
    const labels = this.charts.mountain.data.labels;
    const colors = this.charts.mountain.data.datasets[0].backgroundColor;
    
    labels.forEach((label, index) => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.style.cssText = `
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0.3rem 0.5rem;
            border-radius: 5px;
            margin: 0.2rem 0;
            display: flex;
            align-items: center;
        `;
        item.innerHTML = `
            <div class="legend-color" style="
                background-color: ${colors[index]};
                width: 12px;
                height: 12px;
                border-radius: 2px;
                margin-right: 0.5rem;
            "></div>
            <span>${label}</span>
        `;
        
        // 为图例添加交互
        item.addEventListener('click', () => {
            const height = this.charts.mountain.data.datasets[0].data[index];
            this.showMountainDetail(label, height);
        });
        
        item.addEventListener('mouseenter', () => {
            item.style.background = 'rgba(100, 255, 218, 0.1)';
            item.style.transform = 'translateX(5px)';
            this.highlightMountainBar(index);
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.background = 'transparent';
            item.style.transform = 'translateX(0)';
            this.resetMountainBarHighlight();
        });
        
        legend.appendChild(item);
    });
}
    
    createRiverChart() {
    const ctx = document.getElementById('riverChart').getContext('2d');
    
    const riverData = {
        labels: ['长江', '黄河', '澜沧江', '珠江', '黑龙江', '雅鲁藏布江'],
        datasets: [{
            label: '河流长度（公里）',
            data: [6300, 5464, 4880, 2320, 4370, 2057],
            backgroundColor: [
                'rgba(74, 144, 226, 0.8)',
                'rgba(247, 195, 79, 0.8)',
                'rgba(102, 204, 153, 0.8)',
                'rgba(179, 139, 250, 0.8)',
                'rgba(255, 119, 119, 0.8)',
                'rgba(86, 204, 242, 0.8)'
            ],
            borderColor: [
                'rgba(74, 144, 226, 1)',
                'rgba(247, 195, 79, 1)',
                'rgba(102, 204, 153, 1)',
                'rgba(179, 139, 250, 1)',
                'rgba(255, 119, 119, 1)',
                'rgba(86, 204, 242, 1)'
            ],
            borderWidth: 2,
            hoverBackgroundColor: [
                'rgba(74, 144, 226, 1)',
                'rgba(247, 195, 79, 1)',
                'rgba(102, 204, 153, 1)',
                'rgba(179, 139, 250, 1)',
                'rgba(255, 119, 119, 1)',
                'rgba(86, 204, 242, 1)'
            ],
            hoverBorderWidth: 3
        }]
    };
    
    this.charts.river = new Chart(ctx, {
        type: 'doughnut',  // 改为圆环图
        data: riverData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',  // 圆环的大小，百分比越大环越细
            plugins: {
                legend: {
                    display: false  // 使用自定义图例
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: '#64ffda',
                    bodyColor: 'white',
                    borderColor: '#64ffda',
                    borderWidth: 2,
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}公里`;
                        }
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                intersect: true
            },
            onHover: (event, elements) => {
                const canvas = event.native.target;
                if (elements.length > 0) {
                    canvas.style.cursor = 'pointer';
                    this.highlightRiverPoint(elements[0].index);
                } else {
                    canvas.style.cursor = 'default';
                    this.resetRiverHighlight();
                }
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    this.handleRiverClick(index);
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
    
    this.createRiverLegend();
}

// 高亮点
// 高亮点
highlightRiverPoint(index) {
    const chart = this.charts.river;
    if (chart) {
        const meta = chart.getDatasetMeta(0);
        
        // 重置所有扇区
        meta.data.forEach((arc, i) => {
            arc.options.borderWidth = 2;
        });
        
        // 高亮当前扇区
        if (meta.data[index]) {
            meta.data[index].options.borderWidth = 4;
        }
        
        chart.update('none');
    }
}

// 重置高亮
resetRiverHighlight() {
    const chart = this.charts.river;
    if (chart) {
        const meta = chart.getDatasetMeta(0);
        meta.data.forEach((arc) => {
            arc.options.borderWidth = 2;
        });
        chart.update('none');
    }
}

// 点击动画
animateRiverPointClick(index) {
    const chart = this.charts.river;
    if (chart) {
        const meta = chart.getDatasetMeta(0);
        const arc = meta.data[index];
        
        if (arc) {
            // 脉冲动画
            const originalRadius = arc.options.radius;
            arc.options.radius = originalRadius * 0.9;  // 向内收缩
            
            chart.update();
            
            setTimeout(() => {
                arc.options.radius = originalRadius;
                chart.update();
            }, 300);
        }
    }
}

// 重置高亮
resetRiverHighlight() {
    const chart = this.charts.river;
    if (chart) {
        const meta = chart.getDatasetMeta(0);
        meta.data.forEach((point) => {
            point.options.radius = 8;
            point.options.borderWidth = 2;
        });
        chart.update('none');
    }
}

// 处理点击
handleRiverClick(index) {
    const riverName = this.charts.river.data.labels[index];
    const riverLength = this.charts.river.data.datasets[0].data[index];
    
    // 点击动画
    this.animateRiverPointClick(index);
    
    // 显示详情
    setTimeout(() => {
        this.showRiverDetail(riverName, riverLength);
    }, 200);
}

// 点击动画
animateRiverPointClick(index) {
    const chart = this.charts.river;
    if (chart) {
        const meta = chart.getDatasetMeta(0);
        const point = meta.data[index];
        
        if (point) {
            // 脉冲动画
            const originalRadius = point.options.radius;
            point.options.radius = originalRadius * 1.5;
            
            chart.update();
            
            setTimeout(() => {
                point.options.radius = originalRadius;
                chart.update();
            }, 300);
        }
    }
}
// ========== 标准圆形饼图 ==========
 createRiverChart() {
    const ctx = document.getElementById('riverChart').getContext('2d');

    const riverData = {
        labels: ['长江', '黄河', '澜沧江', '珠江', '黑龙江', '雅鲁藏布江'],
        datasets: [{
            label: '河流长度（公里）',
            data: [6300, 5464, 4880, 2320, 4370, 2057],
            backgroundColor: [
                'rgba(74, 144, 226, 0.95)',
                'rgba(247, 195, 79, 0.95)',
                'rgba(102, 204, 153, 0.95)',
                'rgba(179, 139, 250, 0.95)',
                'rgba(255, 119, 119, 0.95)',
                'rgba(86, 204, 242, 0.95)'
            ],
            borderColor: '#ffffff',
            borderWidth: 3,
            hoverBackgroundColor: [
                'rgba(74, 144, 226, 1)',
                'rgba(247, 195, 79, 1)',
                'rgba(102, 204, 153, 1)',
                'rgba(179, 139, 250, 1)',
                'rgba(255, 119, 119, 1)',
                'rgba(86, 204, 242, 1)'
            ],
            hoverBorderWidth: 6,
            hoverBorderColor: '#ffffff',
        }]
    };

    if (this.charts.river) {
        this.charts.river.destroy();
    }

    this.charts.river = new Chart(ctx, {
        type: 'pie',
        data: riverData,
        options: {
            responsive: true,
            maintainAspectRatio: true, // 改为true保持宽高比
            aspectRatio: 1, // 设置为1确保正圆形
            rotation: -90,
            circumference: 360,
            // 精确交互配置
            events: ['mousemove', 'mouseout', 'click', 'touchstart'],
            interaction: {
                mode: 'point',
                intersect: true,
                axis: 'r'
            },
            layout: {
                padding: {
                    top: 10,
                    right: 10,
                    bottom: 10,
                    left: 10
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.95)',
                    titleColor: '#64ffda',
                    bodyColor: 'white',
                    borderColor: '#64ffda',
                    borderWidth: 2,
                    padding: 15,
                    cornerRadius: 10,
                    displayColors: true,
                    callbacks: {
                        label: function (context) {
                            return `${context.label}: ${context.parsed}公里`;
                        },
                        afterLabel: function (context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return `占比: ${percentage}%`;
                        }
                    }
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true,
                duration: 800,
                easing: 'easeOutQuart'
            },
            elements: {
                arc: {
                    borderWidth: 3,
                    hoverBorderWidth: 6,
                    hoverBackgroundColor: function (context) {
                        const index = context.dataIndex;
                        const colors = [
                            'rgba(74, 144, 226, 1)',
                            'rgba(247, 195, 79, 1)',
                            'rgba(102, 204, 153, 1)',
                            'rgba(179, 139, 250, 1)',
                            'rgba(255, 119, 119, 1)',
                            'rgba(86, 204, 242, 1)'
                        ];
                        return colors[index];
                    },
                    hoverOffset: 8
                }
            },
            onHover: (event, elements) => {
                const canvas = event.native.target;
                if (elements.length > 0) {
                    canvas.style.cursor = 'pointer';
                    this.highlightExactSegment(elements[0].index);
                } else {
                    canvas.style.cursor = 'default';
                    this.resetExactHighlight();
                }
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    this.handleExactClick(index);
                }
            }
        }
    });

    // 添加圆形检测和调整
    this.ensurePerfectCircle();

     this.createPreciseLegend();
     
}
    
// 确保完美圆形
ensurePerfectCircle() {
    const canvas = document.getElementById('riverChart');
    const container = canvas.parentElement;

    // 监听窗口大小变化，保持圆形
    const maintainCircle = () => {
        const containerWidth = container.clientWidth;
        // 设置容器高度等于宽度，确保正圆形
        container.style.height = containerWidth + 'px';

        // 强制图表重新渲染以适应新尺寸
        if (this.charts.river) {
            setTimeout(() => {
                this.charts.river.resize();
            }, 100);
        }
    };

    // 初始设置
    maintainCircle();

    // 监听窗口大小变化
    window.addEventListener('resize', maintainCircle);

    // 监听容器大小变化
    const resizeObserver = new ResizeObserver(maintainCircle);
    resizeObserver.observe(container);
}

// 精确高亮方法
highlightExactSegment(index) {
    const chart = this.charts.river;
    if (chart && chart.data) {
        try {
            const meta = chart.getDatasetMeta(0);
            if (meta && meta.data[index]) {
                // 重置所有扇形
                meta.data.forEach((arc, i) => {
                    if (arc) {
                        arc.options = {
                            ...arc.options,
                            borderWidth: 3,
                            borderColor: '#ffffff',
                            backgroundColor: chart.data.datasets[0].backgroundColor[i]
                        };
                    }
                });

                // 精确高亮当前扇形
                const arc = meta.data[index];
                arc.options = {
                    ...arc.options,
                    borderWidth: 8,
                    borderColor: '#64ffda',
                    backgroundColor: this.getHoverColor(chart.data.datasets[0].backgroundColor[index])
                };

                chart.update('none');
            }
        } catch (error) {
            console.error('精确高亮扇形时出错:', error);
        }
    }
}

// 精确重置高亮
resetExactHighlight() {
    const chart = this.charts.river;
    if (chart) {
        const meta = chart.getDatasetMeta(0);
        meta.data.forEach((arc, i) => {
            arc.options = {
                ...arc.options,
                borderWidth: 3,
                borderColor: '#ffffff',
                backgroundColor: chart.data.datasets[0].backgroundColor[i]
            };
        });
        chart.update('none');
    }
}

// 精确点击处理
handleExactClick(index) {
    if (!this.charts.river || !this.charts.river.data) return;

    const riverName = this.charts.river.data.labels[index];
    const riverLength = this.charts.river.data.datasets[0].data[index];

    console.log(`精确点击: ${riverName}, 长度: ${riverLength}公里`);

    // 精确点击动画
    this.animateExactSegmentClick(index);

    // 显示详情
    setTimeout(() => {
        this.showRiverDetail(riverName, riverLength);
    }, 300);
}

// 精确点击动画
animateExactSegmentClick(index) {
    const chart = this.charts.river;
    if (chart) {
        const meta = chart.getDatasetMeta(0);
        const arc = meta.data[index];

        if (arc) {
            // 精确的脉冲动画 - 只在当前扇形上
            const originalOuterRadius = arc.outerRadius;

            // 临时扩展当前扇形
            arc.outerRadius = originalOuterRadius * 1.08;
            chart.update();

            setTimeout(() => {
                arc.outerRadius = originalOuterRadius;
                chart.update();
            }, 200);
        }
    }
}

// 创建精确图例
createPreciseLegend() {
    const legend = document.getElementById('riverLegend');
    legend.innerHTML = '';

    const labels = ['长江', '黄河', '澜沧江', '珠江', '黑龙江', '雅鲁藏布江'];
    const colors = [
        'rgba(74, 144, 226, 0.95)',
        'rgba(247, 195, 79, 0.95)',
        'rgba(102, 204, 153, 0.95)',
        'rgba(179, 139, 250, 0.95)',
        'rgba(255, 119, 119, 0.95)',
        'rgba(86, 204, 242, 0.95)'
    ];

    labels.forEach((label, index) => {
        const item = document.createElement('div');
        item.className = 'legend-item precise-legend';
        item.style.cssText = `
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0.8rem 1rem;
            border-radius: 8px;
            margin: 0.3rem 0;
            display: flex;
            align-items: center;
            border: 1px solid transparent;
            background: rgba(255,255,255,0.05);
        `;

        item.innerHTML = `
            <div class="legend-color" style="
                background-color: ${colors[index]};
                width: 18px;
                height: 18px;
                border-radius: 4px;
                margin-right: 1rem;
                border: 2px solid ${colors[index]};
                transition: all 0.3s ease;
            "></div>
            <span style="font-weight: 500; font-size: 0.95rem;">${label}</span>
        `;

        // 精确的图例交互
        item.addEventListener('click', () => {
            const riverLength = this.charts.river.data.datasets[0].data[index];
            this.showRiverDetail(label, riverLength);
            this.highlightExactSegment(index);
        });

        item.addEventListener('mouseenter', () => {
            item.style.background = 'rgba(100, 255, 218, 0.15)';
            item.style.borderColor = 'rgba(100, 255, 218, 0.3)';
            item.style.transform = 'translateX(5px)';

            const colorBox = item.querySelector('.legend-color');
            colorBox.style.transform = 'scale(1.1)';
            colorBox.style.borderColor = '#ffffff';

            this.highlightExactSegment(index);
        });

        item.addEventListener('mouseleave', () => {
            item.style.background = 'rgba(255,255,255,0.05)';
            item.style.borderColor = 'transparent';
            item.style.transform = 'translateX(0)';

            const colorBox = item.querySelector('.legend-color');
            colorBox.style.transform = 'scale(1)';
            colorBox.style.borderColor = colors[index];

            this.resetExactHighlight();
        });

        legend.appendChild(item);
    });
}

// 获取悬停颜色
getHoverColor(originalColor) {
    if (originalColor.includes('rgba')) {
        return originalColor.replace(/0\.[0-9]+\)$/, '1)');
    }
    return originalColor;
}
// 更新图例创建
createRiverLegend() {
    const legend = document.getElementById('riverLegend');
    legend.innerHTML = '';
    
    const labels = this.charts.river.data.labels;
    const colors = this.charts.river.data.datasets[0].pointBackgroundColor;
    
    labels.forEach((label, index) => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.style.cssText = `
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0.5rem 0.8rem;
            border-radius: 8px;
            margin: 0.3rem 0;
            display: flex;
            align-items: center;
            border: 1px solid transparent;
        `;
        item.innerHTML = `
            <div class="legend-color" style="
                background-color: ${colors[index]};
                width: 16px;
                height: 16px;
                border-radius: 50%;
                margin-right: 0.8rem;
                border: 2px solid #ffffff;
                transition: all 0.3s ease;
            "></div>
            <span style="font-weight: 500;">${label}</span>
        `;
        
        // 图例交互
        item.addEventListener('click', () => {
            const length = this.charts.river.data.datasets[0].data[index];
            this.showRiverDetail(label, length);
        });
        
        item.addEventListener('mouseenter', () => {
            item.style.background = 'rgba(100, 255, 218, 0.1)';
            item.style.borderColor = 'rgba(100, 255, 218, 0.3)';
            item.style.transform = 'translateX(5px)';
            
            const colorBox = item.querySelector('.legend-color');
            colorBox.style.transform = 'scale(1.2)';
            
            this.highlightRiverPoint(index);
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.background = 'transparent';
            item.style.borderColor = 'transparent';
            item.style.transform = 'translateX(0)';
            
            const colorBox = item.querySelector('.legend-color');
            colorBox.style.transform = 'scale(1)';
            
            this.resetRiverHighlight();
        });
        
        legend.appendChild(item);
    });
}


// 增强图例交互
createRiverLegend() {
    const legend = document.getElementById('riverLegend');
    legend.innerHTML = ''; // 清空原有内容
    
    const labels = this.charts.river.data.labels;
    const colors = this.charts.river.data.datasets[0].backgroundColor;
    
    labels.forEach((label, index) => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.style.cssText = `
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0.5rem 0.8rem;
            border-radius: 8px;
            margin: 0.3rem 0;
            display: flex;
            align-items: center;
            border: 1px solid transparent;
        `;
        item.innerHTML = `
            <div class="legend-color" style="
                background-color: ${colors[index]};
                width: 16px;
                height: 16px;
                border-radius: 4px;
                margin-right: 0.8rem;
                border: 2px solid ${colors[index]};
                transition: all 0.3s ease;
            "></div>
            <span style="font-weight: 500;">${label}</span>
        `;
        
        // 为图例添加增强交互
        item.addEventListener('click', () => {
            const length = this.charts.river.data.datasets[0].data[index];
            this.showRiverDetail(label, length);
            
            // 图例点击反馈
            item.style.background = 'rgba(100, 255, 218, 0.2)';
            setTimeout(() => {
                item.style.background = 'transparent';
            }, 300);
        });
        
        item.addEventListener('mouseenter', () => {
            item.style.background = 'rgba(100, 255, 218, 0.1)';
            item.style.borderColor = 'rgba(100, 255, 218, 0.3)';
            item.style.transform = 'translateX(8px)';
            
            const colorBox = item.querySelector('.legend-color');
            colorBox.style.transform = 'scale(1.2)';
            colorBox.style.borderColor = '#ffffff';
            
            this.highlightRiver(index);
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.background = 'transparent';
            item.style.borderColor = 'transparent';
            item.style.transform = 'translateX(0)';
            
            const colorBox = item.querySelector('.legend-color');
            colorBox.style.transform = 'scale(1)';
            colorBox.style.borderColor = colors[index];
            
            this.resetRiverHighlight();
        });
        
        legend.appendChild(item);
    });
}

// 增强河流详情显示
showRiverDetail(name, length) {
    const riverDetails = {
        '长江': {
            description: '中国第一大河，世界第三长河，发源于青藏高原唐古拉山脉，流经11个省市区，注入东海。长江流域是中国经济最发达的地区之一。',
            features: ['世界第三长河', '黄金水道', '长江经济带', '6300公里'],
            icon: '🌊',
            importance: '经济命脉'
        },
        '黄河': {
            description: '中华民族的母亲河，中国第二长河，发源于青海巴颜喀拉山脉，流经9个省区，注入渤海。黄河流域是中华文明的主要发源地。',
            features: ['中华文明发源地', '含沙量大', '几字形河道', '5464公里'],
            icon: '💛',
            importance: '文明摇篮'
        },
        '澜沧江': {
            description: '发源于青海唐古拉山，流经西藏、云南，出境后称湄公河，是东南亚重要的国际河流，水能资源丰富。',
            features: ['国际河流', '水能丰富', '生物多样性', '4880公里'],
            icon: '🏔️',
            importance: '国际航道'
        },
        '珠江': {
            description: '中国南方最大河系，由西江、北江、东江汇流而成，年径流量居全国第二位，航运发达。',
            features: ['华南母亲河', '航运发达', '珠江三角洲', '2320公里'],
            icon: '🌉',
            importance: '南方枢纽'
        },
        '黑龙江': {
            description: '中俄界河，流域面积广阔，水资源丰富，冬季结冰期长，森林和矿产资源丰富。',
            features: ['中俄界河', '结冰期长', '森林资源丰富', '4370公里'],
            icon: '❄️',
            importance: '边境河流'
        },
        '雅鲁藏布江': {
            description: '世界海拔最高的大河，发源于喜马拉雅山脉，水能资源极其丰富，拥有世界第一大峡谷。',
            features: ['世界最高大河', '大峡谷', '水能丰富', '2057公里'],
            icon: '🏔️',
            importance: '水能宝库'
        }
    };
    
    const detail = riverDetails[name] || {
        description: '中国重要河流之一。',
        features: ['重要水资源'],
        icon: '💧',
        importance: '重要河流'
    };
    
    this.showCustomRiverModal(name, length, detail);
}

// 自定义河流详情模态框
showCustomRiverModal(name, length, detail) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'river-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
    `;
    
    const featuresHtml = detail.features.map(feature => 
        `<span class="river-feature">${feature}</span>`
    ).join('');
    
    modal.innerHTML = `
        <div class="river-modal-content" style="
            background: var(--bg-card);
            padding: 2rem;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            border: 2px solid var(--accent-color);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            position: relative;
        ">
            <button class="river-modal-close" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--accent-color);
                cursor: pointer;
            ">&times;</button>
            
            <div class="river-header" style="
                text-align: center;
                margin-bottom: 1.5rem;
            ">
                <div style="font-size: 3rem; margin-bottom: 0.5rem;">${detail.icon}</div>
                <h2 style="color: var(--accent-color); margin: 0.5rem 0;">${name}</h2>
                <div style="color: var(--text-secondary); font-size: 1.2rem;">长度: ${length}公里</div>
            </div>
            
            <div class="river-description" style="
                color: var(--text-primary);
                line-height: 1.6;
                margin-bottom: 1.5rem;
            ">${detail.description}</div>
            
            <div class="river-features" style="
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin-bottom: 1.5rem;
            ">${featuresHtml}</div>
            
            <button class="river-modal-ok" style="
                background: var(--accent-color);
                color: var(--bg-primary);
                border: none;
                padding: 0.8rem 2rem;
                border-radius: 5px;
                cursor: pointer;
                width: 100%;
                font-size: 1rem;
                font-weight: bold;
            ">关闭</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 关闭事件
    const closeBtn = modal.querySelector('.river-modal-close');
    const okBtn = modal.querySelector('.river-modal-ok');
    const closeModal = () => {
        document.body.removeChild(modal);
    };
    
    closeBtn.addEventListener('click', closeModal);
    okBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

createRiverLegend() {
    const legend = document.getElementById('riverLegend');
    const labels = this.charts.river.data.labels;
    const colors = this.charts.river.data.datasets[0].backgroundColor;
    
    labels.forEach((label, index) => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.style.cssText = `
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0.3rem 0.5rem;
            border-radius: 5px;
            margin: 0.2rem 0;
        `;
        item.innerHTML = `
            <div class="legend-color" style="
                background-color: ${colors[index]};
                width: 12px;
                height: 12px;
                border-radius: 2px;
                display: inline-block;
                margin-right: 0.5rem;
            "></div>
            <span>${label}</span>
        `;
        
        // 为图例添加交互
        item.addEventListener('click', () => {
            const length = this.charts.river.data.datasets[0].data[index];
            this.showRiverDetail(label, length);
        });
        
        item.addEventListener('mouseenter', () => {
            item.style.background = 'rgba(100, 255, 218, 0.1)';
            this.highlightRiver(index);
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.background = 'transparent';
            this.resetRiverHighlight();
        });
        
        legend.appendChild(item);
    });
}
    
    createVisitorChart() {
    const ctx = document.getElementById('visitorChart').getContext('2d');
    const colors = this.getChartColors();
    
    const data = {
        labels: ['黄山', '泰山', '张家界', '九寨沟', '桂林', '西湖'],
        datasets: [{
            label: '年游客量（万人）',
            data: [458, 392, 345, 287, 423, 512],
            fill: true,
            backgroundColor: 'rgba(100, 255, 218, 0.2)',
            borderColor: 'rgba(100, 255, 218, 1)',
            borderWidth: 3,
            tension: 0.4,
            pointBackgroundColor: 'rgba(100, 255, 218, 1)',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8
        }]
    };

    this.charts.visitor = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: colors.tooltipBg,
                    titleColor: colors.tooltipBorder,
                    bodyColor: colors.textPrimary,
                    borderColor: colors.tooltipBorder,
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return `游客量: ${context.parsed.y}万人`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '游客量（万人）',
                        color: colors.textSecondary
                    },
                    grid: {
                        color: colors.gridLine,
                        lineWidth: 1,
                        drawBorder: true
                    },
                    ticks: {
                        color: colors.textSecondary,
                        font: {
                            size: 11
                        }
                    },
                    border: {
                        color: colors.gridLine
                    }
                },
                x: {
                    grid: {
                        color: colors.gridLine,
                        lineWidth: 1,
                        drawBorder: true
                    },
                    ticks: {
                        color: colors.textSecondary,
                        font: {
                            size: 11
                        }
                    },
                    border: {
                        color: colors.gridLine
                    }
                }
            }
        }
    });
}
    
    createVisitorLegend() {
        const legend = document.getElementById('visitorLegend');
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.innerHTML = `
            <div class="legend-color" style="background-color: rgba(100, 255, 218, 1)"></div>
            <span>年游客量趋势</span>
        `;
        legend.appendChild(item);
    }
    
    createSeasonChart() {
    const ctx = document.getElementById('seasonChart').getContext('2d');
    const colors = this.getChartColors();
    
    const seasonData = {
        all: [65, 80, 95, 70],
        spring: [75, 65, 70, 60],
        summer: [60, 75, 80, 65],
        autumn: [80, 90, 95, 85],
        winter: [45, 60, 70, 50]
    };

    this.charts.season = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['黄山', '泰山', '张家界', '九寨沟'],
            datasets: [{
                label: '访问热度',
                data: seasonData.all,
                backgroundColor: 'rgba(100, 255, 218, 0.2)',
                borderColor: 'rgba(100, 255, 218, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(100, 255, 218, 1)',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        display: false,
                        color: colors.textSecondary
                    },
                    grid: {
                        color: colors.gridLine,
                        lineWidth: 1
                    },
                    angleLines: {
                        color: colors.angleLine,
                        lineWidth: 1
                    },
                    pointLabels: {
                        color: colors.pointLabel,
                        font: {
                            size: 11,
                            weight: 'bold'
                        }
                    }
                }
            },
            elements: {
                line: {
                    borderWidth: 2
                }
            }
        }
    });
    
    this.currentSeason = 'all';
}
    
    bindEvents() {
    // 季节筛选按钮事件
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const season = e.target.dataset.season;
            this.updateSeasonChart(season);
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // 主题切换时更新图表颜色
    const themeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'data-theme') {
                setTimeout(() => {
                    this.updateAllChartsForTheme();
                }, 100);
            }
        });
    });

    themeObserver.observe(document.documentElement, {
        attributes: true
    });
}
    
    updateSeasonChart(season) {
        const seasonData = {
            all: [65, 80, 95, 70],
            spring: [75, 65, 70, 60],
            summer: [60, 75, 80, 65],
            autumn: [80, 90, 95, 85],
            winter: [45, 60, 70, 50]
        };
        
        this.charts.season.data.datasets[0].data = seasonData[season];
        this.charts.season.update();
        this.currentSeason = season;
    }
    
    updateChartColors() {
        // 更新所有图表的颜色以适应主题
        const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim();
        
        Object.values(this.charts).forEach(chart => {
            if (chart.options.scales) {
                // 更新坐标轴颜色
                if (chart.options.scales.x && chart.options.scales.x.ticks) {
                    chart.options.scales.x.ticks.color = textColor;
                }
                if (chart.options.scales.y && chart.options.scales.y.ticks) {
                    chart.options.scales.y.ticks.color = textColor;
                }
                if (chart.options.scales.y && chart.options.scales.y.title) {
                    chart.options.scales.y.title.color = textColor;
                }
                if (chart.options.scales.r) {
                    chart.options.scales.r.grid.color = 'rgba(255, 255, 255, 0.1)';
                    chart.options.scales.r.angleLines.color = 'rgba(255, 255, 255, 0.1)';
                }
            }
            chart.update();
        });
    }
}

// 更新初始化函数
// 更新初始化函数
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('quiz')) {
        new MountainRiverQuiz();
    }
    console.log('DOM加载完成，初始化所有功能...');
    
    // 初始化主题切换
    initTheme();
    
    // 初始化主模态框功能
    initMainModal();
    
    // 初始化全景画廊
    if (document.querySelector('.panorama-container')) {
        console.log('初始化全景画廊');
        new PanoramaGallery();
    }
    
    // 初始化数据可视化
    if (document.getElementById('mountainChart')) {
        console.log('初始化数据可视化');
        new DataVisualization();
    }
    
    // 其他初始化...
    initSmoothScroll();
    initNavbarEffect();
    initExploreMore();
});

// 添加缺失的初始化函数
function initMainModal() {
    // 主模态框的初始化代码（原有的模态框功能）
    const modal = document.getElementById('infoModal');
    const closeBtn = modal.querySelector('.close-btn');
    const learnMoreBtns = document.querySelectorAll('.filter-btn');

    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            const id = this.getAttribute('data-id');
            const data = locationData[type][id];
            const game = gameData[type] ? gameData[type][id] : null;
            
            if (data) {
                document.getElementById('modalImage').style.backgroundImage = `url('${data.image}')`;
                document.getElementById('modalTitle').textContent = data.title;
                document.getElementById('modalDescription').textContent = data.description;
                
                const detailsTab = `
                    <div class="tab-content active" id="detailsTab">
                        ${data.details}
                    </div>
                `;
                
                const gameTab = game ? `
                    <div class="tab-content" id="gameTab">
                        ${game.gameHtml}
                    </div>
                ` : `
                    <div class="tab-content" id="gameTab">
                        <div class="no-game">
                            <h3>互动游戏开发中</h3>
                            <p>该景点的互动游戏正在开发中，敬请期待！</p>
                        </div>
                    </div>
                `;
                
                const tabsHtml = `
                    <div class="modal-tabs">
                        <button class="filter-btn active" onclick="switchTab('detailsTab')">详细信息</button>
                        <button class="filter-btn" onclick="switchTab('gameTab')">互动游戏</button>
                    </div>
                `;
                
                document.getElementById('modalDetails').innerHTML = `
                    ${tabsHtml}
                    ${detailsTab}
                    ${gameTab}
                `;
                
                modal.style.display = 'block';
                
                if (game) {
                    setTimeout(() => {
                        if (type === 'mountain' && id === '1') {
                            initPuzzle();
                        } else if (type === 'mountain' && id === '2') {
                            initClimbingGame();
                        } else if (type === 'river' && id === '1') {
                            initRiverGame();
                        }
                    }, 100);
                }
            }
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// ========== 山河知识问答功能 ==========
class MountainRiverQuiz {
    constructor() {
        this.questions = [
    {
        question: "中国最高的山峰是哪座？",
        options: ["泰山", "华山", "珠穆朗玛峰", "黄山"],
        correct: 2,
        explanation: "珠穆朗玛峰海拔8848.86米，是世界最高峰。"
    },
    {
        question: "被称为'中华民族母亲河'的是哪条河流？",
        options: ["长江", "黄河", "珠江", "黑龙江"],
        correct: 1,
        explanation: "黄河流域是中华文明的主要发源地。"
    },
    {
        question: "以下哪座山以'奇松、怪石、云海、温泉'四绝著称？",
        options: ["泰山", "华山", "黄山", "衡山"],
        correct: 2,
        explanation: "黄山四绝：奇松、怪石、云海、温泉。"
    },
    {
        question: "中国最长的河流是哪条？",
        options: ["黄河", "长江", "澜沧江", "珠江"],
        correct: 1,
        explanation: "长江全长约6300公里，是中国第一长河。"
    },
    {
        question: "'五岳独尊'指的是哪座山？",
        options: ["华山", "泰山", "恒山", "嵩山"],
        correct: 1,
        explanation: "泰山被誉为'五岳独尊'，是古代帝王封禅之地。"
    },
    {
        question: "世界上海拔最高的河流是哪条？",
        options: ["长江", "黄河", "雅鲁藏布江", "怒江"],
        correct: 2,
        explanation: "雅鲁藏布江是世界海拔最高的大河。"
    },
    {
        question: "以下哪个不是中国五大淡水湖之一？",
        options: ["鄱阳湖", "洞庭湖", "青海湖", "太湖"],
        correct: 2,
        explanation: "青海湖是咸水湖，不是淡水湖。"
    },
    {
        question: "'天下第一险'指的是哪座山？",
        options: ["黄山", "华山", "泰山", "峨眉山"],
        correct: 1,
        explanation: "华山以险著称，有'奇险天下第一山'之说。"
    },
    {
        question: "中国最大的咸水湖是哪个？",
        options: ["洞庭湖", "鄱阳湖", "青海湖", "纳木错"],
        correct: 2,
        explanation: "青海湖是中国最大的内陆咸水湖。"
    },
    {
        question: "以下哪条河流流出中国后称为'湄公河'？",
        options: ["长江", "黄河", "澜沧江", "怒江"],
        correct: 2,
        explanation: "澜沧江流出中国后称为湄公河。"
    },
    {
        question: "'桂林山水甲天下'指的是哪个省份的风景？",
        options: ["云南", "广西", "贵州", "四川"],
        correct: 1,
        explanation: "桂林位于广西壮族自治区，以喀斯特地貌闻名。"
    },
    {
        question: "中国最大的沙漠是哪个？",
        options: ["塔克拉玛干沙漠", "古尔班通古特沙漠", "巴丹吉林沙漠", "腾格里沙漠"],
        correct: 0,
        explanation: "塔克拉玛干沙漠是中国最大的沙漠，也是世界第二大流动沙漠。"
    },
    {
        question: "以下哪个是中国最大的瀑布？",
        options: ["黄果树瀑布", "壶口瀑布", "德天瀑布", "九龙瀑布"],
        correct: 0,
        explanation: "黄果树瀑布位于贵州，是中国最大的瀑布。"
    },
    {
        question: "'人间仙境'九寨沟位于哪个省份？",
        options: ["云南", "四川", "西藏", "青海"],
        correct: 1,
        explanation: "九寨沟位于四川省阿坝藏族羌族自治州。"
    },
    {
        question: "中国最长的峡谷是哪个？",
        options: ["雅鲁藏布大峡谷", "虎跳峡", "三峡", "怒江大峡谷"],
        correct: 0,
        explanation: "雅鲁藏布大峡谷是世界第一大峡谷。"
    },
    {
        question: "以下哪个湖泊有'天空之镜'的美誉？",
        options: ["青海湖", "茶卡盐湖", "泸沽湖", "西湖"],
        correct: 1,
        explanation: "茶卡盐湖因湖面如镜面般反射天空而被称为'天空之镜'。"
    },
    {
        question: "以下哪个行为有助于保护山川环境？",
        options: ["乱扔垃圾", "随意采摘植物", "带走自己的垃圾", "在岩石上刻字"],
        correct: 2,
        explanation: "带走自己的垃圾是最基本的环保行为，能有效保护自然环境。"
    },
    {
        question: "在自然保护区旅游时，应该怎么做？",
        options: ["按照指定路线行走", "随意进入未开放区域", "大声喧哗惊扰动物", "喂食野生动物"],
        correct: 0,
        explanation: "按照指定路线行走可以减少对自然环境的破坏。"
    },
    {
        question: "保护河流水质，我们应该避免什么行为？",
        options: ["使用环保洗涤剂", "向河中倾倒污水", "参与河流清理活动", "举报污染行为"],
        correct: 1,
        explanation: "向河中倾倒污水会严重污染水质，破坏水生态系统。"
    },
    {
        question: "登山时发现有人破坏环境，应该怎么做？",
        options: ["视而不见", "一起参与破坏", "拍照发朋友圈", "礼貌劝阻并举报"],
        correct: 3,
        explanation: "礼貌劝阻并举报是保护环境的正确做法。"
    },
    {
        question: "以下哪个是保护森林的有效措施？",
        options: ["乱砍滥伐", "森林防火", "随意野炊", "丢弃烟头"],
        correct: 1,
        explanation: "森林防火是保护森林资源的重要措施。"
    },
    {
        question: "在景区内遇到受伤的野生动物，应该怎么做？",
        options: ["带回家饲养", "置之不理", "联系保护区工作人员", "拍照后离开"],
        correct: 2,
        explanation: "联系保护区工作人员是帮助受伤野生动物的正确方式。"
    },
    {
        question: "保护生物多样性，我们应该：",
        options: ["引进外来物种", "保护原生生态环境", "大量捕捉野生动物", "破坏动物栖息地"],
        correct: 1,
        explanation: "保护原生生态环境是维护生物多样性的基础。"
    },
    {
        question: "以下哪个行为会破坏山地生态？",
        options: ["走指定步道", "乱采矿石", "参加环保宣传", "捡拾垃圾"],
        correct: 1,
        explanation: "乱采矿石会严重破坏山地地质结构和生态环境。"
    },
    {
        question: "保护冰川资源，我们应该关注：",
        options: ["全球变暖", "冰川旅游开发", "冰川融化速度", "以上所有"],
        correct: 3,
        explanation: "保护冰川需要从减缓全球变暖、合理开发旅游、监测融化速度等多方面入手。"
    },
    {
        question: "在河流边露营时，应该注意：",
        options: ["在河滩生火", "远离河岸设置营地", "向河中排放废水", "在河中清洗车辆"],
        correct: 1,
        explanation: "远离河岸设置营地可以避免污染水源和破坏河岸生态。"
    },
    {
        question: "保护湿地生态系统，以下做法正确的是：",
        options: ["填埋湿地建房", "排放工业废水", "建立湿地保护区", "过度捕捞水产"],
        correct: 2,
        explanation: "建立湿地保护区是保护湿地生态系统的有效方式。"
    },
    {
        question: "登山时遇到古树名木，应该：",
        options: ["刻字留念", "采摘树叶", "拍照欣赏", "剥取树皮"],
        correct: 2,
        explanation: "拍照欣赏是不破坏古树的前提下记录美景的好方法。"
    },
    {
        question: "保护草原生态，应该避免：",
        options: ["过度放牧", "轮牧休牧", "种植防护林", "控制载畜量"],
        correct: 0,
        explanation: "过度放牧会导致草原退化、沙漠化。"
    },
    {
        question: "在自然保护区内，以下哪个行为是允许的？",
        options: ["采集标本", "科研观测", "狩猎动物", "开采矿产"],
        correct: 1,
        explanation: "经过批准的科研观测是保护区内允许的活动。"
    },
    {
        question: "保护海洋环境，我们应该：",
        options: ["减少塑料制品使用", "向海中丢弃垃圾", "使用含磷洗衣粉", "过度捕捞"],
        correct: 0,
        explanation: "减少塑料制品使用可以防止海洋塑料污染。"
    },
    {
        question: "遇到有人在景区内违规用火，应该：",
        options: ["一起参与", "立即制止并报警", "拍照发网上", "假装没看见"],
        correct: 1,
        explanation: "立即制止并报警可以防止火灾发生，保护森林资源。"
    },
    {
        question: "保护山川河流，人人有责，这体现了：",
        options: ["生态文明理念", "个人主义思想", "享乐主义", "消费主义"],
        correct: 0,
        explanation: "保护山川河流体现了人与自然和谐共生的生态文明理念。"
    },
    {
        question: "以下哪个是可持续发展的旅游方式？",
        options: ["生态旅游", "大规模开发", "破坏性建设", "过度商业化"],
        correct: 0,
        explanation: "生态旅游注重环境保护和文化传承，是可持续发展的旅游方式。"
    },
    {
        question: "保护自然景观，我们应该提倡：",
        options: ["无痕旅游", "随意涂鸦", "破坏性拍照", "商业过度开发"],
        correct: 0,
        explanation: "无痕旅游要求游客不留任何痕迹，最大限度保护自然环境。"
    },
    {
        question: "在山区发现地质灾害隐患，应该：",
        options: ["隐瞒不报", "立即撤离并报告", "继续游览", "拍照炫耀"],
        correct: 1,
        explanation: "立即撤离并报告可以保护生命安全，防止灾害发生。"
    },
    {
        question: "保护水源地，以下做法错误的是：",
        options: ["建立保护区", "禁止污染企业", "随意游泳", "监测水质"],
        correct: 2,
        explanation: "在水源地随意游泳会污染饮用水源。"
    },
    {
        question: "维护祖国山河美丽，我们应该：",
        options: ["从小事做起", "只靠政府努力", "漠不关心", "认为与己无关"],
        correct: 0,
        explanation: "保护环境需要每个人从身边小事做起，共同维护。"
    },
    {
        question: "在自然景区内，正确的行为是：",
        options: ["保持安静", "大声喧哗", "追逐野生动物", "采摘珍稀植物"],
        correct: 0,
        explanation: "保持安静可以减少对野生动物和自然环境的干扰。"
    },
    {
        question: "保护山川河流，最重要的是：",
        options: ["提高环保意识", "追求经济利益", "过度开发", "忽视生态"],
        correct: 0,
        explanation: "提高全民环保意识是保护山川河流的基础和关键。"
    },
    {
        question: "以下哪个是保护自然环境的有效方式？",
        options: ["志愿者清洁活动", "乱扔垃圾", "破坏植被", "污染水源"],
        correct: 0,
        explanation: "参与志愿者清洁活动是保护环境的实际行动。"
    },
    {
        question: "面对美丽的自然风光，我们应该：",
        options: ["珍惜保护", "随意破坏", "过度开发", "漠不关心"],
        correct: 0,
        explanation: "珍惜保护才能让美景永续存在，惠及子孙后代。"
    },
    {
        question: "保护生物栖息地，有利于：",
        options: ["维护生态平衡", "破坏食物链", "物种灭绝", "环境恶化"],
        correct: 0,
        explanation: "保护生物栖息地是维护生态平衡和生物多样性的关键。"
    },
    {
        question: "在户外活动时，如何处理废弃物？",
        options: ["随意丢弃", "就地掩埋", "全部带回", "焚烧处理"],
        correct: 2,
        explanation: "将废弃物全部带回是保护自然环境的最佳做法。"
    },
    {
        question: "保护自然遗产的意义在于：",
        options: ["传承给后代", "短期经济利益", "个人享乐", "暂时保护"],
        correct: 0,
        explanation: "保护自然遗产是为了让子孙后代也能欣赏到这些宝贵资源。"
    },
    {
        question: "以下哪个行为符合'绿水青山就是金山银山'理念？",
        options: ["牺牲环境发展经济", "先污染后治理", "生态保护优先", "无视环境保护"],
        correct: 2,
        explanation: "生态保护优先体现了绿色发展理念，实现经济发展与环境保护双赢。"
    },
    {
        question: "作为公民，保护山川环境的责任包括：",
        options: ["遵守环保法规", "参与环保活动", "监督举报破坏行为", "以上所有"],
        correct: 3,
        explanation: "公民保护环境的责任包括遵守法规、参与活动和监督举报等多个方面。"
    },
    {
        question: "保护自然景观，对社会的价值是：",
        options: ["提供生态服务", "促进精神文明", "推动可持续发展", "以上所有"],
        correct: 3,
        explanation: "保护自然景观具有生态、文化、经济等多重价值。"
    }
];
        
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.currentQuestions = [];
        
        this.init();
    }
    
    getRandomQuestions(count = 10) {
        const allQuestionsCopy = [...this.questions];
        const selectedQuestions = [];
        
        for (let i = 0; i < count && allQuestionsCopy.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * allQuestionsCopy.length);
            selectedQuestions.push(allQuestionsCopy[randomIndex]);
            allQuestionsCopy.splice(randomIndex, 1);
        }
        
        return selectedQuestions;
    }
    
    startNewGame() {
        this.currentQuestions = this.getRandomQuestions(10);
        console.log('随机选择的问题数量:', this.currentQuestions.length);
        console.log('第一个随机问题:', this.currentQuestions[0]);

        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.showQuestion();
    }
    
    init() {
        this.bindEvents();
        this.startNewGame();
    }
    
    bindEvents() {
        document.getElementById('nextQuestion').addEventListener('click', () => {
            this.nextQuestion();
        });
        
        document.getElementById('restartQuiz').addEventListener('click', () => {
            this.restartQuiz();
        });
        
        document.getElementById('playAgain').addEventListener('click', () => {
            this.restartQuiz();
        });
    }
    
    showQuestion() {
        const question = this.currentQuestions[this.currentQuestion];
        const questionText = document.getElementById('questionText');
        const optionsContainer = document.getElementById('quizOptions');
        const progressText = document.getElementById('quizProgress');
        const nextButton = document.getElementById('nextQuestion');
        
        questionText.textContent = question.question;
        progressText.textContent = `${this.currentQuestion + 1}/${this.currentQuestions.length}`;
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('button');
            optionElement.className = 'quiz-option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => {
                this.selectAnswer(index);
            });
            optionsContainer.appendChild(optionElement);
        });
        
        this.selectedAnswer = null;
        nextButton.disabled = true;
        nextButton.textContent = '下一题';
    }
    
    selectAnswer(index) {
        this.selectedAnswer = index;
        const options = document.querySelectorAll('.quiz-option');
        const nextButton = document.getElementById('nextQuestion');
        
        options.forEach(option => {
            option.classList.remove('selected', 'correct', 'wrong');
        });
        
        options[index].classList.add('selected');
        nextButton.disabled = false;
        
        if (this.currentQuestion === this.currentQuestions.length - 1) {
            nextButton.textContent = '查看结果';
        }
    }
    
    nextQuestion() {
        if (this.selectedAnswer === null) return;
        
        const question = this.currentQuestions[this.currentQuestion];
        const options = document.querySelectorAll('.quiz-option');
        const nextButton = document.getElementById('nextQuestion');
        
        options[question.correct].classList.add('correct');
        
        if (this.selectedAnswer !== question.correct) {
            options[this.selectedAnswer].classList.add('wrong');
        } else {
            this.score++;
        }
        
        options.forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        setTimeout(() => {
            this.currentQuestion++;
            
            if (this.currentQuestion < this.currentQuestions.length) {
                this.showQuestion();
            } else {
                this.showResults();
            }
        }, 1500);
    }
    
    showResults() {
        const quizInterface = document.getElementById('quizInterface');
        const quizResults = document.getElementById('quizResults');
        const finalScore = document.getElementById('finalScore');
        const correctCount = document.getElementById('correctCount');
        const wrongCount = document.getElementById('wrongCount');
        const scoreMessage = document.getElementById('scoreMessage');
        
        finalScore.textContent = this.score;
        correctCount.textContent = this.score;
        wrongCount.textContent = this.currentQuestions.length - this.score;
        
        if (this.score >= 8) {
            scoreMessage.textContent = '🎉 太棒了！你是环保小卫士！';
            scoreMessage.style.color = '#4caf50';
        } else if (this.score >= 5) {
            scoreMessage.textContent = '👍 不错！要继续保护山河哦！';
            scoreMessage.style.color = '#ff9800';
        } else {
            scoreMessage.textContent = '💪 加油学习，共同守护美丽中国！';
            scoreMessage.style.color = '#f44336';
        }
        
        quizInterface.style.display = 'none';
        quizResults.style.display = 'block';
    }
    
    restartQuiz() {
        this.startNewGame();
        
        const quizInterface = document.getElementById('quizInterface');
        const quizResults = document.getElementById('quizResults');
        const options = document.querySelectorAll('.quiz-option');
        
        quizInterface.style.display = 'block';
        quizResults.style.display = 'none';
        
        options.forEach(option => {
            option.style.pointerEvents = 'auto';
        });
    }
}

// 初始化问答系统
document.addEventListener('DOMContentLoaded', function() {
    // 其他初始化代码...
    if (document.getElementById('quiz')) {
        new MountainRiverQuiz();
    }
    // 初始化问答系统
    if (document.getElementById('quiz')) {
        new MountainRiverQuiz();
    }
});
// 初始化地图标记交互
function initMapInteraction() {
    const markers = document.querySelectorAll('.location-marker');
    const detailImage = document.getElementById('detailImage');
    const detailContent = document.getElementById('detailContent');

    markers.forEach(marker => {
        marker.addEventListener('click', function () {
            const type = this.getAttribute('data-type');
            const id = this.getAttribute('data-id');
            const location = locationData[type][id];

            // 更新详情区域内容
            detailImage.style.backgroundImage = `url('${location.image}')`;

            let statsHtml = '';
            if (type === 'mountain') {
                statsHtml = `
                    <div class="panorama-stats">
                        <span>📍 ${location.details.match(/位置：<\/strong>(.*?)<\/li>/)[1]}</span>
                        <span>📏 ${location.details.match(/海拔：<\/strong>(.*?)<\/li>/)[1]}</span>
                        <span>⭐ ${location.details.match(/文化遗产：<\/strong>(.*?)<\/li>/)[1]}</span>
                    </div>
                `;
            } else if (type === 'river') {
                statsHtml = `
                    <div class="panorama-stats">
                        <span>📍 ${location.details.match(/位置：<\/strong>(.*?)<\/li>/)[1] ||
                    location.details.match(/发源地：<\/strong>(.*?)<\/li>/)[1]}</span>
                        <span>📏 ${location.details.match(/长度：<\/strong>(.*?)<\/li>/)[1] ||
                    location.details.match(/面积：<\/strong>(.*?)<\/li>/)[1]}</span>
                        <span>⭐ ${location.details.match(/特色：<\/strong>(.*?)<\/li>/)[1]}</span>
                    </div>
                `;
            }

            detailContent.innerHTML = `
                <h3>${location.title}</h3>
                <p>${location.description}</p>
                ${statsHtml}
                <div class="detail-more">${location.details}</div>
            `;

            // 高亮当前选中的标记
            markers.forEach(m => m.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// 在页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initMapInteraction(); // 添加地图交互初始化
    // 其他初始化函数...
});
// 等待页面DOM加载完成
document.addEventListener('DOMContentLoaded', function () {
    // 绑定地图标记点击事件
    bindMarkerEvents();
    // 绑定"了解更多"按钮点击事件
    bindLearnMoreEvents();
});

// 绑定地图标记点击事件
function bindMarkerEvents() {
    const markers = document.querySelectorAll('.location-marker');
    markers.forEach(marker => {
        marker.addEventListener('click', function () {
            const type = this.getAttribute('data-type');
            const id = parseInt(this.getAttribute('data-id'));
            showDetail(type, id); // 显示详情
        });
    });
}

// 绑定"了解更多"按钮点击事件
function bindLearnMoreEvents() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const type = this.getAttribute('data-type');
            const id = parseInt(this.getAttribute('data-id'));
            showDetail(type, id); // 显示详情
        });
    });
}

// 根据类型和ID显示对应详情
// 根据类型和ID显示对应详情（适配新数据结构）
function showDetail(type, id) {
    // 从统一数据源中获取数据（例如：locationData.river[2] 对应长江）
    const data = locationData[type]?.[id];

    // 获取详情区域元素
    const detailImage = document.getElementById('detailImage');
    const detailContent = document.getElementById('detailContent');
    const detailTitle = document.getElementById('detailTitle'); // 若有标题元素

    // 处理数据不存在的情况
    if (!data) {
        detailImage.style.backgroundImage = 'none';
        detailContent.innerHTML = '<h3>未找到相关信息</h3>';
        if (detailTitle) detailTitle.textContent = '信息缺失';
        return;
    }

    // 更新详情内容
    detailImage.style.backgroundImage = `url('${data.image}')`; // 图片
    if (detailTitle) detailTitle.textContent = data.title; // 标题（若有）

    // 拼接详情HTML（包含描述和详细信息）
    detailContent.innerHTML = `
        <p class="detail-brief">${data.description}</p> <!-- 简短描述 -->
        <div class="detail-full">${data.details}</div> <!-- 详细信息（含HTML） -->
    `;

    // 显示详情区域（若初始隐藏）
    const detailContainer = document.getElementById('locationDetail');
    if (detailContainer) detailContainer.classList.add('active');
}
// 页面加载完成后绑定事件
document.addEventListener('DOMContentLoaded', function () {
    // 绑定地图标记点击事件
    document.querySelectorAll('.location-marker').forEach(marker => {
        marker.addEventListener('click', function () {
            const type = this.getAttribute('data-type'); // 如 "river"
            const id = this.getAttribute('data-id'); // 如 "2"
            showDetail(type, id); // 传递类型和ID
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // 其他初始化代码...
    initMapMarkers();
    // 其他初始化代码...
});

// 打开B站视频函数
function openBilibiliVideo(bvid) {
    // 直接跳转到指定的B站视频
    const videoUrl = `https://www.bilibili.com/video/${bvid}`;
    window.open(videoUrl, '_blank');
}
// 滚动进度条
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight - winHeight;
        const scrolled = (window.scrollY / docHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}
// 增强版平滑滚动（包含分类标签）
function initEnhancedSmoothScroll() {
    // 为所有锚点链接添加平滑滚动（包括开始探索按钮）
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // 计算目标位置（考虑导航栏高度）
                    const navHeight = document.querySelector('header').offsetHeight;
                    let targetPosition;
                    
                    // 如果是分类标签，稍微向上偏移以显示完整区域
                    if (targetId === '#category-tags') {
                        targetPosition = targetElement.offsetTop - navHeight - 40;
                    } else {
                        targetPosition = targetElement.offsetTop - navHeight - 20;
                    }
                    
                    // 平滑滚动
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // 更新 URL
                    history.pushState(null, null, targetId);
                    
                    // 添加视觉反馈（如果是导航链接）
                    if (this.closest('nav')) {
                        highlightActiveNavLink(targetId);
                    }
                }
            }
        });
    });
    
    // 高亮当前活动的导航链接
    function highlightActiveNavLink(activeId) {
        document.querySelectorAll('nav a[href^="#"]').forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`nav a[href="${activeId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    // 监听滚动，更新活动链接
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navHeight = document.querySelector('header').offsetHeight;
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
        
        highlightActiveNavLink(currentSection);
    });
}

// 在页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initEnhancedSmoothScroll();
    initCategoryTags(); // 确保分类标签功能也初始化
    // 其他初始化代码...
});
// 英雄区域轮播控制
class HeroCarousel {
    constructor() {
        this.carousel = document.getElementById('heroCarousel');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.speedBtns = document.querySelectorAll('.speed-btn[data-speed]');
        this.isPlaying = true;
        this.currentSpeed = 'normal';
        
        this.initControls();
        this.addHoverEffects();
    }
    
    initControls() {
        // 暂停/播放按钮
        this.pauseBtn.addEventListener('click', () => {
            this.togglePlay();
        });
        
        // 速度控制按钮
        this.speedBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const speed = e.target.getAttribute('data-speed');
                this.setSpeed(speed);
                
                // 更新按钮状态
                this.speedBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
        
        // 鼠标悬停暂停
        this.carousel.addEventListener('mouseenter', () => {
            this.pause();
        });
        
        this.carousel.addEventListener('mouseleave', () => {
            if (this.isPlaying) {
                this.play();
            }
        });
    }
    
    addHoverEffects() {
        // 触摸设备支持
        this.carousel.addEventListener('touchstart', () => {
            this.pause();
        });
        
        this.carousel.addEventListener('touchend', () => {
            if (this.isPlaying) {
                setTimeout(() => this.play(), 2000);
            }
        });
    }
    
    pause() {
        this.carousel.classList.add('hero-carousel-paused');
        this.isPlaying = false;
        this.pauseBtn.textContent = '播放';
    }
    
    play() {
        this.carousel.classList.remove('hero-carousel-paused');
        this.isPlaying = true;
        this.pauseBtn.textContent = '暂停';
    }
    
    setSpeed(speed) {
        // 移除所有速度类
        this.carousel.classList.remove('hero-carousel-slow', 'hero-carousel-fast');
        
        switch(speed) {
            case 'slow':
                this.carousel.classList.add('hero-carousel-slow');
                break;
            case 'fast':
                this.carousel.classList.add('hero-carousel-fast');
                break;
        }
        this.currentSpeed = speed;
    }
    
    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }
}

// 初始化英雄区域轮播
document.addEventListener('DOMContentLoaded', function() {
    const heroCarousel = new HeroCarousel();
    
    // 键盘控制
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            heroCarousel.togglePlay();
        }
    });
});

// 添加速度控制按钮（可选功能）
function addSpeedControls(heroCarousel) {
    const controlsHtml = `
        <div class="hero-controls" style="
            position: absolute;
            bottom: 20px;
            right: 20px;
            display: flex;
            gap: 10px;
            z-index: 10;
        ">
            <button class="speed-btn" data-speed="slow" style="
                background: rgba(255,255,255,0.2);
                border: 1px solid rgba(255,255,255,0.5);
                color: white;
                padding: 5px 10px;
                border-radius: 15px;
                cursor: pointer;
                backdrop-filter: blur(10px);
            ">慢速</button>
            <button class="speed-btn" data-speed="normal" style="
                background: rgba(255,255,255,0.2);
                border: 1px solid rgba(255,255,255,0.5);
                color: white;
                padding: 5px 10px;
                border-radius: 15px;
                cursor: pointer;
                backdrop-filter: blur(10px);
            ">正常</button>
            <button class="speed-btn" data-speed="fast" style="
                background: rgba(255,255,255,0.2);
                border: 1px solid rgba(255,255,255,0.5);
                color: white;
                padding: 5px 10px;
                border-radius: 15px;
                cursor: pointer;
                backdrop-filter: blur(10px);
            ">快速</button>
        </div>
    `;
    
    const heroSection = document.querySelector('.hero');
    heroSection.insertAdjacentHTML('beforeend', controlsHtml);
    
    // 添加速度控制事件
    document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const speed = this.getAttribute('data-speed');
            heroCarousel.setSpeed(speed);
            
            // 更新按钮状态
            document.querySelectorAll('.speed-btn').forEach(b => {
                b.style.background = 'rgba(255,255,255,0.2)';
            });
            this.style.background = 'rgba(255,255,255,0.4)';
        });
    });
}
