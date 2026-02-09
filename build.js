const fs = require('fs-extra');
const axios = require('axios');
const ejs = require('ejs');
const path = require('path');
const slugify = require('slugify');

const API_URL = 'https://chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=XhJGW';
const BASE_URL = 'https://chaturbate-models-live.vercel.app';

// Helper to slugify text
const makeSlug = (text) => slugify(text, { lower: true, strict: true }) || 'unknown';

// SEO Text Generator (Korean)
function generateSEOText() {
    return `
    <div class="seo-content prose max-w-none text-gray-700 mt-12 p-6 bg-white rounded-lg shadow-sm">
        <h1>Chaturbate: 최고의 성인 라이브 비디오 채팅 플랫폼</h1>
        
        <p>Chaturbate는 전 세계 수천 명의 모델들과 실시간으로 소통할 수 있는 프리미엄 성인 웹캠 사이트입니다. 사용자들은 HD 화질의 라이브 스트리밍을 통해 모델들과 직접 상호작용하며, 무료로 다양한 콘텐츠를 즐길 수 있습니다. 이 플랫폼은 개방적이고 자유로운 분위기 속에서 다양한 카테고리의 방송을 제공합니다.</p>
        
        <h2>왜 Chaturbate를 선택해야 할까요?</h2>
        <p>Chaturbate는 사용자 친화적인 인터페이스와 방대한 모델 데이터베이스를 자랑합니다. 다음은 Chaturbate가 제공하는 주요 기능들입니다:</p>
        
        <ul>
            <li><strong>실시간 상호작용:</strong> 채팅창을 통해 모델과 직접 대화하고 요청을 보낼 수 있습니다.</li>
            <li><strong>다양한 카테고리:</strong> 커플, 남성, 여성, 트랜스젠더 등 다양한 취향을 만족시키는 카테고리가 준비되어 있습니다.</li>
            <li><strong>고화질 스트리밍:</strong> 끊김 없는 HD 화질로 생생한 현장감을 느낄 수 있습니다.</li>
            <li><strong>모바일 최적화:</strong> 언제 어디서나 스마트폰이나 태블릿으로 접속하여 방송을 시청할 수 있습니다.</li>
        </ul>

        <h3>다양한 모델과 콘텐츠</h3>
        <p>Chaturbate에는 매일 새로운 모델들이 유입되며, 각기 다른 매력을 가진 방송을 진행합니다. 귀여운 스타일부터 섹시한 스타일, 대담한 퍼포먼스까지 여러분의 취향에 맞는 모델을 쉽게 찾을 수 있습니다. 또한, 태그 검색 기능을 통해 특정 관심사나 페티시를 가진 모델을 빠르게 필터링할 수 있습니다.</p>

        <h4>안전하고 익명성이 보장되는 환경</h4>
        <p>사용자의 개인정보 보호는 Chaturbate의 최우선 과제입니다. 회원가입 없이도 대부분의 방송을 시청할 수 있으며, 결제 시스템 또한 안전하게 암호화되어 처리됩니다. 익명성을 유지하면서 자유롭게 성인 콘텐츠를 즐기세요.</p>

        <h2>Chaturbate 커뮤니티의 특징</h2>
        <p>단순한 시청을 넘어 커뮤니티의 일원이 되어보세요. 팬클럽에 가입하거나 팁을 보내 모델을 응원할 수 있습니다. 팁을 보내면 모델의 진동 장난감을 작동시키거나 특별한 퍼포먼스를 요청할 수 있는 등 인터랙티브한 기능들이 가득합니다.</p>

        <h3>팁과 토큰 시스템</h3>
        <p>Chaturbate의 독특한 토큰 시스템은 사용자와 모델 간의 거리를 좁혀줍니다. 토큰을 사용하여 비공개 쇼(Private Show)를 요청하거나 스파이 모드로 다른 사람의 비공개 쇼를 훔쳐볼 수도 있습니다.</p>

        <table class="w-full border-collapse border border-gray-300 mt-4 mb-4">
            <thead>
                <tr class="bg-gray-100">
                    <th class="border border-gray-300 p-2">기능</th>
                    <th class="border border-gray-300 p-2">설명</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border border-gray-300 p-2">무료 채팅</td>
                    <td class="border border-gray-300 p-2">모든 사용자가 참여할 수 있는 공개 채팅방</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">비공개 쇼</td>
                    <td class="border border-gray-300 p-2">모델과 1:1로 진행하는 프라이빗 방송</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">팬클럽</td>
                    <td class="border border-gray-300 p-2">모델의 사진과 비디오를 볼 수 있는 전용 멤버십</td>
                </tr>
            </tbody>
        </table>

        <h4>지금 바로 시작하세요</h4>
        <p>Chaturbate는 성인 엔터테인먼트의 새로운 기준을 제시합니다. 지금 바로 접속하여 전 세계의 매력적인 모델들과 만나보세요. 24시간 언제나 라이브로 진행되는 방송들이 여러분을 기다리고 있습니다.</p>
        
        <p>더 이상 망설이지 마세요. Chaturbate의 세계로 오셔서 환상적인 경험을 만끽하시기 바랍니다. 수천 개의 라이브 룸이 지금 열려 있습니다!</p>
    </div>
    `;
}

