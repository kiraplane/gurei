# Gurei Wiki 网站开发需求

## 项目标识

- 游戏名称：Gurei
- 网站名称：Gurei Wiki
- 平台：Steam
- 规范域名：https://www.gurei.wiki
- 本地项目目录名：`gurei`
- GitHub 仓库名：`gurei`
- Cloudflare Worker 项目名：`gurei`

## 已核验的官方身份

- Steam 官方商店：https://store.steampowered.com/app/2191280/Gurei/
- Steam App ID：`2191280`
- 开发者：Lobo Sagaz studio
- 发行商：Astrolabe Games
- 已核验的发行商游戏页：https://www.astrolabe-games.ca/gurei
- Steam 官方 Demo：https://store.steampowered.com/app/3776080/Gurei_Demo/
- Demo App ID：`3776080`
- 官方定位：一款强调精确操作与高难度首领战的 2D 动作游戏。主角 Rei 可以按任意顺序挑战自然灵体 Kami；挑战顺序会动态改变敌人强度，每次击败 Kami 都会获得新的独特能力。

身份边界：本项目只描述 Steam App `2191280` 的 Gurei 正式版本。Demo App `3776080` 只能在明确标注 Demo 与正式版差异时作为辅助资料。不得把名称相似的游戏、日语词条、非官方攻略，或源模板的开发者、发行商、商店链接、玩法、成就和素材当作 Gurei 的事实。

## 核心种子关键词

- `gurei`
- `gurei wiki`
- `gurei guide`
- `gurei walkthrough`
- `gurei boss guide`
- `gurei boss order`
- `gurei kami`
- `gurei abilities`
- `gurei secrets`
- `gurei steam`

以上仅为建站预检种子词。完整开发前必须重新进行当前长尾需求、People Also Ask、相关搜索、竞品与 YouTube 资料调研，再将候选词标记为 `keep`、`ignore`、`watch` 或 `localize_later`，并据此决定实际页面、实体命名和路由；不预设 `codes`、`tier list` 或数据库页面。

## 目标文件与命名空间

- 计划 PRD：`docs/gurei-wiki-prd-and-implementation-plan.md`
- 目标数据层：`src/data/gurei/`
- 目标 App Router 路由组：`src/app/[locale]/(gurei)/`
- 目标组件命名空间：`src/components/gurei/`
- 目标静态资源命名空间：`public/gurei/`

## 确认后的开发范围

1. 基于当前搜索需求、Steam 官方资料与官方渠道、可靠竞品和 YouTube 攻略，编写关键词矩阵、竞品基准和 PRD。
2. 将复制的模板彻底迁移为只服务 Gurei 的英文攻略站，按资料厚度决定首发页面数量，不为凑数制造空页面。
3. 根据已核验需求决定是否建设 beginner、walkthrough、boss order、Kami、abilities、combat、secrets、demo/full-version differences、system requirements、review 或其他页面；不得机械保留模板栏目。
4. 首页、分类枢纽、攻略详情、侧边 Wiki 导航、移动端 Wiki 菜单、相关链接、法律页面、sitemap、robots 和 manifest 均使用 Gurei 专属内容与元数据，并对随版本更新变化的系统与数值标注核验时间。
5. 完成模板迁移残留检查、lint、TypeScript、构建和浏览器预览 QA；未请求广告，因此确认后移除一切继承的 Adsterra 配置与文件。
6. 验证完成后创建并推送 GitHub 仓库 `gurei`，部署同名 Cloudflare Worker，绑定 `gurei.wiki` 与 `www.gurei.wiki`，以 `www` 为 canonical，并在权限允许时配置 GitHub 自动构建和 GA4。
7. 创建并验证 GSC Domain Property `sc-domain:gurei.wiki`，通过 Cloudflare apex DNS TXT 验证，提交完整 sitemap，并同步 GA-GTM 注册信息。
8. 按 `wiki-site-builder` 流程将站点幂等注册到 Shipmanager；第二个核心链接必须从实际实现且需求最强的 hub 中选择，不能预设为模板栏目。