// Helper to render view with layout
async function render(view, data) {
    const body = await ejs.renderFile(`views/${view}`, { ...data, makeSlug });
    return await ejs.renderFile('views/layout.ejs', { ...data, body, makeSlug });
}

async function build() {
    console.log('Fetching data from API...');
    try {
        const response = await axios.get(API_URL);
        const models = response.data.slice(0, 1000); // Limit to 1000 for build performance
        console.log(`Fetched ${models.length} models.`);

        // Prepare data
        const tagsMap = new Map();
        
        models.forEach(model => {
            model.slug = makeSlug(model.username);
            model.tags = model.tags || [];
            model.tags.forEach(tag => {
                if (!tagsMap.has(tag)) {
                    tagsMap.set(tag, []);
                }
                tagsMap.get(tag).push(model);
            });
            // Generate Description for each model
            model.description = `${model.username} 모델은 Chaturbate에서 가장 인기 있는 방송 중 하나입니다. ${model.age}세의 매력적인 모습과 함께 실시간 라이브 스트리밍을 즐겨보세요. ${model.current_show === 'private' ? '현재 프라이빗 쇼 진행 중입니다.' : '지금 무료로 시청 가능합니다.'}`;
        });

        const sortedTags = Array.from(tagsMap.keys()).sort();

        // Ensure directories
        await fs.ensureDir('public/model');
        await fs.ensureDir('public/tag');
        await fs.ensureDir('public/assets');

        // Render Homepage
        console.log('Rendering Homepage...');
        const homeHtml = await render('index.ejs', {
            models: models.slice(0, 40), // First 40 server-side
            allModels: models, // Pass all for JSON generation if needed, or handle client side
            seoText: generateSEOText(),
            title: 'Chaturbate Models - 최고의 한국어 성인 캠 라이브',
            description: 'Chaturbate의 인기 모델들을 실시간으로 만나보세요. 한국어 지원 및 빠른 로딩.',
            canonical: BASE_URL
        });
        await fs.writeFile('public/index.html', homeHtml);

        // Generate models.json for "Load More"
        await fs.writeFile('public/models.json', JSON.stringify(models));

        // Render Model Pages
        console.log('Rendering Model Pages...');
        for (const model of models) {
            const modelHtml = await render('model.ejs', {
                model: model,
                title: `${model.username} - Chaturbate 라이브 스트림 & 프로필`,
                description: model.description,
                canonical: `${BASE_URL}/model/${model.slug}`
            });
            await fs.writeFile(`public/model/${model.slug}.html`, modelHtml);
        }

        // Render Tag Pages
        console.log('Rendering Tag Pages...');
        for (const [tag, tagModels] of tagsMap) {
            const tagSlug = makeSlug(tag);
            const tagHtml = await render('tag.ejs', {
                tag: tag,
                models: tagModels,
                title: `${tag} 태그 모델 목록 - Chaturbate`,
                description: `${tag} 태그와 관련된 최고의 Chaturbate 모델들을 만나보세요.`,
                canonical: `${BASE_URL}/tag/${tagSlug}`
            });
            await fs.writeFile(`public/tag/${tagSlug}.html`, tagHtml);
        }

        // Render Tags Index
        console.log('Rendering Tags Index...');
        const tagsHtml = await render('tags.ejs', {
            tags: sortedTags,
            title: '모든 태그 - Chaturbate Models',
            description: 'Chaturbate 모델들의 모든 태그 목록을 확인하세요.',
            canonical: `${BASE_URL}/tags`
        });
        await fs.writeFile('public/tags.html', tagsHtml);

        // Generate Sitemap
        console.log('Generating Sitemap...');
        let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
        
        // Home
        sitemap += `  <url>\n    <loc>${BASE_URL}</loc>\n    <changefreq>always</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
        
        // Models
        models.forEach(model => {
            sitemap += `  <url>\n    <loc>${BASE_URL}/model/${model.slug}</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
        });

        // Tags
        sortedTags.forEach(tag => {
            const tagSlug = makeSlug(tag);
            sitemap += `  <url>\n    <loc>${BASE_URL}/tag/${tagSlug}</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
        });

        sitemap += '</urlset>';
        await fs.writeFile('public/sitemap.xml', sitemap);

        // Generate Robots.txt
        const robots = `User-agent: *\nAllow: /\nSitemap: ${BASE_URL}/sitemap.xml`;
        await fs.writeFile('public/robots.txt', robots);

        console.log('Build complete!');

    } catch (error) {
        console.error('Build failed:', error);
    }
}

build();
